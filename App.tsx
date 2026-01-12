
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Process from './pages/Process';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    // @ts-ignore
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate with GSAP ScrollTrigger
    // @ts-ignore
    lenis.on('scroll', ScrollTrigger.update);
    // @ts-ignore
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });
    // @ts-ignore
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="noise-overlay"></div>
      <Preloader />
      <Navbar />
      {/* We wrap the content in a container that has a shadow to separate it from the footer reveal */}
      <div className="relative z-10 bg-stone shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
