// ================= SLIDESHOW =================
// Only run slideshow on homepage
if (document.querySelector(".hero")) {
  const images = document.querySelectorAll(".hero-image");
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }, 4000);
}



// ================= HAMBURGER TOGGLE =================
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (nav) {
    nav.classList.toggle("active");
  }
}



// ================= CLOSE MENU WHEN LINK CLICKED =================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    if (nav) {
      nav.classList.remove("active");
    }
  });
});



// ================= DARK MODE TOGGLE =================

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle button logic
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
