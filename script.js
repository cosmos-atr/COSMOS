document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".mirror-card");

    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 400);
});
