const toggleBtn = document.querySelector(".toggle-button");
const navLinks = document.querySelector("#flex");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
