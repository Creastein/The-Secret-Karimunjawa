import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, fullWidth = false }) => {
  return (
    <section id={id} className={`relative ${!fullWidth ? 'py-14 md:py-20 lg:py-32' : ''} ${className}`}>
      <div className={!fullWidth ? "container mx-auto px-6 md:px-12 max-w-7xl" : ""}>
        {children}
      </div>
    </section>
  );
};

export default Section;
