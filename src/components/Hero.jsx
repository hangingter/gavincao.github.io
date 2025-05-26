import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage for parallax effect (max 50%)
      const scrollPercentage = Math.min(50, (window.scrollY / window.innerHeight) * 100);
      setScrolled(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation when component mounts
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen w-full relative overflow-hidden flex items-center">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: 'url(/assets/images/hero-bg.jpg)',
          transform: `scale(1.1) translateY(${scrolled * 0.3}px)`,
          filter: `blur(${scrolled * 0.05}px)`
        }}
        onError={(e) => {
          e.target.style.backgroundImage = 'linear-gradient(120deg, #f6f6f6, #f0f0f0)';
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Animated text entrance */}
          <div className={`transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
              Design. <br />
              <span className="text-white/90">Create.</span> <br />
              <span className="text-white/80">Innovate.</span>
            </h1>
          </div>

          {/* Subtitle with delay */}
          <div className={`transition-all delay-300 duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl font-light text-white/70 mb-10 max-w-md leading-relaxed">
              I'm John Doe, transforming ideas into elegant digital experiences that connect and inspire.
            </p>
          </div>

          {/* Button with delay */}
          <div className={`transition-all delay-500 duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex">
              <a 
                href="#gallery" 
                className="group relative px-8 py-3 overflow-hidden rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 h-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute left-1/2 bottom-10 transform -translate-x-1/2 transition-opacity duration-1000 ${loaded ? 'opacity-70' : 'opacity-0'}`}>
          <div className="flex flex-col items-center">
            <p className="text-white/50 text-sm font-light mb-2">Scroll</p>
            <div className="h-12 w-0.5 bg-white/20">
              <div className="h-2 w-full bg-white/50 animate-pulse-down"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;