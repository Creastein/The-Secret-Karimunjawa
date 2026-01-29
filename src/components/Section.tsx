import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, fullWidth = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id={id} className={`relative ${!fullWidth ? 'py-20 md:py-32' : ''} ${className}`} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "smooth luxury" feel
        className={!fullWidth ? "container mx-auto px-6 md:px-12 max-w-7xl" : ""}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;