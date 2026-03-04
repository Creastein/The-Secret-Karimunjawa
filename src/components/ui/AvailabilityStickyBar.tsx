import type * as React from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'


import { PRICING, WHATSAPP_NUMBER } from '@/config/site'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import WhatsAppIcon from './WhatsAppIcon'

interface Props { }

const AvailabilityStickyBar: React.FC<Props> = () => {
  const { t } = useTranslation()
  const isVisible = useScrollVisibility(800)

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('contact.whatsappAvailabilityMessage'))}`,
      '_blank'
    )
  }



  return (
    <>
      {!isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            title={t('availability.floatingLabel')}
            aria-label={t('availability.floatingLabel')}
          >
            <WhatsAppIcon className="w-5 h-5" />
          </button>
        </div>
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 z-50"
          >
            <div className="bg-charcoal/90 backdrop-blur-xl text-white p-2 pl-4 pr-2 rounded-full shadow-2xl flex items-center justify-between md:justify-start gap-3 md:gap-4 border border-white/10 ring-1 ring-white/5">

              <div className="flex flex-col items-end pr-2">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-stone-300 font-medium">{t('availability.statusLabel')}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-sm leading-none">{PRICING.currencySymbol} {PRICING.price}</span>
                  <span className="text-[10px] text-stone-400 font-light lowercase">{t('availability.priceSuffix')}</span>
                </div>
              </div>

              <div className="h-6 w-px bg-white/10" />

              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                title={t('availability.whatsappLabel')}
                aria-label={t('availability.whatsappLabel')}
              >
                <WhatsAppIcon />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AvailabilityStickyBar
