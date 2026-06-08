import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeUp = {
  y: 28,
  autoAlpha: 0,
  duration: 0.8,
  ease: 'power2.out',
};

function resetMobileNav() {
  const navWrap = document.querySelector<HTMLElement>('.header .nav-wrap');
  const header = document.querySelector<HTMLElement>('[data-header]');
  const hamburger = document.querySelector<HTMLElement>('[data-hamburger]');

  if (navWrap) {
    gsap.set(navWrap, { clearProps: 'all' });
  }

  header?.classList.remove('is-open');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('is-nav-open');
}

function initHeader() {
  if (prefersReducedMotion) return;

  const mobileMq = window.matchMedia('(max-width: 768px)');

  gsap.from('.header .logo', {
    autoAlpha: 0,
    x: -16,
    duration: 0.7,
    ease: 'power2.out',
  });

  if (mobileMq.matches) {
    resetMobileNav();

    gsap.from('.header .hamburger', {
      autoAlpha: 0,
      x: 16,
      duration: 0.7,
      delay: 0.1,
      ease: 'power2.out',
      clearProps: 'transform',
    });
  } else {
    gsap.from('.header .nav-list .nav-item', {
      autoAlpha: 0,
      y: -10,
      duration: 0.5,
      stagger: 0.06,
      delay: 0.1,
      ease: 'power2.out',
    });
  }

  mobileMq.addEventListener('change', (event) => {
    gsap.set('.header .nav-wrap', { clearProps: 'all' });
    if (event.matches) {
      resetMobileNav();
    }
  });
}

function initHero() {
  if (prefersReducedMotion) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('[data-hero-image]', {
    scale: 1.1,
    autoAlpha: 0,
    duration: 1.5,
  })
    .from(
      '.hero-glow',
      {
        scale: 0.5,
        autoAlpha: 0,
        duration: 1.1,
      },
      '-=1.1',
    )
    .from(
      '.hero-text',
      {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
      },
      '-=0.7',
    )
    .from(
      '.hero-em',
      {
        scale: 0.4,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'back.out(2.5)',
      },
      '-=0.5',
    );

  gsap.to('.hero-glow', {
    scale: 1.2,
    opacity: 0.7,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 1.5,
  });

  gsap.to('[data-hero-image]', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
    },
    y: 60,
    scale: 1.06,
  });

  gsap.to('.hero-copy', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
    },
    y: -30,
    autoAlpha: 0.3,
  });
}

function initSectionTitles() {
  if (prefersReducedMotion) return;

  gsap.utils.toArray<HTMLElement>('.section-title').forEach((block) => {
    const title = block.querySelector<HTMLElement>('.title');
    if (!title) return;

    gsap.from(block, {
      scrollTrigger: {
        trigger: block,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      ...fadeUp,
    });

    ScrollTrigger.create({
      trigger: block,
      start: 'top 85%',
      onEnter: () => title.classList.add('is-inview'),
      once: true,
    });
  });
}

function initScrollSections() {
  if (prefersReducedMotion) return;

  gsap.from('.about-body > *', {
    scrollTrigger: {
      trigger: '.about-body',
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
    y: 24,
    autoAlpha: 0,
    duration: 0.7,
    stagger: 0.14,
    ease: 'power2.out',
  });

  gsap.from('.menu-shape', {
    scrollTrigger: {
      trigger: '.menu-inner',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    scale: 0.75,
    autoAlpha: 0,
    duration: 1.1,
    stagger: 0.2,
    ease: 'power2.out',
  });

  gsap.from('.menu-item', {
    scrollTrigger: {
      trigger: '.menu-list',
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
    y: 48,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.1,
    ease: 'power2.out',
    clearProps: 'transform',
  });

  gsap.from('.info-row', {
    scrollTrigger: {
      trigger: '.info-list',
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
    x: -24,
    autoAlpha: 0,
    duration: 0.6,
    stagger: 0.07,
    ease: 'power2.out',
  });

  gsap.from('.access-lead', {
    scrollTrigger: {
      trigger: '.access-inner',
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
    ...fadeUp,
    duration: 0.7,
  });

  gsap.from('.map-wrap', {
    scrollTrigger: {
      trigger: '.map-wrap',
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
    scale: 0.92,
    autoAlpha: 0,
    duration: 0.9,
    ease: 'power2.out',
  });

  gsap.from('.map-link', {
    scrollTrigger: {
      trigger: '.map-link',
      start: 'top 92%',
      toggleActions: 'play none none none',
    },
    y: 16,
    autoAlpha: 0,
    duration: 0.6,
    ease: 'power2.out',
  });

  gsap.from('.contact-lead', {
    scrollTrigger: {
      trigger: '.contact-inner',
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
    ...fadeUp,
    duration: 0.7,
  });

  gsap.from('.contact-card', {
    scrollTrigger: {
      trigger: '.contact-methods',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    y: 32,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.15,
    ease: 'power2.out',
  });

  gsap.from('[data-footer-item]', {
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 92%',
      toggleActions: 'play none none none',
    },
    y: 20,
    autoAlpha: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });
}

function initDecoFloat() {
  if (prefersReducedMotion) return;

  gsap.utils.toArray<HTMLElement>('.section-circle').forEach((circle, index) => {
    gsap.to(circle, {
      y: index % 2 === 0 ? 18 : -14,
      x: index % 2 === 0 ? 10 : -8,
      duration: 4.5 + index * 0.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
}

export function initAnimations() {
  initHeader();
  initHero();
  initSectionTitles();
  initScrollSections();
  initDecoFloat();
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
}
