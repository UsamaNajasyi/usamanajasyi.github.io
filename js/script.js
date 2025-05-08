function toggleSidebar() { const sidebar = document.getElementById('sidebar'); sidebar.classList.toggle('expanded'); }

// Smooth scroll with offset for fixed sidebar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 70; // Adjust offset as needed
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


// Header fade effect on scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    let scrollTop = window.scrollY;
    hero.style.opacity = 1 - scrollTop / 500;
    hero.style.transform = `translateY(${scrollTop * 0.3}px)`;
  }
});


// Typing animation
const textArray = ["Student", "Programmer", "Animal Lover"];
let typingIndex = 0;
let charIndex = 0;
let typingText = document.getElementById("typing-text");

function typeEffect() {
  if (typingIndex < textArray.length) {
    if (charIndex < textArray[typingIndex].length) {
      typingText.textContent += textArray[typingIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        typingText.textContent = "";
        charIndex = 0;
        typingIndex = (typingIndex + 1) % textArray.length;
        setTimeout(typeEffect, 300);
      }, 1000);
    }
  }
}
if (typingText) typeEffect();

// Back to top button logic
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
