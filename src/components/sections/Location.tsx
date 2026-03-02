import { motion } from 'framer-motion'
import Section from '@/components/layout/Section'
import { MapPin, Ship, Waves, Mountain, Navigation } from 'lucide-react'
import { fadeUp, spotReveal, mapReveal, staggerContainer } from '@/lib/motion'

const HOTSPOTS = [
  { name: 'Pantai Batu Topeng', time: '16 mins', icon: Waves, desc: 'Scenic beach nearby' },
  { name: 'Tanjung Gelam', time: '20 mins', icon: Waves, desc: 'Popular sunset beach' },
  { name: 'Pelabuhan Karimunjawa', time: '10 mins', icon: Ship, desc: 'Ferry & speedboat harbor' },
  { name: 'TN Karimunjawa', time: '15 mins', icon: Mountain, desc: 'National marine park' },
] as const

export default function Location() {
  return (
    <Section id="location" className="bg-sand" fullWidth>
      <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[600px]">

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={mapReveal}
          className="w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-auto relative group overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d110.4201118!3d-5.8440389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7761c4b4e1fcad%3A0x1234567890abcdef!2sThe%20Secret%20Karimunjawa!5e0!3m2!1sen!2sid!4v1709221234567!5m2!1sen!2sid"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Secret Karimunjawa Location"
            className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-8 left-8 z-10"
          >
            <a href="https://maps.app.goo.gl/N7ZEBC1pCWXsCh2W8" target="_blank" rel="noreferrer" className="bg-white text-charcoal px-6 py-3 text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-charcoal hover:text-white transition-all shadow-lg">
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.1, 0.15)}
          className="w-full lg:w-1/3 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center border-l border-stone-200"
        >
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-6 block">The Island</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-[1.05] tracking-tight">
            Remote yet <br />
            <span className="italic text-stone-400">Reachable</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-500 font-light text-sm leading-relaxed mb-10">
            Karimunjawa is a hidden archipelago in the Java Sea, offering untouched beaches, vibrant coral reefs, and a sense of serenity that's becoming rare in today's world.
          </motion.p>

          <motion.div variants={staggerContainer()} className="space-y-6">
            {HOTSPOTS.map((spot) => (
              <motion.div key={spot.name} variants={spotReveal} className="flex items-start gap-4 group cursor-default">
                <div className="p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teak-accent group-hover:bg-stone-100 transition-colors">
                  <spot.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 border-b border-stone-100 pb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-sm font-bold text-stone-700 uppercase tracking-wide">{spot.name}</h4>
                    <span className="text-xs font-serif italic text-stone-400">{spot.time}</span>
                  </div>
                  <p className="text-xs text-stone-400 font-light">{spot.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}
