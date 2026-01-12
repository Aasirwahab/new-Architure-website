
import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  { 
    title: 'Discovery', 
    desc: 'Deep dive into your lifestyle, site conditions, and budget. We establish the poetic and practical vision.',
    deliverables: 'Moodboards, Site Analysis, Program Document'
  },
  { 
    title: 'Concept', 
    desc: 'Translating needs into spatial forms. Sketching, 3D modeling, and material explorations.',
    deliverables: '3D Views, Plan Layouts, Material Palettes'
  },
  { 
    title: 'Planning', 
    desc: 'Navigating regulatory landscapes to secure approvals while maintaining design integrity.',
    deliverables: 'Council Submission Drawings, Heritage Statements'
  },
  { 
    title: 'Development', 
    desc: 'High-fidelity technical design. Every junction, fixture, and material is precisely specified.',
    deliverables: 'Construction Sets, Schedules, Detail Books'
  },
  { 
    title: 'Delivery', 
    desc: 'Site monitoring and coordination with craftsmen to ensure the vision is built as imagined.',
    deliverables: 'Handover Protocol, As-built Drawings'
  }
];

const Process: React.FC = () => {
  return (
    <div className="pt-40 pb-20 bg-stone">
      <div className="px-6 md:px-20 max-w-[1200px] mx-auto">
        <h1 className="display text-5xl md:text-8xl mb-8">PROCESS</h1>
        <p className="text-gray-500 max-w-xl text-lg font-light mb-20">Transparency is the bedrock of our practice. We follow a rigorous 5-step methodology to ensure design excellence from start to finish.</p>
        
        <div className="space-y-40 mb-40">
          {steps.map((s, idx) => (
            <div key={s.title} className="grid md:grid-cols-2 gap-12 border-t border-black/10 pt-12 relative">
               <div className="display text-[12vw] absolute -top-10 -left-10 opacity-[0.03] pointer-events-none">0{idx + 1}</div>
               <div>
                  <h2 className="display text-3xl md:text-5xl mb-6">{s.title}</h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">{s.desc}</p>
               </div>
               <div className="bg-white p-12 flex flex-col justify-center border border-black/5">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-moss mb-4">Key Deliverables</h3>
                  <p className="text-sm italic text-gray-500">{s.deliverables}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-20 py-32 border-t border-black/10">
           <div>
              <h2 className="display text-2xl mb-8">What we need from you</h2>
              <ul className="space-y-4 text-gray-600 font-light">
                 <li>• Site location & existing photos</li>
                 <li>• Desired budget band</li>
                 <li>• Initial "wishlist" of spaces</li>
                 <li>• Any site surveys or documentation</li>
              </ul>
           </div>
           <div>
              <h2 className="display text-2xl mb-8">Communication</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                We provide bi-weekly updates via digital portals and monthly on-site or in-studio design reviews. Every project gets a dedicated architect lead.
              </p>
              <Link to="/contact" className="display text-[10px] uppercase tracking-widest border-b border-moss">Start Phase 01</Link>
           </div>
        </div>

        <div className="mt-40 bg-dark text-stone p-12 md:p-24 text-center">
           <h2 className="display text-2xl md:text-4xl mb-8">Ready to start?</h2>
           <button className="px-12 py-5 bg-moss text-white display text-[10px] tracking-widest hover:scale-105 transition-all">
              Book Your Discovery Call
           </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
