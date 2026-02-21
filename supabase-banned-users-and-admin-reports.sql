-- Banned users (admin profilde "Kullanıcıyı banla") + admin'ın tüm raporları görmesi
-- Supabase Dashboard > SQL Editor'da çalıştırın.

-- Banlanan kullanıcılar (admin tarafından)
create table if not exists public.banned_users (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  banned_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id)
);
alter table public.banned_users enable row level security;

-- Sadece admin banlayabilir (nickname = 'Sami17')
create policy "banned_users_insert_admin" on public.banned_users
  for insert with check (
    (select nickname from public.profiles where id = auth.uid()) = 'Sami17'
  );
create policy "banned_users_select_admin" on public.banned_users
  for select using (
    (select nickname from public.profiles where id = auth.uid()) = 'Sami17'
  );

-- Admin tüm quiz_reports kayıtlarını görebilsin (raporlanan quizler sayfası)
create policy "quiz_reports_select_admin" on public.quiz_reports
  for select using (
    (select nickname from public.profiles where id = auth.uid()) = 'Sami17'
  );
