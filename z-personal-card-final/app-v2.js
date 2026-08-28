const STORAGE_KEY = 'z-personal-card-final-v2-state';
const THEME_KEY = 'z-personal-card-final-v2-theme';
const LANG_KEY = 'z-personal-card-final-v2-lang';

const defaults = {
  theme: localStorage.getItem(THEME_KEY) || 'light',
  lang: localStorage.getItem(LANG_KEY) || 'ar',
  cover_image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85',
  profile_image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=90',
  full_name: 'Zahd Ashour', job_title: 'Entrepreneur & Founder', company_name: 'Z Card',
  location: 'Cairo, Egypt', short_bio: 'Building premium digital experiences powered by AI.',
  phone_number: '+20 100 000 0000', whatsapp_number: '+20 100 000 0000', email: 'zahd@example.com',
  website: 'https://zcard.tech', portfolio: '', status: 'Z PERSONAL',
  social_links: { linkedin: 'https://linkedin.com/in/zahdashour', instagram: 'https://instagram.com/zcard.tech', facebook: '', x: '', youtube: '' },
  saved_at: ''
};

const labels = {
  ar: {
    headline:'بدّل بيانات الكارد ببياناتك', lead:'اضغط على أي خانة داخل الكارد، غيّر بياناتك ثم اضغط حفظ.',
    sub:'الإنشاء مجاني تمامًا • التحليلات مدمجة • الكارد لك بالكامل', badge_free:'مجاني تمامًا', badge_analytics:'تحليلات مدمجة',
    tap:'اضغط للتعديل', verified:'✓ موثق', call:'اتصال', whatsapp:'واتساب', email:'إيميل', save_contact:'حفظ جهة الاتصال',
    qr:'QR Code', share:'مشاركة', download:'تحميل التطبيق', downloadTitle:'احفظ كاردك داخل تطبيق Z Card',
    downloadText:'استخدم نفس رقم الهاتف الذي أضفته للكارد عند إنشاء حسابك داخل التطبيق، وبعد التحقق يظهر الكارد في حسابك.',
    downloadBtn:'الانتقال لتحميل التطبيق', save:'حفظ', cancel:'إلغاء', close:'إغلاق', edit:'تعديل',
    saved:'تم حفظ التعديل', copied:'تم نسخ الرابط', shared:'تمت المشاركة', phoneSaved:'تم تجهيز جهة الاتصال',
    editorHelp:'غيّر هذه البيانات فقط ثم احفظ.', type:'اكتب هنا...', cover:'صورة الغلاف', profile:'الصورة الشخصية',
    name:'الاسم الكامل', title:'المسمى الوظيفي', company:'اسم الشركة', location:'الموقع', bio:'النبذة', phone:'رقم الهاتف',
    wa:'رقم واتساب', emailLabel:'البريد الإلكتروني', websiteLabel:'الموقع الإلكتروني', portfolioLabel:'البورتفوليو',
    linkedin:'LinkedIn',instagram:'Instagram',facebook:'Facebook',x:'X',youtube:'YouTube', status:'الحالة',
    freeHint:'هذا الكارد مجاني تمامًا ويشمل التحليلات المدمجة.', qrTitle:'QR Code جاهز للمشاركة', qrText:'تم توليد الرمز من رابط الكارد الحالي.',
    social:'روابط التواصل', shareTitle:'مشاركة الكارد', shareText:'شارك الكارد مباشرة أو انسخ رابطه.'
  },
  en: {
    headline:'Make this card yours', lead:'Tap any field inside the card, change your details, then save.',
    sub:'Completely free • Built-in analytics • Fully yours', badge_free:'Completely free', badge_analytics:'Built-in analytics',
    tap:'Tap to edit', verified:'✓ Verified', call:'Call', whatsapp:'WhatsApp', email:'Email', save_contact:'Save contact',
    qr:'QR Code', share:'Share', download:'Download app', downloadTitle:'Keep your card in the Z Card app',
    downloadText:'Use the same phone number you added to this card when creating your account in the app. After verification, your card appears in your account.',
    downloadBtn:'Go to app download', save:'Save', cancel:'Cancel', close:'Close', edit:'Edit',
    saved:'Changes saved', copied:'Link copied', shared:'Shared', phoneSaved:'Contact ready',
    editorHelp:'Change only this field, then save.', type:'Type here...', cover:'Cover image', profile:'Profile image',
    name:'Full name', title:'Professional title', company:'Company name', location:'Location', bio:'Bio', phone:'Phone number',
    wa:'WhatsApp number', emailLabel:'Email', websiteLabel:'Website', portfolioLabel:'Portfolio',
    linkedin:'LinkedIn',instagram:'Instagram',facebook:'Facebook',x:'X',youtube:'YouTube', status:'Status',
    freeHint:'This card is completely free and includes built-in analytics.', qrTitle:'QR Code ready to share', qrText:'Generated from the current card link.',
    social:'Social links', shareTitle:'Share your card', shareText:'Share directly or copy your card link.'
  }
};

const iconMap = { linkedin:'fa-linkedin-in', instagram:'fa-instagram', facebook:'fa-facebook-f', x:'fa-x-twitter', youtube:'fa-youtube' };
const state = load();
let activeField = null;

const $ = (s)=>document.querySelector(s);
const $$ = (s)=>Array.from(document.querySelectorAll(s));
const els = {
  html: document.documentElement, langToggle: $('#langToggle'), themeToggle: $('#themeToggle'),
  cover: $('#coverImage'), profile: $('#profileImage'), miniAvatar: $('#miniAvatar'), miniName: $('#miniName'), miniTitle: $('#miniTitle'),
  name: $('#nameField'), title: $('#titleField'), company: $('#companyField'), location: $('#locationField'), bio: $('#bioField'), status: $('#statusBadge'),
  socialRow: $('#socialRow'), callBtn: $('#callBtn'), waBtn: $('#waBtn'), emailBtn: $('#emailBtn'),
  editorModal: $('#editorModal'), editorForm: $('#editorForm'), editorTitle: $('#editorTitle'), editorHelp: $('#editorHelp'),
  editorInput: $('#editorInput'), imageUploadGroup: $('#imageUploadGroup'), imageFile: $('#imageFile'),
  textareaGroup: $('#textareaGroup'), editorTextArea: $('#editorTextArea'),
  qrModal: $('#qrModal'), qrImage: $('#qrImage'), shareModal: $('#shareModal'),
  toast: $('#toast'), sticky: $('#stickyMini'), card: $('#zCard'), downloadNote: $('.download-note')
};

function clone(o){ return JSON.parse(JSON.stringify(o)); }
function load(){ try { const p=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null'); return {...clone(defaults),...(p||{}),social_links:{...clone(defaults.social_links),...((p&&p.social_links)||{})}}; } catch { return clone(defaults); } }
function t(k){ return labels[state.lang][k] ?? labels.en[k] ?? k; }
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); localStorage.setItem(THEME_KEY,state.theme); localStorage.setItem(LANG_KEY,state.lang); }
function toast(msg){ els.toast.textContent=msg; els.toast.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>els.toast.classList.remove('show'),1800); }
function normalizePhone(v){ return String(v||'').replace(/[^\d+]/g,''); }
function publicUrl(){ return location.href.split('#')[0]; }
function ensureUrl(v){ const s=String(v||'').trim(); if(!s)return ''; return /^https?:\/\//i.test(s)?s:`https://${s}`; }

function applyTheme(){ els.html.dataset.theme=state.theme; els.themeToggle.textContent=state.theme==='dark'?'☾':'☼'; }
function applyLang(){
  els.html.lang=state.lang; els.html.dir=state.lang==='ar'?'rtl':'ltr'; els.langToggle.textContent=state.lang==='ar'?'EN':'AR';
  $$('[data-i18n]').forEach(n=>n.textContent=t(n.dataset.i18n));
}

function render(){
  els.cover.src=state.cover_image; els.profile.src=state.profile_image; els.miniAvatar.src=state.profile_image;
  els.name.textContent=state.full_name; els.title.textContent=state.job_title; els.company.textContent=state.company_name; els.location.textContent=state.location; els.bio.textContent=state.short_bio; els.status.textContent=state.status;
  els.miniName.textContent=state.full_name; els.miniTitle.textContent=state.job_title;
  els.callBtn.onclick=()=>location.href=`tel:${normalizePhone(state.phone_number)}`;
  els.waBtn.onclick=()=>window.open(`https://wa.me/${normalizePhone(state.whatsapp_number).replace('+','')}`,'_blank','noopener');
  els.emailBtn.onclick=()=>location.href=`mailto:${state.email}`;
  renderSocial(); applyTheme(); applyLang();
}

function renderSocial(){
  els.socialRow.innerHTML='';
  Object.entries(state.social_links).forEach(([key,url])=>{
    if(!url)return;
    const a=document.createElement('a'); a.className='social-icon'; a.href=ensureUrl(url); a.target='_blank'; a.rel='noopener noreferrer'; a.title=t(key); a.setAttribute('aria-label',t(key));
    a.innerHTML=`<i class="fa-brands ${iconMap[key]||'fa-link'}"></i>`; els.socialRow.appendChild(a);
  });
  if(state.website){ const a=document.createElement('a'); a.className='social-icon'; a.href=ensureUrl(state.website); a.target='_blank'; a.rel='noopener noreferrer'; a.title=t('websiteLabel'); a.setAttribute('aria-label',t('websiteLabel')); a.innerHTML='<i class="fa-solid fa-globe"></i>'; els.socialRow.appendChild(a); }
  if(state.portfolio){ const a=document.createElement('a'); a.className='social-icon'; a.href=ensureUrl(state.portfolio); a.target='_blank'; a.rel='noopener noreferrer'; a.title=t('portfolioLabel'); a.setAttribute('aria-label',t('portfolioLabel')); a.innerHTML='<i class="fa-solid fa-briefcase"></i>'; els.socialRow.appendChild(a); }
}

function fieldValue(field){ return state.social_links[field] ?? state[field] ?? ''; }
function setField(field,val){ if(field in state.social_links) state.social_links[field]=val.trim(); else state[field]=val.trim(); }
function openEditor(field){
  activeField=field; const labelsAr=labels[state.lang]; els.editorTitle.textContent=labelsAr[field]||labelsAr.editorHelp; els.editorHelp.textContent=t('editorHelp');
  els.editorInput.value=fieldValue(field); els.editorInput.placeholder=t('type'); els.imageUploadGroup.hidden=!['cover_image','profile_image'].includes(field); els.textareaGroup.hidden=field!=='short_bio';
  if(field==='short_bio'){ els.editorInput.hidden=true; els.textareaGroup.hidden=false; els.editorTextArea.value=fieldValue(field); } else { els.editorInput.hidden=false; }
  els.editorModal.classList.add('show'); els.editorModal.setAttribute('aria-hidden','false'); setTimeout(()=> (field==='short_bio'?els.editorTextArea:els.editorInput).focus(),30);
}
function closeModal(modal){ if(modal){ modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); } }

async function imageToDataUrl(file){ return new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(r.result); r.onerror=rej; r.readAsDataURL(file); }); }
function updateQr(){ const url=encodeURIComponent(publicUrl()); els.qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=12&data=${url}`; }
function openQr(){ updateQr(); els.qrModal.classList.add('show'); }
async function shareCard(){
  const data={title:state.full_name,text:`${state.full_name} — ${state.job_title}`,url:publicUrl()};
  try{ if(navigator.share){ await navigator.share(data); toast(t('shared')); } else { await navigator.clipboard.writeText(data.url); toast(t('copied')); } } catch {}
}
function saveContact(){
  const v=`BEGIN:VCARD\nVERSION:3.0\nFN:${state.full_name}\nTITLE:${state.job_title}\nORG:${state.company_name}\nTEL:${state.phone_number}\nEMAIL:${state.email}\nURL:${ensureUrl(state.website)}\nEND:VCARD`;
  const blob=new Blob([v],{type:'text/vcard;charset=utf-8'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${(state.full_name||'zcard').replace(/\s+/g,'-')}.vcf`; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),500); toast(t('phoneSaved'));
}

// Individual field click behavior
$$('[data-edit]').forEach(btn=>btn.addEventListener('click',()=>openEditor(btn.dataset.edit)));
$$('[data-share]').forEach(btn=>btn.addEventListener('click',shareCard));
$$('[data-action="qr"]').forEach(btn=>btn.addEventListener('click',openQr));
$('#saveContactBtn')?.addEventListener('click',saveContact);
$('#themeToggle')?.addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark'; saveState(); render();});
$('#langToggle')?.addEventListener('click',()=>{state.lang=state.lang==='ar'?'en':'ar'; saveState(); render();});
$$('[data-close]').forEach(btn=>btn.addEventListener('click',()=>closeModal($('#'+btn.dataset.close))));
['editorModal','shareModal','qrModal'].forEach(id=>$('#'+id)?.addEventListener('click',(e)=>{if(e.target.id===id)closeModal(e.target)}));

els.editorForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  if(activeField==='cover_image' || activeField==='profile_image'){
    const file=els.imageFile.files[0];
    if(file){ setField(activeField, await imageToDataUrl(file)); }
    else if(els.editorInput.value.trim()) setField(activeField,els.editorInput.value);
  } else if(activeField==='short_bio') setField(activeField,els.editorTextArea.value); else setField(activeField,els.editorInput.value);
  state.saved_at=new Date().toISOString(); saveState(); render(); updateQr(); closeModal(els.editorModal); toast(t('saved'));
});

els.imageFile.addEventListener('change',()=>{ const file=els.imageFile.files[0]; if(file){ const r=new FileReader(); r.onload=()=>{ if(activeField==='profile_image')els.profile.src=r.result; else els.cover.src=r.result; }; r.readAsDataURL(file);} });

let lastY=window.scrollY; window.addEventListener('scroll',()=>{ const y=window.scrollY; const up=y<lastY; els.dock?.classList.toggle('hide',!up&&y>120); els.sticky?.classList.toggle('show',y>220); els.card?.classList.toggle('compact',y>220); lastY=y; },{passive:true});

// Make static action links editable instead of navigating away
$('#dockCall')?.addEventListener('click',()=>openEditor('phone_number'));
$('#dockWa')?.addEventListener('click',()=>openEditor('whatsapp_number'));

// App button is intentionally a replaceable URL placeholder until the official store link is provided.
const dl=document.querySelector('[data-i18n="download_btn"]'); if(dl) dl.addEventListener('click',(e)=>{ if(dl.getAttribute('href')==='#') e.preventDefault(); });

render();
