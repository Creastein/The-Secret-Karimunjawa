import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Section from '@/components/layout/Section'
import { ROOMS } from '@/config/site'
import { gsap } from 'gsap'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { fadeUp, scaleInWithY, featureItem, staggerContainer } from '@/lib/motion'
import {
  BedDouble, Bath, Waves, Trees, Tv, ShieldCheck, Armchair, ShowerHead,
  Wine, Briefcase, Archive, Star, ChevronLeft, ChevronRight,
} from 'lucide-react'

function getFeatureIcon(feature: string) {
  const text = feature.toLowerCase()
  if (text.includes('bed') || text.includes('convertible')) return BedDouble
  if (text.includes('bath') || text.includes('toilet') || text.includes('tub')) return Bath
  if (text.includes('shower')) return ShowerHead
  if (text.includes('pool') || text.includes('ocean') || text.includes('sea')) return Waves
  if (text.includes('garden') || text.includes('view') || text.includes('access') || text.includes('terrace')) return Trees
  if (text.includes('tv') || text.includes('entertainment')) return Tv
  if (text.includes('safe') || text.includes('security')) return ShieldCheck
  if (text.includes('lounge') || text.includes('sofa')) return Armchair
  if (text.includes('bar') || text.includes('kitchen')) return Wine
  if (text.includes('desk') || text.includes('work')) return Briefcase
  if (text.includes('closet') || text.includes('wardrobe')) return Archive
  return Star
}

export default function Suites() {
  const [activeRoomId, setActiveRoomId] = useState(ROOMS[0].id)
  const activeRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0]
  const tabsRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const indicatorRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScroll = () => {
    if (!tabsRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current
    setShowLeftArrow(scrollLeft > 10)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5)
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  useEffect(() => {
    if (!indicatorRef.current || !tabsRef.current) return
    const index = ROOMS.findIndex((room) => room.id === activeRoomId)
    const target = tabRefs.current[index]
    if (!target) return

    const tabsRect = tabsRef.current.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const offsetLeft = targetRect.left - tabsRect.left + tabsRef.current.scrollLeft

    gsap.to(indicatorRef.current, {
      x: offsetLeft + 12,
      width: Math.max(targetRect.width - 24, 48),
      duration: shouldReduceMotion ? 0 : 0.45,
      ease: 'power3.out',
    })
  }, [activeRoomId, shouldReduceMotion])

  const navigateRoom = (direction: 'left' | 'right') => {
    const currentIndex = ROOMS.findIndex((r) => r.id === activeRoomId)
    const nextIndex = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(ROOMS.length - 1, currentIndex + 1)

    setActiveRoomId(ROOMS[nextIndex].id)
    tabRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  const handleRoomInquiry = (roomName: string) => {
    const message = `Hello The Secret Karimunjawa, I am interested in the *${roomName}*. Could you please provide availability and rates?`
    window.open(`https://wa.me/628131011434?text=${encodeURIComponent(message)}`, '_blank')
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
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">Accommodation</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05] tracking-tight">
            The Private Sanctuaries
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-500 font-light mt-6 text-sm leading-relaxed max-w-2xl">
            A private villa designed to frame the island landscape. Discover its unique character.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          {showLeftArrow && (
            <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-8 bg-gradient-to-r from-limestone via-limestone to-transparent">
              <button onClick={() => navigateRoom('left')} className="bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-100 transition-colors" aria-label="Scroll left">
                <ChevronLeft className="w-4 h-4 text-stone-600" />
              </button>
            </div>
          )}

          <div ref={tabsRef} onScroll={checkScroll} className="relative flex w-max gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 px-2 scroll-smooth">
            {ROOMS.map((room, index) => (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                ref={(el) => { tabRefs.current[index] = el }}
                className={`group relative min-w-max px-5 py-3 rounded-full border transition-all duration-300 ${activeRoomId === room.id
                    ? 'text-charcoal border-stone-300 bg-white/80 shadow-[0_12px_24px_rgba(15,14,12,0.08)]'
                    : 'text-stone-400 border-transparent bg-white/40 hover:text-stone-600 hover:border-stone-200'
                  }`}
              >
                <div className="flex items-baseline gap-3 px-2">
                  <span className={`text-[10px] tracking-widest uppercase ${activeRoomId === room.id ? 'text-teak-accent' : 'text-stone-300'}`}>
                    0{index + 1}
                  </span>
                  <span className="font-serif text-base md:text-lg tracking-wide">{room.name}</span>
                </div>
              </button>
            ))}
            <div className="min-w-[40px] h-1 shrink-0" />
            <div
              ref={indicatorRef}
              className="absolute bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-teak-accent via-teak-accent/80 to-teak-accent/60 shadow-[0_0_16px_rgba(183,137,95,0.35)]"
              style={{ width: 48 }}
            />
          </div>

          {showRightArrow && (
            <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-8 bg-gradient-to-l from-limestone via-limestone to-transparent">
              <button onClick={() => navigateRoom('right')} className="bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-100 transition-colors" aria-label="Scroll right">
                <ChevronRight className="w-4 h-4 text-stone-600" />
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          key={activeRoom.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer()}
          className="relative mt-4"
        >
          <div className="flex flex-col gap-10">
            <motion.div variants={scaleInWithY} className="relative aspect-[3/2] md:aspect-[16/9] w-full overflow-hidden bg-stone-200 shadow-xl">
              <img
                src={activeRoom.imageUrl}
                alt={activeRoom.name}
                className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={staggerContainer()}
                className="lg:col-span-7 flex flex-col justify-center"
              >
                <motion.h3 variants={fadeUp} className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal mb-4 md:mb-6">{activeRoom.name}</motion.h3>
                <motion.div variants={fadeUp} className="h-[1px] w-16 bg-teak-accent mb-8" />
                <motion.p variants={fadeUp} className="text-stone-600 font-light text-base md:text-lg leading-relaxed mb-10">
                  {activeRoom.description}
                </motion.p>
                <motion.div variants={fadeUp}>
                  <button
                    onClick={() => handleRoomInquiry(activeRoom.name)}
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-widest bg-charcoal text-white px-6 py-3 md:px-8 md:py-4 hover:bg-teak-accent hover:gap-4 transition-all duration-300"
                  >
                    <span>Reserve via WhatsApp</span>
                    <WhatsAppIcon className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={staggerContainer()}
                className="lg:col-span-5"
              >
                <div className="bg-white/90 p-8 border border-white/70 shadow-coastal h-full backdrop-blur-sm">
                  <motion.div variants={fadeUp} className="flex items-center justify-between mb-8 border-b border-stone-100 pb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Suite Features</span>
                    <Star className="w-4 h-4 text-teak-accent/50" />
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeRoom.features.map((feature, idx) => {
                      const Icon = getFeatureIcon(feature)
                      return (
                        <motion.div key={idx} variants={featureItem} className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors group">
                          <div className="mt-0.5 text-stone-400 group-hover:text-teak-accent transition-colors">
                            <Icon className="w-5 h-5" strokeWidth={1.5} />
                          </div>
                          <span className="text-xs text-stone-600 font-medium uppercase tracking-wide leading-relaxed group-hover:text-stone-900">
                            {feature}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
