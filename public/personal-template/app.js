(() => {
  const sticky = document.querySelector('#stickyHeader');
  const dock = document.querySelector('#dock');
  let lastY = window.scrollY;
  let shareTimer;

  const toast = (message) => {
    let node = document.querySelector('.toast');
    if (!node) {
      node = document.createElement('div');
      node.className = 'toast';
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(shareTimer);
    shareTimer = setTimeout(() => node.classList.remove('show'), 1800);
  };

  const shareCard = async () => {
    const data = { title: 'Sara Al-Harbi — Z Card Personal', text: 'Premium digital identity by Z Card', url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else if (navigator.clipboard) { await navigator.clipboard.writeText(window.location.href); toast('Card link copied'); }
      else toast('Share this card from your browser');
    } catch (_) {}
  };

  const qr = () => toast('QR Code placeholder — connect to Z Card backend');
  const video = () => toast('Featured video placeholder');
  const save = () => toast('Contact saved — connect VCard generation');

  document.querySelectorAll('[data-action]').forEach((el) => {
    el.addEventListener('click', (event) => {
      const action = el.dataset.action;
      if (action === 'share') { event.preventDefault(); shareCard(); }
      if (action === 'qr') { event.preventDefault(); qr(); }
      if (action === 'video') { event.preventDefault(); video(); }
      if (action === 'save') { event.preventDefault(); save(); }
    });
  });

  const updateScrollUI = () => {
    const y = window.scrollY;
    const scrollingUp = y < lastY;
    if (y > 90 && scrollingUp) sticky.classList.add('visible'); else sticky.classList.remove('visible');
    if (y > 180 && !scrollingUp) dock.classList.add('hidden'); else dock.classList.remove('hidden');
    lastY = y;
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => { updateScrollUI(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
})();
