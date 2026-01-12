
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activePath, setActivePath] = useState<'form' | 'call'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-40 pb-20 bg-stone min-h-screen">
      <div className="px-6 md:px-20 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <h1 className="display text-5xl md:text-8xl mb-8">CONTACT</h1>
            <p className="text-xl text-gray-600 font-light mb-12">Ready to start? Choose your preferred way to begin the conversation.</p>
            
            <div className="flex gap-4 mb-12">
               <button 
                  onClick={() => setActivePath('form')}
                  className={`px-8 py-4 text-[10px] uppercase tracking-widest display border transition-all ${activePath === 'form' ? 'bg-dark text-white border-dark' : 'border-black/10'}`}
               >
                  Project Form
               </button>
               <button 
                  onClick={() => setActivePath('call')}
                  className={`px-8 py-4 text-[10px] uppercase tracking-widest display border transition-all ${activePath === 'call' ? 'bg-dark text-white border-dark' : 'border-black/10'}`}
               >
                  Book a Call
               </button>
            </div>

            <div className="space-y-12">
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40">Office</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Tokyo / London / Berlin</p>
                  <p className="text-lg text-gray-600">Serving global regions since 2024</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40">Expectations</h3>
                  <p className="text-sm text-gray-500 italic">"Response within 24 business hours for all inquiries."</p>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border border-black/5">
            {activePath === 'form' ? (
              submitted ? (
                <div className="h-full flex flex-col justify-center items-center text-center py-20">
                   <div className="w-20 h-20 bg-moss flex items-center justify-center text-stone text-3xl mb-8">✓</div>
                   <h2 className="display text-2xl mb-4">Inquiry Received</h2>
                   <p className="text-gray-500">Our design lead will reach out shortly.</p>
                   <button onClick={() => setSubmitted(false)} className="mt-8 text-[10px] uppercase tracking-widest border-b border-black">New Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                         <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Name</label>
                         <input required type="text" className="border-b border-black/10 py-3 focus:border-moss outline-none transition-colors" placeholder="Full Name" />
                      </div>
                      <div className="flex flex-col gap-1">
                         <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email</label>
                         <input required type="email" className="border-b border-black/10 py-3 focus:border-moss outline-none transition-colors" placeholder="email@address.com" />
                      </div>
                   </div>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                         <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Project Type</label>
                         <select className="border-b border-black/10 py-3 focus:border-moss outline-none bg-transparent">
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Interiors</option>
                            <option>Other</option>
                         </select>
                      </div>
                      <div className="flex flex-col gap-1">
                         <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Location</label>
                         <input required type="text" className="border-b border-black/10 py-3 focus:border-moss outline-none transition-colors" placeholder="City, Country" />
                      </div>
                   </div>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                         <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Budget Band</label>
                         <select className="border-b border-black/10 py-3 focus:border-moss outline-none bg-transparent">
                            <option>$750k - $1.5M</option>
                            <option>$1.5M - $5M</option>
                            <option>$5M+</option>
                         </select>
                      </div>
                      <div className="flex flex-col gap-1">
                         <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Timeline</label>
                         <select className="border-b border-black/10 py-3 focus:border-moss outline-none bg-transparent">
                            <option>ASAP</option>
                            <option>6-12 Months</option>
                            <option>Just Planning</option>
                         </select>
                      </div>
                   </div>
                   <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Message</label>
                      <textarea rows={4} className="border-b border-black/10 py-3 focus:border-moss outline-none transition-colors resize-none" placeholder="Briefly describe your vision..."></textarea>
                   </div>
                   <button type="submit" className="w-full bg-dark text-stone py-6 display text-[10px] tracking-widest hover:bg-moss transition-all">
                      SEND PROJECT BRIEF
                   </button>
                </form>
              )
            ) : (
              <div className="h-full flex flex-col justify-center py-20 text-center">
                 <h2 className="display text-2xl mb-6">Schedule a Discovery Call</h2>
                 <p className="text-gray-500 mb-12">Select a time that works for you. Our initial consult is free and takes approximately 30 minutes.</p>
                 <div className="bg-stone p-12 border border-black/5 display text-xs tracking-widest mb-12">
                    [ CALENDAR WIDGET PLACEHOLDER ]
                 </div>
                 <a href="mailto:hello@aethereal.com" className="text-[10px] font-bold border-b border-black uppercase tracking-widest mx-auto">Or email us directly</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
