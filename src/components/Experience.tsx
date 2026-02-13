import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { Sparkles, UtensilsCrossed, Car, User, Shirt, Flower2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const headerItems = headerRef.current.querySelectorAll('[data-experience-reveal]');
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

      const rows = gsap.utils.toArray<HTMLElement>('.service-row');
      if (!rows.length) return;

      gsap.fromTo(
        rows,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 35%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const services = [
    {
      title: "Villa Butler",
      desc: "Dedicated assistance for reservations, excursions, and daily needs. Your personal connection to the island.",
      icon: User
    },
    {
      title: "Private Culinary",
      desc: "Daily breakfast prepared in-villa. Private chef available for intimate dinners and BBQ gatherings.",
      icon: UtensilsCrossed
    },
    {
      title: "Wellness & Spa",
      desc: "Professional therapists bringing Balinese massage and reflexology directly to your poolside deck.",
      icon: Flower2
    },
    {
      title: "Housekeeping",
      desc: "Discreet daily cleaning and evening turndown service to ensure pristine comfort at all times.",
      icon: Shirt
    },
    {
      title: "Chauffeur Service",
      desc: "Seamless airport transfers and luxury car rentals to explore the Bukit Peninsula in style.",
      icon: Car
    },
    {
      title: "Concierge",
      desc: "Exclusive access to beach clubs, restaurant reservations, and cultural tours curated for you.",
      icon: Sparkles
    }
  ];

  const handleContact = () => {
    window.open(`https://wa.me/6281234567890?text=I'm%20interested%20in%20arranging%20additional%20services%20for%20my%20stay.`, '_blank');
  };

  return (
    <Section id="experience" className="bg-white bg-atmosphere">
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        <div ref={headerRef} className="lg:sticky lg:top-32">
          <span data-experience-reveal className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">The Hospitality</span>
          <h2 data-experience-reveal className="font-serif text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-8 leading-[1.05] tracking-tight">
            Bespoke <br />
            <span className="italic text-stone-400">Services</span>
          </h2>
          <p data-experience-reveal className="text-stone-600 font-light leading-relaxed mb-8 text-lg max-w-md">
            True luxury is the absence of effort. Our team operates with an intuitive understanding of your needs—present when required, invisible when you seek solitude.
          </p>
          <button
            data-experience-reveal
            onClick={handleContact}
            className="text-xs uppercase tracking-widest border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-white transition-all"
          >
            Request Services
          </button>
        </div>

        <div className="space-y-0 border-t border-stone-200">
          {services.map((item, index) => (
            <div
              key={index}
              className="service-row group py-8 border-b border-stone-200 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-limestone/60 transition-all duration-500 cursor-default px-2"
            >
              <div className="flex items-center gap-4">
                <div className="text-stone-300 group-hover:text-teak-accent transition-colors">
                  <item.icon className="w-5 h-5" strokeWidth={1} />
                </div>
                <h4 className="font-serif text-xl md:text-2xl text-stone-700 group-hover:text-charcoal transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-stone-400 font-light tracking-wide max-w-xs text-left md:text-right group-hover:text-stone-600 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Services;
