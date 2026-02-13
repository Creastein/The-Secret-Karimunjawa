import React, { useEffect, useRef } from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!footerRef.current) return;

      const cols = footerRef.current.querySelectorAll('[data-footer-col]');
      gsap.fromTo(
        cols,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%'
          }
        }
      );

      const bottom = footerRef.current.querySelector('[data-footer-bottom]');
      if (bottom) {
        gsap.fromTo(
          bottom,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bottom,
              start: 'top 90%'
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-stone-400 pt-16 md:pt-24 pb-10 md:pb-12 border-t border-stone-800">
      <div ref={footerRef} className="container mx-auto px-6 md:px-12">

        {/* Main Grid Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-14 md:mb-20">

          {/* Column 1: Brand Identity & Socials */}
          <div className="space-y-6" data-footer-col>
            <h2 className="font-serif text-3xl text-white tracking-tight">VB.</h2>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              A masterpiece of coastal modernism. Where architectural silence meets the Indian Ocean.
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Address</p>
              <p className="text-sm font-light text-stone-300">
                Jalan Karang Mas, Ungasan<br />
                Badung Regency, Bali 80361<br />
                Indonesia
              </p>
            </div>
            {/* Social Icons Moved Here */}
            <div className="flex gap-6 pt-2">
              <a href="#" className="text-stone-500 hover:text-teak-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone-500 hover:text-teak-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-12" data-footer-col>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#estate" className="hover:text-teak-accent transition-colors">The Estate</a></li>
              <li><a href="#suites" className="hover:text-teak-accent transition-colors">Suites & Villas</a></li>
              <li><a href="#experience" className="hover:text-teak-accent transition-colors">Experience</a></li>
              <li><a href="#gallery" className="hover:text-teak-accent transition-colors">Visual Narrative</a></li>
              <li><a href="#location" className="hover:text-teak-accent transition-colors">Neighborhood</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div data-footer-col>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">Information</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-teak-accent transition-colors">Concierge Services</a></li>
              <li><a href="#" className="hover:text-teak-accent transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-teak-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teak-accent transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-teak-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6" data-footer-bottom>
          <p className="text-[10px] uppercase tracking-widest text-stone-600">
            &copy; {new Date().getFullYear()} Villa VB Ungasan. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-widest text-stone-600 hidden md:block">
              Designed by Coastal Modernism
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-400 hover:text-white transition-colors group"
            >
              Back to Top
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
