
        const navbar = document.getElementById('navbar'); 
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            lastScrollTop = scrollTop;
        });

        // --- Carousel Logic ---
        // Only run if carousel elements exist on the page
        const slides = document.querySelectorAll('.carousel-slide');
        if (slides.length > 0) {
            const nextBtn = document.getElementById('nextBtn');
            const prevBtn = document.getElementById('prevBtn');
            const ticketSelect = document.getElementById('ticket-type');
            let currentSlide = 0;

            function updateCarousel(index) {
                // Toggle visibility
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
                // Update Form Select
                if (ticketSelect) {
                    ticketSelect.selectedIndex = index + 1;
                }
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                updateCarousel(currentSlide);
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateCarousel(currentSlide);
            }

            // Event Listeners
            if (nextBtn && prevBtn) {
                nextBtn.addEventListener('click', nextSlide);
                prevBtn.addEventListener('click', prevSlide);
            }
            
            // Sync when user changes select dropdown manually
            if (ticketSelect) {
                ticketSelect.addEventListener('change', () => {
                    if (ticketSelect.selectedIndex > 0) {
                        currentSlide = ticketSelect.selectedIndex - 1;
                        updateCarousel(currentSlide);
                    }
                });
            }

            // Initialize Carousel on DOMContentLoaded
            document.addEventListener('DOMContentLoaded', () => {
                updateCarousel(currentSlide);
            });
        }

        // --- Hamburger Menu Logic ---
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active'); // Optional: Animate hamburger icon
            });

            // Close nav when a link is clicked (for single-page navigation or general UX)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });
        }


        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Carousel if it exists
            const carouselSlides = document.querySelectorAll('.carousel-slide');
            if (carouselSlides.length > 0) {
                // Find and set up carousel elements and logic
                const nextBtn = document.getElementById('nextBtn');
                const prevBtn = document.getElementById('prevBtn');
                const ticketSelect = document.getElementById('ticket-type');
                let currentSlide = 0;

                function updateCarousel(index) {
                    carouselSlides.forEach((slide, i) => {
                        slide.classList.toggle('active', i === index);
                    });
                    if (ticketSelect) {
                        ticketSelect.selectedIndex = index + 1;
                    }
                }

                function nextSlide() {
                    currentSlide = (currentSlide + 1) % carouselSlides.length;
                    updateCarousel(currentSlide);
                }

                function prevSlide() {
                    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
                    updateCarousel(currentSlide);
                }

                if (nextBtn && prevBtn) {
                    nextBtn.addEventListener('click', nextSlide);
                    prevBtn.addEventListener('click', prevSlide);
                }
                
                if (ticketSelect) {
                    ticketSelect.addEventListener('change', () => {
                        if (ticketSelect.selectedIndex > 0) {
                            currentSlide = ticketSelect.selectedIndex - 1;
                            updateCarousel(currentSlide);
                        }
                    });
                }
                // Initial update
                updateCarousel(currentSlide);
            }

            // --- Ultra-Robust Navigation Highlighting ---
            const navLinks = document.querySelectorAll('.nav-links a');
            const currentFullURL = window.location.href;
            const currentPathname = window.location.pathname;
            const currentHash = window.location.hash;

            // 1. Reset all links
            navLinks.forEach(link => link.classList.remove('active'));

            // 2. Main logic
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href'); // Use getAttribute for direct comparison of relative paths

                // A. Check for "Home" link specifically
                if (linkHref === 'home.html') {
                    // Check if current page is home.html or the root directory
                    if (currentFullURL.endsWith('/home.html') || currentPathname === '/' || currentPathname.endsWith('/')) {
                        link.classList.add('active');
                    }
                }
                // B. Check for "Currently shown" (index.html) dropdown parent
                else if (linkHref === 'index.html' && link.classList.contains('dropbtn')) {
                    if (currentFullURL.endsWith('/index.html') || currentPathname.endsWith('/') || currentPathname.endsWith('/index.html')) {
                        link.classList.add('active');
                    }
                }
                // C. Check all other links by full URL match (most reliable)
                else if (link.href === currentFullURL) {
                    link.classList.add('active');
                }
            });

            // D. Handle dropdown children for index.html (if parent is active and hash exists)
            const dropbtnForIndex = document.querySelector('.dropbtn[href="index.html"]');
            if (dropbtnForIndex && dropbtnForIndex.classList.contains('active') && currentHash) {
                 navLinks.forEach(link => {
                    if (link.closest('.dropdown-content')) {
                        if (link.href === currentFullURL) { // Full match for hash links
                            link.classList.add('active');
                        }
                    }
                });
            }
        });