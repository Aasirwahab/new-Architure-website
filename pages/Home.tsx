
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, TESTIMONIALS, FAQS } from '../constants';

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
        scrollTrigger: { trigger: heroImgRef.current, start: 'top top', end: 'bottom top', scrub: true }
      });

      const cards = gsap.utils.toArray<HTMLElement>('.card-item');
      cards.forEach((card, i) => {
        const nextCard = cards[i + 1];
        if (nextCard) {
          gsap.to(card.querySelector('.card-inner'), {
            scale: 0.9,
            opacity: 0.3,
            ease: "none",
            scrollTrigger: { trigger: nextCard, start: "top bottom", end: "top 10vh", scrub: true }
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-stone">
      {/* 1. Hero */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <img ref={heroImgRef} src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp" className="absolute inset-0 w-full h-full object-cover brightness-[0.6]" alt="Hero" />
        <div className="relative z-10 text-center text-white mix-blend-difference px-6">
          <h1 className="display text-[10vw] md:text-[12vw] leading-none hero-line overflow-hidden">
            <span className="block translate-y-full">CONCRETE</span>
          </h1>
          <h1 className="display text-[10vw] md:text-[12vw] leading-none hero-line overflow-hidden">
            <span className="block translate-y-full">DREAMS</span>
          </h1>
          <div className="mt-8 flex flex-col items-center gap-6 hero-fade opacity-0">
            <p className="text-xs md:text-sm uppercase tracking-[0.5em]">Start your legacy today</p>
            <div className="flex gap-4">
               <Link to="/contact" className="px-8 py-4 bg-white text-black text-[10px] uppercase tracking-widest hover:bg-moss hover:text-white transition-all duration-300">
                 Book Consultation
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof Strip */}
      <section className="py-20 border-b border-black/10 px-8 bg-stone">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12">
           <div className="flex flex-col">
              <span className="display text-3xl">12+</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">Years Experience</span>
           </div>
           <div className="flex flex-col">
              <span className="display text-3xl">45</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">Global Awards</span>
           </div>
           <div className="flex flex-col">
              <span className="display text-3xl">80k</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">Sqm Designed</span>
           </div>
           <div className="flex items-center gap-8 grayscale opacity-40">
              <span className="text-xs font-bold italic">Architectural Digest</span>
              <span className="text-xs font-bold italic">Dezeen</span>
              <span className="text-xs font-bold italic">Wallpaper*</span>
           </div>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section className="bg-dark text-stone py-20">
        <div className="text-center mb-24 px-6">
          <div className="text-[10px] uppercase tracking-widest mb-4 opacity-50">Selected Works</div>
          <h2 className="display text-4xl md:text-7xl">FEATURED PROJECTS</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative pb-20">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="card-item sticky top-[15vh] mb-[10vh] h-[75vh]">
              <div className="card-inner w-full h-full bg-[#1a1a1a] border border-white/5 grid md:grid-cols-[1fr_1.3fr] overflow-hidden shadow-2xl">
                <div className="p-8 md:p-16 flex flex-col justify-between">
                   <div>
                      <div className="display text-5xl mb-4 opacity-10">0{idx + 1}</div>
                      <h3 className="text-2xl md:text-4xl display mb-4">{project.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-moss font-bold mb-4">{project.outcome}</p>
                   </div>
                   <Link to={`/project/${project.id}`} className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-2 w-max hover:border-white transition-colors">
                      View Case Study
                   </Link>
                </div>
                <div className="relative overflow-hidden group">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industries Served Marquee */}
      <div className="py-12 bg-moss text-stone overflow-hidden whitespace-nowrap">
         <div className="inline-block animate-[marquee_20s_linear_infinite] display text-xs tracking-[0.5em] uppercase">
            RESIDENTIAL • COMMERCIAL • RETAIL • CULTURAL • INTERIORS • URBAN DESIGN • BIOPHILIC SPACES • SUSTAINABLE LIVING • RESIDENTIAL • COMMERCIAL • RETAIL • CULTURAL • 
         </div>
      </div>

      {/* 5. Testimonials */}
      <section className="py-32 bg-stone border-b border-black/10">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
            {TESTIMONIALS.map((t, i) => (
               <div key={i} className="flex flex-col justify-between p-12 bg-white/50 backdrop-blur border border-black/5">
                  <p className="text-2xl font-light italic mb-8">"{t.quote}"</p>
                  <div>
                     <p className="display text-sm mb-1">{t.author}</p>
                     <p className="text-[10px] uppercase tracking-widest opacity-40">Client, {t.project}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 6. FAQ Teaser */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
         <h2 className="display text-3xl mb-12 text-center">COMMON QUESTIONS</h2>
         <div className="space-y-8">
            {FAQS.map((f, i) => (
               <div key={i} className="border-b border-black/10 pb-8">
                  <h3 className="display text-xs mb-4 uppercase tracking-widest">{f.q}</h3>
                  <p className="text-gray-500 font-light">{f.a}</p>
               </div>
            ))}
         </div>
         <div className="text-center mt-12">
            <Link to="/contact" className="text-[10px] font-bold uppercase tracking-widest border-b border-black">View All FAQs</Link>
         </div>
      </section>

      {/* 7. Final CTA Block */}
      <section className="py-40 bg-dark text-stone text-center px-6">
         <div className="text-[10px] uppercase tracking-widest mb-6 opacity-40">Ready to build?</div>
         <h2 className="display text-3xl md:text-6xl mb-12">START A PROJECT</h2>
         <p className="max-w-xl mx-auto mb-12 opacity-60 font-light leading-relaxed">
           Average response time: 24 hours. Serving Europe, Asia, and North America.
         </p>
         <Link to="/contact" className="px-12 py-6 bg-moss text-white display text-[12px] tracking-widest hover:scale-105 transition-transform inline-block">
            INQUIRE NOW
         </Link>
      </section>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
