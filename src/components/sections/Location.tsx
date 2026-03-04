import type * as React from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Location01Icon, FerryBoatIcon, WaveIcon, MountainIcon, Navigation02Icon } from 'hugeicons-react'

import Section from '@/components/layout/Section'
import { LOCATION_SECTION, LOCATION_SPOTS } from '@/config/site'
import type { LocationIconName } from '@/config/types'
import { fadeUp, spotReveal, mapReveal, staggerContainer } from '@/lib/motion'

interface Props { }

const iconMap: Record<LocationIconName, React.ElementType> = {
  Waves: WaveIcon,
  Ship: FerryBoatIcon,
  Mountain: MountainIcon,
  MapPin: Location01Icon,
}

const SPOT_KEYS = ['batuTopeng', 'sunset', 'ujungGelam', 'legonLele', 'kanjen'] as const
const ACCESS_KEYS = ['airport', 'harbor'] as const

const Location: React.FC<Props> = () => {
  const { t } = useTranslation()
  const titleAccent = t('location.titleAccent')

  return (
    <Section id="location" className="bg-sand" fullWidth>
      <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[620px]">

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={mapReveal}
          className="w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-auto relative group overflow-hidden"
        >
          <iframe
            src={LOCATION_SECTION.mapEmbedSrc}
            width="100%"
            height="100%"
            className="border-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={LOCATION_SECTION.mapTitle}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-8 left-8 z-10"
          >
            <a href={LOCATION_SECTION.directionsLink} target="_blank" rel="noreferrer" className="bg-white text-charcoal px-6 py-3 text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-charcoal hover:text-white transition-all shadow-lg">
              <Navigation02Icon className="w-4 h-4" />
              {t('location.directionsLabel')}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.1, 0.15)}
          className="w-full lg:w-1/3 bg-white px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-16 flex flex-col justify-center border-l border-stone-200"
        >
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-6 block">
            {t('location.eyebrow')}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-charcoal mb-4 leading-[1.05] tracking-tight max-w-xs md:max-w-sm">
            {t('location.title')}
            {titleAccent && (
              <>
                <br />
                <span className="italic text-stone-400">{titleAccent}</span>
              </>
            )}
          </motion.h2>
          <motion.ul variants={fadeUp} className="text-stone-500 font-light text-sm leading-relaxed mb-6 max-w-md space-y-1">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-[3px] w-[3px] rounded-full bg-stone-400/70" />
              <span>{t('location.highlights.access')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-[3px] w-[3px] rounded-full bg-stone-400/70" />
              <span>{t('location.highlights.beaches')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-[3px] w-[3px] rounded-full bg-stone-400/70" />
              <span>{t('location.highlights.nature')}</span>
            </li>
          </motion.ul>

          <motion.div variants={staggerContainer(0.1, 0.1)} className="space-y-4 mb-8">
            {ACCESS_KEYS.map((key) => (
              <motion.div key={key} variants={spotReveal} className="flex items-start gap-3">
                <div className="mt-1 text-stone-400">
                  <Location01Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-stone-500">{t(`location.access.${key}.label`)}</h4>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">{t(`location.access.${key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer()} className="space-y-5">
            {LOCATION_SPOTS.map((spot, idx) => {
              const Icon = iconMap[spot.iconName]
              const key = SPOT_KEYS[idx]
              return (
                <motion.div key={spot.name} variants={spotReveal} className="flex items-start gap-4 group cursor-default">
                  <div className="p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teak-accent group-hover:bg-stone-100 transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 border-b border-stone-100 pb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-sm font-bold text-stone-700 uppercase tracking-wide">{t(`location.spots.${key}.name`)}</h4>
                      <span className="text-xs font-serif italic text-stone-400">{t(`location.spots.${key}.time`)}</span>
                    </div>
                    <p className="text-xs text-stone-400 font-light">{t(`location.spots.${key}.desc`)}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}

export default Location
