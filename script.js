document.addEventListener('DOMContentLoaded', function() {
    const mirrorCard = document.querySelector('.mirror-card');

    setTimeout(() => {
        mirrorCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        mirrorCard.style.opacity = '1';
        mirrorCard.style.transform = 'translateY(0)';

        const cardTitle = mirrorCard.querySelector('h2');
        const cardParagraphs = mirrorCard.querySelectorAll('p');

        setTimeout(() => {
            cardTitle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardTitle.style.opacity = '1';
            cardTitle.style.transform = 'translateX(0)';
        }, 300);

        cardParagraphs.forEach((p, index) => {
            setTimeout(() => {
                p.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                p.style.opacity = '1';
                p.style.transform = 'translateX(0)';
            }, 500 + index * 200);
        });
    }, 1200);
});
