document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
    const navLogo = document.querySelector('.nav-brand img');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            if (navLogo) navLogo.src = 'img/icon.jpg';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            if (navLogo) navLogo.src = 'img/icon1.jpg';
        }
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Section Animation
        const heroTimeline = gsap.timeline();
        
        heroTimeline.fromTo(".hero-title", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
        )
        .fromTo(".btn-primary", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 
            "-=0.6"
        )
        .fromTo(".stat-item", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.15 }, 
            "-=0.4"
        )
        .fromTo(".social-floating .social-icon", 
            { x: 30, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 }, 
            "-=0.4"
        );

        // Section Headers Animation
        gsap.utils.toArray('.section-header, .section-heading, .projects-header h2').forEach(header => {
            gsap.fromTo(header,
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: header,
                        start: "top 85%",
                    },
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out"
                }
            );
        });

        // About Section Animation
        gsap.fromTo(".about-image-container",
            { x: -40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".about-grid",
                    start: "top 80%",
                },
                x: 0, opacity: 1, duration: 1, ease: "power3.out"
            }
        );

        gsap.fromTo(".about-content",
            { x: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".about-grid",
                    start: "top 80%",
                },
                x: 0, opacity: 1, duration: 1, ease: "power3.out"
            }
        );

        // Services Cards Animation
        gsap.fromTo(".service-card",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 80%",
                },
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1
            }
        );

        // Projects Cards Animation
        gsap.fromTo(".project-card",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".project-grid",
                    start: "top 80%",
                },
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15
            }
        );

        // Experience Timeline Animation
        gsap.fromTo(".timeline-item",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".timeline",
                    start: "top 80%",
                },
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2
            }
        );
    }
});
