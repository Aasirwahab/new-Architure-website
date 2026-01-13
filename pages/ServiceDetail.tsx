
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';

// Declare gsap globally
declare const gsap: any;

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // @ts-ignore
    const ctx = gsap.context(() => {
      // Hero image parallax & reveal
      gsap.from('.hero-img', {
        scale: 1.2,
        duration: 2,
        ease: 'power2.out'
      });
      
      gsap.from('.hero-title span', {
        y: '100%',
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      });

      // Content reveal
      const sections = gsap.utils.toArray('.reveal-content');
      sections.forEach((sec: any) => {
        gsap.from(sec, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [id]);

  if (!service) return <div className="h-screen flex items-center justify-center display">Service Not Found</div>;

  // Placeholder images map based on ID
  const heroImages: Record<string, string> = {
    arch: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
    interior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    planning: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <div ref={containerRef} className="bg-stone min-h-screen font-body text-dark overflow-hidden">
      {/* 1. Immersive Hero */}
      <section className="h-[80vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src={heroImages[service.id] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000"} 
          className="hero-img absolute inset-0 w-full h-full object-cover brightness-[0.4]" 
          alt={service.title} 
        />
        <div className="relative z-10 text-center text-stone px-6">
          <span className="display text-xs tracking-[0.4em] uppercase mb-6 block opacity-60">Service Expertise</span>
          <h1 className="hero-title display text-6xl md:text-[10vw] font-bold leading-none uppercase overflow-hidden">
            <span className="block">{service.title}</span>
          </h1>
          <div className="mt-12 flex justify-center gap-12 text-[10px] uppercase tracking-widest font-bold">
            <div className="flex flex-col gap-2">
               <span className="opacity-40">Timeline</span>
               <span>{service.timeline}</span>
            </div>
            <div className="w-px h-12 bg-stone/20"></div>
            <div className="flex flex-col gap-2">
               <span className="opacity-40">Focus</span>
               <span>Precision</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content Layout - Sticky Reveal Style */}
      <section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-20">
         <div className="md:col-span-5">
            <div className="md:sticky md:top-32 h-max">
               <h2 className="display text-4xl md:text-6xl font-bold uppercase mb-8 leading-tight">
                  THE <br /> ARCHITECTURAL <br /> <span className="text-moss">NARRATIVE.</span>
               </h2>
               <div className="w-20 h-1 bg-moss mb-8"></div>
               <p className="text-xl font-light text-gray-600 leading-relaxed mb-12">
                  Every project is a dialogue between the site's history and its future potential. Our {service.title.toLowerCase()} methodology prioritizes structural honesty.
               </p>
               <Link to="/contact" className="display text-[10px] uppercase tracking-widest bg-dark text-stone px-10 py-5 hover:bg-moss transition-all font-bold">
                  Start Consultation
               </Link>
            </div>
         </div>

         <div className="md:col-span-7 space-y-32">
            <div className="reveal-content">
               <h3 className="display text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Service Overview</h3>
               <p className="text-2xl md:text-3xl font-light leading-snug text-gray-800 italic">
                  "{service.description} We navigate the complexities of modern engineering to deliver results that exceed the standard."
               </p>
            </div>

            <div className="reveal-content">
               <h3 className="display text-[10px] uppercase tracking-widest font-bold opacity-30 mb-10">Detailed Deliverables</h3>
               <div className="grid grid-cols-1 gap-1 border-t border-black/5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="group py-8 flex justify-between items-center border-b border-black/5 hover:bg-white/50 transition-colors px-4">
                       <span className="display text-lg font-bold">0{idx + 1}</span>
                       <span className="display text-xl uppercase font-medium">{item}</span>
                       <span className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                       </span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="reveal-content grid grid-cols-2 gap-8">
               <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000" className="aspect-square object-cover grayscale" alt="Process 1" />
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000" className="aspect-square object-cover" alt="Process 2" />
            </div>

            <div className="reveal-content pb-20">
               <h3 className="display text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Technical Rigor</h3>
               <p className="text-gray-500 font-light leading-relaxed mb-6">
                 We leverage BIM (Building Information Modeling) and advanced parametric tools to ensure that our design intent survives the transition from pixels to physical reality.
               </p>
               <p className="text-gray-500 font-light leading-relaxed">
                 For {service.title}, this means a zero-compromise approach to materiality, acoustic performance, and thermal efficiency.
               </p>
            </div>
         </div>
      </section>

      {/* 3. Related Navigation */}
      <section className="bg-dark text-stone py-32 px-6 md:px-20">
         <div className="max-w-[1400px] mx-auto">
            <h4 className="display text-xs uppercase tracking-widest mb-12 opacity-30">Other Capabilities</h4>
            <div className="grid md:grid-cols-2 gap-8">
               {SERVICES.filter(s => s.id !== service.id).map(s => (
                 <Link key={s.id} to={`/service/${s.id}`} className="group block border border-white/10 p-12 hover:bg-stone hover:text-dark transition-all">
                    <span className="display text-[10px] uppercase tracking-widest font-bold mb-4 block opacity-40 group-hover:text-moss transition-colors">Capability</span>
                    <h5 className="display text-3xl font-bold uppercase mb-4">{s.title}</h5>
                    <p className="text-sm opacity-60 font-light max-w-sm">{s.description}</p>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
