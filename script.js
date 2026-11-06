/**
 * ALFIN BURHANUDIN — PREMIUM INTERNATIONAL DEVELOPER PORTFOLIO
 * Core Interactions, 3D Card Engine & Ambient Canvas
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. TYPING ANIMATION (Senior Grade Custom Engine)
     -------------------------------------------------------------------------- */
  const typedTarget = document.getElementById('typed-text');
  if (typedTarget) {
    const roles = [
      'Informatics Engineering Student.',
      'Full-Stack Web Developer.',
      'Mobile App Developer.',
      'IoT & Tech Enthusiast.',
      'Problem Solver & Innovator.'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 70;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typedTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 35;
      } else {
        typedTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 75;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2200; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400; // Pause before new word
      }

      setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
  }

  /* --------------------------------------------------------------------------
     2. 3D PERSPECTIVE TILT ENGINE (HERO DEVELOPER IDENTITY CARD)
     -------------------------------------------------------------------------- */
  const cardStage = document.getElementById('heroCardStage');
  const badgeCard = document.getElementById('devBadgeCard');

  if (cardStage && badgeCard) {
    let bounds;

    function rotateToMouse(e) {
      if (!bounds) bounds = cardStage.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.left;
      const topY = mouseY - bounds.top;

      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      // Max tilt angle
      const maxTilt = 14;
      const rotateX = (-center.y / (bounds.height / 2)) * maxTilt;
      const rotateY = (center.x / (bounds.width / 2)) * maxTilt;

      badgeCard.style.animation = 'none'; // Pause floating animation on hover
      badgeCard.style.transform = `
        perspective(1000px)
        rotateX(${rotateX.toFixed(2)}deg)
        rotateY(${rotateY.toFixed(2)}deg)
        scale3d(1.03, 1.03, 1.03)
      `;
    }

    cardStage.addEventListener('mouseenter', () => {
      bounds = cardStage.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    });

    cardStage.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', rotateToMouse);
      badgeCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      badgeCard.style.animation = 'cardFloating 6s ease-in-out infinite alternate';
    });
  }

  /* --------------------------------------------------------------------------
     3. FLOATING GLASS NAVBAR SCROLL & ACTIVE SPY
     -------------------------------------------------------------------------- */
  const navPill = document.querySelector('.nav-pill');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');
  const sections = document.querySelectorAll('header[id], section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (navPill) {
      if (scrollY > 40) {
        navPill.classList.add('scrolled');
      } else {
        navPill.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // IntersectionObserver for Section Highlighting
  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => navObserver.observe(section));

  /* --------------------------------------------------------------------------
     4. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      }
    });

    // Close when clicking any link
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. AMBIENT PARTICLES & CONSTELLATION CANVAS
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null, radius: 120 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 0.8;
        this.baseAlpha = Math.random() * 0.35 + 0.15;
        this.color = Math.random() > 0.4 ? '#4776FF' : '#916BFF';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Subtle mouse repulsion
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.baseAlpha;
        ctx.fill();
      }
    }

    let particles = [];
    function initParticles() {
      particles = [];
      const density = Math.floor((width * height) / 18000);
      const count = Math.min(Math.max(density, 30), 65);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / 130) * 0.14;
            ctx.strokeStyle = '#4776FF';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(renderCanvas);
    }

    renderCanvas();
  }

  /* --------------------------------------------------------------------------
     6. CURSOR AMBIENT GLOW
     -------------------------------------------------------------------------- */
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateCursor() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      cursorGlow.style.left = `${currentX}px`;
      cursorGlow.style.top = `${currentY}px`;
      requestAnimationFrame(updateCursor);
    }

    updateCursor();
  }

  /* --------------------------------------------------------------------------
     7. TOAST NOTIFICATION & COPY ACTION
     -------------------------------------------------------------------------- */
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');

  window.showToast = function (message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  window.copyEmail = function (email) {
    navigator.clipboard.writeText(email).then(() => {
      window.showToast('Copied to clipboard: ' + email);
    }).catch(() => {
      window.showToast('Email: ' + email);
    });
  };

  /* --------------------------------------------------------------------------
     8. BACK TO TOP
     -------------------------------------------------------------------------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
