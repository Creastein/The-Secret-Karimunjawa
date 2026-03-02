import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Mail, Phone, MapPin, ArrowRight, Instagram, ArrowUpRight } from 'lucide-react';

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const formCardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Reservation Inquiry',
    message: ''
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  const handleWhatsApp = () => {
    const message = `Hi The Secret Karimunjawa,\n\nI'm contacting you regarding: ${formData.subject}\n\nMy details:\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628131011434?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" className="bg-limestone relative overflow-hidden py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teak-accent/10 rounded-full blur-[80px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-start">

          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariant}
            className="lg:col-span-5 pt-10 pb-10 md:pb-20 lg:py-20 flex flex-col justify-between h-full"
          >
            <div>
              <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.25em] uppercase font-semibold mb-6 block">
                Connection
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
                Begin Your <br /> <span className="italic text-stone-500">Journey</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="font-light text-stone-600 mb-12 leading-relaxed max-w-sm">
                From inquiries about our villa to planning island adventures, our team is ready to curate your ideal Karimunjawa experience.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div variants={containerVariant} className="space-y-10">
              <motion.div variants={slideInLeft}>
                <ContactItem
                  icon={MapPin}
                  label="Location"
                  content="Jl. I. J. Kasimo, Karimunjawa, Jepara"
                  link="https://maps.app.goo.gl/N7ZEBC1pCWXsCh2W8"
                />
              </motion.div>
              <motion.div variants={slideInLeft}>
                <ContactItem
                  icon={Phone}
                  label="WhatsApp"
                  content="+62 813 1011 434"
                  link="https://wa.me/628131011434"
                />
              </motion.div>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="mt-16 flex items-center gap-4 text-stone-400">
              <div className="h-px w-12 bg-stone-300"></div>
              <a href="https://www.instagram.com/thesecretkarimunjawa/" target="_blank" rel="noopener noreferrer" className="hover:text-teak-accent transition-colors flex items-center gap-2 text-xs uppercase tracking-widest group">
                <Instagram className="w-4 h-4" />
                <span className="group-hover:translate-x-1 transition-transform">@thesecretkarimunjawa</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={formCardVariant}
              className="bg-white p-6 sm:p-8 md:p-14 shadow-2xl shadow-stone-400/20 rounded-sm relative border border-stone-100 ring-1 ring-stone-900/5"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-stone-100 to-transparent pointer-events-none"></div>

              <h3 className="font-serif text-2xl text-charcoal mb-2">Direct Inquiry</h3>
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-10">Response within 2 hours</p>

              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleWhatsApp(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField label="Full Name" name="name" type="text" placeholder="e.g. Alexander Hamilton" value={formData.name} onChange={handleChange} activeField={activeField} setActiveField={setActiveField} />
                  <InputField label="Email Address" name="email" type="email" placeholder="e.g. alex@example.com" value={formData.email} onChange={handleChange} activeField={activeField} setActiveField={setActiveField} />
                </div>

                <div className="relative group">
                  <label className={`text-[10px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${activeField === 'subject' ? 'text-teak-accent' : 'text-stone-400'}`}>Subject</label>
                  <div className="relative">
                    <select name="subject" onChange={handleChange} onFocus={() => setActiveField('subject')} onBlur={() => setActiveField(null)} className="w-full border-b border-stone-300 py-3 text-sm focus:outline-none focus:border-teak-accent transition-colors bg-transparent text-charcoal font-serif appearance-none cursor-pointer">
                      <option value="Reservation Inquiry">Reservation Inquiry</option>
                      <option value="Diving / Snorkeling Trip">Diving / Snorkeling Trip</option>
                      <option value="Island Tour">Island Tour</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400"><span className="text-[10px]">▼</span></div>
                  </div>
                </div>

                <div className="relative group">
                  <label className={`text-[10px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${activeField === 'message' ? 'text-teak-accent' : 'text-stone-500'}`}>Your Message</label>
                  <textarea required name="message" onChange={handleChange} onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)} rows={4} placeholder="Tell us about your plans..." className="w-full border-b border-stone-300 py-3 text-sm focus:outline-none focus:border-teak-accent transition-colors bg-transparent placeholder-stone-400 font-serif resize-none" />
                </div>

                <div className="pt-6 flex justify-end">
                  <button type="submit" className="w-full md:w-auto bg-charcoal text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-teak-accent transition-all duration-500 flex items-center justify-center md:inline-flex gap-4 group shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <span>Send Request</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
};

// Helper Components
const ContactItem = ({ icon: Icon, label, content, link }: { icon: any, label: string, content: string, link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group cursor-pointer">
    <div className="p-3 bg-white border border-stone-100 shadow-sm rounded-full text-stone-400 group-hover:text-teak-accent group-hover:border-teak-accent/30 transition-all duration-300">
      <Icon className="w-5 h-5" strokeWidth={1.5} />
    </div>
    <div>
      <h4 className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 group-hover:text-teak-accent transition-colors">{label}</h4>
      <div className="flex items-center gap-2">
        <p className="text-base font-serif text-charcoal leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">{content}</p>
        <ArrowUpRight className="w-3 h-3 text-stone-300 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </div>
  </a>
);

const InputField = ({ label, name, type, placeholder, value, onChange, activeField, setActiveField }: any) => (
  <div className="group relative">
    <label className={`text-[10px] uppercase tracking-widest block mb-2 transition-colors duration-300 ${activeField === name ? 'text-teak-accent' : 'text-stone-500'}`}>{label}</label>
    <input required name={name} onChange={onChange} onFocus={() => setActiveField(name)} onBlur={() => setActiveField(null)} type={type} value={value} placeholder={placeholder} className="w-full border-b border-stone-300 py-3 text-sm focus:outline-none focus:border-teak-accent transition-colors bg-transparent placeholder-stone-400 font-serif" />
  </div>
);

export default Contact;
