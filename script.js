// Universal small script for burger + mobile panel + small animations
document.addEventListener('DOMContentLoaded', () => {

  // Toggle mobile panel based on button data-target
  document.querySelectorAll('.burger').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target') || 'mobile-panel';
      const panel = document.getElementById(targetId);
      if (!panel) return;
      const opened = panel.classList.toggle('show');
      panel.setAttribute('aria-hidden', opened ? 'false' : 'true');
      btn.setAttribute('aria-expanded', opened ? 'true' : 'false');

      // prevent background scroll when open
      if (opened) document.documentElement.style.overflow = 'hidden';
      else document.documentElement.style.overflow = '';
    });
  });

  // Close mobile panel when clicking a link inside
  document.querySelectorAll('.mobile-panel').forEach(panel => {
    panel.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link) {
        panel.classList.remove('show');
        panel.setAttribute('aria-hidden', 'true');
        // close all burgers' aria-expanded
        document.querySelectorAll('.burger').forEach(b => b.setAttribute('aria-expanded','false'));
        document.documentElement.style.overflow = '';
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.mobile-panel.show').forEach(panel => {
        panel.classList.remove('show');
        panel.setAttribute('aria-hidden','true');
      });
      document.querySelectorAll('.burger').forEach(b => b.setAttribute('aria-expanded','false'));
      document.documentElement.style.overflow = '';
    }
  });

  // small entrance animation for info-card if present
  const card = document.querySelector('.info-card');
  if (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(14px)';
    card.style.transition = 'opacity .5s ease, transform .5s ease';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200);
  }

});

