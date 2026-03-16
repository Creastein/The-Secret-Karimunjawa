import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

/* ── easing & constants ────────────────────────────── */
const EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]
const QUINT: [number, number, number, number] = [0.23, 1, 0.32, 1]

/* ── entrance animation variants ───────────────────── */
const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
}

const badgeReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EXPO },
  },
}

const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: QUINT },
  },
}

const titleClipUp = {
  hidden: { opacity: 0, y: '100%', clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: '0%',
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.95, ease: EXPO },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EXPO },
  },
}

const ctaStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
}

const ctaReveal = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EXPO },
  },
}

const imageReveal = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.8, ease: QUINT },
  },
}

const taglineReveal = {
  hidden: { opacity: 0, y: 20, x: 10 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.9, delay: 1.2, ease: EXPO },
  },
}



export default function Hero() {
  const { t } = useTranslation()
  const imageRef = useRef<HTMLImageElement>(null)
  const textPanelRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="home"
      className="relative min-h-[65vh] lg:min-h-[70vh]"
    >
      <div
        className="relative min-h-[65vh] lg:min-h-[70vh] grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-0 items-stretch"
      >
        {/* ── text column ────────────────────────────── */}
        <div className="relative z-10 flex items-end lg:items-center px-5 md:px-12 lg:px-16 py-10 md:py-16 lg:py-24 order-2 lg:order-1">
          <motion.div
            ref={textPanelRef}
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="max-w-xl bg-limestone/90 backdrop-blur-xl px-6 md:px-10 py-8 md:py-12 border border-white/70 ring-coastal shadow-coastal"
          >
            {/* badge */}
            <motion.div
              variants={badgeReveal}
              className="flex items-center gap-4 mb-6"
            >
              <motion.span
                variants={lineGrow}
                className="h-[1px] w-12 bg-teak-accent/80 block"
              />
              <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-ink/70">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
              <span className="block overflow-hidden">
                <motion.span variants={titleClipUp} className="block">
                  {t('hero.title1')}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={titleClipUp}
                  className="block font-light italic text-tide"
                >
                  {t('hero.title2')}
                </motion.span>
              </span>
            </h1>

            {/* description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm md:text-base text-ink/70 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* cta buttons */}
            <motion.div
              variants={ctaStagger}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                variants={ctaReveal}
                href="#contact"
                className="bg-charcoal text-white px-6 py-3 text-[11px] uppercase tracking-[0.3em] hover:bg-teak-accent transition-colors duration-300"
              >
                {t('hero.ctaReserve')}
              </motion.a>
              <motion.a
                variants={ctaReveal}
                href="#gallery"
                className="px-6 py-3 text-[11px] uppercase tracking-[0.3em] border border-ink/20 text-ink hover:border-ink/60 transition-colors duration-300"
              >
                {t('hero.ctaGallery')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── image column ───────────────────────────── */}
        <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
          <motion.picture
            initial="hidden"
            animate="visible"
            variants={imageReveal}
            className="absolute inset-0 h-full w-full"
          >
            <source
              media="(max-width: 768px)"
              srcSet="/assets/hero-img.webp"
              type="image/webp"
            />
            <source
              srcSet="/assets/hero-img.webp"
              type="image/webp"
            />
            <img
              ref={imageRef}
              src="/assets/hero-img.webp"
              alt="Villa karimunjawa sea view sunset - The Secret Karimunjawa beachfront luxury villa"
              className="h-full w-full object-cover object-[70%_50%]"
              loading="eager"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
          </motion.picture>
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

          {/* tagline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={taglineReveal}
            className="absolute bottom-10 right-10 text-right text-white/70 text-[10px] uppercase tracking-[0.35em]"
          >
            <span className="block">{t('hero.tagline1')}</span>
            <span className="block">{t('hero.tagline2')}</span>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
