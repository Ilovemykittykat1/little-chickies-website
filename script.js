const images = document.querySelectorAll(".hero-image");
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}, 4000);

// HAMBURGER TOGGLE
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

// CLOSE MENU WHEN LINK CLICKED
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});
