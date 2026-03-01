import React, { useState, useEffect, useMemo, useRef } from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import { ImageCategory } from '../types';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { gsap } from 'gsap';

const categoryContent: Record<string, { title: string; description: string }> = {
  'All': {
    title: "The Complete Narrative",
    description: "A comprehensive journey through the retreat, capturing every nuance of island living."
  },
  'Exteriors': {
    title: "Architectural Form",
    description: "Where rustic teak meets organic tropics. The structure is designed to blend seamlessly with the island landscape."
  },
  'Interiors': {
    title: "Curated Spaces",
    description: "Interiors that breathe. Hand-crafted wooden furniture, natural textures, and a palette inspired by the ocean."
  },
  'Details': {
    title: "Micro Narratives",
    description: "True luxury lies in what you touch. From tropical breakfast to outdoor showers, nothing is accidental."
  },
  'Night': {
    title: "After Dark",
    description: "When the sun sets, the villa transforms. Warm ambient lighting creates an intimate atmosphere for evening reflection."
  }
};

// Framer Motion variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const thumbVariant = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }
  })
};

const Gallery: React.FC = () => {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxImageRef = useRef<HTMLImageElement>(null);
  const lightboxCaptionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ImageCategory | 'All'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredImages = useMemo(() => {
    return activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [activeCategory]);

  const closeLightbox = () => {
    if (shouldReduceMotion) {
      setIsLightboxOpen(false);
      return;
    }

    if (!lightboxRef.current || !lightboxImageRef.current || !lightboxCaptionRef.current) {
      setIsLightboxOpen(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => setIsLightboxOpen(false)
    });

    tl.to(lightboxCaptionRef.current, { opacity: 0, y: 8, duration: 0.2, ease: 'power2.in' })
      .to(lightboxImageRef.current, { opacity: 0, scale: 0.98, y: 8, duration: 0.25, ease: 'power2.in' }, 0)
      .to(lightboxRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in' }, 0.05);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isLightboxOpen, filteredImages, closeLightbox]);

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

  useEffect(() => {
    if (!isLightboxOpen) return;
    if (!lightboxRef.current || !lightboxImageRef.current || !lightboxCaptionRef.current) return;

    if (shouldReduceMotion) {
      gsap.set(lightboxRef.current, { opacity: 1 });
      gsap.set(lightboxImageRef.current, { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' });
      gsap.set(lightboxCaptionRef.current, { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline();
    tl.fromTo(lightboxRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' })
      .fromTo(
        lightboxImageRef.current,
        { opacity: 0, scale: 0.96, y: 12, filter: 'blur(6px)' },
        { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power3.out' },
        0.05
      )
      .fromTo(
        lightboxCaptionRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
        0.2
      );

    return () => { tl.kill(); };
  }, [isLightboxOpen, shouldReduceMotion, currentIndex]);

  return (
    <Section id="gallery" className="bg-sand bg-atmosphere" fullWidth>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col gap-10">

          {/* Header & Tabs — Animated with Framer Motion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariant}
            className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 border-b border-stone-200 pb-6"
          >
            <div className="text-center md:text-left">
              <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">Visual Narrative</motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl text-charcoal leading-[1.05] tracking-tight">Gallery</motion.h2>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-lg mx-auto md:mx-0"
                >
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal italic mb-3">{content.title}</h3>
                  <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">{content.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 md:gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] uppercase tracking-widest transition-all duration-300 pb-1 border-b-2 ${activeCategory === cat
                    ? 'text-charcoal border-teak-accent'
                    : 'text-stone-400 border-transparent hover:text-stone-600'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Progress Indicator */}
          <div className="flex justify-end mb-2 px-1">
            <div className="flex items-center gap-4 text-xs font-medium text-stone-400 font-serif shrink-0">
              <span className="text-stone-900 text-xl">{(currentIndex + 1).toString().padStart(2, '0')}</span>
              <div className="h-[1px] w-12 bg-stone-300">
                <motion.div
                  className="h-full bg-stone-800"
                  animate={{ width: `${((currentIndex + 1) / filteredImages.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span>{filteredImages.length.toString().padStart(2, '0')}</span>
            </div>
          </div>

          {/* The Slider */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-auto group"
            >
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[520px] overflow-hidden bg-stone-200 shadow-xl group">
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
                      opacity: { duration: 0.3 },
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={filteredImages[currentIndex]?.url}
                      alt={filteredImages[currentIndex]?.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onClick={() => setIsLightboxOpen(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110 shadow-lg"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-5 h-5 text-stone-800" strokeWidth={1.5} />
                </button>

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

              {/* Thumbnails — Staggered with Framer Motion */}
              {filteredImages.length > 1 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="mt-4 md:mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3"
                >
                  {filteredImages.slice(0, 12).map((image, index) => (
                    <motion.button
                      key={image.id}
                      custom={index}
                      variants={thumbVariant}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative aspect-[4/3] overflow-hidden border transition-all ${index === currentIndex
                        ? 'border-teak-accent ring-2 ring-teak-accent/30'
                        : 'border-white/60 hover:border-teak-accent/70'
                        }`}
                      aria-label={`View ${image.alt}`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox (kept GSAP for imperative open/close animation) */}
      {isLightboxOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-stone-950/98 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.8)_100%)]" />

          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/60 hover:text-white z-50 p-2 transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" strokeWidth={1} />
          </button>

          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors duration-300 group"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" strokeWidth={1} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors duration-300 group"
                aria-label="Next image"
              >
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" strokeWidth={1} />
              </button>
            </>
          )}

          <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
            <img
              ref={lightboxImageRef}
              src={filteredImages[currentIndex]?.url}
              alt={filteredImages[currentIndex]?.alt}
              className="max-w-[95vw] max-h-[85vh] object-contain shadow-2xl rounded-sm"
              draggable={false}
            />
          </div>

          <div ref={lightboxCaptionRef} className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/70 text-sm tracking-[0.2em] uppercase font-light">{filteredImages[currentIndex]?.alt}</p>
            <span className="block text-[10px] mt-3 text-white/40 tracking-widest font-mono">
              {(currentIndex + 1).toString().padStart(2, '0')} — {filteredImages.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
