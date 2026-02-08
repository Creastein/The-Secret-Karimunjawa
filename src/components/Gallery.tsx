import React, { useState, useEffect, useMemo, useRef } from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import { ImageCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxImageRef = useRef<HTMLImageElement>(null);
  const lightboxCaptionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
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

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!visualRef.current) return;
      gsap.to(visualRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      if (headerRef.current) {
        const headerItems = headerRef.current.querySelectorAll('[data-gallery-reveal]');
        gsap.fromTo(
          headerItems,
          { opacity: 0, y: 18 },
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

      if (narrativeRef.current) {
        gsap.fromTo(
          narrativeRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: narrativeRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      if (thumbsRef.current) {
        const thumbs = gsap.utils.toArray<HTMLElement>('.gallery-thumb');
        if (thumbs.length) {
          gsap.fromTo(
            thumbs,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power3.out',
              stagger: 0.08,
              scrollTrigger: {
                trigger: thumbsRef.current,
                start: 'top 80%'
              }
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

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

  // Keyboard navigation
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

    return () => {
      tl.kill();
    };
  }, [isLightboxOpen, shouldReduceMotion, currentIndex]);

  return (
    <Section id="gallery" className="bg-sand bg-atmosphere" fullWidth>
      <div ref={sectionRef} className="container mx-auto px-6 md:px-12 py-20">

        {/* Header & Tabs */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 border-b border-stone-200 pb-6">
          <div className="text-center md:text-left">
            <span data-gallery-reveal className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">Visual Narrative</span>
            <h2 data-gallery-reveal className="font-serif text-4xl text-charcoal leading-[1.05] tracking-tight">
              Gallery
            </h2>
          </div>

          <div data-gallery-reveal className="flex flex-wrap gap-6 md:gap-8">
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
          </div>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left: Narrative Context */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <div ref={narrativeRef}>
              <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 italic">
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
                  <div
                    className="h-full bg-stone-800"
                    style={{ width: `${((currentIndex + 1) / filteredImages.length) * 100}%` }}
                  />
                </div>
                <span>
                  {filteredImages.length.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Right: The Slider */}
          <div ref={visualRef} className="lg:col-span-8 relative h-[420px] md:h-[520px] group order-1 lg:order-2">
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

            {filteredImages.length > 1 && (
              <div ref={thumbsRef} className="mt-6 grid grid-cols-4 md:grid-cols-6 gap-3">
                {filteredImages.slice(0, 12).map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`gallery-thumb relative aspect-[4/3] overflow-hidden border transition-all ${index === currentIndex
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
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Full Screen Lightbox */}
      {isLightboxOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-stone-950/98 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.8)_100%)]" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
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

          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              ref={lightboxImageRef}
              src={filteredImages[currentIndex]?.url}
              alt={filteredImages[currentIndex]?.alt}
              className="max-w-[98vw] max-h-[94vh] object-contain shadow-2xl"
            />
          </div>

          <div
            ref={lightboxCaptionRef}
            className="absolute bottom-8 text-center text-white/50 text-sm tracking-widest uppercase"
          >
            {filteredImages[currentIndex]?.alt}
            <span className="block text-[10px] mt-2 opacity-60">
              {currentIndex + 1} / {filteredImages.length}
            </span>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
