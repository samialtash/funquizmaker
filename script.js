// Basic quiz storage using browser localStorage
const STORAGE_KEY = "custom_quizzes_v1";

// Keşfet kategorileri (herkese açık paylaşırken zorunlu). Eğitim seçilince bölüm (category_sub) de seçilir.
const QUIZ_CATEGORIES = [
  { id: "genel", labelTr: "Genel", labelEn: "General" },
  { id: "egitim", labelTr: "Eğitim", labelEn: "Education", hasSub: true },
  { id: "bilim", labelTr: "Bilim", labelEn: "Science" },
  { id: "tarih", labelTr: "Tarih", labelEn: "History" },
  { id: "cografya", labelTr: "Coğrafya", labelEn: "Geography" },
  { id: "edebiyat", labelTr: "Edebiyat", labelEn: "Literature" },
  { id: "spor", labelTr: "Spor", labelEn: "Sports" },
  { id: "muzik", labelTr: "Müzik", labelEn: "Music" },
  { id: "sinema", labelTr: "Sinema & TV", labelEn: "Film & TV" },
  { id: "teknoloji", labelTr: "Teknoloji", labelEn: "Technology" },
  { id: "saglik", labelTr: "Sağlık", labelEn: "Health" },
  { id: "din_kultur", labelTr: "Din & Kültür", labelEn: "Religion & Culture" },
  { id: "eglence", labelTr: "Eğlence", labelEn: "Entertainment" },
  { id: "diger", labelTr: "Diğer", labelEn: "Other" }
];
const EDUCATION_SUBS = [
  { id: "matematik", labelTr: "Matematik", labelEn: "Mathematics" },
  { id: "fizik", labelTr: "Fizik", labelEn: "Physics" },
  { id: "kimya", labelTr: "Kimya", labelEn: "Chemistry" },
  { id: "biyoloji", labelTr: "Biyoloji", labelEn: "Biology" },
  { id: "turkce", labelTr: "Türkçe", labelEn: "Turkish" },
  { id: "ingilizce", labelTr: "İngilizce", labelEn: "English" },
  { id: "tarih_egitim", labelTr: "Tarih", labelEn: "History" },
  { id: "cografya_egitim", labelTr: "Coğrafya", labelEn: "Geography" },
  { id: "diger_egitim", labelTr: "Diğer", labelEn: "Other" }
];
function getCategoryLabel(id) {
  const c = QUIZ_CATEGORIES.find((x) => x.id === id);
  return c ? (currentLang === "tr" ? c.labelTr : c.labelEn) : id || "—";
}
function getEducationSubLabel(id) {
  const s = EDUCATION_SUBS.find((x) => x.id === id);
  return s ? (currentLang === "tr" ? s.labelTr : s.labelEn) : id || "—";
}
const DISCOVER_PLACEHOLDER_IMAGE = "empty.png";
const SOUND_ENABLED_KEY = "quiz_sound_enabled_v1";
const SHUFFLE_ENABLED_KEY = "quiz_shuffle_enabled_v1";
const SHUFFLE_OPTIONS_ENABLED_KEY = "quiz_shuffle_options_enabled_v1";
const LANG_KEY = "quiz_lang_v1";
const COOKIE_CONSENT_KEY = "quiz_cookie_consent_v1";

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
    backToQuizSelection: "Back to quiz selection",
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
    bulkAddQuestionsTitle: "Bulk add questions",
    bulkAddQuestionsDesc: "Instead of writing questions and options one by one, when you paste your questions in the format below, the system will automatically detect and convert them into questions.",
    manualAddQuestionsHeading: "Manual question addition",
    bulkAddQuestionsHeading: "Bulk question addition",
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
    editShort: "Edit",
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
    questionTypeChoice: "Multiple choice",
    questionTypeOpen: "Open answer",
    questionTypeMatch: "Matching",
    openExpectedAnswerLabel: "Correct answer (user will type this)",
    matchQuestionTextLabel: "Question / title (optional)",
    matchAddPair: "Add pair",
    matchPairHint: "Up to 10 pairs. Fill left and right columns in order.",
    manualAddIntro: "Choose the type of question to add:",
    chooseImage: "Choose image",
    addOptionRow: "Add option",
    duplicateQuizName: "A quiz with this name already exists. Please use a different name.",
    saveQuizNoQuestions: "Add at least one question (manually or via bulk paste) before saving.",
    saveQuizSuccess: "Quiz saved with {count} question(s).",
    parseAddedNew: "Added {new} new question(s). Total in this quiz now: {total}.",
    parseDetectedOnly: "Detected {count} question(s). Total: {total}.",
    parsePreviewSummary: "{total} question(s) (+{new} added this time)",
    parsePreviewMore: "...and {n} more.",
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
    shareQuizAsLink: "Share quiz as link",
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
    unpublishFromDiscover: "Remove from Discover",
    linkOnlyShare: "Link only (not in Discover)",
    edit: "Edit",
    privacy: "Privacy",
    onlyMe: "Only me",
    friends: "Friends",
    everyone: "Everyone",
    remove: "Remove",
    addFriend: "Add friend",
    requestSent: "Request sent",
    alreadyFriends: "Friends",
    cookieConsentMessage: "We use cookies to run the service, personalise content and show ads. Your data may be processed in line with our privacy policy. By clicking Accept you consent to the use of cookies and the processing of your data for these purposes. You can change your mind later via your browser settings.",
    cookieConsentAccept: "Accept",
    cookieConsentManage: "Manage settings",
    cookieSettingsTitle: "Cookie settings",
    cookieSettingsDetail: "This site uses cookies for the following purposes:\n\n• Essential: Required for the site to function (e.g. session, preferences). These cannot be disabled.\n• Advertising: To show you relevant ads and measure ad performance. These may process your data for personalised advertising.\n\nYour data may be processed in accordance with our privacy policy and applicable data protection laws. You have the right to withdraw consent at any time. Choosing \"Reject\" will only allow essential cookies; advertising and non-essential cookies will not be used. You can change your choice later by clearing site data or via your browser settings.",
    cookieAcceptAll: "Accept all",
    cookieOnlyNecessary: "Only necessary",
    cookieRejectAll: "Reject",
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
    backToQuizSelection: "Soru seçimine dön",
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
    bulkAddQuestionsTitle: "Toplu soru ekle",
    bulkAddQuestionsDesc: "Soruları ve şıkları tek tek yazmak yerine aşağıdaki formatla sorularınızı toplu attığınızda sistem otomatik olarak hepsini algılayıp soru haline çevirecektir.",
    manualAddQuestionsHeading: "Manuel soru ekleme",
    bulkAddQuestionsHeading: "Toplu soru ekleme",
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
    editShort: "Düzenle",
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
    questionTypeChoice: "Çoktan seçmeli",
    questionTypeOpen: "Açık cevap",
    questionTypeMatch: "Eşleştirme",
    openExpectedAnswerLabel: "Doğru cevap (kullanıcı bunu yazacak)",
    matchQuestionTextLabel: "Soru / başlık (isteğe bağlı)",
    matchAddPair: "Çift ekle",
    matchPairHint: "En fazla 10 eşleştirme. Sol ve sağ sütunu sırayla doldurun.",
    manualAddIntro: "Eklemek istediğiniz soru tipini seçin:",
    chooseImage: "Dosya seç",
    addOptionRow: "Şık ekle",
    duplicateQuizName: "Bu isimde bir quiz zaten var. Lütfen farklı bir isim kullanın.",
    saveQuizNoQuestions: "Kaydetmeden önce en az bir soru ekleyin (manuel veya toplu yapıştırma ile).",
    saveQuizSuccess: "Quiz {count} soru ile kaydedildi.",
    parseAddedNew: "{new} yeni soru eklendi. Toplam: {total} soru.",
    parseDetectedOnly: "{count} soru algılandı. Toplam: {total}.",
    parsePreviewSummary: "{total} soru (bu sefer +{new} eklendi)",
    parsePreviewMore: "...ve {n} soru daha.",
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
    shareQuizAsLink: "Quizi link olarak gönder",
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
    unpublishFromDiscover: "Yayından kaldır",
    linkOnlyShare: "Sadece link (Keşfet'te yok)",
    edit: "Düzenle",
    privacy: "Gizlilik durumu",
    onlyMe: "Sadece ben",
    friends: "Arkadaşlar",
    everyone: "Herkese açık",
    remove: "Kaldır",
    addFriend: "Arkadaş ekle",
    requestSent: "İstek gönderildi",
    alreadyFriends: "Arkadaş",
    cookieConsentMessage: "Hizmetin sunulması, içerik ve reklamların kişiselleştirilmesi için çerezler kullanıyoruz. \"Kabul et\"e tıklayarak onay veriyorsunuz. İstediğiniz zaman \"Ayarlar\" ile tercihinizi değiştirebilirsiniz.",
    cookieConsentAccept: "Kabul et",
    cookieConsentManage: "Ayarlar",
    cookieSettingsTitle: "Çerez ayarları",
    cookieSettingsDetail: "Bu site aşağıdaki amaçlarla çerez kullanmaktadır:\n\n• Zorunlu çerezler: Sitenin çalışması için gereklidir (oturum, tercihler vb.). Bunlar kapatılamaz.\n• Reklam çerezleri: Size uygun reklamlar göstermek ve reklam performansını ölçmek için kullanılır. Kişisel verileriniz kişiselleştirilmiş reklam amaçlı işlenebilir.\n\nKişisel verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve gizlilik politikamız kapsamında işlenmektedir. Açık rızanızı istediğiniz zaman geri alabilirsiniz. \"Reddet\" seçeneği yalnızca zorunlu çerezleri kabul eder; reklam ve zorunlu olmayan çerezler kullanılmayacaktır. Tercihinizi daha sonra site verilerini temizleyerek veya tarayıcı ayarlarınızdan değiştirebilirsiniz.",
    cookieAcceptAll: "Tümünü kabul et",
    cookieOnlyNecessary: "Sadece gerekli",
    cookieRejectAll: "Reddet",
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
    const { data: ownData, error } = await supabaseClient.from("quizzes").select("id,name,description,questions,cover_image").eq("user_id", currentAuthUser.id).order("created_at", { ascending: false });
    if (error) throw error;
    quizzes = (ownData || []).map((r) => ({ id: r.id, name: r.name || "", description: r.description || "", questions: Array.isArray(r.questions) ? r.questions : [], cover_image: r.cover_image || null }));
    const { data: sharedRows } = await supabaseClient.from("quiz_shared_to").select("quiz_id").eq("to_user_id", currentAuthUser.id);
    if (sharedRows && sharedRows.length) {
      const ids = sharedRows.map((s) => s.quiz_id).filter(Boolean);
      const { data: sharedQuizzes } = await supabaseClient.from("quizzes").select("id,name,description,questions,cover_image").in("id", ids);
      if (sharedQuizzes) for (const r of sharedQuizzes) quizzes.push({ id: r.id, name: (r.name || "") + " (paylaşılan)", description: r.description || "", questions: Array.isArray(r.questions) ? r.questions : [], cover_image: r.cover_image || null });
    }
  } catch (e) {
    console.warn("fetchUserQuizzes failed", e);
    quizzes = [];
  }
}

async function saveQuizToCloud(quiz) {
  if (!supabaseClient || !currentAuthUser) return;
    const row = { user_id: currentAuthUser.id, name: quiz.name, description: quiz.description || "", questions: quiz.questions || [], cover_image: quiz.cover_image || null };
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
/** "choice" | "open" | "match" */
let currentQuestionType = "choice";
let openEditFormQuestionImage = null;
/** Match type: [{ left: string, right: string }, ...] max 10 */
let editFormMatchPairs = [];
const MAX_MATCH_PAIRS = 10;

let quizzes = [];
let currentQuiz = null;
let currentQuestionIndex = 0;
let currentQuestionOrder = [];
let currentScore = 0;
let lastRunQuizId = null;
let lastPlayedQuizFromShared = false;
/** Base hash for play URL (her sayfa ayrı URL: playRouteBase + "/" + index) */
let playRouteBase = "";
let chatWithUserId = null;
let viewingProfileUserId = null;
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
  quizEditQuestions: document.getElementById("quiz-edit-questions-view"),
  quizEditHub: document.getElementById("quiz-edit-hub-view"),
  quizLinkPreview: document.getElementById("quiz-link-preview-view")
};

var VIEW_TO_HASH = {
  mainMenu: "#/",
  discover: "#/discover",
  settings: "#/settings",
  langSelect: "#/lang",
  profile: "#/profile",
  profileEdit: "#/profile/edit",
  friends: "#/friends",
  messagesList: "#/messages",
  chat: "#/chat",
  quizSelect: "#/quiz-select",
  createQuiz: "#/create",
  quizEditHub: "#/edit"
};
var HASH_TO_VIEW = {
  "#/": "mainMenu",
  "#/discover": "discover",
  "#/settings": "settings",
  "#/lang": "langSelect",
  "#/profile": "profile",
  "#/profile/edit": "profileEdit",
  "#/friends": "friends",
  "#/messages": "messagesList",
  "#/chat": "chat",
  "#/quiz-select": "quizSelect",
  "#/create": "createQuiz",
  "#/edit": "quizEditHub"
};

function getViewHash(name) {
  return VIEW_TO_HASH[name] || "#/";
}
function getViewFromHash(hash) {
  var raw = (hash || "").trim();
  if (!raw || raw === "#" || raw === "#/") return "mainMenu";
  var normalized = raw.replace(/^#\/?/, "").trim();
  if (!normalized) return "mainMenu";
  var withSlash = "#/" + normalized;
  return HASH_TO_VIEW[withSlash] || null;
}

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

var viewHistory = [];
var currentViewKey = "";

// Utility: view switching (horizontal slide – forward = new from right, back = new from left)
// noTransition: true = ilk yükleme/yenilemede hash’ten view açılırken animasyonsuz doğrudan göster
function showView(name, direction, noTransition) {
  const target = views[name];
  if (!target) return;
  const current = document.querySelector(".view.active");
  const isBack = direction === "back" || name === "mainMenu";
  if (!isBack && currentViewKey && currentViewKey !== name) viewHistory.push(currentViewKey);
  var TOP_BAR_H = 56;
  if (current && current !== target && !noTransition) {
    const app = document.getElementById("app");
    const appHeight = app ? app.offsetHeight : 560;
    if (app) {
      app.style.overflow = "hidden";
      app.style.minHeight = appHeight + "px";
    }
    current.classList.remove("view-exit-left", "view-exit-right");
    current.classList.add(isBack ? "view-exit-right" : "view-exit-left");
    current.style.position = "absolute";
    current.style.top = TOP_BAR_H + "px";
    current.style.left = "0";
    current.style.right = "0";
    current.style.width = "100%";
    current.style.bottom = "0";

    target.style.display = "block";
    target.style.position = "absolute";
    target.style.top = TOP_BAR_H + "px";
    target.style.left = "0";
    target.style.right = "0";
    target.style.width = "100%";
    target.style.bottom = "0";
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
      current.style.right = "";
      current.style.width = "";
      current.style.bottom = "";
      current.classList.remove("active", "view-exit-left", "view-exit-right");
      current.style.display = "none";
      target.classList.remove("view-enter-from-right", "view-enter-from-left", "view-slide-in", "view-exit-left", "view-exit-right");
      target.style.position = "";
      target.style.top = "";
      target.style.left = "";
      target.style.right = "";
      target.style.width = "";
      target.style.bottom = "";
      if (app) {
        app.style.overflow = "";
        app.style.minHeight = "";
      }
    };

    current.offsetHeight;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => target.classList.add("view-slide-in"), 40);
      });
    });
    current.addEventListener("transitionend", onDone);
    target.addEventListener("transitionend", onDone);
    setTimeout(onDone, 220);
  } else {
    if (current && current !== target) {
      current.classList.remove("active", "view-exit-left", "view-exit-right");
      current.style.position = "";
      current.style.top = "";
      current.style.left = "";
      current.style.right = "";
      current.style.width = "";
      current.style.bottom = "";
      current.style.display = "none";
    }
    document.querySelectorAll(".view").forEach(function (el) {
      if (el !== target) {
        el.classList.remove("active");
        el.style.display = "none";
        el.style.position = "";
        el.style.top = "";
        el.style.left = "";
        el.style.right = "";
        el.style.width = "";
        el.style.bottom = "";
      }
    });
    target.classList.remove("view-enter-from-right", "view-enter-from-left", "view-slide-in");
    target.classList.add("active");
    target.style.display = "block";
    target.style.position = "";
    target.style.top = "";
    target.style.left = "";
    target.style.right = "";
    target.style.width = "";
    target.style.bottom = "";
  }
  // Quiz, bitiş veya link önizlemeden çıkınca ya da ana menüye gelince linki sıfırla (yenileyince quiz tekrar açılmasın)
  const goingToMain = name === "mainMenu";
  if (typeof window !== "undefined" && window.location && goingToMain) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search + "#/");
  }
  currentViewKey = name;

  var globalBar = document.getElementById("global-top-bar");
  var quizBar = document.getElementById("quiz-top-bar");
  var quizBarTitle = document.getElementById("quiz-top-bar-title");
  var inQuiz = name === "quizView" || name === "quizFinished";
  if (globalBar) globalBar.classList.toggle("top-bar-hidden", inQuiz);
  if (quizBar) quizBar.classList.toggle("top-bar-visible", inQuiz);
  if (quizBarTitle && inQuiz && currentQuiz) quizBarTitle.textContent = currentQuiz.name || "";
  if (quizBarTitle && !inQuiz) quizBarTitle.textContent = "";

  if (name === "mainMenu") viewHistory = [];

  var setHash = name !== "quizView" && name !== "quizFinished" && name !== "quizLinkPreview";
  if (setHash && typeof window !== "undefined" && window.history) {
    var h = getViewHash(name);
    var curHash = (window.location.hash || "").trim() || "#/";
    if (curHash !== h) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search + h);
    }
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
    "back-to-quiz-select-btn": t("backToQuizSelection"),
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
    "manual-add-choice-btn": t("questionTypeChoice"),
    "manual-add-open-btn": t("questionTypeOpen"),
    "manual-add-match-btn": t("questionTypeMatch"),
    "new-quiz-name-modal-title": t("giveQuizName"),
    "new-quiz-btn": t("newQuizBtn"),
    "load-edit-quiz-btn": t("loadSelected"),
    "hub-tab-quiz-form": t("loadSelected"),
    "hub-tab-questions": t("editQuestions"),
    "edit-questions-screen-title": t("prepareQuestions"),
    "paste-questions-label": t("pasteLabelPlaceholder"),
    "sub-tab-manual": t("manualAddQuestionsHeading"),
    "sub-tab-bulk": t("bulkAddQuestionsHeading"),
    "bulk-add-questions-desc": t("bulkAddQuestionsDesc"),
    "delete-quiz-confirm-title": t("areYouSure"),
    "delete-quiz-confirm-msg": t("deleteQuizConfirmMsg"),
    "delete-quiz-btn-edit": t("deleteQuiz"),
    "delete-quiz-confirm-btn": t("deleteConfirmBtn"),
    "delete-quiz-cancel": t("cancel"),
    "question-image-label": t("questionImageLabel"),
    "single-question-image-remove": t("removeImage"),
    "single-question-image-add": t("addPhoto"),
    "qtype-tab-choice": t("questionTypeChoice"),
    "qtype-tab-open": t("questionTypeOpen"),
    "qtype-tab-match": t("questionTypeMatch"),
    "open-expected-answer-label": t("openExpectedAnswerLabel"),
    "match-question-text-label": t("matchQuestionTextLabel"),
    "match-add-pair-btn": t("matchAddPair"),
    "manual-add-intro": t("manualAddIntro"),
  };
  const matchPairHintEl = document.querySelector(".match-pairs-container + .field .hint");
  if (matchPairHintEl) matchPairHintEl.textContent = t("matchPairHint");
  document.querySelectorAll(".option-photo-btn").forEach((btn) => {
    btn.textContent = t("addPhoto");
  });
  const chooseImageLabel = document.getElementById("single-question-choose-image-label");
  if (chooseImageLabel) chooseImageLabel.textContent = t("chooseImage");
  const addOptionRowBtnTr = document.getElementById("add-option-row-btn");
  if (addOptionRowBtnTr) addOptionRowBtnTr.textContent = t("addOptionRow");
  const cookieConsentText = document.getElementById("cookie-consent-text");
  const cookieConsentBtn = document.getElementById("cookie-consent-accept");
  const cookieConsentManageBtn = document.getElementById("cookie-consent-manage");
  if (cookieConsentText) cookieConsentText.textContent = t("cookieConsentMessage");
  if (cookieConsentBtn) cookieConsentBtn.textContent = t("cookieConsentAccept");
  if (cookieConsentManageBtn) cookieConsentManageBtn.textContent = t("cookieConsentManage");
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
  const backHub = document.getElementById("back-btn-edit-hub");
  const backSettings = document.getElementById("back-btn-settings");
  const backLangSelect = document.getElementById("back-btn-lang-select");
  const backDiscover = document.getElementById("back-btn-discover");
  if (backSelect) backSelect.textContent = t("back");
  if (backCreate) backCreate.textContent = t("back");
  if (backHub) backHub.textContent = t("back");
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
  if (profileTitleEl) profileTitleEl.textContent = t("profileTitle");
  if (profileEditTitleEl) profileEditTitleEl.textContent = t("editProfile");
  if (profileEditBtn) profileEditBtn.textContent = t("editProfile");
  if (profileEditNicknameSave) profileEditNicknameSave.textContent = t("nicknameSave");
  if (friendsTitleEl) friendsTitleEl.textContent = t("friendsTitle");
  if (friendsPendingTitle) friendsPendingTitle.textContent = t("pendingRequests");
  if (friendsListTitle) friendsListTitle.textContent = t("myFriends");
  if (shareModalTitle) shareModalTitle.textContent = t("shareQuizTitle");
  if (shareSendBtn) shareSendBtn.textContent = t("send");
  const shareLinkBtn = document.getElementById("share-quiz-link-btn");
  if (shareLinkBtn) shareLinkBtn.textContent = t("shareQuizAsLink");
  if (sharePublicBtn) sharePublicBtn.textContent = t("shareToProfile");
  const authLoginBtn = document.getElementById("auth-login-btn");
  const authSignupBtn = document.getElementById("auth-signup-btn");
  const authLogoutBtn = document.getElementById("auth-logout-btn");
  if (authLoginBtn) authLoginBtn.textContent = t("login");
  if (authSignupBtn) authSignupBtn.textContent = t("signup");
  if (authLogoutBtn) authLogoutBtn.textContent = t("logout");
  const discoverTitle = document.getElementById("discover-title");
  if (discoverTitle) discoverTitle.textContent = t("discoverTitle");
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
  const DRAG_START_PX = 10;

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
  let pointerDown = false;

  function onPointerDown(e) {
    if (getTotalPages() <= 1) return;
    const target = e.target;
    if (target && (target.closest("button") || target.closest("a") || target.closest(".quiz-list-item-actions"))) return;
    startX = e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    startPage = getCurrentPage();
    wrapWidth = wrapEl.offsetWidth;
    lastDelta = 0;
    dragging = false;
    pointerDown = true;
    stripEl.classList.remove("quiz-list-no-drag");
    stripEl.style.transition = "none";
  }

  function onPointerMove(e) {
    if (!pointerDown) return;
    const x = e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : startX);
    let delta = x - startX;
    if (!dragging && Math.abs(delta) > DRAG_START_PX) {
      dragging = true;
      stripEl.classList.remove("quiz-list-no-drag");
    }
    if (!dragging) return;
    const totalPages = getTotalPages();
    if (startPage === 0 && delta > 0) delta = delta * 0.4;
    if (startPage === totalPages - 1 && delta < 0) delta = delta * 0.4;
    lastDelta = delta;
    applyTransform(startPage, delta, false);
  }

  function onPointerUp(e) {
    if (!pointerDown) return;
    pointerDown = false;
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
  wrapEl.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1 && e.target && !e.target.closest("button") && !e.target.closest("a") && !e.target.closest(".quiz-list-item-actions")) onPointerDown(e);
  }, { passive: true });
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
  let wrapWidth = quizSelectWrapEl.offsetWidth || 0;
  if (wrapWidth <= 0 && quizSelectWrapEl.offsetParent) wrapWidth = quizSelectWrapEl.offsetParent.clientWidth || 0;
  wrapWidth = Math.max(wrapWidth || 320, 280);

  for (let p = 0; p < totalPages; p++) {
    const slide = document.createElement("div");
    slide.className = "quiz-list-slide";
    slide.style.width = wrapWidth + "px";
    slide.style.minWidth = wrapWidth + "px";
    slide.style.maxWidth = wrapWidth + "px";
    const start = p * QUIZ_PER_PAGE;
    const slice = listToShow.slice(start, start + QUIZ_PER_PAGE);
    const listContainer = document.createElement("div");
    listContainer.className = "quiz-list";
    for (let i = 0; i < QUIZ_PER_PAGE; i++) {
      const quiz = slice[i];
      if (quiz) {
        const isSelected = selectedPlayQuizId === quiz.id;
        const item = document.createElement("div");
        item.className = "quiz-list-item quiz-select-item" + (isSelected ? " selected" : "");
        item.dataset.quizId = quiz.id;
        const coverUrl = (quiz.cover_image && quiz.cover_image.trim()) ? quiz.cover_image : "empty.png";
        const coverSafe = coverUrl.replace(/"/g, "&quot;");
        const desc = (quiz.description || "").trim().slice(0, 160);
        const descDisplay = desc + ((quiz.description || "").trim().length > 160 ? "…" : "");
        const qCount = quiz.questions ? quiz.questions.length : 0;
        const qStr = qCount === 1 ? (currentLang === "tr" ? "1 soru" : "1 question") : (currentLang === "tr" ? qCount + " soru" : qCount + " questions");
        item.innerHTML = `
          <div class="quiz-list-item-head">
            <span class="quiz-list-name">${escapeHtml(quiz.name)}</span>
            <span class="quiz-list-meta">${qStr}</span>
          </div>
          <div class="quiz-list-item-expand">
            <div class="quiz-list-item-cover" style="background-image:url(${coverSafe})"></div>
            <p class="quiz-list-item-desc">${escapeHtml(descDisplay) || "—"}</p>
          </div>`;
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          if (selectedPlayQuizId === quiz.id) return;
          var prevSelected = quizSelectStripEl.querySelector(".quiz-list-item.quiz-select-item.selected");
          selectedPlayQuizId = quiz.id;
          startQuizBtn.disabled = false;
          requestAnimationFrame(function () {
            if (prevSelected && prevSelected !== item) {
              prevSelected.classList.remove("expanded", "selected");
            }
            item.classList.add("selected", "expanded");
          });
        });
        listContainer.appendChild(item);
      } else {
        const empty = document.createElement("div");
        empty.className = "quiz-list-item quiz-list-item-empty";
        empty.innerHTML = `<span class="quiz-list-name quiz-list-name-empty">—</span>`;
        empty.setAttribute("aria-hidden", "true");
        listContainer.appendChild(empty);
      }
    }
    slide.appendChild(listContainer);
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

  var expandedTarget = quizSelectStripEl.querySelector(".quiz-list-item.quiz-select-item.selected");
  if (expandedTarget) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        expandedTarget.classList.add("expanded");
      });
    });
  }

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
      const typeLabel = q.type === "open" ? " (" + t("questionTypeOpen") + ")" : q.type === "match" ? " (" + t("questionTypeMatch") + ")" : "";
      textSpan.textContent = (q.text || "").trim().slice(0, 60) + (typeLabel || "") + ((q.text || "").trim().length > 60 ? "…" : "");
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

function showQuestionTypePanel(type) {
  currentQuestionType = type;
  ["choice", "open", "match"].forEach((t) => {
    const tab = document.getElementById("qtype-tab-" + t);
    const panel = document.getElementById("qtype-panel-" + t);
    if (tab) {
      tab.classList.toggle("active", t === type);
      tab.setAttribute("aria-selected", t === type ? "true" : "false");
    }
    if (panel) {
      panel.classList.toggle("question-type-panel-active", t === type);
      panel.hidden = t !== type;
    }
  });
}

function loadQuestionIntoForm(index) {
  const quiz = quizzes.find((q) => q.id === currentQuizForEdit);
  if (!quiz || !quiz.questions[index]) return;
  const q = quiz.questions[index];
  const type = q.type || "choice";
  showQuestionTypePanel(type);
  if (type === "choice") {
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
  } else if (type === "open") {
    const textEl = document.getElementById("open-question-text");
    const ansEl = document.getElementById("open-expected-answer");
    if (textEl) textEl.value = q.text || "";
    if (ansEl) ansEl.value = q.expectedAnswer || "";
    openEditFormQuestionImage = q.image || null;
    updateOpenQuestionImagePreview();
  } else if (type === "match") {
    const textEl = document.getElementById("match-question-text");
    if (textEl) textEl.value = q.text || "";
    editFormMatchPairs = Array.isArray(q.pairs) && q.pairs.length
      ? q.pairs.slice(0, MAX_MATCH_PAIRS).map((p) => ({ left: p.left || "", right: p.right || "" }))
      : [{ left: "", right: "" }];
    renderMatchPairsContainer();
  }
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

function updateOpenQuestionImagePreview() {
  const wrap = document.getElementById("open-question-image-wrap");
  const preview = document.getElementById("open-question-image-preview");
  const addBtn = document.getElementById("open-question-image-add");
  const safeSrc = sanitizeImageSrc(openEditFormQuestionImage);
  if (!preview) return;
  if (safeSrc) {
    preview.innerHTML = `<img src="${safeSrc.replace(/"/g, "&quot;")}" alt="" />`;
    if (wrap) wrap.classList.remove("hidden");
    if (addBtn) addBtn.classList.add("hidden");
  } else {
    preview.innerHTML = "";
    if (wrap) wrap.classList.add("hidden");
    if (addBtn) addBtn.classList.remove("hidden");
  }
}

function renderMatchPairsContainer() {
  const container = document.getElementById("match-pairs-container");
  const addBtn = document.getElementById("match-add-pair-btn");
  if (!container) return;
  container.innerHTML = "";
  editFormMatchPairs.forEach((pair, i) => {
    const row = document.createElement("div");
    row.className = "match-pair-row field";
    row.innerHTML = `
      <label class="match-pair-label">${i + 1}.</label>
      <input type="text" class="match-pair-left" data-index="${i}" placeholder="Sol" value="${escapeHtml(pair.left)}" />
      <span class="match-pair-arrow" aria-hidden="true">↔</span>
      <input type="text" class="match-pair-right" data-index="${i}" placeholder="Sağ" value="${escapeHtml(pair.right)}" />
      ${editFormMatchPairs.length > 1 ? `<button type="button" class="secondary-btn small-btn match-pair-remove" data-index="${i}" title="${escapeHtml(t("delete"))}">×</button>` : ""}
    `;
    const leftInput = row.querySelector(".match-pair-left");
    const rightInput = row.querySelector(".match-pair-right");
    const removeBtn = row.querySelector(".match-pair-remove");
    leftInput.addEventListener("input", () => { editFormMatchPairs[i].left = leftInput.value; });
    rightInput.addEventListener("input", () => { editFormMatchPairs[i].right = rightInput.value; });
    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        editFormMatchPairs.splice(i, 1);
        if (editFormMatchPairs.length === 0) editFormMatchPairs = [{ left: "", right: "" }];
        renderMatchPairsContainer();
      });
    }
    container.appendChild(row);
  });
  if (addBtn) addBtn.disabled = editFormMatchPairs.length >= MAX_MATCH_PAIRS;
}

function clearQuestionForm() {
  currentQuestionType = "choice";
  showQuestionTypePanel("choice");
  const textEl = document.getElementById("single-question-text");
  const correctEl = document.getElementById("single-correct-answer");
  if (textEl) textEl.value = "";
  editFormQuestionImage = null;
  editFormOptionImages = [null, null];
  updateQuestionImagePreview();
  renderOptionRows();
  if (correctEl) correctEl.value = "0";
  const openTextEl = document.getElementById("open-question-text");
  const openAnsEl = document.getElementById("open-expected-answer");
  if (openTextEl) openTextEl.value = "";
  if (openAnsEl) openAnsEl.value = "";
  openEditFormQuestionImage = null;
  updateOpenQuestionImagePreview();
  const matchTextEl = document.getElementById("match-question-text");
  if (matchTextEl) matchTextEl.value = "";
  editFormMatchPairs = [{ left: "", right: "" }];
  renderMatchPairsContainer();
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
  let wrapWidth = editQuizWrapEl.offsetWidth || 0;
  if (wrapWidth <= 0 && editQuizWrapEl.offsetParent) wrapWidth = editQuizWrapEl.offsetParent.clientWidth || 0;
  wrapWidth = Math.max(wrapWidth || 320, 280);

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
        const selectQuiz = (e) => {
          if (e) e.stopPropagation();
          selectedEditQuizId = quiz.id;
          renderEditQuizList(editQuizListCurrentPage);
          renderEditQuizPagination();
          updateEditQuestionsBtn();
        };
        textDiv.addEventListener("click", selectQuiz);
        item.addEventListener("click", (e) => {
          if (e.target.closest(".quiz-list-item-actions")) return;
          selectQuiz(e);
        });
        item.addEventListener("touchend", (e) => {
          if (e.target.closest(".quiz-list-item-actions")) return;
          selectQuiz(e);
        }, { passive: true });
        const actions = document.createElement("div");
        actions.className = "quiz-list-item-actions";
        const btnEdit = document.createElement("button");
        btnEdit.type = "button";
        btnEdit.className = "secondary-btn small-btn";
        btnEdit.textContent = t("editShort");
        const onEdit = (e) => {
          if (e) e.stopPropagation();
          selectedEditQuizId = quiz.id;
          doLoadEditQuiz(quiz.id);
        };
        btnEdit.addEventListener("click", onEdit);
        btnEdit.addEventListener("touchend", (e) => { e.preventDefault(); onEdit(e); }, { passive: false });
        actions.appendChild(btnEdit);
        if (supabaseClient && currentAuthUser) {
          const btnShare = document.createElement("button");
          btnShare.type = "button";
          btnShare.className = "secondary-btn small-btn";
          btnShare.textContent = t("shareQuiz");
          const onShare = (e) => {
            if (e) e.stopPropagation();
            selectedEditQuizId = quiz.id;
            openShareQuizModal(quiz.id);
          };
          btnShare.addEventListener("click", onShare);
          btnShare.addEventListener("touchend", (e) => { e.preventDefault(); onShare(e); }, { passive: false });
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

// Quiz run helpers — her sayfa ayrı URL (playRouteBase + "/" + index)
function startQuiz(quizId, options) {
  const quiz = quizzes.find((q) => q.id === quizId);
  if (!quiz || !quiz.questions.length) return;

  playRouteBase = (options && options.playRouteBase) || "#/play/" + quizId;
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
  if (typeof window !== "undefined" && window.location) window.location.hash = playRouteBase + "/0";
}

function startQuizAtPage(quiz, pageIndex, routeBase) {
  if (!quiz || !Array.isArray(quiz.questions) || !quiz.questions.length) return;
  const total = quiz.questions.length;
  const idx = Math.max(0, Math.min(pageIndex, total - 1));

  playRouteBase = routeBase || "#/play/" + quiz.id;
  currentQuiz = quiz;
  currentQuestionIndex = idx;
  currentQuestionOrder = buildQuestionOrder(quiz);
  currentScore = 0;
  lastRunQuizId = quiz.id;
  lastPlayedQuizFromShared = true;

  quizTitleEl.textContent = quiz.name;
  updateScoreDisplay();
  showView("quizView");
  updateFullscreenBtnText();
  warmUpAudio();
  renderCurrentQuestion();
  if (typeof window !== "undefined" && window.location) window.location.hash = playRouteBase + "/" + currentQuestionIndex;
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
  const qType = q.type || "choice";
  quizProgressEl.textContent = `Question ${currentQuestionIndex + 1} / ${total}`;

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

  if (qType === "open") {
    const inputWrap = document.createElement("div");
    inputWrap.className = "open-answer-wrap";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "open-answer-input";
    input.placeholder = currentLang === "tr" ? "Cevabınızı yazın..." : "Type your answer...";
    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.className = "primary-btn open-answer-check-btn";
    checkBtn.textContent = currentLang === "tr" ? "Cevabı kontrol et" : "Check answer";
    checkBtn.addEventListener("click", () => {
      const userAnswer = (input.value || "").trim();
      const expected = (q.expectedAnswer || "").trim();
      const correct = expected && userAnswer && userAnswer.toLowerCase() === expected.toLowerCase();
      if (correct) {
        currentScore += 1;
        updateScoreDisplay();
        playCorrectVfx(checkBtn);
        input.disabled = true;
        checkBtn.disabled = true;
        checkBtn.textContent = currentLang === "tr" ? "Doğru!" : "Correct!";
        checkBtn.classList.add("correct");
      } else {
        if (soundEnabled) playAnswerSound(false);
        checkBtn.classList.add("incorrect");
        checkBtn.textContent = currentLang === "tr" ? "Yanlış, tekrar dene" : "Wrong, try again";
      }
      nextQuestionBtn.disabled = false;
    });
    inputWrap.appendChild(input);
    inputWrap.appendChild(checkBtn);
    optionsContainerEl.appendChild(inputWrap);
    return;
  }

  if (qType === "match") {
    const pairs = Array.isArray(q.pairs) ? q.pairs : [];
    if (pairs.length === 0) {
      nextQuestionBtn.disabled = false;
      optionsContainerEl.textContent = currentLang === "tr" ? "Eşleştirme verisi yok." : "No matching data.";
      return;
    }
    const rightOrder = pairs.map((_, i) => i);
    for (let i = rightOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rightOrder[i], rightOrder[j]] = [rightOrder[j], rightOrder[i]];
    }
    const matchWrap = document.createElement("div");
    matchWrap.className = "match-quiz-wrap";
    matchWrap.dataset.rightOrder = JSON.stringify(rightOrder);
    const leftCol = document.createElement("div");
    leftCol.className = "match-column match-left";
    const rightCol = document.createElement("div");
    rightCol.className = "match-column match-right";
    pairs.forEach((p, i) => {
      const leftRow = document.createElement("div");
      leftRow.className = "match-row match-left-row";
      leftRow.dataset.pairIndex = String(i);
      leftRow.textContent = p.left || "";
      leftCol.appendChild(leftRow);
    });
    rightOrder.forEach((pairIdx) => {
      const rightRow = document.createElement("div");
      rightRow.className = "match-row match-right-row";
      rightRow.draggable = true;
      rightRow.dataset.pairIndex = String(pairIdx);
      rightRow.textContent = (pairs[pairIdx] && pairs[pairIdx].right) || "";
      rightCol.appendChild(rightRow);
    });
    matchWrap.appendChild(leftCol);
    matchWrap.appendChild(rightCol);
    optionsContainerEl.appendChild(matchWrap);
    attachMatchDragListeners(matchWrap, pairs.length, () => { nextQuestionBtn.disabled = false; });
    nextQuestionBtn.disabled = false;
    return;
  }

  const optsRaw = (q.options || []).map((o) => (typeof o === "string" ? { text: o } : o));
  let displayOrder = optsRaw.map((_, i) => i);
  if (shuffleOptionsEnabled && optsRaw.length > 1) {
    for (let i = displayOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [displayOrder[i], displayOrder[j]] = [displayOrder[j], displayOrder[i]];
    }
  }

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

function attachMatchDragListeners(matchWrap, pairCount, onReorder) {
  const rightCol = matchWrap.querySelector(".match-right");
  if (!rightCol) return;
  const rows = rightCol.querySelectorAll(".match-right-row");
  rows.forEach((row) => {
    row.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", row.dataset.pairIndex);
      e.dataTransfer.effectAllowed = "move";
      row.classList.add("match-dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("match-dragging"));
  });
  rightCol.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const target = e.target.closest(".match-right-row");
    if (target) target.classList.add("match-drag-over");
  });
  rightCol.addEventListener("dragleave", (e) => {
    if (!e.relatedTarget || !rightCol.contains(e.relatedTarget)) rightCol.querySelectorAll(".match-drag-over").forEach((r) => r.classList.remove("match-drag-over"));
  });
  rightCol.addEventListener("drop", (e) => {
    e.preventDefault();
    rightCol.querySelectorAll(".match-drag-over").forEach((r) => r.classList.remove("match-drag-over"));
    const fromIdx = e.dataTransfer.getData("text/plain");
    const target = e.target.closest(".match-right-row");
    if (!target || fromIdx === undefined) return;
    const fromEl = rightCol.querySelector(`.match-right-row[data-pair-index="${fromIdx}"]`);
    if (fromEl && fromEl !== target) {
      const all = [...rightCol.querySelectorAll(".match-right-row")];
      const fromI = all.indexOf(fromEl);
      const toI = all.indexOf(target);
      if (fromI >= 0 && toI >= 0) {
        if (fromI < toI) target.parentNode.insertBefore(fromEl, target.nextSibling);
        else target.parentNode.insertBefore(fromEl, target);
        if (onReorder) onReorder();
      }
    }
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
  const qIndex = currentQuestionOrder[currentQuestionIndex];
  const q = currentQuiz.questions[qIndex];
  if (q && q.type === "match") {
    const matchWrap = optionsContainerEl.querySelector(".match-quiz-wrap");
    if (matchWrap) {
      const rightCol = matchWrap.querySelector(".match-right");
      const rows = rightCol ? rightCol.querySelectorAll(".match-right-row") : [];
      let correct = 0;
      rows.forEach((row, slot) => {
        const pairIndex = parseInt(row.dataset.pairIndex, 10);
        if (!isNaN(pairIndex) && pairIndex === slot) correct++;
      });
      currentScore += correct;
      updateScoreDisplay();
    }
  }
  currentQuestionIndex += 1;
  if (typeof window !== "undefined" && window.location && playRouteBase) window.location.hash = playRouteBase + "/" + currentQuestionIndex;
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
  // "Soru seçimine dön" sadece quiz listesinden (quizlerim/keşfet) başlatıldığında göster; linkle açıldıysa gizle
  const backToQuizSelectBtn = document.getElementById("back-to-quiz-select-btn");
  if (backToQuizSelectBtn) backToQuizSelectBtn.classList.toggle("hidden", lastPlayedQuizFromShared);
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
      const filled = myRating !== null && i <= myRating;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-finished-star-btn" + (filled ? " rated" : "");
      btn.setAttribute("aria-label", `${i} yıldız`);
      btn.textContent = filled ? "★" : "☆";
      btn.dataset.rating = String(i);
      if (myRating === null) {
        btn.addEventListener("click", async () => {
          if (!currentAuthUser || !supabaseClient || !currentQuiz) return;
          const rating = i;
          await submitQuizRating(currentQuiz.id, rating);
          starsWrap.querySelectorAll("button").forEach((b) => {
            const r = Number(b.dataset.rating);
            const isRated = r <= rating;
            b.classList.toggle("rated", isRated);
            b.textContent = isRated ? "★" : "☆";
            b.disabled = true;
          });
          starsWrap.classList.add("stars-pop");
          setTimeout(() => starsWrap.classList.remove("stars-pop"), 380);
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
// Soru numarasına takılmaz: A-E seçenekleri + Answer satırı gördüğünde önceki satırı soru metni kabul eder (numara olsa da olmasa da).
/**
 * Expected pattern:
 * [Soru metni - numaralı (1. / 1)) veya numarasız]
 * A) Option 1
 * B) Option 2
 * ...
 * Answer: B
 */
function parseBulkQuestions(raw) {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const questions = [];
  const optionRegex = /^[A-Ea-e][\.\)]\s*(.+)$/;
  const answerRegex = /^answer\s*:\s*(.+)$/i;
  let i = 0;

  while (i < lines.length) {
    // A) ile başlayan satır ara (soru bloğu başlangıcı)
    const aMatch = lines[i].match(optionRegex);
    const isA = aMatch && lines[i].toUpperCase().startsWith("A");
    if (!isA || !aMatch) {
      i++;
      continue;
    }
    const optionLetters = ["A", "B", "C", "D", "E"];
    const options = [aMatch[1].trim()];
    let j = i + 1;
    while (j < lines.length && options.length < 5) {
      const m = lines[j].match(optionRegex);
      if (!m) break;
      const letter = lines[j].toUpperCase().charAt(0);
      const expected = optionLetters[options.length];
      if (letter !== expected) break;
      options.push(m[1].trim());
      j++;
    }
    if (options.length !== 5) {
      i++;
      continue;
    }
    if (j >= lines.length) {
      i++;
      continue;
    }
    const answerMatch = lines[j].match(answerRegex);
    if (!answerMatch) {
      i++;
      continue;
    }
    const answerVal = answerMatch[1].trim();
    let correctIndex = -1;
    if (/^[A-Ea-e]$/.test(answerVal)) {
      correctIndex = answerVal.toUpperCase().charCodeAt(0) - 65;
    } else {
      const idx = options.findIndex((opt) => opt.toLowerCase() === answerVal.toLowerCase());
      if (idx >= 0) correctIndex = idx;
    }
    if (correctIndex === -1) {
      i++;
      continue;
    }
    const questionText = i > 0 ? lines[i - 1] : "";
    const text = questionText.replace(/^\d+[\.\)]\s*/, "").trim();
    if (text) {
      questions.push({ text, options, correctIndex });
    }
    i = j + 1;
  }

  return questions;
}

// Create / edit quiz flow
let draftQuestions = [];
let currentQuizCoverImage = null;

function updateQuizCoverPreview() {
  const preview = document.getElementById("quiz-cover-preview");
  const removeBtn = document.getElementById("quiz-cover-remove-btn");
  if (!preview) return;
  if (currentQuizCoverImage) {
    preview.style.backgroundImage = `url(${currentQuizCoverImage})`;
    preview.classList.add("has-image");
    if (removeBtn) removeBtn.classList.remove("hidden");
  } else {
    preview.style.backgroundImage = "";
    preview.classList.remove("has-image");
    if (removeBtn) removeBtn.classList.add("hidden");
  }
}

function resetCreateQuizForm() {
  quizNameInput.value = "";
  quizDescriptionInput.value = "";
  bulkInput.value = "";
  draftQuestions = [];
  editingQuizId = null;
  selectedEditQuizId = "";
  currentQuizCoverImage = null;
  updateQuizCoverPreview();
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

  const quizId = selectedEditQuizId || editingQuizId;
  if (quizId) {
    const quiz = quizzes.find((q) => q.id === quizId);
    const isEditingThisQuiz = editingQuizId === quizId;
    const base = isEditingThisQuiz && draftQuestions.length
      ? draftQuestions.slice()
      : (quiz && quiz.questions && quiz.questions.length)
        ? quiz.questions.slice()
        : [];
    draftQuestions = base.concat(parsed);
    if (!editingQuizId) {
      editingQuizId = quizId;
      if (quiz) {
        quizNameInput.value = quiz.name || "";
        quizDescriptionInput.value = quiz.description || "";
      }
    }
  } else {
    draftQuestions = parsed;
  }

  const newlyAdded = parsed.length;
  const totalNow = draftQuestions.length;
  const statusMsg = newlyAdded === totalNow
    ? (t("parseDetectedOnly") || "{count} question(s). Total: {total}.").replace("{count}", String(newlyAdded)).replace("{total}", String(totalNow))
    : (t("parseAddedNew") || "Added {new} new. Total: {total}.").replace("{new}", String(newlyAdded)).replace("{total}", String(totalNow));
  parseStatusEl.textContent = statusMsg;
  parseStatusEl.classList.add("success");

  parsedQuestionsSummaryEl.classList.remove("hidden");
  const sample = draftQuestions.slice(0, 3);
  const summaryStr = (t("parsePreviewSummary") || "{total} question(s) (+{new} added)").replace("{total}", String(totalNow)).replace("{new}", String(newlyAdded));
  let html = `<strong>${escapeHtml(summaryStr)}</strong><br/>`;
  html += sample
    .map(
      (q, index) =>
        `${escapeHtml(String(index + 1))}. ${escapeHtml(q.text || "")} <span class="hint">(Answer: ${
          escapeHtml(String.fromCharCode(65 + (q.correctIndex ?? 0)))
        })</span>`
    )
    .join("<br/>");
  if (draftQuestions.length > 3) {
    const moreStr = (t("parsePreviewMore") || "...and {n} more.").replace("{n}", String(draftQuestions.length - 3));
    html += `<br/><span class="hint">${escapeHtml(moreStr)}</span>`;
  }
  parsedQuestionsSummaryEl.innerHTML = html;
  updateEditQuestionsBtn();
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
      existing.cover_image = currentQuizCoverImage || null;
    }
  } else {
    const newQuiz = {
      id: `quiz_${Date.now()}`,
      name,
      description,
      questions: draftQuestions,
      cover_image: currentQuizCoverImage || null
    };
    quizzes.push(newQuiz);
  }

  const quiz = editingQuizId ? quizzes.find((q) => q.id === editingQuizId) : quizzes[quizzes.length - 1];
  saveQuizzes();
  if (!supabaseClient && typeof window !== "undefined") {
    await new Promise(function (resolve) {
      ensureSupabaseThenRun(function () { resolve(); });
    });
  }
  if (supabaseClient && !currentAuthUser) {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      currentAuthUser = session?.user ?? null;
    } catch (_) {}
  }
  if (supabaseClient && currentAuthUser && quiz) {
    try {
      await saveQuizToCloud(quiz);
      await fetchUserQuizzes();
    } catch (e) {
      try {
        await saveQuizToCloud(quiz);
        await fetchUserQuizzes();
      } catch (e2) {
        console.warn("saveQuizToCloud retry failed", e2);
        alert(currentLang === "tr" ? "Quiz cihaza kaydedildi; bulut senkronizasyonu başarısız. İnternet kontrolü sonrası tekrar deneyin." : "Quiz saved locally; cloud sync failed. Check connection and try again.");
      }
    }
  }
  refreshQuizSelect();

  const count = draftQuestions.length;
  const msg = (t("saveQuizSuccess") || "Quiz saved with {count} question(s).").replace("{count}", String(count));
  alert(msg);
  resetCreateQuizForm();
  showView("createQuiz", "back");
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      refreshEditQuizSelect();
    });
  });
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
var globalBarLogoBtn = document.getElementById("global-bar-logo-btn");
if (globalBarLogoBtn) {
  globalBarLogoBtn.addEventListener("click", function () {
    showView("mainMenu");
  });
}
var globalSearchWrap = document.getElementById("global-bar-search-wrap");
var globalSearchToggleBtn = document.getElementById("global-search-toggle-btn");
if (globalSearchToggleBtn && globalSearchWrap) {
  globalSearchToggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var expanded = globalSearchWrap.classList.toggle("search-expanded");
    globalSearchToggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (expanded && mainQuizSearchEl) {
      requestAnimationFrame(function () {
        mainQuizSearchEl.focus();
      });
    }
  });
  document.addEventListener("click", function closeSearchOnOutside(e) {
    if (!globalSearchWrap.classList.contains("search-expanded")) return;
    if (globalSearchWrap.contains(e.target)) return;
    globalSearchWrap.classList.remove("search-expanded");
    globalSearchToggleBtn.setAttribute("aria-expanded", "false");
  });
}

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
    if (currentAuthUser) { viewingProfileUserId = null; showView("profile"); loadProfile(); }
  });
}

// Profil: avatar + isim; kendi profilinde düzenle + arkadaşlar, başkasınınkinde Arkadaş ekle
async function loadProfile(optionalUserId) {
  if (!supabaseClient || !currentAuthUser) return;
  const isOwn = !optionalUserId || optionalUserId === currentAuthUser.id;
  const profileUserId = isOwn ? currentAuthUser.id : optionalUserId;
  const nickEl = document.getElementById("profile-nickname");
  const imgEl = document.getElementById("profile-avatar-img");
  const placeEl = document.getElementById("profile-avatar-placeholder");
  const editBtn = document.getElementById("profile-edit-btn");
  const ownActions = document.getElementById("profile-own-actions");
  const otherActions = document.getElementById("profile-other-actions");
  const addFriendBtn = document.getElementById("profile-add-friend-btn");
  const friendStatus = document.getElementById("profile-friend-status");
  const { data: profile } = await supabaseClient.from("profiles").select("avatar_url,nickname").eq("id", profileUserId).single();
  let nick = (profile?.nickname || "").trim();
  if (isOwn) nick = nick || (currentAuthUser.user_metadata?.nickname || currentAuthUser.user_metadata?.name || currentAuthUser.email?.split("@")[0] || "").trim() || currentAuthUser.email || "";
  else nick = nick || profileUserId.slice(0, 8);
  if (nickEl) nickEl.textContent = nick;
  if (isOwn) {
    const headerNick = document.getElementById("auth-nickname");
    if (headerNick) headerNick.textContent = nick;
  }
  const safeAvatar = profile?.avatar_url ? sanitizeImageSrc(profile.avatar_url) : "";
  if (safeAvatar && imgEl && placeEl) { imgEl.src = safeAvatar; imgEl.classList.remove("hidden"); placeEl.classList.add("hidden"); }
  else if (imgEl && placeEl) { imgEl.classList.add("hidden"); placeEl.classList.remove("hidden"); }
  if (ownActions) ownActions.classList.toggle("hidden", !isOwn);
  if (otherActions) otherActions.classList.add("hidden");
  if (editBtn) { editBtn.classList.toggle("hidden", !isOwn); if (isOwn) editBtn.textContent = t("editProfile"); }
  if (isOwn) {
    await loadProfileSharedQuizzes();
    return;
  }
  viewingProfileUserId = profileUserId;
  if (otherActions) otherActions.classList.remove("hidden");
  if (addFriendBtn) addFriendBtn.classList.add("hidden");
  if (friendStatus) { friendStatus.classList.remove("hidden"); friendStatus.textContent = ""; }
  const [friendRows, reqRows] = await Promise.all([
    supabaseClient.from("friendships").select("friend_id").eq("user_id", currentAuthUser.id).eq("friend_id", profileUserId),
    supabaseClient.from("friend_requests").select("id,from_user_id,to_user_id").or(`and(from_user_id.eq.${currentAuthUser.id},to_user_id.eq.${profileUserId}),and(from_user_id.eq.${profileUserId},to_user_id.eq.${currentAuthUser.id})`)
  ]);
  const isFriend = friendRows?.data?.length > 0;
  const existingReq = reqRows?.data?.find(function (r) { return r.from_user_id === currentAuthUser.id; });
  const theySentReq = reqRows?.data?.find(function (r) { return r.from_user_id === profileUserId; });
  if (isFriend) {
    if (friendStatus) friendStatus.textContent = t("alreadyFriends");
  } else if (existingReq || theySentReq) {
    if (friendStatus) friendStatus.textContent = t("requestSent");
  } else {
    if (addFriendBtn) {
      addFriendBtn.classList.remove("hidden");
      addFriendBtn.textContent = t("addFriend");
      addFriendBtn.onclick = async function () {
        if (!supabaseClient || !currentAuthUser) return;
        await supabaseClient.from("friend_requests").upsert({ from_user_id: currentAuthUser.id, to_user_id: profileUserId, status: "pending" }, { onConflict: "from_user_id,to_user_id" });
        addFriendBtn.classList.add("hidden");
        if (friendStatus) friendStatus.textContent = t("requestSent");
      };
    }
  }
  await loadProfileSharedQuizzes(profileUserId);
}
async function loadProfileSharedQuizzes(optionalUserId) {
  const titleEl = document.getElementById("profile-shared-title");
  const listEl = document.getElementById("profile-shared-list");
  if (!listEl || !supabaseClient) return;
  const userId = optionalUserId || (currentAuthUser && currentAuthUser.id);
  if (!userId) return;
  listEl.innerHTML = "";
  titleEl?.classList.add("hidden");
  const { data: rawRows } = await supabaseClient.from("public_quizzes").select("id,user_id,quiz_id,view_count,show_in_discover,short_code,category,category_sub").eq("user_id", userId).order("created_at", { ascending: false });
  const rows = (rawRows || []).filter(function (r) { return r.show_in_discover === true; });
  if (!rows.length) return;
  titleEl?.classList.remove("hidden");
  if (titleEl) titleEl.textContent = t("profileSharedQuizzes");
  const quizIds = rows.map((r) => r.quiz_id);
  const { data: quizData } = await supabaseClient.from("quizzes").select("id,name,description,questions,cover_image").in("id", quizIds);
  const byId = {};
  if (quizData) for (const q of quizData) byId[q.id] = q;
  const ratingsMap = currentAuthUser ? await getQuizRatings(quizIds) : {};
  const isOwnProfile = userId === (currentAuthUser && currentAuthUser.id);
  let authorName = "—";
  const { data: authorProf } = await supabaseClient.from("profiles").select("nickname").eq("id", userId).maybeSingle();
  if (authorProf && authorProf.nickname) authorName = authorProf.nickname;
  const catLabel = currentLang === "tr" ? "Kategori" : "Category";
  for (const r of rows) {
    const quiz = byId[r.quiz_id];
    if (!quiz) continue;
    const ri = ratingsMap[r.quiz_id];
    const avgStr = formatRating(ri ? ri.avg : null);
    const ratingCount = ri ? ri.count : 0;
    const viewCount = r.view_count != null ? r.view_count : 0;
    const viewStr = currentLang === "tr" ? `${viewCount} giriş` : `${viewCount} views`;
    const categoryLabel = getCategoryLabel(r.category);
    const descShort = ((quiz.description || "").trim() || "—").slice(0, 80);
    const descDisplay = descShort.length >= 80 ? descShort + "…" : descShort;
    const coverUrl = (quiz.cover_image && quiz.cover_image.trim()) ? quiz.cover_image : DISCOVER_PLACEHOLDER_IMAGE;
    const coverUrlSafe = coverUrl.replace(/"/g, "%22").replace(/'/g, "%27");
    discoverCardCache[quiz.id] = { quiz: quiz, author: authorName, ratingInfo: ri || null, publicRowId: r.id, shortCode: r.short_code || null };
    const wrap = document.createElement("div");
    wrap.className = "discover-feed-card-wrap profile-shared-card-wrap";
    wrap.setAttribute("role", "listitem");
    wrap.dataset.quizId = quiz.id;
    const menuLabel = t("privacy");
    wrap.innerHTML = `
      <button type="button" class="discover-card discover-feed-card">
        <span class="discover-card-image-wrap">
          <span class="discover-card-image"></span>
          <span class="discover-card-badge discover-card-views">${escapeHtml(viewStr)}</span>
          <span class="discover-card-badge discover-card-rating" aria-label="Puan"><span class="discover-rating-stars">★</span> ${escapeHtml(avgStr)}<span class="discover-rating-count"> (${ratingCount})</span></span>
        </span>
        <span class="discover-card-meta-row">
          <span class="discover-card-category">${escapeHtml(catLabel)}: ${escapeHtml(categoryLabel)}</span>
          <span class="discover-card-author">${escapeHtml(authorName)}</span>
        </span>
        <span class="discover-card-title">${escapeHtml(quiz.name)}</span>
        <span class="discover-card-desc">${escapeHtml(descDisplay)}</span>
      </button>
      ${isOwnProfile ? `<button type="button" class="discover-card-menu-btn profile-card-menu-btn" aria-label="${escapeHtml(menuLabel)}">⋮</button>` : ""}
    `;
    const cardBtn = wrap.querySelector(".discover-feed-card");
    const imgEl = wrap.querySelector(".discover-card-image");
    if (imgEl) imgEl.style.backgroundImage = "url(\"" + coverUrlSafe + "\")";
    cardBtn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      openDiscoverPreview(quiz, authorName, ri || null, r.id);
    });
    if (isOwnProfile) {
      const menuBtn = wrap.querySelector(".profile-card-menu-btn");
      if (menuBtn) {
        menuBtn.addEventListener("click", function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          openProfileSharedDropdown(ev.currentTarget, wrap, quiz, r, listEl);
        });
      }
    }
    listEl.appendChild(wrap);
  }
}

function openProfileSharedDropdown(anchor, card, quiz, publicRow, listEl) {
  const existing = document.querySelector(".profile-shared-dropdown");
  if (existing) existing.remove();
  const showInDiscover = publicRow.show_in_discover === true;
  const tickHtml = '<span class="profile-dropdown-tick" aria-hidden="true"> ✓</span>';
  const drop = document.createElement("div");
  drop.className = "profile-shared-dropdown";
  drop.innerHTML = `
    <button type="button" class="profile-dropdown-item" data-action="edit">${escapeHtml(t("edit"))}</button>
    <div class="profile-dropdown-sub">
      <span class="profile-dropdown-label">${escapeHtml(t("privacy"))}</span>
      <button type="button" class="profile-dropdown-item" data-privacy="only_me">${escapeHtml(t("onlyMe"))}</button>
      <button type="button" class="profile-dropdown-item" data-privacy="friends">${escapeHtml(t("friends"))}${!showInDiscover ? tickHtml : ""}</button>
      <button type="button" class="profile-dropdown-item" data-privacy="everyone">${escapeHtml(t("everyone"))}${showInDiscover ? tickHtml : ""}</button>
    </div>
    <button type="button" class="profile-dropdown-item profile-dropdown-remove" data-action="remove">${escapeHtml(t("remove"))}</button>
  `;
  const rect = anchor.getBoundingClientRect();
  drop.style.position = "fixed";
  drop.style.left = rect.right - 200 + "px";
  drop.style.top = rect.bottom + 4 + "px";
  drop.style.zIndex = "10000";
  document.body.appendChild(drop);
  const close = function () { drop.remove(); document.removeEventListener("click", close); };
  setTimeout(function () { document.addEventListener("click", close); }, 0);
  drop.addEventListener("click", function (e) {
    const item = e.target.closest(".profile-dropdown-item");
    if (!item) return;
    e.stopPropagation();
    const action = item.dataset.action;
    const privacy = item.dataset.privacy;
    if (action === "edit") {
      close();
      if (!quizzes.find(function (q) { return q.id === quiz.id; })) quizzes.push({ id: quiz.id, name: quiz.name, description: quiz.description || "", questions: Array.isArray(quiz.questions) ? quiz.questions : [] });
      doLoadEditQuiz(quiz.id);
      return;
    }
    if (action === "remove") {
      close();
      (async function () {
        if (!supabaseClient || !currentAuthUser) return;
        await supabaseClient.from("public_quizzes").delete().eq("id", publicRow.id).eq("user_id", currentAuthUser.id);
        loadProfileSharedQuizzes();
      })();
      return;
    }
    if (privacy) {
      close();
      (async function () {
        if (!supabaseClient || !currentAuthUser) return;
        if (privacy === "only_me") {
          await supabaseClient.from("public_quizzes").delete().eq("id", publicRow.id).eq("user_id", currentAuthUser.id);
        } else {
          await supabaseClient.from("public_quizzes").update({ show_in_discover: privacy === "everyone" }).eq("id", publicRow.id).eq("user_id", currentAuthUser.id);
        }
        loadProfileSharedQuizzes();
      })();
    }
  });
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
  const headerUser = document.getElementById("chat-header-user");
  const headerAvatar = document.getElementById("chat-header-avatar");
  const headerPlaceholder = document.getElementById("chat-header-avatar-placeholder");
  const addFriendBtn = document.getElementById("chat-add-friend-btn");
  if (!messagesEl || !chatWithUserId || !supabaseClient || !currentAuthUser) return;
  const { data: prof } = await supabaseClient.from("profiles").select("nickname,avatar_url").eq("id", chatWithUserId).single();
  const nick = prof?.nickname || chatWithUserId.slice(0, 8);
  if (titleEl) titleEl.textContent = nick;
  if (headerUser) {
    headerUser.onclick = function () {
      viewingProfileUserId = chatWithUserId;
      showView("profile");
      loadProfile(chatWithUserId);
    };
  }
  if (headerAvatar && headerPlaceholder) {
    const safeAvatar = prof?.avatar_url ? sanitizeImageSrc(prof.avatar_url) : "";
    if (safeAvatar) { headerAvatar.src = safeAvatar; headerAvatar.classList.remove("hidden"); headerPlaceholder.classList.add("hidden"); }
    else { headerAvatar.classList.add("hidden"); headerPlaceholder.classList.remove("hidden"); }
  }
  if (addFriendBtn) {
    const [friendRows, reqRows] = await Promise.all([
      supabaseClient.from("friendships").select("friend_id").eq("user_id", currentAuthUser.id).eq("friend_id", chatWithUserId),
      supabaseClient.from("friend_requests").select("from_user_id").eq("status", "pending").or(`and(from_user_id.eq.${currentAuthUser.id},to_user_id.eq.${chatWithUserId}),and(from_user_id.eq.${chatWithUserId},to_user_id.eq.${currentAuthUser.id})`)
    ]);
    const isFriend = friendRows?.data?.length > 0;
    const hasRequest = (reqRows?.data?.length || 0) > 0;
    if (isFriend || hasRequest) {
      addFriendBtn.classList.add("hidden");
      addFriendBtn.textContent = t("addFriend");
    } else {
      addFriendBtn.classList.remove("hidden");
      addFriendBtn.textContent = t("addFriend");
      addFriendBtn.onclick = async function () {
        if (!supabaseClient || !currentAuthUser) return;
        await supabaseClient.from("friend_requests").upsert({ from_user_id: currentAuthUser.id, to_user_id: chatWithUserId, status: "pending" }, { onConflict: "from_user_id,to_user_id" });
        addFriendBtn.classList.add("hidden");
      };
    }
  }
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
    const { data: prof } = await supabaseClient.from("profiles").select("nickname,avatar_url").eq("id", r.friend_id).single();
    const nick = prof?.nickname || r.friend_id.slice(0, 8);
    const safeAvatar = prof?.avatar_url ? sanitizeImageSrc(prof.avatar_url) : "";
    const li = document.createElement("li");
    li.className = "friends-list-item-clickable";
    var wrap = document.createElement("span");
    wrap.className = "friends-list-avatar-wrap";
    if (safeAvatar) {
      var img = document.createElement("img");
      img.className = "friends-list-avatar";
      img.src = safeAvatar;
      img.alt = "";
      wrap.appendChild(img);
    } else {
      var ph = document.createElement("span");
      ph.className = "friends-list-avatar-placeholder";
      ph.setAttribute("aria-hidden", "true");
      wrap.appendChild(ph);
    }
    li.appendChild(wrap);
    var nameSpan = document.createElement("span");
    nameSpan.className = "friends-list-name";
    nameSpan.textContent = nick;
    li.appendChild(nameSpan);
    li.addEventListener("click", function () {
      viewingProfileUserId = r.friend_id;
      showView("profile");
      loadProfile(r.friend_id);
    });
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
  var quiz = quizzes.find(function (q) { return q.id === quizId; });
  var previewWrap = document.getElementById("share-quiz-preview");
  var previewName = document.getElementById("share-quiz-preview-name");
  var previewDesc = document.getElementById("share-quiz-preview-desc");
  if (previewWrap && previewName && previewDesc) {
    if (quiz) {
      previewName.textContent = quiz.name || "";
      previewDesc.textContent = (quiz.description || "").trim().slice(0, 200) || "—";
      if ((quiz.description || "").trim().length > 200) previewDesc.textContent += "…";
      previewWrap.classList.remove("hidden");
    } else {
      previewWrap.classList.add("hidden");
    }
  }
  var catSelect = document.getElementById("share-quiz-category");
  var subSelect = document.getElementById("share-quiz-category-sub");
  var subWrap = document.getElementById("share-quiz-sub-wrap");
  if (catSelect) {
    catSelect.innerHTML = "";
    var opt0 = document.createElement("option");
    opt0.value = "";
    opt0.textContent = currentLang === "tr" ? "— Seçin —" : "— Select —";
    catSelect.appendChild(opt0);
    QUIZ_CATEGORIES.forEach(function (c) {
      var opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = currentLang === "tr" ? c.labelTr : c.labelEn;
      catSelect.appendChild(opt);
    });
    catSelect.value = "";
  }
  if (subSelect) {
    subSelect.innerHTML = "";
    var sub0 = document.createElement("option");
    sub0.value = "";
    sub0.textContent = currentLang === "tr" ? "— Seçin —" : "— Select —";
    subSelect.appendChild(sub0);
    EDUCATION_SUBS.forEach(function (s) {
      var opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = currentLang === "tr" ? s.labelTr : s.labelEn;
      subSelect.appendChild(opt);
    });
    subSelect.value = "";
  }
  if (subWrap) subWrap.classList.add("hidden");
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
document.getElementById("share-quiz-category")?.addEventListener("change", function () {
  var val = this.value;
  var subWrap = document.getElementById("share-quiz-sub-wrap");
  var subSelect = document.getElementById("share-quiz-category-sub");
  if (subWrap) subWrap.classList.toggle("hidden", val !== "egitim");
  if (subSelect && val !== "egitim") subSelect.value = "";
});

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
// Herkese açık paylaşımda küfür/argo: önce bağlam duyarlı AI (TF Toxicity), yalnızca model yoksa dar kelime listesi
function normalizeForProfanityCheck(s) {
  if (typeof s !== "string") return "";
  var t = s.toLowerCase()
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ç/g, "c")
    .replace(/[^a-z0-9\s]/g, " ");
  return " " + t + " ";
}
// Sadece açık küfür (masum kelimeler çıkarıldı: mal, ass, damn, crap, salak, aptal)
var BANNED_WORDS_FALLBACK = ["amk","aq","sik","sike","göt","orospu","piç","kahpe","gerizekalı","fuck","shit","bitch","dick","pussy","wtf","fck","sht"];
function containsProfanityWordList(text) {
  var norm = normalizeForProfanityCheck(text);
  for (var i = 0; i < BANNED_WORDS_FALLBACK.length; i++) {
    var w = BANNED_WORDS_FALLBACK[i];
    if (norm.indexOf(" " + w + " ") !== -1) return true;
    if (norm.startsWith(w + " ") || norm.endsWith(" " + w)) return true;
  }
  return false;
}
var toxicityModelPromise = null;
function getToxicityModel() {
  var tox = (typeof window !== "undefined" && window.toxicity) || (typeof toxicity !== "undefined" && toxicity);
  if (!tox || typeof tox.load !== "function") return null;
  if (!toxicityModelPromise) toxicityModelPromise = tox.load(0.85, ["toxicity", "severe_toxicity", "identity_attack", "insult", "threat", "sexual_explicit", "obscene"]);
  return toxicityModelPromise;
}
function splitIntoSentences(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  var parts = text.split(/[.!?\n]+/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 2; });
  return parts.slice(0, 25);
}
async function containsProfanity(text) {
  if (typeof text !== "string" || !text.trim()) return false;
  try {
    var model = await getToxicityModel();
    if (model) {
      var sentences = splitIntoSentences(text);
      if (sentences.length === 0) return false;
      var predictions = await model.classify(sentences);
      for (var p = 0; p < predictions.length; p++) {
        var res = predictions[p].results;
        for (var i = 0; i < res.length; i++) if (res[i].match === true) return true;
      }
      return false;
    }
  } catch (e) {
    console.warn("Toxicity check failed, using fallback word list", e);
  }
  return containsProfanityWordList(text);
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
function generateShortCode() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var code = "";
  var len = 12;
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    var arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    for (var i = 0; i < len; i++) code += chars.charAt(arr[i] % chars.length);
  } else {
    for (var i = 0; i < len; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
function ensureLinkShareRow(quizId, showInDiscover) {
  return new Promise(function (resolve) {
    function tryUpsert(attempt) {
      attempt = attempt || 0;
      supabaseClient.from("public_quizzes").select("short_code, show_in_discover").eq("user_id", currentAuthUser.id).eq("quiz_id", quizId).maybeSingle().then(function (res) {
        var existingRow = res?.data;
        var show = existingRow ? (existingRow.show_in_discover === true) : !!showInDiscover;
        var code = existingRow?.short_code || generateShortCode();
        var payload = { user_id: currentAuthUser.id, quiz_id: quizId, show_in_discover: show, short_code: code };
        supabaseClient.from("public_quizzes").upsert(payload, { onConflict: "user_id,quiz_id" }).then(function (u) {
          if (u.error) {
            if (u.error.code === "23505" && attempt < 3) {
              tryUpsert(attempt + 1);
              return;
            }
            if (u.error.code === "42703") {
              supabaseClient.from("public_quizzes").upsert({ user_id: currentAuthUser.id, quiz_id: quizId }, { onConflict: "user_id,quiz_id" }).then(function (u2) {
                resolve({ shortCode: null, linkWorks: !u2.error });
              }).catch(function () { resolve({ shortCode: null, linkWorks: false }); });
              return;
            }
            resolve({ shortCode: null, linkWorks: false });
            return;
          }
          resolve({ shortCode: code, linkWorks: true });
        }).catch(function () { resolve({ shortCode: null, linkWorks: false }); });
      }).catch(function () { resolve({ shortCode: null, linkWorks: false }); });
    }
    supabaseClient.rpc("ensure_public_quiz_link", { p_quiz_id: quizId, p_show_in_discover: !!showInDiscover }).then(function (r) {
      if (!r.error && r.data) { resolve({ shortCode: r.data, linkWorks: true }); return; }
      tryUpsert(0);
    }).catch(function () { tryUpsert(0); });
  });
}

document.getElementById("share-quiz-link-btn")?.addEventListener("click", async () => {
  if (!shareQuizModalQuizId) return;
  var linkBtn = document.getElementById("share-quiz-link-btn");
  var waitText = currentLang === "tr" ? "Lütfen bekleyiniz…" : "Please wait…";
  if (linkBtn) { linkBtn.disabled = true; linkBtn.textContent = waitText; }
  var base = window.location.origin + (window.location.pathname || "/").replace(/\/?$/, "");
  var link = base + "#/play/" + shareQuizModalQuizId;
  var shortCode = null;
  var linkWorks = false;
  if (supabaseClient && currentAuthUser) {
    var existing = await supabaseClient.from("public_quizzes").select("show_in_discover").eq("user_id", currentAuthUser.id).eq("quiz_id", shareQuizModalQuizId).maybeSingle();
    var showInDiscover = existing?.data?.show_in_discover === true;
    var result = await ensureLinkShareRow(shareQuizModalQuizId, showInDiscover);
    shortCode = result.shortCode;
    linkWorks = result.linkWorks;
    if (shortCode) link = base + "#/play/short/" + shortCode;
  } else {
    linkWorks = false;
  }
  var quiz = quizzes.find(function (q) { return q.id === shareQuizModalQuizId; });
  var fullText = getQuizTextForProfanityCheck(quiz);
  var waitStart = Date.now();
  var hasProfanity = await containsProfanity(fullText);
  var elapsed = Date.now() - waitStart;
  if (elapsed < 600) await new Promise(function (r) { setTimeout(r, 600 - elapsed); });
  if (linkBtn) { linkBtn.disabled = false; linkBtn.textContent = t("shareQuizAsLink"); }
  if (!linkWorks && (!supabaseClient || !currentAuthUser)) {
    alert(currentLang === "tr" ? "Link paylaşmak için giriş yapın." : "Please log in to share a link.");
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(function () {
      if (hasProfanity) alert(currentLang === "tr" ? "Link kopyalandı. İçerik uyarısı: Herkese açık paylaşımda bu quiz uygun olmayabilir." : "Link copied. Content warning: this quiz may not be suitable for public sharing.");
      else if (!linkWorks) alert(currentLang === "tr" ? "Link kopyalandı. Açılmayabilir; Supabase'de 'supabase-rpc-ensure-public-quiz-link.sql' dosyasını çalıştırın." : "Link copied. It may not open; run supabase-rpc-ensure-public-quiz-link.sql in Supabase.");
      else alert(currentLang === "tr" ? "Link kopyalandı. Linki açan herkes giriş yapmadan quizi görebilir (keşfet listesinde görünmez)." : "Link copied. Anyone with the link can open the quiz (not shown in Discover).");
    }).catch(function () { fallbackCopyLink(link); });
  } else {
    fallbackCopyLink(link);
  }
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
  var pubBtn = document.getElementById("share-quiz-public-btn");
  var waitText = currentLang === "tr" ? "Lütfen bekleyiniz…" : "Please wait…";
  if (pubBtn) { pubBtn.disabled = true; pubBtn.textContent = waitText; }
  var waitStart = Date.now();
  var quiz = quizzes.find(function (q) { return q.id === shareQuizModalQuizId; });
  var fullText = getQuizTextForProfanityCheck(quiz);
  var hasProfanity = await containsProfanity(fullText);
  var elapsed = Date.now() - waitStart;
  if (elapsed < 600) await new Promise(function (r) { setTimeout(r, 600 - elapsed); });
  if (pubBtn) { pubBtn.disabled = false; pubBtn.textContent = t("shareToProfile"); }
  if (hasProfanity) {
    alert(currentLang === "tr" ? "Herkese açık quiz içeriğinde uygun olmayan ifadeler bulundu. Lütfen quiz adı, açıklama ve soru/cevapları kontrol edin." : "The quiz contains inappropriate language. Please remove offensive content before sharing publicly.");
    return;
  }
  var catSelect = document.getElementById("share-quiz-category");
  var subSelect = document.getElementById("share-quiz-category-sub");
  var category = catSelect ? (catSelect.value || "").trim() : "";
  var category_sub = subSelect ? (subSelect.value || "").trim() : "";
  if (!category) {
    alert(currentLang === "tr" ? "Lütfen bir kategori seçin." : "Please select a category.");
    return;
  }
  if (category === "egitim" && !category_sub) {
    alert(currentLang === "tr" ? "Eğitim kategorisi için lütfen bir bölüm seçin." : "Please select a section for Education.");
    return;
  }
  var existing = await supabaseClient.from("public_quizzes").select("short_code").eq("user_id", currentAuthUser.id).eq("quiz_id", shareQuizModalQuizId).maybeSingle();
  var payload = { user_id: currentAuthUser.id, quiz_id: shareQuizModalQuizId, show_in_discover: true, category: category || null, category_sub: category === "egitim" ? category_sub || null : null };
  if (existing?.data?.short_code) payload.short_code = existing.data.short_code;
  await supabaseClient.from("public_quizzes").upsert(payload, { onConflict: "user_id,quiz_id" });
  closeShareQuizModal();
  alert(currentLang === "tr" ? "Profilinde paylaşıldı. Keşfet'te görünecek." : "Shared on profile. It will appear in Discover.");
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

// ——— Quizleri keşfet (sil baştan) ———
let discoverPreviewQuiz = null;
var discoverCardCache = {};
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
  const feed = document.getElementById("discover-feed");
  const emptyEl = document.getElementById("discover-empty");
  if (!feed || !emptyEl) return;
  feed.innerHTML = "";
  discoverCardCache = {};
  if (!supabaseClient) {
    emptyEl.textContent = t("discoverEmpty");
    emptyEl.classList.remove("hidden");
    return;
  }
  const { data: rawRows } = await supabaseClient.from("public_quizzes").select("id,user_id,quiz_id,view_count,show_in_discover,short_code,category,category_sub").order("created_at", { ascending: false }).limit(80);
  const rows = (rawRows || []).filter(function (r) { return r.show_in_discover === true; }).slice(0, 50);
  if (!rows.length) {
    emptyEl.textContent = t("discoverEmpty");
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");
  const quizIds = [...new Set(rows.map((r) => r.quiz_id))];
  const [quizDataResult, ratingsMap] = await Promise.all([
    supabaseClient.from("quizzes").select("id,name,description,questions,cover_image").in("id", quizIds),
    getQuizRatings(quizIds)
  ]);
  const quizData = quizDataResult?.data || [];
  const byId = {};
  quizData.forEach((q) => { byId[q.id] = q; });
  const authorCache = {};
  for (const r of rows) {
    const quiz = byId[r.quiz_id];
    if (!quiz) continue;
    if (currentAuthUser && authorCache[r.user_id] === undefined) {
      const { data: prof } = await supabaseClient.from("profiles").select("nickname").eq("id", r.user_id).single();
      authorCache[r.user_id] = prof?.nickname || "—";
    }
    const author = currentAuthUser ? (authorCache[r.user_id] ?? "—") : "—";
    const ratingInfo = ratingsMap[quiz.id];
    const avgStr = formatRating(ratingInfo ? ratingInfo.avg : null);
    const ratingCount = ratingInfo ? ratingInfo.count : 0;
    const viewCount = r.view_count != null ? r.view_count : 0;
    const viewStr = currentLang === "tr" ? `${viewCount} giriş` : `${viewCount} views`;
    const coverUrl = (quiz.cover_image && quiz.cover_image.trim()) ? quiz.cover_image : DISCOVER_PLACEHOLDER_IMAGE;
    const coverUrlSafe = coverUrl.replace(/"/g, "%22").replace(/'/g, "%27");
    const categoryLabel = getCategoryLabel(r.category);
    const descShort = ((quiz.description || "").trim() || "—").slice(0, 80);
    const descDisplay = descShort.length >= 80 ? descShort + "…" : descShort;
    discoverCardCache[quiz.id] = { quiz: quiz, author: author, ratingInfo: ratingInfo, publicRowId: r.id, shortCode: r.short_code || null };
    const wrap = document.createElement("div");
    wrap.className = "discover-feed-card-wrap";
    wrap.setAttribute("role", "listitem");
    wrap.dataset.quizId = quiz.id;
    const menuLabel = currentLang === "tr" ? "Menü" : "Menu";
    const catLabel = currentLang === "tr" ? "Kategori" : "Category";
    wrap.innerHTML = `
      <button type="button" class="discover-card discover-feed-card">
        <span class="discover-card-image-wrap">
          <span class="discover-card-image"></span>
          <span class="discover-card-badge discover-card-views">${escapeHtml(viewStr)}</span>
          <span class="discover-card-badge discover-card-rating" aria-label="Puan"><span class="discover-rating-stars">★</span> ${escapeHtml(avgStr)}<span class="discover-rating-count"> (${ratingCount})</span></span>
        </span>
        <span class="discover-card-meta-row">
          <span class="discover-card-category">${escapeHtml(catLabel)}: ${escapeHtml(categoryLabel)}</span>
          <span class="discover-card-author">${escapeHtml(author)}</span>
        </span>
        <span class="discover-card-title">${escapeHtml(quiz.name)}</span>
        <span class="discover-card-desc">${escapeHtml(descDisplay)}</span>
      </button>
      <button type="button" class="discover-card-menu-btn" aria-label="${escapeHtml(menuLabel)}">⋮</button>
      <div class="discover-card-dropdown hidden">
        <button type="button" class="discover-dropdown-item" data-action="share">${currentLang === "tr" ? "Quizi paylaş" : "Share quiz"}</button>
        <button type="button" class="discover-dropdown-item" data-action="add">${currentLang === "tr" ? "Kütüphaneme ekle" : "Add to my library"}</button>
        <button type="button" class="discover-dropdown-item" data-action="report">${currentLang === "tr" ? "Quizi rapor et" : "Report quiz"}</button>
      </div>
    `;
    const cardBtn = wrap.querySelector(".discover-feed-card");
    const menuBtn = wrap.querySelector(".discover-card-menu-btn");
    const dropdown = wrap.querySelector(".discover-card-dropdown");
    const imgEl = wrap.querySelector(".discover-card-image");
    if (imgEl) imgEl.style.backgroundImage = "url(\"" + coverUrlSafe + "\")";
    cardBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openDiscoverPreview(quiz, author, ratingInfo, r.id);
    });
    menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeAllDiscoverMenus();
      dropdown.classList.toggle("hidden", false);
    });
    wrap.querySelectorAll(".discover-dropdown-item").forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        var action = item.dataset.action;
        dropdown.classList.add("hidden");
        if (action === "share") {
          var base = window.location.origin + (window.location.pathname || "/").replace(/\/?$/, "");
          var link = r.short_code ? base + "#/play/short/" + r.short_code : base + "#/play/" + quiz.id;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(link).then(function () { alert(currentLang === "tr" ? "Link kopyalandı." : "Link copied."); }).catch(function () { alert(link); });
          } else { alert(link); }
        } else if (action === "add") {
          if (!currentAuthUser || !supabaseClient) { alert(currentLang === "tr" ? "Giriş yapın." : "Please log in."); return; }
          copyQuizToMyQuizzes(quiz).then(function (ok) { if (ok) alert(currentLang === "tr" ? "Quizlerinize eklendi." : "Added to your quizzes."); });
        } else if (action === "report") {
          reportDiscoverQuiz(quiz.id);
        }
      });
    });
    feed.appendChild(wrap);
  }
}
function closeAllDiscoverMenus() {
  document.querySelectorAll(".discover-card-dropdown").forEach(function (d) { d.classList.add("hidden"); });
}
function reportDiscoverQuiz(quizId) {
  if (!currentAuthUser || !supabaseClient) { alert(currentLang === "tr" ? "Giriş yapın." : "Please log in."); return; }
  var reason = window.prompt(currentLang === "tr" ? "Rapor nedeni (isteğe bağlı):" : "Report reason (optional):");
  supabaseClient.from("quiz_reports").insert({ quiz_id: quizId, reporter_id: currentAuthUser.id, reason: (reason && reason.trim()) || null }).then(function (res) {
    if (res.error) { alert(currentLang === "tr" ? "Rapor gönderilemedi." : "Report could not be sent."); return; }
    alert(currentLang === "tr" ? "Raporunuz alındı." : "Report received.");
  }).catch(function () { alert(currentLang === "tr" ? "Rapor gönderilemedi." : "Report could not be sent."); });
}

function updateDiscoverPreviewShuffleUi() {
  const shuf = document.getElementById("discover-preview-shuffle");
  const shufOpt = document.getElementById("discover-preview-shuffle-options");
  if (shuf) shuf.classList.toggle("active", !!shuffleEnabled);
  if (shufOpt) shufOpt.classList.toggle("active", !!shuffleOptionsEnabled);
}

async function openDiscoverPreview(quiz, author, ratingInfo, publicRowId) {
  discoverPreviewQuiz = quiz;
  if (publicRowId && supabaseClient) {
    try {
      await supabaseClient.rpc("increment_public_quiz_view", { pid: publicRowId });
    } catch (err) {}
  }
  const overlay = document.getElementById("discover-preview-overlay");
  const imgEl = document.getElementById("discover-preview-image");
  const titleEl = document.getElementById("discover-preview-title");
  const descEl = document.getElementById("discover-preview-desc");
  const ratingEl = document.getElementById("discover-preview-rating");
  const startBtn = document.getElementById("discover-preview-start-btn");
  if (imgEl) {
    const coverUrl = (quiz.cover_image && quiz.cover_image.trim()) ? quiz.cover_image : DISCOVER_PLACEHOLDER_IMAGE;
    imgEl.style.backgroundImage = "url(\"" + coverUrl.replace(/"/g, "%22").replace(/'/g, "%27") + "\")";
  }
  if (titleEl) titleEl.textContent = quiz.name || "";
  if (descEl) descEl.textContent = (quiz.description || "").trim() || "—";
  const qCount = quiz.questions ? quiz.questions.length : 0;
  const questionCountEl = document.getElementById("discover-preview-question-count");
  if (questionCountEl) questionCountEl.textContent = qCount === 1 ? (currentLang === "tr" ? "1 soru" : "1 question") : (currentLang === "tr" ? qCount + " soru" : qCount + " questions");
  renderPreviewRating(ratingEl, quiz.id, ratingInfo).catch(() => {});
  updateDiscoverPreviewShuffleUi();
  const shuffleLabel = document.getElementById("discover-preview-shuffle-label");
  const shuffleOptLabel = document.getElementById("discover-preview-shuffle-options-label");
  if (shuffleLabel) shuffleLabel.textContent = t("randomOrder");
  if (shuffleOptLabel) shuffleOptLabel.textContent = t("shuffleOptions");
  if (overlay) {
    overlay.classList.remove("hidden");
    overlay.removeAttribute("inert");
    overlay.removeAttribute("aria-hidden");
    overlay.style.display = "flex";
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    overlay.style.zIndex = "99999";
  }
  const newStart = startBtn ? startBtn.cloneNode(true) : null;
  if (startBtn && startBtn.parentNode) {
    startBtn.replaceWith(newStart);
    newStart.textContent = t("discoverPreviewStart") || "Quiz'i Başlat";
    newStart.addEventListener("click", function () {
      closeDiscoverPreview();
      playDiscoverQuiz(quiz);
    });
  }
  const addToMineBtn = document.getElementById("discover-preview-add-to-mine-btn");
  if (addToMineBtn) {
    addToMineBtn.textContent = t("addToMyQuizzes");
    addToMineBtn.style.display = currentAuthUser ? "" : "none";
    addToMineBtn.onclick = async function () {
      if (!currentAuthUser || !supabaseClient) return;
      const ok = await copyQuizToMyQuizzes(quiz);
      if (ok) { closeDiscoverPreview(); alert(currentLang === "tr" ? "Quizlerinize eklendi." : "Added to your quizzes."); }
    };
  }
}

function openDiscoverByQuizId(quizId) {
  var id = (quizId && String(quizId).trim()) || null;
  if (!id) return;
  var cached = discoverCardCache[id];
  if (cached && cached.quiz) {
    openDiscoverPreview(cached.quiz, cached.author || "—", cached.ratingInfo || null, cached.publicRowId || null);
    return;
  }
  if (!supabaseClient) return;
  supabaseClient.from("quizzes").select("id,name,description,questions").eq("id", id).single()
    .then(function (res) {
      var quiz = res && res.data;
      if (!quiz) return;
      return supabaseClient.from("public_quizzes").select("id").eq("quiz_id", id).limit(1).maybeSingle()
        .then(function (rowRes) {
          var publicRowId = (rowRes && rowRes.data && rowRes.data.id) || null;
          return getQuizRatings([id]).then(function (ratingsMap) {
            var ratingInfo = (ratingsMap && ratingsMap[id]) || null;
            openDiscoverPreview(quiz, "—", ratingInfo, publicRowId);
          });
        });
    })
    .catch(function () {});
}
window.openDiscoverByQuizId = openDiscoverByQuizId;

async function renderPreviewRating(container, quizId, ratingInfo) {
  if (!container) return;
  container.innerHTML = "";
  var avg = ratingInfo ? ratingInfo.avg : 0;
  var count = ratingInfo ? ratingInfo.count : 0;
  var avgStr = formatRating(avg);
  var label = document.createElement("span");
  label.className = "discover-preview-rating-label";
  label.innerHTML = "<span class=\"discover-rating-stars\">★</span> " + escapeHtml(avgStr) + " <span class=\"discover-rating-count\">(" + count + ")</span>";
  container.appendChild(label);
  if (!currentAuthUser || !supabaseClient) {
    var loginHint = document.createElement("p");
    loginHint.className = "discover-preview-rating-login-hint";
    loginHint.textContent = currentLang === "tr" ? "Puan verebilmek için giriş yapın (üyelik gerekir)" : "Log in to rate (membership required)";
    container.appendChild(loginHint);
    return;
  }
  var myRating = await getMyQuizRating(quizId);
  var starsWrap = document.createElement("div");
  starsWrap.className = "discover-preview-stars";
  for (var i = 1; i <= 5; i++) {
    var filled = myRating !== null && i <= myRating;
    var starBtn = document.createElement("button");
    starBtn.type = "button";
    starBtn.className = "discover-star-btn" + (filled ? " rated" : "");
    starBtn.setAttribute("aria-label", i + " yıldız");
    starBtn.textContent = filled ? "★" : "☆";
    starBtn.dataset.rating = String(i);
    if (myRating === null) {
      starBtn.addEventListener("click", async function (e) {
        e.stopPropagation();
        if (!currentAuthUser || !supabaseClient) return;
        await submitQuizRating(quizId, Number(e.currentTarget.dataset.rating));
        var newRatings = await getQuizRatings([quizId]);
        await renderPreviewRating(container, quizId, newRatings[quizId]);
        var wrap = container.querySelector(".discover-preview-stars");
        if (wrap) {
          wrap.classList.add("stars-pop");
          setTimeout(function () { wrap.classList.remove("stars-pop"); }, 380);
        }
      });
    } else {
      starBtn.disabled = true;
    }
    starsWrap.appendChild(starBtn);
  }
  container.appendChild(starsWrap);
}

function closeDiscoverPreview() {
  discoverPreviewQuiz = null;
  var ov = document.getElementById("discover-preview-overlay");
  if (ov) {
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    ov.setAttribute("inert", "");
    ov.classList.add("hidden");
    ov.style.display = "";
    ov.style.visibility = "";
    ov.style.opacity = "";
    ov.style.zIndex = "";
  }
}

/** Link ile açılış: tam ekran ön izleme sayfası. publicRow: { id, short_code?, view_count? } */
function openQuizLinkPreview(quiz, publicRow, ratingInfo) {
  if (!quiz) return;
  var id = quiz.id;
  var publicRowId = publicRow && publicRow.id;
  var shortCode = (publicRow && publicRow.short_code) || null;
  discoverCardCache[id] = { quiz: quiz, author: "—", ratingInfo: ratingInfo || null, publicRowId: publicRowId || null, shortCode: shortCode };
  if (publicRowId && supabaseClient) {
    try {
      supabaseClient.rpc("increment_public_quiz_view", { pid: publicRowId }).catch(function () {});
    } catch (err) {}
  }
  var coverEl = document.getElementById("quiz-link-preview-cover");
  var titleEl = document.getElementById("quiz-link-preview-title");
  var descEl = document.getElementById("quiz-link-preview-desc");
  var metaEl = document.getElementById("quiz-link-preview-meta");
  var ratingEl = document.getElementById("quiz-link-preview-rating");
  var viewCount = (publicRow && (publicRow.view_count != null)) ? Number(publicRow.view_count) : 0;
  var qCount = quiz.questions ? quiz.questions.length : 0;
  if (coverEl) {
    var coverUrl = (quiz.cover_image && quiz.cover_image.trim()) ? quiz.cover_image : DISCOVER_PLACEHOLDER_IMAGE;
    coverEl.style.backgroundImage = "url(\"" + coverUrl.replace(/"/g, "%22").replace(/'/g, "%27") + "\")";
  }
  if (titleEl) titleEl.textContent = quiz.name || "";
  if (descEl) descEl.textContent = (quiz.description || "").trim() || "—";
  if (metaEl) {
    var metaParts = [];
    metaParts.push(qCount === 1 ? (currentLang === "tr" ? "1 soru" : "1 question") : (currentLang === "tr" ? qCount + " soru" : qCount + " questions"));
    metaParts.push(currentLang === "tr" ? viewCount + " giriş" : viewCount + " views");
    metaEl.textContent = metaParts.join(" · ");
  }
  if (ratingEl) {
    ratingEl.innerHTML = "";
    var avg = ratingInfo ? ratingInfo.avg : 0;
    var count = ratingInfo ? ratingInfo.count : 0;
    var avgStr = formatRating(avg);
    var label = document.createElement("span");
    label.className = "discover-preview-rating-label";
    label.innerHTML = "<span class=\"discover-rating-stars\">★</span> " + escapeHtml(avgStr) + " <span class=\"discover-rating-count\">(" + count + ")</span>";
    ratingEl.appendChild(label);
  }
  var shuffleLabel = document.getElementById("quiz-link-preview-shuffle-label");
  var shuffleOptLabel = document.getElementById("quiz-link-preview-shuffle-options-label");
  if (shuffleLabel) shuffleLabel.textContent = t("randomOrder") || (currentLang === "tr" ? "Soruları rastgele sırala" : "Shuffle questions");
  if (shuffleOptLabel) shuffleOptLabel.textContent = t("shuffleOptions") || (currentLang === "tr" ? "Şıkları rastgele sırala" : "Shuffle options");
  var shufBtn = document.getElementById("quiz-link-preview-shuffle");
  var shufOptBtn = document.getElementById("quiz-link-preview-shuffle-options");
  if (shufBtn) shufBtn.classList.toggle("active", !!shuffleEnabled);
  if (shufOptBtn) shufOptBtn.classList.toggle("active", !!shuffleOptionsEnabled);
  linkPreviewQuiz = quiz;
  showView("quizLinkPreview");
}

var linkPreviewQuiz = null;

function playDiscoverQuiz(quiz) {
  lastPlayedQuizFromShared = true;
  var id = quiz.id;
  if (!quizzes.find(function (q) { return q.id === id; })) {
    quizzes.push({ id: quiz.id, name: quiz.name, description: quiz.description || "", questions: Array.isArray(quiz.questions) ? quiz.questions : [], cover_image: quiz.cover_image || null });
  }
  var cached = discoverCardCache[id];
  var shortCode = cached && cached.shortCode;
  var base = shortCode ? "#/play/short/" + shortCode : "#/play/" + id;
  startQuiz(id, { playRouteBase: base });
}

async function copyQuizToMyQuizzes(quiz) {
  if (!supabaseClient || !currentAuthUser || !quiz) return false;
  var row = { user_id: currentAuthUser.id, name: (quiz.name || "").trim() || "Kopya quiz", description: quiz.description || "", questions: Array.isArray(quiz.questions) ? quiz.questions : [] };
  var res = await supabaseClient.from("quizzes").insert(row).select("id").single();
  if (res.error) { console.warn(res.error); return false; }
  if (res.data && res.data.id) {
    quizzes.push({ id: res.data.id, name: row.name, description: row.description, questions: row.questions });
    return true;
  }
  return false;
}

(function initDiscoverPopup() {
  var feed = document.getElementById("discover-feed");
  if (feed) {
    feed.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest(".discover-card-menu-btn")) return;
      if (e.target.closest && e.target.closest(".discover-card-dropdown")) return;
      var wrap = e.target.closest && e.target.closest(".discover-feed-card-wrap");
      if (!wrap) return;
      var quizId = wrap.dataset && wrap.dataset.quizId;
      if (!quizId) return;
      var cached = discoverCardCache[quizId];
      if (!cached || !cached.quiz) return;
      e.preventDefault();
      e.stopPropagation();
      openDiscoverPreview(cached.quiz, cached.author || "—", cached.ratingInfo || null, cached.publicRowId || null);
    }, true);
  }
  document.addEventListener("click", closeAllDiscoverMenus);
  var overlay = document.getElementById("discover-preview-overlay");
  var closeBtn = document.getElementById("discover-preview-close");
  var backdrop = document.getElementById("discover-preview-backdrop");
  if (closeBtn) closeBtn.addEventListener("click", closeDiscoverPreview);
  if (overlay) overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target.id === "discover-preview-backdrop") closeDiscoverPreview();
  });
  if (backdrop) backdrop.addEventListener("click", closeDiscoverPreview);
  var shuf = document.getElementById("discover-preview-shuffle");
  var shufOpt = document.getElementById("discover-preview-shuffle-options");
  if (shuf) shuf.addEventListener("click", function () {
    shuffleEnabled = !shuffleEnabled;
    saveSettings();
    updateDiscoverPreviewShuffleUi();
    if (shuffleToggleBtn) shuffleToggleBtn.classList.toggle("active", !!shuffleEnabled);
  });
  if (shufOpt) shufOpt.addEventListener("click", function () {
    shuffleOptionsEnabled = !shuffleOptionsEnabled;
    saveSettings();
    updateDiscoverPreviewShuffleUi();
    if (shuffleOptionsToggleBtn) shuffleOptionsToggleBtn.classList.toggle("active", !!shuffleOptionsEnabled);
  });
})();

(function initQuizLinkPreview() {
  var startBtn = document.getElementById("quiz-link-preview-start-btn");
  var backBtn = document.getElementById("quiz-link-preview-back");
  var shuf = document.getElementById("quiz-link-preview-shuffle");
  var shufOpt = document.getElementById("quiz-link-preview-shuffle-options");
  if (startBtn) startBtn.addEventListener("click", function () {
    if (linkPreviewQuiz) {
      playDiscoverQuiz(linkPreviewQuiz);
      linkPreviewQuiz = null;
    }
  });
  if (backBtn) backBtn.setAttribute("data-back", "main-menu");
  if (shuf) shuf.addEventListener("click", function () {
    shuffleEnabled = !shuffleEnabled;
    saveSettings();
    shuf.classList.toggle("active", !!shuffleEnabled);
    if (shuffleToggleBtn) shuffleToggleBtn.classList.toggle("active", !!shuffleEnabled);
  });
  if (shufOpt) shufOpt.addEventListener("click", function () {
    shuffleOptionsEnabled = !shuffleOptionsEnabled;
    saveSettings();
    shufOpt.classList.toggle("active", !!shuffleOptionsEnabled);
    if (shuffleOptionsToggleBtn) shuffleOptionsToggleBtn.classList.toggle("active", !!shuffleOptionsEnabled);
  });
})();

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

function resolveBackTarget(rawTarget) {
  if (rawTarget === "main-menu") return "mainMenu";
  if (rawTarget === "settings") return "settings";
  if (rawTarget === "discover-view") return "discover";
  if (rawTarget === "profile") return "profile";
  if (rawTarget === "friends") return "friends";
  if (rawTarget === "messages-list") return "messagesList";
  if (rawTarget === "quiz-select-view") return "quizSelect";
  if (rawTarget === "create-quiz-view") return "createQuiz";
  if (rawTarget === "quiz-edit-questions-view") return "quizEditHub";
  if (rawTarget === "quiz-questions-list") return "quizEditHub";
  if (rawTarget === "quiz-edit-hub-view") return "quizEditHub";
  if (rawTarget === "quiz-question-edit") return "quizQuestionEdit";
  return rawTarget || "mainMenu";
}

Array.from(document.querySelectorAll(".back-btn")).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.closest("#profile-view")) viewingProfileUserId = null;
    // "Ana menüye dön" / "Soru seçimine dön" gibi butonlar her zaman hedefe gider (geçmiş kullanılmaz)
    const noHistory = btn.dataset.noHistory === "true";
    const targetViewKey = noHistory
      ? resolveBackTarget(btn.dataset.back || "mainMenu")
      : (viewHistory.length > 0 ? viewHistory.pop() : resolveBackTarget(btn.dataset.back || "mainMenu"));
    const viewKey = !views[targetViewKey] ? "mainMenu" : targetViewKey;
    if (viewKey === "createQuiz") {
      fromCreateQuizPage = false;
      lastAddedQuestionIndex = -1;
    }
    showView(viewKey, "back");
    // Doğrudan atlama (noHistory) sonrası yığını tutarlı tut: hedef ekrandan geri = ana menü
    if (noHistory && viewKey !== "mainMenu") viewHistory = ["mainMenu"];
    if (viewKey === "quizQuestionsList") renderQuestionsList();
    if (viewKey === "profile") loadProfile(viewingProfileUserId || undefined);
    if (viewKey === "messagesList") loadMessagesList(messagesListCurrentPage);
    if (viewKey === "friends") loadFriendsView();
    if (viewKey === "quizSelect") renderQuizSelectList(quizSelectCurrentPage);
    if (viewKey === "quizEditHub") {
      showHubPanel(lastHubPanel);
      renderQuestionsList();
    }
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
    lastHubPanel = "questions";
    if (backBtnQuestionEdit) backBtnQuestionEdit.dataset.back = "quiz-edit-hub-view";
    showView("quizQuestionEdit");
  });
}

const backBtnQuestionEdit = document.getElementById("back-btn-question-edit");

const addQuestionBtn = document.getElementById("add-question-btn");
if (addQuestionBtn) {
  addQuestionBtn.addEventListener("click", () => {
    fromCreateQuizPage = false;
    if (!currentQuizForEdit && (editingQuizId || selectedEditQuizId)) currentQuizForEdit = editingQuizId || selectedEditQuizId;
    if (backBtnQuestionEdit) backBtnQuestionEdit.dataset.back = "quiz-edit-hub-view";
    currentQuestionEditIndex = -1;
    clearQuestionForm();
    const titleEl = document.getElementById("question-edit-title");
    if (titleEl) titleEl.textContent = t("newQuestionTitle");
    showView("quizQuestionEdit");
  });
}

const manualAddHintEl = document.getElementById("manual-add-hint");
function openAddQuestionWithType(type) {
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
  if (backBtnQuestionEdit) backBtnQuestionEdit.dataset.back = "quiz-edit-hub-view";
  currentQuizForEdit = quizId;
  currentQuestionEditIndex = -1;
  clearQuestionForm();
  showQuestionTypePanel(type);
  const titleEl = document.getElementById("question-edit-title");
  if (titleEl) titleEl.textContent = t("newQuestionTitle");
  showView("quizQuestionEdit");
}
document.querySelectorAll(".manual-add-type-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type || "choice";
    openAddQuestionWithType(type);
  });
});

const saveSingleQuestionBtn = document.getElementById("save-single-question-btn");
const cancelQuestionEditBtn = document.getElementById("cancel-question-edit-btn");
if (saveSingleQuestionBtn) {
  saveSingleQuestionBtn.addEventListener("click", () => {
    const quiz = quizzes.find((q) => q.id === currentQuizForEdit);
    if (!quiz) return;
    let q;
    if (currentQuestionType === "open") {
      const textEl = document.getElementById("open-question-text");
      const ansEl = document.getElementById("open-expected-answer");
      const text = (textEl && textEl.value.trim()) || "";
      const expectedAnswer = (ansEl && ansEl.value.trim()) || "";
      if (!text) {
        alert(t("alertQuestionEmpty"));
        return;
      }
      if (!expectedAnswer) {
        alert(currentLang === "tr" ? "Doğru cevabı girin." : "Enter the correct answer.");
        return;
      }
      q = { type: "open", text, image: openEditFormQuestionImage || undefined, expectedAnswer };
    } else if (currentQuestionType === "match") {
      const textEl = document.getElementById("match-question-text");
      const text = (textEl && textEl.value.trim()) || "";
      const pairs = editFormMatchPairs
        .map((p) => ({ left: (p.left || "").trim(), right: (p.right || "").trim() }))
        .filter((p) => p.left || p.right);
      if (pairs.length === 0) {
        alert(currentLang === "tr" ? "En az bir eşleştirme çifti girin." : "Enter at least one matching pair.");
        return;
      }
      q = { type: "match", text: text || undefined, pairs };
    } else {
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
      q = { text, image: editFormQuestionImage || undefined, options, correctIndex };
    }
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
      showView("quizEditHub", "back");
      showHubPanel("form");
      requestAnimationFrame(() => renderPrepareQuestionsChips());
    } else {
      showView("quizEditHub", "back");
      showHubPanel("questions");
      renderQuestionsList();
    }
  });
}
if (cancelQuestionEditBtn) {
  cancelQuestionEditBtn.addEventListener("click", () => {
    if (fromCreateQuizPage) {
      fromCreateQuizPage = false;
      showView("quizEditHub", "back");
      showHubPanel("form");
      renderPrepareQuestionsChips();
    } else {
      showView("quizEditHub", "back");
      showHubPanel("questions");
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
document.querySelectorAll(".question-type-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const type = tab.dataset.type;
    if (type) showQuestionTypePanel(type);
  });
});
const openQuestionImageAdd = document.getElementById("open-question-image-add");
const openQuestionImageInput = document.getElementById("open-question-image");
const openQuestionImageRemove = document.getElementById("open-question-image-remove");
if (openQuestionImageAdd) {
  openQuestionImageAdd.addEventListener("click", () => {
    const wrap = document.getElementById("open-question-image-wrap");
    if (wrap) wrap.classList.remove("hidden");
    openQuestionImageAdd.classList.add("hidden");
  });
}
if (openQuestionImageInput) {
  openQuestionImageInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    resizeImageToDataUrl(file).then((dataUrl) => {
      openEditFormQuestionImage = dataUrl;
      updateOpenQuestionImagePreview();
    }).catch(() => {});
  });
}
if (openQuestionImageRemove) {
  openQuestionImageRemove.addEventListener("click", () => {
    openEditFormQuestionImage = null;
    updateOpenQuestionImagePreview();
  });
}
const matchAddPairBtn = document.getElementById("match-add-pair-btn");
if (matchAddPairBtn) {
  matchAddPairBtn.addEventListener("click", () => {
    if (editFormMatchPairs.length >= MAX_MATCH_PAIRS) return;
    editFormMatchPairs.push({ left: "", right: "" });
    renderMatchPairsContainer();
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

let lastHubPanel = "form";
function showHubPanel(panel) {
  lastHubPanel = panel;
  const formTab = document.getElementById("hub-tab-quiz-form");
  const questionsTab = document.getElementById("hub-tab-questions");
  const formPanel = document.getElementById("hub-panel-quiz-form");
  const questionsPanel = document.getElementById("hub-panel-questions");
  if (panel === "questions") {
    if (formTab) { formTab.classList.remove("active"); formTab.setAttribute("aria-selected", "false"); }
    if (questionsTab) { questionsTab.classList.add("active"); questionsTab.setAttribute("aria-selected", "true"); }
    if (formPanel) { formPanel.classList.remove("hub-panel-active"); formPanel.hidden = true; }
    if (questionsPanel) { questionsPanel.classList.add("hub-panel-active"); questionsPanel.hidden = false; }
  } else {
    if (formTab) { formTab.classList.add("active"); formTab.setAttribute("aria-selected", "true"); }
    if (questionsTab) { questionsTab.classList.remove("active"); questionsTab.setAttribute("aria-selected", "false"); }
    if (formPanel) { formPanel.classList.add("hub-panel-active"); formPanel.hidden = false; }
    if (questionsPanel) { questionsPanel.classList.remove("hub-panel-active"); questionsPanel.hidden = true; }
  }
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
  currentQuizCoverImage = quiz.cover_image || null;
  updateQuizCoverPreview();
  showManualQuestionsChips = false;
  showView("quizEditHub");
  const hubTitle = document.getElementById("quiz-edit-hub-title");
  if (hubTitle) hubTitle.textContent = (currentLang === "tr" ? "Düzenle: " : "Edit: ") + (quiz.name || "");
  showHubPanel("form");
  renderPrepareQuestionsChips();
  renderQuestionsList();
  if (editQuizStatusEl) {
    editQuizStatusEl.textContent = `Editing quiz "${quiz.name}" with ${draftQuestions.length} existing questions. New parsed questions will be appended.`;
  }
  parsedQuestionsSummaryEl.classList.add("hidden");
  parseStatusEl.textContent = "";
  updateEditQuestionsBtn();
  const backBtnQuestionEdit = document.getElementById("back-btn-question-edit");
  if (backBtnQuestionEdit) backBtnQuestionEdit.dataset.back = "quiz-edit-hub-view";
}

function doEditQuestions(quizId) {
  const id = quizId || selectedEditQuizId || editingQuizId || "";
  if (!id) return;
  selectedEditQuizId = id;
  currentQuizForEdit = id;
  if (currentViewKey === "quizEditHub") {
    showHubPanel("questions");
    renderQuestionsList();
  } else {
    showView("quizEditHub");
    const quiz = quizzes.find((q) => q.id === id);
    if (quiz) {
      const hubTitle = document.getElementById("quiz-edit-hub-title");
      if (hubTitle) hubTitle.textContent = (currentLang === "tr" ? "Düzenle: " : "Edit: ") + (quiz.name || "");
    }
    showHubPanel("questions");
    renderQuestionsList();
  }
}

if (loadEditQuizBtn) {
  loadEditQuizBtn.addEventListener("click", () => doLoadEditQuiz());
}

const hubTabQuizForm = document.getElementById("hub-tab-quiz-form");
const hubTabQuestions = document.getElementById("hub-tab-questions");
if (hubTabQuizForm) {
  hubTabQuizForm.addEventListener("click", () => showHubPanel("form"));
}
if (hubTabQuestions) {
  hubTabQuestions.addEventListener("click", () => {
    showHubPanel("questions");
    renderQuestionsList();
  });
}

function showQuizFormSubPanel(which) {
  const subTabManual = document.getElementById("sub-tab-manual");
  const subTabBulk = document.getElementById("sub-tab-bulk");
  const panelManual = document.getElementById("hub-sub-panel-manual");
  const panelBulk = document.getElementById("hub-sub-panel-bulk");
  if (which === "bulk") {
    if (subTabManual) { subTabManual.classList.remove("active"); subTabManual.setAttribute("aria-selected", "false"); }
    if (subTabBulk) { subTabBulk.classList.add("active"); subTabBulk.setAttribute("aria-selected", "true"); }
    if (panelManual) { panelManual.classList.remove("hub-sub-panel-active"); panelManual.hidden = true; }
    if (panelBulk) { panelBulk.classList.add("hub-sub-panel-active"); panelBulk.hidden = false; }
  } else {
    if (subTabManual) { subTabManual.classList.add("active"); subTabManual.setAttribute("aria-selected", "true"); }
    if (subTabBulk) { subTabBulk.classList.remove("active"); subTabBulk.setAttribute("aria-selected", "false"); }
    if (panelManual) { panelManual.classList.add("hub-sub-panel-active"); panelManual.hidden = false; }
    if (panelBulk) { panelBulk.classList.remove("hub-sub-panel-active"); panelBulk.hidden = true; }
  }
}
const subTabManualBtn = document.getElementById("sub-tab-manual");
const subTabBulkBtn = document.getElementById("sub-tab-bulk");
if (subTabManualBtn) subTabManualBtn.addEventListener("click", () => showQuizFormSubPanel("manual"));
if (subTabBulkBtn) subTabBulkBtn.addEventListener("click", () => showQuizFormSubPanel("bulk"));

if (clearEditQuizBtn) {
  clearEditQuizBtn.addEventListener("click", () => {
    resetCreateQuizForm();
    refreshEditQuizSelect();
  });
}

const quizCoverInput = document.getElementById("quiz-cover-input");
const quizCoverAddBtn = document.getElementById("quiz-cover-add-btn");
const quizCoverRemoveBtn = document.getElementById("quiz-cover-remove-btn");
if (quizCoverAddBtn && quizCoverInput) {
  quizCoverAddBtn.addEventListener("click", () => quizCoverInput.click());
  quizCoverInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    resizeImageToDataUrl(file).then((dataUrl) => {
      currentQuizCoverImage = dataUrl;
      updateQuizCoverPreview();
    }).catch(() => {});
    e.target.value = "";
  });
}
if (quizCoverRemoveBtn) {
  quizCoverRemoveBtn.addEventListener("click", () => {
    currentQuizCoverImage = null;
    updateQuizCoverPreview();
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
  deleteQuizConfirmBtn.addEventListener("click", async () => {
    if (!pendingDeleteQuizId) return;
    const id = pendingDeleteQuizId;
    if (supabaseClient && currentAuthUser) {
      try {
        await supabaseClient.from("quizzes").delete().eq("id", id).eq("user_id", currentAuthUser.id);
      } catch (e) {
        console.warn("Delete quiz from cloud failed", e);
      }
    }
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
      questions: [],
      cover_image: null
    };
    quizzes.push(newQuiz);
    saveQuizzes();
    editingQuizId = newQuiz.id;
    currentQuizForEdit = newQuiz.id;
    draftQuestions = [];
    currentQuizCoverImage = null;
    updateQuizCoverPreview();
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
    showView("quizEditHub");
    showHubPanel("form");
    const hubTitle = document.getElementById("quiz-edit-hub-title");
    if (hubTitle) hubTitle.textContent = (currentLang === "tr" ? "Düzenle: " : "Edit: ") + name;
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

// Initial setup: önce localStorage'dan yükle (ilk kayıt kaybolmasın), sonra ise buluttan güncelle
async function initAuthAndQuizzes() {
  loadSettings();
  loadQuizzes();
  if (supabaseClient) {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      currentAuthUser = session?.user ?? null;
      if (session) await fetchUserQuizzes();
    } catch (e) {
      // Hata olursa localStorage'daki quizzes zaten yüklü
    }
  }
  updateAuthUI();
  refreshEditQuizSelect();
  applyTranslations();
  updateSoundToggleUi();
  updateShuffleToggleUi();
  updateShuffleOptionsToggleUi();
  initStandalone();
  initCookieConsent();
  var hash = (window.location.hash || "").trim() || "#/";
  if (/^#\/?play\//.test(hash)) {
    showView("mainMenu", undefined, true);
  } else {
    var viewFromHash = getViewFromHash(hash);
    if (viewFromHash && views[viewFromHash]) showView(viewFromHash, undefined, true);
    else showView("mainMenu", undefined, true);
  }
}

function handleViewHash() {
  var hash = (window.location.hash || "").trim() || "#/";
  if (/^#\/?play\//.test(hash)) return;
  var viewFromHash = getViewFromHash(hash);
  if (viewFromHash && views[viewFromHash]) showView(viewFromHash);
}

function getCookieConsentValue() {
  var v = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (v === "true") return "accepted";
  return v || "";
}

function setCookieConsentAndClose(value) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  var bar = document.getElementById("cookie-consent-bar");
  var overlay = document.getElementById("cookie-settings-overlay");
  if (overlay) { overlay.classList.add("hidden"); overlay.setAttribute("aria-hidden", "true"); }
  if (bar) {
    bar.classList.remove("cookie-consent-bar-visible");
    bar.addEventListener("transitionend", function onEnd() {
      bar.removeEventListener("transitionend", onEnd);
      bar.classList.add("cookie-consent-bar-hidden");
    }, { once: true });
  }
}

var cookieSettingsModalReady = false;
function initCookieSettingsModalOnce() {
  if (cookieSettingsModalReady) return;
  var overlay = document.getElementById("cookie-settings-overlay");
  var acceptAllBtn = document.getElementById("cookie-settings-accept-all");
  var necessaryBtn = document.getElementById("cookie-settings-necessary");
  var rejectBtn = document.getElementById("cookie-settings-reject");
  var closeBtn = document.getElementById("cookie-settings-close");
  if (!overlay) return;
  acceptAllBtn?.addEventListener("click", function () { setCookieConsentAndClose("accepted"); });
  necessaryBtn?.addEventListener("click", function () { setCookieConsentAndClose("necessary"); });
  rejectBtn?.addEventListener("click", function () { setCookieConsentAndClose("rejected"); });
  closeBtn?.addEventListener("click", function () { overlay.classList.add("hidden"); overlay.setAttribute("aria-hidden", "true"); });
  overlay.addEventListener("click", function (e) { if (e.target === overlay) { overlay.classList.add("hidden"); overlay.setAttribute("aria-hidden", "true"); } });
  cookieSettingsModalReady = true;
}

function openCookieSettingsModal() {
  initCookieSettingsModalOnce();
  var overlay = document.getElementById("cookie-settings-overlay");
  var titleEl = document.getElementById("cookie-settings-title");
  var detailEl = document.getElementById("cookie-settings-detail");
  var acceptAllBtn = document.getElementById("cookie-settings-accept-all");
  var necessaryBtn = document.getElementById("cookie-settings-necessary");
  var rejectBtn = document.getElementById("cookie-settings-reject");
  if (!overlay || !detailEl) return;
  if (titleEl) titleEl.textContent = t("cookieSettingsTitle");
  var detailText = t("cookieSettingsDetail") || "";
  detailEl.textContent = detailText;
  if (acceptAllBtn) acceptAllBtn.textContent = t("cookieAcceptAll");
  if (necessaryBtn) necessaryBtn.textContent = t("cookieOnlyNecessary");
  if (rejectBtn) rejectBtn.textContent = t("cookieRejectAll");
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
}

function initCookieConsent() {
  var bar = document.getElementById("cookie-consent-bar");
  var textEl = document.getElementById("cookie-consent-text");
  var acceptBtn = document.getElementById("cookie-consent-accept");
  var manageBtn = document.getElementById("cookie-consent-manage");
  if (!bar || !textEl || !acceptBtn) return;
  var consent = getCookieConsentValue();
  if (consent === "accepted" || consent === "rejected" || consent === "necessary") {
    bar.classList.add("cookie-consent-bar-hidden");
    bar.classList.remove("cookie-consent-bar-visible");
    return;
  }
  textEl.textContent = t("cookieConsentMessage");
  acceptBtn.textContent = t("cookieConsentAccept");
  if (manageBtn) manageBtn.textContent = t("cookieConsentManage");
  bar.classList.remove("cookie-consent-bar-hidden");
  requestAnimationFrame(function () { bar.classList.add("cookie-consent-bar-visible"); });
  acceptBtn.addEventListener("click", function () {
    setCookieConsentAndClose("accepted");
  });
  if (manageBtn) {
    manageBtn.addEventListener("click", function () {
      openCookieSettingsModal();
    });
  }
}

initAuthAndQuizzes();

function handlePlayHash() {
  var hash = (window.location.hash || "").replace(/^#\/?/, "");
  var shortWithPage = /^play\/short\/([a-zA-Z0-9]+)\/(\d+)$/.exec(hash);
  var uuidWithPage = /^play\/([a-f0-9-]{36})\/(\d+)$/i.exec(hash);
  var shortMatch = /^play\/short\/([a-zA-Z0-9]+)$/.exec(hash);
  var uuidMatch = /^play\/([a-f0-9-]{36})$/i.exec(hash);

  var quizId = null;
  var resolveShort = false;
  var startAtPage = null;
  var routeBase = null;

  if (shortWithPage) {
    quizId = shortWithPage[1];
    resolveShort = true;
    startAtPage = parseInt(shortWithPage[2], 10);
    routeBase = "#/play/short/" + shortWithPage[1];
  } else if (uuidWithPage) {
    quizId = uuidWithPage[1];
    startAtPage = parseInt(uuidWithPage[2], 10);
    routeBase = "#/play/" + uuidWithPage[1];
  } else if (shortMatch) {
    resolveShort = true;
    quizId = shortMatch[1];
  } else if (uuidMatch) {
    quizId = uuidMatch[1];
  }

  if (!quizId) return;

  function openQuizByLink() {
    if (!supabaseClient) return;
    function openWithQuiz(quiz, publicRow) {
      if (!quiz) {
        alert(currentLang === "tr" ? "Quiz bulunamadı veya erişim yok." : "Quiz not found or access denied.");
        return;
      }
      if (startAtPage != null && !isNaN(startAtPage) && routeBase) {
        if (!quizzes.find(function (q) { return q.id === quiz.id; })) {
          quizzes.push({ id: quiz.id, name: quiz.name, description: quiz.description || "", questions: Array.isArray(quiz.questions) ? quiz.questions : [], cover_image: quiz.cover_image || null });
        }
        startQuizAtPage(quiz, startAtPage, routeBase);
        return;
      }
      var publicRowId = publicRow && publicRow.id;
      getQuizRatings([quiz.id]).then(function (ratingMap) {
        var ratingInfo = ratingMap && ratingMap[quiz.id] ? ratingMap[quiz.id] : null;
        openQuizLinkPreview(quiz, publicRow || { id: publicRowId }, ratingInfo);
      }).catch(function () {
        openQuizLinkPreview(quiz, publicRow || { id: publicRowId }, null);
      });
    }
    if (resolveShort) {
      function tryOpenByShortCode(attempt) {
        supabaseClient.from("public_quizzes").select("quiz_id, id, short_code, view_count").eq("short_code", quizId).limit(1).maybeSingle()
          .then(function (rowRes) {
            var row = rowRes?.data;
            var err = rowRes?.error;
            if (err && attempt < 2) {
              setTimeout(function () { tryOpenByShortCode(attempt + 1); }, attempt === 0 ? 1000 : 2500);
              return;
            }
            if (err) {
              console.warn("public_quizzes by short_code", err);
              alert(currentLang === "tr" ? "Bağlantı hatası. İnterneti kontrol edip tekrar deneyin veya linki atan kişiden yeni link isteyin." : "Connection error. Check internet and try again, or ask the sender for a new link.");
              return;
            }
            if (!row && attempt < 2) {
              setTimeout(function () { tryOpenByShortCode(attempt + 1); }, attempt === 0 ? 1000 : 2500);
              return;
            }
            if (!row) {
              alert(currentLang === "tr" ? "Link geçersiz veya süresi dolmuş. Linki atan kişiden yeni bir link isteyin." : "Invalid or expired link. Ask the sender for a new link.");
              return;
            }
            return supabaseClient.from("quizzes").select("id,name,description,questions,cover_image").eq("id", row.quiz_id).maybeSingle()
              .then(function (quizRes) {
                if (quizRes?.error && attempt < 2) {
                  setTimeout(function () { tryOpenByShortCode(attempt + 1); }, 1000);
                  return;
                }
                openWithQuiz(quizRes?.data, row);
              });
          })
          .catch(function (e) {
            if (attempt < 2) setTimeout(function () { tryOpenByShortCode(attempt + 1); }, 1000);
            else alert(currentLang === "tr" ? "Quiz bulunamadı." : "Quiz not found.");
          });
      }
      tryOpenByShortCode(0);
      return;
    }
    Promise.all([
      supabaseClient.from("quizzes").select("id,name,description,questions,cover_image").eq("id", quizId).maybeSingle(),
      supabaseClient.from("public_quizzes").select("id, short_code, view_count").eq("quiz_id", quizId).limit(1).maybeSingle()
    ]).then(function (results) {
      var quiz = results[0]?.data;
      var publicRow = results[1]?.data || null;
      openWithQuiz(quiz, publicRow);
    }).catch(function () {
      alert(currentLang === "tr" ? "Quiz bulunamadı." : "Quiz not found.");
    });
  }
  if (supabaseClient) setTimeout(openQuizByLink, 150);
  else ensureSupabaseThenRun(function () { setTimeout(openQuizByLink, 400); });
}
if (/^#\/?play\//.test(window.location.hash || "")) {
  setTimeout(handlePlayHash, 200);
}
window.addEventListener("hashchange", function () {
  if (/^#\/?play\//.test(window.location.hash || "")) handlePlayHash();
  else handleViewHash();
});

window.addEventListener("load", function () { checkStandaloneAgain(); });
setTimeout(checkStandaloneAgain, 500);

// Mobil: kaydırma veya uzun basmada buton tetiklenmesin (sadece kısa, hareketsiz dokunuş = tıklama)
(function () {
  const MOVE_THRESHOLD_PX = 12;
  const LONG_PRESS_MS = 400;
  let touchStartX = 0, touchStartY = 0, touchStartTime = 0, touchStartTarget = null;

  function getInteractiveElement(el) {
    if (!el) return null;
    return el.closest("button, a, [role='button']") || null;
  }

  document.addEventListener("touchstart", function (e) {
    const el = getInteractiveElement(e.target);
    if (!el) return;
    touchStartTarget = el;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  document.addEventListener("touchend", function (e) {
    if (!touchStartTarget || !e.changedTouches.length) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    const duration = Date.now() - touchStartTime;
    const moved = Math.sqrt(dx * dx + dy * dy);
    if (moved > MOVE_THRESHOLD_PX || duration > LONG_PRESS_MS) {
      touchStartTarget.dataset.ignoreNextClick = "1";
    }
    touchStartTarget = null;
  }, { passive: true });

  document.addEventListener("touchcancel", function () {
    touchStartTarget = null;
  }, { passive: true });

  document.addEventListener("click", function (e) {
    const el = e.target.closest && e.target.closest("button, a, [role='button']");
    if (el && el.dataset.ignoreNextClick === "1") {
      e.preventDefault();
      e.stopPropagation();
      delete el.dataset.ignoreNextClick;
    }
  }, true);
})();

// PWA: register service worker only on secure origin (localhost / https)
function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  const isSecure = window.location.protocol === "https:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  if (!isSecure) return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
registerServiceWorker();

