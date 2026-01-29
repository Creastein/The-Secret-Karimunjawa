import React, { useState, useEffect, useMemo } from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import { ImageCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';

const categoryContent: Record<string, { title: string; description: string }> = {
  'All': {
    title: "The Complete Narrative",
    description: "A comprehensive journey through the estate, capturing every nuance of coastal modernism."
  },
  'Exteriors': {
    title: "Architectural Form",
    description: "Where raw concrete meets organic tropics. The structure is designed to disappear into the landscape, not dominate it."
  },
  'Interiors': {
    title: "Curated Spaces",
    description: "Interiors that breathe. Hand-picked teak furniture, linen textures, and a palette inspired by the limestone cliffs."
  },
  'Details': {
    title: "Micro Narratives",
    description: "True luxury lies in what you touch. From the brass fixtures to the weave of the rugs, nothing is accidental."
  },
  'Night': {
    title: "After Dark",
    description: "When the sun sets, the villa transforms. Warm ambient lighting creates an intimate atmosphere for evening reflection."
  }
};

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ImageCategory | 'All'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Filter images based on category
  const filteredImages = useMemo(() => {
    return activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [activeCategory]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isLightboxOpen, filteredImages]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const categories: (ImageCategory | 'All')[] = ['All', 'Exteriors', 'Interiors', 'Details', 'Night'];
  const content = categoryContent[activeCategory] || categoryContent['All'];

  // Animation variants for the slider
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <Section id="gallery" className="bg-stone-50" fullWidth>
      <div className="container mx-auto px-6 md:px-12 py-20">

        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-16 border-b border-stone-200 pb-6">
          <div className="text-center md:text-left">
            <span className="text-ocean-deep text-xs tracking-[0.3em] uppercase font-bold mb-4 block">Visual Narrative</span>
            <h2 className="font-serif text-4xl text-stone-800 leading-tight">
              Gallery
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-widest transition-all duration-300 pb-1 border-b-2 ${activeCategory === cat
                  ? 'text-stone-900 border-teak-accent'
                  : 'text-stone-400 border-transparent hover:text-stone-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 min-h-[500px]">

          {/* Left: Narrative Context */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              key={activeCategory} // Re-animate text on category change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6 italic">
                {content.title}
              </h3>
              <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base mb-10">
                {content.description}
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-4 text-xs font-medium text-stone-400 font-serif">
                <span className="text-stone-900 text-xl">
                  {(currentIndex + 1).toString().padStart(2, '0')}
                </span>
                <div className="h-[1px] w-12 bg-stone-300">
                  <motion.div
                    className="h-full bg-stone-800"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentIndex + 1) / filteredImages.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span>
                  {filteredImages.length.toString().padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: The Slider */}
          <div className="lg:col-span-8 relative h-[500px] md:h-[600px] group order-1 lg:order-2">
            <div className="relative w-full h-full overflow-hidden bg-stone-200 shadow-xl group">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={filteredImages[currentIndex]?.url}
                    alt={filteredImages[currentIndex]?.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay for text visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Lightbox Trigger (Top Right) */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110 shadow-lg"
                aria-label="Expand image"
              >
                <Maximize2 className="w-5 h-5 text-stone-800" strokeWidth={1.5} />
              </button>

              {/* Left/Right Navigation Overlay */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-stone-900/20 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-lg"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-stone-900/20 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-lg"
                    aria-label="Next image"
                  >
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Full Screen Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/98 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white z-50 p-2"
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>

            {/* Lightbox Nav Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
                </button>
              </>
            )}

            <motion.img
              key={currentIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[currentIndex]?.url}
              alt={filteredImages[currentIndex]?.alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />

            <div className="absolute bottom-8 text-center text-white/50 text-sm tracking-widest uppercase">
              {filteredImages[currentIndex]?.alt}
              <span className="block text-[10px] mt-2 opacity-60">
                {currentIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;