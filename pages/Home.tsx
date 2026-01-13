
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, TESTIMONIALS, FAQS } from '../constants';

// Declare gsap globally to fix "Cannot find name 'gsap'"
declare const gsap: any;

const Home: React.FC = () => {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // @ts-ignore
    const ctx = gsap.context(() => {
      gsap.to('.hero-line span', { y: 0, stagger: 0.1, duration: 1.5, ease: 'power4.out', delay: 0.5 });
      gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 1 });
      
      gsap.to(heroImgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: { 
          trigger: heroImgRef.current, 
          start: 'top top', 
          end: 'bottom top', 
          scrub: true 
        }
      });

      // Reveal animations for sections
      const sections = gsap.utils.toArray('.reveal-sec');
      sections.forEach((sec: any) => {
        gsap.from(sec, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
          }
        });
      });

      const cards = gsap.utils.toArray('.card-item');
      cards.forEach((card: any, i: number) => {
        const nextCard = cards[i + 1];
        if (nextCard) {
          gsap.to(card.querySelector('.card-inner'), {
            scale: 0.9,
            opacity: 0.3,
            ease: "none",
            scrollTrigger: { 
              trigger: nextCard, 
              start: "top bottom", 
              end: "top 10vh", 
              scrub: true 
            }
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-stone font-body">
      {/* 1. Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <img ref={heroImgRef} src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp" className="absolute inset-0 w-full h-full object-cover brightness-[0.6]" alt="Hero" />
        <div className="relative z-10 text-center text-white mix-blend-difference px-6">
          <h1 className="display text-[10vw] md:text-[12vw] leading-none hero-line overflow-hidden font-semibold">
            <span className="block translate-y-full">CONCRETE</span>
          </h1>
          <h1 className="display text-[10vw] md:text-[12vw] leading-none hero-line overflow-hidden font-semibold">
            <span className="block translate-y-full">DREAMS</span>
          </h1>
          <div className="mt-8 flex flex-col items-center gap-6 hero-fade opacity-0">
            <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-light">Defining the architecture of tomorrow</p>
            <div className="flex gap-4">
               <Link to="/contact" className="px-8 py-4 bg-white text-black text-[10px] uppercase tracking-widest hover:bg-moss hover:text-white transition-all duration-300 font-bold">
                 Explore the Vision
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section className="py-32 px-6 md:px-20 reveal-sec">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] mb-6 text-moss font-bold font-display">About Aethereal</div>
              <h2 className="display text-4xl md:text-6xl leading-tight font-medium">
                WE CRAFT SPACES <br /> THAT ECHO <br /> <span className="text-gray-400">HUMANITY.</span>
              </h2>
            </div>
            <div className="pt-4 md:pt-24">
              <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 mb-8">
                Founded in 2024, our studio operates at the intersection of raw brutality and biophilic warmth. We don't just build structures; we curate atmospheres that respond to the soul.
              </p>
              <Link to="/studio" className="text-[10px] uppercase tracking-widest border-b border-black pb-2 hover:text-moss hover:border-moss transition-colors font-bold">
                Our Studio Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Success Strip (Black Background Version) */}
      <section className="py-24 bg-dark text-stone reveal-sec border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="display text-3xl md:text-5xl font-semibold">12+</span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-40 font-bold">Years of Precision</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="display text-3xl md:text-5xl font-semibold">45</span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-40 font-bold">Global Accolades</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="display text-3xl md:text-5xl font-semibold">80k</span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-40 font-bold">Sqm Living Space</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="display text-3xl md:text-5xl font-semibold">100%</span>
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-40 font-bold">Vision Delivery</span>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="bg-stone text-dark pt-32 pb-0">
        <div className="text-center mb-24 px-6 reveal-sec">
          <div className="text-[10px] uppercase tracking-widest mb-4 opacity-50 font-bold">The Portfolio</div>
          <h2 className="display text-4xl md:text-7xl uppercase font-medium">Selected Interventions</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative pb-0">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`card-item sticky top-[15vh] h-[75vh] ${idx === PROJECTS.length - 1 ? 'mb-0' : 'mb-[10vh]'}`}>
              <div className="card-inner w-full h-full bg-dark text-stone border border-white/5 grid md:grid-cols-[1fr_1.3fr] overflow-hidden shadow-2xl rounded-sm">
                <div className="p-8 md:p-16 flex flex-col justify-between">
                   <div>
                      <div className="display text-5xl mb-4 opacity-10 font-bold">0{idx + 1}</div>
                      <h3 className="text-2xl md:text-4xl display mb-4 uppercase font-medium">{project.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-moss font-bold mb-4 font-display">{project.category} / {project.year}</p>
                      <p className="text-sm opacity-60 font-light leading-relaxed mb-6 hidden md:block">{project.description}</p>
                   </div>
                   <Link to={`/project/${project.id}`} className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-2 w-max hover:border-white transition-colors font-bold">
                      Explore Case Study
                   </Link>
                </div>
                <div className="relative overflow-hidden group">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Green Marquee Strip - positioned tightly */}
      <section className="bg-moss text-white overflow-hidden py-8 border-y border-white/5 relative z-20">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee-fast uppercase display text-[10px] md:text-xs tracking-[0.4em] items-center font-medium">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span>Design</span> <span>•</span>
                <span>Biophilic Spaces</span> <span>•</span>
                <span>Sustainable Living</span> <span>•</span>
                <span>Residential</span> <span>•</span>
                <span>Commercial</span> <span>•</span>
                <span>Retail</span> <span>•</span>
                <span>Cultural</span> <span>•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-32 bg-stone reveal-sec">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="text-[10px] uppercase tracking-widest mb-4 opacity-50 font-bold">Word of Mouth</div>
              <h2 className="display text-3xl md:text-5xl uppercase font-medium">Client Perspectives</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="flex flex-col justify-between p-12 bg-white/40 border border-black/5 rounded-sm">
                     <p className="text-xl md:text-2xl font-light italic mb-10 leading-relaxed text-gray-800">"{t.quote}"</p>
                     <div>
                        <p className="display text-sm mb-1 font-semibold">{t.author}</p>
                        <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Resident of {t.project}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto reveal-sec">
         <div className="text-center mb-16">
           <div className="text-[10px] uppercase tracking-widest mb-4 opacity-50 font-bold">Clarifications</div>
           <h2 className="display text-3xl uppercase font-medium">Knowledge Base</h2>
         </div>
         <div className="space-y-8">
            {FAQS.map((f, i) => (
               <div key={i} className="border-b border-black/10 pb-8">
                  <h3 className="display text-xs mb-4 uppercase tracking-[0.2em] font-bold">{f.q}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{f.a}</p>
               </div>
            ))}
         </div>
      </section>

      <style>{`
        .animate-marquee-fast {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
