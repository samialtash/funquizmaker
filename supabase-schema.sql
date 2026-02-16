-- QuizApp: Supabase şeması
-- Supabase Dashboard > SQL Editor içinde bu script'i çalıştırın.

-- Profiller: auth.users ile 1:1, nickname saklanır
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Quizler: kullanıcıya bağlı
create table if not exists public.quizzes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text default '',
  questions jsonb not null default '[]',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.quizzes enable row level security;

-- Profiller: sadece kendi satırını okuyup güncelleyebilir
drop policy if exists "profiles_select_own" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- Quizler: sadece kendi quizlerini crud
drop policy if exists "quizzes_select_own" on public.quizzes;
drop policy if exists "quizzes_insert_own" on public.quizzes;
drop policy if exists "quizzes_update_own" on public.quizzes;
drop policy if exists "quizzes_delete_own" on public.quizzes;
create policy "quizzes_select_own" on public.quizzes for select using (auth.uid() = user_id);
create policy "quizzes_insert_own" on public.quizzes for insert with check (auth.uid() = user_id);
create policy "quizzes_update_own" on public.quizzes for update using (auth.uid() = user_id);
create policy "quizzes_delete_own" on public.quizzes for delete using (auth.uid() = user_id);

-- Kayıt sonrası profil satırı oluştur (opsiyonel: nickname user_metadata'dan alınabilir)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, nickname)
  values (new.id, coalesce(new.raw_user_meta_data->>'nickname', new.raw_user_meta_data->>'name', ''))
  on conflict (id) do update set nickname = coalesce(excluded.nickname, profiles.nickname);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
