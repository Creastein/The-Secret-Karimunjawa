import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';
import { REVIEWS } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const headerItems = headerRef.current.querySelectorAll('[data-testimonial-reveal]');
        gsap.fromTo(
          headerItems,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <Section className="bg-limestone">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <div ref={headerRef} className="mb-12 text-center">
          <span data-testimonial-reveal className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">Guest Voices</span>
          <h2 data-testimonial-reveal className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.05]">
            Moments from Our Guests
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {REVIEWS.map((review) => (
          <div key={review.id} className="testimonial-card relative p-8 md:p-12 border border-white/60 bg-white/80 backdrop-blur-sm shadow-coastal">
            <Quote className="w-8 h-8 text-teak-accent/40 absolute top-8 left-8" />
            <p className="font-serif text-lg md:text-xl text-stone-600 italic leading-relaxed mb-6 relative z-10 pt-4">
              "{review.text}"
            </p>
            <div>
              <p className="text-xs uppercase tracking-widest text-tide font-semibold">{review.author}</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-wide mt-1">{review.origin}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
