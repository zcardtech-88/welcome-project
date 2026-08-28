const ICONS = {
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.5 14.4L2 22l5.8-1.4A9.7 9.7 0 1 0 12 2Zm0 17.6a7.8 7.8 0 0 1-4-1.1l-.3-.2-3.4.8.9-3.3-.2-.3A7.8 7.8 0 1 1 12 19.6Zm4.4-5.7c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.7.8-.9 1-.3.1-.6 0a6.3 6.3 0 0 1-1.8-1.1 7 7 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.4-.5.1-.4a.7.7 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.2-.9.8-.9 2s.9 2.4 1 2.6 1.7 2.8 4.1 3.8c.6.3 1.1.4 1.5.5.6.2 1.1.1 1.5 0 .5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1c-.1-.1-.3-.2-.5-.3Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  save: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18m-6-6 6 6 6-6M5 5h14" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  share: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 8a3 3 0 1 0-2.8-4H12a3 3 0 0 0 0 6 3 3 0 0 0 1.5-.4l-4.2 3A3 3 0 0 0 6 12a3 3 0 1 0 1.2 5.8l4.2 3A3 3 0 1 0 12 18a3 3 0 0 0-1.5.4l-4.2-3A3 3 0 0 0 6 12a3 3 0 0 0 1.5-.4l4.2-3A3 3 0 0 0 12 12a3 3 0 0 0 3-3Z"/></svg>`,
  qr: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h7v7H3V3Zm1.8 1.8v3.4h3.4V4.8H4.8ZM14 3h7v7h-7V3Zm1.8 1.8v3.4h3.4V4.8h-3.4ZM3 14h7v7H3v-7Zm1.8 1.8v3.4h3.4v-3.4H4.8Zm9.2-1.8h1.8v1.8H14V14Zm1.8 1.8h1.8v1.8h-1.8v-1.8ZM14 18.2h1.8V20H14v-1.8Zm3.6-3.6h1.8v1.8h-1.8v-1.8ZM18.2 14H20v1.8h-1.8V14Zm0 3.6H20v1.8h-1.8v-1.8ZM14 9.8h1.8v1.8H14V9.8Zm3.6 0h1.8v1.8h-1.8V9.8Z"/></svg>`,
  play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7.5v9l7.5-4.5L9 7.5Z"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  about: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11v6m0-9h.01M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  services: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h6v6H4V7Zm10 0h6v4h-6V7ZM4 15h6v2H4v-2Zm10-2h6v4h-6v-4Z"/></svg>`,
  achievements: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.3 4.7 5.2.8-3.7 3.6.9 5.2L12 15.8 7.3 17.3l.9-5.2-3.7-3.6 5.2-.8L12 3Z"/></svg>`,
  gallery: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4V5Zm2 2v8l3-3 2 2 3-4 4 5V7H6Z"/></svg>`,
  video: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4Zm16 2 1-1v10l-1-1-4-3.5V11.5L21 8Z"/></svg>`,
  social: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-8 2.1-8 4.7V20h16v-.3c0-2.6-3.6-4.7-8-4.7Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5H3V21h3.5V8.5Zm-1.8-4A2 2 0 1 0 4.7 8a2 2 0 0 0 0-3.5ZM21 21h-3.5v-6.2c0-1.5-.1-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.5V8.5H13v1.7h.1c.5-1 1.7-2.1 3.6-2.1 3.8 0 4.3 2.5 4.3 5.7V21Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm6-1.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5H16V5a20 20 0 0 0-2.1-.1c-2.2 0-3.7 1.3-3.7 3.7V11H8v3h2.1v7h3.4Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4.2l4.1 5.6L16.8 4H20l-5.8 7.9L20 20h-4.2l-4.3-5.9L7 20H4l6-8.1L4 4Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2a2.5 2.5 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 3 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C6.4 18 12 18 12 18s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 21 12a26 26 0 0 0-.4-3.8ZM10 15.2V8.8l5.8 3.2L10 15.2Z"/></svg>`
};

const DEMO = {
  en: {
    hero: {
      cover_image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
      profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
      full_name: "Zahd Ashour",
      professional_title: "Entrepreneur & Founder",
      company_name: "Z Card",
      location: "Cairo, Egypt",
      short_bio: "Building premium digital experiences powered by AI."
    },
    contact: {
      phone_number: "+20 100 123 4567",
      whatsapp: "+20 100 123 4567",
      email: "zahd@zcard.tech",
      save_contact: true
    },
    about: {
      experience_years: "8 Years",
      languages: ["English", "Arabic"],
      about_description: "I design and build premium digital products that feel simple, elegant and valuable from the very first touch."
    },
    services: [
      { name: "AI Product Strategy", description: "From idea to a clear product direction.", icon: "services" },
      { name: "Luxury UI Design", description: "Minimal, premium interfaces with strong hierarchy.", icon: "services" },
      { name: "Digital Identity Systems", description: "Smart profile experiences for modern professionals.", icon: "services" },
      { name: "Growth Concepts", description: "Product-led funnels for social sharing.", icon: "services" }
    ],
    achievements: [
      { year: "2024", title: "Behance Featured", description: "Premium identity concept recognized for presentation and clarity." },
      { year: "2023", title: "10K+ Shares", description: "A digital identity flow optimized for organic distribution." },
      { year: "2022", title: "AI Builder Launch", description: "Launched a fast card-creation flow for mobile users." }
    ],
    gallery_images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85"
    ],
    video_title: "Z Card Personal — overview",
    video_url: "https://example.com/zcard-video",
    video_thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85",
    social_links: {
      linkedin: "https://linkedin.com/in/zahdashour",
      instagram: "https://instagram.com/zcard.tech",
      facebook: "https://facebook.com/zcard.tech",
      x: "https://x.com/zcardtech",
      youtube: "https://youtube.com/@zcardtech"
    },
    share_url: ""
  },
  ar: {
    hero: {
      cover_image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85",
      profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
      full_name: "زاهد عاشور",
      professional_title: "ريادي ومؤسس",
      company_name: "زد كارد",
      location: "القاهرة، مصر",
      short_bio: "أبني تجارب رقمية فاخرة مدعومة بالذكاء الاصطناعي."
    },
    contact: {
      phone_number: "+20 100 123 4567",
      whatsapp: "+20 100 123 4567",
      email: "zahd@zcard.tech",
      save_contact: true
    },
    about: {
      experience_years: "8 سنوات",
      languages: ["العربية", "الإنجليزية"],
      about_description: "أصمم وأبني منتجات رقمية راقية تبدو بسيطة وأنيقة وذات قيمة منذ اللمسة الأولى."
    },
    services: [
      { name: "استراتيجية منتجات بالذكاء الاصطناعي", description: "من الفكرة إلى اتجاه واضح للمنتج.", icon: "services" },
      { name: "تصميم واجهات فاخرة", description: "واجهات Minimal مع هرمية بصرية قوية.", icon: "services" },
      { name: "أنظمة هوية رقمية", description: "تجارب ملف شخصي ذكية للمحترفين الحديثين.", icon: "services" },
      { name: "أفكار نمو", description: "مسارات منتجية قابلة للمشاركة عبر السوشيال.", icon: "services" }
    ],
    achievements: [
      { year: "2024", title: "ظهور على Behance", description: "تميز في العرض والوضوح البصري لهوية رقمية فاخرة." },
      { year: "2023", title: "أكثر من 10 آلاف مشاركة", description: "تدفق كارد رقمي مصمم للانتشار العضوي." },
      { year: "2022", title: "إطلاق Builder ذكي", description: "تجربة إنشاء سريعة مخصصة لمستخدمي الهاتف." }
    ],
    gallery_images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85"
    ],
    video_title: "زد كارد شخصي — نظرة عامة",
    video_url: "https://example.com/zcard-video",
    video_thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85",
    social_links: {
      linkedin: "https://linkedin.com/in/zahdashour",
      instagram: "https://instagram.com/zcard.tech",
      facebook: "https://facebook.com/zcard.tech",
      x: "https://x.com/zcardtech",
      youtube: "https://youtube.com/@zcardtech"
    },
    share_url: ""
  }
};

const state = {
  lang: localStorage.getItem("zcard-personal-lang") || "en",
  theme: localStorage.getItem("zcard-personal-theme") || "light",
  data: null
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const els = {
  heroMount: $("#heroMount"),
  actionsMount: $("#actionsMount"),
  accordionMount: $("#accordionMount"),
  compactHeader: $("#compactHeader"),
  themeToggle: $("#themeToggle"),
  langToggle: $("#langToggle"),
  dock: $("#dock"),
  modal: $("#modal"),
  toast: $("#toast")
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
const hasText = (value) => value !== null && value !== undefined && String(value).trim() !== "";
const lines = (...vals) => vals.filter(hasText).join(" • ");
const text = (v) => (hasText(v) ? String(v) : "");
const safeTel = (v) => text(v).replace(/[^\d+]/g, "");
const safeUrl = (v) => {
  const s = text(v).trim();
  if (!s) return "";
  return /^(https?:|mailto:|tel:|wa\.me)/i.test(s) ? s : `https://${s.replace(/^\/+/, "")}`;
};
const shareUrl = () => `${location.origin}${location.pathname}?card=z-personal&lang=${state.lang}`;

function icon(name) { return ICONS[name] || ICONS.social; }

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("zcard-personal-theme", theme);
  if (els.themeToggle) els.themeToggle.textContent = theme === "dark" ? "☾" : "☼";
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("zcard-personal-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  if (els.langToggle) els.langToggle.textContent = lang === "en" ? "AR" : "EN";
  state.data = deepClone(DEMO[lang]);
  state.data.share_url = shareUrl();
  renderAll();
}

function toast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(window.__zToast);
  window.__zToast = setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function buildVCard(d) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${d.hero.full_name}`,
    `ORG:${d.hero.company_name}`,
    `TITLE:${d.hero.professional_title}`,
    `TEL;TYPE=CELL:${safeTel(d.contact.phone_number)}`,
    `EMAIL:${d.contact.email}`,
    `URL:${d.share_url}`,
    "END:VCARD"
  ].join("\r\n");
}

function downloadContact() {
  const blob = new Blob([buildVCard(state.data)], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${state.data.hero.full_name.replace(/\s+/g, "-").toLowerCase()}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
  toast(state.lang === "ar" ? "تم حفظ جهة الاتصال" : "Contact saved");
}

function renderHero() {
  const h = state.data.hero;
  els.heroMount.innerHTML = `
    <div class="hero-cover">
      <img src="${h.cover_image}" alt="${h.full_name} cover" loading="eager" />
      <div class="hero-overlay"></div>
      <div class="hero-brand"><span>Z</span>${state.lang === "ar" ? "هويّة رقمية" : "DIGITAL ID"}</div>
    </div>
    <div class="profile-block">
      <img class="profile-avatar" src="${h.profile_image}" alt="${h.full_name} profile" loading="eager" />
      <div class="hero-meta">
        <h1 class="hero-name">${h.full_name}</h1>
        <p class="hero-title">${h.professional_title}</p>
        <div class="hero-company">${icon("social")} ${h.company_name}</div>
        <p class="hero-location">${h.location}</p>
        <p class="hero-bio">${h.short_bio}</p>
      </div>
    </div>
  `;

  els.compactHeader.innerHTML = `
    <div class="compact-left">
      <img class="compact-avatar" src="${h.profile_image}" alt="${h.full_name}" loading="lazy" />
      <div class="compact-copy">
        <span class="compact-name">${h.full_name}</span>
        <span class="compact-title">${h.professional_title}</span>
      </div>
    </div>
    <div class="compact-actions">
      <button class="compact-btn" type="button" data-action="share" aria-label="Share">${icon("share")}</button>
      <button class="compact-btn" type="button" data-action="qr" aria-label="QR">${icon("qr")}</button>
    </div>
  `;
}

function actionButton(label, kind, href, handler) {
  const link = href ? `<a class="action-btn" href="${href}" ${kind === "whatsapp" || kind === "share" ? "target='_blank' rel='noreferrer'" : ""}>${icon(kind)}<span>${label}</span></a>` : `<button class="action-btn" type="button" data-action="${kind}">${icon(kind)}<span>${label}</span></button>`;
  return link;
}

function renderActions() {
  const c = state.data.contact;
  els.actionsMount.innerHTML = `
    ${actionButton(state.lang === "ar" ? "اتصال" : "Call", "phone", `tel:${safeTel(c.phone_number)}`)}
    ${actionButton("WhatsApp", "whatsapp", `https://wa.me/${safeTel(c.whatsapp).replace(/\+/g, "")}`)}
    ${actionButton(state.lang === "ar" ? "إيميل" : "Email", "mail", `mailto:${c.email}`)}
    ${actionButton(state.lang === "ar" ? "حفظ" : "Save", "save")}
  `;
}

function aboutSummary() {
  const a = state.data.about;
  return lines(a.experience_years, a.languages.slice(0, 2).join(", "), a.about_description);
}

function renderServices(list) {
  const items = list.slice(0, 3).map((s, i) => `
    <article class="service-card">
      <div class="svc-icon">${icon(s.icon || "services")}</div>
      <h4>${s.name}</h4>
      <p>${s.description}</p>
    </article>
  `).join("");
  const hasMore = list.length > 3;
  return `
    <details class="accordion">
      <summary>
        <div class="summary-left">
          <div class="section-icon">${icon("services")}</div>
          <div class="summary-copy"><span class="section-title">${state.lang === "ar" ? "الخدمات" : "Services"}</span><span class="section-preview">${list.slice(0, 2).map((x) => x.name).join(" · ")}</span></div>
        </div>
        <span class="chev">${icon("chevron")}</span>
      </summary>
      <div class="section-body">
        <div class="h-scroll">${items}</div>
        ${hasMore ? `<div style="margin-top:10px;display:flex;justify-content:flex-end;"><button class="view-all-btn" type="button" data-action="view-services">${state.lang === "ar" ? "عرض الكل" : "View All"}</button></div>` : ""}
      </div>
    </details>
  `;
}

function renderAchievements(list) {
  const items = list.map((a) => `
    <article class="achievement-card">
      <div class="ach-year">${a.year}</div>
      <div class="ach-line">
        <div class="ach-title">${a.title}</div>
        <p>${a.description}</p>
      </div>
    </article>
  `).join("");
  return `
    <details class="accordion">
      <summary>
        <div class="summary-left">
          <div class="section-icon">${icon("achievements")}</div>
          <div class="summary-copy"><span class="section-title">${state.lang === "ar" ? "الإنجازات" : "Achievements"}</span><span class="section-preview">${list.slice(0, 2).map((x) => x.title).join(" · ")}</span></div>
        </div>
        <span class="chev">${icon("chevron")}</span>
      </summary>
      <div class="section-body">
        <div class="h-scroll" style="flex-direction:column;scroll-snap-type:none">${items}</div>
      </div>
    </details>
  `;
}

function renderGallery(images) {
  const items = images.map((src, i) => `
    <article class="gallery-card">
      <img src="${src}" alt="Gallery ${i + 1}" loading="lazy" />
      <div class="cap">${state.lang === "ar" ? "صورة" : "Image"} ${i + 1}</div>
    </article>
  `).join("");
  return `
    <details class="accordion">
      <summary>
        <div class="summary-left">
          <div class="section-icon">${icon("gallery")}</div>
          <div class="summary-copy"><span class="section-title">${state.lang === "ar" ? "المعرض" : "Gallery"}</span><span class="section-preview">Swipe to browse images</span></div>
        </div>
        <span class="chev">${icon("chevron")}</span>
      </summary>
      <div class="section-body"><div class="h-scroll">${items}</div></div>
    </details>
  `;
}

function renderVideo(video) {
  return `
    <details class="accordion">
      <summary>
        <div class="summary-left">
          <div class="section-icon">${icon("video")}</div>
          <div class="summary-copy"><span class="section-title">${state.lang === "ar" ? "فيديو مميز" : "Featured Video"}</span><span class="section-preview">${video.title}</span></div>
        </div>
        <span class="chev">${icon("chevron")}</span>
      </summary>
      <div class="section-body">
        <article class="video-card">
          <div class="video-thumb">
            <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" />
            <button class="play-btn" type="button" data-action="video">${icon("play")}</button>
          </div>
          <div class="video-copy">
            <div class="video-title">${video.title}</div>
            <p>${state.lang === "ar" ? "اضغط تشغيل لعرض الفيديو" : "Tap play to open the video"}</p>
          </div>
        </article>
      </div>
    </details>
  `;
}

function renderSocial() {
  const links = state.data.social_links || {};
  const items = [
    ["linkedin", links.linkedin], ["instagram", links.instagram], ["facebook", links.facebook], ["x", links.x], ["youtube", links.youtube]
  ].filter(([, href]) => hasText(href));
  if (!items.length) return "";
  const cards = items.map(([key, href]) => `
    <article class="presence-card"><a href="${safeUrl(href)}" target="_blank" rel="noreferrer" aria-label="${key}">${icon(key)}</a></article>
  `).join("");
  return `
    <details class="accordion">
      <summary>
        <div class="summary-left">
          <div class="section-icon">${icon("social")}</div>
          <div class="summary-copy"><span class="section-title">${state.lang === "ar" ? "الحضور الرقمي" : "Digital Presence"}</span><span class="section-preview">${items.map(([k]) => k).join(" · ")}</span></div>
        </div>
        <span class="chev">${icon("chevron")}</span>
      </summary>
      <div class="section-body"><div class="presence-grid">${cards}</div></div>
    </details>
  `;
}

function renderAbout() {
  const a = state.data.about;
  return `
    <details class="accordion">
      <summary>
        <div class="summary-left">
          <div class="section-icon">${icon("about")}</div>
          <div class="summary-copy"><span class="section-title">${state.lang === "ar" ? "نبذة" : "About"}</span><span class="section-preview">${aboutSummary()}</span></div>
        </div>
        <span class="chev">${icon("chevron")}</span>
      </summary>
      <div class="section-body">
        <div class="muted">${a.about_description}</div>
        <div class="about-grid">
          <div class="stat-card"><b>${state.lang === "ar" ? "الخبرة" : "Experience"}</b><span>${a.experience_years}</span></div>
          <div class="stat-card"><b>${state.lang === "ar" ? "اللغات" : "Languages"}</b><span>${a.languages.join(", ")}</span></div>
        </div>
        <div class="chips">${a.languages.map((l) => `<span class="chip">${l}</span>`).join("")}</div>
      </div>
    </details>
  `;
}

function renderAll() {
  const d = state.data;
  renderHero();
  renderActions();

  const sections = [];
  if (d.about && hasText(d.about.about_description)) sections.push(renderAbout());
  if (d.services && d.services.length) sections.push(renderServices(d.services));
  if (d.achievements && d.achievements.length) sections.push(renderAchievements(d.achievements));
  if (d.gallery_images && d.gallery_images.length) sections.push(renderGallery(d.gallery_images));
  if (d.video_url && d.video_thumbnail) sections.push(renderVideo(d));
  if (d.social_links && Object.values(d.social_links).some(hasText)) sections.push(renderSocial());

  els.accordionMount.innerHTML = sections.join("");

  els.dock.innerHTML = `
    <button class="dock-btn" type="button" data-action="call">${icon("phone")}<span>${state.lang === "ar" ? "اتصال" : "Call"}</span></button>
    <button class="dock-btn" type="button" data-action="whatsapp">${icon("whatsapp")}<span>WhatsApp</span></button>
    <button class="dock-btn" type="button" data-action="share">${icon("share")}<span>${state.lang === "ar" ? "مشاركة" : "Share"}</span></button>
    <button class="dock-btn" type="button" data-action="qr">${icon("qr")}<span>QR</span></button>
  `;

  if (els.langToggle) els.langToggle.textContent = state.lang === "en" ? "AR" : "EN";
  if (els.themeToggle) els.themeToggle.textContent = state.theme === "dark" ? "☾" : "☼";
}

function openModal(title, body) {
  els.modal.innerHTML = `
    <div class="modal-inner">
      <div class="modal-head">
        <div>
          <p class="modal-title">${title}</p>
        </div>
        <button class="modal-close" type="button" data-close="modal">×</button>
      </div>
      <div class="modal-body">${body}</div>
    </div>
  `;
  els.modal.showModal();
}

function shareSheet() {
  const url = shareUrl();
  const title = state.lang === "ar" ? "شارك البطاقة" : "Share card";
  openModal(title, `
    <p class="muted">${state.lang === "ar" ? "شارك رابط البطاقة أو انسخه أو أرسله عبر واتساب." : "Share, copy, or open your card link instantly."}</p>
    <div class="link-list">
      <button class="link-chip" type="button" data-action="native-share"><b>Native Share</b><span>Web Share API</span></button>
      <button class="link-chip" type="button" data-action="copy-link"><b>Copy Link</b><span>${url}</span></button>
      <a class="link-chip" href="https://wa.me/?text=${encodeURIComponent(url)}" target="_blank" rel="noreferrer"><b>WhatsApp</b><span>Share to chat</span></a>
    </div>
  `);
}

function qrSheet() {
  const url = shareUrl();
  openModal(state.lang === "ar" ? "رمز QR" : "QR Code", `
    <p class="muted">${state.lang === "ar" ? "امسح الرمز لفتح بطاقة Z." : "Scan to open the Z Card template."}</p>
    <div class="link-list" style="justify-items:center">
      <div style="padding:12px;border-radius:22px;background:var(--bg-2);border:1px solid var(--line)"><img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=1&data=${encodeURIComponent(url)}" alt="QR Code" width="220" height="220" style="border-radius:16px;background:#fff;padding:8px" /></div>
      <button class="link-chip" type="button" data-action="copy-link"><b>Copy Link</b><span>${url}</span></button>
    </div>
  `);
}

function servicesSheet() {
  const items = state.data.services.map((s) => `<article class="service-card" style="width:100%;display:grid;grid-template-columns:34px 1fr;gap:10px"><div class="svc-icon">${icon(s.icon)}</div><div><h4>${s.name}</h4><p>${s.description}</p></div></article>`).join("");
  openModal(state.lang === "ar" ? "كل الخدمات" : "All services", `<div class="link-list">${items}</div>`);
}

function videoSheet() {
  const v = state.data;
  openModal(state.lang === "ar" ? "فيديو مميز" : "Featured video", `
    <p class="muted">${v.video_title}</p>
    <div class="link-list">
      <div style="border-radius:22px;overflow:hidden;border:1px solid var(--line)"><img src="${v.video_thumbnail}" alt="${v.video_title}" style="width:100%;aspect-ratio:16/10;object-fit:cover" /></div>
      <a class="link-chip" href="${safeUrl(v.video_url)}" target="_blank" rel="noreferrer"><b>${state.lang === "ar" ? "فتح الفيديو" : "Open video"}</b><span>${v.video_url}</span></a>
    </div>
  `);
}

function bindEvents() {
  els.themeToggle?.addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  els.langToggle?.addEventListener("click", () => setLanguage(state.lang === "en" ? "ar" : "en"));

  document.addEventListener("click", async (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) return;
    if (action === "save") return downloadContact();
    if (action === "share") return navigator.share ? navigator.share({ title: state.data.hero.full_name, text: state.data.hero.short_bio, url: shareUrl() }).catch(() => shareSheet()) : shareSheet();
    if (action === "qr") return qrSheet();
    if (action === "view-services") return servicesSheet();
    if (action === "video") return videoSheet();
    if (action === "native-share") return navigator.share ? navigator.share({ title: state.data.hero.full_name, text: state.data.hero.short_bio, url: shareUrl() }).catch(() => toast(state.lang === "ar" ? "المشاركة غير متاحة" : "Share unavailable")) : toast(state.lang === "ar" ? "المشاركة غير متاحة" : "Share unavailable");
    if (action === "copy-link") return copyLink();
    if (action === "call") return window.location.href = `tel:${safeTel(state.data.contact.phone_number)}`;
    if (action === "whatsapp") return window.open(`https://wa.me/${safeTel(state.data.contact.whatsapp).replace(/\+/g, "")}`, "_blank", "noreferrer");
  });

  els.modal.addEventListener("click", (event) => {
    if (event.target === els.modal || event.target.closest("[data-close='modal']")) els.modal.close();
  });

  window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 34);
  }, { passive: true });

  els.dock.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "call") return window.location.href = `tel:${safeTel(state.data.contact.phone_number)}`;
    if (action === "whatsapp") return window.open(`https://wa.me/${safeTel(state.data.contact.whatsapp).replace(/\+/g, "")}`, "_blank", "noreferrer");
    if (action === "share") return shareSheet();
    if (action === "qr") return qrSheet();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && els.modal.open) els.modal.close();
  });
}

function copyLink() {
  const url = shareUrl();
  navigator.clipboard?.writeText(url).then(() => toast(state.lang === "ar" ? "تم نسخ الرابط" : "Link copied")).catch(() => toast(state.lang === "ar" ? "النسخ غير متاح" : "Copy unavailable"));
}

function init() {
  setTheme(state.theme);
  setLanguage(state.lang);
  bindEvents();
  renderAll();
}

document.addEventListener("DOMContentLoaded", init);

window.ZCardPersonalTemplate = {
  getData: () => deepClone(state.data),
  setData: (next) => {
    state.data = { ...deepClone(state.data), ...deepClone(next) };
    renderAll();
  },
  setLanguage,
  setTheme,
  render: renderAll
};