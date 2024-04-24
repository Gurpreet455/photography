document.addEventListener("DOMContentLoaded", function () {
  // Array of background image URLs
  var images = [
    "slider1.webp",
    "slider2.webp",
    "slider3.webp",
    "slider4.webp",
    "slider5.webp",
  ];
  imgPath = "assets/images/";
  overlay = ",linear-gradient(182deg, #0000009c, #0000009c)";
  var currentIndex = 0;
  var slider = document.querySelector(".slider");
  var prevButton = document.querySelector(".prev-button");
  var nextButton = document.querySelector(".next-button");

  function changeBackground(index) {
    currentIndex = (index + images.length) % images.length;
    slider.style.backgroundImage =
      "url('" + imgPath + images[currentIndex] + "')";
  }

  function nextBackground() {
    changeBackground(currentIndex + 1);
  }

  function prevBackground() {
    changeBackground(currentIndex - 1);
  }

  // Click event listeners for arrow buttons
  prevButton.addEventListener("click", prevBackground);
  nextButton.addEventListener("click", nextBackground);

  // Initial background image
  slider.style.backgroundImage =
    "url('" + imgPath + images[currentIndex] + "')";
});

// clr mode

//darkmode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("active-dark");
  const isDarkMode = document.body.classList.contains("active-dark");
  localStorage.setItem("darkModeStatus", isDarkMode);

  // Update button text based on theme
  themeToggle.innerHTML = isDarkMode ? "Light Mode" : "Dark Mode";
});

window.addEventListener("load", () => {
  const isDarkMode = localStorage.getItem("darkModeStatus") === "true";
  if (isDarkMode) {
    document.body.classList.add("active-dark");
    themeToggle.innerHTML = "Light Mode";
  } else {
    themeToggle.innerHTML = "Dark Mode";
  }
});

// testimonial slider
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });
    testimonials[index].classList.add("active");
  }

  function prevTestimonial() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  prevBtn.addEventListener("click", prevTestimonial);
  nextBtn.addEventListener("click", nextTestimonial);

  // Automatic scrolling
  setInterval(nextTestimonial, 3000); // Change interval as needed (milliseconds)
});
