import React, { useState } from 'react';
import Section from './Section';
import { CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { PRICING } from '../constants';

const BookingInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    name: '',
    email: '',
    guests: '2'
  });

  const handleWhatsApp = () => {
    const message = `Hello Villa VB, I would like to inquire about availability.\n\nName: ${formData.name}\nDates: ${formData.checkIn} to ${formData.checkOut}\nGuests: ${formData.guests}\n\nPlease let me know if the dates are open.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="inquire" className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border border-stone-200 shadow-2xl shadow-stone-200/40">
        
        {/* Visual/Context Side */}
        <div className="w-full lg:w-5/12 bg-stone-50 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-60 pointer-events-none"></div>

          <div>
             <span className="text-teak-accent text-xs tracking-[0.25em] uppercase mb-4 block">Transparency</span>
             <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">Essential Info</h2>
             
             <div className="mb-10">
               <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-serif text-ocean-deep">Rp {PRICING.price}</span>
                  <span className="text-sm text-stone-500 font-light">/ night</span>
               </div>
               <p className="text-xs text-stone-400 uppercase tracking-wide">{PRICING.details}</p>
             </div>

             <div className="space-y-6">
                <div>
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-700 mb-2">Location Context</h4>
                   <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-stone-400 shrink-0" strokeWidth={1} />
                    <p className="text-stone-600 text-sm leading-relaxed font-light">
                      Jalan Karang Mas, Ungasan, Bali.<br />
                      <span className="opacity-60 block mt-1">
                        • 5 mins to Savaya / El Kabron<br />
                        • 2.7km to Melasti Beach (White Sand)<br />
                        • 30 mins to Airport (DPS)
                      </span>
                    </p>
                   </div>
                </div>

                <div>
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-700 mb-2">House Rules</h4>
                   <ul className="space-y-2">
                     {['No Smoking Indoors', 'No Parties / Events', 'Quiet Hours: 10PM - 7AM'].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm text-stone-500 font-light">
                         <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-stone-200/60">
             <p className="text-[10px] text-stone-400 uppercase tracking-widest">Villa VB Bali • Est. 2024</p>
          </div>
        </div>

        {/* Interaction Side */}
        <div className="w-full lg:w-7/12 bg-white p-10 md:p-16">
          <div className="mb-10">
             <span className="text-ocean-deep text-xs tracking-[0.25em] uppercase mb-4 block">Inquiries</span>
             <h3 className="font-serif text-3xl text-stone-800 mb-4">Direct Booking</h3>
             <p className="text-stone-500 font-light text-sm leading-relaxed max-w-md">
               We prefer a personal connection. Fill out the details below to start a WhatsApp conversation directly with our villa manager.
             </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleWhatsApp(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="group">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Check In</label>
                  <input required name="checkIn" onChange={handleChange} type="date" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent text-stone-600 font-serif" />
               </div>
               <div className="group">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Check Out</label>
                  <input required name="checkOut" onChange={handleChange} type="date" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent text-stone-600 font-serif" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Your Name</label>
                <input required name="name" onChange={handleChange} type="text" placeholder="e.g. Alexander" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent placeholder-stone-200 font-serif" />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Guests</label>
                <select name="guests" onChange={handleChange} className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent text-stone-600 font-serif">
                   {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-stone-900 text-white py-5 text-xs tracking-[0.25em] uppercase hover:bg-ocean-deep transition-all duration-500 flex items-center justify-center gap-3 group mt-4">
              Check Availability via WhatsApp
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <p className="text-center text-[10px] text-stone-400">
              Response typically within 1 hour • No payment required yet
            </p>
          </form>
        </div>

      </div>
    </Section>
  );
};

export default BookingInfo;