import React, { useState } from 'react';
import { Language } from '../types';
import { dict, contactDetails, skillsList, technologiesList } from '../data';
import { 
  Compass, 
  Code, 
  Search, 
  Layers, 
  PenTool, 
  Figma, 
  Globe, 
  Cpu, 
  Video, 
  Grid, 
  Volume2, 
  Film,
  Phone,
  Mail,
  Linkedin,
  FolderHeart,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  currentLang: Language;
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const t = dict[currentLang];
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper to dynamically render icons without bundle failures
  const renderIcon = (iconName: string, className: string = 'w-4 h-4 text-cyber-blue') => {
    switch (iconName) {
      case 'Compass': return <Compass className={className} />;
      case 'Code': return <Code className={className} />;
      case 'Search': return <Search className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'PenTool': return <PenTool className={className} />;
      case 'Figma': return <Figma className={className} />;
      case 'Wordpress': return <Globe className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Video': return <Video className={className} />;
      case 'Grid': return <Grid className={className} />;
      case 'Volume2': return <Volume2 className={className} />;
      case 'Film': return <Film className={className} />;
      default: return <Compass className={className} />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    // Simulate submission to the Argentine designer
    setIsSubmitted(true);
    setFormName('');
    setFormEmail('');
    setFormMessage('');

    // Reset after some seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="snap-section min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#050505] pt-12 pb-4 px-6 lg:py-12"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-pink/5 rounded-full filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-12 left-12 w-[300px] h-[300px] bg-cyber-blue/5 rounded-full filter blur-[100px] pointer-events-none z-0" />

      {/* Main Form + Info Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between py-4 lg:py-0 gap-3">
        
        {/* Intro Section Header */}
        <div className="text-center lg:text-left max-w-4xl space-y-1 sm:space-y-2">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter text-white uppercase leading-none">
            {t.contactTitle} {t.contactSubtitle}
          </h2>
          <p className="font-metrophobic text-xs sm:text-sm md:text-base text-white/50 max-w-3xl leading-relaxed font-light italic">
            "{t.contactIntro}"
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
          
          {/* Left Cards Stack (Cols: 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            
            {/* Card 1: Sobre mí */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-xl hover:border-white/20 transition-all">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">// ABOUT ME</span>
              <h3 className="text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em] mb-4 sm:mb-6">
                {t.aboutMe}
              </h3>

              <div className="flex flex-row items-start gap-4 sm:gap-6">
                {/* Avatar matching rotated NP avatar container */}
                <div className="relative shrink-0 select-none">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 bg-zinc-800 rounded-2xl overflow-hidden border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img
                       src={contactDetails.avatar}
                      alt={contactDetails.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      id="contact-profile-avatar"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4 text-left flex-1">
                  <div>
                    <h4 className="font-display font-black text-base sm:text-xl text-white tracking-tight uppercase">{contactDetails.name}</h4>
                    <span className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest block mt-0.5 sm:mt-1">
                      {contactDetails.age} {t.yearsOld} <span className="text-cyber-blue">•</span> {contactDetails.phrase[currentLang]}
                    </span>
                  </div>

                  {/* Skills/Conocimientos */}
                  <div className="space-y-1.5 sm:space-y-3 text-left">
                    <span className="block text-[8px] sm:text-[9px] font-mono tracking-widest text-white/35 uppercase">
                      {t.knowledge}
                    </span>
                    <ul className="grid grid-cols-2 gap-1.5">
                      {skillsList.map((skill, index) => (
                        <li key={index} className="flex items-center space-x-1.5 text-[11px] sm:text-xs text-white/80 font-light">
                          {renderIcon(skill.iconName, 'w-3 h-3 text-cyber-pink shrink-0')}
                          <span className="truncate">{skill.name[currentLang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Tecnologías */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-xl hover:border-white/20 transition-all">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">// TECH STACK</span>
              <h3 className="text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em] mb-4 sm:mb-6">
                {t.technologies}
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {technologiesList.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 p-1.5 sm:p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {renderIcon(tech.iconName, 'w-3 h-3 sm:w-4 sm:h-4 text-cyber-blue shrink-0')}
                    <span className="text-[10px] sm:text-xs text-white/80 font-mono truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Card Form (Cols: 7) */}
          <div className="lg:col-span-7 w-full relative">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyber-blue/10 to-transparent rounded-bl-full pointer-events-none" />

              {/* Success Alert Banner overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-6"
                    id="contact-success-overlay"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-pulse mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
                    <h3 className="font-display font-black text-white text-xl md:text-2xl mb-2 uppercase">
                      {currentLang === 'ES' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                    </h3>
                    <p className="text-sm text-white/50 max-w-sm leading-relaxed">
                      {t.successMsg}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actual Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1 text-left">
                  <label className="block text-[9px] sm:text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 sm:p-3 text-sm text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20"
                    placeholder={currentLang === 'ES' ? 'Ej: Martín Palermo' : 'e.g. John Doe'}
                    id="contact-name-input"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-[9px] sm:text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 sm:p-3 text-sm text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20"
                    placeholder={currentLang === 'ES' ? 'martin@ejemplo.com' : 'john@example.com'}
                    id="contact-email-input"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-[9px] sm:text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                    {t.formMessage}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 sm:p-3 text-sm text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20 resize-none"
                    placeholder={currentLang === 'ES' ? '¿Qué tenés en mente?' : 'What do you have in mind?'}
                    id="contact-message-input"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 bg-white text-black text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 shadow-md cursor-pointer"
                  id="contact-submit-btn"
                >
                  {t.formSubmit}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
