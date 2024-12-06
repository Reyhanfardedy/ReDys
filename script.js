document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
    this.reset();
  });

// Show the loading spinner when the page starts loading
window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.display = "none"; // Hide the loading spinner once the page is fully loaded
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Here you can handle the form data, e.g., send it to a server
    const formData = new FormData(this);

    // Example: Log the form data to the console
    console.log("Form submitted:", Object.fromEntries(formData));

    // Optionally, show a success message or reset the form
    alert("Your message has been sent!");
    this.reset(); // Reset the form fields
  });

// Smooth scrolling for anchor links with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector("nav").offsetHeight; // Get the navbar height
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight; // Calculate the target position

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Toggle mobile navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the active class
});

document.getElementById("background-music").volume = 0.5; // Set volume to 50%

// Get the modal
var modals = document.querySelectorAll(".modal");
var openButtons = document.querySelectorAll(".open-modal");
var closeButtons = document.querySelectorAll(".close");

// Open modal
openButtons.forEach(function (button) {
  button.onclick = function () {
    var modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  };
});

// Close modal
closeButtons.forEach(function (button) {
  button.onclick = function () {
    modals.forEach(function (modal) {
      modal.style.display = "none";
    });
  };
});

// Close modal when clicking outside of it
window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
