import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Section from '@/components/layout/Section'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { ROOMS, WHATSAPP_NUMBER } from '@/config/site'
import { fadeUp, blurFade, staggerContainer, EASE_OUT_EXPO } from '@/lib/motion'
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

/* ── card-level animation variants ────────────── */
const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
}

const imageReveal = {
  hidden: { scale: 1.12, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: [0.23, 1, 0.32, 1] },
  },
}

const badgeSlide = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.4, ease: EASE_OUT_EXPO },
  },
}

const priceReveal = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

const featureStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const featureItem = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
}

const ctaReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
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
          variants={staggerContainer(0.2)}
          className="grid gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {ROOMS.map((room) => {
            const i18nKey = ROOM_I18N_KEYS[room.id]
            const features = t(`suites.rooms.${i18nKey}.features`, { returnObjects: true }) as string[]
            return (
              <motion.article
                key={room.id}
                variants={cardReveal}
                className="flex h-full flex-col overflow-hidden bg-white/90 border border-white/80 shadow-coastal group"
              >
                {/* ── image with reveal ── */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <motion.img
                    variants={imageReveal}
                    src={room.imageUrl}
                    alt={t(`suites.rooms.${i18nKey}.name`)}
                    className="h-full w-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                  <motion.div
                    variants={badgeSlide}
                    className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-ink shadow-sm backdrop-blur-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teak-accent" />
                    {t(`suites.rooms.${i18nKey}.typeLabel`)}
                  </motion.div>
                </div>

                {/* ── card content with staggered reveals ── */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-20px' }}
                  variants={staggerContainer(0.08, 0.15)}
                  className="flex h-full flex-col gap-6 p-6"
                >
                  <motion.div variants={blurFade} className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal">{t(`suites.rooms.${i18nKey}.name`)}</h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mt-2">
                        {t('suites.bedLabel')}
                      </p>
                      <p className="text-sm text-stone-600 font-medium">{t(`suites.rooms.${i18nKey}.bedDetails`)}</p>
                    </div>
                    <StarIcon className="w-4 h-4 text-teak-accent/60" />
                  </motion.div>

                  <motion.div variants={priceReveal} className="flex items-baseline gap-1.5">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">{t('suites.startingFrom')}</span>
                    <span className="font-serif text-xl text-charcoal font-medium">
                      Rp {room.startingPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="text-xs text-stone-400">/{t('suites.perNight')}</span>
                  </motion.div>

                  <motion.p variants={blurFade} className="text-sm leading-relaxed text-stone-600 font-light">
                    {t(`suites.rooms.${i18nKey}.description`)}
                  </motion.p>

                  <motion.div variants={blurFade} className="border-t border-stone-100 pt-5">
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
                    <motion.div variants={featureStagger} className="grid grid-cols-1 gap-3">
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
                    </motion.div>
                  </motion.div>

                  <motion.button
                    variants={ctaReveal}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRoomInquiry(t(`suites.rooms.${i18nKey}.name`))}
                    className="mt-auto inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] bg-charcoal text-white px-6 py-3 hover:bg-teak-accent transition-colors duration-500 shadow-lg hover:shadow-xl"
                  >
                    <span>{t('suites.ctaLabel')}</span>
                    <WhatsAppIcon className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>

      </div>
    </Section>
  )
}
