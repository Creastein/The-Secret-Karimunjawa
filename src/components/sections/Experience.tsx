import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Waves, UtensilsCrossed, Flower2, Fish, Mountain, Car } from 'lucide-react';

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

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }
  })
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Private Beach",
      desc: "Direct access to a pristine Karimunjawa beach with crystal clear turquoise waters and white sand.",
      icon: Waves
    },
    {
      title: "Restaurant & Bar",
      desc: "Indian, Indonesian & Mediterranean cuisine. Vegetarian, vegan, and halal options available daily.",
      icon: UtensilsCrossed
    },
    {
      title: "Spa & Massage",
      desc: "Full body, head, back, foot, hand, and neck massage — professional therapists at your service.",
      icon: Flower2
    },
    {
      title: "Diving & Snorkeling",
      desc: "Explore Karimunjawa's world-class coral reefs and marine biodiversity at nearby dive sites.",
      icon: Fish
    },
    {
      title: "Hiking & Nature",
      desc: "Discover the island's lush tropical forests, mangroves, and scenic viewpoints on guided treks.",
      icon: Mountain
    },
    {
      title: "Airport Transfer",
      desc: "Complimentary shuttle service from Karimunjawa airport and harbor to the property.",
      icon: Car
    }
  ];

  const handleContact = () => {
    window.open(`https://wa.me/628131011434?text=I'm%20interested%20in%20arranging%20additional%20services%20for%20my%20stay%20at%20The%20Secret%20Karimunjawa.`, '_blank');
  };

  return (
    <Section id="experience" className="bg-white bg-atmosphere">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariant}
          className="lg:sticky lg:top-32"
        >
          <motion.span variants={fadeUp} className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">The Experience</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-8 leading-[1.05] tracking-tight">
            Island <br />
            <span className="italic text-stone-400">Adventures</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-600 font-light leading-relaxed mb-8 text-lg max-w-md">
            From underwater wonders to mountain trails, Karimunjawa offers experiences that awaken the soul. Our team curates every detail so you can simply enjoy.
          </motion.p>
          <motion.button
            variants={fadeUp}
            onClick={handleContact}
            className="text-xs uppercase tracking-widest border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-white transition-all"
          >
            Request Services
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-0 border-t border-stone-200"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={rowVariant}
              className="group py-8 border-b border-stone-200 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-limestone/60 transition-all duration-500 cursor-default px-2"
            >
              <div className="flex items-center gap-4">
                <div className="text-stone-300 group-hover:text-teak-accent transition-colors">
                  <item.icon className="w-5 h-5" strokeWidth={1} />
                </div>
                <h4 className="font-serif text-xl md:text-2xl text-stone-700 group-hover:text-charcoal transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-stone-400 font-light tracking-wide max-w-xs text-left md:text-right group-hover:text-stone-600 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
};

export default Services;
