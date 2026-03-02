import { motion } from 'framer-motion'
import Section from '@/components/layout/Section'
import { FACILITIES } from '@/config/site'
import { Anchor, Utensils, Car, PawPrint, Eye, CigaretteOff, ConciergeBell, Sunrise } from 'lucide-react'
import { fadeUp, fadeUpSlow, scaleIn, staggerContainer } from '@/lib/motion'

const ICON_MAP: Record<string, React.ElementType> = {
  Anchor, Utensils, Car, PawPrint, Eye, CigaretteOff, ConciergeBell, Sunrise,
}

export default function Estate() {
  return (
    <Section id="estate" className="bg-sand bg-atmosphere">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        <div className="lg:w-5/12 lg:sticky lg:top-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer(0.1, 0.15)}
          >
            <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-6 block">
              The Retreat
            </motion.span>

            <motion.h2 variants={fadeUpSlow} className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05] tracking-tight">
              Nature as the <br />
              <span className="italic text-stone-500">Ultimate Escape</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-stone-600 leading-relaxed font-light mb-12 text-lg">
              Nestled on the shores of Karimunjawa Island, The Secret offers an authentic tropical retreat
              where natural beauty meets heartfelt hospitality. With direct beach access, sea-view terraces,
              and lush tropical gardens, your escape from the everyday begins here.
            </motion.p>

            <motion.div
              variants={staggerContainer()}
              className="grid grid-cols-3 gap-8 border-t border-stone-300 pt-8"
            >
              {[
                { value: '9.6', label: 'Rating' },
                { value: '143', label: 'Reviews' },
                { value: '56', label: 'Facilities' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={scaleIn} className="text-center">
                  <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-1">{stat.value}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer()}
          className="lg:w-7/12 w-full bg-white/80 p-8 md:p-12 border border-white/60 shadow-coastal backdrop-blur-sm"
        >
          <motion.div variants={fadeUp} className="mb-10 pb-4 border-b border-stone-100">
            <h3 className="font-serif text-2xl text-charcoal">Signature Amenities</h3>
            <p className="text-xs text-stone-400 uppercase tracking-widest mt-2">Everything you need for a seamless island stay</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {FACILITIES.map((facility) => {
              const Icon = ICON_MAP[facility.iconName] || ConciergeBell
              return (
                <motion.div key={facility.id} variants={fadeUp} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-teak-accent" strokeWidth={1.5} />
                    <h4 className="text-sm font-bold text-stone-700 uppercase tracking-wide group-hover:text-ocean-deep transition-colors">
                      {facility.name}
                    </h4>
                  </div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed pl-8 border-l border-stone-200">
                    {facility.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-stone-100 text-center md:text-left">
            <p className="text-[10px] text-stone-400 italic">
              *Additional services like diving, snorkeling, and island tours available via Concierge.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}
