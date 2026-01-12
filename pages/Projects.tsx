
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Interiors'];

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-40 pb-20 px-6 md:px-20 max-w-[1800px] mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h1 className="display text-5xl md:text-8xl mb-4">WORK</h1>
          <p className="text-gray-500 max-w-md font-light">A curated selection of our most impactful architectural interventions across the globe.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest font-bold">
          {categories.map(c => (
            <button 
              key={c} 
              onClick={() => setFilter(c)}
              className={`px-4 py-2 border ${filter === c ? 'bg-dark text-stone border-dark' : 'border-black/10 hover:border-black'} transition-all`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filtered.map(p => (
          <Link to={`/project/${p.id}`} key={p.id} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-6 relative">
              <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute top-4 right-4 bg-dark text-stone px-3 py-1 text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {p.year}
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="display text-xl group-hover:text-moss transition-colors">{p.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{p.location}</p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-30">{p.category}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-40 border-t border-black/10 pt-20 text-center">
        <h2 className="display text-3xl mb-8">HAVE A SIMILAR PROJECT?</h2>
        <Link to="/contact" className="px-10 py-5 border border-dark text-[10px] uppercase tracking-widest hover:bg-dark hover:text-stone transition-all inline-block">
          Let's Start a Conversation
        </Link>
      </div>
    </div>
  );
};

export default Projects;
