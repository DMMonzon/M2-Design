import React, { useState, useEffect } from 'react';
import { Project, Language } from '../types';
import { dict } from '../data';
import { Heart, Share2, MessageSquare, ArrowRight, Send, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { EASE_EDITORIAL, EASE_BOUNCE, EASE_SNAP } from '../utils/motion';

interface ProjectSectionProps {
  project: Project;
  currentLang: Language;
  onLikeToggle: (id: string) => void;
  isLiked: boolean;
  onShare: (title: string) => void;
}

interface LocalComment {
  id: string;
  author: string;
  text: string;
  time: string;
}

export default function ProjectSection({
  project,
  currentLang,
  onLikeToggle,
  isLiked,
  onShare,
}: ProjectSectionProps) {
  const t = dict[currentLang];

  // Local state for comments
  const [showComments, setShowComments] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [commentsList, setCommentsList] = useState<LocalComment[]>([
    {
      id: 'c1',
      author: currentLang === 'ES' ? 'Santi de Palermo' : 'Alex from NYC',
      text: currentLang === 'ES'
        ? '¡Qué locura este laburo! El nivel de detalle es tremendo, che.'
        : 'Incredible work! The level of detail is amazing.',
      time: '2h ago',
    },
    {
      id: 'c2',
      author: currentLang === 'ES' ? 'Clara G.' : 'Clara G.',
      text: currentLang === 'ES'
        ? '¿Hacés mentorías? Me vuela la cabeza cómo usás la paleta de colores.'
        : 'Do you offer mentorships? The way you use color palettes blows my mind.',
      time: '1d ago',
    }
  ]);
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  // Carousel/Tabs system states
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [examples, setExamples] = useState(project.examples);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  // Reset video mute state when switching tabs
  useEffect(() => {
    setIsVideoMuted(true);
  }, [activeExampleIndex]);

  // Auto rotation effect (every 3.5 seconds, stops on hover or when overlay is open)
  useEffect(() => {
    if (isAutoplayPaused || showOverlay) return;
    const interval = setInterval(() => {
      setActiveExampleIndex((prev) => (prev + 1) % project.examples.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [project.examples.length, isAutoplayPaused, showOverlay, activeExampleIndex]);

  // Antispam states
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [pendingAction, setPendingAction] = useState<'like' | 'share' | 'comment' | null>(null);
  const [likedExampleIds, setLikedExampleIds] = useState<string[]>([]);
  const [pendingComment, setPendingComment] = useState<{ author: string; text: string } | null>(null);

  // Assign color scheme based on project area (only magenta and blue families)
  const getColors = (area: string) => {
    switch (area) {
      case 'apps':
      case 'uxui':
      case 'graphic':
      case 'textil':
        return {
          glow: 'glow-pink', // maps to magenta in index.css
          text: 'text-cyber-pink', // maps to magenta in index.css
          bg: 'from-cyber-pink/15 to-transparent',
          border: 'border-cyber-pink/30 hover:border-cyber-pink',
          accent: '#ff00ff',
        };
      case 'web':
      case 'branding':
      case 'media':
      default:
        return {
          glow: 'glow-blue', // maps to blue in index.css
          text: 'text-cyber-blue', // maps to blue in index.css
          bg: 'from-cyber-blue/15 to-transparent',
          border: 'border-cyber-blue/30 hover:border-cyber-blue',
          accent: '#608cff',
        };
    }
  };

  const colors = getColors(project.area);

  const executeAction = (action: 'like' | 'share' | 'comment', verifiedMail?: string) => {
    const currentWork = examples[activeExampleIndex];
    if (action === 'like') {
      if (likedExampleIds.includes(currentWork.id)) return; // already liked
      setLikedExampleIds((prev) => [...prev, currentWork.id]);
      setExamples((prev) =>
        prev.map((ex, idx) =>
          idx === activeExampleIndex ? { ...ex, likes: ex.likes + 1 } : ex
        )
      );
    } else if (action === 'share') {
      setExamples((prev) =>
        prev.map((ex, idx) =>
          idx === activeExampleIndex ? { ...ex, shares: ex.shares + 1 } : ex
        )
      );
      // Copy URL to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/#${project.id}?work=${currentWork.id}`);
      onShare(currentWork.title[currentLang]);
    } else if (action === 'comment') {
      setShowComments(true);
    }
  };

  const handleActionClick = (action: 'like' | 'share' | 'comment') => {
    if (!verifiedEmail) {
      setPendingAction(action);
      setShowEmailModal(true);
    } else {
      executeAction(action);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !/\S+@\S+\.\S+/.test(emailInput)) return;

    setVerifiedEmail(emailInput);
    setShowEmailModal(false);

    if (pendingAction) {
      if (pendingAction === 'comment' && pendingComment) {
        const nickname = pendingComment.author.trim() || (currentLang === 'ES' ? 'Anónimo' : 'Anonymous');
        const newComment: LocalComment = {
          id: `comment-${Date.now()}`,
          author: nickname,
          text: pendingComment.text.trim(),
          time: currentLang === 'ES' ? 'Ahora' : 'Just now',
        };
        setCommentsList([newComment, ...commentsList]);
        setExamples((prev) =>
          prev.map((ex, idx) =>
            idx === activeExampleIndex ? { ...ex, commentsCount: ex.commentsCount + 1 } : ex
          )
        );
        setPendingComment(null);
        setShowComments(true);
      } else {
        executeAction(pendingAction, emailInput);
      }
      setPendingAction(null);
    }
    setEmailInput('');
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    if (!verifiedEmail) {
      setPendingComment({ author: newCommentAuthor, text: newCommentText });
      setPendingAction('comment');
      setShowEmailModal(true);
    } else {
      const nickname = newCommentAuthor.trim() || (currentLang === 'ES' ? 'Anónimo' : 'Anonymous');
      const newComment: LocalComment = {
        id: `comment-${Date.now()}`,
        author: nickname,
        text: newCommentText.trim(),
        time: currentLang === 'ES' ? 'Ahora' : 'Just now',
      };
      setCommentsList([newComment, ...commentsList]);
      setExamples((prev) =>
        prev.map((ex, idx) =>
          idx === activeExampleIndex ? { ...ex, commentsCount: ex.commentsCount + 1 } : ex
        )
      );
      setNewCommentText('');
      setNewCommentAuthor('');
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCtaLabels = (area: string) => {
    switch (area) {
      case 'apps':
        return {
          ES: { primary: 'ver trabajos de App', secondary: 'quiero una App' },
          EN: { primary: 'see App work', secondary: 'I want an App' }
        };
      case 'web':
        return {
          ES: { primary: 'ver trabajos de Web', secondary: 'quiero una Web' },
          EN: { primary: 'see Web work', secondary: 'I want a Web' }
        };
      case 'uxui':
        return {
          ES: { primary: 'ver trabajos de UX/UI', secondary: 'quiero un Diseño UX/UI' },
          EN: { primary: 'see UX/UI work', secondary: 'I want a UX/UI Design' }
        };
      case 'branding':
        return {
          ES: { primary: 'ver trabajos de Branding', secondary: 'quiero un trabajo de Branding' },
          EN: { primary: 'see Branding work', secondary: 'I want a Branding work' }
        };
      case 'textil':
        return {
          ES: { primary: 'ver trabajos de Diseño Textil', secondary: 'quiero un Diseño Textil' },
          EN: { primary: 'see Textile Design work', secondary: 'I want a Textile Design' }
        };
      case 'graphic':
        return {
          ES: { primary: 'ver trabajos de Diseño Gráfico', secondary: 'quiero un Diseño Gráfico' },
          EN: { primary: 'see Graphic Design work', secondary: 'I want a Graphic Design' }
        };
      case 'media':
        return {
          ES: { primary: 'ver trabajos de Media', secondary: 'quiero un trabajo Multimedia' },
          EN: { primary: 'see Media work', secondary: 'I want a Media Work' }
        };
      default:
        return {
          ES: { primary: 'ver trabajos', secondary: 'quiero uno' },
          EN: { primary: 'see work', secondary: 'I want one' }
        };
    }
  };

  return (
    <section
      id={project.id}
      className="snap-section h-screen max-h-screen relative flex flex-col justify-between overflow-hidden bg-transparent pt-14 pb-3 lg:pt-16 lg:pb-5 border-b border-white/10"
    >

      {/* Grid background overlay with individual project hue */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none z-0" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr ${colors.bg} rounded-full filter blur-[190px] opacity-25 pointer-events-none z-0`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-4 lg:gap-8 py-1 lg:py-0">

        {/* Left: Interactive Artwork & Media Stage */}
        <div className="w-full lg:w-[48%] flex flex-col justify-between gap-2.5 select-none">
          <div
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
            className={`relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-black/60 ${colors.glow} group max-w-sm sm:max-w-md lg:max-w-none mx-auto shadow-2xl`}
          >
            {/* Glowing corner brackets with spring animation */}
            <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`} style={{ borderColor: colors.accent }} />
            <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`} style={{ borderColor: colors.accent }} />
            <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`} style={{ borderColor: colors.accent }} />
            <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`} style={{ borderColor: colors.accent }} />

            {/* Crossfade Media Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={examples[activeExampleIndex].id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
                className="w-full h-full"
              >
                {examples[activeExampleIndex].video ? (
                  <video
                    src={examples[activeExampleIndex].video}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    id={`video-${project.id}`}
                  />
                ) : (
                  <img
                    src={examples[activeExampleIndex].image}
                    alt={examples[activeExampleIndex].title[currentLang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    id={`image-${project.id}`}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Floating Tag */}
            <div className="absolute top-4 left-4 px-3 py-0.5 bg-black/80 backdrop-blur-xl rounded-full border border-white/15 text-[9px] font-mono tracking-widest text-white uppercase z-10 shadow-lg">
              {project.areaLabel[currentLang]}
            </div>

            {/* Hover Action Panel */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: EASE_BOUNCE }}
                onClick={() => handleActionClick('like')}
                className="w-9 h-9 rounded-xl bg-black/85 backdrop-blur-xl border border-white/15 flex flex-col items-center justify-center text-white hover:border-cyber-pink transition-colors shadow-2xl"
                title="Like"
              >
                <Heart className={`w-3.5 h-3.5 ${likedExampleIds.includes(examples[activeExampleIndex].id) ? 'text-cyber-pink fill-cyber-pink' : 'text-white/70'}`} />
                <span className="text-[7px] font-mono font-bold mt-0.5">{examples[activeExampleIndex].likes}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: EASE_BOUNCE }}
                onClick={() => handleActionClick('share')}
                className="w-9 h-9 rounded-xl bg-black/85 backdrop-blur-xl border border-white/15 flex flex-col items-center justify-center text-white hover:border-cyber-blue transition-colors shadow-2xl"
                title="Share"
              >
                <Share2 className="w-3.5 h-3.5 text-white/70" />
                <span className="text-[7px] font-mono font-bold mt-0.5">{examples[activeExampleIndex].shares}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: EASE_BOUNCE }}
                onClick={() => handleActionClick('comment')}
                className="w-9 h-9 rounded-xl bg-black/85 backdrop-blur-xl border border-white/15 flex flex-col items-center justify-center text-white hover:border-cyber-blue transition-colors shadow-2xl"
                title="Comment"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white/70" />
                <span className="text-[7px] font-mono font-bold mt-0.5">{examples[activeExampleIndex].commentsCount}</span>
              </motion.button>
            </div>

            {/* Audio Toggle button */}
            {examples[activeExampleIndex].video && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoMuted(!isVideoMuted);
                }}
                className="absolute bottom-4 left-4 z-20 px-2.5 py-1 rounded-lg border border-white/20 bg-black/75 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all flex items-center gap-1.5 cursor-pointer shadow-xl"
                title={isVideoMuted ? (currentLang === 'ES' ? 'Activar sonido' : 'Unmute') : (currentLang === 'ES' ? 'Desactivar sonido' : 'Mute')}
                id={`volume-toggle-${project.id}`}
              >
                {isVideoMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-cyber-blue animate-pulse" />}
                <span className="text-[8px] font-mono font-bold uppercase">{isVideoMuted ? 'MUTE' : 'AUDIO'}</span>
              </motion.button>
            )}

            {/* View Detail Overlay trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowOverlay(true)}
              className="absolute bottom-4 right-4 z-20 px-3 py-1 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest rounded-lg border border-white/20 bg-black/75 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all flex items-center gap-1 shadow-xl"
              id={`detail-${project.id}`}
            >
              <span>{currentLang === 'ES' ? 'Ver Detalle' : 'View Detail'}</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>

            {/* Detail Overlay */}
            <AnimatePresence>
              {showOverlay && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                  className="absolute inset-0 bg-black/85 backdrop-blur-2xl border border-white/20 rounded-2xl p-5 flex flex-col justify-center text-white z-30"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowOverlay(false);
                    }}
                    className="absolute top-4 right-4 p-1.5 rounded-full border border-white/15 bg-black/60 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer shadow-lg"
                    id={`close-detail-${project.id}`}
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="space-y-2.5 pr-2 max-h-full overflow-y-auto">
                    <span className={`text-[9px] font-mono tracking-widest uppercase font-bold ${colors.text}`}>
                      // {project.areaLabel[currentLang]}
                    </span>
                    <h3 className="font-syne text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                      {examples[activeExampleIndex].title[currentLang]}
                    </h3>
                    <div className="font-sans text-xs text-white/85 font-light leading-relaxed markdown-content">
                      <ReactMarkdown
                        components={{
                          code({ node, className, children }) {
                            return <span className={className}>{children}</span>;
                          },
                          pre({ node, className, children }) {
                            return <div className={className}>{children}</div>;
                          }
                        }}
                      >
                        {examples[activeExampleIndex].description[currentLang]}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Framer Motion layoutId Tab Switcher */}
          <div className="flex flex-row items-center justify-start gap-2 px-1">
            <div className="flex items-center space-x-1.5 flex-wrap gap-y-1.5 bg-white/[0.02] border border-white/10 p-1 rounded-xl">
              {examples.map((ex, idx) => {
                const isActive = idx === activeExampleIndex;
                return (
                  <button
                    key={ex.id}
                    onClick={() => setActiveExampleIndex(idx)}
                    className={`relative px-3 py-1 text-[9px] font-mono uppercase tracking-wider rounded-lg transition-colors duration-300 select-none ${
                      isActive ? 'text-white font-bold' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId={`active-tab-${project.id}`}
                        className={`absolute inset-0 rounded-lg border ${
                          colors.text === 'text-cyber-pink'
                            ? 'bg-cyber-pink/20 border-cyber-pink/50'
                            : 'bg-cyber-blue/20 border-cyber-blue/50'
                        }`}
                        transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                      />
                    )}
                    <span className="relative z-10">{ex.title[currentLang]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Editorial Information & Testimonial Card */}
        <div className="w-full lg:w-[48%] flex flex-col text-left justify-start space-y-3 sm:space-y-4">
          {/* Category Tag */}
          <div className="flex items-center space-x-2">
            <span className={`text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase font-bold ${colors.text}`}>
              // {project.areaLabel[currentLang]}
            </span>
          </div>

          {/* Editorial Title - Responsively scaled to fit 100vh */}
          <h2 className="font-syne text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-[-0.02em] uppercase leading-[1.05] text-balance">
            {project.title[currentLang]}
          </h2>

          {/* Project Body Description */}
          <p className="font-sans text-xs sm:text-sm text-white/75 font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
            {project.description[currentLang]}
          </p>

          {/* Action CTA */}
          <div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ ease: EASE_BOUNCE }}
              onClick={scrollToContact}
              className={`shine-button px-5 py-2.5 font-black uppercase tracking-widest rounded-full transition-all duration-300 text-[10px] sm:text-xs shadow-xl ${
                colors.text === 'text-cyber-pink'
                  ? 'bg-cyber-purple/20 border border-cyber-pink/40 text-white hover:bg-cyber-pink hover:border-cyber-pink'
                  : 'bg-cyber-blue/15 border border-cyber-blue/40 text-white hover:bg-cyber-blue hover:border-cyber-blue'
              }`}
              id={`cta-secondary-${project.id}`}
            >
              {getCtaLabels(project.area)[currentLang].secondary}
            </motion.button>
          </div>

          {/* Testimonial Feature Box */}
          <div className="relative p-3.5 sm:p-4 rounded-2xl glass-panel glass-panel-interactive flex flex-row items-center sm:items-start gap-3.5 overflow-hidden">
            <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${colors.bg} rounded-bl-full opacity-15 pointer-events-none`} />

            {/* Testimonial Avatar */}
            <div className="hidden sm:block w-10 h-10 bg-zinc-900 rounded-xl overflow-hidden border border-white/20 rotate-3 shrink-0 shadow-lg">
              <img
                src={project.testimonial.avatar}
                alt={project.testimonial.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                id={`avatar-${project.id}`}
              />
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex gap-2 items-center">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-cyber-blue">Feedback:</span>
                <span className="px-2 py-0.5 bg-white/10 rounded-full text-[8px] font-mono uppercase font-bold text-white">
                  {project.testimonial.name}
                </span>
              </div>
              <p className="font-sans text-[11px] sm:text-xs text-white/70 italic leading-relaxed line-clamp-2">
                "{project.testimonial.text[currentLang]}"
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Floating Comment Tray Slider Overlay */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/85 backdrop-blur-md z-30 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0e0e16] border border-white/10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
              id={`comment-box-${project.id}`}
            >
              {/* Comment Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className={`w-5 h-5 ${colors.text}`} />
                  <span className="font-display font-bold text-white text-sm md:text-base tracking-wide uppercase">
                    {currentLang === 'ES' ? 'Feed de Opiniones' : 'Project Comments'}
                  </span>
                </div>
                <button
                  onClick={() => setShowComments(false)}
                  className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                  id={`comment-close-${project.id}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Comment List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {commentsList.length === 0 ? (
                  <p className="text-center text-xs text-white/40 font-mono py-8">
                    {t.noCommentsYet}
                  </p>
                ) : (
                  commentsList.map((comm) => (
                    <div key={comm.id} className="p-3 bg-white/5 border border-white/5 rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-white/80">{comm.author}</span>
                        <span className="text-[10px] font-mono text-white/30">{comm.time}</span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed font-light">{comm.text}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Comment Submission form */}
              <form onSubmit={handlePostComment} className="p-4 border-t border-white/5 bg-black/20 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={currentLang === 'ES' ? 'Tu apodo (opcional)...' : 'Your nickname (optional)...'}
                    value={newCommentAuthor}
                    onChange={(e) => setNewCommentAuthor(e.target.value)}
                    className="w-[40%] bg-[#12121e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyber-blue"
                    id={`comment-author-input-${project.id}`}
                  />
                  <input
                    type="text"
                    required
                    placeholder={t.commentPlaceholder}
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="flex-1 bg-[#12121e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyber-blue"
                    id={`comment-text-input-${project.id}`}
                  />
                  <button
                    type="submit"
                    className="px-4 bg-white text-black hover:bg-white/90 rounded-lg flex items-center justify-center transition-colors active:scale-95"
                    id={`comment-submit-${project.id}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Spam Validation Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/85 backdrop-blur-md z-45 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-[#0a0a10] border border-white/15 w-full max-w-sm rounded-2xl p-6 shadow-2xl space-y-4 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/20">
                <Send className="w-5 h-5 text-cyber-blue" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  {currentLang === 'ES' ? 'Validación Antispam' : 'Antispam Validation'}
                </h3>
                <p className="font-metrophobic text-xs text-white/60">
                  {currentLang === 'ES'
                    ? 'Ingresa tu email para registrar tu interacción y validar que no eres un robot.'
                    : 'Please enter your email to register your interaction and verify you are not a bot.'}
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder={currentLang === 'ES' ? 'ejemplo@correo.com' : 'you@example.com'}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-[#12121e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyber-blue text-center"
                />

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailModal(false);
                      setPendingAction(null);
                      setEmailInput('');
                    }}
                    className="flex-1 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    {currentLang === 'ES' ? 'Cancelar' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 py-2 rounded-lg text-xs font-black uppercase text-black ${colors.text === 'text-cyber-pink' ? 'bg-cyber-pink hover:bg-cyber-pink/90' : 'bg-cyber-blue hover:bg-cyber-blue/90'
                      } transition-colors`}
                  >
                    {currentLang === 'ES' ? 'Validar' : 'Validate'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
