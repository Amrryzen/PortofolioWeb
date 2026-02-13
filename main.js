const landing = document.querySelector(".landing");
const btn = document.querySelector(".enter-btn");
const homeNav = document.querySelector('nav a[href="#landing"]');

// Masuk ke konten utama
btn.addEventListener("click", function(e) {
  e.preventDefault();
  landing.classList.add("active");
  
  setTimeout(() => {
    landing.style.display = "none";
    // Scroll ke konten setelah landing
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  }, 700);
});

// Balik ke Landing dari Navbar
homeNav.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Munculkan kembali landing
    landing.style.display = "flex";
    
    // Scroll ke paling atas dulu
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Hilangkan blur/efek aktif
    setTimeout(() => {
        landing.classList.remove("active");
    }, 10);
});