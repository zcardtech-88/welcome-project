const toast = document.querySelector('[data-toast]');
const dock = document.querySelector('[data-dock]');
let toastTimer;

function notify(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function shareCard(){
  if(navigator.share){
    navigator.share({title: 'Sara Al-Harbi · Z Card', text: 'Premium digital identity card'}).catch(()=>{});
  } else {
    navigator.clipboard?.writeText(location.href).then(()=>notify('Card link copied')).catch(()=>notify('Share link ready'));
  }
}

function showQR(){
  notify('QR Code preview · Ready to connect');
}

function saveContact(){
  const vcard = ['BEGIN:VCARD','VERSION:3.0','FN:Sara Al-Harbi','ORG:Creative Studio','TITLE:Senior Graphic Designer','TEL:+966500000000','EMAIL:sara@creativestudio.sa','ADR:;;Riyadh;Saudi Arabia;;;','END:VCARD'].join('\\n');
  const blob = new Blob([vcard], {type:'text/vcard'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sara-al-harbi.vcf';
  a.click();
  URL.revokeObjectURL(url);
  notify('Contact card downloaded');
}

document.querySelectorAll('[data-action]').forEach((el) => {
  el.addEventListener('click', () => {
    const action = el.dataset.action;
    if(action === 'share') shareCard();
    if(action === 'qr') showQR();
    if(action === 'save') saveContact();
    if(action === 'create') notify('Create Your Z Card');
    if(action === 'video') notify('Featured video demo');
  });
});

let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  const scrollingDown = current > lastScroll + 4;
  const scrollingUp = current < lastScroll - 4;
  if(scrollingDown) dock.classList.add('hide');
  if(scrollingUp) dock.classList.remove('hide');
  lastScroll = current;
}, {passive:true});

const sections = document.querySelectorAll('[data-section]');
sections.forEach(section => {
  const text = section.textContent.replace(/\\s+/g,'').trim();
  if(!text) section.remove();
});

// Lightweight placeholder resolver: replace {{field}} tokens in visible text.
const data = {
  full_name:'Sara Al-Harbi', job_title:'Senior Graphic Designer', company_name:'Creative Studio', location:'Riyadh, Saudi Arabia',
  short_bio:'Passionate graphic designer creating modern visual identities, branding systems and digital experiences.',
  about_me:'Passionate graphic designer creating modern visual identities, branding systems and digital experiences.',
  experience_years:'8', languages:'Arabic · English'
};
document.querySelectorAll('body *').forEach(node => {
  if(node.children.length===0 && node.nodeType===1){
    let value=node.textContent;
    Object.entries(data).forEach(([key,val])=>{ value=value.split('{{'+key+'}}').join(val); });
    node.textContent=value;
  }
});
