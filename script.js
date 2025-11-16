// Cursor follower effect
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Hero mirror effect
    const heroMirror = document.getElementById('heroMirror');
    
    document.addEventListener('mousemove', (e) => {
        if (heroMirror) {
            const { clientX, clientY } = e;
            const { left, top, width, height } = heroMirror.getBoundingClientRect();
            
            const x = (clientX - left) / width;
            const y = (clientY - top) / height;
            
            heroMirror.style.transform = `translateY(-50%) rotateX(${20 * (0.5 - y)}deg) rotateY(${20 * (x - 0.5)}deg)`;
        }
    });
    
    // Add parallax effect to mirror cards
    const mirrorCards = document.querySelectorAll('.mirror-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        mirrorCards.forEach((card, index) => {
            card.style.transform = `translateY(${rate * 0.1 * (index + 1)}px)`;
        });
    });
    
    // Add subtle animation to cards on load
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
