// Basic quiz storage using browser localStorage
const STORAGE_KEY = "custom_quizzes_v1";
const SOUND_ENABLED_KEY = "quiz_sound_enabled_v1";
const SHUFFLE_ENABLED_KEY = "quiz_shuffle_enabled_v1";
const LANG_KEY = "quiz_lang_v1";

// Translations: en + tr
const translations = {
  en: {
    mainTitle: "Custom Quiz Game",
    playQuiz: "Play Quiz",
    createQuiz: "Create / Edit Quiz",
    howItWorks: "How it works",
    playQuizDesc: "Play Quiz: Choose a quiz and answer in full screen.",
    createQuizDesc: "Create / Edit Quiz: Paste many questions at once (e.g. 100) and the system will detect each question and its 5 options.",
    storedLocally: "Quizzes are stored locally in your browser (no server needed).",
    language: "Language",
    selectQuiz: "Select Quiz",
    chooseQuiz: "Choose a quiz",
    startQuiz: "Start Quiz (Full Screen)",
    randomOrder: "Random question order",
    noQuizzes: "No quizzes yet. Go back and create one first.",
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
    editQuizHint: "Select an existing quiz to add more questions. If empty, a new quiz will be created.",
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
  },
  tr: {
    mainTitle: "Quiz Oyunu",
    playQuiz: "Quiz Oyna",
    createQuiz: "Quiz Oluştur / Düzenle",
    howItWorks: "Nasıl çalışır",
    playQuizDesc: "Quiz Oyna: Bir quiz seçin ve tam ekranda cevaplayın.",
    createQuizDesc: "Quiz Oluştur / Düzenle: Çok sayıda soruyu (örn. 100) bir seferde yapıştırın; sistem her soruyu ve 5 seçeneği algılar.",
    storedLocally: "Quizler tarayıcınızda yerel olarak saklanır (sunucu gerekmez).",
    language: "Dil",
    selectQuiz: "Quiz Seç",
    chooseQuiz: "Quiz seçin",
    startQuiz: "Quiz Başlat (Tam Ekran)",
    randomOrder: "Soruları rastgele sırala",
    noQuizzes: "Henüz quiz yok. Önce bir quiz oluşturun.",
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
    editQuizHint: "Daha fazla soru eklemek için mevcut bir quiz seçin. Boş bırakırsanız yeni quiz oluşturulur.",
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
    manualAddHint: "Önce bir quiz seçip Yükle'ye tıklayın, ardından manuel soru ekleyin.",
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
  },
};

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

let editFormQuestionImage = null;
let editFormOptionImages = [null, null, null, null, null];

let quizzes = [];
let currentQuiz = null;
let currentQuestionIndex = 0;
let currentQuestionOrder = [];
let currentScore = 0;
let lastRunQuizId = null;
let soundEnabled = true;
let shuffleEnabled = false;
let editingQuizId = null;
let currentLang = "en";
let currentQuizForEdit = null;
let currentQuestionEditIndex = -1;
let fromCreateQuizPage = false;

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

const quizSelectListEl = document.getElementById("quiz-select-list");
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
const editQuizListEl = document.getElementById("edit-quiz-list");
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

// Utility: view switching
function showView(name) {
  Object.values(views).forEach((v) => v.classList.remove("active"));
  const target = views[name];
  if (target) target.classList.add("active");
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
    const lang = localStorage.getItem(LANG_KEY);
    if (lang === "tr" || lang === "en") {
      currentLang = lang;
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
    localStorage.setItem(LANG_KEY, currentLang);
  } catch (e) {
    // ignore
  }
}

function applyTranslations() {
  const els = {
    "main-title": t("mainTitle"),
    "play-quiz-btn": t("playQuiz"),
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
    "no-quiz-msg": t("noQuizzes"),
    "next-question-btn": t("next"),
    "exit-quiz-btn": t("leave"),
    "quiz-finished-title": t("quizFinished"),
    "retry-quiz-btn": t("retryQuiz"),
    "back-to-menu-btn": t("backToMenu"),
    "edit-quiz-title": t("editQuiz"),
    "edit-existing-label": t("editExisting"),
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
  const backSelect = document.getElementById("back-btn-select");
  const backCreate = document.getElementById("back-btn-create");
  if (backSelect) backSelect.textContent = t("back");
  if (backCreate) backCreate.textContent = t("back");
  const langSelect = document.getElementById("lang-select");
  if (langSelect) langSelect.value = currentLang;
  updateSoundToggleUi();
  updateFullscreenBtnText();
}

function renderQuizSelectList(page) {
  if (!quizSelectListEl) return;
  quizSelectListEl.innerHTML = "";
  if (!quizzes.length) {
    noQuizMsg.classList.remove("hidden");
    startQuizBtn.disabled = true;
    if (quizSelectPaginationEl) quizSelectPaginationEl.classList.add("hidden");
    return;
  }
  noQuizMsg.classList.add("hidden");
  const start = page * QUIZ_PER_PAGE;
  const slice = quizzes.slice(start, start + QUIZ_PER_PAGE);
  slice.forEach((quiz) => {
    const item = document.createElement("div");
    item.className = "quiz-list-item" + (selectedPlayQuizId === quiz.id ? " selected" : "");
    item.dataset.quizId = quiz.id;
    item.innerHTML = `<span class="quiz-list-name">${escapeHtml(quiz.name)}</span><span class="quiz-list-meta">${quiz.questions.length} ${quiz.questions.length === 1 ? "question" : "questions"}</span>`;
    item.addEventListener("click", () => {
      selectedPlayQuizId = quiz.id;
      renderQuizSelectList(quizSelectCurrentPage);
      startQuizBtn.disabled = false;
    });
    quizSelectListEl.appendChild(item);
  });
  const totalPages = Math.ceil(quizzes.length / QUIZ_PER_PAGE);
  if (quizSelectPaginationEl) {
    quizSelectPaginationEl.classList.toggle("hidden", totalPages <= 1);
    renderQuizSelectPagination();
  }
  startQuizBtn.disabled = !selectedPlayQuizId;
}

function renderQuizSelectPagination() {
  const totalPages = Math.ceil(quizzes.length / QUIZ_PER_PAGE);
  if (!quizSelectPaginationEl || totalPages <= 1) return;
  quizSelectPaginationEl.innerHTML = "";
  const page = quizSelectCurrentPage;
  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "secondary-btn small-btn";
  prevBtn.textContent = "←";
  prevBtn.disabled = page === 0;
  prevBtn.addEventListener("click", () => { quizSelectCurrentPage = Math.max(0, page - 1); renderQuizSelectList(quizSelectCurrentPage); renderQuizSelectPagination(); });
  const info = document.createElement("span");
  info.className = "pagination-info";
  info.textContent = `${page + 1} / ${totalPages}`;
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "secondary-btn small-btn";
  nextBtn.textContent = "→";
  nextBtn.disabled = page >= totalPages - 1;
  nextBtn.addEventListener("click", () => { quizSelectCurrentPage = Math.min(totalPages - 1, page + 1); renderQuizSelectList(quizSelectCurrentPage); renderQuizSelectPagination(); });
  quizSelectPaginationEl.appendChild(prevBtn);
  quizSelectPaginationEl.appendChild(info);
  quizSelectPaginationEl.appendChild(nextBtn);
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
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
      const textSpan = document.createElement("span");
      textSpan.className = "question-list-text";
      textSpan.textContent = q.text || "";
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "secondary-btn small-btn question-delete-btn";
      delBtn.textContent = t("delete");
      delBtn.setAttribute("aria-label", t("delete"));
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

function loadQuestionIntoForm(index) {
  const quiz = quizzes.find((q) => q.id === currentQuizForEdit);
  if (!quiz || !quiz.questions[index]) return;
  const q = quiz.questions[index];
  const textEl = document.getElementById("single-question-text");
  const opts = ["single-option-a", "single-option-b", "single-option-c", "single-option-d", "single-option-e"];
  const correctEl = document.getElementById("single-correct-answer");
  if (textEl) textEl.value = q.text || "";
  opts.forEach((id, i) => {
    const el = document.getElementById(id);
    const opt = q.options && q.options[i];
    if (el) el.value = getOptionText(opt) || "";
    editFormOptionImages[i] = getOptionImage(opt) || null;
    updateOptionImagePreview(i);
  });
  if (correctEl) correctEl.value = String(q.correctIndex ?? 0);
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
  if (editFormQuestionImage) {
    if (preview) preview.innerHTML = `<img src="${editFormQuestionImage}" alt="" />`;
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
  if (data) {
    preview.innerHTML = `<img src="${data}" alt="" />`;
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
  const opts = ["single-option-a", "single-option-b", "single-option-c", "single-option-d", "single-option-e"];
  const correctEl = document.getElementById("single-correct-answer");
  if (textEl) textEl.value = "";
  opts.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  if (correctEl) correctEl.value = "0";
  editFormQuestionImage = null;
  editFormOptionImages = [null, null, null, null, null];
  updateQuestionImagePreview();
  [0, 1, 2, 3, 4].forEach(updateOptionImagePreview);
}

function renderEditQuizList(page) {
  if (!editQuizListEl) return;
  editQuizListEl.innerHTML = "";
  const start = page * QUIZ_PER_PAGE;
  const slice = quizzes.slice(start, start + QUIZ_PER_PAGE);
  slice.forEach((quiz) => {
    const item = document.createElement("div");
    item.className = "quiz-list-item" + (selectedEditQuizId === quiz.id ? " selected" : "");
    item.dataset.quizId = quiz.id;
    item.innerHTML = `<span class="quiz-list-name">${escapeHtml(quiz.name)}</span><span class="quiz-list-meta">${quiz.questions.length} ${quiz.questions.length === 1 ? "question" : "questions"}</span>`;
    item.addEventListener("click", () => {
      selectedEditQuizId = quiz.id;
      renderEditQuizList(editQuizListCurrentPage);
      renderEditQuizPagination();
      updateEditQuestionsBtn();
    });
    editQuizListEl.appendChild(item);
  });
  const totalPages = Math.ceil(quizzes.length / QUIZ_PER_PAGE);
  if (editQuizPaginationEl) {
    editQuizPaginationEl.classList.toggle("hidden", totalPages <= 1);
    renderEditQuizPagination();
  }
  const deleteWrapEdit = document.getElementById("delete-quiz-wrap-edit");
  if (deleteWrapEdit) deleteWrapEdit.classList.toggle("hidden", !selectedEditQuizId);
}

function renderEditQuizPagination() {
  const totalPages = Math.ceil(quizzes.length / QUIZ_PER_PAGE);
  if (!editQuizPaginationEl || totalPages <= 1) return;
  editQuizPaginationEl.innerHTML = "";
  const page = editQuizListCurrentPage;
  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "secondary-btn small-btn";
  prevBtn.textContent = "←";
  prevBtn.disabled = page === 0;
  prevBtn.addEventListener("click", () => { editQuizListCurrentPage = Math.max(0, page - 1); renderEditQuizList(editQuizListCurrentPage); renderEditQuizPagination(); });
  const info = document.createElement("span");
  info.className = "pagination-info";
  info.textContent = `${page + 1} / ${totalPages}`;
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "secondary-btn small-btn";
  nextBtn.textContent = "→";
  nextBtn.disabled = page >= totalPages - 1;
  nextBtn.addEventListener("click", () => { editQuizListCurrentPage = Math.min(totalPages - 1, page + 1); renderEditQuizList(editQuizListCurrentPage); renderEditQuizPagination(); });
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

  const opts = (q.options || []).map((o) => (typeof o === "string" ? { text: o } : o));

  questionTextEl.innerHTML = "";
  if (q.image) {
    const wrap = document.createElement("div");
    wrap.className = "question-image-wrap";
    const img = document.createElement("img");
    img.src = q.image;
    img.alt = "";
    wrap.appendChild(img);
    questionTextEl.appendChild(wrap);
  }
  if (q.text) questionTextEl.appendChild(document.createTextNode(q.text));

  optionsContainerEl.innerHTML = "";
  nextQuestionBtn.disabled = true;

  opts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (opt.image ? " has-image" : "");
    btn.dataset.index = String(idx);
    btn.dataset.label = String.fromCharCode(65 + idx);
    if (opt.image) {
      const img = document.createElement("img");
      img.className = "option-image-inline";
      img.src = opt.image;
      img.alt = "";
      btn.appendChild(img);
    }
    const textSpan = document.createElement("span");
    textSpan.textContent = opt.text || "";
    btn.appendChild(textSpan);
    btn.addEventListener("click", () => handleAnswerClick(btn, idx));
    optionsContainerEl.appendChild(btn);
  });
}

function handleAnswerClick(btn, idx) {
  if (!currentQuiz) return;

  const qIndex = currentQuestionOrder[currentQuestionIndex];
  const q = currentQuiz.questions[qIndex];
  const correctIndex = q.correctIndex;

  // Disable further clicks
  const optionButtons = optionsContainerEl.querySelectorAll(".option-btn");
  optionButtons.forEach((b) => b.classList.add("disabled"));

  if (idx === correctIndex) {
    btn.classList.add("correct");
    currentScore += 1;
    updateScoreDisplay();
    playCorrectVfx(btn);
  } else {
    btn.classList.add("incorrect");
    // Optional SFX for incorrect answer (only when sound enabled)
    if (soundEnabled) playAnswerSound(false);
    // Highlight correct one
    optionButtons.forEach((b) => {
      const bIdx = Number(b.dataset.index);
      if (bIdx === correctIndex) {
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
  if (soundEnabled) playResultSound(percentage);
  /* Fullscreen durumunu değiştirmiyoruz: ana ekrandaysa öyle kalır, normaldeyse normal kalır. */
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
  const btn = document.getElementById("fullscreen-btn");
  if (!btn) return;
  const isFullscreen = !!document.fullscreenElement;
  btn.textContent = isFullscreen ? t("exitFullscreen") : t("fullscreen");
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
  let html = `<strong>Preview (${draftQuestions.length} total):</strong><br/>`;
  html += sample
    .map(
      (q, index) =>
        `${index + 1}. ${q.text} <span class="hint">(Answer: ${
          String.fromCharCode(65 + q.correctIndex)
        })</span>`
    )
    .join("<br/>");
  if (parsed.length > 3) {
    html += `<br/><span class="hint">...and ${
      parsed.length - 3
    } more question(s).</span>`;
  }
  parsedQuestionsSummaryEl.innerHTML = html;
}

function handleSaveQuiz() {
  const name = quizNameInput.value.trim();
  const description = quizDescriptionInput.value.trim();

  if (!name) {
    alert("Please enter a quiz name.");
    return;
  }
  if (!draftQuestions.length) {
    alert("You have not added any questions yet. Parse questions from the big box first.");
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
  saveQuizzes();
  refreshQuizSelect();
  refreshEditQuizSelect();

  alert(`Quiz "${name}" saved with ${draftQuestions.length} questions.`);
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
playQuizBtn.addEventListener("click", () => {
  refreshQuizSelect();
  showView("quizSelect");
});

createQuizBtn.addEventListener("click", () => {
  resetCreateQuizForm();
  refreshEditQuizSelect();
  showView("createQuiz");
});

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
    if (rawTarget === "quiz-select-view") targetViewKey = "quizSelect";
    if (rawTarget === "create-quiz-view") targetViewKey = "createQuiz";
    if (rawTarget === "quiz-edit-questions-view") targetViewKey = "quizEditQuestions";
    if (rawTarget === "quiz-questions-list") targetViewKey = "quizQuestionsList";
    if (rawTarget === "quiz-question-edit") targetViewKey = "quizQuestionEdit";
    if (!views[targetViewKey]) targetViewKey = "mainMenu";
    if (targetViewKey === "createQuiz") fromCreateQuizPage = false;
    showView(targetViewKey);
    if (targetViewKey === "quizQuestionsList") renderQuestionsList();
  });
});

startQuizBtn.addEventListener("click", () => {
  const quizId = selectedPlayQuizId;
  if (!quizId) return;
  startQuiz(quizId);
});

const editQuestionsBtn = document.getElementById("edit-questions-btn");
if (editQuestionsBtn) {
  editQuestionsBtn.addEventListener("click", () => {
    const quizId = selectedEditQuizId || editingQuizId || "";
    if (!quizId) return;
    currentQuizForEdit = quizId;
    showView("quizQuestionsList");
    renderQuestionsList();
  });
}

const questionsListEl = document.getElementById("questions-list");
if (questionsListEl) {
  questionsListEl.addEventListener("click", (e) => {
    const li = e.target.closest(".question-list-item");
    if (!li) return;
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
    const opts = ["single-option-a", "single-option-b", "single-option-c", "single-option-d", "single-option-e"];
    const correctEl = document.getElementById("single-correct-answer");
    const text = (textEl && textEl.value.trim()) || "";
    const options = opts.map((id, i) => {
      const el = document.getElementById(id);
      const optionText = (el && el.value.trim()) || "";
      return { text: optionText, image: editFormOptionImages[i] || undefined };
    });
    const correctIndex = correctEl ? parseInt(correctEl.value, 10) : 0;
    if (!text || options.some((o) => !o.text)) return;
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
      showView("quizEditQuestions");
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

["a", "b", "c", "d", "e"].forEach((letter, i) => {
  const addBtn = document.querySelector(`.option-photo-btn[data-option="${letter}"]`);
  const wrap = document.getElementById(`single-option-image-wrap-${letter}`);
  const input = document.getElementById(`single-option-image-${letter}`);
  const removeBtn = document.querySelector(`.option-image-remove[data-option="${letter}"]`);
  if (addBtn && wrap) {
    addBtn.addEventListener("click", () => {
      wrap.classList.remove("hidden");
      addBtn.classList.add("hidden");
    });
  }
  if (input) {
    input.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file || !file.type.startsWith("image/")) return;
      resizeImageToDataUrl(file).then((dataUrl) => {
        editFormOptionImages[i] = dataUrl;
        updateOptionImagePreview(i);
      }).catch(() => {});
    });
  }
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      editFormOptionImages[i] = null;
      updateOptionImagePreview(i);
    });
  }
});

nextQuestionBtn.addEventListener("click", () => {
  nextQuestion();
});

exitQuizBtn.addEventListener("click", () => {
  if (!currentQuiz) {
    exitFullScreen();
    showView("mainMenu");
    return;
  }
  const totalAnswered = currentQuestionIndex;
  if (totalAnswered === 0) {
    exitFullScreen();
    showView("mainMenu");
    return;
  }
  /* Skor toplam soru sayısına göre: doğru sayısı / quiz'deki toplam soru */
  const totalQuestions = currentQuiz.questions.length;
  showQuizResult(currentScore, totalQuestions);
});

const fullscreenBtn = document.getElementById("fullscreen-btn");
if (fullscreenBtn) {
  fullscreenBtn.addEventListener("click", () => {
    if (document.fullscreenElement) {
      exitFullScreen();
    } else {
      goFullScreen();
    }
  });
}
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

if (loadEditQuizBtn) {
  loadEditQuizBtn.addEventListener("click", () => {
    const id = selectedEditQuizId;
    if (!id) {
      resetCreateQuizForm();
      return;
    }
    const quiz = quizzes.find((q) => q.id === id);
    if (!quiz) return;
    editingQuizId = quiz.id;
    quizNameInput.value = quiz.name;
    quizDescriptionInput.value = quiz.description || "";
    draftQuestions = quiz.questions.slice();
    showView("quizEditQuestions");
    if (editQuizStatusEl) {
      editQuizStatusEl.textContent = `Editing quiz "${quiz.name}" with ${draftQuestions.length} existing questions. New parsed questions will be appended.`;
    }
    parsedQuestionsSummaryEl.classList.add("hidden");
    parseStatusEl.textContent = "";
    updateEditQuestionsBtn();
  });
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
    showView("quizEditQuestions");
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

// Language selector
const langSelectEl = document.getElementById("lang-select");
if (langSelectEl) {
  langSelectEl.addEventListener("change", () => {
    const val = langSelectEl.value;
    if (val === "en" || val === "tr") {
      currentLang = val;
      saveSettings();
      applyTranslations();
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

// Initial setup
loadQuizzes();
loadSettings();
refreshEditQuizSelect();
applyTranslations();
updateSoundToggleUi();
updateShuffleToggleUi();
initStandalone();
showView("mainMenu");
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

