// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    // Navbar scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show/hide scroll to top button
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        
        if (isOpen) {
            // Close menu
            mobileMenu.classList.add('translate-x-full');
            mobileOverlay.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
        } else {
            // Open menu
            mobileMenu.classList.remove('translate-x-full');
            mobileOverlay.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(toggleMobileMenu, 100);
        });
    });

    // Smooth scrolling for anchor links
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Handle all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target && target !== '#') {
                smoothScroll(target);
            }
        });
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${current}` || (current === '' && href === '#home')) {
                link.classList.add('active');
                link.querySelector('.nav-underline').style.width = '100%';
            } else {
                link.classList.remove('active');
                link.querySelector('.nav-underline').style.width = '0';
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Scroll animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { 
                threshold: 0.1, 
                rootMargin: '0px 0px -100px 0px' 
            }
        );

        elements.forEach((el) => observer.observe(el));
    }

    // Initialize scroll animations
    setTimeout(animateOnScroll, 100);

    // Contact form handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email) {
                alert('Udfyld venligst navn og email');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Indtast venligst en gyldig email adresse');
                return;
            }

            // Simulate form submission
            console.log('Form data:', data);
            
            // Show success message
            contactForm.style.display = 'none';
            successMessage.classList.remove('hidden');
            
            // Reset form after 3 seconds
            setTimeout(() => {
                contactForm.style.display = 'block';
                successMessage.classList.add('hidden');
                contactForm.reset();
            }, 3000);
        });
    }

    // Parallax effect for decorative elements
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.absolute');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Throttled parallax for performance
    let ticking = false;
    function requestParallax() {
        if (!ticking) {
            requestAnimationFrame(handleParallax);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16);
        }
    }

    window.addEventListener('scroll', requestParallax);

    // Image lazy loading
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    lazyLoadImages();

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
            toggleMobileMenu();
        }
        
        // Scroll to top with Home key
        if (e.key === 'Home' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 100;
        const swipeDistance = touchEndX - touchStartX;
        
        // Swipe right to close mobile menu
        if (swipeDistance > swipeThreshold && !mobileMenu.classList.contains('translate-x-full')) {
            toggleMobileMenu();
        }
    }

    // Performance optimization: Debounce resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedResize = debounce(() => {
        // Close mobile menu on desktop resize
        if (window.innerWidth >= 1280 && !mobileMenu.classList.contains('translate-x-full')) {
            toggleMobileMenu();
        }
    }, 250);

    window.addEventListener('resize', debouncedResize);

    // Initialize everything
    handleScroll();
    updateActiveNav();
    
    console.log('Sophie Wagner website loaded successfully! 🎉');
});