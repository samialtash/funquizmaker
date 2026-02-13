-- QuizApp v2: Arkadaşlık, profil avatar, quiz paylaşımı (arkadaşa + herkese açık)
-- Supabase Dashboard > SQL Editor'da mevcut şemadan sonra bu script'i çalıştırın.

-- 1) profiles'a avatar_url ekle
alter table public.profiles add column if not exists avatar_url text;

-- 2) Arkadaşlık istekleri
create table if not exists public.friend_requests (
  id uuid primary key default gen_random_uuid(),
  from_user_id uuid not null references auth.users(id) on delete cascade,
  to_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','accepted','rejected')),
  created_at timestamptz default now(),
  unique(from_user_id, to_user_id)
);
alter table public.friend_requests enable row level security;
create policy "friend_requests_own" on public.friend_requests for all using (auth.uid() = from_user_id or auth.uid() = to_user_id);

-- 3) Arkadaşlıklar (kabul edilince her iki yön için bir satır)
create table if not exists public.friendships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  friend_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, friend_id),
  check (user_id != friend_id)
);
alter table public.friendships enable row level security;
create policy "friendships_own" on public.friendships for all using (auth.uid() = user_id or auth.uid() = friend_id);

-- 4) Quiz arkadaşa paylaşım
create table if not exists public.quiz_shared_to (
  id uuid primary key default gen_random_uuid(),
  from_user_id uuid not null references auth.users(id) on delete cascade,
  to_user_id uuid not null references auth.users(id) on delete cascade,
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  created_at timestamptz default now()
);
alter table public.quiz_shared_to enable row level security;
create policy "quiz_shared_to_insert_own" on public.quiz_shared_to for insert with check (auth.uid() = from_user_id);
create policy "quiz_shared_to_select_own" on public.quiz_shared_to for select using (auth.uid() = from_user_id or auth.uid() = to_user_id);

-- 5) Herkese açık quiz (Profilinde Paylaş)
create table if not exists public.public_quizzes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, quiz_id)
);
alter table public.public_quizzes enable row level security;
create policy "public_quizzes_insert_own" on public.public_quizzes for insert with check (auth.uid() = user_id);
create policy "public_quizzes_select_all" on public.public_quizzes for select using (true);
create policy "public_quizzes_delete_own" on public.public_quizzes for delete using (auth.uid() = user_id);

-- 5b) Giriş sayısı (keşfet / link ile açılış)
alter table public.public_quizzes add column if not exists view_count int not null default 0;
create or replace function public.increment_public_quiz_view(pid uuid) returns void language plpgsql security definer set search_path = public as $$
begin
  update public.public_quizzes set view_count = view_count + 1 where id = pid;
end;
$$;
grant execute on function public.increment_public_quiz_view(uuid) to anon, authenticated;

-- 6) Quiz okuma: kendi quizlerin + sana paylaşılanlar + herkese açık olanlar
drop policy if exists "quizzes_select_own" on public.quizzes;
create policy "quizzes_select_own" on public.quizzes for select using (
  auth.uid() = user_id
  or exists (select 1 from public.quiz_shared_to s where s.quiz_id = quizzes.id and s.to_user_id = auth.uid())
  or exists (select 1 from public.public_quizzes p where p.quiz_id = quizzes.id)
);

-- 7) Profilleri giriş yapan herkes okuyabilsin (nickname ile arama için)
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_authenticated" on public.profiles for select using (auth.uid() is not null);

-- 8) Avatar için storage bucket (Supabase Dashboard > Storage'ta da oluşturabilirsiniz)
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true) on conflict (id) do nothing;
create policy "avatars_public_read" on storage.objects for select using (bucket_id = 'avatars');
create policy "avatars_own_upload" on storage.objects for insert with check (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);
create policy "avatars_own_update" on storage.objects for update using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);
create policy "avatars_own_delete" on storage.objects for delete using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);
