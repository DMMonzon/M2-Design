import React from 'react';
import { Language } from '../types';
import { dict } from '../data';
import { motion } from 'motion/react';
import { EASE_EDITORIAL, EASE_BOUNCE } from '../utils/motion';

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
      className="snap-section h-screen max-h-screen relative flex flex-col justify-between items-center overflow-hidden bg-transparent pt-14 pb-4 lg:pt-20 lg:pb-6"
    >

      {/* Matrix grid texture */}
      <div className="absolute inset-0 grid-overlay opacity-25 z-0 pointer-events-none" />

      {/* Ambient Neon Lighting Orbs */}
      <div className="absolute top-1/4 left-1/5 w-[420px] h-[420px] bg-cyber-pink/15 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[550px] h-[550px] bg-cyber-blue/15 rounded-full filter blur-[170px] pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-10 py-2">

        {/* Left: Dynamic Visual Hero Centerpiece */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE_EDITORIAL }}
            className="relative w-full aspect-square max-w-[130px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[380px]"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-pink/25 via-cyber-purple/20 to-cyber-blue/25 rounded-full filter blur-3xl animate-pulse" />

            {/* Vector orbits with dual counter-rotations */}
            <svg
              className="absolute inset-0 w-full h-full opacity-50 animate-[spin_90s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10,50 C20,20 80,20 90,50 C80,80 20,80 10,50 Z"
                stroke="url(#neon-grad)"
                strokeWidth="0.6"
              />
              <path
                d="M15,50 C25,25 75,25 85,50 C75,75 25,75 15,50 Z"
                stroke="url(#neon-grad)"
                strokeWidth="0.35"
                strokeDasharray="2 2"
              />
              <path
                d="M20,50 C30,30 70,30 80,50 C70,70 30,70 20,50 Z"
                stroke="url(#neon-grad)"
                strokeWidth="0.25"
              />
              <defs>
                <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff00ff" />
                  <stop offset="50%" stopColor="#cc00cc" />
                  <stop offset="100%" stopColor="#608cff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Main high-resolution artwork container */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-black/50 border border-white/15 glow-pink group">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
                alt="Vibrant powder splash design concept"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover mix-blend-screen scale-105 group-hover:scale-120 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                id="hero-splash-image"
              />
            </div>

            {/* Glowing Accent Badges */}
            <div className="absolute top-6 right-4 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-cyber-pink/40 text-[8px] sm:text-[9px] font-mono font-bold text-cyber-pink tracking-widest uppercase shadow-lg">
              ESTUDIO DE DISEÑO
            </div>
            <div className="absolute bottom-6 left-4 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-cyber-blue/40 text-[8px] sm:text-[9px] font-mono font-bold text-cyber-blue tracking-widest uppercase shadow-lg">
              DIGITAL & EXPERIMENTAL
            </div>
          </motion.div>
        </div>

        {/* Right: Editorial Title & Action CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col text-left space-y-3 sm:space-y-4 lg:space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_EDITORIAL }}
            className="space-y-2.5 max-w-xl"
          >
            {/* Tagline / Volanta */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyber-blue animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-cyber-blue uppercase font-bold">
                // 00. {t.heroTitlePre}
              </span>
            </div>

            {/* Editorial Headline with Syne font - Responsively sized to prevent 100vh overflow */}
            <h1 className="font-syne text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-white tracking-[-0.02em] uppercase leading-[1.05] text-balance">
              {t.heroTitleMain}
            </h1>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_EDITORIAL }}
            className="flex flex-row items-center gap-3 pt-1"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ ease: EASE_BOUNCE }}
              onClick={() => scrollToSection('contact')}
              className="shine-button px-5 py-2.5 sm:px-7 sm:py-3 bg-white text-black font-black uppercase tracking-widest rounded-full shadow-2xl hover:bg-cyber-blue hover:text-white transition-all duration-300 text-[10px] sm:text-xs"
              id="hero-cta-idea"
            >
              {t.heroCTA1}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ ease: EASE_BOUNCE }}
              onClick={() => scrollToSection('proj-apps')}
              className="shine-button px-5 py-2.5 sm:px-7 sm:py-3 bg-cyber-purple/20 border border-cyber-pink/40 text-white font-black uppercase tracking-widest rounded-full hover:border-cyber-pink hover:bg-cyber-pink transition-all duration-300 text-[10px] sm:text-xs shadow-lg"
              id="hero-cta-work"
            >
              {t.heroCTA2}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with custom spring physics */}
      <div 
        className="hidden md:flex flex-col items-center space-y-1.5 cursor-pointer z-10 opacity-75 hover:opacity-100 transition-opacity mb-2" 
        onClick={() => scrollToSection('proj-apps')}
      >
        <span className="text-[9px] font-mono tracking-[0.25em] text-white/50 uppercase font-semibold">
          {currentLang === 'ES' ? 'Deslizar para explorar' : 'Scroll to explore'}
        </span>
        <div className="w-4 h-7 rounded-full border border-white/25 p-1 flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: EASE_EDITORIAL }}
            className="w-1 h-1.5 bg-cyber-blue rounded-full shadow-[0_0_8px_#608cff]"
          />
        </div>
      </div>
    </section>
  );
}


