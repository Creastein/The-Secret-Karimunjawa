import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GlobeIcon } from 'hugeicons-react'

const LANGUAGES = [
    { code: 'id', label: 'ID', name: 'Indonesia' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'fr', label: 'FR', name: 'Français' },
] as const

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const currentLang = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0]

    const handleSelect = (code: string) => {
        i18n.changeLanguage(code)
        setOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div ref={ref} className="relative ml-2">
            <button
                onClick={() => setOpen(prev => !prev)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 hover:border-stone-400 bg-white/60 backdrop-blur-sm transition-all duration-300 group"
                aria-label="Change language"
            >
                <GlobeIcon className="w-3.5 h-3.5 text-stone-400 group-hover:text-charcoal transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-charcoal">
                    {currentLang.label}
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-0 top-full mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-stone-100 overflow-hidden min-w-[160px] z-50"
                    >
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-200 ${currentLang.code === lang.code
                                    ? 'bg-stone-50 text-charcoal'
                                    : 'text-stone-500 hover:bg-stone-50 hover:text-charcoal'
                                    }`}
                            >
                                <span className={`text-[10px] uppercase tracking-widest font-bold w-5 ${currentLang.code === lang.code ? 'text-teak-accent' : 'text-stone-400'
                                    }`}>
                                    {lang.label}
                                </span>
                                <span className="text-xs font-light">{lang.name}</span>
                                {currentLang.code === lang.code && (
                                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teak-accent" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
