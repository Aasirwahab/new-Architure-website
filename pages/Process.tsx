
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Declare gsap globally
declare const gsap: any;

const steps = [
  { 
    title: 'Discovery', 
    kicker: 'Phase 01: The Site & Spirit',
    desc: 'Deep dive into your lifestyle, site conditions, and budget. We establish the poetic and practical vision through rigorous site audits and qualitative interviews.',
    deliverables: ['Moodboards', 'Site Analysis', 'Program Document'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
    objectives: 'Understand constraints, define the "Soul" of the project, establish feasibility.'
  },
  { 
    title: 'Concept', 
    kicker: 'Phase 02: Spatial Geometry',
    desc: 'Translating needs into spatial forms. This is where the narrative takes shape through sketching, 3D massing, and early material explorations.',
    deliverables: ['3D Views', 'Initial Plan Layouts', 'Material Palettes'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
    objectives: 'Establish the primary architectural gesture and volumetric relationship.'
  },
  { 
    title: 'Planning', 
    kicker: 'Phase 03: The Blueprint',
    desc: 'Navigating regulatory landscapes to secure approvals. We manage the delicate balance between design integrity and municipal requirements.',
    deliverables: ['Council Submission Drawings', 'Heritage Statements', 'Engineering Specs'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
    objectives: 'Secure legal permits while refining technical details for construction.'
  },
  { 
    title: 'Development', 
    kicker: 'Phase 04: High Fidelity',
    desc: 'Every junction, fixture, and material is precisely specified. We produce the technical "manual" that guides the craftsmen.',
    deliverables: ['Construction Sets', 'Joinery Details', 'Lighting Schedules'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp',
    objectives: 'Eliminate ambiguity. Ensure the vision is buildable to a millimeter.'
  },
  { 
    title: 'Delivery', 
    kicker: 'Phase 05: The Realization',
    desc: 'Site monitoring and rigorous coordination. We act as the guardians of the design intent until the final stone is laid.',
    deliverables: ['Handover Protocol', 'As-built Drawings', 'Defects Audit'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
    objectives: 'Ensure quality craftsmanship and transition the space to its inhabitants.'
  }
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.process-hero-title span', {
        yPercent: 100,
        stagger: 0.1,
        duration: 1.5,
        ease: 'expo.out'
      });

      // Step animations
      const stepItems = gsap.utils.toArray('.process-step');
      stepItems.forEach((step: any, i: number) => {
        const img = step.querySelector('.step-img');
        const content = step.querySelector('.step-content');
        const num = step.querySelector('.step-num');

        gsap.from(img, {
          clipPath: 'inset(100% 0% 0% 0%)',
          scale: 1.2,
          duration: 2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
          }
        });

        gsap.from(content, {
          x: i % 2 === 0 ? 50 : -50,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 70%',
          }
        });

        gsap.from(num, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 90%',
          }
        });
      });
      
      // Progress Line
      gsap.from('.progress-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-steps-container',
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-stone min-h-screen text-dark font-body overflow-x-hidden">
      {/* 1. Immersive Hero */}
      <section className="h-[90vh] flex flex-col justify-center items-center relative px-6 text-center border-b border-black/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden select-none">
          <div className="display text-[40vw] font-bold leading-none -translate-x-20 -translate-y-20">METHOD</div>
        </div>
        
        <span className="display text-[10px] uppercase tracking-[0.5em] mb-8 font-bold text-moss">The Aethereal Way</span>
        <h1 className="process-hero-title display text-7xl md:text-[12vw] font-bold leading-[0.85] uppercase tracking-tighter mb-12">
          <div className="overflow-hidden"><span className="block">FROM VOID</span></div>
          <div className="overflow-hidden"><span className="block text-white mix-blend-difference">TO VESSEL.</span></div>
        </h1>
        <p className="max-w-xl text-lg md:text-xl font-light text-gray-500 leading-relaxed mb-12">
          Architecture is a marathon of precision. We provide transparency at every mile, ensuring the vision is never diluted by the process.
        </p>
        <div className="w-px h-24 bg-dark/20 animate-bounce"></div>
      </section>

      {/* 2. The Journey Steps */}
      <section className="process-steps-container relative py-32 px-6 md:px-20 max-w-[1600px] mx-auto">
        {/* Progress Line Tracker */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/5 z-0">
          <div className="progress-line absolute top-0 left-0 w-full h-full bg-moss"></div>
        </div>

        <div className="space-y-48 md:space-y-80">
          {steps.map((s, idx) => (
            <div key={s.title} className={`process-step relative z-10 grid md:grid-cols-2 gap-12 md:gap-32 items-center ${idx % 2 !== 0 ? 'md:direction-rtl' : ''}`}>
              
              {/* Image Side */}
              <div className={`relative ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="step-img aspect-[4/5] overflow-hidden bg-gray-200 shadow-2xl rounded-sm">
                  <img src={s.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt={s.title} />
                </div>
                <div className="step-num display absolute -top-12 -left-12 md:-left-20 text-[15vw] md:text-[180px] font-bold opacity-10 pointer-events-none select-none">
                  0{idx + 1}
                </div>
              </div>

              {/* Content Side */}
              <div className="step-content">
                <span className="display text-xs tracking-[0.4em] font-bold text-moss block mb-6">{s.kicker}</span>
                <h2 className="display text-5xl md:text-7xl font-bold uppercase mb-8 leading-[0.9]">{s.title}</h2>
                <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-12 italic">
                  "{s.desc}"
                </p>
                
                <div className="grid grid-cols-1 gap-12">
                   <div>
                      <h4 className="display text-[10px] uppercase tracking-widest font-bold opacity-30 mb-6">Key Deliverables</h4>
                      <div className="flex flex-wrap gap-3">
                         {s.deliverables.map(d => (
                            <span key={d} className="px-4 py-2 bg-white/50 border border-black/5 text-[10px] uppercase tracking-wider font-medium">
                               {d}
                            </span>
                         ))}
                      </div>
                   </div>
                   <div className="p-8 border-l-2 border-moss bg-white/30 backdrop-blur-sm">
                      <h4 className="display text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">Core Objective</h4>
                      <p className="text-sm text-gray-500 font-light">{s.objectives}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Pre-Requisites Blueprint */}
      <section className="py-40 bg-dark text-stone">
         <div className="max-w-[1400px] mx-auto px-6 md:px-20">
            <div className="grid md:grid-cols-12 gap-16">
               <div className="md:col-span-4">
                  <span className="display text-[10px] uppercase tracking-widest font-bold text-moss mb-6 block">Requirements</span>
                  <h2 className="display text-4xl md:text-6xl font-bold uppercase leading-tight">THE CLIENT <br /> INPUT.</h2>
               </div>
               <div className="md:col-span-8 grid md:grid-cols-2 gap-12">
                  {[
                    { label: 'Documentation', items: ['Site location & photos', 'Existing surveys', 'Legal deeds'] },
                    { label: 'Aesthetics', items: ['Visual wishlist', 'Reference projects', 'Texture preferences'] },
                    { label: 'Commercials', items: ['Budget range', 'Target timeline', 'Phasing needs'] },
                    { label: 'Programs', items: ['Lifestyle audit', 'Room list', 'Special requirements'] }
                  ].map(group => (
                    <div key={group.label} className="border-t border-white/10 pt-8">
                       <h3 className="display text-xs uppercase tracking-[0.2em] font-bold mb-6 opacity-40">{group.label}</h3>
                       <ul className="space-y-3">
                          {group.items.map(i => (
                            <li key={i} className="flex items-center gap-3 text-sm opacity-60 font-light">
                               <span className="w-1 h-1 bg-moss rounded-full"></span>
                               {i}
                            </li>
                          ))}
                       </ul>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. Communication Protocol */}
      <section className="py-32 bg-stone px-6 md:px-20">
         <div className="max-w-5xl mx-auto border border-black/5 p-12 md:p-24 bg-white/40 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <svg width="200" height="200" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" /></svg>
            </div>
            
            <h2 className="display text-3xl md:text-5xl font-bold uppercase mb-8">Rigorous Communication</h2>
            <p className="text-xl font-light text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
               Every project is assigned a dedicated Principal Architect. We provide bi-weekly technical updates via our client portal and monthly in-person design audits.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
               <div>
                  <div className="display text-3xl font-bold mb-2">24h</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Response Time</div>
               </div>
               <div className="w-px h-12 bg-black/10 hidden md:block"></div>
               <div>
                  <div className="display text-3xl font-bold mb-2">1:1</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Direct Access</div>
               </div>
               <div className="w-px h-12 bg-black/10 hidden md:block"></div>
               <div>
                  <div className="display text-3xl font-bold mb-2">Cloud</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Project Portal</div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CTA Section */}
      <section className="pb-40 pt-20 px-6 text-center">
         <h2 className="display text-4xl md:text-6xl font-bold uppercase mb-12">Ready to initiate Phase 01?</h2>
         <Link to="/contact" className="inline-block display text-[10px] uppercase tracking-widest bg-moss text-white px-16 py-7 hover:bg-dark hover:scale-105 transition-all font-bold rounded-sm shadow-2xl">
            Book Your Discovery Call
         </Link>
      </section>

      <style>{`
        .step-img {
          will-change: clip-path;
        }
        @media (min-width: 768px) {
          .md\:direction-rtl {
            direction: rtl;
          }
          .md\:direction-rtl > div {
            direction: ltr;
          }
        }
      `}</style>
    </div>
  );
};

export default Process;
