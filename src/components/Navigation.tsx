import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Estate', href: '#about' },
    { name: 'Suites', href: '#rooms' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar Appearance
      setScrolled(window.scrollY > 50);

      // 2. Handle Scroll Spy (Active Section Detection)
      const scrollPosition = window.scrollY + 200; // Offset (Header height + buffer)

      // Find the current section
      for (const link of navLinks) {
        const sectionId = link.href.replace('#', '');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial active state
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobileOpen) setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      if (isMobileOpen) {
        setIsMobileOpen(false);
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 350); 
      } else {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      {/* Navigation Container */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-end md:justify-center px-6 md:px-0 transition-all duration-700 ${scrolled ? 'pt-4' : 'pt-6 md:pt-10'}`}>
        <nav 
          className={`
            flex items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            backdrop-blur-xl rounded-full text-stone-800
            ${scrolled 
              ? 'py-3 px-5 md:px-6 bg-white/90 border border-stone-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] gap-4 md:gap-8' 
              : 'py-3 px-5 md:py-4 md:px-8 bg-white/70 border border-white/50 shadow-sm gap-4 md:gap-12'
            }
          `}
        >
          {/* Logo - Timeless Serif Monogram - Clickable */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="font-serif text-xl md:text-2xl tracking-tight font-bold relative z-50 shrink-0 flex items-center hover:opacity-70 transition-opacity"
          >
            <span>VB.</span>
          </a>
          
          {/* Desktop Menu - Always visible in pill */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    text-[11px] uppercase tracking-widest transition-colors relative group py-1 font-medium cursor-pointer
                    ${isActive ? 'text-stone-900' : 'text-stone-500 hover:text-teak-accent'}
                  `}
                >
                  {link.name}
                  <span className={`
                    absolute bottom-0 left-0 h-[1px] bg-teak-accent transition-all duration-500
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-stone-800 relative z-50 focus:outline-none p-1 hover:bg-stone-100 rounded-full transition-colors ml-1"
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Full Screen Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bleached-sand/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                    className={`font-serif text-3xl transition-colors cursor-pointer ${isActive ? 'text-teak-accent italic' : 'text-stone-800 hover:text-teak-accent'}`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
                 className="mt-8 pt-8 border-t border-stone-200 w-32"
              >
                <p className="text-xs text-stone-400 uppercase tracking-widest">Ungasan, Bali</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;