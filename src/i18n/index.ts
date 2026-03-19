import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Only import the default/fallback language statically
import id from './locales/id.json'

// Lazy-load other languages on demand
const lazyResources: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
    en: () => import('./locales/en.json'),
    es: () => import('./locales/es.json'),
    fr: () => import('./locales/fr.json'),
    de: () => import('./locales/de.json'),
    it: () => import('./locales/it.json'),
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            id: { translation: id },
        },
        fallbackLng: 'id',
        supportedLngs: ['id', 'en', 'es', 'fr', 'de', 'it'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    })

// After init, load the detected language if it's not 'id'
const detectedLng = i18n.language?.split('-')[0] // e.g. 'en-US' -> 'en'
if (detectedLng && detectedLng !== 'id' && lazyResources[detectedLng]) {
    lazyResources[detectedLng]().then((mod) => {
        i18n.addResourceBundle(detectedLng, 'translation', mod.default || mod, true, true)
    })
}

// Listen for language changes to lazy-load resources
i18n.on('languageChanged', (lng) => {
    const baseLng = lng.split('-')[0]
    if (baseLng !== 'id' && lazyResources[baseLng] && !i18n.hasResourceBundle(baseLng, 'translation')) {
        lazyResources[baseLng]().then((mod) => {
            i18n.addResourceBundle(baseLng, 'translation', mod.default || mod, true, true)
            // Force re-render with new resources
            i18n.changeLanguage(baseLng)
        })
    }
})

export default i18n
