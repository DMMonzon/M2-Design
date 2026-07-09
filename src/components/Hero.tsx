import React from 'react';
import { Language } from '../types';
import { dict } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = dict[currentLang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="snap-section min-h-screen relative flex items-center justify-center overflow-hidden bg-[#050505] pt-16 md:pt-0"
    >
      {/* Grid Overlay for futuristic matrix texture */}
      <div className="absolute inset-0 grid-overlay opacity-30 z-0 pointer-events-none" />

      {/* Abstract Glowing Neon Vectors / Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-pink/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyber-blue/10 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Hero Visual Layout: Flexible Responsive Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-12 pt-20 pb-4 lg:py-0">
        
        {/* Left: Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col text-left space-y-3 sm:space-y-4 lg:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            {/* Tagline/Pre-title (Volanta) */}
            <span className="inline-block text-[10px] sm:text-xs md:text-sm font-metrophobic tracking-widest text-cyber-blue uppercase font-bold">
              // {t.heroTitlePre}
            </span>

            {/* Main elegant heading in Exo font */}
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] text-balance">
              {t.heroTitleMain}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-metrophobic text-xs sm:text-sm md:text-lg text-white/60 max-w-lg leading-relaxed font-light"
          >
            {currentLang === 'ES' 
              ? 'Con un enfoque disruptivo y tecnologías de vanguardia, fusiono arte y código para crear experiencias memorables.'
              : 'With a disruptive approach and cutting-edge technologies, I blend art and code to engineer memorable digital experiences.'}
          </motion.p>

          {/* Action CTAs in Artistic Flair style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row gap-3"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2.5 sm:px-8 sm:py-3.5 bg-white text-black font-black uppercase tracking-widest rounded-full shadow-xl hover:bg-cyber-blue hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-300 text-[10px] sm:text-xs"
              id="hero-cta-idea"
            >
              {t.heroCTA1}
            </button>
            <button
              onClick={() => scrollToSection('proj-apps')}
              className="px-4 py-2.5 sm:px-8 sm:py-3.5 bg-cyber-purple/20 border border-cyber-pink/30 text-white font-black uppercase tracking-widest rounded-full hover:border-cyber-pink hover:bg-cyber-pink hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 text-[10px] sm:text-xs"
              id="hero-cta-work"
            >
              {t.heroCTA2}
            </button>
          </motion.div>
        </div>

        {/* Right: Stunning Paint Explosion Render & Futuristic Wave */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative select-none">
          {/* Subtle responsive placeholder image with high premium aesthetics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full aspect-square max-w-[140px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[450px]"
          >
            {/* Glowing background circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-pink/20 to-cyber-blue/20 rounded-full filter blur-3xl animate-pulse" />
            
            {/* Absolute vector abstract paths (the wavy wireframes shown in the images) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 animate-[spin_100s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10,50 C20,20 80,20 90,50 C80,80 20,80 10,50 Z"
                stroke="url(#neon-grad)"
                strokeWidth="0.5"
              />
              <path
                d="M15,50 C25,25 75,25 85,50 C75,75 25,75 15,50 Z"
                stroke="url(#neon-grad)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
              />
              <path
                d="M20,50 C30,30 70,30 80,50 C70,70 30,70 20,50 Z"
                stroke="url(#neon-grad)"
                strokeWidth="0.2"
              />
              <defs>
                <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff007f" />
                  <stop offset="50%" stopColor="#9d4edd" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Main splash art using high-quality Unsplash image to avoid broken renders */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-black/40 border border-white/10 glow-pink">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
                alt="Vibrant powder splash design concept"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover mix-blend-screen scale-110 hover:scale-125 transition-transform duration-1000"
                id="hero-splash-image"
              />
            </div>

            {/* Glowing particle accents */}
            <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-cyber-pink animate-ping" />
            <div className="absolute bottom-16 left-12 w-3 h-3 rounded-full bg-cyber-blue animate-pulse" />
            <div className="absolute top-1/2 left-2 w-1.5 h-1.5 rounded-full bg-cyber-purple" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile for clean screen constraint */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center space-y-2 cursor-pointer z-10" onClick={() => scrollToSection('proj-apps')}>
        <span className="text-[10px] font-metrophobic tracking-widest text-white/40 uppercase">
          {currentLang === 'ES' ? 'Deslizar para explorar' : 'Scroll to explore'}
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 bg-cyber-blue rounded-full" 
          />
        </div>
      </div>
    </section>
  );
}
