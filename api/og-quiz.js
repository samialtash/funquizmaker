// Quiz link paylaşım önizlemesi: og:title, og:description + SPA'ya yönlendirme
// Query: code=short_code veya id=quiz_uuid
const APP_DESC = "Kendi quizlerinizi oluşturun: toplu soru yapıştırma ile yüzlerce soruyu tek seferde ekleyin, soru ve şıklara fotoğraf ekleyin. Ücretsiz, tarayıcıda çalışır.";
const QUIZ_TITLE_PREFIX = "Bulduğum Quiz'e göz at";

function escapeHtml(s) {
  if (s == null || s === "") return "";
  const t = String(s);
  return t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function fetchQuizByCode(supabaseUrl, anonKey, code) {
  const res = await fetch(
    `${supabaseUrl}/rest/v1/public_quizzes?short_code=eq.${encodeURIComponent(code)}&select=quiz_id`,
    {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        Accept: "application/json",
      },
    }
  );
  if (!res.ok) return null;
  const rows = await res.json();
  if (!rows || rows.length === 0) return null;
  const quizId = rows[0].quiz_id;
  const q = await fetchQuizById(supabaseUrl, anonKey, quizId);
  return q ? { ...q, shortCode: code } : null;
}

async function fetchQuizById(supabaseUrl, anonKey, id) {
  const res = await fetch(
    `${supabaseUrl}/rest/v1/quizzes?id=eq.${encodeURIComponent(id)}&select=id,name,description`,
    {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        Accept: "application/json",
      },
    }
  );
  if (!res.ok) return null;
  const rows = await res.json();
  return rows && rows.length > 0 ? rows[0] : null;
}

function html(origin, quiz, pathUrl) {
  const title = quiz
    ? `${QUIZ_TITLE_PREFIX} - ${quiz.name || "Quiz"}`
    : "QuizaTime - Kendi Quizlerini Yarat";
  const desc = quiz
    ? (quiz.description && quiz.description.trim() ? quiz.description.trim() : APP_DESC)
    : APP_DESC;
  const redirect = pathUrl.indexOf("/") === 0 ? origin + pathUrl : origin + "/" + pathUrl;
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(desc)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(desc)}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(desc)}" />
  <script>window.location.replace(${JSON.stringify(redirect)});</script>
</head>
<body><p>Yönlendiriliyorsunuz… <a href="${escapeHtml(redirect)}">Buradan tıklayın</a></p></body>
</html>`;
}

module.exports = async function handler(req, res) {
  const code = (req.query && req.query.code) || null;
  const id = (req.query && req.query.id) || null;
  const supabaseUrl = (process.env.SUPABASE_URL || "").replace(/\/$/, "");
  const anonKey = process.env.SUPABASE_ANON_KEY || "";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "";
  const proto = req.headers["x-forwarded-proto"] || "https";
  const origin = `${proto}://${host}`;

  let quiz = null;
  let pathUrl = "/";

  if (code) {
    if (supabaseUrl && anonKey) quiz = await fetchQuizByCode(supabaseUrl, anonKey, code);
    pathUrl = "/play/short/" + encodeURIComponent(code);
  } else if (id) {
    if (supabaseUrl && anonKey) quiz = await fetchQuizById(supabaseUrl, anonKey, id);
    pathUrl = "/play/" + encodeURIComponent(id);
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=300");
  res.status(200).send(html(origin, quiz, pathUrl));
};
