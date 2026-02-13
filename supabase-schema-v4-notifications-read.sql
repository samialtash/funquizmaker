-- QuizApp v4: Bildirimler için quiz_shared_to okundu işareti
-- Supabase SQL Editor'da çalıştırın.

alter table public.quiz_shared_to add column if not exists read_at timestamptz;
create policy "quiz_shared_to_update_to_user" on public.quiz_shared_to for update using (auth.uid() = to_user_id);
