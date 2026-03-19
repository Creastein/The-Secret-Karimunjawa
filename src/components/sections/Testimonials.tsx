import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Section from '@/components/layout/Section'
import { QuoteUpIcon } from 'hugeicons-react'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { useCallback, useMemo, useState } from 'react'

interface ReadReview {
  id: number;
  text: string;
  author: string;
  origin: string;
}

export default function Testimonials() {
  const { t } = useTranslation()
  const reviews = t('reviews', { returnObjects: true }) as ReadReview[]
  const totalReviews = reviews.length
  const [activeIndex, setActiveIndex] = useState(0)

  const active = useMemo(() => {
    if (totalReviews === 0) return null
    const safeIndex = ((activeIndex % totalReviews) + totalReviews) % totalReviews
    return { index: safeIndex, review: reviews[safeIndex] }
  }, [activeIndex, reviews, totalReviews])

  const goPrev = useCallback(() => {
    if (totalReviews <= 1) return
    setActiveIndex((current) => (current - 1 + totalReviews) % totalReviews)
  }, [totalReviews])

  const goNext = useCallback(() => {
    if (totalReviews <= 1) return
    setActiveIndex((current) => (current + 1) % totalReviews)
  }, [totalReviews])

  return (
    <Section className="bg-sand relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-white/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.15, 0.2)}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.25em] uppercase font-semibold mb-4 block">{t('testimonials.eyebrow')}</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal">{t('testimonials.title')}</motion.h2>
        </motion.div>

        {active ? (
          <div
            className="relative max-w-3xl mx-auto"
            role="region"
            aria-roledescription="carousel"
            aria-label={t('testimonials.title')}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                goPrev()
              }
              if (event.key === 'ArrowRight') {
                event.preventDefault()
                goNext()
              }
            }}
          >
            <button
              type="button"
              onClick={goPrev}
              disabled={totalReviews <= 1}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/70 backdrop-blur ring-1 ring-black/10 shadow-coastal flex items-center justify-center text-charcoal hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teak-accent disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span aria-hidden className="text-xl leading-none">←</span>
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={totalReviews <= 1}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/70 backdrop-blur ring-1 ring-black/10 shadow-coastal flex items-center justify-center text-charcoal hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teak-accent disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span aria-hidden className="text-xl leading-none">→</span>
            </button>

            <div className="overflow-hidden px-14 md:px-16">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${active.review.id}-${active.index}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center py-4"
                >
                  <div className="mb-8 text-teak-accent/20">
                    <QuoteUpIcon className="w-8 h-8 md:w-12 md:h-12 fill-current" />
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed mb-10 italic">
                    "{active.review.text}"
                  </p>
                  <div className="w-12 h-px bg-teak-accent/30 mb-6" />
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-charcoal font-semibold mb-1">{active.review.author}</h3>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wide">{active.review.origin}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-stone-500">
                <span>{active.index + 1}</span>
                <span className="text-stone-400">/</span>
                <span>{totalReviews}</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  )
}
