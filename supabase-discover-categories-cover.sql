-- Keşfet revizyonu: kategori, eğitim alt kategorisi, quiz kapak resmi
-- Supabase SQL Editor'da çalıştırın.

-- 1) quizzes: kapak resmi (data URL veya storage path)
alter table public.quizzes add column if not exists cover_image text;

-- 2) public_quizzes: kategori (herkese açık paylaşırken zorunlu)
alter table public.public_quizzes add column if not exists category text;
alter table public.public_quizzes add column if not exists category_sub text;

-- İsteğe bağlı: mevcut satırlara varsayılan kategori
-- update public.public_quizzes set category = 'genel' where category is null;
