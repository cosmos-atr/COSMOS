// script.js
document.addEventListener('DOMContentLoaded', () => {

  // Helper to wire a burger + panel pair by IDs or elements
  function setupBurger(burgerId, panelId) {
    const burger = document.getElementById(burgerId);
    const panel = document.getElementById(panelId);

    if (!burger || !panel) return;

    burger.addEventListener('click', () => {
      const open = panel.classList.toggle('show');
      if (open) {
        panel.setAttribute('aria-hidden', 'false');
        burger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // prevent page scroll when menu open
      } else {
        panel.setAttribute('aria-hidden', 'true');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // restore
      }
    });

    // Close menu by clicking any link inside panel
    panel.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'a') {
        panel.classList.remove('show');
        panel.setAttribute('aria-hidden', 'true');
        if (burger) burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('show')) {
        panel.classList.remove('show');
        panel.setAttribute('aria-hidden', 'true');
        if (burger) burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

  }

  // wire all 3 page burgers to their respective panels (IDs from HTML)
  setupBurger('burger', 'mobile-panel');
  setupBurger('burger2', 'mobile-panel-2');
  setupBurger('burger3', 'mobile-panel-3');

  // small entrance animation for info-card (progressive)
  const card = document.querySelector('.info-card');
  if (card) {
    card.style.transition = 'opacity .6s ease, transform .6s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 220);
  }

  // Prevent accidental horizontal scrolling on iOS by clamping overscroll
  // (also main fix is CSS overflow-x:hidden on body/html)
  let startX = 0;
  document.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) startX = e.touches[0].clientX;
  }, {passive:true});

  document.addEventListener('touchmove', (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    const x = e.touches[0].clientX;
    const deltaX = Math.abs(x - startX);
    if (deltaX > 1200) { // unrealistic big swipes — ignore
      e.preventDefault();
    }
  }, {passive:false});

});
