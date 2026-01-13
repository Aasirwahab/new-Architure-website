
import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

// Declare gsap globally
declare const gsap: any;

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.service-block');
      
      items.forEach((item: any) => {
        const imageWrapper = item.querySelector('.service-image');
        const img = item.querySelector('.service-image img');
        const line = item.querySelector('.draw-line');
        const texts = item.querySelectorAll('.stagger-text');

        // 1. Animated Progress Line
        gsap.fromTo(line, 
          { scaleX: 0 }, 
          { 
            scaleX: 1, 
            duration: 1.5, 
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );

        // 2. High-End Image Reveal (Clip Path)
        gsap.fromTo(imageWrapper, 
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { 
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.8,
            ease: "expo.inOut",
            scrollTrigger: {
              trigger: imageWrapper,
              start: "top bottom-=50",
            }
          }
        );

        // 3. PARALLAX EFFECT: Image moves inside wrapper as we scroll
        gsap.fromTo(img,
          { yPercent: -15, scale: 1.3 },
          {
            yPercent: 15,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );

        // 4. Staggered text reveal
        gsap.from(texts, {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const serviceImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  ];

  return (
    <div ref={containerRef} className="bg-stone min-h-screen font-body text-dark">
      {/* Header Section */}
      <section className="pt-48 pb-32 px-6 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="w-full md:w-2/3">
              <span className="display text-[10px] uppercase tracking-[0.5em] mb-6 block text-moss font-bold stagger-text">Expertise Catalogue</span>
              <h1 className="display text-6xl md:text-[9vw] leading-[0.85] font-bold uppercase tracking-tighter stagger-text">
                POETIC <br />
                <span className="text-white mix-blend-difference">ENGINEERING</span>
              </h1>
            </div>
            <div className="w-full md:w-1/3 pt-4 md:pt-24 stagger-text">
              <p className="text-xl md:text-2xl font-light leading-snug text-gray-600 mb-8 border-l-2 border-moss pl-6">
                Our capabilities span the entire architectural lifecycle, from the first sketch to the final structural audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-20 pb-40">
        <div className="max-w-[1400px] mx-auto">
          {SERVICES.map((s, idx) => (
            <div 
              key={s.id} 
              className="service-block relative border-b border-black/10 py-32 md:py-48 grid md:grid-cols-12 gap-12"
            >
              <div className="draw-line absolute top-0 left-0 w-full h-[1px] bg-dark origin-left"></div>

              {/* Left Identity Column */}
              <div className="md:col-span-5">
                <div className="md:sticky md:top-32 h-max">
                  <div className="display text-[15vw] md:text-[200px] font-bold opacity-[0.04] leading-none mb-4 absolute -left-12 -top-12 pointer-events-none select-none">
                    0{idx + 1}
                  </div>
                  <div className="relative z-10">
                    <span className="display text-xs tracking-[0.4em] font-bold text-moss block mb-4">Focus 0{idx + 1}</span>
                    <h2 className="display text-4xl md:text-7xl font-bold uppercase leading-[0.9] mb-8">
                      {s.title}
                    </h2>
                    <div className="space-y-4 mb-12">
                       <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 border-l border-black/20 pl-4">
                         Delivery: {s.timeline}
                       </p>
                    </div>
                    <Link 
                      to={`/service/${s.id}`} 
                      className="inline-flex items-center group overflow-hidden"
                    >
                      <div className="bg-dark text-stone px-8 py-4 display text-[10px] uppercase tracking-widest font-bold transition-transform duration-500 group-hover:-translate-y-full">
                        Explore Service
                      </div>
                      <div className="absolute bg-moss text-stone px-8 py-4 display text-[10px] uppercase tracking-widest font-bold transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                        View Technicals
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="md:col-span-7 space-y-20">
                <div className="max-w-xl stagger-text">
                  <h3 className="display text-[10px] uppercase tracking-widest font-bold mb-6 opacity-30">The Philosophy</h3>
                  <p className="text-xl md:text-3xl font-light leading-tight text-gray-800 italic pr-8">
                    "{s.description}"
                  </p>
                </div>

                {/* PARALLAX IMAGE CONTAINER */}
                <div className="service-image relative aspect-[16/9] overflow-hidden bg-gray-200 shadow-2xl">
                  <img 
                    src={serviceImages[idx] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"} 
                    alt={s.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                  <div className="stagger-text">
                    <h4 className="display text-[10px] uppercase tracking-widest font-bold mb-8 opacity-30">Deliverables</h4>
                    <ul className="space-y-4">
                      {s.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 group cursor-default border-b border-black/5 pb-4">
                          <span className="w-1.5 h-1.5 bg-moss rounded-full transition-all group-hover:scale-150"></span>
                          <span className="text-[11px] uppercase tracking-wider font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="stagger-text">
                    <h4 className="display text-[10px] uppercase tracking-widest font-bold mb-8 opacity-30">Methodology</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-8">
                      We operate with a 'site-first' mentality, ensuring that {s.title.toLowerCase()} is never an imposition but a seamless extension of the geography.
                    </p>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest group"
                    >
                      <span className="pb-1 border-b border-black group-hover:border-moss group-hover:text-moss transition-all">Begin Consultation</span>
                      <span className="w-8 h-px bg-black group-hover:bg-moss group-hover:w-12 transition-all"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="bg-dark text-stone py-48 overflow-hidden relative">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="CTA BG"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="display text-5xl md:text-[8vw] font-bold uppercase leading-[0.85] mb-12">
            YOUR VISION <br /> <span className="text-moss">ETERNALLY</span> <br /> REALIZED.
          </h2>
          <Link 
            to="/contact" 
            className="inline-block display text-[10px] uppercase tracking-widest px-16 py-7 bg-stone text-dark hover:bg-moss hover:text-white transition-all font-bold rounded-sm shadow-xl"
          >
            Start Your Discovery
          </Link>
        </div>
      </section>

      <style>{`
        .service-image {
          will-change: clip-path;
        }
        .service-image img {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Services;
