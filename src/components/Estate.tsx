import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { FACILITIES } from '../constants';
import { Wifi, Wind, Tv, Utensils, Waves, Trees, Shield, Coffee } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

// Map icon strings from constants to Lucide components
const iconMap: Record<string, React.ElementType> = {
  'Wifi': Wifi,
  'Wind': Wind,
  'Tv': Tv,
  'Utensils': Utensils,
  'Waves': Waves,
  'Trees': Trees,
  'Shield': Shield,
  'Coffee': Coffee,
};

const Estate: React.FC = () => {
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (amenitiesRef.current) {
        gsap.to(amenitiesRef.current, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: amenitiesRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      if (headerRef.current) {
        const headerItems = headerRef.current.querySelectorAll('[data-estate-reveal]');
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
              start: 'top 75%'
            }
          }
        );
      }

      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll('[data-estate-stat]');
        gsap.fromTo(
          stats,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      if (amenitiesRef.current) {
        const amenityItems = amenitiesRef.current.querySelectorAll('[data-estate-amenity]');
        gsap.fromTo(
          amenityItems,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: amenitiesRef.current,
              start: 'top 80%'
            }
          }
        );
      }
    }, amenitiesRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <Section id="estate" className="bg-sand bg-atmosphere">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Left Column: Philosophy & Key Stats - Animated */}
        <div className="lg:w-5/12 lg:sticky lg:top-32">
          <div ref={headerRef}>
            <span data-estate-reveal className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-6 block">
              The Estate
            </span>

            <h2 data-estate-reveal className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05] tracking-tight">
              Space as the <br />
              <span className="italic text-stone-500">Ultimate Luxury</span>
            </h2>

            <p data-estate-reveal className="text-stone-600 leading-relaxed font-light mb-12 text-lg">
              Nestled in the heart of Ungasan's quiet luxury district, Villa VB stands as a testament to tropical modernism.
              Unlike typical villas, we offer true, unadulterated space: a 600m² private garden and a monumental 15m lap pool,
              ensuring your privacy is absolute.
            </p>

            {/* Typographic Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 border-t border-stone-300 pt-8">
              <div data-estate-stat className="text-center">
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-1">750<span className="text-sm align-top">m²</span></span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Land Size</span>
              </div>
              <div data-estate-stat className="text-center">
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-1">4</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Suites</span>
              </div>
              <div data-estate-stat className="text-center">
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-1">15<span className="text-sm align-top">m</span></span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Pool</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Signature Facilities Grid (Replaces Image) */}
        <div ref={amenitiesRef} className="lg:w-7/12 w-full bg-white/80 p-8 md:p-12 border border-white/60 shadow-coastal backdrop-blur-sm">
          <div className="mb-10 pb-4 border-b border-stone-100" data-estate-amenity>
            <h3 className="font-serif text-2xl text-charcoal">Signature Amenities</h3>
            <p className="text-xs text-stone-400 uppercase tracking-widest mt-2">Everything you need for a seamless stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {FACILITIES.map((facility) => {
              const IconComponent = iconMap[facility.iconName] || Coffee;
              return (
                <div key={facility.id} className="group" data-estate-amenity>
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-5 h-5 text-teak-accent" strokeWidth={1.5} />
                    <h4 className="text-sm font-bold text-stone-700 uppercase tracking-wide group-hover:text-ocean-deep transition-colors">
                      {facility.name}
                    </h4>
                  </div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed pl-8 border-l border-stone-200">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-stone-100 text-center md:text-left" data-estate-amenity>
            <p className="text-[10px] text-stone-400 italic">
              *Additional services like private chefs and drivers available upon request via Concierge.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Estate;
