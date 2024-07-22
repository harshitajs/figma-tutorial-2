const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const mobileNavigation = document.querySelector(".mobile-navigation");

//events
mobileMenu.addEventListener("click", () => {
  mobileNavigation.classList.toggle("active");
  mobileClose.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

mobileClose.addEventListener("click", () => {
  mobileNavigation.classList.toggle("active");
  mobileClose.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});