import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Navigation02Icon, Location01Icon } from 'hugeicons-react'

import Section from '@/components/layout/Section'
import { LOCATION_SECTION, NEARBY_TABS } from '@/config/site'
import { fadeUp, staggerContainer, mapReveal } from '@/lib/motion'

const Location: React.FC = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(0)
  const titleAccent = t('location.titleAccent')
  const currentTab = NEARBY_TABS[activeTab]

  return (
    <Section id="location" className="bg-sand" fullWidth>
      <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[620px]">

        {/* Left: Map (unchanged) */}
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

        {/* Right: Nearby Places Panel */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.1, 0.15)}
          className="w-full lg:w-1/3 bg-white flex flex-col border-l border-stone-200 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 pt-8 pb-4 md:px-8 lg:px-10">
            <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              {t('location.eyebrow')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-2xl md:text-3xl text-charcoal leading-[1.1] tracking-tight">
              {t('location.title')}
              {titleAccent && (
                <>
                  <br />
                  <span className="italic text-stone-400">{titleAccent}</span>
                </>
              )}
            </motion.h2>
          </div>

          {/* Tab Bar */}
          <motion.div variants={fadeUp} className="px-4 md:px-6 lg:px-8 pb-3 border-b border-stone-100">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
              {NEARBY_TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`
                    whitespace-nowrap px-3.5 py-2 rounded-full text-xs font-medium
                    transition-all duration-300 ease-out cursor-pointer shrink-0
                    ${activeTab === idx
                      ? 'bg-charcoal text-white shadow-sm'
                      : 'bg-stone-50 text-stone-500 hover:bg-stone-100 hover:text-stone-700'
                    }
                  `}
                >
                  {t(`location.tabs.${tab.id}`)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Place List */}
          <div className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {currentTab.places.map((place, idx) => (
                  <div
                    key={`${place.name}-${idx}`}
                    className="flex items-center gap-3.5 py-3.5 border-b border-stone-50 last:border-b-0 group cursor-default"
                  >
                    {/* Category Icon Circle */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${place.categoryColor}18` }}
                    >
                      <Location01Icon
                        className="w-4 h-4"
                        style={{ color: place.categoryColor }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Name & Category */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-stone-800 truncate leading-snug">
                        {place.name}
                      </h4>
                      <span
                        className="text-[11px] font-medium leading-tight"
                        style={{ color: place.categoryColor }}
                      >
                        {place.category}
                      </span>
                    </div>

                    {/* Distance */}
                    <span className="text-sm font-bold text-stone-700 shrink-0 tabular-nums">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Note */}
          <motion.div variants={fadeUp} className="px-6 py-4 md:px-8 lg:px-10 border-t border-stone-100">
            <p className="text-[11px] text-stone-400 font-light leading-relaxed">
              {t('location.nearbyFooter')}
            </p>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}

export default Location
