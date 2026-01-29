import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax Effect: Background moves down slower than the scroll (0.3x speed)
  // This creates the perception of depth/distance.
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Text Effect: Text moves down slightly and fades out to clear the stage for the next section
  const textY = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div id="home" className="relative h-[95vh] md:h-screen w-full overflow-hidden bg-stone-900">
      {/* Cinematic Background Layer */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/luxuryvilla15/1920/1080" 
          alt="Villa VB Bali Main Pool" 
          // Scale 110% ensures no edges are visible when the image moves vertically
          className="w-full h-full object-cover opacity-90 scale-110 will-change-transform" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </motion.div>

      {/* Editorial Content Placement - Bottom Left */}
      {/* UPDATED: Mobile stays high (pb-52), Desktop restored to lower position (md:pb-32) */}
      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 pb-52 md:pb-32 flex flex-col justify-end">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-light text-white/90">Ungasan, Bali</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
            A Masterpiece of <br/>
            <span className="italic font-light">Coastal Living</span>
          </h1>
          
          <p className="text-white/80 font-light text-lg md:text-xl max-w-lg leading-relaxed ml-1">
            Where architectural silence meets the Indian Ocean.
          </p>
        </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 right-6 md:right-12 text-white/50 text-[10px] uppercase tracking-widest hidden md:block"
      >
        Scroll to Explore
      </motion.div>
    </div>
  );
};

export default Hero;