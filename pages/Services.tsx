
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 md:px-20 max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-24 max-w-2xl">
        <h1 className="display text-5xl md:text-8xl mb-8">SERVICES</h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          From concept sketches to the final brick, we provide an end-to-end design ecosystem tailored to high-performance living.
        </p>
      </div>

      <div className="grid gap-1 bg-black/5">
        {SERVICES.map((s, idx) => (
          <div key={s.id} className="bg-stone p-12 md:p-20 grid md:grid-cols-3 gap-12 group hover:bg-white transition-colors duration-500">
            <div>
              <div className="display text-4xl opacity-10 mb-4">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
              <h2 className="display text-2xl md:text-3xl mb-4 group-hover:text-moss transition-colors">{s.title}</h2>
              <p className="text-gray-500 text-sm max-w-xs">{s.description}</p>
            </div>
            <div>
               <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6 opacity-40">What's Included</h3>
               <ul className="space-y-3">
                  {s.deliverables.map(d => (
                    <li key={d} className="text-sm flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-moss rounded-full"></span> {d}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="flex flex-col justify-between items-end">
               <div className="text-right">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Typical Timeline</h3>
                  <p className="text-sm font-bold">{s.timeline}</p>
               </div>
               <Link to="/contact" className="px-8 py-4 border border-dark text-[10px] uppercase tracking-widest hover:bg-dark hover:text-stone transition-all">
                  Inquire Now
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
