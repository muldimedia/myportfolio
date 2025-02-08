document.addEventListener("DOMContentLoaded", function () {
  // Mobile Burger Menu
  const burgerIcon = document.getElementById("burger-icon");
  const navLinksMobile = document.getElementById("nav-links-mobile");

  burgerIcon.addEventListener("click", function () {
    navLinksMobile.classList.toggle("show");
  });
});
