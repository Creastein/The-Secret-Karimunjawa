import { useState } from 'react'
import type * as React from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CallIcon, Location01Icon, ArrowRight01Icon, InstagramIcon, ArrowUpRight01Icon } from 'hugeicons-react'

import Section from '@/components/layout/Section'
import { CONTACT_SECTION, ROOMS, WHATSAPP_NUMBER } from '@/config/site'
import { fadeUp, slideInLeft, formCardReveal, staggerContainer } from '@/lib/motion'

interface ContactItemProps {
  icon: React.ElementType
  label: string
  content: string
  link: string
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, content, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group cursor-pointer">
      <div className="p-3 bg-white border border-stone-100 shadow-sm rounded-full text-stone-400 group-hover:text-teak-accent group-hover:border-teak-accent/30 transition-all duration-300">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 group-hover:text-teak-accent transition-colors">{label}</h4>
        <div className="flex items-center gap-2">
          <p className="text-base font-serif text-charcoal leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">{content}</p>
          <ArrowUpRight01Icon className="w-3 h-3 text-stone-300 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </a>
  )
}

interface InputFieldProps {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  activeField: string | null
  setActiveField: (field: string | null) => void
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, placeholder, value, onChange, activeField, setActiveField }) => {
  return (
    <div className="group relative">
      <label className={`text-[10px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${activeField === name ? 'text-teak-accent' : 'text-stone-500'}`}>{label}</label>
      <input required name={name} onChange={onChange} onFocus={() => setActiveField(name)} onBlur={() => setActiveField(null)} type={type} value={value} placeholder={placeholder} className="w-full border-b border-stone-300 py-3 text-sm focus:outline-none focus:border-teak-accent transition-colors bg-transparent placeholder-stone-400 font-serif" />
    </div>
  )
}

interface Props { }

const Contact: React.FC<Props> = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    unit: '',
  })
  const [activeField, setActiveField] = useState<string | null>(null)

  const handleScrollToFAQ = () => {
    const el = document.getElementById('faq')
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    const message = t('contact.whatsappInquiryTemplate')
      .replace('[NAME]', formData.name)
      .replace('[CHECKIN]', formData.checkIn)
      .replace('[CHECKOUT]', formData.checkOut)
      .replace('[UNIT]', formData.unit)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Section id="contact" className="bg-limestone relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teak-accent/10 rounded-full blur-[80px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-start">

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer(0.12)}
            className="lg:col-span-5 pt-10 pb-10 md:pb-20 lg:py-20 flex flex-col justify-between h-full"
          >
            <div>
              <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.25em] uppercase font-semibold mb-6 block">
                {t('contact.eyebrow')}
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
                {t('contact.title')} <br /> <span className="italic text-stone-500">{t('contact.titleAccent')}</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-light text-stone-600 mb-12 leading-relaxed max-w-sm">
                {t('contact.description')}
              </motion.p>
              <motion.button
                variants={fadeUp}
                type="button"
                onClick={handleScrollToFAQ}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone-500 hover:text-teak-accent transition-colors"
              >
                {t('contact.faqButton')}
              </motion.button>
            </div>

            <motion.div variants={staggerContainer()} className="space-y-10">
              <motion.div variants={slideInLeft}>
                <ContactItem icon={Location01Icon} label={t('contact.locationLabel')} content={CONTACT_SECTION.locationText} link={CONTACT_SECTION.locationLink} />
              </motion.div>
              <motion.div variants={slideInLeft}>
                <ContactItem icon={CallIcon} label={t('contact.whatsappLabel')} content={CONTACT_SECTION.whatsappText} link={`https://wa.me/${WHATSAPP_NUMBER}`} />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 flex items-center gap-4 text-stone-400">
              <div className="h-px w-12 bg-stone-300" />
              <a href={CONTACT_SECTION.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-teak-accent transition-colors flex items-center gap-2 text-xs uppercase tracking-widest group">
                <InstagramIcon className="w-4 h-4" />
                <span className="group-hover:translate-x-1 transition-transform">{CONTACT_SECTION.instagramHandle}</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={formCardReveal}
              className="bg-white p-6 sm:p-8 md:p-14 shadow-2xl shadow-stone-400/20 rounded-sm relative border border-stone-100 ring-1 ring-stone-900/5"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-stone-100 to-transparent pointer-events-none" />

              <h3 className="font-serif text-2xl text-charcoal mb-2">{t('contact.formTitle')}</h3>
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-10">{t('contact.formSubtitle')}</p>

              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleWhatsApp() }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField
                    label={t('contact.nameLabel')}
                    name="name"
                    type="text"
                    placeholder={t('contact.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    activeField={activeField}
                    setActiveField={setActiveField}
                  />
                  <InputField
                    label={t('contact.checkInLabel')}
                    name="checkIn"
                    type="date"
                    placeholder=""
                    value={formData.checkIn}
                    onChange={handleChange}
                    activeField={activeField}
                    setActiveField={setActiveField}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField
                    label={t('contact.checkOutLabel')}
                    name="checkOut"
                    type="date"
                    placeholder=""
                    value={formData.checkOut}
                    onChange={handleChange}
                    activeField={activeField}
                    setActiveField={setActiveField}
                  />

                  <div className="relative group">
                    <label className={`text-[10px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${activeField === 'unit' ? 'text-teak-accent' : 'text-stone-400'}`}>
                      {t('contact.unitLabel')}
                    </label>
                    <div className="relative">
                      <select
                        name="unit"
                        required
                        value={formData.unit}
                        onChange={handleChange}
                        onFocus={() => setActiveField('unit')}
                        onBlur={() => setActiveField(null)}
                        className="w-full border-b border-stone-300 py-3 text-sm focus:outline-none focus:border-teak-accent transition-colors bg-transparent text-charcoal font-serif appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          {t('contact.unitPlaceholder')}
                        </option>
                        {ROOMS.map((room) => (
                          <option key={room.id} value={room.name}>
                            {room.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button type="submit" className="w-full md:w-auto bg-charcoal text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-teak-accent transition-all duration-500 flex items-center justify-center md:inline-flex gap-4 group shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <span>{t('contact.submitLabel')}</span>
                    <ArrowRight01Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default Contact
