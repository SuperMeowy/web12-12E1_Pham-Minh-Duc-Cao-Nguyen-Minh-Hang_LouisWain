
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

        const slides = document.querySelectorAll('.carousel-slide');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const ticketSelect = document.getElementById('ticket-type');
        const counter = document.getElementById('slide-counter');

        let currentSlide = 0;

        function updateCarousel(index) {
            // Toggle visibility
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            // Update Form Select
            ticketSelect.selectedIndex = index + 1;
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
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Sync when user changes select dropdown manually
        ticketSelect.addEventListener('change', () => {
            if(ticketSelect.selectedIndex > 0) {
                currentSlide = ticketSelect.selectedIndex - 1;
                updateCarousel(currentSlide);
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            updateCarousel(currentSlide);
        });