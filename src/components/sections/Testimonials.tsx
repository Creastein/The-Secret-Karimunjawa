import { motion } from 'framer-motion'
import Section from '@/components/layout/Section'
import { Quote } from 'lucide-react'
import { REVIEWS } from '@/config/site'
import { fadeUp, cardReveal, staggerContainer } from '@/lib/motion'

export default function Testimonials() {
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
          <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.25em] uppercase font-semibold mb-4 block">Guest Voices</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal">Moments from Our Guests</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.15, 0.2)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {REVIEWS.map((review) => (
            <motion.div key={review.id} variants={cardReveal} className="flex flex-col items-center text-center p-6 md:p-8 lg:p-12">
              <div className="mb-8 text-teak-accent/20">
                <Quote className="w-8 h-8 md:w-12 md:h-12 fill-current" />
              </div>
              <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed mb-10 italic">
                "{review.text}"
              </p>
              <div className="w-12 h-px bg-teak-accent/30 mb-6" />
              <div>
                <h4 className="text-sm uppercase tracking-widest text-charcoal font-semibold mb-1">{review.author}</h4>
                <span className="text-[10px] text-stone-400 uppercase tracking-wide">{review.origin}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
