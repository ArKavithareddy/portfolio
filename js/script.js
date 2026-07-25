// ===========================
// Sticky Navbar
// ===========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#111";
        navbar.style.padding = "15px 8%";
    } else {
        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.padding = "20px 8%";
    }

});

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===========================
// Fade-in Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(".service-card, .project, .about, .cta");

hiddenElements.forEach((el) => observer.observe(el));


// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".why-grid h3");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = parseInt(counter.innerText);

        let count = +counter.getAttribute("data-count") || 0;

        const increment = target / 60;

        if (count < target) {

            count += increment;

            counter.innerText = Math.ceil(count);

            counter.setAttribute("data-count", count);

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});

// ===========================
// Project Image Slider
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(function (slider) {

        const slides = slider.querySelectorAll(".slide");

        if (slides.length === 0) return;

        let current = 0;

        slides[current].classList.add("active");

        setInterval(function () {

            slides[current].classList.remove("active");

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            slides[current].classList.add("active");

        }, 3000);

    });

});