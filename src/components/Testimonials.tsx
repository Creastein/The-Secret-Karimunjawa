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
      if (!sectionRef.current) return;

      const title = sectionRef.current.querySelector('[data-testimonial-title]');
      if (title) {
        gsap.fromTo(title,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: {
              trigger: title,
              start: 'top 85%'
            }
          }
        );
      }

      const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <Section className="bg-sand relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-white/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-testimonial-title>
          <span className="text-teak-accent text-xs tracking-[0.25em] uppercase font-semibold mb-4 block">Guest Voices</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Moments from Our Guests</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {REVIEWS.map((review) => (
            <div key={review.id} className="testimonial-card flex flex-col items-center text-center p-6 md:p-8 lg:p-12">
              <div className="mb-8 text-teak-accent/20">
                <Quote className="w-8 h-8 md:w-12 md:h-12 fill-current" />
              </div>

              <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed mb-10 italic">
                "{review.text}"
              </p>

              <div className="w-12 h-px bg-teak-accent/30 mb-6"></div>

              <div>
                <h4 className="text-sm uppercase tracking-widest text-charcoal font-semibold mb-1">{review.author}</h4>
                <span className="text-[10px] text-stone-400 uppercase tracking-wide">{review.origin}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
