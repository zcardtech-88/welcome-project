const STORAGE_KEY = 'z-personal-card-final-state';
const THEME_KEY = 'z-personal-card-final-theme';
const LANG_KEY = 'z-personal-card-final-lang';

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
    eyebrow: 'Z PERSONAL',
    headline: 'بدّل بيانات الكارد ببياناتك',
    lead: 'اضغط على أي عنصر داخل الكارد لتعديله، ثم احفظ التغييرات وشاهد بطاقتك تتحول إلى هويتك الخاصة.',
    sub: 'صورة • اسم • وظيفة • هاتف • واتساب • شركة • نبذة • روابط • مشاركة',
    intro_note: 'واجهة واحدة بسيطة. كارد واحد فقط. لا صفحات طويلة.',
    badge_free: 'مجاني تمامًا',
    badge_analytics: 'تحليلات مدمجة',
    tap_to_edit: 'اضغط للتعديل',
    verified: '✓ موثق',
    call: 'اتصال',
    whatsapp: 'واتساب',
    email: 'إيميل',
    save_contact: 'حفظ جهة الاتصال',
    qr: 'QR Code',
    share: 'مشاركة',
    qr_headline: 'امسح لفتح البطاقة',
    qr_text: 'هذا رمز سريع لفتح البطاقة الحالية ومشاركتها.',
    chip_identity: 'معلوماتك',
    chip_links: 'روابطك',
    chip_media: 'صورك',
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
    type_here: 'اكتب هنا...',
    write_bio: 'اكتب نبذة قصيرة...',
    editor: {
      cover_image: { title: 'صورة الغلاف', help: 'استبدل صورة الغلاف من جهازك أو عبر رابط.' },
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
    },
    social_labels: {
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      facebook: 'Facebook',
      x: 'X',
      youtube: 'YouTube',
      website: 'Website',
      portfolio: 'Portfolio',
    },
    social_icons: {
      linkedin: 'in', instagram: 'ig', facebook: 'f', x: '𝕏', youtube: 'yt', website: 'web', portfolio: 'pf'
    }
  },
  en: {
    eyebrow: 'Z PERSONAL',
    headline: 'Edit the card and make it yours',
    lead: 'Tap any element on the card to edit it, save the changes, and watch the template become your personal identity.',
    sub: 'Photo • Name • Title • Phone • WhatsApp • Company • Bio • Links • Share',
    intro_note: 'One simple screen. One card. No long pages.',
    badge_free: 'Free to create',
    badge_analytics: 'Analytics included',
    tap_to_edit: 'Tap to edit',
    verified: '✓ Verified',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    save_contact: 'Save Contact',
    qr: 'QR Code',
    share: 'Share',
    qr_headline: 'Scan to open the card',
    qr_text: 'This quick code opens and shares the current card.',
    chip_identity: 'Your Identity',
    chip_links: 'Your Links',
    chip_media: 'Your Media',
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
    type_here: 'Type here...',
    write_bio: 'Write a short bio...',
    editor: {
      cover_image: { title: 'Cover Image', help: 'Replace the cover image from your device or via URL.' },
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
    },
    social_labels: {
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      facebook: 'Facebook',
      x: 'X',
      youtube: 'YouTube',
      website: 'Website',
      portfolio: 'Portfolio',
    },
    social_icons: {
      linkedin: 'in', instagram: 'ig', facebook: 'f', x: '𝕏', youtube: 'yt', website: 'web', portfolio: 'pf'
    }
  },
};

const state = loadState();
let activeField = '';
let lastScrollY = window.scrollY;

const el = {
  html: document.documentElement,
  langToggle: document.getElementById('langToggle'),
  themeToggle: document.getElementById('themeToggle'),
  dock: document.getElementById('dock'),
  zCard: document.getElementById('zCard'),
  stickyMini: document.getElementById('stickyMini'),
  coverImage: document.getElementById('coverImage'),
  profileImage: document.getElementById('profileImage'),
  miniAvatar: document.getElementById('miniAvatar'),
  miniName: document.getElementById('miniName'),
  miniTitle: document.getElementById('miniTitle'),
  nameField: document.getElementById('nameField'),
  titleField: document.getElementById('titleField'),
  companyField: document.getElementById('companyField'),
  locationField: document.getElementById('locationField'),
  bioField: document.getElementById('bioField'),
  statusBadge: document.getElementById('statusBadge'),
  socialRow: document.getElementById('socialRow'),
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
  imageUploadGroup: document.getElementById('imageUploadGroup'),
  imageFile: document.getElementById('imageFile'),
  shareModal: document.getElementById('shareModal'),
  qrModal: document.getElementById('qrModal'),
  qrImage: document.getElementById('qrImage'),
  nativeShareBtn: document.getElementById('nativeShareBtn'),
  copyLinkBtn: document.getElementById('copyLinkBtn'),
  toast: document.getElementById('toast'),
  intl: [...document.querySelectorAll('[data-i18n]')],
  placeholders: [...document.querySelectorAll('[data-i18n-placeholder]')],
};

const fieldMap = {
  cover_image: { kind: 'image' },
  profile_image: { kind: 'image' },
  full_name: { kind: 'text' },
  job_title: { kind: 'text' },
  company_name: { kind: 'text' },
  location: { kind: 'text' },
  short_bio: { kind: 'textarea' },
  phone_number: { kind: 'text' },
  whatsapp_number: { kind: 'text' },
  email: { kind: 'text' },
  website: { kind: 'text' },
  portfolio: { kind: 'text' },
  status: { kind: 'text' },
  linkedin: { kind: 'social' },
  instagram: { kind: 'social' },
  facebook: { kind: 'social' },
  x: { kind: 'social' },
  youtube: { kind: 'social' },
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

function setTheme() {
  el.html.dataset.theme = state.theme;
  el.themeToggle.textContent = state.theme === 'dark' ? '☾' : '☼';
  el.themeToggle.setAttribute('aria-label', state.theme === 'dark' ? 'Light mode' : 'Dark mode');
}

function setLang() {
  el.html.lang = state.lang === 'ar' ? 'ar' : 'en';
  el.html.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  el.langToggle.textContent = state.lang === 'ar' ? 'EN' : 'AR';
  el.langToggle.setAttribute('aria-label', state.lang === 'ar' ? 'Switch to English' : 'تبديل إلى العربية');

  el.intl.forEach((node) => {
    const key = node.dataset.i18n;
    if (key) node.textContent = t(key);
  });
  el.placeholders.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (key) node.placeholder = t(key);
  });

  el.editorInputLabel.textContent = '';
  el.editorTextLabel.textContent = '';
  el.editorLabel.textContent = state.lang === 'ar' ? 'تعديل مباشر' : 'Live edit';
}

function normalizePhone(value) {
  return String(value || '').replace(/[^\d+]/g, '');
}

function shareUrl() {
  return `${location.href.split('#')[0]}`;
}

function download(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add('show');
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => el.toast.classList.remove('show'), 1800);
}

function currentFieldValue(field) {
  if (field in state.social_links) return state.social_links[field] || '';
  return state[field] || '';
}

function setFieldValue(field, value) {
  if (field in state.social_links) state.social_links[field] = value.trim();
  else state[field] = value.trim();
}

function renderImages() {
  el.coverImage.src = state.cover_image || defaultState.cover_image;
  el.profileImage.src = state.profile_image || defaultState.profile_image;
  el.miniAvatar.src = state.profile_image || defaultState.profile_image;
}

function renderText() {
  el.nameField.textContent = state.full_name;
  el.titleField.textContent = `${state.job_title}`;
  el.companyField.textContent = state.company_name;
  el.locationField.textContent = `⌖ ${state.location}`;
  el.bioField.textContent = state.short_bio;
  el.miniName.textContent = state.full_name;
  el.miniTitle.textContent = state.job_title;
  el.statusBadge.textContent = state.status || (state.lang === 'ar' ? 'جاهز للتعديل' : 'Ready to edit');
}

function socialValueUrl(key) {
  const raw = currentFieldValue(key);
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) return raw;
  if (key === 'website' && raw) return `https://${raw.replace(/^\/+/, '')}`;
  if (key === 'portfolio' && raw) return `https://${raw.replace(/^\/+/, '')}`;
  if (key === 'x') return `https://x.com/${raw.replace(/^@/, '')}`;
  return raw;
}

function renderSocials() {
  const order = ['linkedin', 'instagram', 'facebook', 'x', 'youtube', 'website', 'portfolio'];
  el.socialRow.innerHTML = '';
  order.forEach((key) => {
    const value = currentFieldValue(key);
    if (!value) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'edit-trigger';
    btn.dataset.edit = key;
    btn.innerHTML = `<span class="mark">${copy[state.lang].social_icons[key]}</span><span class="label">${copy[state.lang].social_labels[key]}</span>`;
    el.socialRow.appendChild(btn);
  });
}

function renderCard() {
  renderImages();
  renderText();
  renderSocials();
  document.title = `${state.full_name} — Z Personal`;
}

function openModal(modal) { modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false'); }
function closeModal(modal) { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); }

function openEditor(field) {
  activeField = field;
  const config = copy[state.lang].editor[field] || { title: field, help: '' };
  el.editorTitle.textContent = config.title;
  el.editorHelp.textContent = config.help;
  el.editorInputGroup.hidden = fieldMap[field]?.kind === 'image' || fieldMap[field]?.kind === 'textarea';
  el.textareaGroup.hidden = fieldMap[field]?.kind !== 'textarea';
  el.imageUploadGroup.hidden = fieldMap[field]?.kind !== 'image';
  el.editorInputLabel.textContent = config.title;
  el.editorTextLabel.textContent = config.title;
  el.editorInput.value = fieldMap[field]?.kind === 'image' ? '' : currentFieldValue(field);
  el.editorTextArea.value = fieldMap[field]?.kind === 'textarea' ? currentFieldValue(field) : '';
  el.imageFile.value = '';
  openModal(el.editorModal);
}

function openQr() {
  el.qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=${encodeURIComponent(shareUrl())}`;
  openModal(el.qrModal);
}

function saveContact() {
  const phone = normalizePhone(state.phone_number);
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${state.full_name}`,
    `TITLE:${state.job_title}`,
    `ORG:${state.company_name}`,
    `TEL;TYPE=CELL:${phone}`,
    state.email ? `EMAIL:${state.email}` : '',
    `NOTE:${state.short_bio}`,
    'END:VCARD',
  ].filter(Boolean);
  const blob = new Blob([lines.join('\r\n')], { type: 'text/vcard;charset=utf-8' });
  download(URL.createObjectURL(blob), `${state.full_name || 'z-card'}.vcf`);
  showToast(state.lang === 'ar' ? 'تم حفظ جهة الاتصال' : 'Contact saved');
}

async function doShare() {
  const url = shareUrl();
  const data = {
    title: state.full_name || 'Z Personal',
    text: state.lang === 'ar' ? 'تفضل بطاقة Z الشخصية' : 'Here is my Z Personal card',
    url,
  };
  try {
    if (navigator.share) {
      await navigator.share(data);
      showToast(state.lang === 'ar' ? 'تمت المشاركة' : 'Shared');
      return;
    }
  } catch {}
  await navigator.clipboard.writeText(url);
  showToast(state.lang === 'ar' ? 'تم نسخ الرابط' : 'Link copied');
}

function scrollBehavior() {
  const currentY = window.scrollY;
  const goingDown = currentY > lastScrollY;
  lastScrollY = currentY;
  el.stickyMini.classList.toggle('show', currentY > 70);
  el.zCard.classList.toggle('compact', currentY > 70);
  if (currentY < 120) {
    el.dock.classList.remove('hide');
  } else if (goingDown && currentY > 150) {
    el.dock.classList.add('hide');
  } else if (!goingDown) {
    el.dock.classList.remove('hide');
  }
}

function bindStaticActions() {
  document.addEventListener('click', (event) => {
    const edit = event.target.closest('[data-edit]');
    if (edit) {
      event.preventDefault();
      openEditor(edit.dataset.edit);
      return;
    }
    const action = event.target.closest('[data-action]');
    if (!action) return;
    const what = action.dataset.action;
    if (what === 'call') {
      location.href = `tel:${normalizePhone(state.phone_number)}`;
    } else if (what === 'whatsapp') {
      location.href = `https://wa.me/${normalizePhone(state.whatsapp_number || state.phone_number)}`;
    } else if (what === 'save_contact') {
      saveContact();
    } else if (what === 'share') {
      openModal(el.shareModal);
    } else if (what === 'qr') {
      openQr();
    }
  });

  document.querySelectorAll('[data-share]').forEach((btn) => btn.addEventListener('click', () => openModal(el.shareModal)));
  document.querySelectorAll('[data-qr]').forEach((btn) => btn.addEventListener('click', openQr));

  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(document.getElementById(btn.dataset.close)));
  });

  el.langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    persistState();
    setLang();
    renderCard();
    showToast(state.lang === 'ar' ? 'تم تغيير اللغة' : 'Language updated');
  });

  el.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    persistState();
    setTheme();
    showToast(state.lang === 'ar' ? 'تم تغيير المظهر' : 'Theme updated');
  });

  el.nativeShareBtn.addEventListener('click', doShare);
  el.copyLinkBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(shareUrl());
    showToast(state.lang === 'ar' ? 'تم نسخ الرابط' : 'Link copied');
  });

  el.editorForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!activeField) return;
    const kind = fieldMap[activeField]?.kind || 'text';
    if (kind === 'image') return;
    const value = kind === 'textarea' ? el.editorTextArea.value : el.editorInput.value;
    setFieldValue(activeField, value);
    persistState();
    renderCard();
    closeModal(el.editorModal);
    showToast(state.lang === 'ar' ? 'تم الحفظ' : 'Saved');
  });

  el.imageFile.addEventListener('change', () => {
    if (!activeField || fieldMap[activeField]?.kind !== 'image') return;
    const file = el.imageFile.files && el.imageFile.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFieldValue(activeField, String(reader.result || ''));
      persistState();
      renderCard();
      closeModal(el.editorModal);
      showToast(state.lang === 'ar' ? 'تم تحديث الصورة' : 'Image updated');
    };
    reader.readAsDataURL(file);
  });

  window.addEventListener('scroll', scrollBehavior, { passive: true });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(el.editorModal);
      closeModal(el.shareModal);
      closeModal(el.qrModal);
    }
  });
}

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

setTheme();
setLang();
renderCard();
bindStaticActions();
scrollBehavior();
persistState();
