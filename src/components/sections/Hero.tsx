import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
  })
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen">
      <div
        ref={containerRef}
        className="relative min-h-[95vh] lg:min-h-screen grid lg:grid-cols-[1.05fr_1.4fr] gap-8 lg:gap-0 items-stretch"
      >
        <div className="relative z-10 flex items-end lg:items-center px-5 md:px-12 lg:px-16 py-10 md:py-16 lg:py-24 order-2 lg:order-1">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-xl bg-limestone/90 backdrop-blur-xl px-6 md:px-10 py-8 md:py-12 border border-white/70 ring-coastal shadow-coastal"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-teak-accent/80" />
              <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-ink/70">
                Karimunjawa, Jepara
              </span>
            </motion.div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
              <motion.span variants={fadeUp} custom={1} className="block">Island Paradise</motion.span>
              <motion.span variants={fadeUp} custom={2} className="block font-light italic text-tide">Hidden in Nature</motion.span>
            </h1>

            <motion.p variants={fadeUp} custom={3} className="mt-6 text-sm md:text-base text-ink/70 leading-relaxed">
              An exclusive island retreat where rustic teak, turquoise waters, and genuine hospitality
              converge. Experience Karimunjawa's hidden gem — rated 9.6 Istimewa on Booking.com.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="bg-charcoal text-white px-6 py-3 text-[11px] uppercase tracking-[0.3em] hover:bg-teak-accent transition-colors"
              >
                Reserve Your Stay
              </a>
              <a
                href="#gallery"
                className="px-6 py-3 text-[11px] uppercase tracking-[0.3em] border border-ink/20 text-ink hover:border-ink/60 transition-colors"
              >
                View the Retreat
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
          <img
            ref={imageRef}
            src="/assets/hero-coastal.png"
            alt="The Secret Karimunjawa Beachfront Villa"
            className="absolute inset-0 h-full w-full object-cover object-[50%_75%]"
            loading="eager"
          />
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-10 right-10 text-right text-white/70 text-[10px] uppercase tracking-[0.35em]"
          >
            <span className="block">Private Beach</span>
            <span className="block">Sea View Terraces</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-ink/50 hidden md:block"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
};

export default Hero;
