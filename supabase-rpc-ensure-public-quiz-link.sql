-- Link ile paylaşımın her zaman çalışması için RPC (RLS UPDATE yetkisi olmasa bile)
-- Supabase Dashboard > SQL Editor'da çalıştırın. Önce supabase-schema-v5-link-only-and-short.sql gerekli.

-- 1) Kolonlar ve policy yoksa ekle
alter table public.public_quizzes add column if not exists show_in_discover boolean not null default true;
alter table public.public_quizzes add column if not exists short_code text unique;
drop policy if exists "public_quizzes_update_own" on public.public_quizzes;
create policy "public_quizzes_update_own" on public.public_quizzes for update using (auth.uid() = user_id);

-- 2) RPC: Quiz'i link ile açılabilir yap; kısa kodu döndür (client RLS bypass)
create or replace function public.ensure_public_quiz_link(
  p_quiz_id uuid,
  p_show_in_discover boolean default false
) returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid;
  v_code text;
  v_chars text := 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  v_attempt int;
  v_j int;
  v_exists record;
begin
  v_uid := auth.uid();
  if v_uid is null then
    raise exception 'not_authenticated';
  end if;

  -- Quiz'in bu kullanıcıya ait olduğunu kontrol et
  if not exists (select 1 from public.quizzes where id = p_quiz_id and user_id = v_uid) then
    raise exception 'quiz_not_found_or_forbidden';
  end if;

  -- Mevcut satırda short_code var mı?
  select id, short_code into v_exists
  from public.public_quizzes
  where user_id = v_uid and quiz_id = p_quiz_id;

  if v_exists.id is not null and v_exists.short_code is not null then
    update public.public_quizzes
    set show_in_discover = p_show_in_discover
    where user_id = v_uid and quiz_id = p_quiz_id;
    return v_exists.short_code;
  end if;

  -- Yeni short_code üret (benzersiz)
  for v_attempt in 1..20 loop
    v_code := '';
    for v_j in 1..12 loop
      v_code := v_code || substr(v_chars, 1 + floor(random() * length(v_chars))::int, 1);
    end loop;
    if not exists (select 1 from public.public_quizzes where short_code = v_code) then
      insert into public.public_quizzes (user_id, quiz_id, show_in_discover, short_code)
      values (v_uid, p_quiz_id, p_show_in_discover, v_code)
      on conflict (user_id, quiz_id) do update set
        show_in_discover = excluded.show_in_discover,
        short_code = coalesce(public_quizzes.short_code, excluded.short_code);
      return v_code;
    end if;
  end loop;

  -- Nadiren 20 denemede bile çakışma olursa mevcut satırın kodunu döndür
  select short_code into v_code from public.public_quizzes where user_id = v_uid and quiz_id = p_quiz_id;
  return v_code;
end;
$$;

grant execute on function public.ensure_public_quiz_link(uuid, boolean) to authenticated;
