/* ========================================================================
   AURARING · theme.js
   Header scroll / mobile nav / FAQ accordion / scroll reveal /
   product gallery / cart quantity / announcement dismiss
   ======================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------- Header scroll */
  const header = document.querySelector('.header');
  if (header) {
    const check = () => header.classList.toggle('is-scrolled', window.scrollY > 48);
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  /* ------------------------------------------------ Mobile nav */
  const toggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('[data-mobile-close]');

  function openNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('is-open');
    toggle?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    toggle?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', () => {
    mobileNav?.classList.contains('is-open') ? closeNav() : openNav();
  });
  mobileClose?.addEventListener('click', closeNav);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  /* ------------------------------------------------ FAQ accordion */
  document.querySelectorAll('.faq-item__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const wasOpen = item.classList.contains('is-open');

      // Close all siblings
      item.closest('.faq-section__list')?.querySelectorAll('.faq-item.is-open').forEach(open => {
        open.classList.remove('is-open');
        open.querySelector('.faq-item__trigger')?.setAttribute('aria-expanded', 'false');
      });

      if (!wasOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ------------------------------------------------ Scroll reveal */
  const observed = document.querySelectorAll('.reveal, .reveal-children');
  if (observed.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    observed.forEach(el => io.observe(el));
  } else {
    observed.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------------------------------------- Announcement dismiss */
  document.querySelector('[data-announcement-close]')?.addEventListener('click', function () {
    const bar = this.closest('.announcement-bar');
    if (!bar) return;
    bar.style.maxHeight = bar.scrollHeight + 'px';
    requestAnimationFrame(() => {
      bar.style.transition = 'max-height 0.3s, opacity 0.3s, padding 0.3s';
      bar.style.maxHeight = '0';
      bar.style.opacity = '0';
      bar.style.paddingBlock = '0';
      bar.style.overflow = 'hidden';
    });
  });

  /* ---------------------------------------- Product gallery thumbs */
  document.querySelectorAll('.product-page__gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.querySelector('img')?.src;
      const main = thumb.closest('.product-page__gallery')?.querySelector('.product-page__gallery-main img');
      if (!src || !main) return;
      main.src = src;
      thumb.closest('.product-page__gallery-thumbs')
        ?.querySelectorAll('.product-page__gallery-thumb')
        .forEach(t => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
    });
  });

  /* ----------------------------------------------- Cart quantity */
  document.querySelectorAll('.cart-item__qty').forEach(wrap => {
    const minus = wrap.querySelector('[data-qty-minus]');
    const plus  = wrap.querySelector('[data-qty-plus]');
    const input = wrap.querySelector('input');
    if (!minus || !plus || !input) return;

    minus.addEventListener('click', () => {
      const v = parseInt(input.value, 10);
      if (v > 1) { input.value = v - 1; input.dispatchEvent(new Event('change', { bubbles: true })); }
    });
    plus.addEventListener('click', () => {
      input.value = parseInt(input.value, 10) + 1;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

})();
