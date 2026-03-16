import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

const EASE_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]
const TOTAL_DURATION = 2000

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useLockBodyScroll(isVisible)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 400)
    }, TOTAL_DURATION)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="fixed inset-0 z-[9999] bg-ink flex items-center justify-center overflow-hidden"
        >
          {/* ── centered content ─────────────────────── */}
          <div className="flex flex-col items-center justify-center text-center px-6">
            {/* "karimunjawa has a" */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE_EXPO }}
              className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.35em] uppercase text-white/60 mb-4"
            >
              karimunjawa has a
            </motion.p>

            {/* "Secret" — Alex Brush */}
            <motion.p
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_EXPO }}
              style={{ fontFamily: '"Alex Brush", cursive' }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-5"
            >
              Secret
            </motion.p>

            {/* "come and find it...." */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: EASE_EXPO }}
              className="font-serif italic text-xs md:text-sm tracking-[0.2em] text-white/40"
            >
              come and find it
              {['.', '.', '.', '.'].map((dot, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2,
                    delay: 1.1 + i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    times: [0, 0.2, 0.7, 1],
                  }}
                >
                  {dot}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
