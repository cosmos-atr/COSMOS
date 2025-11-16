document.addEventListener('DOMContentLoaded', function() {
    const mirrorCard = document.querySelector('.mirror-card');

    setTimeout(() => {
        mirrorCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        mirrorCard.style.opacity = '1';
        mirrorCard.style.transform = 'translateY(0)';
    }, 800);
});
