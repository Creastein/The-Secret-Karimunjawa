import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { InstagramIcon, ArrowUp01Icon, Mail01Icon } from 'hugeicons-react'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { CONTACT_SECTION, WHATSAPP_NUMBER } from '@/config/site'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Footer() {
  const { t } = useTranslation()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <footer className="bg-charcoal text-stone-400 pt-16 md:pt-24 pb-10 md:pb-12 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14 md:mb-20"
        >
          {/* Column 1: Brand */}
          <motion.div variants={fadeUp} className="space-y-6">
            <img src="/assets/logo-footer.svg" alt="The Secret Karimunjawa" className="h-11 w-auto" width={44} height={44} />
            <p className="text-sm font-light leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">{t('footer.addressLabel')}</p>
              <p className="text-sm font-light text-stone-300">
                Jl. I. J. Kasimo<br />
                Karimunjawa, Jepara 59455<br />
                Jawa Tengah, Indonesia
              </p>
            </div>
          </motion.div>

          {/* Column 2: Explore */}
          <motion.div variants={fadeUp} className="lg:pl-8">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">{t('footer.exploreTitle')}</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#estate" className="hover:text-teak-accent transition-colors">{t('footer.exploreLinks.retreat')}</a></li>
              <li><a href="#suites" className="hover:text-teak-accent transition-colors">{t('footer.exploreLinks.suites')}</a></li>
              <li><a href="#experience" className="hover:text-teak-accent transition-colors">{t('footer.exploreLinks.experience')}</a></li>
              <li><a href="#gallery" className="hover:text-teak-accent transition-colors">{t('footer.exploreLinks.gallery')}</a></li>
              <li><a href="#location" className="hover:text-teak-accent transition-colors">{t('footer.exploreLinks.island')}</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Information */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">{t('footer.infoTitle')}</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#experience" className="hover:text-teak-accent transition-colors">{t('footer.infoLinks.concierge')}</a></li>
              <li><a href="#location" className="hover:text-teak-accent transition-colors">{t('footer.infoLinks.activities')}</a></li>
              <li><a href="#faq" className="hover:text-teak-accent transition-colors">{t('footer.infoLinks.faq')}</a></li>
              <li><a href="#contact" className="hover:text-teak-accent transition-colors">{t('footer.infoLinks.contact')}</a></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">{t('footer.contactTitle')}</h4>
            <ul className="space-y-5">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-teak-accent/20 transition-colors">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-medium">{t('contact.whatsappLabel')}</p>
                    <p className="text-sm text-stone-300 font-light">{CONTACT_SECTION.whatsappText}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={CONTACT_SECTION.instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-teak-accent/20 transition-colors">
                    <InstagramIcon className="w-4 h-4 text-stone-400 group-hover:text-teak-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-medium">{t('contact.instagramLabel')}</p>
                    <p className="text-sm text-stone-300 font-light">{CONTACT_SECTION.instagramHandle}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:thesecretkarimunjawa@gmail.com`} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-teak-accent/20 transition-colors">
                    <Mail01Icon className="w-4 h-4 text-stone-400 group-hover:text-teak-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-medium">Email</p>
                    <p className="text-sm text-stone-300 font-light">thesecretkarimunjawa@gmail.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] uppercase tracking-widest text-stone-600">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-widest text-stone-600 hidden md:block">
              {t('footer.tagline')}
            </span>
            <button onClick={scrollToTop} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-400 hover:text-white transition-colors group">
              {t('footer.backToTop')}
              <ArrowUp01Icon className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
