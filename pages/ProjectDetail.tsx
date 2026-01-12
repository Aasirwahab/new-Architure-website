
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="h-screen flex items-center justify-center">Project not found</div>;

  return (
    <div className="bg-stone min-h-screen">
      <section className="h-[70vh] relative overflow-hidden">
        <img src={project.imageUrl} className="w-full h-full object-cover" alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
        <div className="absolute bottom-20 left-6 md:left-20">
          <h1 className="display text-4xl md:text-7xl text-stone mb-4">{project.title}</h1>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone/70">
            <span>{project.location}</span>
            <span>{project.year}</span>
            <span>{project.category}</span>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-20 border-b border-black/10 bg-white/30 backdrop-blur-sm sticky top-0 z-30 flex flex-wrap gap-12 text-[10px] uppercase tracking-widest font-bold">
          <div><span className="opacity-40">Client</span> Private</div>
          <div><span className="opacity-40">Size</span> {project.size}</div>
          <div><span className="opacity-40">Stage</span> {project.stage}</div>
          <div><span className="opacity-40">Year</span> {project.year}</div>
      </section>

      <section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto grid md:grid-cols-3 gap-20">
        <div className="md:col-span-2">
          <div className="mb-20">
            <h2 className="display text-xs uppercase tracking-widest text-moss mb-8">The Brief</h2>
            <p className="text-2xl font-light leading-relaxed text-gray-800">{project.brief}</p>
          </div>
          
          <div className="mb-20 grid md:grid-cols-2 gap-12">
            <div>
               <h3 className="display text-[10px] uppercase tracking-widest mb-4 opacity-40">Constraints</h3>
               <p className="text-gray-600 font-light leading-relaxed">{project.constraints}</p>
            </div>
            <div>
               <h3 className="display text-[10px] uppercase tracking-widest mb-4 opacity-40">Approach</h3>
               <p className="text-gray-600 font-light leading-relaxed">{project.approach}</p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="display text-xs uppercase tracking-widest text-moss mb-8">Solution</h2>
            <p className="text-xl font-light leading-relaxed text-gray-600 mb-8">{project.solution}</p>
            <p className="text-xl font-light leading-relaxed text-gray-600">{project.description}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp" className="w-full aspect-square object-cover" alt="Detail 1" />
             <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp" className="w-full aspect-square object-cover" alt="Detail 2" />
          </div>
        </div>

        <div className="bg-dark text-stone p-12 h-max sticky top-32">
           <h3 className="display text-xs uppercase tracking-widest mb-6 opacity-40">Outcome</h3>
           <p className="text-xl font-light mb-12">{project.outcome}</p>
           <div className="h-px w-full bg-white/10 mb-8"></div>
           <Link to="/contact" className="display text-[10px] uppercase tracking-widest bg-moss text-white p-6 block text-center hover:bg-white hover:text-black transition-all">
              Start a project like this
           </Link>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 border-t border-black/10">
        <h2 className="display text-2xl mb-12">Related Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
           {PROJECTS.filter(p => p.id !== project.id).map(p => (
             <Link key={p.id} to={`/project/${p.id}`} className="group">
                <div className="aspect-video overflow-hidden mb-4">
                  <img src={p.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={p.title} />
                </div>
                <h4 className="display text-xs uppercase tracking-widest">{p.title}</h4>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
