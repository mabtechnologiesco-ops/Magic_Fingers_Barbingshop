import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they enter the viewport. Returns a ref to attach to a container.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    // Fallback: ensure content is never stuck invisible if the observer
    // fails to fire (e.g. on some hosting/CDN setups or slow loads).
    const revealAll = () => items.forEach((item) => item.classList.add('is-visible'));

    if (typeof IntersectionObserver === 'undefined') {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((item) => observer.observe(item));

    // Safety net: reveal everything after a short delay so the page is
    // never left blank/invisible.
    const fallback = window.setTimeout(revealAll, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return ref;
}

/** Tracks whether the page has been scrolled past a threshold (default 40px). */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
