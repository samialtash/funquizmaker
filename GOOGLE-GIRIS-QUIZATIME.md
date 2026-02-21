# Google ile giriş – quizatime.com’a güncelleme

Kod tarafında Google OAuth artık giriş sonrası **quizatime.com** adresine yönlendiriyor (`redirectTo`). Aşağıdaki iki yerde de domain’i quizatime.com olacak şekilde güncellemeniz gerekiyor.

---

## 1. Supabase Dashboard

1. [Supabase](https://supabase.com/dashboard) → projenizi seçin.
2. **Authentication** → **URL Configuration** bölümüne girin.

Şunları ayarlayın:

| Ayar | Değer |
|------|--------|
| **Site URL** | `https://quizatime.com` |
| **Redirect URLs** | Listede mutlaka şunlar olsun: `https://quizatime.com/**` ve `https://quizatime.com` |

Eski domain’i (varsa) Redirect URLs listesinden kaldırabilirsiniz; artık sadece quizatime.com kullanılacak.

---

## 2. Google Cloud Console (OAuth client)

1. [Google Cloud Console](https://console.cloud.google.com/) → ilgili proje.
2. **APIs & Services** → **Credentials**.
3. Supabase için kullandığınız **OAuth 2.0 Client ID**’ye tıklayın (Web application tipinde olan).

Şunları güncelleyin:

| Ayar | Ne yapmalı |
|------|-------------|
| **Authorized JavaScript origins** | `https://quizatime.com` ekleyin. Eski domain varsa silebilir veya quizatime.com ile değiştirin. |
| **Authorized redirect URIs** | Burada **Supabase’in callback adresi** durmalı: `https://hiyjgxalrecfoydshlgj.supabase.co/auth/v1/callback` (zaten varsa dokunmayın). Bu adres domain değişince de aynı kalır. |

Kaydedin.

---

## Özet

- **Supabase:** Site URL = `https://quizatime.com`, Redirect URLs’de `https://quizatime.com` ve `https://quizatime.com/**`.
- **Google Cloud:** Authorized JavaScript origins’e `https://quizatime.com` ekleyin; redirect URI olarak Supabase callback’i kalsın.

Bu ayarlardan sonra Google ile giriş quizatime.com üzerinden çalışır; giriş sonrası kullanıcı yine quizatime.com’da kalır.
