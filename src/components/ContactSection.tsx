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
      className="snap-section min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#050505] pt-12 pb-4 px-6 lg:pt-20 lg:pb-12"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-pink/5 rounded-full filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-12 left-12 w-[300px] h-[300px] bg-cyber-blue/5 rounded-full filter blur-[100px] pointer-events-none z-0" />

      {/* Main Form + Info Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between py-4 lg:py-0 gap-3">
        
        {/* Intro Section Header */}
        <div className="text-center lg:text-left max-w-4xl space-y-1 sm:space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            {t.contactTitle} {t.contactSubtitle}
          </h2>
          <p className="font-metrophobic text-xs sm:text-sm md:text-base text-white/50 max-w-3xl leading-relaxed font-light italic">
            "{t.contactIntro}"
          </p>
        </div>

        {/* Content Cards Layout */}
        <div className="flex flex-col gap-4 lg:gap-5 flex-1 justify-center">
          
          {/* Top Row: Sobre Mí (Left) & Tecnologías Aplicadas (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            
            {/* Card 1: Sobre mí */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-xl hover:border-white/20 transition-all flex flex-col justify-center">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">// ABOUT ME</span>
              <h3 className="text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em] mb-3 sm:mb-4">
                {t.aboutMe}
              </h3>

              <div className="flex flex-row items-center gap-4 sm:gap-6">
                {/* Avatar matching rotated NP avatar container */}
                <div className="relative shrink-0 select-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zinc-800 rounded-2xl overflow-hidden border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={contactDetails.avatar}
                      alt={contactDetails.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      id="contact-profile-avatar"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left flex-1">
                  <div>
                    <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight uppercase">{contactDetails.name}</h4>
                    <span className="text-[9px] text-white/40 uppercase tracking-widest block mt-0.5">
                      {contactDetails.age} {t.yearsOld} <span className="text-cyber-blue">•</span> {contactDetails.phrase[currentLang]}
                    </span>
                  </div>

                  {/* Skills/Conocimientos */}
                  <div className="space-y-1 text-left">
                    <span className="block text-[8px] font-mono tracking-widest text-white/35 uppercase">
                      {t.knowledge}
                    </span>
                    <ul className="grid grid-cols-2 gap-1">
                      {skillsList.map((skill, index) => (
                        <li key={index} className="flex items-center space-x-1 text-[10px] text-white/80 font-light">
                          {renderIcon(skill.iconName, 'w-2.5 h-2.5 text-cyber-pink shrink-0')}
                          <span className="truncate">{skill.name[currentLang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Tecnologías */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-xl hover:border-white/20 transition-all flex flex-col justify-center">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">// TECH STACK</span>
              <h3 className="text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em] mb-3 sm:mb-4">
                {t.technologies}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {technologiesList.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-1.5 p-1.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {renderIcon(tech.iconName, 'w-2.5 h-2.5 text-cyber-blue shrink-0')}
                    <span className="text-[9px] text-white/80 font-mono truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Row: Contact Form */}
          <div className="w-full relative">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden shadow-2xl">
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
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-pulse mb-3 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
                    <h3 className="font-display font-black text-white text-lg md:text-xl mb-1 uppercase">
                      {currentLang === 'ES' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                    </h3>
                    <p className="text-xs text-white/50 max-w-sm leading-relaxed">
                      {t.successMsg}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actual Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1 text-left">
                    <label className="block text-[9px] sm:text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                      {t.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20"
                      placeholder={currentLang === 'ES' ? 'Ej: Martín Palermo' : 'e.g. John Doe'}
                      id="contact-name-input"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1 text-left">
                    <label className="block text-[9px] sm:text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20"
                      placeholder={currentLang === 'ES' ? 'martin@ejemplo.com' : 'john@example.com'}
                      id="contact-email-input"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1 text-left">
                  <label className="block text-[9px] sm:text-[10px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                    {t.formMessage}
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20 resize-none"
                    placeholder={currentLang === 'ES' ? '¿Qué tenés en mente?' : 'What do you have in mind?'}
                    id="contact-message-input"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-white text-black text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 shadow-md cursor-pointer"
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
