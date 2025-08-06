
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-bg');
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    });

    // Active page highlighting
    document.addEventListener('DOMContentLoaded', function() {
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-links a');
      
      navLinks.forEach(link => {
        const linkText = link.textContent.trim().toLowerCase();
        
        // Check if current page matches the link text
        if (currentPath.includes('chatbot') && linkText === 'chatbot') {
          link.classList.add('active');
        } else if (currentPath.includes('dashboard') && linkText === 'dashboard') {
          link.classList.add('active');
        } else if (currentPath.includes('home') && linkText === 'home') {
          link.classList.add('active');
        } else if (currentPath.includes('faq') && linkText === 'faqs') {
          link.classList.add('active');
        }
      });
    });