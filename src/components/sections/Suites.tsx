import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Section from '@/components/layout/Section'
import VillaModal from '@/components/ui/VillaModal'
import { ROOMS } from '@/config/site'
import { Room } from '@/config/types'
import { fadeUp, staggerContainer, EASE_OUT_EXPO } from '@/lib/motion'
import { ArrowRight01Icon } from 'hugeicons-react'

interface Props { }

const ROOM_I18N_KEYS: Record<string, string> = {
  'cipaku': 'cipaku',
  'birdsong': 'birdsong',
  'tivoli-garden': 'tivoliGarden',
}

/* ─────────────────────────────────────────
   Shared easing — semua animasi pakai ini
   ───────────────────────────────────────── */
const EXPO = [0.16, 1, 0.3, 1] as const

/* ── Section header variants ── */
const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const headerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EXPO } },
}

/* ── Card grid variants ── */
const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EXPO } },
}

/* ── Image scale-in ── */
const imgVariant = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: EXPO } },
}

/* ── Badge slide-in ── */
const badgeVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: 0.35, ease: EXPO } },
}

/* ── Card body — stagger children ── */
const bodyContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const bodyItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
}

export default function Suites({ }: Props) {
  const { t } = useTranslation()
  const [selectedRoom, setSelectedRoom] = useState<{ room: Room; i18nKey: string } | null>(null)

  return (
    <>
      <Section id="suites" className="bg-limestone overflow-hidden">
        <div className="flex flex-col gap-14">

          {/* ── Section header ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={headerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={headerItem} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              {t('suites.eyebrow')}
            </motion.span>
            <motion.h2 variants={headerItem} className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05] tracking-tight">
              {t('suites.title')}
            </motion.h2>
            <motion.p variants={headerItem} className="text-stone-500 font-light mt-5 text-sm leading-relaxed max-w-2xl">
              {t('suites.description')}
            </motion.p>
          </motion.div>

          {/* ── Villa cards ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={gridContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {ROOMS.map((room) => {
              const i18nKey = ROOM_I18N_KEYS[room.id]
              return (
                <motion.article
                  key={room.id}
                  variants={cardVariant}
                  className="group flex flex-col overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-coastal transition-shadow duration-500 cursor-pointer"
                  onClick={() => setSelectedRoom({ room, i18nKey })}
                >
                  {/* ── Image ── */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <motion.img
                      variants={imgVariant}
                      src={room.imageUrl}
                      alt={t(`suites.rooms.${i18nKey}.name`)}
                      className="h-full w-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Soft gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

                    {/* Type badge */}
                    <motion.div
                      variants={badgeVariant}
                      className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-ink backdrop-blur-sm shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teak-accent" />
                      {t(`suites.rooms.${i18nKey}.typeLabel`)}
                    </motion.div>

                    {/* Gallery count */}
                    {room.gallery && room.gallery.length > 1 && (
                      <motion.div
                        variants={badgeVariant}
                        className="absolute right-4 bottom-4 bg-white/20 backdrop-blur-sm text-white text-[10px] tracking-wider px-2.5 py-1"
                      >
                        {room.gallery.length} foto
                      </motion.div>
                    )}
                  </div>

                  {/* ── Card body ── */}
                  <motion.div
                    variants={bodyContainer}
                    className="flex flex-col gap-3 p-5"
                  >
                    {/* Villa name */}
                    <motion.h3 variants={bodyItem} className="font-serif text-2xl text-charcoal tracking-tight">
                      {t(`suites.rooms.${i18nKey}.name`)}
                    </motion.h3>

                    {/* Bed config */}
                    <motion.p variants={bodyItem} className="text-xs text-stone-400">
                      {t(`suites.rooms.${i18nKey}.bedDetails`)}
                    </motion.p>

                    {/* Price */}
                    <motion.div variants={bodyItem} className="space-y-0.5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-lg text-charcoal font-medium">
                          Rp {room.startingPrice.toLocaleString('id-ID')}
                          {room.maxPrice ? ` – ${room.maxPrice.toLocaleString('id-ID')}` : ''}
                        </span>
                        <span className="text-xs text-stone-400">/{t('suites.perNight')}</span>
                      </div>
                      <p className="text-[10px] italic text-stone-400">*{t('suites.seasonNote')}</p>
                    </motion.div>

                    {/* CTA */}
                    <motion.button
                      variants={bodyItem}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-charcoal border border-charcoal/20 px-4 py-2.5 w-full justify-center transition-all duration-300 hover:bg-charcoal hover:text-white hover:border-charcoal"
                      onClick={e => {
                        e.stopPropagation()
                        setSelectedRoom({ room, i18nKey })
                      }}
                    >
                      <span>{t('suites.detailLabel')}</span>
                      <ArrowRight01Icon className="w-3 h-3" strokeWidth={2} />
                    </motion.button>
                  </motion.div>
                </motion.article>
              )
            })}
          </motion.div>

        </div>
      </Section>

      {/* ── Villa Detail Modal ── */}
      <AnimatePresence>
        {selectedRoom && (
          <VillaModal
            room={selectedRoom.room}
            i18nKey={selectedRoom.i18nKey}
            onClose={() => setSelectedRoom(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
