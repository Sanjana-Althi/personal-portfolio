// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }

    });

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(
    '.about-card, .skill-card, .project-card, .cert-card, .edu-card, .activity-card, .contact-card'
).forEach(el => {

    el.classList.add('hidden');
    observer.observe(el);

});