-- QuizApp: Tüm Supabase şeması (revert sonrası tek seferde uygulamak için)
-- Supabase Dashboard > SQL Editor'da sırayla çalıştırın:
-- 1) Önce supabase-schema.sql (profiles, quizzes, RLS, trigger)
-- 2) Sonra bu dosya (supabase-schema-complete.sql)

-- ========== v2: Arkadaşlık, avatar, paylaşım ==========
alter table public.profiles add column if not exists avatar_url text;

create table if not exists public.friend_requests (
  id uuid primary key default gen_random_uuid(),
  from_user_id uuid not null references auth.users(id) on delete cascade,
  to_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','accepted','rejected')),
  created_at timestamptz default now(),
  unique(from_user_id, to_user_id)
);
alter table public.friend_requests enable row level security;
drop policy if exists "friend_requests_own" on public.friend_requests;
create policy "friend_requests_own" on public.friend_requests for all using (auth.uid() = from_user_id or auth.uid() = to_user_id);

create table if not exists public.friendships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  friend_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, friend_id),
  check (user_id != friend_id)
);
alter table public.friendships enable row level security;
drop policy if exists "friendships_own" on public.friendships;
create policy "friendships_own" on public.friendships for all using (auth.uid() = user_id or auth.uid() = friend_id);

create table if not exists public.quiz_shared_to (
  id uuid primary key default gen_random_uuid(),
  from_user_id uuid not null references auth.users(id) on delete cascade,
  to_user_id uuid not null references auth.users(id) on delete cascade,
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  created_at timestamptz default now()
);
alter table public.quiz_shared_to enable row level security;
drop policy if exists "quiz_shared_to_insert_own" on public.quiz_shared_to;
create policy "quiz_shared_to_insert_own" on public.quiz_shared_to for insert with check (auth.uid() = from_user_id);
drop policy if exists "quiz_shared_to_select_own" on public.quiz_shared_to;
create policy "quiz_shared_to_select_own" on public.quiz_shared_to for select using (auth.uid() = from_user_id or auth.uid() = to_user_id);

create table if not exists public.public_quizzes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, quiz_id)
);
alter table public.public_quizzes enable row level security;
drop policy if exists "public_quizzes_insert_own" on public.public_quizzes;
create policy "public_quizzes_insert_own" on public.public_quizzes for insert with check (auth.uid() = user_id);
drop policy if exists "public_quizzes_select_all" on public.public_quizzes;
create policy "public_quizzes_select_all" on public.public_quizzes for select using (true);
drop policy if exists "public_quizzes_delete_own" on public.public_quizzes;
create policy "public_quizzes_delete_own" on public.public_quizzes for delete using (auth.uid() = user_id);

-- v2: Giriş sayısı (keşfet / link)
alter table public.public_quizzes add column if not exists view_count int not null default 0;
create or replace function public.increment_public_quiz_view(pid uuid) returns void language plpgsql security definer set search_path = public as $$
begin
  update public.public_quizzes set view_count = view_count + 1 where id = pid;
end;
$$;
grant execute on function public.increment_public_quiz_view(uuid) to anon, authenticated;

-- v2: Quiz okuma politikası (kendi + paylaşılan + herkese açık)
drop policy if exists "quizzes_select_own" on public.quizzes;
create policy "quizzes_select_own" on public.quizzes for select using (
  auth.uid() = user_id
  or exists (select 1 from public.quiz_shared_to s where s.quiz_id = quizzes.id and s.to_user_id = auth.uid())
  or exists (select 1 from public.public_quizzes p where p.quiz_id = quizzes.id)
);

-- v2: Profilleri giriş yapan herkes okuyabilsin
drop policy if exists "profiles_select_own" on public.profiles;
drop policy if exists "profiles_select_authenticated" on public.profiles;
create policy "profiles_select_authenticated" on public.profiles for select using (auth.uid() is not null);

-- v2: Storage avatars
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true) on conflict (id) do nothing;
drop policy if exists "avatars_public_read" on storage.objects;
create policy "avatars_public_read" on storage.objects for select using (bucket_id = 'avatars');
drop policy if exists "avatars_own_upload" on storage.objects;
create policy "avatars_own_upload" on storage.objects for insert with check (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);
drop policy if exists "avatars_own_update" on storage.objects;
create policy "avatars_own_update" on storage.objects for update using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);
drop policy if exists "avatars_own_delete" on storage.objects;
create policy "avatars_own_delete" on storage.objects for delete using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

-- ========== v3: Puanlama, nickname cooldown ==========
alter table public.profiles add column if not exists last_nickname_change timestamptz;
alter table public.profiles add column if not exists updated_at timestamptz default now();

create table if not exists public.quiz_ratings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  rating smallint not null check (rating >= 1 and rating <= 5),
  created_at timestamptz default now(),
  unique(user_id, quiz_id)
);
create index if not exists quiz_ratings_quiz_id on public.quiz_ratings(quiz_id);
alter table public.quiz_ratings enable row level security;
-- Keşfet girişsiz açıldığında ortalama puan görünsün diye select herkese açık
drop policy if exists "quiz_ratings_select" on public.quiz_ratings;
create policy "quiz_ratings_select" on public.quiz_ratings for select using (true);
drop policy if exists "quiz_ratings_insert_own" on public.quiz_ratings;
create policy "quiz_ratings_insert_own" on public.quiz_ratings for insert with check (auth.uid() = user_id);
drop policy if exists "quiz_ratings_update_own" on public.quiz_ratings;
create policy "quiz_ratings_update_own" on public.quiz_ratings for update using (auth.uid() = user_id);

-- ========== v4: Bildirim okundu ==========
alter table public.quiz_shared_to add column if not exists read_at timestamptz;
drop policy if exists "quiz_shared_to_update_to_user" on public.quiz_shared_to;
create policy "quiz_shared_to_update_to_user" on public.quiz_shared_to for update using (auth.uid() = to_user_id);
