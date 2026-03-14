-- 1) Quiz raporları tablosu (yoksa oluştur) + 2) Banned users + 3) Admin'ın tüm raporları görmesi
-- Supabase Dashboard > SQL Editor'da tek seferde çalıştırın.

-- Quiz raporları (keşfet kartından "Rapor et")
create table if not exists public.quiz_reports (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reason text,
  created_at timestamptz default now()
);
alter table public.quiz_reports enable row level security;

-- İlk kurulumda politikalar yoksa ekle (zaten varsa hata vermemek için drop if exists)
drop policy if exists "quiz_reports_insert_own" on public.quiz_reports;
create policy "quiz_reports_insert_own" on public.quiz_reports for insert with check (auth.uid() = reporter_id);

drop policy if exists "quiz_reports_select_own" on public.quiz_reports;
create policy "quiz_reports_select_own" on public.quiz_reports for select using (auth.uid() = reporter_id);

-- Admin tüm quiz_reports kayıtlarını görebilsin (raporlanan quizler sayfası)
drop policy if exists "quiz_reports_select_admin" on public.quiz_reports;
create policy "quiz_reports_select_admin" on public.quiz_reports for select using (
  (select nickname from public.profiles where id = auth.uid()) = 'Sami17'
);

-- Banlanan kullanıcılar (admin profilde "Kullanıcıyı banla")
create table if not exists public.banned_users (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  banned_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id)
);
alter table public.banned_users enable row level security;

-- Sadece admin banlayabilir (nickname = 'Sami17')
drop policy if exists "banned_users_insert_admin" on public.banned_users;
create policy "banned_users_insert_admin" on public.banned_users
  for insert with check (
    (select nickname from public.profiles where id = auth.uid()) = 'Sami17'
  );
drop policy if exists "banned_users_select_admin" on public.banned_users;
create policy "banned_users_select_admin" on public.banned_users
  for select using (
    (select nickname from public.profiles where id = auth.uid()) = 'Sami17'
  );
