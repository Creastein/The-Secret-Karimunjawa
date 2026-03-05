import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '@/components/layout/Section'
import { FACILITIES } from '@/config/site'
import { AnchorIcon, Restaurant01Icon, Car01Icon, EyeIcon, SunriseIcon, Coffee01Icon, Leaf01Icon, SparklesIcon, SmartPhone01Icon, Cancel01Icon } from 'hugeicons-react'
import { blurFade, fadeUp, staggerContainer } from '@/lib/motion'
import { useCountUp } from '@/hooks/useCountUp'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ElementType> = {
  Anchor: AnchorIcon,
  Utensils: Restaurant01Icon,
  Car: Car01Icon,
  PawPrint: Leaf01Icon,
  Eye: EyeIcon,
  CigaretteOff: Cancel01Icon,
  ConciergeBell: SparklesIcon,
  Sunrise: SunriseIcon,
  Coffee: Coffee01Icon,
  Leaf: Leaf01Icon,
  Sparkles: SparklesIcon,
  Smartphone: SmartPhone01Icon,
}

const FACILITY_KEYS: Record<string, string> = {
  '1': 'seaSunsetView',
  '2': 'privateVeranda',
  '3': 'privateKitchen',
  '4': 'privateGarden',
  '5': 'airportTransfer',
  '6': 'dailyHousekeeping',
  '7': 'directBooking',
  '8': 'sunriseBreakfast',
}

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

export default function Estate() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Premium GSAP Scroll Effects for Estate section
    const ctx = gsap.context(() => {
      // Slight parallax and fade out for left sticky column when scrolling past
      gsap.to(leftColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 70%',
          end: 'bottom 20%',
          scrub: 1,
        },
        y: -30,
        opacity: 0.3,
        ease: 'power2.out',
      })

      // Parallax upward drift for right glassbox
      gsap.fromTo(rightColRef.current,
        { y: 60 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="estate" className="bg-sand bg-atmosphere overflow-hidden">
      <div ref={containerRef} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">

        <div ref={leftColRef} className="lg:w-5/12 lg:sticky lg:top-36 xl:top-40 pt-10 lg:pt-0">
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
              <CountUpStat end={56} labelKey="estate.facilitiesLabel" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          ref={rightColRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.08, 0.3)}
          className="lg:w-7/12 w-full bg-white/70 hover:bg-white/85 p-8 md:p-12 lg:p-16 border border-white/60 shadow-coastal backdrop-blur-md transition-colors duration-700 rounded-sm"
        >
          <motion.div variants={blurFade} className="mb-10 pb-6 border-b border-stone-200/50">
            <h3 className="font-serif text-2xl lg:text-3xl text-charcoal">{t('estate.amenitiesTitle')}</h3>
            <p className="text-xs text-stone-400 uppercase tracking-widest mt-2">{t('estate.amenitiesSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
            {FACILITIES.filter((f) => ['1', '2', '3'].includes(f.id)).map((facility) => {
              const Icon = ICON_MAP[facility.iconName] || SparklesIcon
              const key = FACILITY_KEYS[facility.id]
              return (
                <motion.div key={facility.id} variants={blurFade} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-4 h-4 text-teak-accent" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm font-bold text-stone-700 uppercase tracking-wide group-hover:text-tide transition-colors">
                      {t(`facilities.${key}`)}
                    </h4>
                  </div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed mt-2 text-justify">
                    {t(`facilities.${key}Desc`)}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-stone-200/50 text-center md:text-left">
            <p className="text-[10px] text-stone-400/80 uppercase tracking-widest">
              {t('estate.additionalNote')}
            </p>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}

