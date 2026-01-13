
import React, { useState, useEffect, useRef } from 'react';

// Declare gsap globally
declare const gsap: any;

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activePath, setActivePath] = useState<'form' | 'call'>('form');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const ctx = gsap.context(() => {
      gsap.from('.contact-title span', {
        yPercent: 100,
        stagger: 0.1,
        duration: 1.2,
        ease: 'expo.out'
      });

      gsap.from('.contact-reveal', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to('.contact-form-container', {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      onComplete: () => setSubmitted(true)
    });
  };

  return (
    <div ref={containerRef} className="pt-48 pb-20 bg-stone min-h-screen text-dark font-body overflow-x-hidden relative">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32">
          
          {/* Left Column: Context & Global Presence */}
          <div className="lg:col-span-5">
            <span className="display text-[10px] uppercase tracking-[0.6em] mb-12 block text-moss font-bold contact-reveal">Inquiry Protocol</span>
            <h1 className="contact-title display text-7xl md:text-[10vw] font-bold leading-[0.8] uppercase tracking-tighter mb-12">
              <div className="overflow-hidden"><span className="block">INITIATE</span></div>
              <div className="overflow-hidden"><span className="block text-white mix-blend-difference">PHASE 01.</span></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-16 contact-reveal">
              We select a limited number of projects each year to ensure architectural <span className="text-dark font-normal italic">absolute precision</span>.
            </p>

            <div className="space-y-16 contact-reveal">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h3 className="display text-[10px] uppercase tracking-widest font-bold mb-6 opacity-30">Studio Hubs</h3>
                  <div className="space-y-2 text-sm font-light">
                    <p>TOKYO / Minato</p>
                    <p>LONDON / Shoreditch</p>
                    <p>BERLIN / Mitte</p>
                  </div>
                </div>
                <div>
                  <h3 className="display text-[10px] uppercase tracking-widest font-bold mb-6 opacity-30">Direct</h3>
                  <div className="space-y-2 text-sm font-light">
                    <p>hello@aethereal.com</p>
                    <p>+44 20 7946 0123</p>
                  </div>
                </div>
              </div>

              <div className="p-8 border-l border-moss bg-white/30 backdrop-blur-sm">
                <h3 className="display text-[10px] uppercase tracking-widest font-bold mb-4 opacity-30">Current Load</h3>
                <p className="text-sm font-light text-gray-500">Currently accepting residential commissions for Q4 2025.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            <div className="flex gap-1 mb-12 bg-black/5 p-1 w-max rounded-sm contact-reveal">
               <button 
                  onClick={() => setActivePath('form')}
                  className={`px-10 py-4 text-[10px] uppercase tracking-widest display transition-all font-bold ${activePath === 'form' ? 'bg-dark text-stone shadow-xl' : 'opacity-40 hover:opacity-100'}`}
               >
                  Project Brief
               </button>
               <button 
                  onClick={() => setActivePath('call')}
                  className={`px-10 py-4 text-[10px] uppercase tracking-widest display transition-all font-bold ${activePath === 'call' ? 'bg-dark text-stone shadow-xl' : 'opacity-40 hover:opacity-100'}`}
               >
                  Sync Call
               </button>
            </div>

            <div className="contact-form-container relative">
              {activePath === 'form' ? (
                submitted ? (
                  <div className="py-20 text-center border border-black/5 bg-white/40 shadow-2xl backdrop-blur-md">
                    <div className="w-24 h-24 bg-moss mx-auto mb-10 flex items-center justify-center">
                       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h2 className="display text-4xl font-bold uppercase mb-4">Transmission Received</h2>
                    <p className="text-gray-500 font-light mb-12">Our Principal Architect will review your brief within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="display text-[10px] uppercase tracking-widest border-b border-black pb-2 hover:text-moss hover:border-moss transition-colors"
                    >
                      Log Another Project
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12 bg-white/60 p-8 md:p-16 border border-black/5 shadow-2xl backdrop-blur-xl">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="group relative">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2 block transition-all group-focus-within:opacity-100 group-focus-within:text-moss">01. Name</label>
                        <input required type="text" className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-moss transition-all placeholder:text-gray-300" placeholder="Identity" />
                      </div>
                      <div className="group relative">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2 block transition-all group-focus-within:opacity-100 group-focus-within:text-moss">02. Email</label>
                        <input required type="email" className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-moss transition-all placeholder:text-gray-300" placeholder="Communication" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="group relative">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2 block transition-all group-focus-within:opacity-100 group-focus-within:text-moss">03. Project Typology</label>
                        <select className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-moss transition-all cursor-pointer">
                          <option>High-End Residential</option>
                          <option>Commercial Landmark</option>
                          <option>Interior Intervention</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="group relative">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2 block transition-all group-focus-within:opacity-100 group-focus-within:text-moss">04. Geographic Site</label>
                        <input required type="text" className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-moss transition-all placeholder:text-gray-300" placeholder="City, Country" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="group relative">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2 block transition-all group-focus-within:opacity-100 group-focus-within:text-moss">05. Budget Spectrum</label>
                        <select className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-moss transition-all cursor-pointer">
                          <option>$750k - $1.5M</option>
                          <option>$1.5M - $5M</option>
                          <option>$5M - $10M</option>
                          <option>$10M+</option>
                        </select>
                      </div>
                      <div className="group relative">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2 block transition-all group-focus-within:opacity-100 group-focus-within:text-moss">06. Target Realization</label>
                        <select className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-moss transition-all cursor-pointer">
                          <option>ASAP</option>
                          <option>12-18 Months</option>
                          <option>Multi-Year Vision</option>
                        </select>
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2 block transition-all group-focus-within:opacity-100 group-focus-within:text-moss">07. Architectural Narrative</label>
                      <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-moss transition-all resize-none placeholder:text-gray-300" placeholder="Briefly describe the soul of the project..."></textarea>
                    </div>

                    <button type="submit" className="group relative w-full overflow-hidden bg-dark text-stone py-8 display text-[10px] tracking-[0.4em] font-bold">
                      <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-full block">TRANSMIT BRIEF</span>
                      <span className="absolute inset-0 bg-moss translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">INITIATE CONNECTION</span>
                    </button>
                  </form>
                )
              ) : (
                <div className="bg-white/60 p-8 md:p-20 border border-black/5 shadow-2xl backdrop-blur-xl text-center">
                  <h2 className="display text-4xl md:text-5xl font-bold uppercase mb-8">Technical Sync</h2>
                  <p className="text-gray-500 font-light mb-16 max-w-md mx-auto">Select a coordinate for a virtual architectural review. Our design sessions last approximately 45 minutes.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                     <div className="p-10 border border-black/5 bg-stone/20 hover:bg-moss/10 transition-colors cursor-pointer text-left group">
                        <div className="display text-xs font-bold mb-4">Discovery Call</div>
                        <div className="text-[10px] opacity-40 uppercase tracking-widest mb-6">45 MINS • FREE</div>
                        <div className="w-full h-px bg-black/10 group-hover:bg-moss transition-colors"></div>
                     </div>
                     <div className="p-10 border border-black/5 bg-stone/20 hover:bg-moss/10 transition-colors cursor-pointer text-left group">
                        <div className="display text-xs font-bold mb-4">Technical Audit</div>
                        <div className="text-[10px] opacity-40 uppercase tracking-widest mb-6">90 MINS • PAID</div>
                        <div className="w-full h-px bg-black/10 group-hover:bg-moss transition-colors"></div>
                     </div>
                  </div>

                  <div className="display text-[10px] uppercase tracking-widest opacity-20 mb-4">[ CALENDAR INTERFACE SECURED ]</div>
                  <div className="w-full h-px bg-black/5 mb-16"></div>
                  
                  <a href="mailto:hello@aethereal.com" className="display text-[10px] font-bold border-b-2 border-moss pb-2 uppercase tracking-widest hover:text-moss transition-colors">
                    Or secure via email encryption
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text Parallax */}
      <div className="mt-40 pointer-events-none select-none opacity-[0.02]">
         <div className="display text-[30vw] font-bold leading-none whitespace-nowrap">AETHEREAL</div>
      </div>
    </div>
  );
};

export default Contact;
