
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Declare gsap globally
declare const gsap: any;

const Studio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const ctx = gsap.context(() => {
      // 1. Hero Character Animation
      const chars = document.querySelectorAll('.char');
      gsap.from(chars, {
        y: 150,
        rotation: 10,
        opacity: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: 'expo.out'
      });

      // 2. Aperture Image Reveal
      const apertures = gsap.utils.toArray('.aperture-reveal');
      apertures.forEach((ap: any) => {
        gsap.fromTo(ap, 
          { clipPath: 'inset(0% 50% 0% 50%)' },
          { 
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 2,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: ap,
              start: 'top 80%',
            }
          }
        );
      });

      // 3. Horizontal Laboratory Scroll
      const labItems = gsap.utils.toArray('.lab-item');
      gsap.to(labItems, {
        xPercent: -100 * (labItems.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".lab-scroll-wrapper",
          pin: true,
          scrub: 1,
          snap: 1 / (labItems.length - 1),
          end: () => "+=" + document.querySelector<HTMLElement>(".lab-scroll-wrapper")?.offsetWidth
        }
      });

      // 4. Parallax Text
      gsap.to('.parallax-text', {
        x: -200,
        scrollTrigger: {
          trigger: '.parallax-text-trigger',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-stone min-h-screen text-dark font-body overflow-x-hidden">
      
      {/* 1. THE MONOLITH HERO */}
      <section className="h-screen flex flex-col justify-center relative px-6 md:px-20 border-b border-black/5 bg-[#F0EFED]">
        <div className="max-w-[1400px] mx-auto w-full">
          <span className="display text-[10px] uppercase tracking-[0.6em] mb-12 block text-moss font-bold">Volume 01: The Studio</span>
          <h1 className="studio-hero-title display text-[14vw] md:text-[16vw] font-bold leading-[0.75] uppercase tracking-tighter flex flex-wrap">
            { "STUDIO".split("").map((c, i) => (
              <span key={i} className="char inline-block">{c}</span>
            ))}
          </h1>
          <div className="grid md:grid-cols-12 mt-12 gap-12">
            <div className="md:col-start-7 md:col-span-5">
              <p className="text-xl md:text-3xl font-light text-gray-500 leading-tight">
                An architectural laboratory dedicated to the <span className="text-dark font-normal italic">reduction of noise</span> and the amplification of structural truth.
              </p>
            </div>
          </div>
        </div>
        
        {/* Technical Coordinate Overlay */}
        <div className="absolute bottom-10 right-10 text-[8px] font-mono opacity-20 hidden md:block leading-relaxed">
          LAT: 35.6762° N <br /> LNG: 139.6503° E <br /> ELEV: 42M
        </div>
      </section>

      {/* 2. THE MANIFESTO OF WEIGHT */}
      <section className="py-40 px-6 md:px-20 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-6 studio-reveal">
            <div className="aperture-reveal aspect-[4/5] bg-dark mb-12 overflow-hidden">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp" 
                className="w-full h-full object-cover grayscale opacity-70 scale-110 hover:scale-100 transition-transform duration-[3s]" 
                alt="Brutalist Detail" 
              />
            </div>
            <h2 className="display text-4xl md:text-6xl font-bold uppercase leading-none mb-8">
              THE POETRY <br /> OF MASS.
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We believe in the weight of things. In a digital world of flickering screens, we find solace in the permanence of concrete and the honesty of a steel junction. Our studio is a workshop where we test the limits of gravity.
            </p>
          </div>
          <div className="md:col-span-6 pt-32 md:pt-60 space-y-24">
             <div className="border-l border-moss pl-12">
                <h3 className="display text-xs uppercase tracking-widest font-bold opacity-30 mb-6">01. Site Spirit</h3>
                <p className="text-lg text-gray-600 font-light">Architecture should not be an imposition. It is a dialogue between the earth and the sky. We spend months on-site before the first line is drawn.</p>
             </div>
             <div className="border-l border-moss pl-12">
                <h3 className="display text-xs uppercase tracking-widest font-bold opacity-30 mb-6">02. Material Integrity</h3>
                <p className="text-lg text-gray-600 font-light">Stone, wood, glass. We treat materials as living entities. We allow them to weather, to age, and to tell the story of time.</p>
             </div>
             <div className="border-l border-moss pl-12">
                <h3 className="display text-xs uppercase tracking-widest font-bold opacity-30 mb-6">03. Human Scale</h3>
                <p className="text-lg text-gray-600 font-light">Monumentality must serve the intimate. We design for the hand as much as we design for the horizon.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PARALLAX STRIP */}
      <section className="parallax-text-trigger py-20 border-y border-black/5 overflow-hidden">
        <div className="parallax-text display text-[15vw] font-bold whitespace-nowrap opacity-[0.03] leading-none uppercase select-none pointer-events-none">
          RESEARCH • DESIGN • ENGINEERING • REALIZATION • RESEARCH • DESIGN • ENGINEERING
        </div>
      </section>

      {/* 4. THE LABORATORY (HORIZONTAL SCROLL) */}
      <section className="lab-scroll-wrapper relative bg-dark text-stone overflow-hidden">
        <div className="flex h-screen items-center">
          
          {/* Static Title Box */}
          <div className="flex-shrink-0 w-screen md:w-[40vw] px-6 md:px-20 z-10 bg-dark h-full flex flex-col justify-center border-r border-white/5">
            <span className="display text-[10px] uppercase tracking-[0.5em] mb-8 block text-moss font-bold">The Laboratory</span>
            <h2 className="display text-6xl md:text-8xl font-bold uppercase leading-[0.85] mb-8">TECH <br /> STACK.</h2>
            <p className="text-gray-400 font-light max-w-xs">Inside our R&D facility where we merge ancient craft with future technology.</p>
          </div>

          {/* Scrolling Content */}
          <div className="flex items-center h-full">
            {[
              { title: 'Robotic Milling', desc: 'Precision carving of complex basalt and stone forms using custom 7-axis robotic arms.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800' },
              { title: 'LiDAR Mapping', desc: 'Surgical site analysis through 3D laser scanning to integrate structures into existing topographies.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
              { title: 'Parametric BIM', desc: 'Real-time structural simulation that ensures zero-waste construction protocols.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' }
            ].map((item, idx) => (
              <div key={idx} className="lab-item w-screen md:w-[60vw] h-full flex items-center px-12 md:px-24 border-r border-white/5">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                   <div className="aspect-[4/5] bg-stone/10 overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover grayscale opacity-50" alt={item.title} />
                   </div>
                   <div>
                      <span className="display text-5xl font-bold opacity-10 mb-8 block">0{idx + 1}</span>
                      <h3 className="display text-3xl font-bold uppercase mb-6">{item.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE COLLECTIVE GALLERY */}
      <section className="py-40 px-6 md:px-20 bg-stone">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="display text-5xl md:text-8xl font-bold uppercase leading-none tracking-tighter">THE <br /> CRAFTSMEN.</h2>
            <div className="max-w-xs text-right">
               <p className="text-sm text-gray-500 font-light leading-relaxed">
                  A multi-disciplinary team of 42 specialists across Tokyo, London, and Berlin. 
               </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-1px bg-black/5 border border-black/5">
            {[
              { name: 'Kaito Tanaka', role: 'Principal / Tokyo', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
              { name: 'Elena Rossi', role: 'Director / London', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
              { name: 'Marcus Voigt', role: 'Tech Lead / Berlin', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' }
            ].map((m) => (
              <div key={m.name} className="group relative bg-stone p-8 md:p-12 overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden mb-8 relative grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={m.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={m.name} />
                  <div className="absolute inset-0 border-[20px] border-stone pointer-events-none"></div>
                </div>
                <h4 className="display text-2xl font-bold uppercase mb-2">{m.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-moss font-bold">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL FOOTPRINT (TIMEZONE GRID) */}
      <section className="py-40 bg-dark text-stone px-6 md:px-20">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { city: 'TOKYO', zone: 'GMT+9', status: 'ACTIVE' },
                 { city: 'LONDON', zone: 'GMT+0', status: 'ACTIVE' },
                 { city: 'BERLIN', zone: 'GMT+1', status: 'ACTIVE' }
               ].map((loc) => (
                 <div key={loc.city} className="border border-white/5 p-12 flex flex-col justify-between h-[400px] group hover:bg-white hover:text-dark transition-all duration-700">
                    <div className="flex justify-between items-start">
                       <span className="display text-xs tracking-widest font-bold opacity-30 group-hover:opacity-100">{loc.zone}</span>
                       <span className="text-[8px] bg-moss px-2 py-1 text-stone font-bold tracking-widest">{loc.status}</span>
                    </div>
                    <h3 className="display text-6xl md:text-8xl font-bold uppercase">{loc.city}</h3>
                    <div className="flex gap-4">
                       <div className="w-8 h-px bg-white group-hover:bg-dark"></div>
                       <span className="display text-[10px] uppercase tracking-widest font-bold group-hover:text-dark">View Regional Studio</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. THE FINAL CALL */}
      <section className="py-60 px-6 text-center bg-[#F0EFED]">
         <div className="max-w-4xl mx-auto">
            <span className="display text-[10px] uppercase tracking-[0.5em] mb-12 block text-moss font-bold">Contact Phase</span>
            <h2 className="display text-5xl md:text-[8vw] font-bold uppercase mb-16 leading-[0.8] tracking-tighter">
               BUILD <br /> THE <br /> UNBUILDABLE.
            </h2>
            <Link to="/contact" className="inline-block display text-[10px] uppercase tracking-[0.3em] bg-dark text-stone px-20 py-8 hover:bg-moss transition-all font-bold rounded-sm shadow-2xl">
               Start Your Project
            </Link>
         </div>
      </section>

      <style>{`
        .char {
          will-change: transform, opacity;
        }
        .aperture-reveal {
          will-change: clip-path;
        }
        .lab-item {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default Studio;
