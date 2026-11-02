import React, { useState } from 'react';
import { Language } from '../types';
import { dict, contactDetails, skillsList, technologiesList } from '../data';
import {
  Compass,
  Code,
  Search,
  Layers,
  Phone,
  Mail,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Check
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

const TOPIC_OPTIONS = [
  { id: 'apps', label: { ES: 'App', EN: 'App' } },
  { id: 'web', label: { ES: 'Web', EN: 'Web' } },
  { id: 'branding', label: { ES: 'Branding', EN: 'Branding' } },
  { id: 'textil', label: { ES: 'Textil', EN: 'Textile' } },
  { id: 'graphic', label: { ES: 'Gráfico', EN: 'Graphic' } },
  { id: 'media', label: { ES: 'Media', EN: 'Media' } },
  { id: 'uxui', label: { ES: 'UX/UI', EN: 'UX/UI' } },
  { id: 'other', label: { ES: 'Otra', EN: 'Other' } },
];

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const t = dict[currentLang];
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleTopic = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(formEmail.trim());
  const showEmailError = emailTouched && formEmail.trim().length > 0 && !isEmailValid;
  const canSubmit = formName.trim().length > 0 && isEmailValid && formMessage.trim().length > 0;

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
    setEmailTouched(true);
    if (!canSubmit) return;

    // Simulate submission to the Argentine designer
    setIsSubmitted(true);
    setFormName('');
    setFormEmail('');
    setEmailTouched(false);
    setSelectedTopics([]);
    setFormMessage('');

    // Reset after some seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="snap-section h-screen max-h-screen relative flex flex-col justify-between overflow-hidden bg-transparent pt-14 pb-3 px-6 md:pt-16 lg:pt-16 lg:pb-4"
    >

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-pink/10 rounded-full filter blur-[170px] pointer-events-none z-0" />
      <div className="absolute top-12 left-12 w-[350px] h-[350px] bg-cyber-blue/10 rounded-full filter blur-[130px] pointer-events-none z-0" />

      {/* Main Form + Info Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 min-h-0 flex flex-col justify-between py-0 gap-2 lg:gap-3">

        {/* Top Header: Perfil.png on Upper-Left + Section, Title & Description on Right */}
        <div className="flex flex-row items-center gap-4 sm:gap-5 lg:gap-6 w-full">
          {/* Avatar (Upper-Left, kept compact) */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 select-none shrink-0">
            <div
              className="group w-full h-full aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out shadow-xl"
            >
              <img
                src={contactDetails.avatar}
                alt={contactDetails.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                id="contact-profile-avatar"
              />
            </div>
          </div>

          {/* Text Blocks: Section, Title, Description */}
          <div className="text-left flex-1 min-w-0 space-y-0.5 sm:space-y-1">
            <div className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyber-pink animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-cyber-pink uppercase font-bold">
                // 08. CONTACTO & ABOUT
              </span>
            </div>
            <h2 className="font-syne text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-[-0.02em] text-white uppercase leading-tight">
              {t.contactTitle} {t.contactSubtitle}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/75 font-normal leading-relaxed w-full">
              {t.contactIntro}
            </p>
          </div>
        </div>

        {/* Content Cards Layout: Left Vertical Block (Skills + Tech) & Right Block (Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch flex-1 min-h-0 py-0.5">

          {/* Left Column: Single Vertical Rectangular Block for Conocimientos adquiridos & Tecnologías aplicadas */}
          <div className="order-2 lg:order-1 lg:col-span-4 glass-panel glass-panel-interactive rounded-2xl p-3.5 lg:p-4 flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-3.5 right-4 text-[9px] font-mono text-white/30 tracking-widest">// SKILLS & STACK</span>

            {/* Sub-block 1: Conocimientos adquiridos */}
            <div className="text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyber-pink uppercase">
                  {t.knowledge}
                </span>
              </div>
              <ul className="space-y-1">
                {skillsList.map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2 py-0.5 text-[11px] sm:text-xs text-white/85 font-light hover:text-white transition-colors">
                    {renderIcon(skill.iconName, 'w-3.5 h-3.5 text-cyber-pink shrink-0')}
                    <span className="truncate">{skill.name[currentLang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-block 2: Tecnologías aplicadas */}
            <div className="text-left border-t border-white/10 pt-2.5 mt-2">
              <div className="flex items-center justify-between pb-1.5 mb-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyber-blue uppercase">
                  {t.technologies}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-2 gap-y-0.5">
                {technologiesList.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 py-0.5 px-1 rounded-lg hover:bg-white/5 text-white/85 font-medium transition-colors"
                  >
                    {renderIcon(tech.iconName, 'w-3.5 h-3.5 text-cyber-blue shrink-0')}
                    <span className="text-[11px] sm:text-xs font-mono truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Formulario de Contacto */}
          <div className="order-1 lg:order-2 lg:col-span-8 w-full h-full relative min-h-0">
            <div className="glass-panel glass-panel-interactive rounded-2xl p-4 lg:p-5 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-white/30 tracking-widest">// CONTACT FORM</span>
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyber-blue/15 to-transparent rounded-bl-full pointer-events-none" />

              {/* Success Alert Banner overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-[#040406]/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-6"
                    id="contact-success-overlay"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-pulse mb-3 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
                    <h3 className="font-syne font-extrabold text-white text-lg md:text-xl mb-1 uppercase">
                      {currentLang === 'ES' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                    </h3>
                    <p className="text-xs text-white/60 max-w-sm leading-relaxed font-sans">
                      {t.successMsg}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyber-blue uppercase">
                    {t.contactForm}
                  </span>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name Input */}
                    <div className="text-left space-y-1">
                      <label className="block text-[9px] font-mono uppercase font-bold text-cyber-blue tracking-[0.2em]">
                        {t.formName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/40 transition-all placeholder-white/20 font-sans"
                        placeholder={currentLang === 'ES' ? 'Ej: Martín Palermo' : 'e.g. John Doe'}
                        id="contact-name-input"
                      />
                    </div>

                    {/* Email Input with Verification */}
                    <div className="text-left space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="block text-[9px] font-mono uppercase font-bold text-cyber-blue tracking-[0.2em]">
                          {t.formEmail}
                        </label>
                        {formEmail.trim().length > 0 && (
                          <span className={`text-[9px] font-mono flex items-center gap-1 ${isEmailValid ? 'text-emerald-400' : showEmailError ? 'text-cyber-pink' : 'text-white/40'}`}>
                            {isEmailValid ? (
                              <>
                                <CheckCircle2 className="w-3 h-3" />
                                {currentLang === 'ES' ? 'E-mail verificado' : 'Verified email'}
                              </>
                            ) : showEmailError ? (
                              <>
                                <AlertCircle className="w-3 h-3" />
                                {currentLang === 'ES' ? 'Formato inválido' : 'Invalid format'}
                              </>
                            ) : null}
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          onBlur={() => setEmailTouched(true)}
                          className={`w-full bg-white/[0.04] border rounded-xl py-2 pl-3 pr-8 text-xs text-white focus:outline-none transition-all placeholder-white/20 font-sans ${showEmailError
                              ? 'border-cyber-pink focus:border-cyber-pink focus:ring-1 focus:ring-cyber-pink/40'
                              : isEmailValid
                                ? 'border-emerald-400/50 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30'
                                : 'border-white/10 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/40'
                            }`}
                          placeholder={currentLang === 'ES' ? 'martin@ejemplo.com' : 'john@example.com'}
                          id="contact-email-input"
                        />
                        {formEmail.trim().length > 0 && (
                          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                            {isEmailValid ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : showEmailError ? (
                              <AlertCircle className="w-4 h-4 text-cyber-pink" />
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Multi-select Topic Checkboxes right above Message Textarea */}
                  <div className="text-left space-y-1.5 select-none">
                    <div className="flex items-center justify-between">
                      <span className="block text-[9px] font-mono uppercase font-bold text-cyber-blue tracking-[0.2em]">
                        {currentLang === 'ES' ? 'Áreas de interés (puedes elegir varias)' : 'Areas of interest (select all that apply)'}
                      </span>
                      {selectedTopics.length > 0 && (
                        <span className="text-[9px] font-mono text-cyber-pink font-semibold">
                          {selectedTopics.length} {currentLang === 'ES' ? (selectedTopics.length === 1 ? 'seleccionada' : 'seleccionadas') : 'selected'}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                      {TOPIC_OPTIONS.map((topic) => {
                        const isChecked = selectedTopics.includes(topic.id);
                        return (
                          <button
                            key={topic.id}
                            type="button"
                            role="checkbox"
                            aria-checked={isChecked}
                            onClick={() => toggleTopic(topic.id)}
                            className={`flex items-center justify-center sm:justify-start gap-1.5 px-2 py-1.5 rounded-lg border text-[10px] font-mono transition-all duration-200 cursor-pointer ${
                              isChecked
                                ? 'bg-cyber-blue/20 border-cyber-blue text-white shadow-[0_0_12px_rgba(96,140,255,0.25)]'
                                : 'bg-white/[0.03] border-white/10 text-white/60 hover:border-white/25 hover:text-white/90 hover:bg-white/[0.06]'
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors ${
                                isChecked
                                  ? 'bg-cyber-blue border-cyber-blue text-black'
                                  : 'border-white/25 bg-black/40'
                              }`}
                            >
                              {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </span>
                            <span className="truncate font-medium">{topic.label[currentLang]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enlarged Message Textarea */}
                  <div className="text-left flex-1 flex flex-col space-y-1 min-h-0">
                    <label className="block text-[9px] font-mono uppercase font-bold text-cyber-blue tracking-[0.2em]">
                      {t.formMessage}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full flex-1 min-h-[95px] bg-white/[0.04] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/40 transition-all placeholder-white/20 resize-none font-sans leading-relaxed"
                      placeholder={currentLang === 'ES' ? '¿Qué tenés en mente? Contame sobre tu proyecto, objetivos o ideas...' : 'What do you have in mind? Tell me about your project, goals, or ideas...'}
                      id="contact-message-input"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    whileHover={{ scale: canSubmit ? 1.01 : 1 }}
                    whileTap={{ scale: canSubmit ? 0.99 : 1 }}
                    type="submit"
                    disabled={!canSubmit}
                    className={`shine-button w-full py-2.5 bg-white text-black text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl ${
                      !canSubmit
                        ? 'opacity-35 cursor-not-allowed'
                        : 'hover:bg-cyber-blue hover:text-white cursor-pointer'
                    }`}
                    id="contact-submit-btn"
                  >
                    {t.formSubmit}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Footer / Contact Bar */}
        <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-10 lg:gap-14 py-2.5 bg-black/70 border border-white/10 rounded-2xl mt-1 select-none shadow-2xl backdrop-blur-xl">
          {/* Behance */}
          <motion.a
            whileHover={{ scale: 1.06 }}
            href="https://behance.net/dmmonzon82"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-850 border border-white/15 flex items-center justify-center font-bold text-sm text-white group-hover:border-cyber-blue transition-colors">
              Bē
            </div>
            <span className="hidden md:inline font-mono text-xs font-normal">@dmmonzon82</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.06 }}
            href="https://linkedin.com/in/DiegoMartinMonzon"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-850 border border-white/15 flex items-center justify-center text-white group-hover:border-cyber-blue transition-colors">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="hidden md:inline font-mono text-xs font-normal">DiegoMartinMonzon</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            whileHover={{ scale: 1.06 }}
            href="https://wa.me/5491165298800"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-850 border border-white/15 flex items-center justify-center text-white group-hover:border-cyber-blue transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-mono text-[10px] sm:text-xs font-normal">+54 9 (011) 15 6529 8800</span>
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.06 }}
            href="mailto:dmmonzon82@gmail.com"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-850 border border-white/15 flex items-center justify-center text-white group-hover:border-cyber-blue transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-mono text-[10px] sm:text-xs font-normal">dmmonzon82@gmail.com</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}

