import React, { useState } from 'react';
import Section from './Section';
import { Mail, Phone, MapPin, ArrowRight, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Reservation Inquiry',
    message: ''
  });

  const handleWhatsApp = () => {
    const message = `Hi Villa VB,\n\nI'm contacting you regarding: ${formData.subject}\n\nMy details:\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border border-stone-200 shadow-2xl shadow-stone-200/40">
        
        {/* Left: Contact Information (Dark/Contrast side) */}
        <div className="w-full lg:w-5/12 bg-stone-900 text-stone-300 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

          <div>
             <span className="text-teak-accent text-xs tracking-[0.25em] uppercase mb-6 block">Get in Touch</span>
             <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 leading-tight">
               Start the <br/> Conversation
             </h2>
             
             <p className="font-light text-stone-400 mb-12 leading-relaxed max-w-sm">
               Whether you are looking for a reservation, planning a private event, or simply have a question, our concierge team is at your disposal.
             </p>

             <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-stone-800 rounded-full group-hover:bg-teak-accent transition-colors">
                       <MapPin className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-white mb-1">Address</h4>
                        <p className="text-sm font-light leading-relaxed">
                            Jalan Karang Mas, Ungasan<br/>
                            Badung Regency, Bali 80361
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-stone-800 rounded-full group-hover:bg-teak-accent transition-colors">
                       <Mail className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-white mb-1">Email</h4>
                        <a href="mailto:hello@villavb.com" className="text-sm font-light hover:text-white transition-colors">
                            hello@villavb.com
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-stone-800 rounded-full group-hover:bg-teak-accent transition-colors">
                       <Phone className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-white mb-1">Phone / WA</h4>
                        <p className="text-sm font-light">
                            +62 812 3456 7890
                        </p>
                    </div>
                </div>
             </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-stone-800 flex gap-6">
             <a href="#" className="text-stone-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
             </a>
             <span className="text-[10px] uppercase tracking-widest text-stone-600 self-center">Follow our story</span>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="w-full lg:w-7/12 bg-white p-10 md:p-16">
          <div className="mb-10">
             <h3 className="font-serif text-2xl text-stone-800 mb-2">Send a Message</h3>
             <p className="text-xs text-stone-400 uppercase tracking-wide">Directly to our Villa Manager</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleWhatsApp(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="group">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Full Name</label>
                  <input required name="name" onChange={handleChange} type="text" placeholder="John Doe" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent placeholder-stone-300 font-serif" />
               </div>
               <div className="group">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Email Address</label>
                  <input required name="email" onChange={handleChange} type="email" placeholder="john@example.com" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent placeholder-stone-300 font-serif" />
               </div>
            </div>

            <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Subject</label>
                <select name="subject" onChange={handleChange} className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent text-stone-600 font-serif">
                   <option value="Reservation Inquiry">Reservation Inquiry</option>
                   <option value="Event / Wedding">Event / Wedding</option>
                   <option value="Photoshoot Location">Photoshoot Location</option>
                   <option value="Other">Other</option>
                </select>
            </div>
            
            <div className="group">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 group-focus-within:text-ocean-deep transition-colors">Your Message</label>
              <textarea required name="message" onChange={handleChange} rows={4} placeholder="How can we assist you?" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-ocean-deep transition-colors bg-transparent placeholder-stone-300 font-serif resize-none" />
            </div>

            <div className="pt-4">
                <button type="submit" className="bg-stone-900 text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-teak-accent transition-all duration-500 flex items-center gap-4 group">
                Send via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;