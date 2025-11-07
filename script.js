document.addEventListener("DOMContentLoaded", () => {
    /* -------------------------------------------------------------------------- */
    /* 1. INISIALISASI LIBRARY PIHAK KETIGA                                       */
    /* -------------------------------------------------------------------------- */

    // AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 100, // Memicu sedikit lebih lambat untuk efek yang lebih baik
        easing: 'ease-in-out-cubic'
    });

    // Typed.js
    const typedStrings = [
        'Web Developer.',
        'Mobile Developer.',
        'Tech Enthusiast.',
        'Problem Solver.',
        'Calon Magang Anda.'
    ];
    new Typed('#typed-text', {
        strings: typedStrings,
        typeSpeed: 50,
        backSpeed: 35,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        smartBackspace: true // Hanya menghapus bagian yang berbeda
    });

    // Particles.js (Konfigurasi Minimalis)
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#64ffda" }, // Warna aksen hijau
            "shape": { "type": "circle" },
            "opacity": { "value": 0.3, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#64ffda", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
                "push": { "particles_nb": 3 }
            }
        },
        "retina_detect": true
    });

    /* -------------------------------------------------------------------------- */
    /* 2. NAVIGASI & INTERAKSI SCROLL                                             */
    /* -------------------------------------------------------------------------- */

    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id], header[id]'); // Termasuk header#hero

    // Fungsi Throttle untuk kinerja scroll yang lebih baik (opsional tapi direkomendasikan)
    let lastScrollTop = 0;
    let isScrolling = false;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Efek Shadow Navigasi
        if (scrollTop > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        // Sembunyikan/Tampilkan Nav saat Scroll (Opsional, efek modern)
        // if (scrollTop > lastScrollTop && scrollTop > 100) {
        //     nav.style.transform = 'translateY(-100%)'; // Sembunyikan saat scroll ke bawah
        // } else {
        //     nav.style.transform = 'translateY(0)'; // Tampilkan saat scroll ke atas
        // }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        isScrolling = false;
    }

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(handleScroll);
            isScrolling = true;
        }
    });

    // Spy Scroll Modern dengan IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Area aktif di tengah layar agar lebih akurat
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                // Hapus kelas aktif dari semua link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Tambahkan kelas aktif ke link yang sesuai dengan section yang terlihat
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

});