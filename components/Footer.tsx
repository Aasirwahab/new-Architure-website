
import React, { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      // @ts-ignore
      gsap.from('.footer-content', {
        y: 150,
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        }
      });
    }
  }, []);

  return (
    <>
      {/* This spacer creates the 'scroll room' to see the footer */}
      <div className="h-screen pointer-events-none"></div>
      
      <footer 
        ref={footerRef} 
        id="footer"
        className="footer-sticky fixed bottom-0 left-0 w-full h-screen z-0 bg-[#111] text-white flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"
          className="footer-bg absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          alt="Footer background"
        />

        {/* Content */}
        <div className="footer-content relative z-10 text-center px-6">
          <div className="footer-kicker text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">
            Have a project?
          </div>

          <a
            href="mailto:hello@aethereal.com"
            className="footer-cta display text-[8vw] leading-none hover:text-gray-400 transition-colors block"
          >
            LET'S TALK
          </a>

          <div className="footer-links flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </div>

          <div className="footer-copy mt-20 text-[10px] text-gray-700">
            © 2025 AETHEREAL ARCHITECTURE
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
