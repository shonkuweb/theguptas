/**
 * THE GUPTA'S LANDSCAPE — Interactive Architecture & UI Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar On Scroll
  const siteHeader = document.getElementById('site-header');
  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // 2. Active Section Spy for Desktop Navbar
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // 3. Mobile Navigation Drawer Controls
  const menuTrigger = document.getElementById('menu-trigger');
  const navDrawer = document.getElementById('nav-drawer');
  const navBackdrop = document.getElementById('nav-backdrop');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openNav() {
    if (!navDrawer) return;
    navDrawer.classList.add('open');
    navDrawer.setAttribute('aria-hidden', 'false');
    if (menuTrigger) menuTrigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    if (!navDrawer) return;
    navDrawer.classList.remove('open');
    navDrawer.setAttribute('aria-hidden', 'true');
    if (menuTrigger) menuTrigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuTrigger) menuTrigger.addEventListener('click', openNav);
  if (drawerClose) drawerClose.addEventListener('click', closeNav);
  if (navBackdrop) navBackdrop.addEventListener('click', closeNav);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNav();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer && navDrawer.classList.contains('open')) {
      closeNav();
    }
  });

  // 4. Services Carousel Navigation & Dynamic Progress Bar
  const servicesTrack = document.getElementById('services-track');
  const btnPrevService = document.getElementById('btn-prev-service');
  const btnNextService = document.getElementById('btn-next-service');
  const servicesProgressBar = document.getElementById('services-progress-bar');

  if (servicesTrack && btnPrevService && btnNextService) {
    function updateProgress() {
      if (!servicesProgressBar) return;
      const maxScroll = servicesTrack.scrollWidth - servicesTrack.clientWidth;
      if (maxScroll <= 0) {
        servicesProgressBar.style.transform = 'translateX(0%)';
        return;
      }
      const scrollFraction = servicesTrack.scrollLeft / maxScroll;
      const trackWidthPercent = (servicesProgressBar.offsetWidth / servicesProgressBar.parentElement.offsetWidth) * 100;
      const maxTranslatePercent = (100 - trackWidthPercent);
      const translatePercent = scrollFraction * maxTranslatePercent;
      servicesProgressBar.style.transform = `translateX(${translatePercent * (servicesProgressBar.parentElement.offsetWidth / servicesProgressBar.offsetWidth)}%)`;
    }

    servicesTrack.addEventListener('scroll', updateProgress, { passive: true });

    btnNextService.addEventListener('click', () => {
      const card = servicesTrack.querySelector('.service-card');
      const scrollAmount = card ? card.offsetWidth + 18 : 300;
      servicesTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    btnPrevService.addEventListener('click', () => {
      const card = servicesTrack.querySelector('.service-card');
      const scrollAmount = card ? card.offsetWidth + 18 : 300;
      servicesTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Initial progress bar calculation
    updateProgress();
    window.addEventListener('resize', updateProgress);
  }

  // 5. Subtle Desktop Parallax on Hero Image
  const heroSection = document.getElementById('hero');
  const heroBg = document.querySelector('.hero-bg-layer');

  if (heroSection && heroBg && window.matchMedia('(hover: hover) and (min-width: 992px)').matches) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      heroBg.style.transform = `scale(1.025) translate(${x * -10}px, ${y * -8}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroBg.style.transform = 'scale(1.008) translate(0px, 0px)';
    });
  }
});
