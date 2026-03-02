import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { EASE_OUT_EXPO } from '@/lib/motion'

const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'The Retreat', href: '#estate', id: 'estate' },
  { name: 'Suites', href: '#suites', id: 'suites' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Gallery', href: '#gallery', id: 'gallery' },
  { name: 'Contact', href: '#contact', id: 'contact' },
] as const

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy({ offset: 200, ids: [...SECTION_IDS] })

  useLockBodyScroll(mobileOpen)

  useState(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  })

  const scrollToElement = (id: string, delay = 0) => {
    const el = document.getElementById(id)
    if (!el) return

    const offset = mobileOpen ? 80 : 100
    const go = () => {
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    delay ? setTimeout(go, delay) : go()
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (mobileOpen) {
      setMobileOpen(false)
      scrollToElement(id, 350)
    } else {
      scrollToElement(id)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-end md:justify-center px-6 md:px-0 transition-all duration-700 ${scrolled ? 'pt-4' : 'pt-6 md:pt-10'}`}>
        <nav
          className={`
            flex items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            backdrop-blur-2xl rounded-full text-ink
            ${scrolled
              ? 'py-3 px-5 md:px-6 bg-limestone/95 border border-white/60 shadow-coastal gap-4 md:gap-8'
              : 'py-3 px-5 md:py-4 md:px-8 bg-white/60 border border-white/40 shadow-sm gap-4 md:gap-12'
            }
          `}
        >
          <a href="#" onClick={handleLogoClick} className="font-serif text-xl md:text-2xl tracking-tight font-semibold relative z-50 shrink-0 flex items-center hover:opacity-70 transition-opacity">
            <span>TS.</span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-[11px] uppercase tracking-widest transition-colors relative group py-1 font-medium cursor-pointer ${isActive ? 'text-ink' : 'text-stone-500 hover:text-tide'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-teak-accent transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              )
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ink relative z-50 focus:outline-none p-2.5 hover:bg-stone-100 rounded-full transition-colors ml-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-limestone/95 backdrop-blur-xl flex items-center justify-center"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.id
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    className={`font-serif text-3xl transition-colors cursor-pointer ${isActive ? 'text-teak-accent italic' : 'text-ink hover:text-tide'}`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-stone-200 w-32"
              >
                <p className="text-xs text-stone-400 uppercase tracking-widest">Karimunjawa, Jepara</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
