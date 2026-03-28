document.addEventListener("DOMContentLoaded", () => {
    // 1. Sticky Header
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Mobile Menu (Hamburger)
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const navLinksList = document.querySelectorAll(".nav-links li a");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle("nav-active");
    });

    // Close mobile menu when clicking a link
    navLinksList.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            nav.classList.remove("nav-active");
        });
    });

    // 3. Scroll Reveal Animation Setup
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
    
    // Trigger scroll event on load to show elements already in view
    window.dispatchEvent(new Event('scroll'));
});
