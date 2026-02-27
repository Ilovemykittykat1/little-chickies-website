// ================= SLIDESHOW =================
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


// ================= DARK MODE =================
const banner = document.getElementById("call-banner");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  if (banner) banner.src = "images/homebanner.jpg";
} else {
  if (banner) banner.src = "images/homebanner2.jpg";
}

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      if (banner) banner.src = "images/homebanner.jpg";
    } else {
      localStorage.setItem("theme", "light");
      if (banner) banner.src = "images/homebanner2.jpg";
    }
  });
}


// ================= MENU SEARCH =================

const menuSearch = document.getElementById("menuSearch");
const menuSearchForm = document.getElementById("menuSearchForm");

function runMenuSearch() {

  const value = menuSearch.value.toLowerCase();

  const cards = document.querySelectorAll(".menu-card");
  const categories = document.querySelectorAll(".menu-category");
  const tabs = document.querySelectorAll(".menu-tab");

  if (value !== "") {

    tabs.forEach(tab => tab.classList.remove("active"));

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    categories.forEach(category => {

      const visibleCards =
        category.querySelectorAll(".menu-card:not([style*='display: none'])");

      category.style.display =
        visibleCards.length > 0 ? "block" : "none";
    });

  } else {

    categories.forEach(cat => cat.style.display = "none");

    const allSection = document.getElementById("all");
    if (allSection) allSection.style.display = "block";

    tabs.forEach(tab => tab.classList.remove("active"));

    const allTab =
      document.querySelector(".menu-tab[onclick=\"showCategory('all')\"]");

    if (allTab) allTab.classList.add("active");

    cards.forEach(card => card.style.display = "");
  }
}


// LIVE typing search
if (menuSearch) {
  menuSearch.addEventListener("input", runMenuSearch);
}


// STOP PAGE RELOAD + SEARCH ICON CLICK
if (menuSearchForm) {
  menuSearchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    runMenuSearch();
  });
}