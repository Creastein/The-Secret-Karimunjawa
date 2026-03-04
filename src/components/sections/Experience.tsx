import type * as React from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Car01Icon, Coffee01Icon, EyeIcon, Leaf01Icon, SmartPhone01Icon, SparklesIcon, SunriseIcon, Restaurant01Icon } from 'hugeicons-react'

import Section from '@/components/layout/Section'
import { FACILITIES, WHATSAPP_NUMBER } from '@/config/site'
import type { Facility } from '@/config/types'
import { fadeUp, staggerContainer, EASE_OUT_EXPO } from '@/lib/motion'

interface Props { }

const iconMap: Record<Facility['iconName'], React.ElementType> = {
  Anchor: EyeIcon,
  Utensils: Restaurant01Icon,
  Car: Car01Icon,
  PawPrint: Leaf01Icon,
  Eye: EyeIcon,
  CigaretteOff: Leaf01Icon,
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

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: i * 0.08 },
  }),
}

const Experience: React.FC<Props> = () => {
  const { t } = useTranslation()

  const handleContact = () => {
    const msg = t('contact.whatsappServiceMessage')
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  return (
    <Section id="experience" className="bg-white bg-atmosphere">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer()}
          className="lg:sticky lg:top-32"
        >
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t('experience.eyebrow')}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-8 leading-[1.05] tracking-tight">
            {t('experience.title')} <br />
            <span className="italic text-stone-400">{t('experience.titleAccent')}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-600 font-light leading-relaxed mb-8 text-lg max-w-md">
            {t('experience.description')}
          </motion.p>
          <motion.button
            variants={fadeUp}
            onClick={handleContact}
            className="text-xs uppercase tracking-widest border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-white transition-all"
          >
            {t('experience.ctaLabel')}
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-0 border-t border-stone-200"
        >
          {FACILITIES.map((item, index) => {
            const Icon = iconMap[item.iconName]
            const key = FACILITY_KEYS[item.id]
            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={rowVariant}
                className="group py-8 border-b border-stone-200 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-limestone/60 transition-all duration-500 cursor-default px-2"
              >
                <div className="flex items-center gap-4">
                  <div className="text-stone-300 group-hover:text-teak-accent transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1} />
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-stone-700 group-hover:text-charcoal transition-colors">
                    {t(`facilities.${key}`)}
                  </h4>
                </div>
                <p className="text-sm text-stone-400 font-light tracking-wide max-w-xs text-left md:text-right group-hover:text-stone-600 transition-colors">
                  {t(`facilities.${key}Desc`)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </Section>
  )
}

export default Experience
