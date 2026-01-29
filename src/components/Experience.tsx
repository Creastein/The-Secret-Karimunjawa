import React from 'react';
import Section from './Section';
import { Sparkles, UtensilsCrossed, Car, User, Shirt, Flower2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { 
      title: "Villa Butler", 
      desc: "Dedicated assistance for reservations, excursions, and daily needs. Your personal connection to the island.",
      icon: User
    },
    { 
      title: "Private Culinary", 
      desc: "Daily breakfast prepared in-villa. Private chef available for intimate dinners and BBQ gatherings.",
      icon: UtensilsCrossed
    },
    { 
      title: "Wellness & Spa", 
      desc: "Professional therapists bringing Balinese massage and reflexology directly to your poolside deck.",
      icon: Flower2
    },
    { 
      title: "Housekeeping", 
      desc: "Discreet daily cleaning and evening turndown service to ensure pristine comfort at all times.",
      icon: Shirt
    },
    { 
      title: "Chauffeur Service", 
      desc: "Seamless airport transfers and luxury car rentals to explore the Bukit Peninsula in style.",
      icon: Car
    },
    { 
      title: "Concierge", 
      desc: "Exclusive access to beach clubs, restaurant reservations, and cultural tours curated for you.",
      icon: Sparkles
    }
  ];

  const handleContact = () => {
    window.open(`https://wa.me/6281234567890?text=I'm%20interested%20in%20arranging%20additional%20services%20for%20my%20stay.`, '_blank');
  };

  return (
    <Section id="experience" className="bg-white">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          <div className="md:sticky md:top-32">
             <span className="text-ocean-deep text-xs tracking-[0.3em] uppercase font-bold mb-4 block">The Hospitality</span>
             <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
               Bespoke <br />
               <span className="italic text-stone-400">Services</span>
             </h2>
             <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg max-w-md">
               True luxury is the absence of effort. Our team operates with an intuitive understanding of your needs—present when required, invisible when you seek solitude.
             </p>
             <button 
               onClick={handleContact}
               className="text-xs uppercase tracking-widest border border-stone-800 px-8 py-3 hover:bg-stone-800 hover:text-white transition-all"
             >
               Request Services
             </button>
          </div>

          <div className="space-y-0 border-t border-stone-200">
            {services.map((item, index) => (
              <div 
                key={index} 
                className="group py-8 border-b border-stone-200 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-stone-50/50 transition-all duration-500 cursor-default px-2"
              >
                <div className="flex items-center gap-4">
                  <div className="text-stone-300 group-hover:text-teak-accent transition-colors">
                    <item.icon className="w-5 h-5" strokeWidth={1} />
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-stone-700 group-hover:text-stone-900 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-stone-400 font-light tracking-wide max-w-xs text-left md:text-right group-hover:text-stone-600 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

       </div>
    </Section>
  );
};

export default Services;