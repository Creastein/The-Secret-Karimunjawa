import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Section from '@/components/layout/Section'
import { blurFade, staggerContainer } from '@/lib/motion'
import { useCountUp } from '@/hooks/useCountUp'

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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    // Dynamic import gsap only when component mounts
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule.gsap
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.fromTo(imageRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
            }
          }
        )
      }, containerRef)
    })

    return () => ctx?.revert()
  }, [])

  return (
    <Section id="estate" className="bg-sand bg-atmosphere overflow-hidden">
      <div ref={containerRef} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">

        {/* Left column: Text */}
        <div ref={leftColRef} className="lg:w-[45%] pt-10 lg:pt-0">
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
          className="lg:w-[55%] w-full"
        >
          <div className="relative overflow-hidden aspect-video rounded-[8px] shadow-[20px_30px_60px_-10px_rgba(0,0,0,0.4),0_8px_30px_4px_rgba(0,0,0,0.15)] border-2 border-white/80 bg-black group cursor-pointer">
            {!isVideoLoaded ? (
              <div
                className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
                onClick={() => setIsVideoLoaded(true)}
              >
                {/* Fallback to high-res YouTube thumbnail */}
                <img
                  src="https://img.youtube.com/vi/5-69huuZoAk/maxresdefault.jpg"
                  alt="The Secret Karimunjawa Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                {/* Play Button Icon */}
                <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] md:border-t-[10px] md:border-b-[10px] md:border-l-[16px] border-transparent border-l-charcoal ml-1" />
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/5-69huuZoAk?autoplay=1&rel=0&modestbranding=1"
                title="The Secret Karimunjawa — Our Story"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

      </div>
    </Section>
  )
}
