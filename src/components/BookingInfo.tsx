import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { PRICING } from '../constants';

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

const slideInFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const BookingInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    name: '',
    email: '',
    guests: '2'
  });

  const handleWhatsApp = () => {
    const message = `Hello The Secret Karimunjawa, I would like to inquire about availability.\n\nName: ${formData.name}\nDates: ${formData.checkIn} to ${formData.checkOut}\nGuests: ${formData.guests}\n\nPlease let me know if the dates are open.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628131011434?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="inquire" className="bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row border border-stone-200 shadow-2xl shadow-stone-200/40"
      >

        {/* Visual/Context Side */}
        <motion.div
          variants={slideInFromLeft}
          className="w-full lg:w-5/12 bg-stone-50 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-60 pointer-events-none"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariant}
          >
            <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.25em] uppercase mb-4 block">Transparency</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">Essential Info</motion.h2>

            <motion.div variants={fadeUp} className="mb-10">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-serif text-ocean-deep">Rp {PRICING.price}</span>
                <span className="text-sm text-stone-500 font-light">/ malam</span>
              </div>
              <p className="text-xs text-stone-400 uppercase tracking-wide">{PRICING.details}</p>
            </motion.div>

            <motion.div variants={containerVariant} className="space-y-6">
              <motion.div variants={fadeUp}>
                <h4 className="text-xs uppercase tracking-widest font-bold text-stone-700 mb-2">Location Context</h4>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-stone-400 shrink-0" strokeWidth={1} />
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Jl. I. J. Kasimo, Karimunjawa, Jepara.<br />
                    <span className="opacity-60 block mt-1">
                      • 16 mins to Pantai Batu Topeng<br />
                      • 20 mins to Tanjung Gelam Beach<br />
                      • 10 mins to Karimunjawa Harbor
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h4 className="text-xs uppercase tracking-widest font-bold text-stone-700 mb-2">House Rules</h4>
                <ul className="space-y-2">
                  {['Non-Smoking Rooms', 'Pet Friendly', 'Quiet Hours: 10PM - 7AM'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-stone-500 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-stone-200/60"
          >
            <p className="text-[10px] text-stone-400 uppercase tracking-widest">The Secret Karimunjawa</p>
          </motion.div>
        </motion.div>

        {/* Interaction Side */}
        <motion.div
          variants={slideInFromRight}
          className="w-full lg:w-7/12 bg-white p-10 md:p-16"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariant}
          >
            <motion.span variants={fadeUp} className="text-ocean-deep text-xs tracking-[0.25em] uppercase mb-4 block">Inquiries</motion.span>
            <motion.h3 variants={fadeUp} className="font-serif text-3xl text-stone-800 mb-4">Direct Booking</motion.h3>
            <motion.p variants={fadeUp} className="text-stone-500 font-light text-sm leading-relaxed max-w-md mb-10">
              We prefer a personal connection. Fill out the details below to start a WhatsApp conversation directly with our villa manager.
            </motion.p>
          </motion.div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleWhatsApp(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Check In</label>
                <input required name="checkIn" onChange={handleChange} type="date" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent text-stone-600 font-serif" />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Check Out</label>
                <input required name="checkOut" onChange={handleChange} type="date" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent text-stone-600 font-serif" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Your Name</label>
                <input required name="name" onChange={handleChange} type="text" placeholder="e.g. Alexander" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent placeholder-stone-200 font-serif" />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Guests</label>
                <select name="guests" onChange={handleChange} className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent text-stone-600 font-serif">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-stone-900 text-white py-5 text-xs tracking-[0.25em] uppercase hover:bg-ocean-deep transition-all duration-500 flex items-center justify-center gap-3 group mt-4">
              Check Availability via WhatsApp
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <p className="text-center text-[10px] text-stone-400">
              Response typically within 1 hour • No payment required yet
            </p>
          </form>
        </motion.div>

      </motion.div>
    </Section>
  );
};

export default BookingInfo;