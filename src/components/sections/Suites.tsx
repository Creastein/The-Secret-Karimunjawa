import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Section from '@/components/layout/Section'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { ROOMS, WHATSAPP_NUMBER } from '@/config/site'
import { cardReveal, fadeUp, featureItem, staggerContainer } from '@/lib/motion'
import {
  BedDoubleIcon,
  Bathtub01Icon,
  WaveIcon,
  Tree02Icon,
  Tv01Icon,
  Tick01Icon,
  Sofa01Icon,
  Bathtub02Icon,
  Coffee01Icon as Cup01Icon,
  Briefcase01Icon,
  Archive01Icon,
  StarIcon,
} from 'hugeicons-react'

interface Props { }

function getFeatureIcon(feature: string) {
  const text = feature.toLowerCase()
  if (text.includes('bed') || text.includes('convertible') || text.includes('tidur')) return BedDoubleIcon
  if (text.includes('bath') || text.includes('toilet') || text.includes('tub') || text.includes('mandi')) return Bathtub01Icon
  if (text.includes('shower')) return Bathtub02Icon
  if (text.includes('pool') || text.includes('ocean') || text.includes('sea') || text.includes('laut')) return WaveIcon
  if (text.includes('garden') || text.includes('view') || text.includes('access') || text.includes('terrace') || text.includes('taman') || text.includes('veranda')) return Tree02Icon
  if (text.includes('tv') || text.includes('entertainment')) return Tv01Icon
  if (text.includes('safe') || text.includes('security')) return Tick01Icon
  if (text.includes('lounge') || text.includes('sofa')) return Sofa01Icon
  if (text.includes('bar') || text.includes('kitchen') || text.includes('dapur')) return Cup01Icon
  if (text.includes('desk') || text.includes('work')) return Briefcase01Icon
  if (text.includes('closet') || text.includes('wardrobe')) return Archive01Icon
  return StarIcon
}

const ROOM_I18N_KEYS: Record<string, string> = {
  'cipaku': 'cipaku',
  'birdsong': 'birdsong',
  'tivoli-garden': 'tivoliGarden',
}

export default function Suites({ }: Props) {
  const { t } = useTranslation()

  const handleRoomInquiry = (roomName: string) => {
    const message = t('contact.whatsappBookingMessage').replace('[UNIT]', roomName)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <Section id="suites" className="bg-limestone overflow-hidden">
      <div className="flex flex-col gap-12 min-h-[800px]">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.12)}
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t('suites.eyebrow')}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05] tracking-tight">
            {t('suites.title')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-500 font-light mt-6 text-sm leading-relaxed max-w-2xl">
            {t('suites.description')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer(0.15)}
          className="grid gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {ROOMS.map((room) => {
            const i18nKey = ROOM_I18N_KEYS[room.id]
            const features = t(`suites.rooms.${i18nKey}.features`, { returnObjects: true }) as string[]
            return (
              <motion.article
                key={room.id}
                variants={cardReveal}
                className="flex h-full flex-col overflow-hidden bg-white/90 border border-white/80 shadow-coastal"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <img
                    src={room.imageUrl}
                    alt={t(`suites.rooms.${i18nKey}.name`)}
                    className="h-full w-full object-cover transition-transform duration-[4s] hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-ink shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-teak-accent" />
                    {t(`suites.rooms.${i18nKey}.typeLabel`)}
                  </div>
                </div>

                <div className="flex h-full flex-col gap-6 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal">{t(`suites.rooms.${i18nKey}.name`)}</h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mt-2">
                        {t('suites.bedLabel')}
                      </p>
                      <p className="text-sm text-stone-600 font-medium">{t(`suites.rooms.${i18nKey}.bedDetails`)}</p>
                    </div>
                    <StarIcon className="w-4 h-4 text-teak-accent/60" />
                  </div>

                  <p className="text-sm leading-relaxed text-stone-600 font-light">
                    {t(`suites.rooms.${i18nKey}.description`)}
                  </p>

                  <div className="border-t border-stone-100 pt-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                        {t('suites.featuresLabel')}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                        {t('suites.typeLabel')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-stone-600 font-medium">{t(`suites.rooms.${i18nKey}.typeLabel`)}</span>
                      <span className="text-xs text-stone-500">{t(`suites.rooms.${i18nKey}.bedDetails`)}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {features.map((feature: string) => {
                        const Icon = getFeatureIcon(feature)
                        return (
                          <motion.div key={feature} variants={featureItem} className="flex items-start gap-3">
                            <div className="mt-0.5 text-stone-400">
                              <Icon className="w-4 h-4" strokeWidth={1.5} />
                            </div>
                            <span className="text-xs text-stone-600 font-medium uppercase tracking-wide leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => handleRoomInquiry(t(`suites.rooms.${i18nKey}.name`))}
                    className="mt-auto inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] bg-charcoal text-white px-6 py-3 hover:bg-teak-accent transition-colors"
                  >
                    <span>{t('suites.ctaLabel')}</span>
                    <WhatsAppIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

      </div>
    </Section>
  )
}
