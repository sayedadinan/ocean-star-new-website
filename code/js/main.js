// Mobile navigation
const navIcon = document.querySelector("#nav-icon");
const navUl = document.querySelector("#navUl");

function nav() {
  if (!navIcon || !navUl) return;

  const isClosed =
    navIcon.className === "ri-menu-line" || navUl.style.left === "-100%";

  navIcon.className = isClosed ? "ri-close-line" : "ri-menu-line";
  navUl.style.left = isClosed ? "0%" : "-100%";
}

// Testimonials slider
const testimonialSlider = document.querySelector(".testimonial-slider");

if (testimonialSlider) {
  new Swiper(".testimonial-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    pagination: {
      el: ".testimonial-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },
  });
}

// Work filter
const workGrid = document.querySelector(".all-car");

if (workGrid && typeof mixitup !== "undefined") {
  mixitup(".all-car", {
    selectors: {
      target: ".cars",
    },
    animation: {
      duration: 300,
    },
  });
}

// Active filter button state
const carLogo = document.querySelectorAll(".car-logo");

function activeLogo() {
  carLogo.forEach((logo) => logo.classList.remove("active-fc"));
  this.classList.add("active-fc");
}

carLogo.forEach((logo) => logo.addEventListener("click", activeLogo));

// Scroll up button visibility
function scrollUp() {
  const scrollButton = document.querySelector(".scroll-up");
  if (!scrollButton) return;

  if (window.scrollY >= 500) scrollButton.classList.add("show-scroll");
  else scrollButton.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

// Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1800,
  delay: 200,
  reset: false,
});

sr.reveal(
  ".home-title, .section-title, .footer-title, .brand-mark, .copyright"
);
sr.reveal(".home-subtitle, .home-elec, .hero-actions, .section-text", {
  delay: 300,
});
sr.reveal(".home-info, .services-grid, .why-grid, .work-grid, .footer-list", {
  delay: 350,
  interval: 100,
});
sr.reveal(".home-img, .about-img, .offer-image, .map-panel", {
  origin: "right",
  delay: 350,
});
sr.reveal(".about-title, .contact-copy, .car-info", {
  origin: "left",
  delay: 350,
});
sr.reveal(".card-box, .testimonial-card, .stat-card, .service-card", {
  origin: "bottom",
  delay: 250,
  interval: 120,
});
