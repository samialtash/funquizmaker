-- Quiz raporları (keşfet kartından "Rapor et")
-- Supabase Dashboard > SQL Editor'da çalıştırın.

create table if not exists public.quiz_reports (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reason text,
  created_at timestamptz default now()
);
alter table public.quiz_reports enable row level security;
create policy "quiz_reports_insert_own" on public.quiz_reports for insert with check (auth.uid() = reporter_id);
create policy "quiz_reports_select_own" on public.quiz_reports for select using (auth.uid() = reporter_id);
