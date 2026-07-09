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
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between py-2 lg:py-0 gap-4">
        
        {/* Intro Section Header */}
        <div className="text-center lg:text-left max-w-4xl space-y-1">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            {t.contactTitle} {t.contactSubtitle}
          </h2>
          <p className="font-metrophobic text-xs sm:text-sm text-white/50 max-w-3xl leading-relaxed font-light italic">
            "{t.contactIntro}"
          </p>
        </div>

        {/* Content Cards Layout: 3 Columns side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 justify-center py-2">
          
          {/* Card 1: Sobre mí (Cols: 3) - White background, black text */}
          <div className="lg:col-span-3 bg-white text-zinc-950 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between border border-zinc-200">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
                <span className="text-[10px] font-bold tracking-widest text-zinc-800 uppercase">Sobre mí</span>
                <span className="text-[9px] font-mono text-zinc-400 tracking-wider">// ABOUT ME</span>
              </div>

              <div className="flex flex-row items-center gap-3.5 mb-4">
                {/* Avatar */}
                <div className="relative shrink-0 select-none">
                  <div className="w-14 h-14 bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={contactDetails.avatar}
                      alt={contactDetails.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      id="contact-profile-avatar"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="font-display font-black text-sm sm:text-base text-zinc-900 tracking-tight uppercase leading-tight">{contactDetails.name}</h4>
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mt-0.5">
                    {contactDetails.age} {t.yearsOld}
                  </span>
                  <span className="text-[9px] text-zinc-500 italic block mt-0.5 font-metrophobic">
                    {contactDetails.phrase[currentLang]}
                  </span>
                </div>
              </div>

              {/* Skills/Conocimientos */}
              <div className="space-y-2 text-left border-t border-zinc-100 pt-3">
                <span className="block text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                  Conocimientos adquiridos
                </span>
                <ul className="space-y-1.5">
                  {skillsList.map((skill, index) => (
                    <li key={index} className="flex items-center space-x-2 text-xs text-zinc-700 font-medium">
                      {renderIcon(skill.iconName, 'w-3.5 h-3.5 text-zinc-900 shrink-0')}
                      <span className="truncate">{skill.name[currentLang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Tecnologías (Cols: 3) - White background, black text */}
          <div className="lg:col-span-3 bg-white text-zinc-950 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between border border-zinc-200">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
                <span className="text-[10px] font-bold tracking-widest text-zinc-800 uppercase">Tecnologías aplicadas</span>
                <span className="text-[9px] font-mono text-zinc-400 tracking-wider">// TECH STACK</span>
              </div>

              <div className="space-y-1.5 text-left">
                {technologiesList.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 p-1 text-zinc-700 font-medium"
                  >
                    {renderIcon(tech.iconName, 'w-3.5 h-3.5 text-zinc-900 shrink-0')}
                    <span className="text-[11px] font-mono truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Formulario de Contacto (Cols: 6) - Dark background, white inputs */}
          <div className="lg:col-span-6 w-full relative">
            <div className="bg-[#0f0f15] border border-white/10 rounded-2xl p-5 md:p-6 relative overflow-hidden shadow-2xl h-full flex flex-col justify-center">
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

              {/* Actual Form - White background inputs like mock image */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="text-left">
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-white text-zinc-900 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none placeholder-zinc-400 border border-zinc-200"
                    placeholder={currentLang === 'ES' ? 'Nombre y Apellido' : 'Full Name'}
                    id="contact-name-input"
                  />
                </div>

                {/* Email Input */}
                <div className="text-left">
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-white text-zinc-900 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none placeholder-zinc-400 border border-zinc-200"
                    placeholder={currentLang === 'ES' ? 'E-mail' : 'Email Address'}
                    id="contact-email-input"
                  />
                </div>

                {/* Message Textarea */}
                <div className="text-left">
                  <textarea
                    required
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-white text-zinc-900 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none placeholder-zinc-400 border border-zinc-200 resize-none font-sans"
                    placeholder={currentLang === 'ES' ? 'Mensaje' : 'Message'}
                    id="contact-message-input"
                  />
                </div>

                {/* Submit button styled exactly like the mock image */}
                <button
                  type="submit"
                  className="border border-white bg-transparent text-white px-6 py-2.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 self-start cursor-pointer active:scale-95"
                  id="contact-submit-btn"
                >
                  {t.formSubmit}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer/Contact Info Bar - Black strip at the bottom */}
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 py-3 bg-black/60 border border-white/10 rounded-xl mt-2 select-none shadow-lg">
          {/* Behance */}
          <a
            href="https://behance.net/dmmonzon82"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2.5 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-sm text-white group-hover:bg-zinc-700 transition-colors">
              Bē
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wide">@dmmonzon82</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/DiegoMartinMonzon"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2.5 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wide">DiegoMartinMonzon</span>
          </a>

          {/* Phone */}
          <a
            href="https://wa.me/5491165298800"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2.5 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wide">+54 9 (011) 15 6529 8800</span>
          </a>

          {/* Email */}
          <a
            href="mailto:dmmonzon82@gmail.com"
            className="flex items-center space-x-2.5 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wide">dmmonzon82@gmail.com</span>
          </a>
        </div>

      </div>
    </section>
  );
}
