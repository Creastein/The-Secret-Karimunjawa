import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING } from '../constants';
import { MessageCircle, Sparkles } from 'lucide-react';

const AvailabilityStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 800px)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/6281234567890?text=I'm%20interested%20in%20staying%20at%20Villa%20VB.%20Could%20you%20share%20availability%20for...`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:bottom-12 z-50 md:w-auto"
        >
          <div className="bg-stone-900/95 backdrop-blur-md text-white p-3 pr-4 md:pl-6 rounded-none shadow-2xl flex items-center gap-6 border border-white/10">
             
             {/* Pricing Info - Added for CRO */}
             <div className="hidden md:flex flex-col items-start min-w-[140px]">
               <div className="flex items-center gap-2 mb-0.5">
                 <Sparkles className="w-3 h-3 text-teak-accent" />
                 <span className="text-[10px] tracking-widest uppercase text-stone-400">Best Rate Direct</span>
               </div>
               <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-lg leading-none">Rp {PRICING.price}</span>
                  <span className="text-[10px] text-stone-500 font-light">/ night</span>
               </div>
             </div>

             {/* CTA Button */}
             <button 
                onClick={handleWhatsApp}
                className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white text-stone-900 px-6 py-3 text-xs uppercase tracking-widest hover:bg-teak-accent hover:text-white transition-colors duration-500"
             >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Inquire via WhatsApp</span>
                <span className="sm:hidden">Inquire</span>
             </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AvailabilityStickyBar;