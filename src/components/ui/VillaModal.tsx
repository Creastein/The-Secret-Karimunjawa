import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Room } from '@/config/types'
import { WHATSAPP_NUMBER } from '@/config/site'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import {
    BedDoubleIcon,
    WaveIcon,
    Tree02Icon,
    Tv01Icon,
    Tick01Icon,
    Coffee01Icon as Cup01Icon,
    StarIcon,
    Cancel01Icon,
    ArrowLeft01Icon,
    ArrowRight01Icon,
    Bathtub01Icon,
    Bathtub02Icon,
    Briefcase01Icon,
    Archive01Icon,
} from 'hugeicons-react'

interface VillaModalProps {
    room: Room | null
    i18nKey: string
    onClose: () => void
}

function getFeatureIcon(feature: string) {
    const text = feature.toLowerCase()
    if (text.includes('bed') || text.includes('tidur')) return BedDoubleIcon
    if (text.includes('bath') || text.includes('mandi')) return Bathtub01Icon
    if (text.includes('shower')) return Bathtub02Icon
    if (text.includes('pool') || text.includes('ocean') || text.includes('sea') || text.includes('laut')) return WaveIcon
    if (text.includes('garden') || text.includes('view') || text.includes('access') || text.includes('terrace') || text.includes('taman') || text.includes('veranda')) return Tree02Icon
    if (text.includes('tv') || text.includes('entertainment')) return Tv01Icon
    if (text.includes('safe') || text.includes('security')) return Tick01Icon
    if (text.includes('bar') || text.includes('kitchen') || text.includes('dapur')) return Cup01Icon
    if (text.includes('desk') || text.includes('work')) return Briefcase01Icon
    if (text.includes('closet') || text.includes('wardrobe')) return Archive01Icon
    return StarIcon
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
}

const modalVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] } },
    exit: { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.25, ease: 'easeIn' } },
}

export default function VillaModal({ room, i18nKey, onClose }: VillaModalProps) {
    const { t } = useTranslation()
    const [activeImg, setActiveImg] = useState(0)
    const gallery = room?.gallery ?? (room ? [room.imageUrl] : [])
    const features = room
        ? (t(`suites.rooms.${i18nKey}.features`, { returnObjects: true }) as string[])
        : []

    // Reset gallery index when room changes
    useEffect(() => { setActiveImg(0) }, [room])

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') setActiveImg(i => Math.min(i + 1, gallery.length - 1))
            if (e.key === 'ArrowLeft') setActiveImg(i => Math.max(i - 1, 0))
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [onClose, gallery.length])

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    const handleBooking = useCallback(() => {
        if (!room) return
        const name = t(`suites.rooms.${i18nKey}.name`)
        const msg = t('contact.whatsappBookingMessage').replace('[UNIT]', name)
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    }, [room, i18nKey, t])

    if (!room) return null

    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    key="modal"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={e => e.stopPropagation()}
                    className="relative w-full max-w-4xl max-h-[90vh] bg-white overflow-hidden flex flex-col md:flex-row shadow-2xl"
                >
                    {/* ── Close button ── */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm text-charcoal hover:bg-charcoal hover:text-white transition-colors duration-200 rounded-none shadow-md"
                        aria-label="Close"
                    >
                        <Cancel01Icon className="w-4 h-4" strokeWidth={2} />
                    </button>

                    {/* ── Left: Gallery ── */}
                    <div className="relative md:w-[55%] aspect-[4/3] md:aspect-auto md:h-auto bg-stone-900 flex-shrink-0 overflow-hidden flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeImg}
                                src={gallery[activeImg]}
                                alt={t(`suites.rooms.${i18nKey}.name`)}
                                className="w-full h-full object-contain"
                                decoding="async"
                                width={1600}
                                height={1200}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            />
                        </AnimatePresence>

                        {/* Gallery nav */}
                        {gallery.length > 1 && (
                            <>
                                <button
                                    onClick={() => setActiveImg(i => Math.max(i - 1, 0))}
                                    disabled={activeImg === 0}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white disabled:opacity-30 transition-all duration-200"
                                    aria-label="Previous image"
                                >
                                    <ArrowLeft01Icon className="w-4 h-4 text-charcoal" strokeWidth={2} />
                                </button>
                                <button
                                    onClick={() => setActiveImg(i => Math.min(i + 1, gallery.length - 1))}
                                    disabled={activeImg === gallery.length - 1}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white disabled:opacity-30 transition-all duration-200"
                                    aria-label="Next image"
                                >
                                    <ArrowRight01Icon className="w-4 h-4 text-charcoal" strokeWidth={2} />
                                </button>
                                {/* Dots */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {gallery.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImg(i)}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === activeImg ? 'bg-white w-4' : 'bg-white/50'}`}
                                            aria-label={`Image ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Type badge */}
                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-ink shadow-sm backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-teak-accent" />
                            {t(`suites.rooms.${i18nKey}.typeLabel`)}
                        </div>
                    </div>

                    {/* ── Right: Info ── */}
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-5 p-6 md:p-8 h-full">

                            {/* Name + bed */}
                            <div>
                                <h2 className="font-serif text-3xl text-charcoal tracking-tight">
                                    {t(`suites.rooms.${i18nKey}.name`)}
                                </h2>
                                <p className="text-xs text-stone-400 uppercase tracking-[0.2em] mt-1">
                                    {t('suites.bedLabel')} — {t(`suites.rooms.${i18nKey}.bedDetails`)}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-1">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-serif text-2xl text-charcoal font-medium">
                                        Rp {room.startingPrice.toLocaleString('id-ID')}
                                        {room.maxPrice ? ` – ${room.maxPrice.toLocaleString('id-ID')}` : ''}
                                    </span>
                                    <span className="text-xs text-stone-400">/{t('suites.perNight')}</span>
                                </div>
                                <p className="text-[10px] italic text-stone-400">*{t('suites.seasonNote')}</p>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-stone-100" />

                            {/* Description */}
                            <p className="text-sm text-stone-600 font-light leading-relaxed">
                                {t(`suites.rooms.${i18nKey}.description`)}
                            </p>

                            {/* Features */}
                            <div>
                                <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] mb-3">{t('suites.featuresLabel')}</p>
                                <div className="grid grid-cols-2 gap-2.5">
                                    {features.map((feature: string) => {
                                        const Icon = getFeatureIcon(feature)
                                        return (
                                            <div key={feature} className="flex items-center gap-2.5">
                                                <div className="text-tide flex-shrink-0">
                                                    <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-xs text-stone-600 font-medium leading-tight">{feature}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={handleBooking}
                                className="mt-auto inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] bg-charcoal text-white px-6 py-3.5 hover:bg-teak-accent transition-colors duration-500 w-full"
                            >
                                <span>{t('suites.ctaLabel')}</span>
                                <WhatsAppIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
