import { motion } from 'framer-motion'
import { Instagram, Facebook, ArrowUp } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-charcoal text-stone-400 pt-16 md:pt-24 pb-10 md:pb-12 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-14 md:mb-20"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <h2 className="font-serif text-3xl text-white tracking-tight">TS.</h2>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              An exclusive island retreat where nature, hospitality, and tranquility come together on the shores of Karimunjawa.
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Address</p>
              <p className="text-sm font-light text-stone-300">
                Jl. I. J. Kasimo<br />
                Karimunjawa, Jepara 59455<br />
                Jawa Tengah, Indonesia
              </p>
            </div>
            <div className="flex gap-6 pt-2">
              <a href="https://www.instagram.com/thesecretkarimunjawa/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-teak-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone-500 hover:text-teak-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:pl-12">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#estate" className="hover:text-teak-accent transition-colors">The Retreat</a></li>
              <li><a href="#suites" className="hover:text-teak-accent transition-colors">Our Villa</a></li>
              <li><a href="#experience" className="hover:text-teak-accent transition-colors">Experience</a></li>
              <li><a href="#gallery" className="hover:text-teak-accent transition-colors">Visual Narrative</a></li>
              <li><a href="#location" className="hover:text-teak-accent transition-colors">The Island</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8">Information</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-teak-accent transition-colors">Concierge Services</a></li>
              <li><a href="#" className="hover:text-teak-accent transition-colors">Island Activities</a></li>
              <li><a href="#" className="hover:text-teak-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teak-accent transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-teak-accent transition-colors">Contact Us</a></li>
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
            &copy; {new Date().getFullYear()} The Secret Karimunjawa. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-widest text-stone-600 hidden md:block">
              Karimunjawa Island Retreat
            </span>
            <button onClick={scrollToTop} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-400 hover:text-white transition-colors group">
              Back to Top
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
