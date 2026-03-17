import { useState, useEffect, useMemo, useRef, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/layout/Section'
import { GALLERY_IMAGES } from '@/config/site'
import type { ImageCategory } from '@/config/types'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowLeft01Icon, ArrowRight01Icon, Maximize01Icon, Cancel01Icon, InstagramIcon } from 'hugeicons-react'

import { fadeUp, staggerContainer, EASE_OUT_EXPO } from '@/lib/motion'

const CATEGORY_KEYS: Record<string, string> = {
  All: 'all',
  Exteriors: 'exteriors',
  Interiors: 'interiors',
  Details: 'details',
  Night: 'night',
}

const CATEGORIES: (ImageCategory | 'All')[] = ['All', 'Exteriors', 'Interiors', 'Details', 'Night']

const thumbVariant = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: i * 0.06 },
  }),
}

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0, scale: 1.03 }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
}

type Props = {}

const Gallery: FC<Props> = () => {
  const { t } = useTranslation()
  const lightboxRef = useRef<HTMLDivElement>(null)
  const lightboxImageRef = useRef<HTMLImageElement>(null)
  const lightboxCaptionRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)')
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])
  const [activeCategory, setActiveCategory] = useState<ImageCategory | 'All'>('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const filteredImages = useMemo(
    () => activeCategory === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  )

  useEffect(() => { setCurrentIndex(0); setDirection(0) }, [activeCategory])

  // Preload adjacent images for smooth carousel transitions
  useEffect(() => {
    if (filteredImages.length <= 1) return
    const preloadIndexes = [
      (currentIndex + 1) % filteredImages.length,
      (currentIndex - 1 + filteredImages.length) % filteredImages.length,
    ]
    preloadIndexes.forEach((idx) => {
      const img = new Image()
      img.src = filteredImages[idx]?.url ?? ''
    })
  }, [currentIndex, filteredImages])

  const handleNext = () => { setDirection(1); setCurrentIndex((p) => (p + 1) % filteredImages.length) }
  const handlePrev = () => { setDirection(-1); setCurrentIndex((p) => (p - 1 + filteredImages.length) % filteredImages.length) }

  const closeLightbox = () => {
    if (shouldReduceMotion || !lightboxRef.current || !lightboxImageRef.current || !lightboxCaptionRef.current) {
      setIsLightboxOpen(false)
      return
    }
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({ onComplete: () => setIsLightboxOpen(false) })
      tl.to(lightboxCaptionRef.current, { opacity: 0, y: 8, duration: 0.2, ease: 'power2.in' })
        .to(lightboxImageRef.current, { opacity: 0, scale: 0.98, y: 8, duration: 0.25, ease: 'power2.in' }, 0)
        .to(lightboxRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in' }, 0.05)
    })
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, isLightboxOpen, filteredImages])

  useEffect(() => {
    if (!isLightboxOpen || !lightboxRef.current || !lightboxImageRef.current || !lightboxCaptionRef.current) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tl: any
    import('gsap').then(({ gsap }) => {
      if (shouldReduceMotion) {
        gsap.set(lightboxRef.current, { opacity: 1 })
        gsap.set(lightboxImageRef.current, { opacity: 1, scale: 1, y: 0 })
        gsap.set(lightboxCaptionRef.current, { opacity: 1, y: 0 })
        return
      }

      tl = gsap.timeline()
      tl.fromTo(lightboxRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' })
        .fromTo(lightboxImageRef.current, { opacity: 0, scale: 0.96, y: 12 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.05)
        .fromTo(lightboxCaptionRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.2)
    })

    return () => { tl?.kill() }
  }, [isLightboxOpen, shouldReduceMotion, currentIndex])

  const catKey = CATEGORY_KEYS[activeCategory] || 'all'

  return (
    <Section id="gallery" className="bg-sand bg-atmosphere" fullWidth>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col gap-12">

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer()}
            className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start"
          >
            <div className="text-center md:text-left flex flex-col gap-10">
              <div>
                <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">{t('gallery.eyebrow')}</motion.span>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05] tracking-tight">{t('gallery.title')}</motion.h2>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  className="max-w-lg mx-auto md:mx-0"
                >
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal italic mb-3">{t(`gallery.categoryContent.${catKey}.title`)}</h3>
                  <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">{t(`gallery.categoryContent.${catKey}.description`)}</p>
                </motion.div>
              </AnimatePresence>

              <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start gap-8">
                <div className="flex flex-wrap justify-center md:justify-start gap-6 border-b border-stone-200/80 pb-4">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat} onClick={() => setActiveCategory(cat)}
                      className={`text-[11px] uppercase tracking-[0.35em] transition-all duration-300 pb-2 ${activeCategory === cat ? 'text-charcoal border-b border-charcoal' : 'text-stone-400 border-b border-transparent hover:text-stone-700'}`}
                    >
                      {t(`gallery.categories.${CATEGORY_KEYS[cat]}`)}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-stone-500 font-serif shrink-0">
                  <span className="text-stone-900 text-2xl">{(currentIndex + 1).toString().padStart(2, '0')}</span>
                  <div className="h-[1px] w-16 bg-stone-300">
                    <motion.div
                      className="h-full bg-stone-800"
                      animate={{ width: `${((currentIndex + 1) / filteredImages.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                    />
                  </div>
                  <span>{filteredImages.length.toString().padStart(2, '0')}</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
              className="relative h-auto"
            >
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[560px] overflow-hidden bg-stone-200/90 shadow-2xl rounded-none border border-stone-100 ring-1 ring-black/5 group">
                {/* Shimmer background — sits behind the image, visible while image loads */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 bg-[length:200%_100%] animate-shimmer" />
                </div>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-[1] w-full h-full overflow-hidden"
                  >
                    <motion.img 
                      src={filteredImages[currentIndex]?.url} 
                      alt={filteredImages[currentIndex]?.alt} 
                      className="w-full h-full object-cover origin-center" 
                      loading="eager" 
                      decoding="async"
                      width={1200}
                      height={900}
                      onClick={() => setIsLightboxOpen(true)} 
                      {...(!isMobile ? {
                        animate: { scale: [1, 1.05] },
                        transition: { duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' as const },
                      } : {})}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute left-6 bottom-6 z-30 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/80">
                  <span>{t(`gallery.categories.${CATEGORY_KEYS[activeCategory]}`)}</span>
                  <span className="h-px w-8 bg-white/50" />
                  <span>{(currentIndex + 1).toString().padStart(2, '0')}</span>
                </div>

                <button onClick={() => setIsLightboxOpen(true)} className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-30 hover:scale-110 shadow-lg" aria-label={t('gallery.expandLabel')}>
                  <Maximize01Icon className="w-5 h-5 text-stone-800" strokeWidth={1.5} />
                </button>

                {filteredImages.length > 1 && (
                  <>
                    <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-stone-900/20 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-lg" aria-label="Previous image">
                      <ArrowLeft01Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                    </button>
                    <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-stone-900/20 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-lg" aria-label="Next image">
                      <ArrowRight01Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                    </button>
                  </>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between gap-6">
                <div className="flex flex-col">
                  <p className="font-serif text-xl text-charcoal">{filteredImages[currentIndex]?.alt}</p>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-stone-400">{t(`gallery.categories.${CATEGORY_KEYS[activeCategory]}`)}</span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-stone-400">
                  <span>{(currentIndex + 1).toString().padStart(2, '0')}</span>
                  <span className="h-px w-10 bg-stone-300" />
                  <span>{filteredImages.length.toString().padStart(2, '0')}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {filteredImages.length > 0 && (
            <motion.div key={activeCategory} initial="hidden" animate="visible" className="mt-2">
              <div className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {filteredImages.slice(0, 12).map((image, index) => (
                    <motion.button
                      key={image.id}
                      custom={index}
                      variants={thumbVariant}
                      onClick={() => setCurrentIndex(index)}
                      className={`group relative aspect-[4/3] w-32 sm:w-36 md:w-40 shrink-0 overflow-hidden rounded-sm transition-all duration-500 snap-center ${index === currentIndex ? 'border border-teak-accent ring-1 ring-teak-accent/50 shadow-lg' : 'border border-black/5 hover:border-teak-accent/30 opacity-90 hover:opacity-100'}`}
                      aria-label={`View ${image.alt}`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className={`h-full w-full object-cover transition-transform duration-[1.5s] ease-out ${index === currentIndex ? 'scale-105' : 'scale-100 group-hover:scale-110'}`}
                        loading="lazy"
                        decoding="async"
                        width={480}
                        height={360}
                      />
                      <div className={`absolute inset-0 transition-all duration-500 ${index === currentIndex ? 'bg-transparent' : 'bg-black/10 group-hover:bg-transparent'}`} />
                    </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="https://www.instagram.com/thesecretkarimunjawa/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-stone-500 hover:text-stone-800 transition-colors border-b border-stone-300 pb-1"
            >
              <InstagramIcon className="w-4 h-4" />
              {t('gallery.ctaInstagram')}
            </a>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div ref={lightboxRef} className="fixed inset-0 z-[100] bg-stone-950/70 backdrop-blur-xl flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.8)_100%)]" />

          <button onClick={(e) => { e.stopPropagation(); closeLightbox() }} className="absolute top-6 right-6 text-white/60 hover:text-white z-50 p-2 transition-colors duration-300" aria-label="Close lightbox">
            <Cancel01Icon className="w-8 h-8" strokeWidth={1} />
          </button>

          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev() }}
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none text-white/90 md:text-white/50 hover:text-white hover:bg-black/60 transition-all duration-300 group"
                aria-label="Previous image"
              >
                <ArrowLeft01Icon className="w-6 h-6 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext() }}
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none text-white/90 md:text-white/50 hover:text-white hover:bg-black/60 transition-all duration-300 group"
                aria-label="Next image"
              >
                <ArrowRight01Icon className="w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
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
              decoding="async"
              width={1920}
              height={1440}
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
  )
}

export default Gallery
