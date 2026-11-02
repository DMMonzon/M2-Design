import React from 'react';
import { Language, Project } from '../types';
import { dict } from '../data';
import { motion } from 'motion/react';
import { EASE_EDITORIAL } from '../utils/motion';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  activeSection: string;
  projects: Project[];
}

export default function Header({
  currentLang,
  onToggleLang,
  activeSection,
  projects,
}: HeaderProps) {
  const t = dict[currentLang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050507]/35 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Left: Logo & Name */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection('hero')} 
          className="flex items-center space-x-3.5 cursor-pointer group select-none"
          id="header-logo"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-blue via-cyber-purple to-cyber-pink p-[1px] shadow-lg group-hover:shadow-[0_0_20px_rgba(96,140,255,0.4)] transition-all duration-500">
            <div className="w-full h-full bg-[#08080c] rounded-[7px] flex items-center justify-center font-display font-black text-white text-xs tracking-tighter">
              M2
            </div>
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-tighter text-white group-hover:text-cyber-blue transition-colors uppercase">
            M2<span className="text-white/30 font-light font-sans text-sm ml-0.5">.DSGN</span>
          </span>
        </motion.div>

        {/* Center Navigation: Framer Motion layoutId tab indicator */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 border border-white/10 bg-white/[0.03] backdrop-blur-md p-1 rounded-full">
          {projects.map((proj, idx) => {
            const isActive = activeSection === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => scrollToSection(proj.id)}
                className={`relative px-3 xl:px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.16em] xl:tracking-[0.2em] font-semibold transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white/90'
                }`}
                id={`nav-${proj.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-gradient-to-r from-cyber-blue/30 to-cyber-pink/30 border border-white/20 rounded-full shadow-inner"
                    transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-[9px] text-cyber-blue font-bold">0{idx + 1}.</span>
                  {proj.areaLabel[currentLang]}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Navigation: Language Switcher + Contact Link */}
        <div className="flex items-center space-x-3 md:space-x-5">
          {/* Language Switcher Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleLang}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 text-[10px] font-mono text-white/80 shadow-sm"
            title={currentLang === 'ES' ? 'Switch to English' : 'Cambiar a Español'}
            id="lang-switcher"
          >
            <span className="font-bold text-cyber-blue">{currentLang === 'ES' ? 'ES' : 'EN'}</span>
            <span className="text-white/20">/</span>
            <span className="text-[9px] text-white/50">{currentLang === 'ES' ? 'ARG' : 'INT'}</span>
          </motion.button>

          {/* Contact CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('contact')}
            className={`shine-button px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl ${
              activeSection === 'contact'
                ? 'bg-cyber-blue text-white shadow-[0_0_25px_rgba(96,140,255,0.4)]'
                : 'bg-white text-black hover:bg-cyber-blue hover:text-white'
            }`}
            id="nav-contact"
          >
            {t.navContact}
          </motion.button>
        </div>
      </div>
    </header>
  );
}

