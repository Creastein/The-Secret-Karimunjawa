import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Section from '@/components/layout/Section'
import { QuoteUpIcon } from 'hugeicons-react'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface ReadReview {
  id: number;
  text: string;
  author: string;
  origin: string;
}

export default function Testimonials() {
  const { t } = useTranslation()
  const reviews = t('reviews', { returnObjects: true }) as ReadReview[]
  const marqueeReviews = [...reviews, ...reviews]

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

        <div className="marquee group relative max-w-6xl mx-auto overflow-hidden">
          <div className="marquee-track flex items-stretch gap-8 lg:gap-12 py-4">
            {marqueeReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                aria-hidden={index >= reviews.length}
                className="flex min-w-[280px] max-w-[360px] md:min-w-[320px] md:max-w-[420px] flex-col items-center text-center p-6 md:p-8 lg:p-12"
              >
                <div className="mb-8 text-teak-accent/20">
                  <QuoteUpIcon className="w-8 h-8 md:w-12 md:h-12 fill-current" />
                </div>
                <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed mb-10 italic">
                  "{review.text}"
                </p>
                <div className="w-12 h-px bg-teak-accent/30 mb-6" />
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-charcoal font-semibold mb-1">{review.author}</h3>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wide">{review.origin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
