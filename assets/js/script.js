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
      "url('" +
      imgPath +
      images[currentIndex] +
      "'), linear-gradient(182deg, rgb(0 0 0 / 69%), rgb(0 0 0 / 72%)";
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
    "url('" +
    imgPath +
    images[currentIndex] +
    "'), linear-gradient(182deg, rgb(0 0 0 / 69%), rgb(0 0 0 / 72%)";
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

// full width slider
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${offset}px)`;

  // Duplicate slides to create seamless loop
  if (currentIndex === 0) {
    carousel.appendChild(slides[0].cloneNode(true));
  } else if (currentIndex === slides.length - 1) {
    carousel.insertBefore(slides[slides.length - 1].cloneNode(true), slides[0]);
    carousel.style.transform = `translateX(${-slideWidth}px)`;
    currentIndex = 1;
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
});

nextBtn.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides();
});
