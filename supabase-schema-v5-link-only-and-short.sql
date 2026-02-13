-- QuizApp v5: Link-only paylaşım (keşfet'te görünmez) + kısa link
-- Supabase Dashboard > SQL Editor'da çalıştırın.

-- 1) public_quizzes: keşfet'te gösterilsin mi? (false = sadece link ile erişilebilir)
alter table public.public_quizzes add column if not exists show_in_discover boolean not null default true;

-- 2) Kısa link kodu (benzersiz; #/play/short/CODE ile açılır)
alter table public.public_quizzes add column if not exists short_code text unique;

-- 3) Kendi satırını güncelleyebilsin (short_code, show_in_discover)
drop policy if exists "public_quizzes_update_own" on public.public_quizzes;
create policy "public_quizzes_update_own" on public.public_quizzes for update using (auth.uid() = user_id);
