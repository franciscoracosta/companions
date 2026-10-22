import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

// Remember the chosen language so the root page redirects to it next time.
document.querySelectorAll<HTMLAnchorElement>('[data-set-locale]').forEach((a) => {
  a.addEventListener('click', () => {
    try {
      localStorage.setItem('locale', a.dataset.setLocale!);
    } catch {}
  });
});

// Close the language menu when clicking outside it.
const lang = document.querySelector<HTMLDetailsElement>('[data-lang]');
document.addEventListener('click', (e) => {
  if (lang?.open && !lang.contains(e.target as Node)) lang.open = false;
});

// Nav gets a solid background once the page scrolls.
const nav = document.querySelector('[data-nav]');
const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Robot eyes follow the pointer.
const robots = [...document.querySelectorAll<SVGSVGElement>('[data-robot]')];
if (finePointer && !reduced) {
  let frame = 0;
  window.addEventListener('pointermove', (e) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      for (const r of robots) {
        const box = r.getBoundingClientRect();
        if (box.bottom < 0 || box.top > innerHeight) continue;
        const dx = e.clientX - (box.left + box.width / 2);
        const dy = e.clientY - (box.top + box.height * 0.4);
        const dist = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, dist / 400);
        r.style.setProperty('--ex', `${((dx / dist) * 7 * k).toFixed(2)}px`);
        r.style.setProperty('--ey', `${((dy / dist) * 5 * k).toFixed(2)}px`);
      }
    });
  });
}

// Pre-order form: no backend yet. TODO: POST to an API route that adds the contact to Resend.
const form = document.querySelector<HTMLFormElement>('[data-preorder]');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.elements.namedItem('email') as HTMLInputElement;
  if (!email.checkValidity()) {
    email.setAttribute('aria-invalid', 'true');
    email.focus();
    return;
  }
  email.removeAttribute('aria-invalid');
  const success = form.querySelector<HTMLElement>('[data-success]');
  if (success) {
    success.hidden = false;
    if (!reduced) gsap.from(success, { y: 10, opacity: 0, duration: 0.5, ease: 'power3.out' });
  }
});

// "Pre-order" buttons on product cards preselect that model.
document.querySelectorAll<HTMLElement>('[data-pick]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = form?.querySelector<HTMLInputElement>(`input[name="model"][value="${btn.dataset.pick}"]`);
    if (input) input.checked = true;
  });
});

if (!reduced) {
  // Hero entrance
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.from('[data-hero]', { y: 40, opacity: 0, duration: 1, stagger: 0.09 })
    .from('[data-bot]', { y: 80, opacity: 0, scale: 0.85, duration: 1.1, stagger: 0.12, ease: 'back.out(1.6)' }, 0.2)
    .from('[data-chip]', { scale: 0.6, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'back.out(2)' }, 0.9);

  // Hero robots drift apart slightly as you scroll away
  gsap.to('.bot--care', { xPercent: -12, yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.bot--guard', { xPercent: 12, yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.bot--play', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // Generic reveals
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', overwrite: true }),
  });

  // X-ray robot rotates gently with scroll
  gsap.fromTo('[data-xray]', { rotate: -6, scale: 0.92 }, { rotate: 6, scale: 1, ease: 'none', scrollTrigger: { trigger: '#how', start: 'top bottom', end: 'bottom top', scrub: true } });

  // Roadmap progress fill
  const fill = document.querySelector('[data-roadmap-fill]');
  if (fill) {
    const vertical = () => window.matchMedia('(max-width: 900px)').matches;
    gsap.fromTo(
      fill,
      { scaleX: 0, scaleY: 0 },
      {
        scaleX: () => (vertical() ? 1 : 0.42),
        scaleY: () => (vertical() ? 0.42 : 1),
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-roadmap]', start: 'top 75%', end: 'top 30%', scrub: 1, invalidateOnRefresh: true },
      },
    );
  }

  // Investor page: use-of-funds bars grow in
  document.querySelectorAll<HTMLElement>('[data-bar]').forEach((bar, i) => {
    gsap.from(bar, { scaleX: 0, duration: 1.2, delay: i * 0.12, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 90%', once: true } });
  });

  // Product cards tilt toward the pointer
  if (finePointer) {
    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
      const rx = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3.out' });
      const ry = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3.out' });
      gsap.set(card, { transformPerspective: 900 });
      card.addEventListener('pointermove', (e) => {
        const b = card.getBoundingClientRect();
        rx(((e.clientY - b.top) / b.height - 0.5) * -8);
        ry(((e.clientX - b.left) / b.width - 0.5) * 10);
      });
      card.addEventListener('pointerleave', () => {
        rx(0);
        ry(0);
      });
    });
  }
}
