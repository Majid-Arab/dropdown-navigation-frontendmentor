document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger");
  const navbarMenu = document.getElementById("menu");
  const overlayMenu = document.querySelector(".overlay");
  const darkSwitch = document.getElementById("switch");
  const loginbox = document.querySelector(".loginbox");
  const overlay = document.getElementById("overlay");
  const sidebar = document.getElementById("sidebar");

  // Open/Close Sidebar on Click Burger
  if (burgerMenu && sidebar) {
    burgerMenu.addEventListener("click", () => {
      sidebar.classList.toggle("is-active");
    });
  }

  // Open Close Navbar Menu on Click Burger
  if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
      overlayMenu.classList.toggle("is-active");
    });
  }

  // Close Navbar Menu on Click Links
  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
      overlayMenu.classList.remove("is-active");
    });
  });

  // Fixed Navbar Menu on Window Resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992 && navbarMenu.classList.contains("is-active")) {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
      overlayMenu.classList.remove("is-active");
    }
  });

  // Dark and Light Mode on Switch Click
  darkSwitch.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkmode");
    document.body.classList.toggle("darkmode");
  });

  // Login Modal Function

  // Function to toggle the modal
  function toggleModal() {
    overlay.classList.toggle("show-modal");
    loginbox.classList.toggle("show-modal");
  }

  // Add click event listener to the login button
  const loginButton = document.querySelector(".loginBtn");
  if (loginButton) {
    loginButton.addEventListener("click", toggleModal);
  }

  // Add click event listener to the overlay to close the modal
  if (overlay) {
    overlay.addEventListener("click", toggleModal);
  }
});
