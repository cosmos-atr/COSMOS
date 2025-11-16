// Cursor follower effect
// Убраны эффекты курсора и двигающегося зеркала
// Оставлены только плавные анимации карточек

document.addEventListener('DOMContentLoaded', function() {
    // Add subtle animation to cards on load
    const mirrorCards = document.querySelectorAll('.mirror-card');
    
    mirrorCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
