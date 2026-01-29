import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-400 pt-24 pb-12 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Grid Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          
          {/* Column 1: Brand Identity & Socials */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-white">VB.</h2>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              A masterpiece of coastal modernism. Where architectural silence meets the Indian Ocean.
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Address</p>
              <p className="text-sm font-light text-stone-300">
                Jalan Karang Mas, Ungasan<br/>
                Badung Regency, Bali 80361<br/>
                Indonesia
              </p>
            </div>
            {/* Social Icons Moved Here */}
            <div className="flex gap-6 pt-2">
               <a href="#" className="text-stone-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="text-stone-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-12">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#about" className="hover:text-teak-accent transition-colors">The Estate</a></li>
              <li><a href="#rooms" className="hover:text-teak-accent transition-colors">Suites & Villas</a></li>
              <li><a href="#experience" className="hover:text-teak-accent transition-colors">Experience</a></li>
              <li><a href="#gallery" className="hover:text-teak-accent transition-colors">Visual Narrative</a></li>
              <li><a href="#location" className="hover:text-teak-accent transition-colors">Neighborhood</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
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
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
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