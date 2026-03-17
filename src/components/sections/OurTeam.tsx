import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Section from '@/components/layout/Section';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function OurTeam() {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      id: "abyan",
      name: "Mas Abyan",
      role: t('team.roles.abyan'),
      description: t('team.descriptions.abyan'),
      image: "/assets/Team/Abyan.webp"
    },
    {
      id: "anik",
      name: "Mbak Anik",
      role: t('team.roles.anik'),
      description: t('team.descriptions.anik'),
      image: "/assets/Team/Anik.webp"
    },
    {
      id: "dadang",
      name: "Mas Dadang",
      role: t('team.roles.dadang'),
      description: t('team.descriptions.dadang'),
      image: "/assets/Team/Dadang.webp"
    },
    {
      id: "bella",
      name: "Mbak Bella",
      role: t('team.roles.bella'),
      description: t('team.descriptions.bella'),
      image: "/assets/Team/Bella.webp"
    }
  ];

  return (
    <Section id="team" className="bg-sand py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.12)}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t('team.eyebrow')}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            {t('team.title')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-600 leading-relaxed text-lg">
            {t('team.description')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={fadeUp} className="flex flex-col group">
              <div 
                className="relative flex flex-col items-center bg-sand p-3 md:p-4 rounded-[2rem] h-full"
                style={{
                  boxShadow: '8px 8px 16px #d1cac1, -8px -8px 16px #ffffff'
                }}
              >
                <div className="relative w-[115%] aspect-[4/5] overflow-hidden mb-6 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-stone-100 p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-center w-full mt-auto px-2 pb-2">
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2">{member.name}</h3>
                  <p className="text-teak-accent font-medium text-sm md:text-base mb-3">{member.role}</p>
                  <div className="w-12 h-px bg-stone-300 mx-auto mb-4"></div>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed italic line-clamp-4">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
