const landing = document.querySelector(".landing");
const home = document.getElementById("home");
const btn = document.querySelector(".enter-btn");

btn.addEventListener("click", function(e) {
  e.preventDefault();

  landing.classList.add("active");

  setTimeout(() => {
    landing.style.display = "none";
    home.scrollIntoView({ behavior: "smooth" });
  }, 800);
});
