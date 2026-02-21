document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Animation (Reveal Elements)
    function reveal() {
        var reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // when to trigger

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    // Initial trigger
    reveal();
    // Trigger on scroll
    window.addEventListener('scroll', reveal);

    // 3. Simple Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    mobileBtn.addEventListener('click', () => {
        // In a real app, you would toggle a mobile menu dropdown here
        alert('Mobile menu clicked! (To be implemented)');
    });

    // 4. Parallax effect for blobs
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const blob1 = document.querySelector('.blob-1');
        const blob2 = document.querySelector('.blob-2');

        if (blob1 && blob2) {
            blob1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
            blob2.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
        }
    });
});
