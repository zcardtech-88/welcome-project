const state = {
  theme: localStorage.getItem('z-theme') || 'light',
  cardTheme: 'theme-white',
  data: {
    card_id: null,
    phone_number: '+966 50 000 0000',
    name: 'سارة الحربي',
    title: 'Senior Graphic Designer',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85',
    bio: 'مصممة جرافيك شغوفة ببناء هويات بصرية حديثة وأنظمة براند وتجارب رقمية بسيطة وأنيقة.',
    social_links: {
      whatsapp: '966500000000',
      instagram: 'instagram.com/sara',
      facebook: '',
      linkedin: 'linkedin.com/in/sara',
      website: 'sara.design',
      portfolio: 'behance.net/sara',
    },
    status: 'draft',
    created_at: null,
    updated_at: null,
  },
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const els = {
  nav: $('#nav'),
  themeToggle: $('#themeToggle'),
  stickyCta: $('#stickyCta'),
  cardForm: $('#cardForm'),
  previewStatus: $('#previewStatus'),
  previewImage: $('#previewImage'),
  previewName: $('#previewName'),
  previewTitle: $('#previewTitle'),
  previewCompany: $('#previewCompany'),
  previewBio: $('#previewBio'),
  previewSocialRow: $('#previewSocialRow'),
  heroSocialRow: $('#heroSocialRow'),
  liveCard: $('#liveCard'),
  successModal: $('#successModal'),
  qrModal: $('#qrModal'),
  qrSlot: $('#qrSlot'),
  toast: $('#toast'),
  profilePhoto: $('#profilePhoto'),
};

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('z-theme', theme);
  if (els.themeToggle) els.themeToggle.textContent = theme === 'dark' ? '☾' : '☼';
  if (els.themeToggle) els.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
}

function makeCardId() {
  return `z_${Math.random().toString(36).slice(2, 8)}_${Date.now().toString(36)}`;
}

function publicCardUrl() {
  const base = `${location.origin}${location.pathname}`;
  return `${base}?card=${state.data.card_id || 'demo'}`;
}

function cardModel() {
  return {
    card_id: state.data.card_id,
    phone_number: state.data.phone_number,
    name: state.data.name,
    title: state.data.title,
    bio: state.data.bio,
    photo: state.data.photo,
    social_links: state.data.social_links,
    portfolio: state.data.social_links.portfolio,
    theme: state.cardTheme,
    status: state.data.status,
    created_at: state.data.created_at,
    updated_at: state.data.updated_at,
  };
}

function applyPreviewAnimations() {
  [els.liveCard, $('#heroCard'), $('.builder-shell')].forEach((node) => {
    if (!node) return;
    node.setAttribute('data-animate', 'fade-up');
    requestAnimationFrame(() => node.removeAttribute('data-animate'));
  });
}

function sanitizeUrl(value) {
  const v = (value || '').trim();
  if (!v) return '';
  if (/^https?:\/\//i.test(v) || /^mailto:/i.test(v) || /^tel:/i.test(v) || /^wa\.me/i.test(v)) return v;
  return `https://${v.replace(/^\/+/, '')}`;
}

function socialDisplayList() {
  const links = state.data.social_links || {};
  return [
    { key: 'whatsapp', label: 'واتساب', href: links.whatsapp ? `https://wa.me/${links.whatsapp.replace(/\D/g, '')}` : '' },
    { key: 'linkedin', label: 'in', href: sanitizeUrl(links.linkedin) },
    { key: 'instagram', label: 'ig', href: sanitizeUrl(links.instagram) },
    { key: 'website', label: 'web', href: sanitizeUrl(links.website) },
    { key: 'portfolio', label: '⌁', href: sanitizeUrl(links.portfolio) },
  ].filter((item) => item.href);
}

function renderSocialRow(rowEl, compact = false) {
  if (!rowEl) return;
  const items = socialDisplayList();
  rowEl.innerHTML = '';
  if (!items.length) {
    rowEl.style.display = 'none';
    return;
  }
  rowEl.style.display = 'flex';
  items.forEach((item) => {
    const a = document.createElement('a');
    a.href = item.href;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.textContent = compact ? item.label : item.label;
    a.setAttribute('aria-label', item.label);
    rowEl.appendChild(a);
  });
}

function syncHeroLinks() {
  const links = state.data.social_links || {};
  const map = {
    tel: state.data.phone_number ? `tel:${state.data.phone_number.replace(/\s+/g, '')}` : '',
    whatsapp: links.whatsapp ? `https://wa.me/${links.whatsapp.replace(/\D/g, '')}` : '',
    email: 'mailto:sara@example.com',
  };
  document.querySelectorAll('[data-action-link]').forEach((node) => {
    const key = node.getAttribute('data-action-link');
    const href = map[key];
    if (!href) {
      node.setAttribute('hidden', 'hidden');
      return;
    }
    node.removeAttribute('hidden');
    node.setAttribute('href', href);
  });
}

function syncPreview() {
  if (els.previewName) els.previewName.textContent = state.data.name || '—';
  if (els.previewTitle) els.previewTitle.textContent = state.data.title || '—';
  if (els.previewCompany) els.previewCompany.textContent = 'Z Card Personal';
  if (els.previewBio) els.previewBio.textContent = state.data.bio || '—';
  if (els.previewImage && state.data.photo) els.previewImage.src = state.data.photo;

  if (els.heroSocialRow) renderSocialRow(els.heroSocialRow, true);
  if (els.previewSocialRow) renderSocialRow(els.previewSocialRow, true);
  syncHeroLinks();
  if (els.previewStatus) els.previewStatus.textContent = state.data.status === 'published' ? 'منشورة' : 'جاهز';

  if (els.liveCard) {
    els.liveCard.classList.remove('theme-white', 'theme-gold', 'theme-glass', 'theme-dark');
    els.liveCard.classList.add(state.cardTheme);
  }
  if ($('#heroCard')) {
    $('#heroCard').classList.remove('theme-white', 'theme-gold', 'theme-glass', 'theme-dark');
    $('#heroCard').classList.add(state.cardTheme);
  }
}

function setFieldValue(id, value) {
  const input = document.getElementById(id);
  if (!input) return;
  input.value = value || '';
}

function hydrateFormFromState() {
  setFieldValue('fullName', state.data.name);
  setFieldValue('jobTitle', state.data.title);
  setFieldValue('phone', state.data.phone_number);
  setFieldValue('profilePhoto', state.data.photo);
  setFieldValue('shortBio', state.data.bio);
  setFieldValue('whatsapp', state.data.social_links.whatsapp);
  setFieldValue('instagram', state.data.social_links.instagram);
  setFieldValue('facebook', state.data.social_links.facebook);
  setFieldValue('linkedin', state.data.social_links.linkedin);
  setFieldValue('website', state.data.social_links.website);
  setFieldValue('portfolio', state.data.social_links.portfolio);
}

function wireInputs() {
  const map = {
    fullName: 'name',
    jobTitle: 'title',
    phone: 'phone_number',
    profilePhoto: 'photo',
    shortBio: 'bio',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      state.data[key] = el.value;
      if (id === 'profilePhoto' && els.previewImage) els.previewImage.src = el.value || state.data.photo;
      syncPreview();
      saveDraft();
      if (els.previewStatus) els.previewStatus.textContent = 'جارٍ الحفظ';
    });
  });

  const socialMap = {
    whatsapp: 'whatsapp',
    instagram: 'instagram',
    facebook: 'facebook',
    linkedin: 'linkedin',
    website: 'website',
    portfolio: 'portfolio',
  };

  Object.entries(socialMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      state.data.social_links[key] = el.value;
      syncPreview();
      saveDraft();
      if (els.previewStatus) els.previewStatus.textContent = 'جارٍ الحفظ';
    });
  });

  if (els.profilePhoto) {
    els.profilePhoto.addEventListener('change', () => {
      state.data.photo = els.profilePhoto.value;
      syncPreview();
      saveDraft();
    });
  }
}

function bindThemeControls() {
  if (els.themeToggle) {
    els.themeToggle.addEventListener('click', () => {
      setTheme(state.theme === 'dark' ? 'light' : 'dark');
    });
  }

  $$('.swatch').forEach((button) => {
    button.addEventListener('click', () => {
      $$('.swatch').forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      state.cardTheme = button.dataset.cardTheme;
      syncPreview();
    });
  });
}

function bindTabs() {
  $$('.form-tabs button').forEach((button) => {
    button.addEventListener('click', () => {
      $$('.form-tabs button').forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      document.body.classList.toggle('preview-mode', button.dataset.tab === 'preview');
    });
  });
}

function makeQrMarkup(url) {
  const img = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=${encodeURIComponent(url)}`;
  return `
    <div class="qr-frame">
      <img src="${img}" alt="QR Code" width="240" height="240" loading="lazy" />
      <p>امسح لفتح البطاقة</p>
    </div>
  `;
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

function toast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(window.__zToast);
  window.__zToast = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast('تم نسخ الرابط');
  } catch {
    toast('النسخ غير متاح في هذا المتصفح');
  }
}

async function shareCard() {
  const url = publicCardUrl();
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${state.data.name} — Z Card`,
        text: 'تعرف على بطاقتي الرقمية على Z Card',
        url,
      });
    } catch {
      // cancelled
    }
  } else {
    await copyText(url);
  }
}

function renderCardSummary(target) {
  if (!target) return;
  target.innerHTML = `
    <div class="success-card-summary">
      <strong>${state.data.name || 'بطاقتك'}</strong>
      <span>${state.data.title || '—'}</span>
      <small>${state.data.phone_number || '—'}</small>
      <code>${publicCardUrl()}</code>
    </div>
  `;
}

function createCard(event) {
  event.preventDefault();
  if (!els.cardForm.reportValidity()) return;

  state.data.card_id = state.data.card_id || makeCardId();
  state.data.status = 'published';
  state.data.created_at = state.data.created_at || new Date().toISOString();
  state.data.updated_at = new Date().toISOString();

  saveDraft();
  syncPreview();
  renderCardSummary($('.modal-card-slot', els.successModal));
  openModal(els.successModal);
  toast('تم إنشاء البطاقة');
}

function saveDraft() {
  try {
    localStorage.setItem('z-personal-card', JSON.stringify(cardModel()));
  } catch {
    // ignore quota / private mode issues
  }
}

function loadDraft() {
  try {
    const raw = localStorage.getItem('z-personal-card');
    if (!raw) return;
    const saved = JSON.parse(raw);
    state.data = {
      ...state.data,
      ...saved,
      social_links: { ...state.data.social_links, ...(saved.social_links || {}) },
    };
    state.cardTheme = saved.theme || state.cardTheme;
  } catch {
    // ignore
  }
}

function bindActions() {
  document.addEventListener('click', async (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    const scrollTarget = event.target.closest('[data-scroll]')?.dataset.scroll;
    const closeTarget = event.target.closest('[data-close]')?.dataset.close;
    const demo = event.target.closest('[data-demo]')?.dataset.demo;

    if (scrollTarget) {
      const target = document.getElementById(scrollTarget);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (closeTarget) {
      closeModal(document.getElementById(closeTarget));
      return;
    }

    if (action === 'copy') {
      await copyText(publicCardUrl());
      return;
    }
    if (action === 'share') {
      await shareCard();
      return;
    }
    if (action === 'qr') {
      if (els.qrSlot) els.qrSlot.innerHTML = makeQrMarkup(publicCardUrl());
      openModal(els.qrModal);
      return;
    }

    if (demo) {
      toast(demo === 'call' ? 'فتح الاتصال' : demo === 'whatsapp' ? 'فتح واتساب' : demo === 'email' ? 'فتح البريد' : 'حفظ جهة الاتصال');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(els.successModal);
      closeModal(els.qrModal);
    }
  });
}

function bindStickyCta() {
  if (!els.stickyCta) return;
  els.stickyCta.addEventListener('click', () => {
    document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function bindScroll() {
  window.addEventListener('scroll', () => {
    if (els.nav) els.nav.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });
}

function init() {
  loadDraft();
  setTheme(state.theme);
  hydrateFormFromState();
  bindThemeControls();
  bindTabs();
  wireInputs();
  bindActions();
  bindStickyCta();
  bindScroll();

  if (els.cardForm) els.cardForm.addEventListener('submit', createCard);

  syncPreview();
  applyPreviewAnimations();
  window.ZCardAPI = {
    createCard: async (payload) => ({
      card_id: makeCardId(),
      status: 'published',
      ...payload,
    }),
    claimCardByPhone: async (phone_number) => ({
      phone_number,
      claimed: false,
    }),
  };
}

document.addEventListener('DOMContentLoaded', init);
