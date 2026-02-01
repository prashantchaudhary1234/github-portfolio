/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

/* ================= SKILL BAR ANIMATION ================= */
document.querySelectorAll(".fill").forEach(bar => {
  bar.style.width = bar.dataset.percent;
});

/* ================= MOBILE MENU (NEW) ================= */
const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");

// Toggle menu
menuBtn.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
});

// Close menu when clicking any menu link
document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });
});
