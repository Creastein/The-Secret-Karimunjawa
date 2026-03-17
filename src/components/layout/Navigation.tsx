import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cancel01Icon, Menu01Icon } from 'hugeicons-react'
import { useTranslation } from 'react-i18next'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { EASE_OUT_EXPO } from '@/lib/motion'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const NAV_LINKS = [
  { key: 'home', href: '#home', id: 'home' },
  { key: 'estate', href: '#estate', id: 'estate' },
  { key: 'suites', href: '#suites', id: 'suites' },
  { key: 'experience', href: '#experience', id: 'experience' },
  { key: 'gallery', href: '#gallery', id: 'gallery' },
  { key: 'contact', href: '#contact', id: 'contact' },
  { key: 'location', href: '#location', id: 'location' },
] as const

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Navigation() {
  const { t } = useTranslation()
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
              ? 'py-2 px-4 md:px-5 bg-limestone/95 border border-white/60 shadow-coastal gap-3 md:gap-6'
              : 'py-2 px-4 md:py-3 md:px-6 bg-white/60 border border-white/40 shadow-sm gap-3 md:gap-8'
            }
          `}
        >
          <a href="#" onClick={handleLogoClick} className="relative z-50 shrink-0 flex items-center hover:opacity-70 transition-opacity">
            <img src="/assets/logo-navbar.svg" alt="The Secret Karimunjawa" className="h-14 md:h-16 w-auto" width={64} height={64} />
          </a>

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-[11px] uppercase tracking-widest transition-colors relative group py-1 font-medium cursor-pointer ${isActive ? 'text-ink' : 'text-stone-500 hover:text-tide'}`}
                >
                  {t(`nav.${link.key}`)}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-teak-accent transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              )
            })}
          </div>

          <LanguageSwitcher />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ink relative z-50 focus:outline-none p-2.5 hover:bg-stone-100 rounded-full transition-colors ml-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileOpen ? <Cancel01Icon className="w-5 h-5" /> : <Menu01Icon className="w-5 h-5" />}
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
                    {t(`nav.${link.key}`)}
                  </motion.a>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-stone-200 w-32"
              >
                <p className="text-xs text-stone-400 uppercase tracking-widest">{t('nav.locationSubtitle')}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
