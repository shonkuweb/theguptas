/**
 * THE GUPTA'S — Landscape • Design • Development
 * Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar On Scroll
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

  // 1. Mobile Navigation Drawer Controls
  const menuTrigger = document.getElementById('menu-trigger');
  const navDrawer = document.getElementById('nav-drawer');
  const navBackdrop = document.getElementById('nav-backdrop');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openNav() {
    if (!navDrawer) return;
    navDrawer.classList.add('open');
    navDrawer.setAttribute('aria-hidden', 'false');
    menuTrigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    if (!navDrawer) return;
    navDrawer.classList.remove('open');
    navDrawer.setAttribute('aria-hidden', 'true');
    menuTrigger.setAttribute('aria-expanded', 'false');
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

  // 2. Services Carousel Navigation & Progress Bar
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
      const scrollAmount = card ? card.offsetWidth + 16 : 280;
      servicesTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    btnPrevService.addEventListener('click', () => {
      const card = servicesTrack.querySelector('.service-card');
      const scrollAmount = card ? card.offsetWidth + 16 : 280;
      servicesTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Initial progress bar calculation
    updateProgress();
  }

  // 3. Subtle Desktop Parallax on Hero Image
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
