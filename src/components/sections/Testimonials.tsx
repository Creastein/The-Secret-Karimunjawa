import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-sand relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-white/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariant}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.25em] uppercase font-semibold mb-4 block">Guest Voices</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal">Moments from Our Guests</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariant}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariant}
              className="flex flex-col items-center text-center p-6 md:p-8 lg:p-12"
            >
              <div className="mb-8 text-teak-accent/20">
                <Quote className="w-8 h-8 md:w-12 md:h-12 fill-current" />
              </div>

              <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed mb-10 italic">
                "{review.text}"
              </p>

              <div className="w-12 h-px bg-teak-accent/30 mb-6"></div>

              <div>
                <h4 className="text-sm uppercase tracking-widest text-charcoal font-semibold mb-1">{review.author}</h4>
                <span className="text-[10px] text-stone-400 uppercase tracking-wide">{review.origin}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Testimonials;
