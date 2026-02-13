// Basic quiz storage using browser localStorage
const STORAGE_KEY = "custom_quizzes_v1";
const SOUND_ENABLED_KEY = "quiz_sound_enabled_v1";
const SHUFFLE_ENABLED_KEY = "quiz_shuffle_enabled_v1";
const SHUFFLE_OPTIONS_ENABLED_KEY = "quiz_shuffle_options_enabled_v1";
const LANG_KEY = "quiz_lang_v1";

// Translations: en + tr
const translations = {
  en: {
    mainTitle: "Fun Quiz Maker",
    myQuizzes: "My Quizzes",
    playQuiz: "Play Quiz",
    createQuiz: "Create / Edit Quiz",
    searchPlaceholder: "Search quizzes",
    searchNoResults: "No results found.",
    howItWorks: "How it works",
    playQuizDesc: "My Quizzes: Choose a quiz and answer in full screen. Use the search bar above to find quizzes.",
    createQuizDesc: "Create / Edit Quiz: Paste many questions at once (e.g. 100) and the system will detect each question and its 5 options. Add photos to questions and options.",
    storedLocally: "Quizzes are stored locally in your browser (no server needed).",
    language: "Language",
    selectQuiz: "Select Quiz",
    chooseQuiz: "Choose a quiz",
    startQuiz: "Start Quiz (Full Screen)",
    randomOrder: "Random question order",
    shuffleOptions: "Shuffle option order",
    noQuizzes: "No saved quizzes.",
    back: "← Back",
    next: "Next",
    exit: "Exit",
    leave: "Leave",
    quizFinished: "Quiz Finished!",
    retryQuiz: "Retry Quiz",
    backToMenu: "Back to Main Menu",
    youScored: "You scored",
    outOf: "out of",
    editQuiz: "Create / Edit Quiz",
    editExisting: "Edit existing quiz (optional)",
    newQuiz: "New quiz",
    load: "Load",
    clear: "Clear",
    editQuizHint: "Select an existing quiz below to edit.",
    quizName: "Quiz Name",
    description: "Description (optional)",
    pasteQuestions: "Paste your questions here (supports many questions in one go)",
    formatExample: "Format example (must have 5 options A–E and an answer per question):",
    detectAdd: "Detect & Add Questions",
    saveQuiz: "Save Quiz",
    soundTurnOff: "Turn off sound",
    soundTurnOn: "Turn on sound",
    outOf100: "/ 100",
    copyFormat: "Copy format example",
    promptHint: "Paste this prompt into the AI you use to generate your questions, then copy the result here. You don't need to extract the questions—the system will detect them automatically.",
    pasteBtn: "Paste",
    pasteFailed: "Paste failed (check clipboard permission).",
    copied: "Copied!",
    fullscreen: "Full screen",
    exitFullscreen: "Exit full screen",
    settings: "Settings",
    selectLanguage: "Select language",
    languageName: "English",
    backupHint: "Backup / restore quizzes so they are not lost when you update or use another device.",
    exportBackup: "Export backup",
    importBackup: "Import backup",
    exportSuccess: "Backup downloaded.",
    importSuccess: "Quizzes restored.",
    importError: "Invalid backup file.",
    editQuestions: "Edit questions",
    editQuestionsTitle: "Questions",
    addQuestion: "Add question",
    questionText: "Question text",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    optionE: "Option E",
    correctAnswer: "Correct answer",
    delete: "Delete",
    cancel: "Cancel",
    editQuestionTitle: "Edit question",
    newQuestionTitle: "New question",
    noQuestionsInQuiz: "No questions yet. Add one below.",
    saveQuestion: "Save question",
    addManualQuestion: "Add question manually",
    manualAddHint: "Select and load a quiz first, then add questions manually.",
    giveQuizName: "Give the quiz a name",
    newQuizBtn: "New quiz",
    loadSelected: "Edit quiz",
    addQuestionsBoth: "Add questions: manual or bulk paste (both available)",
    prepareQuestions: "Prepare questions",
    pasteLabelPlaceholder: "Paste your questions here (format example shown as placeholder — click and paste over it)",
    deleteQuiz: "Delete quiz",
    areYouSure: "Are you sure?",
    deleteQuizConfirmMsg: "This quiz will be permanently deleted.",
    deleteConfirmBtn: "Delete",
    questionImageLabel: "Question image (optional)",
    removeImage: "Remove image",
    addPhoto: "Add photo",
    chooseImage: "Choose image",
    addOptionRow: "Add option",
    duplicateQuizName: "A quiz with this name already exists. Please use a different name.",
    saveQuizNoQuestions: "Add at least one question (manually or via bulk paste) before saving.",
    saveQuizSuccess: "Quiz saved with {count} question(s).",
    alertQuestionEmpty: "Please fill in the question.",
    alertOptionsEmpty: "Please fill in the options.",
    login: "Log in",
    signup: "Sign up",
    logout: "Log out",
    email: "Email",
    password: "Password",
    nickname: "Nickname (for forum)",
    discoverQuizzes: "Discover quizzes",
    loginTitle: "Log in",
    signupTitle: "Sign up",
    googleLogin: "Log in with Google",
    googleSignup: "Sign up with Google",
    noAccountSignup: "No account? Sign up",
    haveAccountLogin: "Already have an account? Log in",
    discoverTitle: "Discover quizzes",
    discoverDesc: "Coming soon: Discover and share quizzes in the forum.",
    authConfigNeeded: "Add your Supabase URL and anon key in supabase-config.js to enable login.",
    authSdkLoadFailed: "Giriş çalışmıyor: Sayfayı dosya (file://) ile değil, yerel sunucu (http://) ile açın. Örn: proje klasöründe 'npx serve' çalıştırın.",
    profileTitle: "Profile",
    uploadPhoto: "Upload photo",
    friends: "Friends",
    friendsTitle: "Friends",
    searchByNickname: "Search by nickname...",
    pendingRequests: "Pending requests",
    myFriends: "My friends",
    shareQuiz: "Share quiz",
    shareQuizTitle: "Share quiz",
    send: "Send",
    shareToProfile: "Share on profile (public)",
    discoverLoginHint: "Log in to discover and play quizzes shared by others.",
    discoverEmpty: "No public quizzes yet.",
    discoverPreviewStart: "Start quiz",
    nicknameCooldown: "You can change your nickname once every 20 days. Next change in {days} days.",
    nicknameCooldownReady: "You can change your nickname now.",
    nicknameSave: "Save",
    ratingOutOf5: "{avg}/5",
    termsLink: "Terms of Service",
    editProfile: "Edit profile",
    profileSharedQuizzes: "Quizzes shared on profile",
    addToMyQuizzes: "Add to my quizzes",
    rateThisQuiz: "Rate this quiz",
    allMessages: "See all messages",
    messages: "Messages",
    noNewNotifications: "No new notifications.",
    noMessagesYet: "No messages yet.",
  },
  tr: {
    mainTitle: "Eğlenceli Quiz Oluşturucu",
    myQuizzes: "Quizlerim",
    playQuiz: "Quiz Oyna",
    createQuiz: "Quiz Oluştur / Düzenle",
    searchPlaceholder: "Quiz ara",
    searchNoResults: "Sonuç bulunamadı.",
    howItWorks: "Nasıl çalışır",
    playQuizDesc: "Quizlerim: Quiz seçin, tam ekranda cevaplayın. Yukarıdaki arama ile quiz arayabilirsiniz.",
    createQuizDesc: "Quiz oluştur / düzenle: Toplu soru yapıştırma (örn. 100 soru) ile ekleyin; sistem soru ve 5 şıkkı otomatik algılar. Soru ve şıklara fotoğraf ekleyebilirsiniz.",
    storedLocally: "Quizler tarayıcınızda yerel saklanır (sunucu gerekmez).",
    language: "Dil",
    selectQuiz: "Quiz Seç",
    chooseQuiz: "Quiz seçin",
    startQuiz: "Quiz Başlat (Tam Ekran)",
    randomOrder: "Soruları rastgele sırala",
    shuffleOptions: "Şıkları rastgele sırala",
    noQuizzes: "Kayıtlı Quiz Yok",
    back: "← Geri",
    next: "İleri",
    exit: "Çıkış",
    leave: "Ayrıl",
    quizFinished: "Quiz Bitti!",
    retryQuiz: "Tekrar Oyna",
    backToMenu: "Ana Menüye Dön",
    youScored: "Skorunuz",
    outOf: "/",
    editQuiz: "Quiz Oluştur / Düzenle",
    editExisting: "Mevcut quizi düzenle (isteğe bağlı)",
    newQuiz: "Yeni quiz",
    load: "Yükle",
    clear: "Temizle",
    editQuizHint: "Düzenlemek için aşağıdan mevcut bir quiz seçin.",
    quizName: "Quiz Adı",
    description: "Açıklama (isteğe bağlı)",
    pasteQuestions: "Sorularınızı buraya yapıştırın (çok sayıda soru desteklenir)",
    formatExample: "Örnek format (her soru 5 seçenek A–E ve bir cevap satırı içermeli):",
    detectAdd: "Soruları Algıla ve Ekle",
    saveQuiz: "Quiz Kaydet",
    soundTurnOff: "Sesi kapat",
    soundTurnOn: "Sesi aç",
    outOf100: "100 üzerinden",
    copyFormat: "Format örneğini kopyala",
    promptHint: "Soruları hazırlayacağınız yapay zekaya bu promptu yapıştırarak hazırlatıp buraya kopyalatabilirsiniz. Soruları ayıklamanıza gerek yok sistem soruları otomatik algılayacaktır.",
    pasteBtn: "Yapıştır",
    pasteFailed: "Yapıştırılamadı (pano iznini kontrol edin).",
    copied: "Kopyalandı!",
    fullscreen: "Tam ekran",
    exitFullscreen: "Tam ekrandan çık",
    settings: "Ayarlar",
    selectLanguage: "Dil seç",
    languageName: "Türkçe",
    backupHint: "Güncelleme veya farklı cihazda quizlerin kaybolmaması için yedekle / geri yükle.",
    exportBackup: "Yedek indir",
    importBackup: "Yedekten geri yükle",
    exportSuccess: "Yedek indirildi.",
    importSuccess: "Quizler geri yüklendi.",
    importError: "Geçersiz yedek dosyası.",
    editQuestions: "Soruları düzenle",
    editQuestionsTitle: "Sorular",
    addQuestion: "Soru ekle",
    questionText: "Soru metni",
    optionA: "A şıkkı",
    optionB: "B şıkkı",
    optionC: "C şıkkı",
    optionD: "D şıkkı",
    optionE: "E şıkkı",
    correctAnswer: "Doğru cevap",
    delete: "Sil",
    cancel: "İptal",
    editQuestionTitle: "Soruyu düzenle",
    newQuestionTitle: "Yeni soru",
    noQuestionsInQuiz: "Henüz soru yok. Aşağıdan ekleyin.",
    saveQuestion: "Soruyu kaydet",
    addManualQuestion: "Manuel soru ekle",
    manualAddHint: "Yukarıdan bir quiz seçin veya yeni quiz oluşturun, ardından ilk sorunuzu buradan ekleyin.",
    giveQuizName: "Quiz'e bir isim verin",
    newQuizBtn: "Yeni quiz",
    loadSelected: "Quiz'i düzenle",
    addQuestionsBoth: "Soruları manuel veya toplu yapıştırma ile ekleyin (ikisi de kullanılabilir)",
    prepareQuestions: "Soruları hazırla",
    pasteLabelPlaceholder: "Sorularınızı buraya yapıştırın (örnek format hayalet yazı olarak görünür — tıklayıp kendi metninizi yapıştırın)",
    deleteQuiz: "Quiz'i sil",
    areYouSure: "Emin misin?",
    deleteQuizConfirmMsg: "Bu quiz kalıcı olarak silinecek.",
    deleteConfirmBtn: "Sil",
    questionImageLabel: "Soru fotoğrafı (isteğe bağlı)",
    removeImage: "Fotoğrafı kaldır",
    addPhoto: "Fotoğraf ekle",
    chooseImage: "Dosya seç",
    addOptionRow: "Şık ekle",
    duplicateQuizName: "Bu isimde bir quiz zaten var. Lütfen farklı bir isim kullanın.",
    saveQuizNoQuestions: "Kaydetmeden önce en az bir soru ekleyin (manuel veya toplu yapıştırma ile).",
    saveQuizSuccess: "Quiz {count} soru ile kaydedildi.",
    alertQuestionEmpty: "Lütfen soru kısmını doldurunuz.",
    alertOptionsEmpty: "Lütfen şıkları doldurunuz.",
    login: "Giriş yap",
    signup: "Kaydol",
    logout: "Çıkış yap",
    email: "E-posta",
    password: "Şifre",
    nickname: "Nickname (forumda görünecek)",
    discoverQuizzes: "Quizleri keşfet",
    loginTitle: "Giriş yap",
    signupTitle: "Kaydol",
    googleLogin: "Google ile giriş yap",
    googleSignup: "Google ile kaydol",
    noAccountSignup: "Hesabınız yok mu? Kaydol",
    haveAccountLogin: "Zaten hesabınız var mı? Giriş yap",
    discoverTitle: "Quizleri keşfet",
    discoverDesc: "Yakında: Forumdan başkalarının quizlerini keşfedin ve kendi quizlerinizi paylaşın.",
    authConfigNeeded: "Giriş için supabase-config.js dosyasına Supabase URL ve anon key ekleyin.",
    authSdkLoadFailed: "Giriş çalışmıyor: Sayfayı dosya (file://) ile değil, yerel sunucu (http://) ile açın. Örn: proje klasöründe 'npx serve' çalıştırın.",
    profileTitle: "Profil",
    uploadPhoto: "Fotoğraf yükle",
    friends: "Arkadaşlar",
    friendsTitle: "Arkadaşlar",
    searchByNickname: "Nickname ile ara...",
    pendingRequests: "Bekleyen istekler",
    myFriends: "Arkadaşlarım",
    shareQuiz: "Quiz'i Paylaş",
    shareQuizTitle: "Quiz'i Paylaş",
    send: "Gönder",
    shareToProfile: "Profilinde Paylaş (herkese açık)",
    discoverLoginHint: "Başkalarının paylaştığı quizleri keşfetmek ve oynamak için giriş yapın.",
    discoverEmpty: "Henüz herkese açık quiz yok.",
    discoverPreviewStart: "Quiz'i Başlat",
    nicknameCooldown: "Nickname'i 20 günde bir değiştirebilirsiniz. Sonraki değişiklik: {days} gün sonra.",
    nicknameCooldownReady: "Nickname'i şimdi değiştirebilirsiniz.",
    nicknameSave: "Kaydet",
    ratingOutOf5: "{avg}/5",
    termsLink: "Kullanıcı Sözleşmesi",
    editProfile: "Profili düzenle",
    profileSharedQuizzes: "Profilinde paylaşılan quizler",
    addToMyQuizzes: "Quizlerime ekle",
    rateThisQuiz: "Quizi puanla",
    allMessages: "Bütün mesajları gör",
    messages: "Mesajlar",
    noNewNotifications: "Yeni bildirim yok.",
    noMessagesYet: "Henüz mesaj yok.",
  },
  es: { languageName: "Español", mainTitle: "Creador de Quiz Divertido", myQuizzes: "Mis Quizzes", createQuiz: "Crear / Editar Quiz", back: "← Atrás", settings: "Ajustes", language: "Idioma", selectLanguage: "Elegir idioma", selectQuiz: "Seleccionar Quiz", startQuiz: "Iniciar Quiz (Pantalla completa)", noQuizzes: "Sin quizzes guardados.", howItWorks: "Cómo funciona", storedLocally: "Los quizzes se guardan en tu navegador (sin servidor).", searchPlaceholder: "Buscar quizzes", searchNoResults: "No se encontraron resultados.", next: "Siguiente", exit: "Salir", leave: "Salir", quizFinished: "¡Quiz terminado!", retryQuiz: "Reintentar", backToMenu: "Volver al menú", fullscreen: "Pantalla completa", exitFullscreen: "Salir de pantalla completa" },
  zh: { languageName: "中文", mainTitle: "趣味测验制作", myQuizzes: "我的测验", createQuiz: "创建/编辑测验", back: "← 返回", settings: "设置", language: "语言", selectLanguage: "选择语言", selectQuiz: "选择测验", startQuiz: "开始测验（全屏）", noQuizzes: "暂无已保存测验。", howItWorks: "如何使用", storedLocally: "测验保存在您的浏览器中（无需服务器）。", searchPlaceholder: "搜索测验", searchNoResults: "未找到结果。", next: "下一步", exit: "退出", leave: "离开", quizFinished: "测验结束！", retryQuiz: "再试一次", backToMenu: "返回主菜单", fullscreen: "全屏", exitFullscreen: "退出全屏" },
  hi: { languageName: "हिन्दी", mainTitle: "मजेदार क्विज निर्माता", myQuizzes: "मेरे क्विज", createQuiz: "क्विज बनाएं / संपादित करें", back: "← वापस", settings: "सेटिंग्स", language: "भाषा", selectLanguage: "भाषा चुनें", selectQuiz: "क्विज चुनें", startQuiz: "क्विज शुरू करें (पूर्ण स्क्रीन)", noQuizzes: "कोई सहेजे गए क्विज नहीं।", howItWorks: "कैसे काम करता है", storedLocally: "क्विज आपके ब्राउज़र में सहेजे जाते हैं (सर्वर की जरूरत नहीं)।", searchPlaceholder: "क्विज खोजें", searchNoResults: "कोई परिणाम नहीं मिला।", next: "अगला", exit: "बाहर निकलें", leave: "छोड़ें", quizFinished: "क्विज समाप्त!", retryQuiz: "दोबारा खेलें", backToMenu: "मुख्य मेनू पर वापस", fullscreen: "पूर्ण स्क्रीन", exitFullscreen: "पूर्ण स्क्रीन से बाहर" },
  ar: { languageName: "العربية", mainTitle: "صانع اختبارات ممتع", myQuizzes: "اختباراتي", createQuiz: "إنشاء / تعديل اختبار", back: "← رجوع", settings: "الإعدادات", language: "اللغة", selectLanguage: "اختر اللغة", selectQuiz: "اختر اختباراً", startQuiz: "بدء الاختبار (ملء الشاشة)", noQuizzes: "لا توجد اختبارات محفوظة.", howItWorks: "كيف يعمل", storedLocally: "الاختبارات تُحفظ في متصفحك (لا حاجة لخادم).", searchPlaceholder: "البحث عن اختبارات", searchNoResults: "لم يتم العثور على نتائج.", next: "التالي", exit: "خروج", leave: "مغادرة", quizFinished: "انتهى الاختبار!", retryQuiz: "إعادة المحاولة", backToMenu: "العودة للقائمة", fullscreen: "ملء الشاشة", exitFullscreen: "الخروج من ملء الشاشة" },
  pt: { languageName: "Português", mainTitle: "Criador de Quiz Divertido", myQuizzes: "Meus Quizzes", createQuiz: "Criar / Editar Quiz", back: "← Voltar", settings: "Configurações", language: "Idioma", selectLanguage: "Selecionar idioma", selectQuiz: "Selecionar Quiz", startQuiz: "Iniciar Quiz (Tela cheia)", noQuizzes: "Nenhum quiz salvo.", howItWorks: "Como funciona", storedLocally: "Os quizzes são salvos no seu navegador (sem servidor).", searchPlaceholder: "Pesquisar quizzes", searchNoResults: "Nenhum resultado encontrado.", next: "Próximo", exit: "Sair", leave: "Sair", quizFinished: "Quiz finalizado!", retryQuiz: "Tentar novamente", backToMenu: "Voltar ao menu", fullscreen: "Tela cheia", exitFullscreen: "Sair da tela cheia" },
  ru: { languageName: "Русский", mainTitle: "Создатель викторин", myQuizzes: "Мои викторины", createQuiz: "Создать / Редактировать викторину", back: "← Назад", settings: "Настройки", language: "Язык", selectLanguage: "Выбрать язык", selectQuiz: "Выбрать викторину", startQuiz: "Начать викторину (полный экран)", noQuizzes: "Нет сохранённых викторин.", howItWorks: "Как это работает", storedLocally: "Викторины сохраняются в браузере (сервер не нужен).", searchPlaceholder: "Поиск викторин", searchNoResults: "Ничего не найдено.", next: "Далее", exit: "Выход", leave: "Выйти", quizFinished: "Викторина завершена!", retryQuiz: "Повторить", backToMenu: "В главное меню", fullscreen: "Полный экран", exitFullscreen: "Выйти из полного экрана" },
  ja: { languageName: "日本語", mainTitle: "楽しいクイズメーカー", myQuizzes: "マイクイズ", createQuiz: "クイズを作成/編集", back: "← 戻る", settings: "設定", language: "言語", selectLanguage: "言語を選択", selectQuiz: "クイズを選択", startQuiz: "クイズを開始（全画面）", noQuizzes: "保存されたクイズはありません。", howItWorks: "使い方", storedLocally: "クイズはブラウザに保存されます（サーバー不要）。", searchPlaceholder: "クイズを検索", searchNoResults: "結果が見つかりません。", next: "次へ", exit: "終了", leave: "終了", quizFinished: "クイズ終了！", retryQuiz: "もう一度", backToMenu: "メインメニューに戻る", fullscreen: "全画面", exitFullscreen: "全画面を終了" },
  fr: { languageName: "Français", mainTitle: "Créateur de quiz amusant", myQuizzes: "Mes quiz", createQuiz: "Créer / Modifier un quiz", back: "← Retour", settings: "Paramètres", language: "Langue", selectLanguage: "Choisir la langue", selectQuiz: "Choisir un quiz", startQuiz: "Démarrer le quiz (plein écran)", noQuizzes: "Aucun quiz enregistré.", howItWorks: "Comment ça marche", storedLocally: "Les quiz sont enregistrés dans votre navigateur (pas de serveur).", searchPlaceholder: "Rechercher des quiz", searchNoResults: "Aucun résultat trouvé.", next: "Suivant", exit: "Quitter", leave: "Quitter", quizFinished: "Quiz terminé !", retryQuiz: "Réessayer", backToMenu: "Retour au menu", fullscreen: "Plein écran", exitFullscreen: "Quitter le plein écran" },
  de: { languageName: "Deutsch", mainTitle: "Lustiger Quiz-Macher", myQuizzes: "Meine Quiz", createQuiz: "Quiz erstellen / bearbeiten", back: "← Zurück", settings: "Einstellungen", language: "Sprache", selectLanguage: "Sprache wählen", selectQuiz: "Quiz auswählen", startQuiz: "Quiz starten (Vollbild)", noQuizzes: "Keine gespeicherten Quiz.", howItWorks: "So funktioniert's", storedLocally: "Quiz werden im Browser gespeichert (kein Server nötig).", searchPlaceholder: "Quiz suchen", searchNoResults: "Keine Ergebnisse gefunden.", next: "Weiter", exit: "Beenden", leave: "Verlassen", quizFinished: "Quiz beendet!", retryQuiz: "Nochmal", backToMenu: "Zum Hauptmenü", fullscreen: "Vollbild", exitFullscreen: "Vollbild beenden" },
  ko: { languageName: "한국어", mainTitle: "재미있는 퀴즈 메이커", myQuizzes: "내 퀴즈", createQuiz: "퀴즈 만들기 / 편집", back: "← 뒤로", settings: "설정", language: "언어", selectLanguage: "언어 선택", selectQuiz: "퀴즈 선택", startQuiz: "퀴즈 시작 (전체 화면)", noQuizzes: "저장된 퀴즈가 없습니다.", howItWorks: "사용 방법", storedLocally: "퀴즈는 브라우저에 저장됩니다 (서버 불필요).", searchPlaceholder: "퀴즈 검색", searchNoResults: "결과를 찾을 수 없습니다.", next: "다음", exit: "종료", leave: "나가기", quizFinished: "퀴즈 완료!", retryQuiz: "다시 하기", backToMenu: "메인 메뉴로", fullscreen: "전체 화면", exitFullscreen: "전체 화면 종료" },
};

/** Supported language codes (for lang select view and system detection) */
const SUPPORTED_LANG_CODES = ["en", "tr", "es", "zh", "hi", "ar", "pt", "ru", "ja", "fr", "de", "ko"];

/** Supabase auth: config from supabase-config.js (window.SUPABASE_URL, window.SUPABASE_ANON_KEY) */
let supabaseClient = null;
let currentAuthUser = null;

function initSupabase() {
  const url = (typeof window !== "undefined" && window.SUPABASE_URL) ? String(window.SUPABASE_URL).trim() : "";
  const key = (typeof window !== "undefined" && window.SUPABASE_ANON_KEY) ? String(window.SUPABASE_ANON_KEY).trim() : "";
  if (!url || !key) return;
  if (typeof window.supabase === "undefined") return;
  try {
    supabaseClient = window.supabase.createClient(url, key);
    supabaseClient.auth.onAuthStateChange((event, session) => {
      currentAuthUser = session?.user ?? null;
      if (event === "SIGNED_IN" && session) {
        ensureProfileNicknameAfterSignIn(session).then(() => {
          fetchUserQuizzes().then(() => {
            refreshQuizSelect();
            refreshEditQuizSelect();
          });
        });
      } else if (event === "SIGNED_OUT") {
        loadQuizzes();
        refreshQuizSelect();
        refreshEditQuizSelect();
      }
      updateAuthUI();
    });
  } catch (e) {
    console.warn("Supabase init failed", e);
  }
}
initSupabase();

const NICKNAME_COOLDOWN_DAYS = 20;

async function ensureProfileNicknameAfterSignIn(session) {
  if (!session?.user || !supabaseClient) return;
  const u = session.user;
  const { data: profile } = await supabaseClient.from("profiles").select("nickname").eq("id", u.id).single();
  const existing = profile?.nickname?.trim();
  if (existing) return;
  const nick = (u.user_metadata?.full_name || u.user_metadata?.name || u.user_metadata?.nickname || (u.email && u.email.split("@")[0]) || "").trim().slice(0, 50);
  if (!nick) return;
  await supabaseClient.from("profiles").upsert({ id: u.id, nickname: nick }, { onConflict: "id" });
}

function updateAuthUI() {
  const guest = document.getElementById("main-menu-auth");
  const logged = document.getElementById("main-menu-auth-logged-in");
  const nicknameEl = document.getElementById("auth-nickname");
  if (!guest || !logged) return;
  if (currentAuthUser) {
    guest.classList.add("hidden");
    logged.classList.remove("hidden");
    const fallbackNick = (currentAuthUser.user_metadata?.nickname || currentAuthUser.user_metadata?.name || currentAuthUser.email?.split("@")[0] || "").trim() || currentAuthUser.email || "";
    if (nicknameEl) nicknameEl.textContent = fallbackNick;
    if (supabaseClient) {
      supabaseClient.from("profiles").select("nickname").eq("id", currentAuthUser.id).single().then(({ data: p }) => {
        const nick = (p?.nickname || "").trim() || fallbackNick;
        if (nicknameEl) nicknameEl.textContent = nick || currentAuthUser?.email || "";
      }).catch(() => {});
      updateNotificationBadge();
    }
  } else {
    guest.classList.remove("hidden");
    logged.classList.add("hidden");
  }
}

async function fetchUserQuizzes() {
  if (!supabaseClient || !currentAuthUser) return;
  try {
    const { data: ownData, error } = await supabaseClient.from("quizzes").select("id,name,description,questions").eq("user_id", currentAuthUser.id).order("created_at", { ascending: false });
    if (error) throw error;
    quizzes = (ownData || []).map((r) => ({ id: r.id, name: r.name || "", description: r.description || "", questions: Array.isArray(r.questions) ? r.questions : [] }));
    const { data: sharedRows } = await supabaseClient.from("quiz_shared_to").select("quiz_id").eq("to_user_id", currentAuthUser.id);
    if (sharedRows && sharedRows.length) {
      const ids = sharedRows.map((s) => s.quiz_id).filter(Boolean);
      const { data: sharedQuizzes } = await supabaseClient.from("quizzes").select("id,name,description,questions").in("id", ids);
      if (sharedQuizzes) for (const r of sharedQuizzes) quizzes.push({ id: r.id, name: (r.name || "") + " (paylaşılan)", description: r.description || "", questions: Array.isArray(r.questions) ? r.questions : [] });
    }
  } catch (e) {
    console.warn("fetchUserQuizzes failed", e);
    quizzes = [];
  }
}

async function saveQuizToCloud(quiz) {
  if (!supabaseClient || !currentAuthUser) return;
  const row = { user_id: currentAuthUser.id, name: quiz.name, description: quiz.description || "", questions: quiz.questions || [] };
  const isUuid = (id) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id));
  try {
    if (quiz.id && isUuid(quiz.id)) {
      await supabaseClient.from("quizzes").update(row).eq("id", quiz.id).eq("user_id", currentAuthUser.id);
    } else {
      const { data, error } = await supabaseClient.from("quizzes").insert(row).select("id").single();
      if (error) throw error;
      if (data?.id) quiz.id = data.id;
    }
  } catch (e) {
    console.warn("saveQuizToCloud failed", e);
    throw e;
  }
}

/**
 * Quiz structure:
 * {
 *   id: string,
 *   name: string,
 *   description: string,
 *   questions: [
 *     {
 *       text: string,
 *       image?: string (base64 data URL, optional),
 *       options: [string | { text, image? }, ...] (5 items),
 *       correctIndex: number (0-4)
 *     }
 *   ]
 * }
 */

const IMAGE_MAX_WIDTH = 800;
const IMAGE_MAX_HEIGHT = 600;
const IMAGE_QUALITY = 0.82;

function resizeImageToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let w = img.width;
      let h = img.height;
      if (w > IMAGE_MAX_WIDTH || h > IMAGE_MAX_HEIGHT) {
        const r = Math.min(IMAGE_MAX_WIDTH / w, IMAGE_MAX_HEIGHT / h);
        w = Math.round(w * r);
        h = Math.round(h * r);
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      try {
        const dataUrl = canvas.toDataURL("image/jpeg", IMAGE_QUALITY);
        resolve(dataUrl);
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image load failed"));
    };
    img.src = url;
  });
}

const OPTION_LETTERS = ["a", "b", "c", "d", "e"];
const MIN_OPTIONS = 2;
const MAX_OPTIONS = 5;

let editFormQuestionImage = null;
let editFormOptionImages = [null, null];

let quizzes = [];
let currentQuiz = null;
let currentQuestionIndex = 0;
let currentQuestionOrder = [];
let currentScore = 0;
let lastRunQuizId = null;
let lastPlayedQuizFromShared = false;
let chatWithUserId = null;
const MESSAGES_PER_PAGE = 10;
let messagesListCurrentPage = 0;
let soundEnabled = true;
let shuffleEnabled = false;
let shuffleOptionsEnabled = false;
let editingQuizId = null;
let currentLang = "en";
let currentQuizForEdit = null;
let currentQuestionEditIndex = -1;
let fromCreateQuizPage = false;
let lastAddedQuestionIndex = -1;
let mainPageSearchQuery = "";

const FORMAT_EXAMPLE_PLACEHOLDER = `1) What is 2 + 2?
A) 3
B) 4
C) 5
D) 6
E) 7
Answer: B

2. Capital of France?
A) Berlin
B) Madrid
C) Rome
D) Paris
E) London
Answer: D`;

// DOM references
const views = {
  mainMenu: document.getElementById("main-menu"),
  settings: document.getElementById("settings-view"),
  langSelect: document.getElementById("lang-select-view"),
  discover: document.getElementById("discover-view"),
  profile: document.getElementById("profile-view"),
  profileEdit: document.getElementById("profile-edit-view"),
  friends: document.getElementById("friends-view"),
  messagesList: document.getElementById("messages-list-view"),
  chat: document.getElementById("chat-view"),
  quizSelect: document.getElementById("quiz-select-view"),
  quizQuestionsList: document.getElementById("quiz-questions-list-view"),
  quizQuestionEdit: document.getElementById("quiz-question-edit-view"),
  quizView: document.getElementById("quiz-view"),
  quizFinished: document.getElementById("quiz-finished-view"),
  createQuiz: document.getElementById("create-quiz-view"),
  quizEditQuestions: document.getElementById("quiz-edit-questions-view")
};

const playQuizBtn = document.getElementById("play-quiz-btn");
const createQuizBtn = document.getElementById("create-quiz-btn");

const QUIZ_PER_PAGE = 5;
let quizSelectCurrentPage = 0;
let editQuizListCurrentPage = 0;
let selectedPlayQuizId = "";
let selectedEditQuizId = "";

const quizSelectWrapEl = document.getElementById("quiz-select-wrap");
const quizSelectStripEl = document.getElementById("quiz-select-strip");
const quizSelectPaginationEl = document.getElementById("quiz-select-pagination");
const startQuizBtn = document.getElementById("start-quiz-btn");
const noQuizMsg = document.getElementById("no-quiz-msg");

const quizViewEl = document.getElementById("quiz-view");
const correctSoundEl = document.getElementById("correct-sound");
const incorrectSoundEl = document.getElementById("incorrect-sound");

const quizTitleEl = document.getElementById("quiz-title");
const quizProgressEl = document.getElementById("quiz-progress");
const quizScoreEl = document.getElementById("quiz-score");
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const nextQuestionBtn = document.getElementById("next-question-btn");
const exitQuizBtn = document.getElementById("exit-quiz-btn");
const vfxLayerEl = document.getElementById("vfx-layer");

const finalScoreTextEl = document.getElementById("final-score-text");
const retryQuizBtn = document.getElementById("retry-quiz-btn");

const quizNameInput = document.getElementById("quiz-name-input");
const quizDescriptionInput = document.getElementById("quiz-description-input");
const bulkInput = document.getElementById("bulk-input");
const parseQuestionsBtn = document.getElementById("parse-questions-btn");
const parseStatusEl = document.getElementById("parse-status");
const parsedQuestionsSummaryEl = document.getElementById(
  "parsed-questions-summary"
);
const saveQuizBtn = document.getElementById("save-quiz-btn");
const editQuizWrapEl = document.getElementById("edit-quiz-wrap");
const editQuizStripEl = document.getElementById("edit-quiz-strip");
const editQuizPaginationEl = document.getElementById("edit-quiz-pagination");
const loadEditQuizBtn = document.getElementById("load-edit-quiz-btn");
const newQuizBtn = document.getElementById("new-quiz-btn");
const newQuizNameModal = document.getElementById("new-quiz-name-modal");
const newQuizNameInput = document.getElementById("new-quiz-name-input");
const newQuizNameOk = document.getElementById("new-quiz-name-ok");
const newQuizNameCancel = document.getElementById("new-quiz-name-cancel");
const clearEditQuizBtn = document.getElementById("clear-edit-quiz-btn");
const editQuizStatusEl = document.getElementById("edit-quiz-status");
const soundToggleBtn = document.getElementById("sound-toggle");
const shuffleToggleBtn = document.getElementById("shuffle-toggle");
const shuffleOptionsToggleBtn = document.getElementById("shuffle-options-toggle");

function isQuizNameDuplicate(name, excludeQuizId) {
  const n = (name || "").trim().toLowerCase();
  if (!n) return false;
  return quizzes.some((q) => q.id !== excludeQuizId && (q.name || "").trim().toLowerCase() === n);
}

// Utility: view switching (horizontal slide – forward = new from right, back = new from left)
function showView(name, direction) {
  const target = views[name];
  if (!target) return;
  const current = document.querySelector(".view.active");
  const isBack = direction === "back";
  if (current && current !== target) {
    const app = document.getElementById("app");
    const appHeight = app ? app.offsetHeight : 560;
    if (app) {
      app.style.overflow = "hidden";
      app.style.minHeight = appHeight + "px";
    }
    current.classList.remove("view-exit-left", "view-exit-right");
    current.classList.add(isBack ? "view-exit-right" : "view-exit-left");
    current.style.position = "absolute";
    current.style.top = "0";
    current.style.left = "0";
    current.style.width = "100%";
    current.style.right = "";

    target.style.display = "block";
    target.style.position = "absolute";
    target.style.top = "0";
    target.style.left = "0";
    target.style.width = "100%";
    target.classList.add("active");
    target.classList.remove("view-enter-from-right", "view-enter-from-left", "view-slide-in");
    target.classList.add(isBack ? "view-enter-from-left" : "view-enter-from-right");

    let done = false;
    const onDone = () => {
      if (done) return;
      done = true;
      current.removeEventListener("transitionend", onDone);
      current.style.position = "";
      current.style.top = "";
      current.style.left = "";
      current.style.width = "";
      current.classList.remove("active", "view-exit-left", "view-exit-right");
      current.style.display = "none";
      target.classList.remove("view-enter-from-right", "view-enter-from-left", "view-slide-in");
      target.style.position = "";
      target.style.top = "";
      target.style.left = "";
      target.style.width = "";
      if (app) {
        app.style.overflow = "";
        app.style.minHeight = "";
      }
    };

    current.offsetHeight;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => target.classList.add("view-slide-in"), 80);
      });
    });
    current.addEventListener("transitionend", onDone);
    target.addEventListener("transitionend", onDone);
    setTimeout(onDone, 500);
  } else {
    if (current) {
      current.classList.remove("view-exit-left", "view-exit-right");
      current.style.position = "";
      current.style.top = "";
      current.style.left = "";
      current.style.width = "";
    }
    target.classList.remove("view-enter-from-right", "view-enter-from-left", "view-slide-in");
    target.classList.add("active");
    target.style.display = "block";
    target.style.position = "";
    target.style.top = "";
    target.style.left = "";
    target.style.width = "";
  }
}

function renderPrepareQuestionsChips() {
  const wrap = document.getElementById("prepare-questions-recent-wrap");
  const list = document.getElementById("prepare-questions-recent-list");
  if (!wrap || !list) return;
  const quizId = editingQuizId || currentQuizForEdit;
  const quiz = quizId ? quizzes.find((q) => q.id === quizId) : null;
  const questions = quiz && quiz.questions ? quiz.questions : [];
  if (lastAddedQuestionIndex < 0 || lastAddedQuestionIndex >= questions.length) {
    wrap.classList.add("hidden");
    list.innerHTML = "";
    return;
  }
  const q = questions[lastAddedQuestionIndex];
  wrap.classList.remove("hidden");
  list.innerHTML = "";
  const chip = document.createElement("div");
  chip.className = "manual-question-chip";
  const text = (q.text || "").trim() || "(No text)";
  const short = text.length > 48 ? text.slice(0, 45) + "…" : text;
  chip.innerHTML = `<span class="manual-question-chip-text">${escapeHtml(short)}</span><button type="button" class="manual-question-chip-remove" aria-label="${escapeHtml(t("delete"))}">×</button>`;
  const removeBtn = chip.querySelector(".manual-question-chip-remove");
  const indexToRemove = lastAddedQuestionIndex;
  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const qz = quizzes.find((qu) => qu.id === quizId);
    if (qz && qz.questions && indexToRemove >= 0 && indexToRemove < qz.questions.length) {
      qz.questions.splice(indexToRemove, 1);
      saveQuizzes();
      lastAddedQuestionIndex = -1;
      renderPrepareQuestionsChips();
    }
  });
  list.appendChild(chip);
}

// Load / save quizzes
function loadQuizzes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      quizzes = [];
      return;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      quizzes = parsed;
    } else {
      quizzes = [];
    }
  } catch (e) {
    console.error("Failed to load quizzes", e);
    quizzes = [];
  }
}

function t(key) {
  const lang = translations[currentLang] || translations.en;
  return lang[key] != null ? lang[key] : (translations.en[key] || key);
}

function loadSettings() {
  try {
    const sfx = localStorage.getItem(SOUND_ENABLED_KEY);
    if (sfx !== null) {
      soundEnabled = sfx === "true";
    }
  } catch (e) {
    soundEnabled = true;
  }

  try {
    const shuf = localStorage.getItem(SHUFFLE_ENABLED_KEY);
    if (shuf !== null) {
      shuffleEnabled = shuf === "true";
    }
  } catch (e) {
    shuffleEnabled = false;
  }

  try {
    const shufOpt = localStorage.getItem(SHUFFLE_OPTIONS_ENABLED_KEY);
    if (shufOpt !== null) {
      shuffleOptionsEnabled = shufOpt === "true";
    }
  } catch (e) {
    shuffleOptionsEnabled = false;
  }

  try {
    const lang = localStorage.getItem(LANG_KEY);
    if (lang && SUPPORTED_LANG_CODES.includes(lang)) {
      currentLang = lang;
    } else {
      const sys = (navigator.language || navigator.userLanguage || "").toLowerCase();
      const map = { tr: "tr", en: "en", es: "es", zh: "zh", "zh-cn": "zh", "zh-tw": "zh", hi: "hi", ar: "ar", pt: "pt", "pt-br": "pt", ru: "ru", ja: "ja", fr: "fr", de: "de", ko: "ko" };
      const code = map[sys] || map[sys.split("-")[0]];
      currentLang = code && SUPPORTED_LANG_CODES.includes(code) ? code : "en";
    }
  } catch (e) {
    currentLang = "en";
  }
}

function saveQuizzes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quizzes));
  } catch (e) {
    console.error("Failed to save quizzes", e);
  }
}

function exportQuizzesBackup() {
  const data = { version: 1, quizzes, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quiz-backup.json";
  a.click();
  URL.revokeObjectURL(url);
  const status = document.getElementById("backup-status");
  if (status) {
    status.textContent = t("exportSuccess");
    status.classList.remove("hidden");
    status.classList.remove("error");
    status.classList.add("success");
    setTimeout(() => { status.textContent = ""; status.classList.add("hidden"); }, 3000);
  }
}

function importQuizzesBackup(file) {
  if (!file) return;
  const status = document.getElementById("backup-status");
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const list = Array.isArray(data) ? data : (data.quizzes || []);
      if (!Array.isArray(list) || list.length === 0) throw new Error("No quizzes");
      quizzes = list;
      saveQuizzes();
      refreshQuizSelect();
      refreshEditQuizSelect();
      if (status) {
        status.textContent = t("importSuccess");
        status.classList.remove("hidden");
        status.classList.remove("error");
        status.classList.add("success");
        setTimeout(() => { status.textContent = ""; status.classList.add("hidden"); }, 3000);
      }
    } catch (e) {
      if (status) {
        status.textContent = t("importError");
        status.classList.remove("hidden");
        status.classList.add("error");
        setTimeout(() => { status.textContent = ""; status.classList.add("hidden"); }, 3000);
      }
    }
  };
  reader.readAsText(file);
}

function saveSettings() {
  try {
    localStorage.setItem(SOUND_ENABLED_KEY, soundEnabled ? "true" : "false");
    localStorage.setItem(SHUFFLE_ENABLED_KEY, shuffleEnabled ? "true" : "false");
    localStorage.setItem(SHUFFLE_OPTIONS_ENABLED_KEY, shuffleOptionsEnabled ? "true" : "false");
    localStorage.setItem(LANG_KEY, currentLang);
  } catch (e) {
    // ignore
  }
}

function applyTranslations() {
  const els = {
    "main-title": t("mainTitle"),
    "play-quiz-btn": t("myQuizzes"),
    "create-quiz-btn": t("createQuiz"),
    "how-it-works": t("howItWorks"),
    "play-quiz-desc": t("playQuizDesc"),
    "create-quiz-desc": t("createQuizDesc"),
    "stored-locally": t("storedLocally"),
    "lang-label": t("language"),
    "quiz-select-title": t("selectQuiz"),
    "choose-quiz-label": t("chooseQuiz"),
    "start-quiz-btn": t("startQuiz"),
    "shuffle-label": t("randomOrder"),
    "shuffle-options-label": t("shuffleOptions"),
    "no-quiz-msg": t("noQuizzes"),
    "next-question-btn": t("next"),
    "exit-quiz-btn": t("leave"),
    "quiz-finished-title": t("quizFinished"),
    "retry-quiz-btn": t("retryQuiz"),
    "back-to-menu-btn": t("backToMenu"),
    "edit-quiz-title": t("editQuiz"),
    "edit-existing-label": t("editExisting"),
    "no-quiz-msg-edit": t("noQuizzes"),
    "edit-quiz-hint": t("editQuizHint"),
    "quiz-name-label": t("quizName"),
    "description-label": t("description"),
    "paste-questions-label": t("pasteQuestions"),
    "format-example-hint": t("formatExample"),
    "parse-questions-btn": t("detectAdd"),
    "save-quiz-btn": t("saveQuiz"),
    "copy-format-btn": t("copyFormat"),
    "prompt-hint": t("promptHint"),
    "paste-questions-btn": t("pasteBtn"),
    "backup-hint": t("backupHint"),
    "export-quizzes-btn": t("exportBackup"),
    "import-backup-label": t("importBackup"),
    "questions-list-title": t("editQuestionsTitle"),
    "add-question-btn": t("addQuestion"),
    "no-questions-msg": t("noQuestionsInQuiz"),
    "question-edit-title": t("editQuestionTitle"),
    "question-text-label": t("questionText"),
    "option-a-label": t("optionA"),
    "option-b-label": t("optionB"),
    "option-c-label": t("optionC"),
    "option-d-label": t("optionD"),
    "option-e-label": t("optionE"),
    "correct-answer-label": t("correctAnswer"),
    "save-single-question-btn": t("saveQuestion"),
    "cancel-question-edit-btn": t("cancel"),
    "manual-add-question-btn": t("addManualQuestion"),
    "new-quiz-name-modal-title": t("giveQuizName"),
    "new-quiz-btn": t("newQuizBtn"),
    "load-edit-quiz-btn": t("loadSelected"),
    "edit-questions-screen-title": t("prepareQuestions"),
    "paste-questions-label": t("pasteLabelPlaceholder"),
    "delete-quiz-confirm-title": t("areYouSure"),
    "delete-quiz-confirm-msg": t("deleteQuizConfirmMsg"),
    "delete-quiz-btn-edit": t("deleteQuiz"),
    "delete-quiz-confirm-btn": t("deleteConfirmBtn"),
    "delete-quiz-cancel": t("cancel"),
    "question-image-label": t("questionImageLabel"),
    "single-question-image-remove": t("removeImage"),
    "single-question-image-add": t("addPhoto"),
  };
  document.querySelectorAll(".option-photo-btn").forEach((btn) => {
    btn.textContent = t("addPhoto");
  });
  const chooseImageLabel = document.getElementById("single-question-choose-image-label");
  if (chooseImageLabel) chooseImageLabel.textContent = t("chooseImage");
  const addOptionRowBtnTr = document.getElementById("add-option-row-btn");
  if (addOptionRowBtnTr) addOptionRowBtnTr.textContent = t("addOptionRow");
  const sectionLabel = document.querySelector(".two-options-section .section-label");
  if (sectionLabel) sectionLabel.textContent = t("addQuestionsBoth");
  const backQuestionsList = document.getElementById("back-btn-questions-list");
  const backQuestionEdit = document.getElementById("back-btn-question-edit");
  if (backQuestionsList) backQuestionsList.textContent = t("back");
  if (backQuestionEdit) backQuestionEdit.textContent = t("back");
  updateEditQuestionsBtn();
  Object.keys(els).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = els[id];
  });
  const mainSearchEl = document.getElementById("main-quiz-search");
  if (mainSearchEl) mainSearchEl.placeholder = t("searchPlaceholder");
  const backSelect = document.getElementById("back-btn-select");
  const backCreate = document.getElementById("back-btn-create");
  const backSettings = document.getElementById("back-btn-settings");
  const backLangSelect = document.getElementById("back-btn-lang-select");
  const backDiscover = document.getElementById("back-btn-discover");
  if (backSelect) backSelect.textContent = t("back");
  if (backCreate) backCreate.textContent = t("back");
  if (backSettings) backSettings.textContent = t("back");
  if (backLangSelect) backLangSelect.textContent = t("back");
  if (backDiscover) backDiscover.textContent = t("back");
  const backProfile = document.getElementById("back-btn-profile");
  const backFriends = document.getElementById("back-btn-friends");
  if (backProfile) backProfile.textContent = t("back");
  if (backFriends) backFriends.textContent = t("back");
  const profileTitleEl = document.getElementById("profile-title");
  const profileEditTitleEl = document.getElementById("profile-edit-title");
  const profileEditBtn = document.getElementById("profile-edit-btn");
  const profileEditNicknameSave = document.getElementById("profile-edit-nickname-save");
  const friendsTitleEl = document.getElementById("friends-title");
  const friendsPendingTitle = document.getElementById("friends-pending-title");
  const friendsListTitle = document.getElementById("friends-list-title");
  const shareModalTitle = document.getElementById("share-quiz-modal-title");
  const shareSendBtn = document.getElementById("share-quiz-send-btn");
  const sharePublicBtn = document.getElementById("share-quiz-public-btn");
  const discoverLoginHintEl = document.getElementById("discover-login-hint");
  if (profileTitleEl) profileTitleEl.textContent = t("profileTitle");
  if (profileEditTitleEl) profileEditTitleEl.textContent = t("editProfile");
  if (profileEditBtn) profileEditBtn.textContent = t("editProfile");
  if (profileEditNicknameSave) profileEditNicknameSave.textContent = t("nicknameSave");
  if (friendsTitleEl) friendsTitleEl.textContent = t("friendsTitle");
  if (friendsPendingTitle) friendsPendingTitle.textContent = t("pendingRequests");
  if (friendsListTitle) friendsListTitle.textContent = t("myFriends");
  if (shareModalTitle) shareModalTitle.textContent = t("shareQuizTitle");
  if (shareSendBtn) shareSendBtn.textContent = t("send");
  if (sharePublicBtn) sharePublicBtn.textContent = t("shareToProfile");
  if (discoverLoginHintEl) discoverLoginHintEl.textContent = t("discoverLoginHint");
  const authLoginBtn = document.getElementById("auth-login-btn");
  const authSignupBtn = document.getElementById("auth-signup-btn");
  const authLogoutBtn = document.getElementById("auth-logout-btn");
  if (authLoginBtn) authLoginBtn.textContent = t("login");
  if (authSignupBtn) authSignupBtn.textContent = t("signup");
  if (authLogoutBtn) authLogoutBtn.textContent = t("logout");
  const discoverTitle = document.getElementById("discover-title");
  const discoverDesc = document.getElementById("discover-desc");
  if (discoverTitle) discoverTitle.textContent = t("discoverTitle");
  if (discoverDesc) discoverDesc.textContent = t("discoverDesc");
  const discoverQuizBtn = document.getElementById("discover-quiz-btn");
  if (discoverQuizBtn) discoverQuizBtn.textContent = t("discoverQuizzes");
  const termsLinkBtn = document.getElementById("terms-link-btn");
  if (termsLinkBtn) termsLinkBtn.textContent = t("termsLink");
  const notificationAllLink = document.getElementById("notification-all-messages");
  if (notificationAllLink) notificationAllLink.textContent = t("allMessages");
  const authEmailLabelLogin = document.getElementById("auth-email-label-login");
  const authPasswordLabelLogin = document.getElementById("auth-password-label-login");
  const authEmailLabelSignup = document.getElementById("auth-email-label-signup");
  const authPasswordLabelSignup = document.getElementById("auth-password-label-signup");
  const authNicknameLabelSignup = document.getElementById("auth-nickname-label-signup");
  if (authEmailLabelLogin) authEmailLabelLogin.textContent = t("email");
  if (authPasswordLabelLogin) authPasswordLabelLogin.textContent = t("password");
  if (authEmailLabelSignup) authEmailLabelSignup.textContent = t("email");
  if (authPasswordLabelSignup) authPasswordLabelSignup.textContent = t("password");
  if (authNicknameLabelSignup) authNicknameLabelSignup.textContent = t("nickname");
  const authSubmitLoginEl = document.getElementById("auth-submit-login");
  const authSubmitSignupEl = document.getElementById("auth-submit-signup");
  const authGoogleLoginEl = document.getElementById("auth-google-login");
  const authGoogleSignupEl = document.getElementById("auth-google-signup");
  const authShowSignupEl = document.getElementById("auth-show-signup");
  const authShowLoginEl = document.getElementById("auth-show-login");
  if (authSubmitLoginEl) authSubmitLoginEl.textContent = t("login");
  if (authSubmitSignupEl) authSubmitSignupEl.textContent = t("signup");
  if (authGoogleLoginEl) authGoogleLoginEl.textContent = t("googleLogin");
  if (authGoogleSignupEl) authGoogleSignupEl.textContent = t("googleSignup");
  if (authShowSignupEl) authShowSignupEl.textContent = t("noAccountSignup");
  if (authShowLoginEl) authShowLoginEl.textContent = t("haveAccountLogin");
  const settingsBtn = document.getElementById("settings-btn");
  if (settingsBtn) settingsBtn.textContent = t("settings");
  const settingsTitle = document.getElementById("settings-title");
  if (settingsTitle) settingsTitle.textContent = t("settings");
  const settingsOpenLangSelect = document.getElementById("settings-open-lang-select");
  if (settingsOpenLangSelect) settingsOpenLangSelect.textContent = t("selectLanguage");
  const langSelectTitle = document.getElementById("lang-select-title");
  if (langSelectTitle) langSelectTitle.textContent = t("selectLanguage");
  updateSoundToggleUi();
  updateShuffleToggleUi();
  updateShuffleOptionsToggleUi();
  updateFullscreenBtnText();
}

function setupQuizListCarousel(wrapEl, stripEl, getTotalPages, getCurrentPage, setCurrentPage, onPageChange) {
  if (!wrapEl || !stripEl) return;
  const DURATION_MS = 350;
  const THRESHOLD_RATIO = 0.25;

  function applyTransform(pageIndex, dragPx, withTransition) {
    if (!wrapEl.offsetWidth) return;
    const w = wrapEl.offsetWidth;
    stripEl.style.transition = withTransition ? `transform ${DURATION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : "none";
    stripEl.style.transform = `translateX(${-pageIndex * w + (dragPx || 0)}px)`;
  }

  let startX = 0;
  let startPage = 0;
  let wrapWidth = 0;
  let lastDelta = 0;
  let dragging = false;

  function onPointerDown(e) {
    if (getTotalPages() <= 1) return;
    startX = e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    startPage = getCurrentPage();
    wrapWidth = wrapEl.offsetWidth;
    lastDelta = 0;
    dragging = true;
    stripEl.classList.remove("quiz-list-no-drag");
    stripEl.style.transition = "none";
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const x = e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : startX);
    let delta = x - startX;
    const totalPages = getTotalPages();
    if (startPage === 0 && delta > 0) delta = delta * 0.4;
    if (startPage === totalPages - 1 && delta < 0) delta = delta * 0.4;
    lastDelta = delta;
    applyTransform(startPage, delta, false);
  }

  function onPointerUp(e) {
    if (!dragging) return;
    dragging = false;
    stripEl.classList.add("quiz-list-no-drag");
    const totalPages = getTotalPages();
    const threshold = wrapWidth * THRESHOLD_RATIO;
    let nextPage = startPage;
    if (lastDelta < -threshold && startPage < totalPages - 1) nextPage = startPage + 1;
    else if (lastDelta > threshold && startPage > 0) nextPage = startPage - 1;
    setCurrentPage(nextPage);
    applyTransform(nextPage, 0, true);
    onPageChange();
  }

  wrapEl.addEventListener("pointerdown", onPointerDown, { passive: true });
  wrapEl.addEventListener("pointermove", onPointerMove, { passive: true });
  wrapEl.addEventListener("pointerup", onPointerUp, { passive: true });
  wrapEl.addEventListener("pointerleave", onPointerUp, { passive: true });
  wrapEl.addEventListener("touchstart", (e) => { if (e.touches.length === 1) onPointerDown(e); }, { passive: true });
  wrapEl.addEventListener("touchmove", (e) => {
    onPointerMove(e);
    if (dragging && e.cancelable) e.preventDefault();
  }, { passive: false });
  wrapEl.addEventListener("touchend", (e) => { if (e.changedTouches.length) onPointerUp(e); }, { passive: true });
}

function renderQuizSelectList(page, _direction) {
  if (!quizSelectStripEl || !quizSelectWrapEl) return;
  quizSelectStripEl.innerHTML = "";
  const listToShow = getQuizzesForPlay();
  noQuizMsg.classList.toggle("hidden", !!listToShow.length);
  startQuizBtn.disabled = !selectedPlayQuizId;
  // Her sayfada tam 5 quiz: sayfa sayısı = ceil(quiz sayısı / 5), en az 1 sayfa
  const totalPages = listToShow.length === 0 ? 1 : Math.ceil(listToShow.length / QUIZ_PER_PAGE);
  const wrapWidth = Math.max(quizSelectWrapEl.offsetWidth || 320, 280);

  for (let p = 0; p < totalPages; p++) {
    const slide = document.createElement("div");
    slide.className = "quiz-list-slide";
    slide.style.width = wrapWidth + "px";
    slide.style.minWidth = wrapWidth + "px";
    slide.style.maxWidth = wrapWidth + "px";
    const start = p * QUIZ_PER_PAGE;
    const slice = listToShow.slice(start, start + QUIZ_PER_PAGE);
    for (let i = 0; i < QUIZ_PER_PAGE; i++) {
      const quiz = slice[i];
      if (quiz) {
        const item = document.createElement("div");
        item.className = "quiz-list-item" + (selectedPlayQuizId === quiz.id ? " selected" : "");
        item.dataset.quizId = quiz.id;
        item.innerHTML = `<span class="quiz-list-name">${escapeHtml(quiz.name)}</span><span class="quiz-list-meta">${quiz.questions.length} ${quiz.questions.length === 1 ? "question" : "questions"}</span>`;
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          selectedPlayQuizId = quiz.id;
          renderQuizSelectList(quizSelectCurrentPage);
          startQuizBtn.disabled = false;
        });
        slide.appendChild(item);
      } else {
        const empty = document.createElement("div");
        empty.className = "quiz-list-item quiz-list-item-empty";
        empty.innerHTML = `<span class="quiz-list-name quiz-list-name-empty">—</span>`;
        empty.setAttribute("aria-hidden", "true");
        slide.appendChild(empty);
      }
    }
    quizSelectStripEl.appendChild(slide);
  }

  quizSelectStripEl.style.width = wrapWidth * totalPages + "px";
  quizSelectStripEl.style.transition = "none";
  quizSelectStripEl.style.transform = `translateX(${-Math.min(page, totalPages - 1) * wrapWidth}px)`;
  quizSelectStripEl.classList.toggle("quiz-list-no-drag", totalPages <= 1);
  requestAnimationFrame(() => { quizSelectStripEl.style.transition = `transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`; });

  if (quizSelectPaginationEl) {
    quizSelectPaginationEl.classList.toggle("hidden", totalPages <= 1);
    renderQuizSelectPagination();
  }
  startQuizBtn.disabled = !selectedPlayQuizId;

  if (totalPages > 1 && !quizSelectWrapEl.dataset.carouselSetup) {
    quizSelectWrapEl.dataset.carouselSetup = "1";
    setupQuizListCarousel(
      quizSelectWrapEl,
      quizSelectStripEl,
      () => (getQuizzesForPlay().length === 0 ? 1 : Math.ceil(getQuizzesForPlay().length / QUIZ_PER_PAGE)),
      () => quizSelectCurrentPage,
      (n) => { quizSelectCurrentPage = n; },
      () => { renderQuizSelectPagination(); }
    );
  }
}

function renderQuizSelectPagination() {
  const listToShow = getQuizzesForPlay();
  const totalPages = Math.ceil(listToShow.length / QUIZ_PER_PAGE);
  if (!quizSelectPaginationEl || totalPages <= 1) return;
  quizSelectPaginationEl.innerHTML = "";
  const page = quizSelectCurrentPage;

  function applySelectTransform(p, withTransition) {
    if (!quizSelectStripEl || !quizSelectWrapEl) return;
    quizSelectStripEl.style.transition = withTransition ? "transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none";
    quizSelectStripEl.style.transform = `translateX(${-p * quizSelectWrapEl.offsetWidth}px)`;
  }

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "secondary-btn small-btn";
  prevBtn.textContent = "←";
  prevBtn.disabled = page === 0;
  prevBtn.addEventListener("click", () => {
    if (page <= 0) return;
    quizSelectCurrentPage = page - 1;
    applySelectTransform(quizSelectCurrentPage, true);
    renderQuizSelectPagination();
  });
  const info = document.createElement("span");
  info.className = "pagination-info";
  info.textContent = `${page + 1} / ${totalPages}`;
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "secondary-btn small-btn";
  nextBtn.textContent = "→";
  nextBtn.disabled = page >= totalPages - 1;
  nextBtn.addEventListener("click", () => {
    if (page >= totalPages - 1) return;
    quizSelectCurrentPage = page + 1;
    applySelectTransform(quizSelectCurrentPage, true);
    renderQuizSelectPagination();
  });
  quizSelectPaginationEl.appendChild(prevBtn);
  quizSelectPaginationEl.appendChild(info);
  quizSelectPaginationEl.appendChild(nextBtn);
}

function escapeHtml(s) {
  if (s == null) return "";
  const div = document.createElement("div");
  div.textContent = String(s);
  return div.innerHTML;
}

// XSS önlemi: sadece güvenli resim URL'leri (data:image png/jpeg/webp/gif, blob:, https:). SVG kabul edilmez (script riski).
function sanitizeImageSrc(url) {
  if (typeof url !== "string" || !url.trim()) return "";
  const u = url.trim().toLowerCase();
  if (u.startsWith("data:image/svg")) return "";
  if (u.startsWith("data:image/png") || u.startsWith("data:image/jpeg") || u.startsWith("data:image/jpg") || u.startsWith("data:image/webp") || u.startsWith("data:image/gif")) return url;
  if (u.startsWith("blob:")) return url;
  if (u.startsWith("https://")) return url;
  return "";
}

function refreshQuizSelect() {
  if (quizzes.length && !selectedPlayQuizId) selectedPlayQuizId = quizzes[0].id;
  if (!quizzes.length) selectedPlayQuizId = "";
  quizSelectCurrentPage = 0;
  renderQuizSelectList(0);
  renderQuizSelectPagination();
}

function updateEditQuestionsBtn() {
  const btn = document.getElementById("edit-questions-btn");
  if (!btn) return;
  const quizId = selectedEditQuizId || editingQuizId || "";
  if (!quizId) {
    btn.disabled = true;
    btn.textContent = t("editQuestions");
    return;
  }
  const quiz = quizzes.find((q) => q.id === quizId);
  btn.disabled = false;
  btn.textContent = quiz ? `${quiz.name} – ${t("editQuestions")}` : t("editQuestions");
}

function renderQuestionsList() {
  const titleEl = document.getElementById("questions-list-title");
  const quizNameEl = document.getElementById("questions-list-quiz-name");
  const listEl = document.getElementById("questions-list");
  const noMsgEl = document.getElementById("no-questions-msg");
  const addBtn = document.getElementById("add-question-btn");
  if (!listEl || !currentQuizForEdit) return;
  const quiz = quizzes.find((q) => q.id === currentQuizForEdit);
  if (!quiz) return;
  if (titleEl) titleEl.textContent = t("editQuestionsTitle");
  if (quizNameEl) quizNameEl.textContent = quiz.name;
  listEl.innerHTML = "";
  const questions = quiz.questions || [];
  if (questions.length === 0) {
    if (noMsgEl) noMsgEl.classList.remove("hidden");
  } else {
    if (noMsgEl) noMsgEl.classList.add("hidden");
    questions.forEach((q, idx) => {
      const li = document.createElement("li");
      li.className = "question-list-item";
      li.dataset.index = String(idx);
      li.draggable = false;

      const handle = document.createElement("span");
      handle.className = "question-drag-handle";
      handle.setAttribute("aria-label", "Reorder");
      handle.innerHTML = "⋮⋮";
      handle.draggable = true;
      handle.addEventListener("mousedown", () => { handle.classList.add("pressing"); });
      handle.addEventListener("mouseup", () => { handle.classList.remove("pressing"); });
      handle.addEventListener("mouseleave", () => { handle.classList.remove("pressing"); });
      handle.addEventListener("touchstart", () => { handle.classList.add("pressing"); }, { passive: true });
      handle.addEventListener("touchend", () => { handle.classList.remove("pressing"); }, { passive: true });
      handle.addEventListener("touchcancel", () => { handle.classList.remove("pressing"); }, { passive: true });
      handle.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", String(idx));
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setDragImage(li, 0, 0);
        li.classList.add("dragging");
      });
      handle.addEventListener("dragend", () => li.classList.remove("dragging"));

      li.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
        if (!isNaN(fromIdx) && fromIdx !== parseInt(li.dataset.index, 10)) li.classList.add("drag-over");
      });
      li.addEventListener("dragleave", () => li.classList.remove("drag-over"));
      li.addEventListener("drop", (e) => {
        e.preventDefault();
        li.classList.remove("drag-over");
        const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const toIdx = parseInt(li.dataset.index, 10);
        if (fromIdx === toIdx || isNaN(fromIdx)) return;
        const arr = quiz.questions;
        const [moved] = arr.splice(fromIdx, 1);
        arr.splice(toIdx, 0, moved);
        saveQuizzes();
        renderQuestionsList();
      });

      const textSpan = document.createElement("span");
      textSpan.className = "question-list-text";
      textSpan.textContent = q.text || "";
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "secondary-btn small-btn question-delete-btn";
      delBtn.textContent = t("delete");
      delBtn.setAttribute("aria-label", t("delete"));
      li.appendChild(handle);
      li.appendChild(textSpan);
      li.appendChild(delBtn);
      listEl.appendChild(li);
    });
  }
  if (addBtn) addBtn.textContent = t("addQuestion");
}

function getOptionText(opt) {
  return typeof opt === "string" ? opt : (opt && opt.text) || "";
}

function getOptionImage(opt) {
  return typeof opt === "object" && opt && opt.image ? opt.image : null;
}

function updateCorrectAnswerSelect() {
  const correctEl = document.getElementById("single-correct-answer");
  if (!correctEl) return;
  const n = editFormOptionImages.length;
  const prevVal = correctEl.value;
  correctEl.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = String.fromCharCode(65 + i);
    correctEl.appendChild(opt);
  }
  const val = Math.min(Number(prevVal) || 0, n - 1);
  correctEl.value = String(Math.max(0, val));
}

function renderOptionRows() {
  const container = document.getElementById("option-rows-container");
  const addBtn = document.getElementById("add-option-row-btn");
  if (!container) return;
  container.innerHTML = "";
  const n = editFormOptionImages.length;
  for (let i = 0; i < n; i++) {
    const letter = OPTION_LETTERS[i];
    const letterLabel = String.fromCharCode(65 + i);
    const field = document.createElement("div");
    field.className = "field option-with-photo option-row-field";
    field.dataset.optionIndex = String(i);
    field.innerHTML = `
      <div class="option-row">
        <label for="single-option-${letter}">${letterLabel}</label>
        <input type="text" id="single-option-${letter}" placeholder="${letterLabel}" class="option-text-input" />
        <button type="button" class="secondary-btn small-btn add-photo-btn option-photo-btn" data-option="${letter}" data-index="${i}">${escapeHtml(t("addPhoto"))}</button>
        ${n > MIN_OPTIONS ? `<button type="button" class="secondary-btn small-btn remove-option-row-btn" data-index="${i}" title="${escapeHtml(t("delete"))}">×</button>` : ""}
      </div>
      <div id="single-option-image-wrap-${letter}" class="option-image-wrap hidden">
        <input type="file" id="single-option-image-${letter}" accept="image/jpeg,image/png,image/webp" class="image-input small input-trigger-only" tabindex="-1" aria-hidden="true" />
        <div id="single-option-image-preview-${letter}" class="image-preview small"></div>
        <button type="button" class="option-image-remove secondary-btn small-btn" data-option="${letter}" data-index="${i}">${t("removeImage")}</button>
      </div>
    `;
    container.appendChild(field);

    const addPhotoBtn = field.querySelector(".option-photo-btn");
    const wrap = field.querySelector(`#single-option-image-wrap-${letter}`);
    const fileInput = field.querySelector(`#single-option-image-${letter}`);
    const preview = field.querySelector(`#single-option-image-preview-${letter}`);
    const removeImgBtn = field.querySelector(".option-image-remove");
    const removeRowBtn = field.querySelector(".remove-option-row-btn");

    if (addPhotoBtn && fileInput) {
      addPhotoBtn.addEventListener("click", () => {
        fileInput.click();
      });
    }
    if (fileInput) {
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file || !file.type.startsWith("image/")) return;
        resizeImageToDataUrl(file).then((dataUrl) => {
          editFormOptionImages[i] = dataUrl;
          updateOptionImagePreview(i);
        }).catch(() => {});
      });
    }
    if (removeImgBtn) {
      removeImgBtn.addEventListener("click", () => {
        editFormOptionImages[i] = null;
        updateOptionImagePreview(i);
      });
    }
    if (removeRowBtn) {
      removeRowBtn.addEventListener("click", () => removeOptionRow(i));
    }
  }
  updateOptionImagePreviewsAll();
  updateCorrectAnswerSelect();
  const addBtnEl = document.getElementById("add-option-row-btn");
  if (addBtnEl) addBtnEl.classList.toggle("hidden", editFormOptionImages.length >= MAX_OPTIONS);
}

function updateOptionImagePreviewsAll() {
  for (let i = 0; i < editFormOptionImages.length; i++) {
    updateOptionImagePreview(i);
  }
}

function getCurrentOptionTexts() {
  const texts = [];
  for (let i = 0; i < editFormOptionImages.length; i++) {
    const letter = OPTION_LETTERS[i];
    const el = document.getElementById(`single-option-${letter}`);
    texts.push(el ? el.value : "");
  }
  return texts;
}

function setOptionTexts(texts) {
  for (let i = 0; i < texts.length && i < editFormOptionImages.length; i++) {
    const letter = OPTION_LETTERS[i];
    const el = document.getElementById(`single-option-${letter}`);
    if (el) el.value = texts[i];
  }
}

function addOptionRow() {
  if (editFormOptionImages.length >= MAX_OPTIONS) return;
  const savedTexts = getCurrentOptionTexts();
  editFormOptionImages.push(null);
  renderOptionRows();
  setOptionTexts(savedTexts);
}

function removeOptionRow(index) {
  if (editFormOptionImages.length <= MIN_OPTIONS) return;
  const savedTexts = getCurrentOptionTexts();
  savedTexts.splice(index, 1);
  const correctEl = document.getElementById("single-correct-answer");
  const oldVal = correctEl ? parseInt(correctEl.value, 10) || 0 : 0;
  editFormOptionImages.splice(index, 1);
  let newVal = oldVal > index ? oldVal - 1 : (oldVal === index ? Math.min(index, editFormOptionImages.length - 1) : oldVal);
  newVal = Math.max(0, Math.min(editFormOptionImages.length - 1, newVal));
  if (correctEl) correctEl.value = String(newVal);
  renderOptionRows();
  setOptionTexts(savedTexts);
}

function loadQuestionIntoForm(index) {
  const quiz = quizzes.find((q) => q.id === currentQuizForEdit);
  if (!quiz || !quiz.questions[index]) return;
  const q = quiz.questions[index];
  const textEl = document.getElementById("single-question-text");
  const correctEl = document.getElementById("single-correct-answer");
  if (textEl) textEl.value = q.text || "";
  const opts = q.options || [];
  const count = Math.max(MIN_OPTIONS, Math.min(MAX_OPTIONS, opts.length));
  editFormOptionImages = [];
  for (let i = 0; i < count; i++) {
    const opt = opts[i];
    editFormOptionImages.push(getOptionImage(opt) || null);
  }
  if (editFormOptionImages.length < MIN_OPTIONS) {
    while (editFormOptionImages.length < MIN_OPTIONS) editFormOptionImages.push(null);
  }
  renderOptionRows();
  opts.forEach((opt, i) => {
    const letter = OPTION_LETTERS[i];
    const el = document.getElementById(`single-option-${letter}`);
    if (el) el.value = getOptionText(opt) || "";
  });
  if (correctEl) correctEl.value = String(Math.min(q.correctIndex ?? 0, editFormOptionImages.length - 1));
  editFormQuestionImage = q.image || null;
  updateQuestionImagePreview();
}

function updateQuestionImagePreview() {
  const wrap = document.getElementById("single-question-image-wrap");
  const preview = document.getElementById("single-question-image-preview");
  const removeBtn = document.getElementById("single-question-image-remove");
  const fileInput = document.getElementById("single-question-image");
  const addBtn = document.getElementById("single-question-image-add");
  if (!preview || !fileInput) return;
  const safeSrc = sanitizeImageSrc(editFormQuestionImage);
  if (safeSrc) {
    if (preview) preview.innerHTML = `<img src="${safeSrc.replace(/"/g, "&quot;")}" alt="" />`;
    if (wrap) wrap.classList.remove("hidden");
    if (addBtn) addBtn.classList.add("hidden");
    fileInput.value = "";
  } else {
    if (preview) preview.innerHTML = "";
    if (wrap) wrap.classList.add("hidden");
    if (addBtn) addBtn.classList.remove("hidden");
    fileInput.value = "";
  }
}

function updateOptionImagePreview(optionIndex) {
  const letters = ["a", "b", "c", "d", "e"];
  const id = letters[optionIndex];
  const wrap = document.getElementById(`single-option-image-wrap-${id}`);
  const preview = document.getElementById(`single-option-image-preview-${id}`);
  const fileInput = document.getElementById(`single-option-image-${id}`);
  const addBtn = document.querySelector(`.option-photo-btn[data-option="${id}"]`);
  if (!preview || !fileInput) return;
  const data = editFormOptionImages[optionIndex];
  const safeOptSrc = sanitizeImageSrc(data);
  if (safeOptSrc) {
    preview.innerHTML = `<img src="${safeOptSrc.replace(/"/g, "&quot;")}" alt="" />`;
    if (wrap) wrap.classList.remove("hidden");
    if (addBtn) addBtn.classList.add("hidden");
    fileInput.value = "";
  } else {
    preview.innerHTML = "";
    if (wrap) wrap.classList.add("hidden");
    if (addBtn) addBtn.classList.remove("hidden");
    fileInput.value = "";
  }
}

function clearQuestionForm() {
  const textEl = document.getElementById("single-question-text");
  const correctEl = document.getElementById("single-correct-answer");
  if (textEl) textEl.value = "";
  editFormQuestionImage = null;
  editFormOptionImages = [null, null];
  updateQuestionImagePreview();
  renderOptionRows();
  if (correctEl) correctEl.value = "0";
}

function renderEditQuizList(page, _direction) {
  if (!editQuizStripEl || !editQuizWrapEl) return;
  const noQuizMsgEdit = document.getElementById("no-quiz-msg-edit");
  if (noQuizMsgEdit) {
    noQuizMsgEdit.textContent = t("noQuizzes");
    noQuizMsgEdit.classList.toggle("hidden", !!quizzes.length);
  }
  editQuizStripEl.innerHTML = "";
  // Her sayfada tam 5 quiz: sayfa sayısı = ceil(quiz sayısı / 5), en az 1 sayfa
  const totalPages = quizzes.length === 0 ? 1 : Math.ceil(quizzes.length / QUIZ_PER_PAGE);
  const wrapWidth = Math.max(editQuizWrapEl.offsetWidth || 320, 280);

  for (let p = 0; p < totalPages; p++) {
    const slide = document.createElement("div");
    slide.className = "quiz-list-slide";
    slide.style.width = wrapWidth + "px";
    slide.style.minWidth = wrapWidth + "px";
    slide.style.maxWidth = wrapWidth + "px";
    const start = p * QUIZ_PER_PAGE;
    const slice = quizzes.slice(start, start + QUIZ_PER_PAGE);
    for (let i = 0; i < QUIZ_PER_PAGE; i++) {
      const quiz = slice[i];
      if (quiz) {
        const item = document.createElement("div");
        item.className = "quiz-list-item" + (selectedEditQuizId === quiz.id ? " selected" : "");
        item.dataset.quizId = quiz.id;
        const textDiv = document.createElement("div");
        textDiv.className = "quiz-list-item-text";
        textDiv.innerHTML = `<span class="quiz-list-name">${escapeHtml(quiz.name)}</span><span class="quiz-list-meta">${quiz.questions.length} ${quiz.questions.length === 1 ? "question" : "questions"}</span>`;
        textDiv.addEventListener("click", (e) => {
          e.stopPropagation();
          selectedEditQuizId = quiz.id;
          renderEditQuizList(editQuizListCurrentPage);
          renderEditQuizPagination();
          updateEditQuestionsBtn();
        });
        const actions = document.createElement("div");
        actions.className = "quiz-list-item-actions";
        const btnEdit = document.createElement("button");
        btnEdit.type = "button";
        btnEdit.className = "secondary-btn small-btn";
        btnEdit.textContent = t("loadSelected");
        btnEdit.addEventListener("click", (e) => {
          e.stopPropagation();
          selectedEditQuizId = quiz.id;
          doLoadEditQuiz(quiz.id);
        });
        const btnQuestions = document.createElement("button");
        btnQuestions.type = "button";
        btnQuestions.className = "secondary-btn small-btn";
        btnQuestions.textContent = t("editQuestions");
        btnQuestions.addEventListener("click", (e) => {
          e.stopPropagation();
          selectedEditQuizId = quiz.id;
          doEditQuestions(quiz.id);
        });
        actions.appendChild(btnEdit);
        actions.appendChild(btnQuestions);
        if (supabaseClient && currentAuthUser) {
          const btnShare = document.createElement("button");
          btnShare.type = "button";
          btnShare.className = "secondary-btn small-btn";
          btnShare.textContent = t("shareQuiz");
          btnShare.addEventListener("click", (e) => {
            e.stopPropagation();
            selectedEditQuizId = quiz.id;
            openShareQuizModal(quiz.id);
          });
          actions.appendChild(btnShare);
        }
        item.appendChild(textDiv);
        item.appendChild(actions);
        slide.appendChild(item);
      } else {
        const empty = document.createElement("div");
        empty.className = "quiz-list-item quiz-list-item-empty";
        empty.innerHTML = `<span class="quiz-list-name quiz-list-name-empty">—</span>`;
        empty.setAttribute("aria-hidden", "true");
        slide.appendChild(empty);
      }
    }
    editQuizStripEl.appendChild(slide);
  }

  editQuizStripEl.style.width = wrapWidth * totalPages + "px";
  editQuizStripEl.style.transition = "none";
  editQuizStripEl.style.transform = `translateX(${-Math.min(page, totalPages - 1) * wrapWidth}px)`;
  editQuizStripEl.classList.toggle("quiz-list-no-drag", totalPages <= 1);
  requestAnimationFrame(() => { editQuizStripEl.style.transition = `transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`; });

  if (editQuizPaginationEl) {
    editQuizPaginationEl.classList.toggle("hidden", totalPages <= 1);
    renderEditQuizPagination();
  }
  const deleteWrapEdit = document.getElementById("delete-quiz-wrap-edit");
  if (deleteWrapEdit) deleteWrapEdit.classList.toggle("hidden", !selectedEditQuizId);

  if (totalPages > 1 && !editQuizWrapEl.dataset.carouselSetup) {
    editQuizWrapEl.dataset.carouselSetup = "1";
    setupQuizListCarousel(
      editQuizWrapEl,
      editQuizStripEl,
      () => (quizzes.length === 0 ? 1 : Math.ceil(quizzes.length / QUIZ_PER_PAGE)),
      () => editQuizListCurrentPage,
      (n) => { editQuizListCurrentPage = n; },
      () => { renderEditQuizPagination(); updateEditQuestionsBtn(); }
    );
  }
}

function renderEditQuizPagination() {
  const totalPages = Math.ceil(quizzes.length / QUIZ_PER_PAGE);
  if (!editQuizPaginationEl || totalPages <= 1) return;
  editQuizPaginationEl.innerHTML = "";
  const page = editQuizListCurrentPage;

  function applyEditTransform(p, withTransition) {
    if (!editQuizStripEl || !editQuizWrapEl) return;
    editQuizStripEl.style.transition = withTransition ? "transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none";
    editQuizStripEl.style.transform = `translateX(${-p * editQuizWrapEl.offsetWidth}px)`;
  }

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "secondary-btn small-btn";
  prevBtn.textContent = "←";
  prevBtn.disabled = page === 0;
  prevBtn.addEventListener("click", () => {
    if (page <= 0) return;
    editQuizListCurrentPage = page - 1;
    applyEditTransform(editQuizListCurrentPage, true);
    renderEditQuizPagination();
  });
  const info = document.createElement("span");
  info.className = "pagination-info";
  info.textContent = `${page + 1} / ${totalPages}`;
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "secondary-btn small-btn";
  nextBtn.textContent = "→";
  nextBtn.disabled = page >= totalPages - 1;
  nextBtn.addEventListener("click", () => {
    if (page >= totalPages - 1) return;
    editQuizListCurrentPage = page + 1;
    applyEditTransform(editQuizListCurrentPage, true);
    renderEditQuizPagination();
  });
  editQuizPaginationEl.appendChild(prevBtn);
  editQuizPaginationEl.appendChild(info);
  editQuizPaginationEl.appendChild(nextBtn);
}

function refreshEditQuizSelect() {
  editQuizListCurrentPage = 0;
  renderEditQuizList(0);
  renderEditQuizPagination();
  updateEditQuestionsBtn();
}

function updateSoundToggleUi() {
  if (!soundToggleBtn) return;
  if (soundEnabled) {
    soundToggleBtn.classList.remove("muted");
  } else {
    soundToggleBtn.classList.add("muted");
  }
  const label = soundToggleBtn.querySelector(".sound-label");
  if (label) {
    label.textContent = soundEnabled ? t("soundTurnOff") : t("soundTurnOn");
  }
}

function updateShuffleToggleUi() {
  if (!shuffleToggleBtn) return;
  if (shuffleEnabled) {
    shuffleToggleBtn.classList.add("active");
  } else {
    shuffleToggleBtn.classList.remove("active");
  }
}

function updateShuffleOptionsToggleUi() {
  if (!shuffleOptionsToggleBtn) return;
  if (shuffleOptionsEnabled) {
    shuffleOptionsToggleBtn.classList.add("active");
  } else {
    shuffleOptionsToggleBtn.classList.remove("active");
  }
}

function buildQuestionOrder(quiz) {
  const total = quiz.questions.length;
  const order = Array.from({ length: total }, (_, i) => i);
  if (shuffleEnabled) {
    for (let i = total - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }
  return order;
}

function getQuizzesForPlay() {
  const q = (mainPageSearchQuery || "").trim().toLowerCase();
  if (!q) return quizzes;
  return quizzes.filter((quiz) => (quiz.name || "").toLowerCase().includes(q));
}

function renderMainSearchResults() {
  const container = document.getElementById("main-search-results");
  if (!container) return;
  const q = (mainPageSearchQuery || "").trim();
  if (!q) {
    container.classList.add("hidden");
    container.innerHTML = "";
    return;
  }
  const list = getQuizzesForPlay();
  if (list.length === 0) {
    container.classList.remove("hidden");
    container.innerHTML = "<p class=\"hint\" style=\"margin:0;padding:8px 0;\">" + escapeHtml(t("searchNoResults")) + "</p>";
    return;
  }
  container.classList.remove("hidden");
  container.innerHTML = "";
  list.forEach((quiz) => {
    const item = document.createElement("div");
    item.className = "main-search-result-item";
    item.dataset.quizId = quiz.id;
    item.innerHTML = `<span class="result-name">${escapeHtml(quiz.name)}</span><span class="result-meta">${quiz.questions.length} ${quiz.questions.length === 1 ? (currentLang === "tr" ? "soru" : "question") : (currentLang === "tr" ? "soru" : "questions")}</span>`;
    item.addEventListener("click", () => {
      selectedPlayQuizId = quiz.id;
      showView("quizSelect");
      requestAnimationFrame(() => refreshQuizSelect());
    });
    container.appendChild(item);
  });
}

// Sound buffers (Web Audio): decoded MP3s for reliable playback on mobile/iOS
let correctSoundBuffer = null;
let incorrectSoundBuffer = null;
const resultSoundBuffers = { fail: null, mid: null, good: null, verygood: null, congrats: null };

function decodeSound(url, setBuffer) {
  const ctx = getAudioContext();
  if (!ctx) return Promise.resolve();
  const base = getAssetBase();
  const fullUrl = url.startsWith("http") || url.startsWith("file") ? url : (base + url);
  return fetch(fullUrl)
    .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject()))
    .then((ab) => ctx.decodeAudioData(ab))
    .then((buf) => {
      setBuffer(buf);
    })
    .catch(() => {});
}

function getAssetBase() {
  if (typeof window === "undefined" || !window.location) return "";
  const loc = window.location;
  if (loc.origin && loc.origin !== "null" && loc.origin !== "file://") {
    const path = loc.pathname.replace(/\/[^/]*$/, "/");
    return loc.origin + path;
  }
  const path = loc.pathname.replace(/\/[^/]*$/, "/");
  return loc.protocol + "//" + (loc.host || "") + path;
}

// Pre-warm audio and decode MP3s at quiz start (reliable sound on mobile/iOS).
function warmUpAudio() {
  const ctx = getAudioContext();
  if (ctx && ctx.state === "suspended") ctx.resume();
  if (ctx) {
    try {
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.01, ctx.sampleRate);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
    } catch (e) {
      // ignore
    }
  }
  const base = getAssetBase();
  if (correctSoundEl && correctSoundEl.src) decodeSound(correctSoundEl.src, (b) => (correctSoundBuffer = b));
  else decodeSound(base + "correct.mp3", (b) => (correctSoundBuffer = b));
  if (incorrectSoundEl && incorrectSoundEl.src) decodeSound(incorrectSoundEl.src, (b) => (incorrectSoundBuffer = b));
  else decodeSound(base + "incorrect.mp3", (b) => (incorrectSoundBuffer = b));
  ["fail", "mid", "good", "verygood", "congrats"].forEach((name) => {
    decodeSound(base + name + ".mp3", (b) => { resultSoundBuffers[name] = b; });
  });
}

function playResultSound(percentage) {
  let key = "fail";
  if (percentage <= 40) key = "fail";
  else if (percentage < 60) key = "mid";
  else if (percentage < 80) key = "good";
  else if (percentage < 100) key = "verygood";
  else key = "congrats";
  ensureAudioReady().then(() => {
    const buffer = resultSoundBuffers[key];
    if (buffer) {
      playFromBuffer(buffer);
    } else {
      const el = document.getElementById("result-" + key);
      if (el && el.play) el.play().catch(() => {});
    }
  }).catch(() => {});
}

// Quiz run helpers
function startQuiz(quizId) {
  const quiz = quizzes.find((q) => q.id === quizId);
  if (!quiz || !quiz.questions.length) return;

  currentQuiz = quiz;
  currentQuestionIndex = 0;
  currentQuestionOrder = buildQuestionOrder(quiz);
  currentScore = 0;
  lastRunQuizId = quiz.id;

  quizTitleEl.textContent = quiz.name;
  updateScoreDisplay();
  showView("quizView");
  updateFullscreenBtnText();
  warmUpAudio();
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  if (!currentQuiz) return;

  const total = currentQuestionOrder.length;
  if (currentQuestionIndex >= total) {
    finishQuiz();
    return;
  }

  const qIndex = currentQuestionOrder[currentQuestionIndex];
  const q = currentQuiz.questions[qIndex];
  quizProgressEl.textContent = `Question ${currentQuestionIndex + 1} / ${total}`;

  const optsRaw = (q.options || []).map((o) => (typeof o === "string" ? { text: o } : o));
  let displayOrder = optsRaw.map((_, i) => i);
  if (shuffleOptionsEnabled && optsRaw.length > 1) {
    for (let i = displayOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [displayOrder[i], displayOrder[j]] = [displayOrder[j], displayOrder[i]];
    }
  }

  questionTextEl.innerHTML = "";
  const safeQImage = sanitizeImageSrc(q.image);
  if (safeQImage) {
    const wrap = document.createElement("div");
    wrap.className = "question-image-wrap";
    const img = document.createElement("img");
    img.src = safeQImage;
    img.alt = "";
    wrap.appendChild(img);
    questionTextEl.appendChild(wrap);
  }
  if (q.text) questionTextEl.appendChild(document.createTextNode(q.text));

  optionsContainerEl.innerHTML = "";
  nextQuestionBtn.disabled = true;

  displayOrder.forEach((originalIdx, displayedIdx) => {
    const opt = optsRaw[originalIdx];
    const safeOptImage = sanitizeImageSrc(opt && opt.image);
    const btn = document.createElement("button");
    btn.className = "option-btn" + (safeOptImage ? " has-image" : "");
    btn.dataset.index = String(displayedIdx);
    btn.dataset.originalIndex = String(originalIdx);
    btn.dataset.label = String.fromCharCode(65 + displayedIdx);
    if (safeOptImage) {
      const img = document.createElement("img");
      img.className = "option-image-inline";
      img.src = safeOptImage;
      img.alt = "";
      btn.appendChild(img);
    }
    const textSpan = document.createElement("span");
    textSpan.textContent = opt.text || "";
    btn.appendChild(textSpan);
    btn.addEventListener("click", () => handleAnswerClick(btn, displayedIdx));
    optionsContainerEl.appendChild(btn);
  });
}

function handleAnswerClick(btn, idx) {
  if (!currentQuiz) return;

  const qIndex = currentQuestionOrder[currentQuestionIndex];
  const q = currentQuiz.questions[qIndex];
  const correctIndex = q.correctIndex;
  const originalIndex = btn.dataset.originalIndex != null ? Number(btn.dataset.originalIndex) : idx;

  // Disable further clicks
  const optionButtons = optionsContainerEl.querySelectorAll(".option-btn");
  optionButtons.forEach((b) => b.classList.add("disabled"));

  if (originalIndex === correctIndex) {
    btn.classList.add("correct");
    currentScore += 1;
    updateScoreDisplay();
    playCorrectVfx(btn);
  } else {
    btn.classList.add("incorrect");
    // Optional SFX for incorrect answer (only when sound enabled)
    if (soundEnabled) playAnswerSound(false);
    // Highlight correct one (by original index)
    optionButtons.forEach((b) => {
      const bOriginal = b.dataset.originalIndex != null ? Number(b.dataset.originalIndex) : Number(b.dataset.index);
      if (bOriginal === correctIndex) {
        b.classList.add("revealed-correct");
      }
    });
  }

  nextQuestionBtn.disabled = false;
}

function updateScoreDisplay() {
  if (!currentQuiz) return;
  quizScoreEl.textContent = `Score: ${currentScore} / ${currentQuiz.questions.length}`;
}

function nextQuestion() {
  if (!currentQuiz) return;
  currentQuestionIndex += 1;
  renderCurrentQuestion();
}

function showQuizResult(score, total) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const circumference = 327;
  const offset = circumference * (1 - percentage / 100);

  const scoreWrap = document.getElementById("score-circle-wrap");
  const scoreProgress = document.getElementById("score-circle-progress");
  const scoreValue = document.getElementById("score-circle-value");
  const scoreOutOf = document.getElementById("score-circle-out-of");

  if (scoreValue) scoreValue.textContent = percentage;
  if (scoreOutOf) scoreOutOf.textContent = t("outOf100");
  if (finalScoreTextEl) finalScoreTextEl.textContent = `${t("youScored")} ${score} ${t("outOf")} ${total}.`;

  if (scoreWrap && scoreProgress) {
    scoreProgress.style.strokeDashoffset = "327";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scoreProgress.style.strokeDashoffset = String(offset);
      });
    });
  }

  showView("quizFinished");
  updateQuizFinishedExtra();
  if (soundEnabled) playResultSound(percentage);
}

async function updateQuizFinishedExtra() {
  const extra = document.getElementById("quiz-finished-extra");
  const addBtn = document.getElementById("quiz-finished-add-to-mine-btn");
  const rateLabel = document.getElementById("quiz-finished-rate-label");
  const starsWrap = document.getElementById("quiz-finished-stars");
  if (!extra) return;
  if (!lastPlayedQuizFromShared || !currentQuiz) {
    extra.classList.add("hidden");
    return;
  }
  extra.classList.remove("hidden");
  if (addBtn) {
    addBtn.textContent = t("addToMyQuizzes");
    addBtn.style.display = currentAuthUser ? "" : "none";
    addBtn.onclick = async () => {
      const ok = await copyQuizToMyQuizzes(currentQuiz);
      if (ok) addBtn.disabled = true;
    };
  }
  if (rateLabel) {
    if (currentAuthUser && supabaseClient) {
      rateLabel.textContent = t("rateThisQuiz");
    } else {
      rateLabel.textContent = currentLang === "tr" ? "Puan verebilmek için giriş yapın (üyelik gerekir)" : "Log in to rate (membership required)";
    }
  }
  if (starsWrap && currentQuiz) {
    if (!currentAuthUser || !supabaseClient) {
      starsWrap.innerHTML = "";
      return;
    }
    const myRating = await getMyQuizRating(currentQuiz.id);
    starsWrap.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-finished-star-btn" + (myRating !== null && i <= myRating ? " rated" : "");
      btn.setAttribute("aria-label", `${i} yıldız`);
      btn.textContent = "★";
      btn.dataset.rating = String(i);
      if (myRating === null) {
        btn.addEventListener("click", async () => {
          if (!currentAuthUser || !supabaseClient || !currentQuiz) return;
          await submitQuizRating(currentQuiz.id, i);
          starsWrap.querySelectorAll("button").forEach((b) => b.classList.remove("rated"));
          btn.classList.add("rated");
          btn.disabled = true;
        });
      } else {
        btn.disabled = true;
      }
      starsWrap.appendChild(btn);
    }
  }
}

function finishQuiz() {
  if (!currentQuiz) return;
  const total = currentQuiz.questions.length;
  showQuizResult(currentScore, total);
}

// Audio: ensure context is ready (fixes inconsistent sound on mobile / iOS)
let audioContext = null;
function getAudioContext() {
  if (audioContext) return audioContext;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (Ctx) audioContext = new Ctx();
  return audioContext;
}
function ensureAudioReady() {
  const ctx = getAudioContext();
  if (!ctx) return Promise.resolve();
  if (ctx.state === "suspended") return ctx.resume();
  return Promise.resolve();
}
function playFallbackBeep(high) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    if (ctx.state === "suspended") ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = high ? 880 : 220;
    osc.type = "sine";
    gain.gain.value = 0.15;
    osc.start(0);
    osc.stop(ctx.currentTime + 0.12);
  } catch (e) {
    // ignore
  }
}
function playFromBuffer(buffer) {
  const ctx = getAudioContext();
  if (!ctx || !buffer) return;
  try {
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    src.start(0);
  } catch (e) {
    // ignore
  }
}

function playAnswerSound(isCorrect) {
  if (!soundEnabled) return;
  const buffer = isCorrect ? correctSoundBuffer : incorrectSoundBuffer;
  ensureAudioReady().then(() => {
    if (buffer) {
      playFromBuffer(buffer);
    } else {
      const el = isCorrect ? correctSoundEl : incorrectSoundEl;
      if (el && el.play) el.play().catch(() => playFallbackBeep(isCorrect));
      else playFallbackBeep(isCorrect);
    }
  }).catch(() => playFallbackBeep(isCorrect));
}

// VFX for correct answers
function playCorrectVfx(btn) {
  // Pulse on the button
  btn.classList.add("correct-pulse");
  setTimeout(() => btn.classList.remove("correct-pulse"), 550);

  // Optional SFX for correct answer (only when sound enabled)
  if (soundEnabled) playAnswerSound(true);

  // Background flash on quiz view
  if (quizViewEl) {
    quizViewEl.classList.remove("correct-bg-flash");
    // Force reflow so animation can restart
    // eslint-disable-next-line no void
    void quizViewEl.offsetWidth;
    quizViewEl.classList.add("correct-bg-flash");
  }

  // Simple confetti across the top
  const colors = [
    "#f97316",
    "#facc15",
    "#22c55e",
    "#38bdf8",
    "#a855f7",
    "#f97373"
  ];
  const count = 38;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const left = Math.random() * 100;
    const delay = Math.random() * 0.35;
    const color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${left}%`;
    piece.style.top = "-40px";
    piece.style.background = color;
    piece.style.animationDelay = `${delay}s`;
    vfxLayerEl.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 1600 + delay * 1000);
  }
}

// Fullscreen helpers
function goFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  }
}

function exitFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
}

function updateFullscreenBtnText() {
  const isFullscreen = !!document.fullscreenElement;
  const settingsFsBtn = document.getElementById("settings-fullscreen-btn");
  if (settingsFsBtn) settingsFsBtn.textContent = isFullscreen ? t("exitFullscreen") : t("fullscreen");
  const fullscreenLogo = document.getElementById("fullscreen-logo");
  if (fullscreenLogo) {
    fullscreenLogo.classList.toggle("hidden", !isFullscreen);
  }
  document.body.classList.toggle("fullscreen-active", isFullscreen);
}

// Bulk parser: parse 100+ questions from a single textarea
/**
 * Expected pattern (flexible on spaces and dots):
 *
 * 1) Question text...
 * A) Option 1
 * B) Option 2
 * C) Option 3
 * D) Option 4
 * E) Option 5
 * Answer: B
 *
 * 2. Next question...
 * ...
 */
function parseBulkQuestions(raw) {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const questions = [];
  let i = 0;

  while (i < lines.length) {
    // Find next question line: starts with number + "." or ")"
    const qLineMatch = lines[i].match(/^(\d+)[\.\)]\s*(.+)$/);
    if (!qLineMatch) {
      i++;
      continue;
    }

    const questionText = qLineMatch[2].trim();
    i++;

    const options = [];
    const optionRegex = /^[A-Ea-e][\.\)]\s*(.+)$/;
    // Collect next 5 option lines
    while (i < lines.length && options.length < 5) {
      const m = lines[i].match(optionRegex);
      if (!m) break;
      options.push(m[1].trim());
      i++;
    }

    if (options.length !== 5) {
      // Incomplete question; skip this block
      continue;
    }

    // Find answer line
    let correctIndex = -1;
    const answerRegex = /^answer\s*:\s*(.+)$/i;
    if (i < lines.length) {
      const answerMatch = lines[i].match(answerRegex);
      if (answerMatch) {
        const answerVal = answerMatch[1].trim();
        // Allow letter form A-E
        const letterMatch = /^[A-Ea-e]$/;
        if (letterMatch.test(answerVal)) {
          correctIndex = answerVal.toUpperCase().charCodeAt(0) - 65; // 0-4
        } else {
          // Or match by exact option text
          const idx = options.findIndex(
            (opt) => opt.toLowerCase() === answerVal.toLowerCase()
          );
          if (idx >= 0) correctIndex = idx;
        }
        i++;
      }
    }

    if (correctIndex === -1) {
      // If no answer line or invalid, skip
      continue;
    }

    questions.push({
      text: questionText,
      options,
      correctIndex
    });
  }

  return questions;
}

// Create / edit quiz flow
let draftQuestions = [];

function resetCreateQuizForm() {
  quizNameInput.value = "";
  quizDescriptionInput.value = "";
  bulkInput.value = "";
  draftQuestions = [];
  editingQuizId = null;
  selectedEditQuizId = "";
  if (editQuizStatusEl) {
    editQuizStatusEl.textContent = "";
  }
  parsedQuestionsSummaryEl.classList.add("hidden");
  parsedQuestionsSummaryEl.textContent = "";
  parseStatusEl.textContent = "";
  parseStatusEl.className = "hint";
  updateEditQuestionsBtn();
}

function handleParseQuestions() {
  const raw = bulkInput.value;
  parseStatusEl.className = "hint";
  parsedQuestionsSummaryEl.classList.add("hidden");
  parsedQuestionsSummaryEl.textContent = "";

  if (!raw.trim()) {
    parseStatusEl.textContent = "Paste some numbered questions first.";
    parseStatusEl.classList.add("error");
    return;
  }

  const parsed = parseBulkQuestions(raw);
  if (!parsed.length) {
    parseStatusEl.textContent =
      "Could not detect any valid questions. Make sure you follow the shown format (numbered questions, A–E options, and an Answer line).";
    parseStatusEl.classList.add("error");
    return;
  }

  if (editingQuizId && draftQuestions.length) {
    draftQuestions = draftQuestions.concat(parsed);
  } else {
    draftQuestions = parsed;
  }

  const newly = parsed.length;
  parseStatusEl.textContent = `Detected ${newly} question${
    newly !== 1 ? "s" : ""
  }. Total in this quiz now: ${draftQuestions.length}.`;
  parseStatusEl.classList.add("success");

  parsedQuestionsSummaryEl.classList.remove("hidden");
  const sample = draftQuestions.slice(0, 3);
  let html = `<strong>Preview (${escapeHtml(String(draftQuestions.length))} total):</strong><br/>`;
  html += sample
    .map(
      (q, index) =>
        `${escapeHtml(String(index + 1))}. ${escapeHtml(q.text || "")} <span class="hint">(Answer: ${
          escapeHtml(String.fromCharCode(65 + (q.correctIndex ?? 0)))
        })</span>`
    )
    .join("<br/>");
  if (parsed.length > 3) {
    html += `<br/><span class="hint">...and ${escapeHtml(String(parsed.length - 3))} more question(s).</span>`;
  }
  parsedQuestionsSummaryEl.innerHTML = html;
}

async function handleSaveQuiz() {
  const name = quizNameInput.value.trim();
  const description = quizDescriptionInput.value.trim();

  if (!name) {
    alert("Please enter a quiz name.");
    return;
  }
  if (isQuizNameDuplicate(name, editingQuizId || undefined)) {
    alert(t("duplicateQuizName"));
    return;
  }

  if (editingQuizId) {
    const existing = quizzes.find((q) => q.id === editingQuizId);
    if (existing && existing.questions && existing.questions.length) {
      draftQuestions = existing.questions.slice();
    }
  }
  if (!draftQuestions.length) {
    alert(t("saveQuizNoQuestions"));
    return;
  }

  if (editingQuizId) {
    const existing = quizzes.find((q) => q.id === editingQuizId);
    if (existing) {
      existing.name = name;
      existing.description = description;
      existing.questions = draftQuestions;
    }
  } else {
    const newQuiz = {
      id: `quiz_${Date.now()}`,
      name,
      description,
      questions: draftQuestions
    };
    quizzes.push(newQuiz);
  }

  const quiz = editingQuizId ? quizzes.find((q) => q.id === editingQuizId) : quizzes[quizzes.length - 1];
  if (supabaseClient && currentAuthUser && quiz) {
    try {
      await saveQuizToCloud(quiz);
      await fetchUserQuizzes();
    } catch (e) {
      alert(t("importError") || "Could not save to cloud.");
      return;
    }
  } else {
    saveQuizzes();
  }
  refreshQuizSelect();
  refreshEditQuizSelect();

  const count = draftQuestions.length;
  const msg = (t("saveQuizSuccess") || "Quiz saved with {count} question(s).").replace("{count}", String(count));
  alert(msg);
  resetCreateQuizForm();
  showView("createQuiz");
}

// iOS Safari: touch events for buttons (click sometimes not firing)
function addTap(el, handler) {
  if (!el) return;
  el.addEventListener("click", handler);
  el.addEventListener("touchend", (e) => {
    e.preventDefault();
    handler();
  }, { passive: false });
}

// iOS Safari: tuşlara basınca hiçbir şey olmuyor – tüm butonlarda touchend ile click tetikle
var isIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
if (isIOS) {
  document.addEventListener("touchend", function (e) {
    var btn = e.target && e.target.closest ? e.target.closest("button") : null;
    if (btn && !btn.disabled) {
      e.preventDefault();
      btn.click();
    }
  }, { passive: false });
}

// Event wiring
const mainQuizSearchEl = document.getElementById("main-quiz-search");
if (mainQuizSearchEl) {
  mainQuizSearchEl.addEventListener("input", () => {
    mainPageSearchQuery = mainQuizSearchEl.value;
    renderMainSearchResults();
  });
  mainQuizSearchEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      showView("quizSelect");
      requestAnimationFrame(() => refreshQuizSelect());
    }
  });
}

playQuizBtn.addEventListener("click", () => {
  showView("quizSelect");
  requestAnimationFrame(() => {
    refreshQuizSelect();
  });
});

createQuizBtn.addEventListener("click", () => {
  resetCreateQuizForm();
  showView("createQuiz");
  requestAnimationFrame(() => {
    refreshEditQuizSelect();
  });
});

const settingsBtnNav = document.getElementById("settings-btn");
if (settingsBtnNav) settingsBtnNav.addEventListener("click", () => showView("settings"));

const discoverQuizBtn = document.getElementById("discover-quiz-btn");
if (discoverQuizBtn) discoverQuizBtn.addEventListener("click", () => {
  showView("discover");
  if (supabaseClient) loadDiscoverQuizzes();
  else ensureSupabaseThenRun(() => loadDiscoverQuizzes());
});

if (document.getElementById("auth-nickname-btn")) {
  document.getElementById("auth-nickname-btn").addEventListener("click", () => {
    if (currentAuthUser) { showView("profile"); loadProfile(); }
  });
}

// Profil: avatar + isim, Profili düzenle butonu (kendi profilinde), paylaşılan quizler
async function loadProfile() {
  if (!supabaseClient || !currentAuthUser) return;
  const nickEl = document.getElementById("profile-nickname");
  const imgEl = document.getElementById("profile-avatar-img");
  const placeEl = document.getElementById("profile-avatar-placeholder");
  const editBtn = document.getElementById("profile-edit-btn");
  const { data: profile } = await supabaseClient.from("profiles").select("avatar_url,nickname").eq("id", currentAuthUser.id).single();
  const nick = (profile?.nickname || currentAuthUser.user_metadata?.nickname || currentAuthUser.user_metadata?.name || currentAuthUser.email?.split("@")[0] || "").trim() || currentAuthUser.email || "";
  if (nickEl) nickEl.textContent = nick;
  const headerNick = document.getElementById("auth-nickname");
  if (headerNick) headerNick.textContent = nick;
  const safeAvatar = profile?.avatar_url ? sanitizeImageSrc(profile.avatar_url) : "";
  if (safeAvatar && imgEl && placeEl) { imgEl.src = safeAvatar; imgEl.classList.remove("hidden"); placeEl.classList.add("hidden"); }
  else if (imgEl && placeEl) { imgEl.classList.add("hidden"); placeEl.classList.remove("hidden"); }
  if (editBtn) { editBtn.classList.remove("hidden"); editBtn.textContent = t("editProfile"); }
  await loadProfileSharedQuizzes();
}
async function loadProfileSharedQuizzes() {
  const titleEl = document.getElementById("profile-shared-title");
  const listEl = document.getElementById("profile-shared-list");
  if (!listEl || !currentAuthUser || !supabaseClient) return;
  listEl.innerHTML = "";
  titleEl?.classList.add("hidden");
  const { data: rows } = await supabaseClient.from("public_quizzes").select("quiz_id").eq("user_id", currentAuthUser.id).order("created_at", { ascending: false });
  if (!rows?.length) return;
  titleEl?.classList.remove("hidden");
  if (titleEl) titleEl.textContent = t("profileSharedQuizzes");
  const quizIds = rows.map((r) => r.quiz_id);
  const { data: quizData } = await supabaseClient.from("quizzes").select("id,name,description,questions").in("id", quizIds);
  const byId = {};
  if (quizData) for (const q of quizData) byId[q.id] = q;
  const ratingsMap = await getQuizRatings(quizIds);
  for (const r of rows) {
    const quiz = byId[r.quiz_id];
    if (!quiz) continue;
    const avgStr = formatRating(ratingsMap[r.quiz_id] ? ratingsMap[r.quiz_id].avg : null);
    const card = document.createElement("article");
    card.className = "discover-card profile-shared-card";
    card.innerHTML = `
      <div class="discover-card-main">
        <h3 class="discover-card-title">${escapeHtml(quiz.name)}</h3>
        <p class="discover-card-desc">${escapeHtml((quiz.description || "").trim() || "—")}</p>
      </div>
      <div class="discover-card-rating"><span class="discover-rating-stars">★</span> ${avgStr}/5</div>
    `;
    card.addEventListener("click", () => openDiscoverPreview(quiz, "", ratingsMap[r.quiz_id]));
    listEl.appendChild(card);
  }
}
document.getElementById("profile-edit-btn")?.addEventListener("click", () => { showView("profileEdit"); loadProfileEdit(); });

// Profil düzenle ekranı: avatar + nickname (20 günde bir)
async function loadProfileEdit() {
  if (!supabaseClient || !currentAuthUser) return;
  const imgEl = document.getElementById("profile-edit-avatar-img");
  const placeEl = document.getElementById("profile-edit-avatar-placeholder");
  const inputEl = document.getElementById("profile-edit-nickname-input");
  const cooldownEl = document.getElementById("profile-edit-nickname-cooldown");
  const { data: profile } = await supabaseClient.from("profiles").select("avatar_url,nickname,last_nickname_change").eq("id", currentAuthUser.id).single();
  const nick = (profile?.nickname || "").trim();
  if (inputEl) inputEl.value = nick;
  const safeAvatar = profile?.avatar_url ? sanitizeImageSrc(profile.avatar_url) : "";
  if (safeAvatar && imgEl && placeEl) { imgEl.src = safeAvatar; imgEl.classList.remove("hidden"); placeEl.classList.add("hidden"); }
  else if (imgEl && placeEl) { imgEl.classList.add("hidden"); placeEl.classList.remove("hidden"); }
  const avatarBtn = document.getElementById("profile-edit-avatar-btn");
  if (avatarBtn) avatarBtn.textContent = safeAvatar ? (currentLang === "tr" ? "Profil resmini düzenle" : "Edit profile photo") : (currentLang === "tr" ? "Profil resmi ekle" : "Add profile photo");
  if (cooldownEl) {
    cooldownEl.classList.remove("hidden");
    const last = profile?.last_nickname_change ? new Date(profile.last_nickname_change) : null;
    const daysSince = last ? Math.floor((new Date() - last) / (24 * 60 * 60 * 1000)) : 999;
    if (!last || daysSince >= NICKNAME_COOLDOWN_DAYS) cooldownEl.textContent = t("nicknameCooldownReady");
    else cooldownEl.textContent = (t("nicknameCooldown") || "").replace("{days}", String(Math.max(0, NICKNAME_COOLDOWN_DAYS - daysSince)));
  }
}
document.getElementById("profile-edit-avatar-btn")?.addEventListener("click", () => document.getElementById("profile-edit-avatar-input")?.click());
document.getElementById("profile-edit-avatar-input")?.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file || !supabaseClient || !currentAuthUser) return;
  const path = `${currentAuthUser.id}/avatar`;
  const { error } = await supabaseClient.storage.from("avatars").upload(path, file, { upsert: true });
  if (error) { console.warn(error); return; }
  const { data: { publicUrl } } = supabaseClient.storage.from("avatars").getPublicUrl(path);
  await supabaseClient.from("profiles").update({ avatar_url: publicUrl, updated_at: new Date().toISOString() }).eq("id", currentAuthUser.id);
  loadProfileEdit();
  loadProfile();
  updateAuthUI();
  e.target.value = "";
});
document.getElementById("profile-edit-nickname-save")?.addEventListener("click", async () => {
  if (!supabaseClient || !currentAuthUser) return;
  const inputEl = document.getElementById("profile-edit-nickname-input");
  const newNick = inputEl?.value?.trim()?.slice(0, 50) || "";
  if (!newNick) return;
  const { data: profile } = await supabaseClient.from("profiles").select("last_nickname_change").eq("id", currentAuthUser.id).single();
  const last = profile?.last_nickname_change ? new Date(profile.last_nickname_change) : null;
  const daysSince = last ? Math.floor((new Date() - last) / (24 * 60 * 60 * 1000)) : 999;
  if (last && daysSince < NICKNAME_COOLDOWN_DAYS) {
    alert(currentLang === "tr" ? "Nickname 20 günde bir değiştirilebilir. Henüz süre dolmadı." : "Nickname can only be changed once every 20 days.");
    return;
  }
  const { error } = await supabaseClient.from("profiles").update({ nickname: newNick, last_nickname_change: new Date().toISOString() }).eq("id", currentAuthUser.id);
  if (error) { console.warn(error); return; }
  loadProfileEdit();
  loadProfile();
  updateAuthUI();
});
if (document.getElementById("profile-friends-btn")) {
  document.getElementById("profile-friends-btn").addEventListener("click", () => { showView("friends"); loadFriendsView(); });
}

// Bildirim: okunmamış sayısı, dropdown (quiz atan kişiler), bütün mesajlar, sohbet
async function fetchUnreadNotificationCount() {
  if (!supabaseClient || !currentAuthUser) return 0;
  const { count, error } = await supabaseClient.from("quiz_shared_to").select("id", { count: "exact", head: true }).eq("to_user_id", currentAuthUser.id).is("read_at", null);
  if (error) return 0;
  return count ?? 0;
}
async function updateNotificationBadge() {
  const badge = document.getElementById("notification-badge");
  if (!badge) return;
  if (!currentAuthUser || !supabaseClient) { badge.classList.add("hidden"); return; }
  const n = await fetchUnreadNotificationCount();
  badge.textContent = n > 99 ? "99+" : String(n);
  badge.classList.toggle("hidden", n === 0);
}
function toggleNotificationDropdown() {
  const dd = document.getElementById("notification-dropdown");
  if (!dd) return;
  dd.classList.toggle("hidden");
  if (!dd.classList.contains("hidden")) loadNotificationDropdownList();
}
async function loadNotificationDropdownList() {
  const list = document.getElementById("notification-dropdown-list");
  if (!list || !supabaseClient || !currentAuthUser) return;
  list.innerHTML = "";
  const { data: rows } = await supabaseClient.from("quiz_shared_to").select("id,from_user_id,quiz_id,created_at").eq("to_user_id", currentAuthUser.id).order("created_at", { ascending: false }).limit(4);
  if (!rows?.length) { list.innerHTML = "<p class=\"hint\" style=\"padding:12px;\">" + escapeHtml(t("noMessagesYet")) + "</p>"; return; }
  const quizIds = [...new Set(rows.map((r) => r.quiz_id))];
  const senderIds = [...new Set(rows.map((r) => r.from_user_id))];
  const { data: quizData } = await supabaseClient.from("quizzes").select("id,name").in("id", quizIds);
  const { data: profiles } = await supabaseClient.from("profiles").select("id,nickname").in("id", senderIds);
  const quizByName = {};
  if (quizData) for (const q of quizData) quizByName[q.id] = q.name || "—";
  const nickByUser = {};
  if (profiles) for (const p of profiles) nickByUser[p.id] = p.nickname || "";
  for (const r of rows) {
    const nick = nickByUser[r.from_user_id] || r.from_user_id.slice(0, 8);
    const quizName = quizByName[r.quiz_id] || "—";
    const row = document.createElement("button");
    row.type = "button";
    row.className = "notification-dropdown-item";
    row.innerHTML = `<span class="notification-item-sender">${escapeHtml(nick)}</span><span class="notification-item-quiz">${escapeHtml(quizName)}</span>`;
    row.dataset.userId = r.from_user_id;
    row.addEventListener("click", () => { closeNotificationDropdown(); openChatWith(r.from_user_id); });
    list.appendChild(row);
  }
}
function closeNotificationDropdown() {
  document.getElementById("notification-dropdown")?.classList.add("hidden");
}
document.getElementById("notification-btn")?.addEventListener("click", (e) => { e.stopPropagation(); toggleNotificationDropdown(); });
document.getElementById("notification-all-messages")?.addEventListener("click", () => { closeNotificationDropdown(); showView("messagesList"); loadMessagesList(0); });
document.addEventListener("click", (e) => { if (!e.target.closest(".header-notif-wrap")) closeNotificationDropdown(); });
document.getElementById("notification-dropdown")?.addEventListener("click", (e) => e.stopPropagation());

// Kaydırma sırasında yanlış tıklamayı engelleme devre dışı (keşfet kartı tıklamasını bozuyordu)

async function openChatWith(otherUserId) {
  chatWithUserId = otherUserId;
  await markSharedAsRead(otherUserId);
  updateNotificationBadge();
  showView("chat");
  loadChatView();
}
async function markSharedAsRead(fromUserId) {
  if (!supabaseClient || !currentAuthUser) return;
  await supabaseClient.from("quiz_shared_to").update({ read_at: new Date().toISOString() }).eq("to_user_id", currentAuthUser.id).eq("from_user_id", fromUserId);
}

async function loadMessagesList(page) {
  messagesListCurrentPage = page;
  const container = document.getElementById("messages-list-container");
  const paginationEl = document.getElementById("messages-list-pagination");
  if (!container || !supabaseClient || !currentAuthUser) return;
  const { data: all } = await supabaseClient.from("quiz_shared_to").select("from_user_id,to_user_id,created_at").or(`from_user_id.eq.${currentAuthUser.id},to_user_id.eq.${currentAuthUser.id}`).order("created_at", { ascending: false });
  const otherIds = new Set();
  const lastAt = {};
  if (all) for (const r of all) {
    const other = r.from_user_id === currentAuthUser.id ? r.to_user_id : r.from_user_id;
    otherIds.add(other);
    if (!lastAt[other] || r.created_at > lastAt[other]) lastAt[other] = r.created_at;
  }
  const sorted = [...otherIds].sort((a, b) => (lastAt[b] || "").localeCompare(lastAt[a] || ""));
  const total = sorted.length;
  const start = page * MESSAGES_PER_PAGE;
  const pageIds = sorted.slice(start, start + MESSAGES_PER_PAGE);
  container.innerHTML = "";
  document.getElementById("messages-list-title").textContent = t("messages");
  for (const id of pageIds) {
    const { data: prof } = await supabaseClient.from("profiles").select("nickname").eq("id", id).single();
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "messages-list-item";
    btn.textContent = prof?.nickname || id.slice(0, 8);
    btn.addEventListener("click", () => openChatWith(id));
    container.appendChild(btn);
  }
  if (paginationEl) {
    if (total <= MESSAGES_PER_PAGE) { paginationEl.classList.add("hidden"); paginationEl.innerHTML = ""; return; }
    paginationEl.classList.remove("hidden");
    paginationEl.innerHTML = "";
    const totalPages = Math.ceil(total / MESSAGES_PER_PAGE);
    if (page > 0) {
      const prev = document.createElement("button");
      prev.className = "secondary-btn";
      prev.textContent = "←";
      prev.addEventListener("click", () => loadMessagesList(page - 1));
      paginationEl.appendChild(prev);
    }
    const info = document.createElement("span");
    info.className = "pagination-info";
    info.textContent = (page + 1) + " / " + totalPages;
    paginationEl.appendChild(info);
    if (page < totalPages - 1) {
      const next = document.createElement("button");
      next.className = "secondary-btn";
      next.textContent = "→";
      next.addEventListener("click", () => loadMessagesList(page + 1));
      paginationEl.appendChild(next);
    }
  }
}

async function loadChatView() {
  const titleEl = document.getElementById("chat-title");
  const messagesEl = document.getElementById("chat-messages");
  if (!messagesEl || !chatWithUserId || !supabaseClient || !currentAuthUser) return;
  const { data: prof } = await supabaseClient.from("profiles").select("nickname").eq("id", chatWithUserId).single();
  if (titleEl) titleEl.textContent = prof?.nickname || chatWithUserId.slice(0, 8);
  const { data: rows } = await supabaseClient.from("quiz_shared_to").select("id,from_user_id,to_user_id,quiz_id,created_at").or(`and(from_user_id.eq.${currentAuthUser.id},to_user_id.eq.${chatWithUserId}),and(from_user_id.eq.${chatWithUserId},to_user_id.eq.${currentAuthUser.id})`).order("created_at", { ascending: true });
  messagesEl.innerHTML = "";
  if (!rows?.length) { messagesEl.innerHTML = "<p class=\"hint\">" + escapeHtml(t("noMessagesYet")) + "</p>"; return; }
  const quizIds = [...new Set(rows.map((r) => r.quiz_id))];
  const { data: quizData } = await supabaseClient.from("quizzes").select("id,name,description,questions").in("id", quizIds);
  const quizById = {};
  if (quizData) for (const q of quizData) quizById[q.id] = q;
  for (const r of rows) {
    const quiz = quizById[r.quiz_id];
    const isMe = r.from_user_id === currentAuthUser.id;
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble " + (isMe ? "chat-bubble-me" : "chat-bubble-them");
    const name = (quiz && quiz.name) ? escapeHtml(quiz.name) : "—";
    const desc = (quiz && (quiz.description || "").trim()) ? escapeHtml((quiz.description || "").trim().slice(0, 80)) + (quiz.description.length > 80 ? "…" : "") : "";
    const createdAt = r.created_at ? new Date(r.created_at) : null;
    const timeStr = createdAt ? formatChatTime(createdAt) : "";
    const dateStr = createdAt ? formatChatDate(createdAt) : "";
    bubble.innerHTML = `
      <div class="chat-bubble-content">
        <div class="chat-bubble-title">${name}</div>${desc ? `<div class="chat-bubble-desc">${desc}</div>` : ""}
      </div>
      <div class="chat-bubble-time-wrap">
        <button type="button" class="chat-bubble-time" data-time="${escapeHtml(r.created_at || "")}">${escapeHtml(timeStr)}</button>
        <div class="chat-bubble-date hidden">${escapeHtml(dateStr)}</div>
      </div>
    `;
    const timeBtn = bubble.querySelector(".chat-bubble-time");
    const dateEl = bubble.querySelector(".chat-bubble-date");
    if (timeBtn && dateEl) timeBtn.addEventListener("click", (e) => { e.stopPropagation(); dateEl.classList.toggle("hidden"); });
    const content = bubble.querySelector(".chat-bubble-content");
    if (quiz && content) content.addEventListener("click", () => { openDiscoverPreview(quiz, isMe ? "" : (prof?.nickname || ""), null); });
    messagesEl.appendChild(bubble);
  }
}
function formatChatTime(d) {
  const h = d.getHours();
  const m = d.getMinutes();
  return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
}
function formatChatDate(d) {
  if (!d || !(d instanceof Date) || isNaN(d.getTime())) return "";
  const months = currentLang === "tr" ? ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"] : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return d.getDate() + " " + (months[d.getMonth()] || "") + " " + d.getFullYear();
}

// Arkadaşlar: arama, bekleyen istekler, liste
async function loadFriendsView() {
  if (!supabaseClient || !currentAuthUser) return;
  const pendingEl = document.getElementById("friends-pending-list");
  const listEl = document.getElementById("friends-list");
  const { data: pending } = await supabaseClient.from("friend_requests").select("id,from_user_id,to_user_id,status").or(`from_user_id.eq.${currentAuthUser.id},to_user_id.eq.${currentAuthUser.id}`).eq("status", "pending");
  pendingEl.innerHTML = "";
  if (pending) for (const r of pending) {
    const otherId = r.from_user_id === currentAuthUser.id ? r.to_user_id : r.from_user_id;
    const { data: prof } = await supabaseClient.from("profiles").select("nickname").eq("id", otherId).single();
    const li = document.createElement("li");
    li.innerHTML = `<span>${escapeHtml(prof?.nickname || otherId.slice(0, 8))}</span>`;
    if (r.to_user_id === currentAuthUser.id) {
      const acc = document.createElement("button"); acc.className = "secondary-btn small-btn"; acc.textContent = "Kabul"; acc.addEventListener("click", () => acceptFriendRequest(r.id, otherId));
      const rej = document.createElement("button"); rej.className = "secondary-btn small-btn"; rej.textContent = "Reddet"; rej.addEventListener("click", () => rejectFriendRequest(r.id));
      li.appendChild(acc); li.appendChild(rej);
    }
    pendingEl.appendChild(li);
  }
  const { data: friendRows } = await supabaseClient.from("friendships").select("friend_id").eq("user_id", currentAuthUser.id);
  listEl.innerHTML = "";
  if (friendRows) for (const r of friendRows) {
    const { data: prof } = await supabaseClient.from("profiles").select("nickname").eq("id", r.friend_id).single();
    const li = document.createElement("li");
    li.textContent = prof?.nickname || r.friend_id.slice(0, 8);
    listEl.appendChild(li);
  }
}
async function acceptFriendRequest(requestId, friendId) {
  if (!supabaseClient || !currentAuthUser) return;
  await supabaseClient.from("friend_requests").update({ status: "accepted" }).eq("id", requestId);
  await supabaseClient.from("friendships").insert([{ user_id: currentAuthUser.id, friend_id: friendId }, { user_id: friendId, friend_id: currentAuthUser.id }]);
  loadFriendsView();
}
async function rejectFriendRequest(requestId) {
  if (!supabaseClient) return;
  await supabaseClient.from("friend_requests").update({ status: "rejected" }).eq("id", requestId);
  loadFriendsView();
}
if (document.getElementById("friends-search-btn")) {
  document.getElementById("friends-search-btn").addEventListener("click", async () => {
    const q = document.getElementById("friends-search-nickname")?.value?.trim();
    if (!q || !supabaseClient || !currentAuthUser) return;
    const { data: profiles } = await supabaseClient.from("profiles").select("id,nickname").ilike("nickname", "%" + q + "%").neq("id", currentAuthUser.id).limit(20);
    const wrap = document.getElementById("friends-search-results");
    wrap.classList.remove("hidden");
    wrap.innerHTML = "";
    if (!profiles?.length) { wrap.innerHTML = "<p class=\"hint\">Sonuç yok.</p>"; return; }
    for (const p of profiles) {
      const row = document.createElement("div"); row.className = "friends-list"; row.style.marginBottom = "8px";
      row.innerHTML = `<span>${escapeHtml(p.nickname || p.id.slice(0, 8))}</span>`;
      const btn = document.createElement("button"); btn.className = "secondary-btn small-btn"; btn.textContent = "İstek gönder";
      btn.addEventListener("click", async () => {
        await supabaseClient.from("friend_requests").upsert({ from_user_id: currentAuthUser.id, to_user_id: p.id, status: "pending" }, { onConflict: "from_user_id,to_user_id" });
        loadFriendsView();
      });
      row.appendChild(btn); wrap.appendChild(row);
    }
  });
}

// Quiz paylaş modal
let shareQuizModalQuizId = null;
let shareQuizSelectedUserIds = [];
function openShareQuizModal(quizId) {
  shareQuizModalQuizId = quizId;
  shareQuizSelectedUserIds = [];
  document.getElementById("share-quiz-modal-overlay")?.classList.remove("hidden");
  renderShareQuizFriendsList();
  document.getElementById("share-quiz-search-user").value = "";
  document.getElementById("share-quiz-search-results").classList.add("hidden");
}
function closeShareQuizModal() {
  document.getElementById("share-quiz-modal-overlay")?.classList.add("hidden");
  shareQuizModalQuizId = null;
}
async function renderShareQuizFriendsList() {
  const list = document.getElementById("share-quiz-friends-list");
  if (!list || !currentAuthUser || !supabaseClient) return;
  list.innerHTML = "";
  const { data: friendRows } = await supabaseClient.from("friendships").select("friend_id").eq("user_id", currentAuthUser.id);
  if (!friendRows?.length) { list.innerHTML = "<p class=\"hint\">Arkadaş listeniz boş.</p>"; return; }
  for (const r of friendRows) {
    const { data: prof } = await supabaseClient.from("profiles").select("id,nickname").eq("id", r.friend_id).single();
    if (!prof) continue;
    const div = document.createElement("div"); div.className = "share-user-item"; div.dataset.userId = prof.id;
    div.innerHTML = `<span>${escapeHtml(prof.nickname || prof.id.slice(0,8))}</span>`;
    div.addEventListener("click", () => {
      const i = shareQuizSelectedUserIds.indexOf(prof.id);
      if (i >= 0) shareQuizSelectedUserIds.splice(i, 1);
      else shareQuizSelectedUserIds.push(prof.id);
      div.classList.toggle("selected", shareQuizSelectedUserIds.includes(prof.id));
    });
    list.appendChild(div);
  }
}
document.getElementById("share-quiz-search-user")?.addEventListener("input", async (e) => {
  const q = e.target.value?.trim();
  const results = document.getElementById("share-quiz-search-results");
  if (!q || !supabaseClient || !currentAuthUser) { results.classList.add("hidden"); return; }
  const { data: profiles } = await supabaseClient.from("profiles").select("id,nickname").ilike("nickname", "%" + q + "%").neq("id", currentAuthUser.id).limit(10);
  results.classList.remove("hidden");
  results.innerHTML = "";
  if (!profiles?.length) return;
  for (const p of profiles) {
    const div = document.createElement("div"); div.className = "share-user-item"; div.dataset.userId = p.id;
    div.innerHTML = `<span>${escapeHtml(p.nickname || p.id.slice(0,8))}</span>`;
    div.addEventListener("click", () => {
      if (!shareQuizSelectedUserIds.includes(p.id)) shareQuizSelectedUserIds.push(p.id);
      div.classList.add("selected");
      renderShareQuizFriendsList();
    });
    results.appendChild(div);
  }
});
document.getElementById("share-quiz-modal-close")?.addEventListener("click", closeShareQuizModal);
document.getElementById("share-quiz-modal-overlay")?.addEventListener("click", (e) => { if (e.target.id === "share-quiz-modal-overlay") closeShareQuizModal(); });

// Kullanıcı Sözleşmesi modal
document.getElementById("terms-link-btn")?.addEventListener("click", () => {
  document.getElementById("terms-modal-overlay")?.classList.remove("hidden");
});
document.getElementById("terms-modal-close")?.addEventListener("click", () => {
  document.getElementById("terms-modal-overlay")?.classList.add("hidden");
});
document.getElementById("terms-modal-overlay")?.addEventListener("click", (e) => {
  if (e.target.id === "terms-modal-overlay") document.getElementById("terms-modal-overlay")?.classList.add("hidden");
});
document.getElementById("share-quiz-send-btn")?.addEventListener("click", async () => {
  if (!shareQuizModalQuizId || !supabaseClient || !currentAuthUser) return;
  for (const toId of shareQuizSelectedUserIds) {
    await supabaseClient.from("quiz_shared_to").insert({ from_user_id: currentAuthUser.id, to_user_id: toId, quiz_id: shareQuizModalQuizId });
  }
  closeShareQuizModal();
  if (shareQuizSelectedUserIds.length) alert(currentLang === "tr" ? "Gönderildi." : "Sent.");
});
// Herkese açık paylaşımda küfür/argo kontrolü (sadece "Profilinde Paylaş"; arkadaşa paylaşımda yok)
function normalizeForProfanityCheck(s) {
  if (typeof s !== "string") return "";
  const t = s.toLowerCase()
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ç/g, "c")
    .replace(/[^a-z0-9\s]/g, " ");
  return " " + t + " ";
}
const BANNED_WORDS_PUBLIC = ["amk","aq","sik","sike","göt","orospu","piç","kahpe","mal","gerizekalı","salak","aptal","fuck","shit","bitch","ass","damn","crap","dick","pussy","wtf","fck","sht"]; // genişletilebilir
function containsProfanity(text) {
  const norm = normalizeForProfanityCheck(text);
  for (let i = 0; i < BANNED_WORDS_PUBLIC.length; i++) {
    const w = BANNED_WORDS_PUBLIC[i];
    const idx = norm.indexOf(" " + w + " ");
    if (idx !== -1) return true;
    if (norm.startsWith(w + " ") || norm.endsWith(" " + w)) return true;
  }
  return false;
}
function getQuizTextForProfanityCheck(quiz) {
  if (!quiz) return "";
  let s = (quiz.name || "") + " " + (quiz.description || "");
  const questions = Array.isArray(quiz.questions) ? quiz.questions : [];
  questions.forEach((q) => {
    s += " " + (q.text || "");
    (q.options || []).forEach((opt) => {
      s += " " + (typeof opt === "string" ? opt : (opt && opt.text) || "");
    });
  });
  return s;
}
document.getElementById("share-quiz-link-btn")?.addEventListener("click", () => {
  if (!shareQuizModalQuizId) return;
  const base = window.location.origin + (window.location.pathname || "/");
  const link = base.replace(/\/?$/, "") + "#/play/" + shareQuizModalQuizId;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(() => {
      alert(currentLang === "tr" ? "Link kopyalandı." : "Link copied.");
    }).catch(() => { fallbackCopyLink(link); });
  } else { fallbackCopyLink(link); }
});
function fallbackCopyLink(link) {
  const ta = document.createElement("textarea");
  ta.value = link;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    alert(currentLang === "tr" ? "Link kopyalandı." : "Link copied.");
  } catch (e) { alert(link); }
  document.body.removeChild(ta);
}
document.getElementById("share-quiz-public-btn")?.addEventListener("click", async () => {
  if (!shareQuizModalQuizId || !supabaseClient || !currentAuthUser) return;
  const quiz = quizzes.find((q) => q.id === shareQuizModalQuizId);
  const fullText = getQuizTextForProfanityCheck(quiz);
  if (containsProfanity(fullText)) {
    alert(currentLang === "tr" ? "Herkese açık quiz içeriğinde uygun olmayan ifadeler bulundu. Lütfen quiz adı, açıklama ve soru/cevapları kontrol edin." : "The quiz contains inappropriate language. Please remove offensive content before sharing publicly.");
    return;
  }
  await supabaseClient.from("public_quizzes").upsert({ user_id: currentAuthUser.id, quiz_id: shareQuizModalQuizId }, { onConflict: "user_id,quiz_id" });
  closeShareQuizModal();
  alert(currentLang === "tr" ? "Profilinde paylaşıldı." : "Shared on profile.");
});

// Puan gösterimi: tam sayıda "5", küsürlüde "4.2" (0.1 katları)
function formatRating(avg) {
  if (avg == null || Number.isNaN(Number(avg))) return "—";
  const n = Number(avg);
  if (n === 0) return "—";
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(1);
}

// Quiz puanlama: ortalamaları al, puan gönder
async function getQuizRatings(quizIds) {
  if (!supabaseClient || !quizIds?.length) return {};
  const { data: ratings } = await supabaseClient.from("quiz_ratings").select("quiz_id,rating").in("quiz_id", quizIds);
  const byQuiz = {};
  if (ratings) for (const row of ratings) {
    if (!byQuiz[row.quiz_id]) byQuiz[row.quiz_id] = { sum: 0, count: 0 };
    byQuiz[row.quiz_id].sum += row.rating;
    byQuiz[row.quiz_id].count += 1;
  }
  const out = {};
  for (const id of Object.keys(byQuiz)) {
    const o = byQuiz[id];
    out[id] = { avg: o.sum / o.count, count: o.count };
  }
  return out;
}
async function getMyQuizRating(quizId) {
  if (!supabaseClient || !currentAuthUser || !quizId) return null;
  const { data } = await supabaseClient.from("quiz_ratings").select("rating").eq("user_id", currentAuthUser.id).eq("quiz_id", quizId).maybeSingle();
  return data?.rating ?? null;
}
async function submitQuizRating(quizId, rating) {
  if (!supabaseClient || !currentAuthUser || rating < 1 || rating > 5) return;
  await supabaseClient.from("quiz_ratings").upsert({ user_id: currentAuthUser.id, quiz_id: quizId, rating }, { onConflict: "user_id,quiz_id" });
}

// Quizleri keşfet: Reddit tarzı kartlar (başlık, açıklama, yanda puan), tıklanınca önizleme popup
let discoverPreviewQuiz = null;
function ensureSupabaseThenRun(fn) {
  if (supabaseClient) { fn(); return; }
  if (typeof window.supabase !== "undefined") { initSupabase(); if (supabaseClient) fn(); return; }
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js";
  s.async = false;
  s.onload = function () { initSupabase(); if (supabaseClient) fn(); };
  document.head.appendChild(s);
}
async function loadDiscoverQuizzes() {
  if (!supabaseClient) return;
  const wrap = document.getElementById("discover-list-wrap");
  const feed = document.getElementById("discover-feed");
  const empty = document.getElementById("discover-empty");
  if (!wrap || !feed) return;
  wrap.classList.remove("hidden");
  const { data: rows } = await supabaseClient.from("public_quizzes").select("id,user_id,quiz_id,view_count").order("created_at", { ascending: false }).limit(50);
  feed.innerHTML = "";
  if (!rows?.length) { empty?.classList.remove("hidden"); empty.textContent = t("discoverEmpty"); return; }
  empty?.classList.add("hidden");
  const quizIds = [...new Set(rows.map((r) => r.quiz_id))];
  const [quizDataResult, ratingsMap] = await Promise.all([
    supabaseClient.from("quizzes").select("id,name,description,questions").in("id", quizIds),
    getQuizRatings(quizIds)
  ]);
  const quizData = quizDataResult?.data || [];
  const byId = {};
  for (const q of quizData) byId[q.id] = q;
  const authorCache = {};
  for (const r of rows) {
    const quiz = byId[r.quiz_id];
    if (!quiz) continue;
    if (currentAuthUser && !authorCache[r.user_id]) {
      const { data: prof } = await supabaseClient.from("profiles").select("nickname").eq("id", r.user_id).single();
      authorCache[r.user_id] = prof?.nickname || "";
    }
    const author = currentAuthUser ? (authorCache[r.user_id] || "—") : "—";
    const ratingInfo = ratingsMap[quiz.id];
    const avgStr = formatRating(ratingInfo ? ratingInfo.avg : null);
    const viewCount = r.view_count != null ? r.view_count : 0;
    const viewStr = currentLang === "tr" ? `(${viewCount} kez girildi)` : `(${viewCount} views)`;
    const card = document.createElement("article");
    card.className = "discover-card";
    card.dataset.quizId = quiz.id;
    card.dataset.publicRowId = r.id;
    card.innerHTML = `
      <div class="discover-card-main">
        <h3 class="discover-card-title">${escapeHtml(quiz.name)}</h3>
        <p class="discover-card-desc">${escapeHtml((quiz.description || "").trim() || "—")}</p>
        <span class="discover-card-author">${escapeHtml(author)}</span>
        <span class="discover-card-views">${escapeHtml(viewStr)}</span>
      </div>
      <div class="discover-card-rating" aria-label="Puan"><span class="discover-rating-stars">★</span> ${avgStr}/5</div>
      <button type="button" class="discover-card-hit" aria-label="${escapeHtml(quiz.name)}"></button>
    `;
    const hitBtn = card.querySelector(".discover-card-hit");
    if (hitBtn) {
      hitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openDiscoverPreview(quiz, author, ratingsMap[quiz.id], r.id);
      });
    }
    feed.appendChild(card);
  }
}
function updateDiscoverPreviewShuffleUi() {
  const shuf = document.getElementById("discover-preview-shuffle");
  const shufOpt = document.getElementById("discover-preview-shuffle-options");
  if (shuf) shuf.classList.toggle("active", !!shuffleEnabled);
  if (shufOpt) shufOpt.classList.toggle("active", !!shuffleOptionsEnabled);
}
function openDiscoverPreview(quiz, author, ratingInfo, publicRowId) {
  discoverPreviewQuiz = quiz;
  if (publicRowId && supabaseClient) {
    supabaseClient.rpc("increment_public_quiz_view", { pid: publicRowId }).catch(() => {});
  }
  const overlay = document.getElementById("discover-preview-overlay");
  const titleEl = document.getElementById("discover-preview-title");
  const descEl = document.getElementById("discover-preview-desc");
  const ratingEl = document.getElementById("discover-preview-rating");
  const startBtn = document.getElementById("discover-preview-start-btn");
  if (titleEl) titleEl.textContent = quiz.name;
  if (descEl) descEl.textContent = (quiz.description || "").trim() || "—";
  renderPreviewRating(ratingEl, quiz.id, ratingInfo).catch(() => {});
  updateDiscoverPreviewShuffleUi();
  const shuffleLabel = document.getElementById("discover-preview-shuffle-label");
  const shuffleOptLabel = document.getElementById("discover-preview-shuffle-options-label");
  if (shuffleLabel) shuffleLabel.textContent = t("randomOrder");
  if (shuffleOptLabel) shuffleOptLabel.textContent = t("shuffleOptions");
  if (overlay) {
    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
  }
  startBtn?.replaceWith(startBtn.cloneNode(true));
  const newStart = document.getElementById("discover-preview-start-btn");
  if (newStart) newStart.textContent = t("discoverPreviewStart") || "Quiz'i Başlat";
  newStart?.addEventListener("click", () => {
    closeDiscoverPreview();
    playDiscoverQuiz(quiz);
  });
  const addToMineBtn = document.getElementById("discover-preview-add-to-mine-btn");
  if (addToMineBtn) {
    addToMineBtn.textContent = t("addToMyQuizzes");
    addToMineBtn.style.display = currentAuthUser ? "" : "none";
    addToMineBtn.onclick = async () => {
      if (!currentAuthUser || !supabaseClient) return;
      const ok = await copyQuizToMyQuizzes(quiz);
      if (ok) { closeDiscoverPreview(); alert(currentLang === "tr" ? "Quizlerinize eklendi." : "Added to your quizzes."); }
    };
  }
}
async function renderPreviewRating(container, quizId, ratingInfo) {
  if (!container) return;
  container.innerHTML = "";
  const avg = ratingInfo ? ratingInfo.avg : 0;
  const count = ratingInfo ? ratingInfo.count : 0;
  const avgStr = formatRating(avg);
  const label = document.createElement("span");
  label.className = "discover-preview-rating-label";
  label.innerHTML = `<span class="discover-rating-stars">★</span> ${escapeHtml(avgStr)}/5${count ? ` (${count})` : ""}`;
  container.appendChild(label);
  if (!currentAuthUser || !supabaseClient) {
    const loginHint = document.createElement("p");
    loginHint.className = "discover-preview-rating-login-hint";
    loginHint.textContent = currentLang === "tr" ? "Puan verebilmek için giriş yapın (üyelik gerekir)" : "Log in to rate (membership required)";
    container.appendChild(loginHint);
    return;
  }
  const myRating = await getMyQuizRating(quizId);
  const starsWrap = document.createElement("div");
  starsWrap.className = "discover-preview-stars";
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "discover-star-btn" + (myRating !== null && i <= myRating ? " rated" : "");
    btn.setAttribute("aria-label", `${i} yıldız`);
    btn.textContent = "★";
    btn.dataset.rating = String(i);
    if (myRating === null) {
      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        if (!currentAuthUser || !supabaseClient) return;
        await submitQuizRating(quizId, i);
        const newRatings = await getQuizRatings([quizId]);
        await renderPreviewRating(container, quizId, newRatings[quizId]);
      });
    } else {
      btn.disabled = true;
    }
    starsWrap.appendChild(btn);
  }
  container.appendChild(starsWrap);
}
function closeDiscoverPreview() {
  discoverPreviewQuiz = null;
  document.getElementById("discover-preview-overlay")?.classList.add("hidden");
}
function playDiscoverQuiz(quiz) {
  lastPlayedQuizFromShared = true;
  const id = quiz.id;
  if (!quizzes.find((q) => q.id === id)) quizzes.push({ id: quiz.id, name: quiz.name, description: quiz.description || "", questions: Array.isArray(quiz.questions) ? quiz.questions : [] });
  startQuiz(id);
}
async function copyQuizToMyQuizzes(quiz) {
  if (!supabaseClient || !currentAuthUser || !quiz) return;
  const row = { user_id: currentAuthUser.id, name: (quiz.name || "").trim() || "Kopya quiz", description: quiz.description || "", questions: Array.isArray(quiz.questions) ? quiz.questions : [] };
  const { data, error } = await supabaseClient.from("quizzes").insert(row).select("id").single();
  if (error) { console.warn(error); return false; }
  if (data?.id) quizzes.push({ id: data.id, name: row.name, description: row.description, questions: row.questions });
  return true;
}
if (document.getElementById("discover-preview-close")) {
  document.getElementById("discover-preview-close").addEventListener("click", closeDiscoverPreview);
}
document.getElementById("discover-preview-overlay")?.addEventListener("click", (e) => { if (e.target.id === "discover-preview-overlay") closeDiscoverPreview(); });
document.getElementById("discover-preview-shuffle")?.addEventListener("click", () => {
  shuffleEnabled = !shuffleEnabled;
  saveSettings();
  updateDiscoverPreviewShuffleUi();
  if (shuffleToggleBtn) shuffleToggleBtn.classList.toggle("active", !!shuffleEnabled);
});
document.getElementById("discover-preview-shuffle-options")?.addEventListener("click", () => {
  shuffleOptionsEnabled = !shuffleOptionsEnabled;
  saveSettings();
  updateDiscoverPreviewShuffleUi();
  if (shuffleOptionsToggleBtn) shuffleOptionsToggleBtn.classList.toggle("active", !!shuffleOptionsEnabled);
});

// Auth modal + e-posta doğrulama kodu (kayıt sonrası)
let pendingSignupEmail = "";
let pendingSignupNickname = "";
const authOverlay = document.getElementById("auth-modal-overlay");
const authFormLogin = document.getElementById("auth-form-login");
const authFormSignup = document.getElementById("auth-form-signup");
const authShowSignup = document.getElementById("auth-show-signup");
const authShowLogin = document.getElementById("auth-show-login");
const authModalTitle = document.getElementById("auth-modal-title");

function openAuthModal(mode) {
  if (!authOverlay) return;
  document.getElementById("auth-verify-code-wrap")?.classList.add("hidden");
  document.getElementById("auth-form-signup")?.classList.remove("hidden");
  document.querySelector(".auth-switch")?.classList.remove("hidden");
  if (mode === "signup") {
    authFormLogin.classList.add("hidden");
    authFormSignup.classList.remove("hidden");
    authShowSignup.classList.add("hidden");
    authShowLogin.classList.remove("hidden");
    if (authModalTitle) authModalTitle.textContent = t("signupTitle");
  } else {
    authFormLogin.classList.remove("hidden");
    authFormSignup.classList.add("hidden");
    authShowSignup.classList.remove("hidden");
    authShowLogin.classList.add("hidden");
    if (authModalTitle) authModalTitle.textContent = t("loginTitle");
  }
  authOverlay.classList.remove("hidden");
  authOverlay.setAttribute("aria-hidden", "false");
}

function closeAuthModal() {
  if (authOverlay) {
    authOverlay.classList.add("hidden");
    authOverlay.setAttribute("aria-hidden", "true");
  }
  const errLogin = document.getElementById("auth-login-error");
  const errSignup = document.getElementById("auth-signup-error");
  const errVerify = document.getElementById("auth-verify-code-error");
  if (errLogin) { errLogin.classList.add("hidden"); errLogin.textContent = ""; }
  if (errSignup) { errSignup.classList.add("hidden"); errSignup.textContent = ""; }
  if (errVerify) { errVerify.classList.add("hidden"); errVerify.textContent = ""; }
  document.getElementById("auth-form-signup")?.classList.remove("hidden");
  document.getElementById("auth-verify-code-wrap")?.classList.add("hidden");
  document.querySelector(".auth-switch")?.classList.remove("hidden");
  pendingSignupEmail = "";
  pendingSignupNickname = "";
}

function getAuthErrorMessage() {
  const url = (typeof window !== "undefined" && window.SUPABASE_URL) ? String(window.SUPABASE_URL).trim() : "";
  const key = (typeof window !== "undefined" && window.SUPABASE_ANON_KEY) ? String(window.SUPABASE_ANON_KEY).trim() : "";
  if (url && key && typeof window.supabase === "undefined") return t("authSdkLoadFailed");
  return t("authConfigNeeded");
}

function loadSupabaseSdkThenOpenModal(mode) {
  if (supabaseClient) {
    if (mode === "login") openAuthModal("login");
    else openAuthModal("signup");
    return;
  }
  const url = (typeof window !== "undefined" && window.SUPABASE_URL) ? String(window.SUPABASE_URL).trim() : "";
  const key = (typeof window !== "undefined" && window.SUPABASE_ANON_KEY) ? String(window.SUPABASE_ANON_KEY).trim() : "";
  if (!url || !key) {
    alert(getAuthErrorMessage());
    return;
  }
  if (typeof window.supabase !== "undefined") {
    initSupabase();
    if (supabaseClient) {
      if (mode === "login") openAuthModal("login");
      else openAuthModal("signup");
    } else alert(getAuthErrorMessage());
    return;
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js";
  s.async = false;
  s.onload = function () {
    initSupabase();
    if (supabaseClient) {
      if (mode === "login") openAuthModal("login");
      else openAuthModal("signup");
    } else alert(getAuthErrorMessage());
  };
  s.onerror = function () { alert(getAuthErrorMessage()); };
  document.head.appendChild(s);
}

if (document.getElementById("auth-login-btn")) {
  document.getElementById("auth-login-btn").addEventListener("click", () => loadSupabaseSdkThenOpenModal("login"));
}
if (document.getElementById("auth-signup-btn")) {
  document.getElementById("auth-signup-btn").addEventListener("click", () => loadSupabaseSdkThenOpenModal("signup"));
}
if (document.getElementById("auth-modal-close")) {
  document.getElementById("auth-modal-close").addEventListener("click", closeAuthModal);
}
if (authOverlay) {
  authOverlay.addEventListener("click", (e) => { if (e.target === authOverlay) closeAuthModal(); });
}
if (authShowSignup) {
  authShowSignup.addEventListener("click", () => openAuthModal("signup"));
}
if (authShowLogin) {
  authShowLogin.addEventListener("click", () => openAuthModal("login"));
}

if (document.getElementById("auth-logout-btn")) {
  document.getElementById("auth-logout-btn").addEventListener("click", async () => {
    if (supabaseClient) await supabaseClient.auth.signOut();
    closeAuthModal();
    updateAuthUI();
  });
}

if (supabaseClient) {
  const authSubmitLogin = document.getElementById("auth-submit-login");
  const authSubmitSignup = document.getElementById("auth-submit-signup");
  const authGoogleLogin = document.getElementById("auth-google-login");
  const authGoogleSignup = document.getElementById("auth-google-signup");
  if (authSubmitLogin) {
    authSubmitLogin.addEventListener("click", async () => {
      const email = document.getElementById("auth-email-login")?.value?.trim();
      const password = document.getElementById("auth-password-login")?.value;
      const err = document.getElementById("auth-login-error");
      if (!email || !password) {
        if (err) { err.textContent = currentLang === "tr" ? "E-posta ve şifre girin." : "Enter email and password."; err.classList.remove("hidden"); }
        return;
      }
      try {
        const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        closeAuthModal();
      } catch (e) {
        if (err) { err.textContent = e.message || (currentLang === "tr" ? "Giriş başarısız." : "Login failed."); err.classList.remove("hidden"); }
      }
    });
  }
  if (authSubmitSignup) {
    authSubmitSignup.addEventListener("click", async () => {
      const email = document.getElementById("auth-email-signup")?.value?.trim();
      const password = document.getElementById("auth-password-signup")?.value;
      const nickname = document.getElementById("auth-nickname-signup")?.value?.trim() || "";
      const err = document.getElementById("auth-signup-error");
      if (!email || !password) {
        if (err) { err.textContent = currentLang === "tr" ? "E-posta ve şifre girin." : "Enter email and password."; err.classList.remove("hidden"); return; }
        return;
      }
      if (password.length < 6) {
        if (err) { err.textContent = currentLang === "tr" ? "Şifre en az 6 karakter olmalı." : "Password must be at least 6 characters."; err.classList.remove("hidden"); return; }
        return;
      }
      try {
        const { data, error } = await supabaseClient.auth.signUp({ email, password, options: { data: { nickname }, emailRedirectTo: undefined } });
        if (error) throw error;
        if (data?.user) {
          const needsConfirm = !data.session;
          if (needsConfirm) {
            pendingSignupEmail = email;
            pendingSignupNickname = nickname;
            document.getElementById("auth-form-signup").classList.add("hidden");
            document.getElementById("auth-verify-code-wrap").classList.remove("hidden");
            document.getElementById("auth-modal-close").style.display = "";
            document.querySelector(".auth-switch").classList.add("hidden");
            const hint = document.getElementById("auth-verify-code-hint");
            const label = document.getElementById("auth-verify-code-label");
            const btn = document.getElementById("auth-verify-code-btn");
            if (hint) hint.textContent = currentLang === "tr" ? "E-postanıza gelen 6 haneli kodu girin." : "Enter the 6-digit code we sent to your email.";
            if (label) label.textContent = currentLang === "tr" ? "Doğrulama kodu" : "Verification code";
            if (btn) btn.textContent = currentLang === "tr" ? "Doğrula" : "Verify";
            document.getElementById("auth-verify-code-input").value = "";
            document.getElementById("auth-verify-code-error").classList.add("hidden");
            return;
          }
          const { error: profileErr } = await supabaseClient.from("profiles").upsert({ id: data.user.id, nickname }, { onConflict: "id" });
          if (profileErr) console.warn(profileErr);
        }
        closeAuthModal();
        if (currentLang === "tr") alert("Kayıt başarılı.");
        else alert("Sign up successful.");
      } catch (e) {
        if (err) { err.textContent = e.message || (currentLang === "tr" ? "Kayıt başarısız." : "Sign up failed."); err.classList.remove("hidden"); }
      }
    });
  }
  if (authGoogleLogin) {
    authGoogleLogin.addEventListener("click", () => {
      supabaseClient.auth.signInWithOAuth({ provider: "google" }).catch(console.warn);
      closeAuthModal();
    });
  }
  if (authGoogleSignup) {
    authGoogleSignup.addEventListener("click", () => {
      supabaseClient.auth.signInWithOAuth({ provider: "google" }).catch(console.warn);
      closeAuthModal();
    });
  }
  const authVerifyCodeBtn = document.getElementById("auth-verify-code-btn");
  const authVerifyCodeInput = document.getElementById("auth-verify-code-input");
  if (authVerifyCodeBtn && authVerifyCodeInput) {
    const runVerifyCode = async () => {
      const code = authVerifyCodeInput.value.trim().replace(/\s/g, "");
      const errVerify = document.getElementById("auth-verify-code-error");
      if (!code || code.length < 6) {
        if (errVerify) { errVerify.textContent = currentLang === "tr" ? "6 haneli kodu girin." : "Enter the 6-digit code."; errVerify.classList.remove("hidden"); }
        return;
      }
      if (!pendingSignupEmail) return;
      try {
        const { data, error } = await supabaseClient.auth.verifyOtp({ email: pendingSignupEmail, token: code.slice(0, 6), type: "signup" });
        if (error) throw error;
        if (data?.user) {
          const { error: profileErr } = await supabaseClient.from("profiles").upsert({ id: data.user.id, nickname: pendingSignupNickname || "" }, { onConflict: "id" });
          if (profileErr) console.warn(profileErr);
        }
        closeAuthModal();
        updateAuthUI();
        if (currentLang === "tr") alert("E-posta doğrulandı. Kayıt başarılı.");
        else alert("Email verified. Sign up successful.");
      } catch (e) {
        if (errVerify) { errVerify.textContent = e.message || (currentLang === "tr" ? "Kod geçersiz veya süresi dolmuş." : "Invalid or expired code."); errVerify.classList.remove("hidden"); }
      }
    };
    authVerifyCodeBtn.addEventListener("click", runVerifyCode);
    authVerifyCodeInput.addEventListener("keydown", (e) => { if (e.key === "Enter") runVerifyCode(); });
  }
}

const exportQuizzesBtn = document.getElementById("export-quizzes-btn");
const importQuizzesFile = document.getElementById("import-quizzes-file");
if (exportQuizzesBtn) {
  exportQuizzesBtn.addEventListener("click", exportQuizzesBackup);
}
if (importQuizzesFile) {
  importQuizzesFile.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) importQuizzesBackup(file);
    e.target.value = "";
  });
}

Array.from(document.querySelectorAll(".back-btn")).forEach((btn) => {
  btn.addEventListener("click", () => {
    const rawTarget = btn.dataset.back || "mainMenu";
    let targetViewKey = rawTarget;
    if (rawTarget === "main-menu") targetViewKey = "mainMenu";
    if (rawTarget === "settings") targetViewKey = "settings";
    if (rawTarget === "discover-view") targetViewKey = "discover";
    if (rawTarget === "profile") targetViewKey = "profile";
    if (rawTarget === "friends") targetViewKey = "friends";
    if (rawTarget === "messages-list") targetViewKey = "messagesList";
    if (rawTarget === "quiz-select-view") targetViewKey = "quizSelect";
    if (rawTarget === "create-quiz-view") targetViewKey = "createQuiz";
    if (rawTarget === "quiz-edit-questions-view") targetViewKey = "quizEditQuestions";
    if (rawTarget === "quiz-questions-list") targetViewKey = "quizQuestionsList";
    if (rawTarget === "quiz-question-edit") targetViewKey = "quizQuestionEdit";
    if (!views[targetViewKey]) targetViewKey = "mainMenu";
    if (targetViewKey === "createQuiz") {
      fromCreateQuizPage = false;
      lastAddedQuestionIndex = -1;
    }
    showView(targetViewKey, "back");
    if (targetViewKey === "quizQuestionsList") renderQuestionsList();
    if (targetViewKey === "profile") loadProfile();
    if (targetViewKey === "messagesList") loadMessagesList(messagesListCurrentPage);
  });
});

startQuizBtn.addEventListener("click", () => {
  const quizId = selectedPlayQuizId;
  if (!quizId) return;
  lastPlayedQuizFromShared = false;
  startQuiz(quizId);
});

const editQuestionsBtn = document.getElementById("edit-questions-btn");
if (editQuestionsBtn) {
  editQuestionsBtn.addEventListener("click", () => doEditQuestions());
}

const questionsListEl = document.getElementById("questions-list");
if (questionsListEl) {
  questionsListEl.addEventListener("click", (e) => {
    const li = e.target.closest(".question-list-item");
    if (!li) return;
    if (e.target.closest(".question-drag-handle")) return;
    if (e.target.closest(".question-delete-btn")) {
      e.preventDefault();
      e.stopPropagation();
      const index = parseInt(li.dataset.index, 10);
      const quiz = quizzes.find((q) => q.id === currentQuizForEdit);
      if (quiz && quiz.questions && index >= 0 && index < quiz.questions.length) {
        quiz.questions.splice(index, 1);
        saveQuizzes();
        renderQuestionsList();
      }
      return;
    }
    currentQuestionEditIndex = parseInt(li.dataset.index, 10);
    loadQuestionIntoForm(currentQuestionEditIndex);
    const titleEl = document.getElementById("question-edit-title");
    if (titleEl) titleEl.textContent = t("editQuestionTitle");
    showView("quizQuestionEdit");
  });
}

const backBtnQuestionEdit = document.getElementById("back-btn-question-edit");

const addQuestionBtn = document.getElementById("add-question-btn");
if (addQuestionBtn) {
  addQuestionBtn.addEventListener("click", () => {
    fromCreateQuizPage = false;
    if (backBtnQuestionEdit) backBtnQuestionEdit.dataset.back = "quiz-questions-list";
    currentQuestionEditIndex = -1;
    clearQuestionForm();
    const titleEl = document.getElementById("question-edit-title");
    if (titleEl) titleEl.textContent = t("newQuestionTitle");
    showView("quizQuestionEdit");
  });
}

const manualAddQuestionBtn = document.getElementById("manual-add-question-btn");
const manualAddHintEl = document.getElementById("manual-add-hint");
if (manualAddQuestionBtn) {
  manualAddQuestionBtn.addEventListener("click", () => {
    const quizId = editingQuizId || selectedEditQuizId || "";
    if (!quizId) {
      if (manualAddHintEl) {
        manualAddHintEl.textContent = t("manualAddHint");
        manualAddHintEl.classList.remove("hidden");
        setTimeout(() => manualAddHintEl.classList.add("hidden"), 4000);
      }
      return;
    }
    if (manualAddHintEl) manualAddHintEl.classList.add("hidden");
    fromCreateQuizPage = true;
    if (backBtnQuestionEdit) backBtnQuestionEdit.dataset.back = "quiz-edit-questions-view";
    currentQuizForEdit = quizId;
    currentQuestionEditIndex = -1;
    clearQuestionForm();
    const titleEl = document.getElementById("question-edit-title");
    if (titleEl) titleEl.textContent = t("newQuestionTitle");
    showView("quizQuestionEdit");
  });
}

const saveSingleQuestionBtn = document.getElementById("save-single-question-btn");
const cancelQuestionEditBtn = document.getElementById("cancel-question-edit-btn");
if (saveSingleQuestionBtn) {
  saveSingleQuestionBtn.addEventListener("click", () => {
    const textEl = document.getElementById("single-question-text");
    const correctEl = document.getElementById("single-correct-answer");
    const text = (textEl && textEl.value.trim()) || "";
    const n = editFormOptionImages.length;
    const options = [];
    for (let i = 0; i < n; i++) {
      const letter = OPTION_LETTERS[i];
      const el = document.getElementById(`single-option-${letter}`);
      const optionText = (el && el.value.trim()) || "";
      options.push({ text: optionText, image: editFormOptionImages[i] || undefined });
    }
    const correctIndex = correctEl ? parseInt(correctEl.value, 10) : 0;
    if (!text) {
      alert(t("alertQuestionEmpty"));
      return;
    }
    if (options.length < MIN_OPTIONS || options.length > MAX_OPTIONS) return;
    if (options.some((o) => !(o.text && o.text.trim()) && !o.image)) {
      alert(t("alertOptionsEmpty"));
      return;
    }
    const quiz = quizzes.find((q) => q.id === currentQuizForEdit);
    if (!quiz) return;
    const q = { text, image: editFormQuestionImage || undefined, options, correctIndex };
    if (currentQuestionEditIndex >= 0 && quiz.questions[currentQuestionEditIndex] !== undefined) {
      quiz.questions[currentQuestionEditIndex] = q;
    } else {
      quiz.questions.push(q);
    }
    saveQuizzes();
    if (fromCreateQuizPage) {
      fromCreateQuizPage = false;
      lastAddedQuestionIndex = currentQuestionEditIndex >= 0 && quiz.questions[currentQuestionEditIndex] !== undefined
        ? currentQuestionEditIndex
        : quiz.questions.length - 1;
      showView("quizEditQuestions");
      requestAnimationFrame(() => renderPrepareQuestionsChips());
    } else {
      showView("quizQuestionsList");
      renderQuestionsList();
    }
  });
}
if (cancelQuestionEditBtn) {
  cancelQuestionEditBtn.addEventListener("click", () => {
    if (fromCreateQuizPage) {
      fromCreateQuizPage = false;
      showView("quizEditQuestions");
      renderPrepareQuestionsChips();
    } else {
      showView("quizQuestionsList");
      renderQuestionsList();
    }
  });
}

const singleQuestionImageAdd = document.getElementById("single-question-image-add");
const singleQuestionImageInput = document.getElementById("single-question-image");
const singleQuestionImageRemove = document.getElementById("single-question-image-remove");
if (singleQuestionImageAdd) {
  singleQuestionImageAdd.addEventListener("click", () => {
    const wrap = document.getElementById("single-question-image-wrap");
    if (wrap) wrap.classList.remove("hidden");
    singleQuestionImageAdd.classList.add("hidden");
  });
}
if (singleQuestionImageInput) {
  singleQuestionImageInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    resizeImageToDataUrl(file).then((dataUrl) => {
      editFormQuestionImage = dataUrl;
      updateQuestionImagePreview();
    }).catch(() => {});
  });
}
if (singleQuestionImageRemove) {
  singleQuestionImageRemove.addEventListener("click", () => {
    editFormQuestionImage = null;
    updateQuestionImagePreview();
  });
}

const addOptionRowBtn = document.getElementById("add-option-row-btn");
if (addOptionRowBtn) {
  addOptionRowBtn.addEventListener("click", addOptionRow);
}

nextQuestionBtn.addEventListener("click", () => {
  nextQuestion();
});

exitQuizBtn.addEventListener("click", () => {
  if (!currentQuiz) {
    exitFullScreen();
    showView("mainMenu", "back");
    return;
  }
  const totalAnswered = currentQuestionIndex;
  if (totalAnswered === 0) {
    exitFullScreen();
    showView("mainMenu", "back");
    return;
  }
  /* Skor toplam soru sayısına göre: doğru sayısı / quiz'deki toplam soru */
  const totalQuestions = currentQuiz.questions.length;
  showQuizResult(currentScore, totalQuestions);
});

document.addEventListener("fullscreenchange", updateFullscreenBtnText);

retryQuizBtn.addEventListener("click", () => {
  if (!lastRunQuizId) {
    exitFullScreen();
    showView("mainMenu");
    return;
  }
  startQuiz(lastRunQuizId);
});

parseQuestionsBtn.addEventListener("click", handleParseQuestions);
saveQuizBtn.addEventListener("click", handleSaveQuiz);

const copyFormatBtn = document.getElementById("copy-format-btn");
const copyFormatFeedback = document.getElementById("copy-format-feedback");
if (copyFormatBtn && copyFormatFeedback) {
  copyFormatBtn.addEventListener("click", () => {
    const text = FORMAT_EXAMPLE_PLACEHOLDER;
    navigator.clipboard.writeText(text).then(() => {
      copyFormatFeedback.textContent = t("copied");
      copyFormatFeedback.classList.remove("hidden");
      setTimeout(() => {
        copyFormatFeedback.textContent = "";
        copyFormatFeedback.classList.add("hidden");
      }, 2000);
    }).catch(() => {
      copyFormatFeedback.textContent = "Copy failed";
      copyFormatFeedback.classList.remove("hidden");
      setTimeout(() => copyFormatFeedback.classList.add("hidden"), 2000);
    });
  });
}

const pasteQuestionsBtn = document.getElementById("paste-questions-btn");
const pasteFeedbackEl = document.getElementById("copy-format-feedback");
if (pasteQuestionsBtn && bulkInput) {
  pasteQuestionsBtn.addEventListener("click", () => {
    navigator.clipboard.readText().then((text) => {
      bulkInput.focus();
      bulkInput.value = text;
    }).catch(() => {
      if (pasteFeedbackEl) {
        pasteFeedbackEl.textContent = t("pasteFailed");
        pasteFeedbackEl.classList.remove("hidden");
        setTimeout(() => pasteFeedbackEl.classList.add("hidden"), 2000);
      }
    });
  });
}

function doLoadEditQuiz(quizId) {
  const id = quizId || selectedEditQuizId;
  if (!id) {
    resetCreateQuizForm();
    return;
  }
  const quiz = quizzes.find((q) => q.id === id);
  if (!quiz) return;
  selectedEditQuizId = id;
  editingQuizId = quiz.id;
  currentQuizForEdit = quiz.id;
  quizNameInput.value = quiz.name;
  quizDescriptionInput.value = quiz.description || "";
  draftQuestions = quiz.questions.slice();
  showManualQuestionsChips = false;
  showView("quizEditQuestions");
  renderPrepareQuestionsChips();
  if (editQuizStatusEl) {
    editQuizStatusEl.textContent = `Editing quiz "${quiz.name}" with ${draftQuestions.length} existing questions. New parsed questions will be appended.`;
  }
  parsedQuestionsSummaryEl.classList.add("hidden");
  parseStatusEl.textContent = "";
  updateEditQuestionsBtn();
}

function doEditQuestions(quizId) {
  const id = quizId || selectedEditQuizId || editingQuizId || "";
  if (!id) return;
  selectedEditQuizId = id;
  currentQuizForEdit = id;
  showView("quizQuestionsList");
  renderQuestionsList();
}

if (loadEditQuizBtn) {
  loadEditQuizBtn.addEventListener("click", () => doLoadEditQuiz());
}

if (clearEditQuizBtn) {
  clearEditQuizBtn.addEventListener("click", () => {
    resetCreateQuizForm();
    refreshEditQuizSelect();
  });
}

let pendingDeleteQuizId = null;
const deleteQuizConfirmModal = document.getElementById("delete-quiz-confirm-modal");
const deleteQuizCancelBtn = document.getElementById("delete-quiz-cancel");
const deleteQuizConfirmBtn = document.getElementById("delete-quiz-confirm-btn");
const deleteQuizBtnEdit = document.getElementById("delete-quiz-btn-edit");

if (deleteQuizBtnEdit) {
  deleteQuizBtnEdit.addEventListener("click", () => {
    if (!selectedEditQuizId) return;
    pendingDeleteQuizId = selectedEditQuizId;
    if (deleteQuizConfirmModal) deleteQuizConfirmModal.classList.remove("hidden");
  });
}
if (deleteQuizCancelBtn) {
  deleteQuizCancelBtn.addEventListener("click", () => {
    pendingDeleteQuizId = null;
    if (deleteQuizConfirmModal) deleteQuizConfirmModal.classList.add("hidden");
  });
}
if (deleteQuizConfirmBtn && deleteQuizConfirmModal) {
  deleteQuizConfirmBtn.addEventListener("click", () => {
    if (!pendingDeleteQuizId) return;
    const id = pendingDeleteQuizId;
    quizzes = quizzes.filter((q) => q.id !== id);
    saveQuizzes();
    if (editingQuizId === id) resetCreateQuizForm();
    if (selectedPlayQuizId === id) selectedPlayQuizId = "";
    if (selectedEditQuizId === id) selectedEditQuizId = "";
    refreshQuizSelect();
    refreshEditQuizSelect();
    pendingDeleteQuizId = null;
    deleteQuizConfirmModal.classList.add("hidden");
  });
}
if (deleteQuizConfirmModal) {
  deleteQuizConfirmModal.addEventListener("click", (e) => {
    if (e.target === deleteQuizConfirmModal) {
      pendingDeleteQuizId = null;
      deleteQuizConfirmModal.classList.add("hidden");
    }
  });
}

if (newQuizBtn && newQuizNameModal && newQuizNameInput && newQuizNameOk && newQuizNameCancel) {
  newQuizBtn.addEventListener("click", () => {
    newQuizNameInput.value = "";
    newQuizNameModal.classList.remove("hidden");
    newQuizNameInput.focus();
  });
  newQuizNameCancel.addEventListener("click", () => {
    newQuizNameModal.classList.add("hidden");
  });
  newQuizNameOk.addEventListener("click", () => {
    const name = newQuizNameInput.value.trim();
    if (!name) return;
    if (isQuizNameDuplicate(name, undefined)) {
      alert(t("duplicateQuizName"));
      return;
    }
    newQuizNameModal.classList.add("hidden");
    const newQuiz = {
      id: `quiz_${Date.now()}`,
      name,
      description: "",
      questions: []
    };
    quizzes.push(newQuiz);
    saveQuizzes();
    editingQuizId = newQuiz.id;
    currentQuizForEdit = newQuiz.id;
    draftQuestions = [];
    quizNameInput.value = name;
    quizDescriptionInput.value = "";
    bulkInput.value = "";
    parseStatusEl.textContent = "";
    parsedQuestionsSummaryEl.classList.add("hidden");
    if (editQuizStatusEl) editQuizStatusEl.textContent = "";
    refreshEditQuizSelect();
    selectedEditQuizId = newQuiz.id;
    renderEditQuizList(editQuizListCurrentPage);
    updateEditQuestionsBtn();
    lastAddedQuestionIndex = -1;
    showView("quizEditQuestions");
    renderPrepareQuestionsChips();
  });
  newQuizNameModal.addEventListener("click", (e) => {
    if (e.target === newQuizNameModal) newQuizNameModal.classList.add("hidden");
  });
  newQuizNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      newQuizNameOk.click();
    }
  });
}

if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    updateSoundToggleUi();
    saveSettings();
  });
}

if (shuffleToggleBtn) {
  shuffleToggleBtn.addEventListener("click", () => {
    shuffleEnabled = !shuffleEnabled;
    updateShuffleToggleUi();
    saveSettings();
  });
}

if (shuffleOptionsToggleBtn) {
  shuffleOptionsToggleBtn.addEventListener("click", () => {
    shuffleOptionsEnabled = !shuffleOptionsEnabled;
    updateShuffleOptionsToggleUi();
    saveSettings();
  });
}

// Settings: Dil seç menüsüne git
const settingsOpenLangSelect = document.getElementById("settings-open-lang-select");
if (settingsOpenLangSelect) {
  settingsOpenLangSelect.addEventListener("click", () => {
    renderLangSelectList();
    showView("langSelect");
  });
}

// Dil seç listesi: seçili dil primary (dolu mavi), diğerleri secondary
function renderLangSelectList() {
  const list = document.getElementById("lang-select-list");
  if (!list) return;
  list.innerHTML = "";
  SUPPORTED_LANG_CODES.forEach((code) => {
    const name = (translations[code] && translations[code].languageName) || code;
    const btn = document.createElement("button");
    btn.type = "button";
    const isSelected = code === currentLang;
    btn.className = (isSelected ? "primary-btn main-btn-primary" : "secondary-btn main-btn-secondary") + " lang-select-option";
    btn.dataset.lang = code;
    btn.textContent = name;
    btn.addEventListener("click", () => {
      currentLang = code;
      saveSettings();
      applyTranslations();
      renderLangSelectList();
    });
    list.appendChild(btn);
  });
}
renderLangSelectList();
// Settings: tam ekran butonu
const settingsFullscreenBtn = document.getElementById("settings-fullscreen-btn");
if (settingsFullscreenBtn) {
  settingsFullscreenBtn.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  });
}

// PWA standalone: ana ekrana alınca class ekle (başlık gösterilir)
function initStandalone() {
  const standalone = !!navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
  if (standalone) document.body.classList.add("standalone");
}
function checkStandaloneAgain() {
  if (document.body.classList.contains("standalone")) return;
  const standalone = !!navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
  if (standalone) document.body.classList.add("standalone");
}

// Bulk input: örnek format hayalet yazı (placeholder) olarak
if (bulkInput) bulkInput.placeholder = FORMAT_EXAMPLE_PLACEHOLDER;

// Initial setup: auth varsa buluttan quiz yükle, yoksa localStorage
async function initAuthAndQuizzes() {
  loadSettings();
  if (supabaseClient) {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      currentAuthUser = session?.user ?? null;
      if (session) await fetchUserQuizzes();
      else loadQuizzes();
    } catch (e) {
      loadQuizzes();
    }
  } else {
    loadQuizzes();
  }
  updateAuthUI();
  refreshEditQuizSelect();
  applyTranslations();
  updateSoundToggleUi();
  updateShuffleToggleUi();
  updateShuffleOptionsToggleUi();
  initStandalone();
  showView("mainMenu");
}
initAuthAndQuizzes();

function handlePlayHash() {
  const hash = (window.location.hash || "").replace(/^#\/?/, "");
  const m = /^play\/([a-f0-9-]{36})$/i.exec(hash);
  if (!m) return;
  const quizId = m[1];
  function openQuizByLink() {
    if (!supabaseClient) return;
    Promise.all([
      supabaseClient.from("quizzes").select("id,name,description,questions").eq("id", quizId).maybeSingle(),
      supabaseClient.from("public_quizzes").select("id").eq("quiz_id", quizId).limit(1).maybeSingle()
    ]).then(([quizRes, rowRes]) => {
      const quiz = quizRes?.data;
      if (!quiz) {
        alert(currentLang === "tr" ? "Quiz bulunamadı veya erişim yok." : "Quiz not found or access denied.");
        return;
      }
      showView("discover");
      loadDiscoverQuizzes();
      const publicRowId = rowRes?.data?.id || null;
      const ratingInfo = null;
      setTimeout(() => openDiscoverPreview(quiz, "—", ratingInfo, publicRowId), 100);
    }).catch(() => {
      alert(currentLang === "tr" ? "Quiz bulunamadı." : "Quiz not found.");
    });
  }
  if (supabaseClient) openQuizByLink();
  else ensureSupabaseThenRun(openQuizByLink);
}
if (/^#\/?play\//.test(window.location.hash || "")) {
  setTimeout(handlePlayHash, 50);
}
window.addEventListener("hashchange", handlePlayHash);

window.addEventListener("load", function () { checkStandaloneAgain(); });
setTimeout(checkStandaloneAgain, 500);

// PWA: register service worker only on secure origin (localhost / https)
function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  const isSecure = window.location.protocol === "https:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  if (!isSecure) return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
registerServiceWorker();

