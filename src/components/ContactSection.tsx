import React, { useState, useEffect, useRef } from 'react';
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
import { SiFigma, SiWordpress, SiFlutter, SiWondersharefilmora } from 'react-icons/si';
import { TbBrandAdobeIllustrator } from 'react-icons/tb';

// Custom brand SVG icons for CapCut, Canva and Adobe Audition
const CapcutIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 509.659" fill="currentColor" className={className}>
    <path fillRule="nonzero" d="M109.095 181.505c2.223-19.532 18.316-34.578 37.955-35.483l167.194-.001a40.612 40.612 0 0 1 30.095 17.427 42.152 42.152 0 0 1 6.39 14.915l49.135-24.364a2.185 2.185 0 0 1 3.141 1.674v27.628l.001.096a4.571 4.571 0 0 1-2.837 4.229 177620.936 177620.936 0 0 0-135.63 67.336l135.324 66.948a4.695 4.695 0 0 1 3.142 4.08v27.685a2.266 2.266 0 0 1-3.613 1.821c-16.12-8.162-32.464-15.854-48.462-24.18a63.503 63.503 0 0 1-4.282 11.225 40.813 40.813 0 0 1-26.098 20.135 44.994 44.994 0 0 1-11.221.919l-155.833.003c-3.51 0-7.04 0-10.53-.266-18.089-2.705-32.049-17.363-33.869-35.565v-26.77a5.935 5.935 0 0 1 4.08-4.879c27.791-13.732 55.521-27.587 83.353-41.258a32412.61 32412.61 0 0 0-84.17-41.748 5.41 5.41 0 0 1-3.223-4.918c-.042-8.876-.185-17.792-.042-26.689zm30.975.184c-1.674 3.367-.898 7.263-1.041 10.896 30.608 15.12 60.99 30.321 91.536 45.339 30.185-14.963 60.384-29.927 90.596-44.89 0-2.714.123-5.428 0-8.162a10.203 10.203 0 0 0-10.096-8.734h-.106l-161.565.001a10.082 10.082 0 0 0-9.345 5.55h.021zm-1.041 135.406c.142 3.673-.654 7.631 1.122 11.039a10.204 10.204 0 0 0 9.284 5.405l161.667.002.081-.001c3.618 0 6.961-1.94 8.754-5.081 2.04-3.57 1.102-7.855 1.305-11.773-30.26-14.936-60.48-30.118-90.801-44.89a43915.126 43915.126 0 0 0-91.432 45.299h.02z" />
  </svg>
);

const CanvaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 508 508" fill="currentColor" className={className}>
    <path d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 0 1-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 0 0-6.476 1.683 3.689 3.689 0 0 0-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715zm-274.51 18.547c-5.342 0-7.435-5.38-7.435-13.401 0-13.93 9.528-37.193 19.604-37.193 4.402 0 6.065 5.185 6.065 11.524 0 14.145-9.059 39.07-18.235 39.07zm182.948-41.574c-3.189-3.796-4.343-8.961-4.343-13.559 0-5.673 2.074-10.467 4.558-10.467 2.485 0 3.248 2.446 3.248 5.85 0 5.693-2.035 14.008-3.463 18.176zm41.418 41.574c-5.34 0-7.434-6.182-7.434-13.401 0-13.441 9.528-37.193 19.682-37.193 4.402 0 5.967 5.146 5.967 11.524 0 14.145-8.902 39.07-18.215 39.07z" fill="currentColor" />
  </svg>
);

const AdobeAuditionIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <text x="5.5" y="15" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="-0.5" stroke="none">Au</text>
  </svg>
);

interface ContactSectionProps {
  currentLang: Language;
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const t = dict[currentLang];
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  useEffect(() => {
    let active = true;
    const initRecaptcha = () => {
      if (window && (window as any).grecaptcha && (window as any).grecaptcha.render && recaptchaRef.current) {
        try {
          recaptchaWidgetId.current = (window as any).grecaptcha.render(recaptchaRef.current, {
            sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // standard Google test key for reCAPTCHA v2
            theme: 'dark',
            callback: (token: string) => {
              if (active) setRecaptchaToken(token);
            },
            'expired-callback': () => {
              if (active) setRecaptchaToken(null);
            },
          });
        } catch (e) {
          console.error("reCAPTCHA rendering error:", e);
        }
        return true;
      }
      return false;
    };

    if (!initRecaptcha()) {
      const interval = setInterval(() => {
        if (initRecaptcha()) {
          clearInterval(interval);
        }
      }, 300);
      return () => {
        active = false;
        clearInterval(interval);
      };
    }
    return () => {
      active = false;
    };
  }, []);

  // Helper to dynamically render icons without bundle failures
  const renderIcon = (iconName: string, className: string = 'w-4 h-4 text-cyber-blue') => {
    switch (iconName) {
      case 'Compass': return <Compass className={className} />;
      case 'Code': return <Code className={className} />;
      case 'Search': return <Search className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'PenTool': return <TbBrandAdobeIllustrator className={className} />;
      case 'Figma': return <SiFigma className={className} />;
      case 'Wordpress': return <SiWordpress className={className} />;
      case 'Cpu': return <SiFlutter className={className} />;
      case 'Video': return <CapcutIcon className={className} />;
      case 'Grid': return <CanvaIcon className={className} />;
      case 'Volume2': return <AdobeAuditionIcon className={className} />;
      case 'Film': return <SiWondersharefilmora className={className} />;
      default: return <Compass className={className} />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage || !recaptchaToken) return;

    // Simulate submission to the Argentine designer
    setIsSubmitted(true);
    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setRecaptchaToken(null);

    if (recaptchaWidgetId.current !== null && (window as any).grecaptcha) {
      try {
        (window as any).grecaptcha.reset(recaptchaWidgetId.current);
      } catch (err) {
        console.error("Failed to reset reCAPTCHA:", err);
      }
    }

    // Reset after some seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="snap-section h-auto min-h-screen lg:h-screen lg:max-h-screen relative flex flex-col justify-between overflow-visible lg:overflow-hidden bg-[#050505] pt-16 pb-3 px-6 md:pt-20 lg:pt-24 lg:pb-6"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-pink/5 rounded-full filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-12 left-12 w-[300px] h-[300px] bg-cyber-blue/5 rounded-full filter blur-[100px] pointer-events-none z-0" />

      {/* Main Form + Info Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between py-0 gap-1.5 lg:gap-2.5">
        
        {/* Intro Section Header */}
        <div className="text-center lg:text-left w-full space-y-1">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            {t.contactTitle} {t.contactSubtitle}
          </h2>
          <p className="font-metrophobic text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed w-full">
            {t.contactIntro}
          </p>
        </div>

        {/* Content Cards Layout: 3 Columns side-by-side on desktop (Unified Theme Styles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch flex-1 justify-center py-1 lg:py-2">
          
          {/* Card 1: Sobre mí (Cols: 3) - Dark theme */}
          <div className="order-2 lg:order-1 lg:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-3.5 lg:p-3 shadow-xl hover:border-white/20 transition-all flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">// ABOUT ME</span>
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-cyber-blue uppercase">Sobre mí</span>
              </div>

              <div className="flex flex-row lg:flex-col gap-4 lg:gap-0 justify-between items-center lg:items-stretch">
                <div className="flex flex-row items-center gap-3 lg:mb-2 flex-1 min-w-0">
                  {/* Avatar */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-full lg:h-auto lg:max-w-none lg:flex-1 select-none shrink-0">
                    <div className="group w-full aspect-square bg-zinc-850 rounded-2xl overflow-hidden border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-300">
                      <img
                        src={contactDetails.avatar}
                        alt={contactDetails.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        id="contact-profile-avatar"
                      />
                    </div>
                  </div>

                  <div className="text-left min-w-0">
                    <h4 className="font-display font-black text-xs text-white tracking-tight uppercase leading-tight truncate">{contactDetails.name}</h4>
                    <span className="text-[9px] text-white/40 uppercase tracking-widest block mt-0.5">
                      {contactDetails.age} {t.yearsOld}
                    </span>
                    <span className="text-[9px] text-white/50 italic block mt-0.5 font-metrophobic leading-none line-clamp-2">
                      "{contactDetails.phrase[currentLang]}"
                    </span>
                  </div>
                </div>

                {/* Skills/Conocimientos */}
                <div className="space-y-1 text-left border-l border-white/5 pl-4 lg:pl-0 lg:border-l-0 lg:border-t lg:pt-1.5 lg:mt-0 flex-1 min-w-0">
                  <span className="block text-[8px] font-mono tracking-widest text-white/35 uppercase">
                    Conocimientos adquiridos
                  </span>
                  <ul className="space-y-0.5">
                    {skillsList.map((skill, index) => (
                      <li key={index} className="flex items-center space-x-2 text-[11px] sm:text-xs text-white/80 font-light">
                        {renderIcon(skill.iconName, 'w-3.5 h-3.5 text-cyber-pink shrink-0')}
                        <span className="truncate">{skill.name[currentLang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Tecnologías (Cols: 3) - Dark theme */}
          <div className="hidden lg:flex order-3 lg:order-2 lg:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-3.5 lg:p-3 shadow-xl hover:border-white/20 transition-all flex-col justify-between relative overflow-hidden">
            <span className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">// TECH STACK</span>
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-cyber-blue uppercase">Tecnologías aplicadas</span>
              </div>

              <div className="space-y-0.5 text-left">
                {technologiesList.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-1.5 p-0.5 text-white/80 font-medium"
                  >
                    {renderIcon(tech.iconName, 'w-3.5 h-3.5 text-cyber-blue shrink-0')}
                    <span className="text-[11px] sm:text-xs font-mono truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Formulario de Contacto (Cols: 6) - Dark theme */}
          <div className="order-1 lg:order-3 lg:col-span-6 w-full relative">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-3.5 lg:p-4 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between hover:border-white/20 transition-all">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">// CONTACT FORM</span>
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
                    <p className="text-xs text-white/50 max-w-sm leading-relaxed font-metrophobic">
                      {t.successMsg}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="w-full">
                <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                  <span className="text-[10px] font-bold tracking-widest text-cyber-blue uppercase">
                    {t.contactForm}
                  </span>
                </div>

                {/* Actual Form - Dark theme inputs */}
                <form onSubmit={handleSubmit} className="space-y-1.5">
                  {/* Name Input */}
                  <div className="text-left space-y-0.5">
                    <label className="block text-[9px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                      {t.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-1 px-2.5 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20 font-metrophobic"
                      placeholder={currentLang === 'ES' ? 'Ej: Martín Palermo' : 'e.g. John Doe'}
                      id="contact-name-input"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="text-left space-y-0.5">
                    <label className="block text-[9px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-1 px-2.5 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20 font-metrophobic"
                      placeholder={currentLang === 'ES' ? 'martin@ejemplo.com' : 'john@example.com'}
                      id="contact-email-input"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="text-left space-y-0.5">
                    <label className="block text-[9px] uppercase font-black text-cyber-blue tracking-[0.2em]">
                      {t.formMessage}
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-1 px-2.5 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/30 transition-all placeholder-white/20 resize-none font-metrophobic"
                      placeholder={currentLang === 'ES' ? '¿Qué tenés en mente?' : 'What do you have in mind?'}
                      id="contact-message-input"
                    />
                  </div>

                  {/* reCAPTCHA Validation */}
                  <div className="flex justify-center py-0.5 select-none">
                    <div ref={recaptchaRef} />
                  </div>

                  {/* Submit button styled like other primary buttons */}
                  <button
                    type="submit"
                    disabled={!recaptchaToken}
                    className={`w-full py-1.5 bg-white text-black text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg transition-all duration-300 shadow-md ${
                      !recaptchaToken
                        ? 'opacity-40 cursor-not-allowed'
                        : 'hover:bg-cyber-blue hover:text-white cursor-pointer active:scale-95'
                    }`}
                    id="contact-submit-btn"
                  >
                    {t.formSubmit}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Footer/Contact Info Bar - Black strip at the bottom */}
        <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-10 lg:gap-14 py-2 bg-black/60 border border-white/10 rounded-xl mt-1 select-none shadow-lg">
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
            <span className="hidden md:inline font-metrophobic text-xs sm:text-sm font-normal leading-relaxed">@dmmonzon82</span>
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
            <span className="hidden md:inline font-metrophobic text-xs sm:text-sm font-normal leading-relaxed">DiegoMartinMonzon</span>
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
            <span className="font-metrophobic text-[10px] sm:text-xs md:text-sm font-normal leading-relaxed">+54 9 (011) 15 6529 8800</span>
          </a>

          {/* Email */}
          <a
            href="mailto:dmmonzon82@gmail.com"
            className="flex items-center space-x-2.5 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-metrophobic text-[10px] sm:text-xs md:text-sm font-normal leading-relaxed">dmmonzon82@gmail.com</span>
          </a>
        </div>

      </div>
    </section>
  );
}
