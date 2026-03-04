import type * as React from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'


import { WHATSAPP_NUMBER } from '@/config/site'
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
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              title={t('availability.whatsappLabel')}
              aria-label={t('availability.whatsappLabel')}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AvailabilityStickyBar
