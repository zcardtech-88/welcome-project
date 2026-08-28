const STORAGE_KEY = 'z-personal-card-focused-state';
const THEME_KEY = 'z-personal-card-focused-theme';
const LANG_KEY = 'z-personal-card-focused-lang';

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
  website: 'https://zcard.tech',
  portfolio: 'https://behance.net/zcard',
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
    eyebrow: 'Z PERSONAL', headline: 'بدّل بيانات الكارد ببياناتك',
    lead: 'اضغط على أي عنصر داخل الكارد لتعديله، ثم احفظ التغييرات وشاهد بطاقتك تتحول إلى هويتك الخاصة.',
    sub: 'صورة • اسم • وظيفة • هاتف • واتساب • شركة • نبذة • روابط • QR • مشاركة', intro_note: 'واجهة واحدة بسيطة. كارد واحد فقط. لا صفحات طويلة.',
    tap_to_edit: 'اضغط للتعديل', verified: '✓ موثق', call: 'اتصال', whatsapp: 'واتساب', email: 'إيميل', save_contact: 'حفظ جهة الاتصال', qr: 'QR Code', share: 'مشاركة',
    chip_identity: 'معلوماتك', chip_links: 'روابطك', chip_media: 'صورك', chip_qr: 'QR Code', chip_share: 'مشاركة سهلة',
    download_eyebrow: 'تحميل التطبيق', download_headline: 'احفظ كاردك على تطبيق Z Card',
    download_text: 'حمّل التطبيق وسجّل بنفس رقم الهاتف المستخدم داخل الكارد، وسيظهر كاردك داخل حسابك بعد التحقق.',
    download_btn: 'تحميل تطبيق Z Card', download_note: 'رقم الهاتف الذي تضيفه هنا هو نفسه الرقم الذي ستستخدمه عند تسجيل الدخول داخل التطبيق.',
    save_changes_btn: 'حفظ التعديلات', save: 'حفظ', cancel: 'إلغاء', upload_from_device: 'رفع من الجهاز', scan_to_open: 'امسح لفتح البطاقة',
    native_share: 'مشاركة', copy_link: 'نسخ الرابط', share_headline: 'شارك البطاقة بسهولة', share_text: 'يمكنك نسخ الرابط أو استخدام المشاركة الطبيعية في الجهاز.',
    type_here: 'اكتب هنا...', write_bio: 'اكتب نبذة قصيرة...',
    editor: {
      cover_image: { title: 'صورة الغلاف', help: 'استبدل صورة الغلاف أو أضف رابطًا جديدًا.' },
      profile_image: { title: 'الصورة الشخصية', help: 'غيّر الصورة الشخصية فورًا من المعرض أو عبر رابط.' },
      full_name: { title: 'الاسم الكامل', help: 'اكتب الاسم الذي تريد ظهوره على الكارد.' },
      job_title: { title: 'المسمى الوظيفي', help: 'غيّر المسمى الوظيفي ليعكس هويتك المهنية.' },
      company_name: { title: 'اسم الشركة', help: 'أضف اسم الشركة أو الجهة المرتبطة بك.' },
      location: { title: 'الموقع', help: 'أضف المدينة أو الدولة بشكل مختصر.' },
      short_bio: { title: 'نبذة قصيرة', help: 'اكتب سطرًا أو سطرين يعرّفان بك.' },
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
    eyebrow: 'Z PERSONAL', headline: 'Edit the card and make it yours',
    lead: 'Tap any element on the card to edit it, save the changes, and watch the template become your personal identity.',
    sub: 'Photo • Name • Title • Phone • WhatsApp • Company • Bio • Links • QR • Share', intro_note: 'One simple screen. One card. No long pages.',
    tap_to_edit: 'Tap to edit', verified: '✓ Verified', call: 'Call', whatsapp: 'WhatsApp', email: 'Email', save_contact: 'Save Contact', qr: 'QR Code', share: 'Share',
    chip_identity: 'Your Identity', chip_links: 'Your Links', chip_media: 'Your Media', chip_qr: 'QR Code', chip_share: 'Easy Sharing',
    download_eyebrow: 'App Download', download_headline: 'Keep your card in the Z Card app',
    download_text: 'Download the app and sign in with the same phone number used in the card. Your card will appear in your account after verification.',
    download_btn: 'Download Z Card App', download_note: 'The phone number you add here is the same number you will use to sign in inside the app.',
    save_changes_btn: 'Save Changes', save: 'Save', cancel: 'Cancel', upload_from_device: 'Upload from device', scan_to_open: 'Scan to open the card',
    native_share: 'Share', copy_link: 'Copy Link', share_headline: 'Share the card easily', share_text: 'Copy the link or use the device share sheet.',
    type_here: 'Type here...', write_bio: 'Write a short bio...',
    editor: {
      cover_image: { title: 'Cover Image', help: 'Replace the cover image or paste a new URL.' },
      profile_image: { title: 'Profile Image', help: 'Change the profile image from your device or by URL.' },
      full_name: { title: 'Full Name', help: 'Enter the name you want on the card.' },
      job_title: { title: 'Professional Title', help: 'Update the title to match your role.' },
      company_name: { title: 'Company Name', help: 'Add your company or organization.' },
      location: { title: 'Location', help: 'Add a city or country in a short format.' },
      short_bio: { title: 'Short Bio', help: 'Write one or two short lines about you.' },
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
let pendingImageField = '';

const el = {
  html: document.documentElement,
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
  linkRow: document.getElementById('linkRow'),
  editorModal: document.getElementById('editorModal'),
  editorForm: document.getElementById('editorForm'),
  editorLabel: document.getElementById('editorLabel'),
  editorTitle: document.getElementById('editorTitle'),
  editorHelp: document.getElementById('editorHelp'),
  editorInputGroup: document.getElementById('editorInputGroup'),
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
    if (key) node.textContent = t(key);
  });
}

function setTheme(theme) {
  state.theme = theme;
  el.html.dataset.theme = theme;
  el.themeToggle.textContent = theme === 'dark' ? '☾' : '☼';
  el.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
  persistState();
}

function normalizePhone(value) {
  return String(value || '').replace(/[^\d+]/g, '');
}

function sanitizeUrl(value) {
  const v = String(value || '').trim();
  if (!v) return '';
  if (/^https?:\/\//i.test(v) || /^mailto:/i.test(v) || /^tel:/i.test(v) || /^wa\.me/i.test(v)) return v;
  return `https://${v.replace(/^\/+/, '')}`;
}

function setText(node, value) {
  if (!node) return;
  const text = String(value || '').trim();
  node.textContent = text;
  node.classList.toggle('hidden', !text);
}

function setImage(node, src) {
  if (!node) return;
  node.src = src || defaultState.profile_image;
}

function setActionHref(btn, href) {
  if (!btn) return;
  btn.dataset.href = href || '';
  btn.classList.toggle('hidden', !href);
}

function renderSocials() {
  const socialFields = [
    ['linkedin', 'in'], ['instagram', 'ig'], ['facebook', 'f'], ['x', 'x'], ['youtube', 'yt'],
  ];
  const linkFields = [['website', 'web'], ['portfolio', '⌁']];

  el.socialRow.innerHTML = '';
  socialFields.forEach(([field, label]) => {
    const url = sanitizeUrl(state.social_links[field]);
    if (!url) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.title = url;
    b.dataset.edit = field;
    el.socialRow.appendChild(b);
  });

  el.linkRow.innerHTML = '';
  linkFields.forEach(([field, label]) => {
    const url = sanitizeUrl(state[field]);
    if (!url) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.title = url;
    b.dataset.edit = field;
    el.linkRow.appendChild(b);
  });
}

function updateStickyMini() {
  const compact = window.scrollY > 90;
  el.stickyMini.classList.toggle('show', compact);
  el.zCard.classList.toggle('compact', compact);
}

function updateDockState() {
  document.getElementById('dockCall').classList.toggle('hidden', !normalizePhone(state.phone_number));
  document.getElementById('dockWa').classList.toggle('hidden', !normalizePhone(state.whatsapp_number));
}

function makeQrUrl() {
  const url = `${location.origin}${location.pathname}?card=${encodeURIComponent(state.card_id)}`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=${encodeURIComponent(url)}`;
}

function renderQR() {
  el.qrImage.src = makeQrUrl();
}

function updateCard() {
  setImage(el.coverImage, state.cover_image);
  setImage(el.profileImage, state.profile_image);
  setImage(el.miniAvatar, state.profile_image);

  setText(el.nameField, state.full_name);
  setText(el.titleField, state.job_title);
  setText(el.companyField, state.company_name);
  setText(el.locationField, state.location);
  setText(el.bioField, state.short_bio);
  setText(el.statusBadge, state.status || t('tap_to_edit'));
  setText(el.miniName, state.full_name);
  setText(el.miniTitle, state.job_title);

  setActionHref(el.callBtn, `tel:${normalizePhone(state.phone_number)}`);
  setActionHref(el.waBtn, state.whatsapp_number ? `https://wa.me/${normalizePhone(state.whatsapp_number)}` : '');
  setActionHref(el.emailBtn, state.email ? `mailto:${state.email}` : '');

  renderSocials();
  renderQR();
  updateDockState();
  persistState();
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

function getFieldValue(field) {
  if (field in state) return state[field];
  if (state.social_links && field in state.social_links) return state.social_links[field];
  return '';
}

function openEditor(field) {
  activeField = field;
  pendingImageField = '';
  const info = copy[state.lang].editor[field] || { title: field, help: '' };
  const value = getFieldValue(field);
  const isImage = field === 'cover_image' || field === 'profile_image';
  const isBio = field === 'short_bio';
  const isQR = field === 'qr_code';
  const isSave = field === 'save_contact';

  el.editorLabel.textContent = t('eyebrow');
  el.editorTitle.textContent = info.title;
  el.editorHelp.textContent = info.help;
  el.imageUploadGroup.hidden = !isImage;
  el.secondaryInputGroup.hidden = !isImage;
  el.editorInputGroup.hidden = isImage || isBio || isQR || isSave;
  el.textareaGroup.hidden = !isBio;
  el.qrPreviewGroup.hidden = !isQR;

  el.editorInputLabel.textContent = info.title;
  el.editorInput.value = !isImage && !isBio && !isQR && !isSave ? value : '';
  el.editorInput.placeholder = t('type_here');
  el.editorInput.type = field === 'phone_number' || field === 'whatsapp_number' ? 'tel' : 'text';

  el.editorTextLabel.textContent = info.title;
  el.editorTextArea.value = isBio ? value : '';
  el.editorTextArea.placeholder = t('write_bio');

  el.secondaryInputLabel.textContent = isImage ? (state.lang === 'ar' ? 'رابط الصورة' : 'Image URL') : '';
  el.secondaryInput.value = isImage ? value : '';
  el.secondaryInput.placeholder = 'https://...';
  el.imageFile.value = '';
  el.qrImage.src = makeQrUrl();

  if (isSave) {
    el.editorTitle.textContent = state.lang === 'ar' ? 'حفظ جهة الاتصال' : 'Save Contact';
    el.editorHelp.textContent = state.lang === 'ar' ? 'يمكنك تنزيل بطاقة vCard من بياناتك الحالية.' : 'Download a vCard using your current data.';
  }
  if (isQR) {
    el.editorTitle.textContent = t('qr');
    el.editorHelp.textContent = t('editor').qr_code.help;
  }

  openModal(el.editorModal);
}

function downloadVCard() {
  const lines = [
    'BEGIN:VCARD', 'VERSION:3.0',
    `FN:${state.full_name}`, `TITLE:${state.job_title}`, `ORG:${state.company_name}`,
    `TEL;TYPE=CELL:${normalizePhone(state.phone_number)}`, `EMAIL:${state.email || ''}`, 'END:VCARD',
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${state.full_name || 'z-card'}.vcf`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  toast(state.lang === 'ar' ? 'تم تنزيل جهة الاتصال' : 'Contact file downloaded');
}

async function shareCurrentCard() {
  const shareUrl = `${location.origin}${location.pathname}?card=${encodeURIComponent(state.card_id)}`;
  const payload = { title: `${state.full_name} — Z Card`, text: state.lang === 'ar' ? 'تعرف على بطاقتي الرقمية على Z Card' : 'View my digital identity card on Z Card', url: shareUrl };
  try {
    if (navigator.share) return void await navigator.share(payload);
    await navigator.clipboard.writeText(shareUrl);
    toast(state.lang === 'ar' ? 'تم نسخ الرابط' : 'Link copied');
  } catch {
    toast(state.lang === 'ar' ? 'المشاركة غير متاحة الآن' : 'Sharing is unavailable');
  }
}

function saveEditorField(field) {
  if (field === 'save_contact' || field === 'qr_code') return;
  if (field === 'cover_image' || field === 'profile_image') {
    const urlValue = el.secondaryInput.value.trim();
    if (pendingImageField) state[field] = pendingImageField;
    if (urlValue) state[field] = urlValue;
  } else if (field === 'short_bio') {
    state[field] = el.editorTextArea.value.trim();
  } else if (field in state) {
    state[field] = el.editorInput.value.trim();
  } else {
    state.social_links[field] = el.editorInput.value.trim();
  }
  updateCard();
  toast(state.lang === 'ar' ? 'تم حفظ التعديل' : 'Changes saved');
}

function handleAction(action) {
  if (action === 'call') {
    const phone = normalizePhone(state.phone_number);
    if (phone) window.location.href = `tel:${phone}`; else openEditor('phone_number');
    return;
  }
  if (action === 'whatsapp') {
    const wa = normalizePhone(state.whatsapp_number || state.phone_number);
    if (wa) window.open(`https://wa.me/${wa}`, '_blank', 'noreferrer'); else openEditor('whatsapp_number');
    return;
  }
  if (action === 'share') {
    openModal(el.shareModal);
    return;
  }
  if (action === 'qr') openEditor('qr_code');
}

function bindEvents() {
  el.langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    applyLanguage(); updateCard(); persistState();
  });

  el.themeToggle.addEventListener('click', () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
    updateCard();
  });

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-edit], [data-action], [data-share], [data-qr], [data-close]');
    if (!target) return;
    const closeTarget = target.dataset.close;
    if (closeTarget) return void closeModal(document.getElementById(closeTarget));
    const action = target.dataset.action;
    if (action) return void handleAction(action);
    if (target.matches('[data-share]')) return void openModal(el.shareModal);
    if (target.matches('[data-qr]')) return void openEditor('qr_code');
    const field = target.dataset.edit;
    if (!field) return;
    if (field === 'save_contact') return void downloadVCard();
    openEditor(field);
  });

  el.editorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (activeField === 'save_contact' || activeField === 'qr_code') return;
    saveEditorField(activeField);
    closeModal(el.editorModal);
  });

  el.imageFile.addEventListener('change', () => {
    const file = el.imageFile.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingImageField = String(reader.result || '');
      if (activeField === 'cover_image') el.coverImage.src = pendingImageField;
      if (activeField === 'profile_image') el.profileImage.src = pendingImageField;
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
  document.querySelectorAll('.qa.edit-trigger').forEach((btn) => btn.addEventListener('click', () => openEditor(btn.dataset.edit)));

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
