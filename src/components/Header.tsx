import React from 'react';
import { Language, Project } from '../types';
import { dict } from '../data';

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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/30 backdrop-blur-xl border-b border-white/5 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-12 md:h-16 flex items-center justify-between">
        {/* Left: Logo & Name */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center space-x-3 cursor-pointer group"
          id="header-logo"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyber-blue to-cyber-pink flex items-center justify-center font-display font-black text-white text-xs tracking-tighter shadow-lg group-hover:scale-110 transition-transform duration-300">
            M2
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-tighter text-white group-hover:text-cyber-blue transition-colors uppercase">
            M2<span className="text-white/40 font-light">.DSGN</span>
          </span>
        </div>

        {/* Center Navigation: Hidden on smaller screens for clean minimalist view */}
        <nav className="hidden lg:flex items-center space-x-6">
          {projects.map((proj) => {
            const isActive = activeSection === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => scrollToSection(proj.id)}
                className={`font-display text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  isActive 
                    ? 'text-cyber-blue border-b border-cyber-blue pb-1' 
                    : 'text-white/50 hover:text-white'
                }`}
                id={`nav-${proj.id}`}
              >
                {proj.areaLabel[currentLang]}
              </button>
            );
          })}
        </nav>

        {/* Right Navigation: Language Switcher + Contact Link */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center space-x-1 px-3 py-1 rounded-full border border-white/10 hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300 text-[10px] font-mono text-white/70"
            title={currentLang === 'ES' ? 'Switch to English' : 'Cambiar a Español'}
            id="lang-switcher"
          >
            <span className="font-bold">{currentLang === 'ES' ? 'ES' : 'EN'}</span>
            <span className="text-white/20">|</span>
            <span className="text-[9px] text-white/40">{currentLang === 'ES' ? 'ARG' : 'INT'}</span>
          </button>

          {/* Contact Link */}
          <button
            onClick={() => scrollToSection('contact')}
            className={`bg-white text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-cyber-blue hover:text-white transition-all duration-300 shadow-md ${
              activeSection === 'contact' ? 'bg-cyber-blue text-white' : ''
            }`}
            id="nav-contact"
          >
            {t.navContact}
          </button>
        </div>
      </div>
    </header>
  );
}
