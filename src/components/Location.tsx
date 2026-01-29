import React from 'react';
import Section from './Section';
import { MapPin, Plane, Waves, Coffee, Navigation } from 'lucide-react';

const hotspots = [
  { name: 'Melasti Beach', time: '5 mins', icon: Waves, desc: 'White sand & beach clubs' },
  { name: 'Savaya Bali', time: '7 mins', icon: Coffee, desc: 'Luxury cliffside dayclub' },
  { name: 'Ngurah Rai Airport', time: '35 mins', icon: Plane, desc: 'International Airport' },
  { name: 'GWK Cultural Park', time: '10 mins', icon: MapPin, desc: 'Iconic landmark' },
];

const Location: React.FC = () => {
  return (
    <Section id="location" className="bg-stone-50" fullWidth>
      <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[600px]">
        
        {/* Left: Map Container */}
        {/* We use a grayscale filter that fades out on hover for a sophisticated look */}
        <div className="w-full lg:w-2/3 h-[400px] lg:h-auto relative group overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.865570889988!2d115.1599123758376!3d-8.810577691238647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244bd27663249%3A0x62957777827e6e58!2sUngasan%2C%20South%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1709221234567!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Villa VB Location"
            className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          ></iframe>
          
          {/* Custom Overlay Button */}
          <div className="absolute bottom-8 left-8 z-10">
            <a 
                href="https://maps.google.com/?q=Ungasan,Bali" 
                target="_blank"
                rel="noreferrer"
                className="bg-white text-stone-900 px-6 py-3 text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-stone-900 hover:text-white transition-all shadow-lg"
            >
                <Navigation className="w-4 h-4" />
                Get Directions
            </a>
          </div>
        </div>

        {/* Right: Curated Guide */}
        <div className="w-full lg:w-1/3 bg-white p-10 md:p-16 flex flex-col justify-center border-l border-stone-200">
          <span className="text-ocean-deep text-xs tracking-[0.3em] uppercase font-bold mb-6 block">The Neighborhood</span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8 leading-tight">
            Connected yet <br /> 
            <span className="italic text-stone-400">Secluded</span>
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-10">
            Ungasan offers a rare balance in Bali: the raw beauty of limestone cliffs and pristine beaches, just minutes away from world-class dining and entertainment.
          </p>

          <div className="space-y-6">
            {hotspots.map((spot, idx) => (
                <div key={idx} className="flex items-start gap-4 group cursor-default">
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
                </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Location;