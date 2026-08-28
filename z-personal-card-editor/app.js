const STORAGE_KEY = 'z-personal-card-editor-state';
const THEME_KEY = 'z-personal-card-editor-theme';
const LANG_KEY = 'z-personal-card-editor-lang';

const defaultState = {
  card_id: `z_${Math.random().toString(36).slice(2, 8)}_${Date.now().toString(36)}`,
  theme: localStorage.getItem(THEME_KEY) || 'light',
  lang: localStorage.getItem(LANG_KEY) || 'ar',
  cover_image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
  profile_image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85',
  full_name: 'Zahd Ashour',
  job_title: 'Entrepreneur & Founder',
  company_name: 'Z Card',
  location: 'Cairo, Egypt',
  short_bio: 'Building premium digital experiences powered by AI.',
  phone_number: '+20 100 000 0000',
  whatsapp_number: '+20 100 000 0000',
  email: 'zahd@example.com',
  website: 'zcard.tech',
  portfolio: 'behance.net/zcard',
  status: 'Ready to edit',
  social_links: {
    linkedin: 'https://linkedin.com/in/zahdashour',
    instagram: 'https://instagram.com/zcard.tech',
    facebook: '',
    x: '',
    youtube: '',
  },
};

const copy = {
  ar: {
    eyebrow: 'Z PERSONAL',
    headline: 'بدّل بيانات الكارد ببياناتك',
    lead: 'اضغط على أي عنصر داخل الكارد لتعديله، ثم احفظ التغييرات وشاهد بطاقتك تتحول إلى هويتك الخاصة.',
    sub: 'صورة • اسم • وظيفة • هاتف • واتساب • شركة • نبذة • روابط • QR • مشاركة',
    intro_note: 'واجهة واحدة بسيطة. كارد واحد فقط. لا صفحات طويلة.',
    tap_to_edit: 'اضغط للتعديل',
    verified: '✓ موثق',
    call: 'اتصال',
    whatsapp: 'واتساب',
    email: 'إيميل',
    save_contact: 'حفظ جهة الاتصال',
    qr: 'QR Code',
    share: 'مشاركة',
    chip_identity: 'معلوماتك',
    chip_links: 'روابطك',
    chip_media: 'صورك',
    chip_qr: 'QR Code',
    chip_share: 'مشاركة سهلة',
    download_eyebrow: 'تحميل التطبيق',
    download_headline: 'احفظ كاردك على تطبيق Z Card',
    download_text: 'حمّل التطبيق وسجّل بنفس رقم الهاتف المستخدم داخل الكارد، وسيظهر كاردك داخل حسابك بعد التحقق.',
    download_btn: 'تحميل تطبيق Z Card',
    download_note: 'رقم الهاتف الذي تضيفه هنا هو نفسه الرقم الذي ستستخدمه عند تسجيل الدخول داخل التطبيق.',
    save_changes_btn: 'حفظ التعديلات',
    save: 'حفظ',
    cancel: 'إلغاء',
    upload_from_device: 'رفع من الجهاز',
    scan_to_open: 'امسح لفتح البطاقة',
    native_share: 'مشاركة',
    copy_link: 'نسخ الرابط',
    share_headline: 'شارك البطاقة بسهولة',
    share_text: 'يمكنك نسخ الرابط أو استخدام المشاركة الطبيعية في الجهاز.',
    editor: {
      cover_image: { title: 'صورة الغلاف', help: 'استبدل صورة الغلاف أو أضف رابطًا جديدًا.' },
      profile_image: { title: 'الصورة الشخصية', help: 'غيّر الصورة الشخصية فورًا من المعرض أو عبر رابط.' },
      full_name: { title: 'الاسم الكامل', help: 'اكتب الاسم الذي تريد ظهوره على الكارد.' },
      job_title: { title: 'المسمى الوظيفي', help: 'غيّر المسمى الوظيفي ليعكس هويتك المهنية.' },
      company_name: { title: 'اسم الشركة', help: 'أضف اسم الشركة أو الجهة المرتبطة بك.' },
      location: { title: 'الموقع', help: 'أضف المدينة أو الدولة بشكل مختصر.' },
      short_bio: { title: 'نبذة قصيرة', help: 'اكتب سطرًا أو سطرين يعرّفان بك.', textarea: true },
      phone_number: { title: 'رقم الهاتف', help: 'هذا هو زر الاتصال داخل البطاقة.' },
      whatsapp_number: { title: 'رقم واتساب', help: 'هذا هو الرقم الذي سيُستخدم في زر واتساب.' },
      email: { title: 'البريد الإلكتروني', help: 'أدخل البريد الذي تريد عرضه على الكارد.' },
      website: { title: 'الموقع الإلكتروني', help: 'أضف الرابط الكامل أو اكتب الدومين فقط.' },
      portfolio: { title: 'البورتفوليو', help: 'أضف رابط أعمالك أو صفحتك المهنية.' },
      linkedin: { title: 'LinkedIn', help: 'أضف رابط لينكدإن الكامل.' },
      instagram: { title: 'Instagram', help: 'أضف رابط إنستغرام الكامل.' },
      facebook: { title: 'Facebook', help: 'أضف رابط فيسبوك الكامل.' },
      x: { title: 'X', help: 'أضف رابط منصة X الكامل.' },
      youtube: { title: 'YouTube', help: 'أضف رابط يوتيوب الكامل.' },
      status: { title: 'الحالة', help: 'نص صغير يظهر داخل البادج العلوي.' },
      save_contact: { title: 'حفظ جهة الاتصال', help: 'يمكنك تنزيل بطاقة vCard من بياناتك الحالية.' },
      qr_code: { title: 'QR Code', help: 'امسح لرؤية البطاقة الحالية.' },
    },
  },
  en: {
    eyebrow: 'Z PERSONAL',
    headline: 'Edit the card and make it yours',
    lead: 'Tap any element on the card to edit it, save the changes, and watch the template become your personal identity.',
    sub: 'Photo • Name • Title • Phone • WhatsApp • Company • Bio • Links • QR • Share',
    intro_note: 'One simple screen. One card. No long pages.',
    tap_to_edit: 'Tap to edit',
    verified: '✓ Verified',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    save_contact: 'Save Contact',
    qr: 'QR Code',
    share: 'Share',
    chip_identity: 'Your Identity',
    chip_links: 'Your Links',
    chip_media: 'Your Media',
    chip_qr: 'QR Code',
    chip_share: 'Easy Sharing',
    download_eyebrow: 'App Download',
    download_headline: 'Keep your card in the Z Card app',
    download_text: 'Download the app and sign in with the same phone number used in the card. Your card will appear in your account after verification.',
    download_btn: 'Download Z Card App',
    download_note: 'The phone number you add here is the same number you will use to sign in inside the app.',
    save_changes_btn: 'Save Changes',
    save: 'Save',
    cancel: 'Cancel',
    upload_from_device: 'Upload from device',
    scan_to_open: 'Scan to open the card',
    native_share: 'Share',
    copy_link: 'Copy Link',
    share_headline: 'Share the card easily',
    share_text: 'Copy the link or use the device share sheet.',
    editor: {
      cover_image: { title: 'Cover Image', help: 'Replace the cover image or paste a new URL.' },
      profile_image: { title: 'Profile Image', help: 'Change the profile image from your device or by URL.' },
      full_name: { title: 'Full Name', help: 'Enter the name you want on the card.' },
      job_title: { title: 'Professional Title', help: 'Update the title to match your role.' },
      company_name: { title: 'Company Name', help: 'Add your company or organization.' },
      location: { title: 'Location', help: 'Add a city or country in a short format.' },
      short_bio: { title: 'Short Bio', help: 'Write one or two short lines about you.', textarea: true },
      phone_number: { title: 'Phone Number', help: 'This powers the call action on the card.' },
      whatsapp_number: { title: 'WhatsApp Number', help: 'This powers the WhatsApp action on the card.' },
      email: { title: 'Email', help: 'Add the email address you want to show.' },
      website: { title: 'Website', help: 'Add the full URL or just the domain.' },
      portfolio: { title: 'Portfolio', help: 'Add your work or professional page link.' },
      linkedin: { title: 'LinkedIn', help: 'Add the full LinkedIn URL.' },
      instagram: { title: 'Instagram', help: 'Add the full Instagram URL.' },
      facebook: { title: 'Facebook', help: 'Add the full Facebook URL.' },
      x: { title: 'X', help: 'Add the full X URL.' },
      youtube: { title: 'YouTube', help: 'Add the full YouTube URL.' },
      status: { title: 'Status', help: 'A short badge label shown on the card.' },
      save_contact: { title: 'Save Contact', help: 'Download a vCard using your current data.' },
      qr_code: { title: 'QR Code', help: 'Scan to view the current card.' },
    },
  },
};

const state = loadState();
let activeField = null;
let pendingImageField = null;

const el = {
  html: document.documentElement,
  body: document.body,
  langToggle: document.getElementById('langToggle'),
  themeToggle: document.getElementById('themeToggle'),
  dock: document.getElementById('dock'),
  zCard: document.getElementById('zCard'),
  stickyMini: document.getElementById('stickyMini'),
  nameField: document.getElementById('nameField'),
  titleField: document.getElementById('titleField'),
  companyField: document.getElementById('companyField'),
  locationField: document.getElementById('locationField'),
  bioField: document.getElementById('bioField'),
  callBtn: document.getElementById('callBtn'),
  waBtn: document.getElementById('waBtn'),
  emailBtn: document.getElementById('emailBtn'),
  saveContactBtn: document.getElementById('saveContactBtn'),
  statusBadge: document.getElementById('statusBadge'),
  coverImage: document.getElementById('coverImage'),
  profileImage: document.getElementById('profileImage'),
  miniAvatar: document.getElementById('miniAvatar'),
  miniName: document.getElementById('miniName'),
  miniTitle: document.getElementById('miniTitle'),
  socialRow: document.getElementById('socialRow'),
  editorModal: document.getElementById('editorModal'),
  editorForm: document.getElementById('editorForm'),
  editorLabel: document.getElementById('editorLabel'),
  editorTitle: document.getElementById('editorTitle'),
  editorHelp: document.getElementById('editorHelp'),
  editorInputLabel: document.getElementById('editorInputLabel'),
  editorInput: document.getElementById('editorInput'),
  textareaGroup: document.getElementById('textareaGroup'),
  editorTextLabel: document.getElementById('editorTextLabel'),
  editorTextArea: document.getElementById('editorTextArea'),
  secondaryInputGroup: document.getElementById('secondaryInputGroup'),
  secondaryInputLabel: document.getElementById('secondaryInputLabel'),
  secondaryInput: document.getElementById('secondaryInput'),
  imageUploadGroup: document.getElementById('imageUploadGroup'),
  imageFile: document.getElementById('imageFile'),
  qrPreviewGroup: document.getElementById('qrPreviewGroup'),
  qrImage: document.getElementById('qrImage'),
  shareModal: document.getElementById('shareModal'),
  nativeShareBtn: document.getElementById('nativeShareBtn'),
  copyLinkBtn: document.getElementById('copyLinkBtn'),
  toast: document.getElementById('toast'),
  downloadBtn: document.querySelector('[data-i18n="download_btn"]'),
  downloadCard: document.querySelector('.download-card'),
  downloadHead: document.querySelector('[data-i18n="download_headline"]'),
  downloadText: document.querySelector('[data-i18n="download_text"]'),
  downloadNote: document.querySelector('[data-i18n="download_note"]'),
  chips: [...document.querySelectorAll('.micro-strip span')],
  intl: [...document.querySelectorAll('[data-i18n]')],
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      social_links: { ...structuredClone(defaultState.social_links), ...(parsed.social_links || {}) },
      theme: parsed.theme || defaultState.theme,
      lang: parsed.lang || defaultState.lang,
      card_id: parsed.card_id || defaultState.card_id,
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem(THEME_KEY, state.theme);
  localStorage.setItem(LANG_KEY, state.lang);
}

function t(key) {
  return copy[state.lang][key] || copy.en[key] || copy.ar[key] || key;
}

function applyLanguage() {
  el.html.lang = state.lang === 'ar' ? 'ar' : 'en';
  el.html.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  el.langToggle.textContent = state.lang === 'ar' ? 'EN' : 'AR';
  el.langToggle.setAttribute('aria-label', state.lang === 'ar' ? 'تبديل إلى الإنجليزية' : 'Switch to Arabic');

  el.intl.forEach((node) => {
    const key = node.dataset.i18n;
    if (key && t(key)) node.textContent = t(key);
  });

  document.querySelectorAll('.field').forEach((node) => {
    if (node.dataset.edit === 'status') node.textContent = state.status;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = t(key);
  });
}

function setTheme(theme) {
  state.theme = theme;
  el.html.dataset.theme = theme;
  el.themeToggle.textContent = theme === 'dark' ? '☾' : '☼';
  el.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
  persistState();
}

function updateCard() {
  const c = state;

  setImage(el.coverImage, c.cover_image);
  setImage(el.profileImage, c.profile_image);
  setImage(el.miniAvatar, c.profile_image);

  setText(el.nameField, c.full_name);
  setText(el.titleField, c.job_title);
  setText(el.companyField, c.company_name);
  setText(el.locationField, c.location, 'location');
  setText(el.bioField, c.short_bio, 'bio');
  setText(el.statusBadge, c.status || t('tap_to_edit'));
  setText(el.miniName, c.full_name);
  setText(el.miniTitle, c.job_title);

  setActionHref(el.callBtn, `tel:${normalizePhone(c.phone_number)}`);
  setActionHref(el.waBtn, c.whatsapp_number ? `https://wa.me/${normalizePhone(c.whatsapp_number)}` : '');
  setActionHref(el.emailBtn, c.email ? `mailto:${c.email}` : '');

  setText(el.callBtn.querySelector('small'), t('call'));
  setText(el.waBtn.querySelector('small'), t('whatsapp'));
  setText(el.emailBtn.querySelector('small'), t('email'));
  setText(el.saveContactBtn.querySelector('small'), t('save_contact'));

  renderSocials();
  updateStickyMini();
  updateDockActions();
  renderQR();
  persistState();
}

function setText(node, value, kind) {
  if (!node) return;
  const text = String(value || '').trim();
  if (!text) {
    node.classList.add('hidden');
    node.textContent = '';
    return;
  }
  node.classList.remove('hidden');
  node.textContent = text;
  if (kind === 'bio') node.title = text;
}

function setImage(node, src) {
  if (!node) return;
  node.src = src || defaultState.profile_image;
}

function setActionHref(btn, href) {
  if (!btn) return;
  const hasLink = Boolean(href);
  btn.dataset.href = href || '';
  btn.classList.toggle('hidden', !hasLink);
}

function normalizePhone(value) {
  return String(value || '').replace(/[^\d+]/g, '');
}

function renderSocials() {
  const socials = [
    ['linkedin', 'in'],
    ['instagram', 'ig'],
    ['facebook', 'f'],
    ['x', 'x'],
    ['youtube', 'yt'],
  ];

  el.socialRow.innerHTML = '';
  socials.forEach(([field, label]) => {
    const url = state.social_links[field];
    if (!url) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.title = url;
    b.dataset.edit = field;
    b.className = 'edit-trigger';
    el.socialRow.appendChild(b);
  });
}

function updateStickyMini() {
  const compact = window.scrollY > 90;
  el.stickyMini.classList.toggle('show', compact);
  el.zCard.classList.toggle('compact', compact);
}

function updateDockActions() {
  document.querySelectorAll('[data-edit="phone_number"]').forEach((node) => node.dataset.field = 'phone_number');
  document.querySelectorAll('[data-edit="whatsapp_number"]').forEach((node) => node.dataset.field = 'whatsapp_number');
}

function toast(message) {
  el.toast.textContent = message;
  el.toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2200);
}

function openModal(modal) {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

function openEditor(field) {
  activeField = field;
  pendingImageField = null;
  const info = copy[state.lang].editor[field] || { title: field, help: '' };
  const inputValue = getFieldValue(field);
  const isImage = field === 'cover_image' || field === 'profile_image';
  const isBio = field === 'short_bio';
  const isQR = field === 'qr_code';
  const isSave = field === 'save_contact';
  const isStatus = field === 'status';
  const isSocial = ['linkedin','instagram','facebook','x','youtube','website','portfolio'].includes(field);

  el.editorLabel.textContent = t('eyebrow');
  el.editorTitle.textContent = info.title;
  el.editorHelp.textContent = info.help;

  el.imageUploadGroup.hidden = !isImage;
  el.textareaGroup.hidden = !isBio;
  el.secondaryInputGroup.hidden = !(field === 'cover_image' || field === 'profile_image');
  el.qrPreviewGroup.hidden = !isQR;

  el.editorInputLabel.textContent = info.title;
  el.editorInput.value = (isImage || isBio || isQR || isSave) ? '' : inputValue;
  el.editorInput.placeholder = isSocial || field === 'website' || field === 'portfolio' ? 'https://example.com' : '';
  el.editorInput.type = field === 'phone_number' || field === 'whatsapp_number' ? 'tel' : 'text';

  el.editorTextLabel.textContent = info.title;
  el.editorTextArea.value = isBio ? inputValue : '';
  el.secondaryInputLabel.textContent = isImage ? (state.lang === 'ar' ? 'رابط الصورة' : 'Image URL') : '';
  el.secondaryInput.value = isImage ? inputValue : '';
  el.secondaryInput.placeholder = 'https://...';
  el.imageFile.value = '';
  el.qrImage.src = makeQrUrl();

  el.editorInput.parentElement.hidden = isQR || isSave;
  if (isSave) {
    // reuse modal as a save/contact sheet
    el.editorInput.parentElement.hidden = true;
    el.secondaryInputGroup.hidden = true;
    el.textareaGroup.hidden = true;
    el.imageUploadGroup.hidden = true;
    el.qrPreviewGroup.hidden = true;
    el.editorTitle.textContent = state.lang === 'ar' ? 'حفظ جهة الاتصال' : 'Save Contact';
    el.editorHelp.textContent = state.lang === 'ar'
      ? 'يمكنك تنزيل بطاقة vCard تحتوي على الاسم والهاتف والبريد.'
      : 'Download a vCard with the name, phone, and email fields.';
  }

  if (isQR) {
    el.editorInput.parentElement.hidden = true;
    el.secondaryInputGroup.hidden = true;
    el.textareaGroup.hidden = true;
    el.imageUploadGroup.hidden = true;
    el.editorTitle.textContent = t('qr');
    el.editorHelp.textContent = t('editor').qr_code.help;
  }

  openModal(el.editorModal);
}

function getFieldValue(field) {
  if (field in state) return state[field];
  return state.social_links[field] || '';
}

function makeQrUrl() {
  const url = `${location.origin}${location.pathname}?card=${encodeURIComponent(state.card_id)}`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=${encodeURIComponent(url)}`;
}

function renderQR() {
  el.qrImage.src = makeQrUrl();
}

function saveStateFromEditor(field) {
  const isImage = field === 'cover_image' || field === 'profile_image';
  const isBio = field === 'short_bio';
  const isSave = field === 'save_contact';
  const isQR = field === 'qr_code';
  const value = isBio ? el.editorTextArea.value : el.editorInput.value.trim();
  const secondary = el.secondaryInput.value.trim();

  if (isSave || isQR) return;

  if (isImage) {
    state[field] = secondary || value || state[field];
  } else if (field in state) {
    state[field] = value;
  } else {
    state.social_links[field] = value;
  }

  updateCard();
  toast(state.lang === 'ar' ? 'تم حفظ التعديل' : 'Changes saved');
}

function downloadVCard() {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${state.full_name}`,
    `TITLE:${state.job_title}`,
    `ORG:${state.company_name}`,
    `TEL;TYPE=CELL:${normalizePhone(state.phone_number)}`,
    `EMAIL:${state.email || ''}`,
    'END:VCARD',
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${state.full_name || 'z-card'}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast(state.lang === 'ar' ? 'تم تنزيل جهة الاتصال' : 'Contact file downloaded');
}

async function shareCurrentCard() {
  const shareUrl = `${location.origin}${location.pathname}?card=${encodeURIComponent(state.card_id)}`;
  const payload = {
    title: `${state.full_name} — Z Card`,
    text: state.lang === 'ar' ? 'تعرف على بطاقتي الرقمية على Z Card' : 'View my digital identity card on Z Card',
    url: shareUrl,
  };
  try {
    if (navigator.share) {
      await navigator.share(payload);
      return;
    }
    await navigator.clipboard.writeText(shareUrl);
    toast(state.lang === 'ar' ? 'تم نسخ الرابط' : 'Link copied');
  } catch {
    toast(state.lang === 'ar' ? 'المشاركة غير متاحة الآن' : 'Sharing is unavailable');
  }
}

function bindEvents() {
  el.langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    applyLanguage();
    updateCard();
    persistState();
  });

  el.themeToggle.addEventListener('click', () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
    updateCard();
  });

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-edit], [data-share], [data-qr], [data-close]');
    if (!target) return;

    const closeTarget = target.dataset.close;
    if (closeTarget) {
      closeModal(document.getElementById(closeTarget));
      return;
    }

    if (target.matches('[data-share]')) {
      openModal(el.shareModal);
      return;
    }

    if (target.matches('[data-qr]')) {
      openEditor('qr_code');
      return;
    }

    const field = target.dataset.edit;
    if (!field) return;

    if (field === 'save_contact') {
      downloadVCard();
      return;
    }

    openEditor(field);
  });

  el.editorForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (activeField === 'save_contact') return;
    if (activeField === 'qr_code') return;

    if (activeField === 'cover_image' || activeField === 'profile_image') {
      if (pendingImageField) state[activeField] = pendingImageField;
    }

    saveStateFromEditor(activeField);
    closeModal(el.editorModal);
  });

  el.imageFile.addEventListener('change', () => {
    const file = el.imageFile.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingImageField = String(reader.result || '');
      if (activeField === 'cover_image' || activeField === 'profile_image') {
        if (activeField === 'cover_image') el.coverImage.src = pendingImageField;
        if (activeField === 'profile_image') el.profileImage.src = pendingImageField;
      }
      toast(state.lang === 'ar' ? 'تم تحميل الصورة' : 'Image loaded');
    };
    reader.readAsDataURL(file);
  });

  el.nativeShareBtn.addEventListener('click', shareCurrentCard);
  el.copyLinkBtn.addEventListener('click', async () => {
    const shareUrl = `${location.origin}${location.pathname}?card=${encodeURIComponent(state.card_id)}`;
    await navigator.clipboard.writeText(shareUrl);
    toast(state.lang === 'ar' ? 'تم نسخ الرابط' : 'Link copied');
  });

  document.getElementById('saveContactBtn').addEventListener('click', downloadVCard);
  document.querySelectorAll('.qa').forEach((btn) => {
    const actionField = btn.dataset.edit;
    btn.addEventListener('click', () => {
      if (actionField === 'save_contact') {
        downloadVCard();
        return;
      }
      openEditor(actionField);
    });
  });

  window.addEventListener('scroll', () => {
    updateStickyMini();
    const goingDown = window.scrollY > (window.__lastScrollY || 0);
    el.dock.classList.toggle('hide', goingDown && window.scrollY > 130);
    window.__lastScrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(el.editorModal);
      closeModal(el.shareModal);
    }
  });

  document.querySelectorAll('.field, .brand-mark, .avatar, .cover').forEach((node) => {
    node.addEventListener('dblclick', () => {
      const field = node.dataset.edit || node.getAttribute('data-edit');
      if (field) openEditor(field);
    });
  });
}

function applyDataToDom() {
  applyLanguage();
  setTheme(state.theme);
  updateCard();
  window.__lastScrollY = window.scrollY;
  updateStickyMini();
}

function init() {
  applyDataToDom();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
