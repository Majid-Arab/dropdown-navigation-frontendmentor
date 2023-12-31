const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const loginbox = document.getElementById("loginbox");
const overlayMenu = document.querySelector(".overlay");

// Open Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
      overlayMenu.classList.remove("is-active");
    }
  }
});

// Login Modal Function

// Function to toggle the modal
function toggleModal() {
  overlayMenu.classList.toggle("show-modal");
  loginbox.classList.toggle("show-modal");
}

// Add click event listener to the login button
const loginButton = document.querySelector(".loginBtn");
if (loginButton) {
  loginButton.addEventListener("click", toggleModal);
}

// Add click event listener to the overlay to close the modal
if (overlayMenu) {
  overlayMenu.addEventListener("click", toggleModal);
}

// Login Form Function 

function submitForm() {
  // Get the input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are not empty
  if (username.trim() !== "" && password.trim() !== "") {
      // Display success modal with entered values
      const successMessage = `Login successful!\nUsername: ${username}\nPassword: ${password}`;
      alert(successMessage);

      // Reset the form
      document.getElementById("loginForm").reset();
      location.reload();
  } else {
      // Display error message if username or password is empty
      alert("Please enter both username and password.");
  }
}

// Dark Mode 

document.addEventListener("DOMContentLoaded", () => {
  const darkSwitch = document.getElementById("switch");

  darkSwitch.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkmode");
    document.body.classList.toggle("darkmode");
  });
});
