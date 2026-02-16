-- QuizApp v3: Quiz puanlama (1-5 yıldız), profil nickname 20 günde bir değişiklik
-- Supabase Dashboard > SQL Editor'da v2 şemadan sonra bu script'i çalıştırın.

-- 1) profiles: nickname değişikliği için son değişiklik tarihi; updated_at (avatar güncellemesi için)
alter table public.profiles add column if not exists last_nickname_change timestamptz;
alter table public.profiles add column if not exists updated_at timestamptz default now();

-- 2) Quiz puanlama (paylaşılan/herkese açık quizlere 1-5 yıldız)
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
create policy "quiz_ratings_insert_own" on public.quiz_ratings for insert with check (auth.uid() = user_id);
create policy "quiz_ratings_update_own" on public.quiz_ratings for update using (auth.uid() = user_id);
