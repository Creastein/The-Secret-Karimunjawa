import React from 'react';
import Section from './Section';
import { FACILITIES } from '../constants';
import { Wifi, Wind, Tv, Utensils, Waves, Trees, Shield, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

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

const About: React.FC = () => {
  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // Custom "Luxury" Bezier
      }
    }
  };

  return (
    <Section id="about" className="bg-bleached-sand">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Philosophy & Key Stats - Animated */}
        <div className="lg:w-5/12 sticky top-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="text-ocean-deep text-xs tracking-[0.3em] uppercase font-bold mb-6 block">
              The Estate
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-6xl text-stone-800 mb-8 leading-tight">
              Space as the <br /> 
              <span className="italic text-stone-500">Ultimate Luxury</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-stone-600 leading-relaxed font-light mb-12 text-lg">
              Nestled in the heart of Ungasan's quiet luxury district, Villa VB stands as a testament to tropical modernism. 
              Unlike typical villas, we offer true, unadulterated space: a 600m² private garden and a monumental 15m lap pool, 
              ensuring your privacy is absolute.
            </motion.p>
            
            {/* Typographic Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 border-t border-stone-300 pt-8">
              <div className="text-center">
                <span className="block font-serif text-3xl md:text-4xl text-stone-800 mb-1">750<span className="text-sm align-top">m²</span></span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Land Size</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl md:text-4xl text-stone-800 mb-1">4</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Suites</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl md:text-4xl text-stone-800 mb-1">15<span className="text-sm align-top">m</span></span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Pool</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right Column: Signature Facilities Grid (Replaces Image) */}
        <div className="lg:w-7/12 w-full bg-white p-8 md:p-12 border border-stone-200 shadow-sm">
           <div className="mb-10 pb-4 border-b border-stone-100">
              <h3 className="font-serif text-2xl text-stone-800">Signature Amenities</h3>
              <p className="text-xs text-stone-400 uppercase tracking-widest mt-2">Everything you need for a seamless stay</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
             {FACILITIES.map((facility) => {
               const IconComponent = iconMap[facility.iconName] || Coffee;
               return (
                 <div key={facility.id} className="group">
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

           <div className="mt-12 pt-8 border-t border-stone-100 text-center md:text-left">
             <p className="text-[10px] text-stone-400 italic">
               *Additional services like private chefs and drivers available upon request via Concierge.
             </p>
           </div>
        </div>

      </div>
    </Section>
  );
};

export default About;