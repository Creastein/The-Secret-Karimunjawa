import React from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-bleached-sand">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {REVIEWS.map((review) => (
          <div key={review.id} className="relative p-8 md:p-12 border border-stone-200 bg-white/50 backdrop-blur-sm">
            <Quote className="w-8 h-8 text-stone-200 absolute top-8 left-8" />
            <p className="font-serif text-lg md:text-xl text-stone-600 italic leading-relaxed mb-6 relative z-10 pt-4">
              "{review.text}"
            </p>
            <div>
              <p className="text-xs uppercase tracking-widest text-ocean-deep font-bold">{review.author}</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-wide mt-1">{review.origin}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;