'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type LocomotiveScroll from 'locomotive-scroll';

declare global {
  interface Window {
    locomotiveScrollInstance?: LocomotiveScroll;
  }
}

export const useSmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let locomotiveScroll: LocomotiveScroll | null = null;
    let scrollContainer: HTMLElement | null = null;

    const initScroll = async () => {
      scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
      
      if (!scrollContainer) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const userReducedMotion = document.documentElement.classList.contains('a11y-reduce-motion');
      if (prefersReducedMotion || userReducedMotion) return;

      const LocomotiveScrollModule = (await import('locomotive-scroll')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      locomotiveScroll = new LocomotiveScrollModule({
        el: scrollContainer,
        smooth: true,
        multiplier: 4,
        class: 'is-revealed',
        scrollFromAnywhere: true,
      });

      window.locomotiveScrollInstance = locomotiveScroll;

      locomotiveScroll.on('scroll', (instance: LocomotiveScroll) => {
        interface LocomotiveScrollWithDirection extends LocomotiveScroll {
          direction?: string;
        }
        const direction = (instance as LocomotiveScrollWithDirection).direction;
        if (direction) {
          document.documentElement.setAttribute('data-scroll-direction', direction);
        }
        ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value?: number) {
          return arguments.length && value !== undefined
            ? locomotiveScroll?.scrollTo(value, { duration: 0, disableLerp: true })
            : locomotiveScroll?.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollContainer?.style.transform ? 'transform' : 'fixed',
      });

      ScrollTrigger.addEventListener('refresh', () => {
        locomotiveScroll?.update();
      });

      ScrollTrigger.refresh();
    };

    const timeoutId = setTimeout(initScroll, 150);

    return () => {
      clearTimeout(timeoutId);
      if (locomotiveScroll && scrollContainer) {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.scrollerProxy(scrollContainer!, {});
          ScrollTrigger.addEventListener('refresh', () => {});
          ScrollTrigger.refresh();
        });
        locomotiveScroll.destroy();
        locomotiveScroll = null;
        window.locomotiveScrollInstance = undefined;
      }
    };
  }, [pathname]);
};
