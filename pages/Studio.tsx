
import React from 'react';

const Studio: React.FC = () => {
  return (
    <div className="pt-40 pb-20 bg-stone">
      <section className="px-6 md:px-20 max-w-[1400px] mx-auto mb-40">
        <h1 className="display text-5xl md:text-9xl mb-12">STUDIO</h1>
        <div className="grid md:grid-cols-2 gap-20">
           <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp" className="w-full aspect-square object-cover grayscale" alt="Office" />
           <div className="flex flex-col justify-center">
              <h2 className="display text-2xl md:text-4xl mb-8">We build the <span className="text-moss">future heritage.</span></h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                AETHEREAL was founded on the principle that architecture is the most visceral link between humanity and the environment. We choreograph light, sound, and movement to create timeless habitats.
              </p>
              
              <div className="mb-12">
                 <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40">Core Strengths</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-black/5 bg-white/50">Adaptive Reuse</div>
                    <div className="p-4 border border-black/5 bg-white/50">Biophilic Design</div>
                    <div className="p-4 border border-black/5 bg-white/50">Technical Precision</div>
                    <div className="p-4 border border-black/5 bg-white/50">Luxury Residential</div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-8 border-t border-black/10 pt-8">
                 <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold mb-2">Credentials</h3>
                    <p className="text-sm text-gray-500">RIBA Member, AIA International, Carbon-Neutral Studio Certified 2024.</p>
                 </div>
                 <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold mb-2">Presence</h3>
                    <p className="text-sm text-gray-500">Studios in Tokyo, London, and Berlin. Serving clients worldwide.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-dark text-stone py-40 px-6 md:px-20">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="display text-3xl md:text-5xl mb-24">THE TEAM</h2>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { name: 'Kaito Tanaka', role: 'Principal Architect', bio: 'Expert in Japanese minimalism and concrete tectonics.' },
                 { name: 'Elena Rossi', role: 'Design Director', bio: 'Pioneer of adaptive reuse and sustainable interiors.' },
                 { name: 'Marcus Voigt', role: 'Technical Lead', bio: 'Specialist in parametric design and structural innovation.' }
               ].map(m => (
                 <div key={m.name} className="group cursor-default">
                    <div className="aspect-[3/4] bg-stone/10 mb-6 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                       <img src={`https://picsum.photos/600/800?seed=${m.name}`} className="w-full h-full object-cover" alt={m.name} />
                    </div>
                    <h4 className="display text-lg mb-1">{m.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-moss font-bold mb-4">{m.role}</p>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{m.bio}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Studio;
