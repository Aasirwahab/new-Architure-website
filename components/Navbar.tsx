
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
      <Link to="/" className="display font-bold text-xl md:text-2xl tracking-tighter">
        AETHEREAL
      </Link>
      
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
        <div className="group relative">
          <Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
          <div className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
             <div className="bg-dark/90 p-4 flex flex-col gap-3 min-w-[150px]">
                <Link to="/projects" className="hover:text-gray-400">Residential</Link>
                <Link to="/projects" className="hover:text-gray-400">Commercial</Link>
                <Link to="/projects" className="hover:text-gray-400">Interiors</Link>
             </div>
          </div>
        </div>
        <Link to="/services" className="hover:text-gray-400 transition-colors">Services</Link>
        <Link to="/process" className="hover:text-gray-400 transition-colors">Process</Link>
        <Link to="/studio" className="hover:text-gray-400 transition-colors">Studio</Link>
        <Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden display text-xs tracking-widest">
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark z-[-1] flex flex-col justify-center items-center gap-8 text-2xl display transition-transform duration-700 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link onClick={() => setIsOpen(false)} to="/projects">Projects</Link>
        <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
        <Link onClick={() => setIsOpen(false)} to="/process">Process</Link>
        <Link onClick={() => setIsOpen(false)} to="/studio">Studio</Link>
        <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
