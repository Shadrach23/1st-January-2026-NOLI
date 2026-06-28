import { useEffect, useRef } from "react";

/**
 * Reveals an element on scroll by toggling `data-revealed="true"` once it enters
 * the viewport. Pair with the `.reveal` utility in index.css for the transition.
 *
 * Returns a ref to attach to the element you want to animate. The reveal fires
 * once and then stops observing — content settles into place and stays put.
 *
 * Respects `prefers-reduced-motion` (the CSS utility no-ops there anyway).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string } = {},
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or SSR) → just show it.
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-revealed", "true");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
