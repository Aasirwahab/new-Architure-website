
import React, { useEffect, useRef } from 'react';

const Preloader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (loaderRef.current) loaderRef.current.style.display = 'none';
      }
    });

    tl.to(barRef.current, { width: '100%', duration: 1.2, ease: 'power2.inOut' })
      .to(textRef.current, { y: -20, opacity: 0, duration: 0.4 })
      .to(loaderRef.current, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' });
  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[10000] bg-dark flex flex-col justify-center items-center overflow-hidden">
      <div ref={textRef} className="display text-white text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        AETHEREAL
      </div>
      <div className="w-48 h-1 bg-white/10 relative overflow-hidden">
        <div ref={barRef} className="absolute inset-0 bg-white w-0"></div>
      </div>
    </div>
  );
};

export default Preloader;
