// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const subject = this.querySelector('input[name="subject"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // For demonstration purposes, we'll just show an alert
        // In a real application, you would use an API or backend service to send the email
        alert(`Thank you for your message, ${name}! I'll get back to you as soon as possible.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Create a simple scroll animation effect for elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .achievement-card, .timeline-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation elements
    const elementsToAnimate = document.querySelectorAll('.project-card, .achievement-card, .timeline-content');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-content p');
    if(copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Shivakumar Dammanagi. All rights reserved.`;
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Page load animation
    const pageTransition = document.querySelector('.page-transition');
    
    // Initial page loading animation
    const tl = gsap.timeline();
    
    tl.to(pageTransition, {
        duration: 1,
        transform: 'translateY(0%)',
        ease: 'power2.inOut'
    })
    .to(pageTransition, {
        duration: 1.2,
        transform: 'translateY(-100%)',
        delay: 0.3,
        ease: 'power2.inOut'
    });
    
    // Animate sections as they come into view
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
    
    // Animate hero elements with staggered effect
    const heroElements = document.querySelectorAll('.hero h1, .hero h2, .hero p, .hero .cta-buttons');
    
    gsap.fromTo(heroElements, 
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 2 // Start after page transition completes
        }
    );
    
    // Animate project cards with a stagger effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                delay: index * 0.1 // Staggered effect
            }
        );
    });
    
    // Animate timeline items with stagger
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        gsap.to(bar, {
            width: width,
            duration: 1.5,
            ease: 'power3.inOut',
            scrollTrigger: {
                trigger: bar,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Page navigation transitions
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            // Show transition overlay
            gsap.to(pageTransition, {
                duration: 0.5,
                transform: 'translateY(0%)',
                ease: 'power2.inOut',
                onComplete: () => {
                    // Scroll to section
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'auto' // We're handling animation with GSAP
                        });
                    }
                    
                    // Hide transition overlay
                    gsap.to(pageTransition, {
                        duration: 0.5,
                        transform: 'translateY(-100%)',
                        delay: 0.3,
                        ease: 'power2.inOut'
                    });
                }
            });
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Mobile Menu Toggle (keep this from your original code)
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Form submission handling (keep this from your original code)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const subject = this.querySelector('input[name="subject"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
            
            // For demonstration purposes, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you as soon as possible.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Update copyright year automatically (keep this from your original code)
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-content p');
    if(copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Shivakumar Dammanagi. All rights reserved.`;
    }
});

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme from localStorage or default to light
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    }
    
    // Add hover effect element to profile image placeholder
    const profileImage = document.querySelector('.profile-image-placeholder');
    if (profileImage) {
        const hoverEffect = document.createElement('div');
        hoverEffect.className = 'hover-effect';
        profileImage.appendChild(hoverEffect);
    }
    
    // Function to switch theme
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            animateThemeChange('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            animateThemeChange('light');
        }
    }
    
    // Animate theme change with GSAP if available
    function animateThemeChange(theme) {
        // Check if GSAP is available
        if (typeof gsap !== 'undefined') {
            // Animate background color change
            gsap.to('body', {
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--background-color'),
                duration: 0.5,
                ease: 'power2.inOut'
            });
            
            // Animate text color change
            gsap.to('body', {
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-primary'),
                duration: 0.5,
                ease: 'power2.inOut'
            });
            
            // Flash animation for the toggle
            const toggle = document.querySelector('.slider');
            gsap.fromTo(toggle, 
                { boxShadow: `0 0 10px 2px ${theme === 'dark' ? '#6366f1' : '#f59e0b'}` },
                { 
                    boxShadow: '0 0 0px 0px transparent', 
                    duration: 1,
                    ease: 'power2.out'
                }
            );
        }
    }
    
    // Event listener for toggle switch
    toggleSwitch.addEventListener('change', switchTheme);
});

// Hero Image Interactive Animation
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-image-placeholder');
    
    if (profileImage) {
        // Mouse move effect
        profileImage.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = profileImage.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            // Tilt effect
            profileImage.style.transform = `perspective(1000px)
                rotateY(${x * 10}deg)
                rotateX(${y * -10}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
            
            // Dynamic shadow based on mouse position
            profileImage.style.boxShadow = ` ${x * 15}px ${y * 15}px 30px rgba(0, 0, 0, 0.15) `;
            
            // Move the hover effect
            const hoverEffect = profileImage.querySelector('.hover-effect');
            if (hoverEffect) {
                hoverEffect.style.opacity = '0.7';
                hoverEffect.style.transform = `translate(${x * 30}px, ${y * 30}px) rotate(${x * y * 360}deg)`;
            }
        });
        
        // Reset on mouse leave
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
            profileImage.style.boxShadow = 'var(--shadow)';
            
            const hoverEffect = profileImage.querySelector('.hover-effect');
            if (hoverEffect) {
                hoverEffect.style.opacity = '0';
                hoverEffect.style.transform = 'translate(0, 0) rotate(0)';
            }
        });
    }
});
