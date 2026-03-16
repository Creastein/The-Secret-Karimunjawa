import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '@/components/layout/Section'
import { blurFade, staggerContainer } from '@/lib/motion'
import { useCountUp } from '@/hooks/useCountUp'

gsap.registerPlugin(ScrollTrigger)

function CountUpStat({ end, decimals = 0, labelKey }: { end: number; decimals?: number; labelKey: string }) {
  const { t } = useTranslation()
  const { ref, display } = useCountUp({ end, decimals, duration: 1.8 })
  return (
    <div className="text-center">
      <span ref={ref} className="block font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-1">
        {display}
      </span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">{t(labelKey)}</span>
    </div>
  )
}

export default function OurStory() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for the image container
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        }
      )


    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="estate" className="bg-sand bg-atmosphere overflow-hidden">
      <div ref={containerRef} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">

        {/* Left column: Text */}
        <div ref={leftColRef} className="lg:w-1/2 pt-10 lg:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.span variants={blurFade} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-6 block">
              {t('estate.eyebrow')}
            </motion.span>

            <motion.h2 variants={blurFade} className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05] tracking-tight">
              {t('estate.title')} <br />
              <span className="italic text-stone-500">{t('estate.titleAccent')}</span>
            </motion.h2>

            <motion.p variants={blurFade} className="text-stone-600 leading-relaxed font-light mb-12 text-lg lg:text-xl pr-4">
              {t('estate.description')}
            </motion.p>

            <motion.div variants={blurFade} className="grid grid-cols-3 gap-6 lg:gap-8 border-t border-stone-300 pt-8">
              <CountUpStat end={9.6} decimals={1} labelKey="estate.ratingLabel" />
              <CountUpStat end={143} labelKey="estate.reviewsLabel" />
              <CountUpStat end={3} labelKey="estate.facilitiesLabel" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right column: Family Photo */}
        <div
          ref={imageRef}
          className="lg:w-1/2 w-full"
        >
          <div className="relative group overflow-hidden aspect-[4/4] md:aspect-[8/7] rounded-[8px] shadow-[20px_30px_60px_-10px_rgba(0,0,0,0.4),0_8px_30px_4px_rgba(0,0,0,0.15)] border-2 border-white/80 bg-white">
            <img
              src="/assets/ourstory1.webp"
              alt="Eddy, Patricia & Family — The Secret Karimunjawa"
              className="absolute inset-0 w-full h-full object-cover object-[45%_center] origin-[45%_50%] scale-[1.01] group-hover:scale-[1.08] transition-transform duration-[2.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
              loading="lazy"
              decoding="async"
            />
            {/* Soft inner glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/50 pointer-events-none rounded-[8px] z-10 mix-blend-overlay" />
            
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none z-20" />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30"
            >
              <p className="text-white/90 text-sm md:text-base font-light tracking-wide">
                Eddy, Patricia & Family
              </p>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">
                The Secret Karimunjawa
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </Section>
  )
}
