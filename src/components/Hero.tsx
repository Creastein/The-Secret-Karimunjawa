import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!imageRef.current || !overlayRef.current || !containerRef.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      timeline
        .to(imageRef.current, { yPercent: 22, scale: 1.08, ease: 'none' }, 0)
        .to(overlayRef.current, { opacity: 0.05, ease: 'none' }, 0);

      if (heroContentRef.current) {
        const items = heroContentRef.current.querySelectorAll('[data-hero-reveal]');
        gsap.fromTo(
          items,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.12 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen">
      <div
        ref={containerRef}
        className="relative min-h-[95vh] lg:min-h-screen grid lg:grid-cols-[1.05fr_1.4fr] gap-8 lg:gap-0 items-stretch"
      >
        <div className="relative z-10 flex items-end lg:items-center px-6 md:px-12 lg:px-16 py-16 lg:py-24">
          <div
            ref={heroContentRef}
            className="max-w-xl bg-limestone/90 backdrop-blur-xl px-8 md:px-10 py-10 md:py-12 border border-white/70 ring-coastal shadow-coastal"
          >
            <div data-hero-reveal className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-teak-accent/80" />
              <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-ink/70">
                Ungasan, Bali
              </span>
            </div>

            <h1 data-hero-reveal className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
              Coastal Modernism
              <span className="block font-light italic text-tide">Refined to Silence</span>
            </h1>

            <p data-hero-reveal className="mt-6 text-sm md:text-base text-ink/70 leading-relaxed">
              A private sanctuary where raw concrete, teak, and ocean air converge. Experience
              an editorial retreat curated for presence, light, and space.
            </p>

            <div data-hero-reveal className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="bg-charcoal text-white px-6 py-3 text-[11px] uppercase tracking-[0.3em] hover:bg-teak-accent transition-colors"
              >
                Reserve the Villa
              </a>
              <a
                href="#gallery"
                className="px-6 py-3 text-[11px] uppercase tracking-[0.3em] border border-ink/20 text-ink hover:border-ink/60 transition-colors"
              >
                View the Estate
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <img
            ref={imageRef}
            src="/src/assets/hero-coastal.png"
            alt="Villa VB Bali Main Pool"
            className="absolute inset-0 h-full w-full object-cover object-[50%_75%]"
            loading="eager"
          />
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

          <div className="absolute bottom-10 right-10 text-right text-white/70 text-[10px] uppercase tracking-[0.35em]">
            <span className="block">15m Lap Pool</span>
            <span className="block">600m2 Private Garden</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-ink/50 hidden md:block">
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
