
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from('.footer-content', {
      y: 100,
      opacity: 0,
      scale: 0.95,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1
      }
    });
  }, []);

  return (
    <>
      <div className="h-screen bg-transparent pointer-events-none"></div>
      <footer ref={footerRef} className="fixed bottom-0 left-0 w-full h-screen z-[-1] bg-dark text-stone flex flex-col justify-center items-center px-6 overflow-hidden">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale"
          alt="Bg"
        />
        <div className="footer-content relative z-10 text-center max-w-4xl">
           <div className="text-[10px] uppercase tracking-[0.5em] mb-12 text-moss font-bold">HAVE A VISION?</div>
           <Link to="/contact" className="display text-[8vw] leading-none hover:text-moss transition-colors block mb-12">
              LET'S TALK
           </Link>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] uppercase tracking-[0.2em] font-bold mt-20 text-stone/40">
              <div className="flex flex-col gap-4 items-center">
                 <Link to="/projects" className="hover:text-stone transition-colors">Work</Link>
                 <Link to="/studio" className="hover:text-stone transition-colors">About</Link>
              </div>
              <div className="flex flex-col gap-4 items-center">
                 <Link to="/services" className="hover:text-stone transition-colors">Services</Link>
                 <Link to="/contact" className="hover:text-stone transition-colors">Contact</Link>
              </div>
              <div className="flex flex-col gap-4 items-center">
                 <a href="#" className="hover:text-stone transition-colors">Instagram</a>
                 <a href="#" className="hover:text-stone transition-colors">LinkedIn</a>
              </div>
              <div className="flex flex-col gap-4 items-center">
                 <a href="#" className="hover:text-stone transition-colors">Privacy</a>
                 <a href="#" className="hover:text-stone transition-colors">Terms</a>
              </div>
           </div>

           <div className="mt-32 text-[8px] tracking-[0.4em] opacity-30">
              © 2025 AETHEREAL ARCHITECTURE • TOKYO LONDON BERLIN
           </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
