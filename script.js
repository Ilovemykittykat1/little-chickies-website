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

const banner = document.getElementById("call-banner");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");

  if (banner) {
    banner.src = "images/homebanner.jpg"; // dark image
  }
} else {
  if (banner) {
    banner.src = "images/homebanner2.jpg"; // light image
  }
}

// Toggle button logic
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");

      if (banner) {
        banner.src = "images/homebanner.jpg"; // dark image
      }

    } else {
      localStorage.setItem("theme", "light");

      if (banner) {
        banner.src = "images/homebanner2.jpg"; // light image
      }
    }
  });
}

// ================= MENU SEARCH =================
const menuSearch = document.getElementById("menuSearch");

if (menuSearch) {
  menuSearch.addEventListener("keyup", function () {
    const value = menuSearch.value.toLowerCase();
    const cards = document.querySelectorAll(".menu-card");
    const categories = document.querySelectorAll(".menu-category");
    const tabs = document.querySelectorAll(".menu-tab");

    if (value !== "") {

      // Remove active tab highlight
      tabs.forEach(tab => tab.classList.remove("active"));

      // Show all categories
      categories.forEach(cat => cat.style.display = "block");

      // Filter cards globally
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(value)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });

    } else {

      // Reset everything when search is cleared
      categories.forEach(cat => cat.style.display = "none");

      const allSection = document.getElementById("all");
      if (allSection) {
        allSection.style.display = "block";
      }

      tabs.forEach(tab => tab.classList.remove("active"));
      const allTab = document.querySelector(".menu-tab[onclick=\"showCategory('all')\"]");
      if (allTab) {
        allTab.classList.add("active");
      }

      cards.forEach(card => card.style.display = "");
    }
  });
}