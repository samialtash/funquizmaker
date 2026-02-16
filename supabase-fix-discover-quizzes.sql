-- KEŞFET İÇİN ZORUNLU: Giriş yapmadan / başka hesapla quizlerin listelenmesi ve tıklanınca açılması
-- Supabase Dashboard > SQL Editor > New query > yapıştır > Run
-- (public_quizzes ve quiz_shared_to tabloları schema v2 ile oluşturulmuş olmalı)

-- 1) public_quizzes: herkes (anon dahil) okuyabilsin – keşfet listesi + link ile açılan quizler (#/play/short/XXX)
--    Bu policy OLMADAN link açan kişi "Link geçersiz veya süresi dolmuş" görür.
drop policy if exists "public_quizzes_select_all" on public.public_quizzes;
create policy "public_quizzes_select_all" on public.public_quizzes for select using (true);

-- 2) quizzes: kendi quizlerin + sana paylaşılanlar + herkese açık (public_quizzes'ta olan) quizler okunabilsin
--    Bu sayede keşfet listesi dolar VE tıklanınca quiz detayı (name, description, questions) okunabilir
drop policy if exists "quizzes_select_own" on public.quizzes;
create policy "quizzes_select_own" on public.quizzes for select using (
  auth.uid() = user_id
  or exists (select 1 from public.quiz_shared_to s where s.quiz_id = quizzes.id and s.to_user_id = auth.uid())
  or exists (select 1 from public.public_quizzes p where p.quiz_id = quizzes.id)
);

-- 3) quiz_ratings: keşfet sayfasında puan ortalaması görünsün diye herkes okuyabilsin
drop policy if exists "quiz_ratings_select" on public.quiz_ratings;
create policy "quiz_ratings_select" on public.quiz_ratings for select using (true);
