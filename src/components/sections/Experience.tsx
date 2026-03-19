import type * as React from 'react'
import { useRef, useEffect } from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Car01Icon, Coffee01Icon, EyeIcon, Leaf01Icon, SmartPhone01Icon, SparklesIcon, SunriseIcon, Restaurant01Icon } from 'hugeicons-react'
import { PawPrint as PawPrintIcon, Recycle as RecycleIcon, Beer as BeerIcon } from 'lucide-react'

import { FACILITIES, WHATSAPP_NUMBER } from '@/config/site'
import type { Facility } from '@/config/types'
import { fadeUp, blurFade, staggerContainer, EASE_OUT_EXPO } from '@/lib/motion'

const iconMap: Record<Facility['iconName'], React.ElementType> = {
  Anchor: EyeIcon,
  Utensils: Restaurant01Icon,
  Car: Car01Icon,
  PawPrint: PawPrintIcon,
  Eye: EyeIcon,
  CigaretteOff: Leaf01Icon,
  ConciergeBell: SparklesIcon,
  Sunrise: SunriseIcon,
  Coffee: Coffee01Icon,
  Leaf: Leaf01Icon,
  Sparkles: SparklesIcon,
  Smartphone: SmartPhone01Icon,
  Recycle: RecycleIcon,
  Beer: BeerIcon,
}

const FACILITY_KEYS: Record<string, string> = {
  '1': 'seaSunsetView',
  '2': 'privateVeranda',
  '4': 'privateGarden',
  '6': 'dailyHousekeeping',
  '8': 'sunriseBreakfast',
  '9': 'residentDog',
  '10': 'ecoConscious',
  '11': 'cozyKitchenBar',
}

/* ── animation variants ────────────────────────── */
const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: i * 0.08 },
  }),
}

const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
}

const Experience: React.FC = () => {
  const { t } = useTranslation()

  const handleContact = () => {
    const msg = t('contact.whatsappServiceMessage')
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  return (
    <section id="experience" className="relative bg-white bg-atmosphere">

      {/* ── mobile: stacked layout ── */}
      <div className="lg:hidden py-14 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.12)}
          className="mb-12"
        >
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t('experience.eyebrow')}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl mb-6 md:mb-8 leading-[1.05] tracking-tight">
            <span className="whitespace-nowrap">{t('experience.title')}</span> <br />
            <span className="italic text-stone-400">{t('experience.titleAccent')}</span>
          </motion.h2>
          <motion.div variants={lineReveal} className="h-[1px] w-16 bg-teak-accent/60 mb-6" />
          <motion.p variants={blurFade} className="text-stone-500 font-light leading-relaxed mb-10 text-base max-w-md">
            {t('experience.description')}
          </motion.p>
          <motion.button
            variants={fadeUp}
            onClick={handleContact}
            className="text-xs uppercase tracking-widest border border-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-white transition-all duration-500"
          >
            {t('experience.ctaLabel')}
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="border-t border-stone-200"
        >
          {FACILITIES.map((item, index) => {
            const Icon = iconMap[item.iconName]
            const key = FACILITY_KEYS[item.id]
            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={rowVariant}
                className="group py-7 border-b border-stone-200 flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-6 hover:bg-limestone/60 transition-all duration-500 cursor-default px-3"
              >
                <div className="flex items-center gap-4">
                  <div className="text-stone-400 group-hover:text-teak-accent transition-colors duration-300">
                    <Icon className="w-5 h-5" strokeWidth={1} />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-stone-700 group-hover:text-charcoal transition-colors duration-300">
                    {t(`facilities.${key}`)}
                  </h3>
                </div>
                <p className="text-sm text-stone-400 font-light tracking-wide max-w-xs text-left md:text-right group-hover:text-stone-600 transition-colors duration-300 pl-9 md:pl-0">
                  {t(`facilities.${key}Desc`)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ── desktop: GSAP pinned scroll layout ── */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 md:px-12 gap-16 xl:gap-20 pt-16 pb-32">

        {/* left column: sticky to viewport */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.12)}
          className="w-5/12 sticky top-40 h-fit"
        >
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t('experience.eyebrow')}
          </motion.span>

          <motion.h2 variants={fadeUp} className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8 leading-[1.05] tracking-tight">
            <span className="whitespace-nowrap">{t('experience.title')}</span> <br className="hidden xl:block" />
            <span className="italic text-stone-400">{t('experience.titleAccent')}</span>
          </motion.h2>

          <motion.div variants={lineReveal} className="h-[1px] w-16 bg-teak-accent/60 mb-6" />

          <motion.p variants={blurFade} className="text-stone-500 font-light leading-relaxed mb-10 text-base lg:text-lg max-w-md">
            {t('experience.description')}
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContact}
            className="text-xs uppercase tracking-widest border border-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-white transition-all duration-500"
          >
            {t('experience.ctaLabel')}
          </motion.button>
        </motion.div>

        {/* right column: scrollable service items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="w-7/12 border-t border-stone-200"
        >
          {FACILITIES.map((item, index) => {
            const Icon = iconMap[item.iconName]
            const key = FACILITY_KEYS[item.id]
            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={rowVariant}
                className="group py-8 border-b border-stone-200 flex justify-between items-center gap-6 hover:bg-limestone/60 transition-all duration-500 cursor-default px-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-stone-400 group-hover:text-teak-accent transition-colors duration-300">
                    <Icon className="w-5 h-5" strokeWidth={1} />
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl text-stone-700 group-hover:text-charcoal transition-colors duration-300">
                    {t(`facilities.${key}`)}
                  </h3>
                </div>
                <p className="text-sm text-stone-400 font-light tracking-wide w-[380px] text-right group-hover:text-stone-600 transition-colors duration-300">
                  {t(`facilities.${key}Desc`)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Experience
