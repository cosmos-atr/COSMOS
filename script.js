document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    const card = document.querySelector(".mirror-card");
    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 400);
});
