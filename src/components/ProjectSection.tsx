import React, { useState, useEffect } from 'react';
import { Project, Language } from '../types';
import { dict } from '../data';
import { Heart, Share2, MessageSquare, ArrowRight, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  // Carousel/Tabs system states
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [examples, setExamples] = useState(project.examples);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  // Auto rotation effect (every 2 seconds, stops on hover)
  useEffect(() => {
    if (isAutoplayPaused) return;
    const interval = setInterval(() => {
      setActiveExampleIndex((prev) => (prev + 1) % project.examples.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [project.examples.length, isAutoplayPaused]);

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
      case 'graphic':
      case 'textil':
        return {
          glow: 'glow-pink', // maps to magenta in index.css
          text: 'text-cyber-pink', // maps to magenta in index.css
          bg: 'from-cyber-pink/10 to-transparent',
          border: 'border-cyber-pink/20 hover:border-cyber-pink',
          accent: '#ff00ff',
        };
      case 'web':
      case 'branding':
      case 'media':
      default:
        return {
          glow: 'glow-blue', // maps to blue in index.css
          text: 'text-cyber-blue', // maps to blue in index.css
          bg: 'from-cyber-blue/10 to-transparent',
          border: 'border-cyber-blue/20 hover:border-cyber-blue',
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
          ES: {
            primary: 'ver trabajos de App',
            secondary: 'quiero una App'
          },
          EN: {
            primary: 'see App work',
            secondary: 'I want an App'
          }
        };
      case 'web':
        return {
          ES: {
            primary: 'ver trabajos de Web',
            secondary: 'quiero una Web'
          },
          EN: {
            primary: 'see Web work',
            secondary: 'I want a Web'
          }
        };
      case 'branding':
        return {
          ES: {
            primary: 'ver trabajos de Branding',
            secondary: 'quiero un Branding'
          },
          EN: {
            primary: 'see Branding work',
            secondary: 'I want Branding'
          }
        };
      case 'textil':
        return {
          ES: {
            primary: 'ver trabajos de Diseño Textil',
            secondary: 'quiero un Diseño Textil'
          },
          EN: {
            primary: 'see Textile Design work',
            secondary: 'I want a Textile Design'
          }
        };
      case 'graphic':
        return {
          ES: {
            primary: 'ver trabajos de Diseño Gráfico',
            secondary: 'quiero un Diseño Gráfico'
          },
          EN: {
            primary: 'see Graphic Design work',
            secondary: 'I want a Graphic Design'
          }
        };
      case 'media':
        return {
          ES: {
            primary: 'ver trabajos de Media',
            secondary: 'quiero un Media'
          },
          EN: {
            primary: 'see Media work',
            secondary: 'I want Media'
          }
        };
      default:
        return {
          ES: {
            primary: 'ver trabajos',
            secondary: 'quiero uno'
          },
          EN: {
            primary: 'see work',
            secondary: 'I want one'
          }
        };
    }
  };

  // Split title helper simplified to render solid text title without outline
  const renderSplitTitle = (title: string) => {
    return (
      <span className="block font-display text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-white tracking-tighter uppercase leading-[0.95]">
        {title}
      </span>
    );
  };

  return (
    <section
      id={project.id}
      className="snap-section min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#050505] pt-12 pb-4 lg:pt-20 lg:pb-6 border-b border-white/10"
    >
      {/* Grid background overlay with individual project hue */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none z-0" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr ${colors.bg} rounded-full filter blur-[180px] opacity-20 pointer-events-none z-0`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-3 py-4 lg:py-0">

        {/* Left: Beautiful Design Asset Thumbnail Panel */}
        <div className="w-full lg:w-[50%] flex flex-col justify-between gap-3 select-none">
          <div
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
            className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/40 ${colors.glow} group max-w-md lg:max-w-none mx-auto`}
          >
            {/* Glowing corner brackets */}
            <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 opacity-60 group-hover:opacity-100 transition-opacity`} style={{ borderColor: colors.accent }} />
            <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 opacity-60 group-hover:opacity-100 transition-opacity`} style={{ borderColor: colors.accent }} />
            <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 opacity-60 group-hover:opacity-100 transition-opacity`} style={{ borderColor: colors.accent }} />
            <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 opacity-60 group-hover:opacity-100 transition-opacity`} style={{ borderColor: colors.accent }} />

            {/* Main project high res mockup */}
            <img
              src={examples[activeExampleIndex].image}
              alt={examples[activeExampleIndex].title[currentLang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              id={`image-${project.id}`}
            />

            {/* Glowing visual tag overlay */}
            <div className="absolute top-6 left-6 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono tracking-widest text-white uppercase z-10">
              {project.areaLabel[currentLang]}
            </div>

            {/* Right-aligned overlay action panel visible on hover */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              {/* Like Icon */}
              <button
                onClick={() => handleActionClick('like')}
                className="w-10 h-10 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-white hover:border-cyber-pink hover:scale-110 active:scale-95 transition-all shadow-xl"
                title="Like"
              >
                <Heart className={`w-4 h-4 ${likedExampleIds.includes(examples[activeExampleIndex].id) ? 'text-cyber-pink fill-cyber-pink' : 'text-white/60'}`} />
                <span className="text-[8px] font-mono font-bold mt-0.5">{examples[activeExampleIndex].likes}</span>
              </button>

              {/* Share Icon */}
              <button
                onClick={() => handleActionClick('share')}
                className="w-10 h-10 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-white hover:border-cyber-blue hover:scale-110 active:scale-95 transition-all shadow-xl"
                title="Share"
              >
                <Share2 className="w-4 h-4 text-white/60" />
                <span className="text-[8px] font-mono font-bold mt-0.5">{examples[activeExampleIndex].shares}</span>
              </button>

              {/* Comments/Sms Icon */}
              <button
                onClick={() => handleActionClick('comment')}
                className="w-10 h-10 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-white hover:border-cyber-blue hover:scale-110 active:scale-95 transition-all shadow-xl"
                title="Comment"
              >
                <MessageSquare className="w-4 h-4 text-white/60" />
                <span className="text-[8px] font-mono font-bold mt-0.5">{examples[activeExampleIndex].commentsCount}</span>
              </button>
            </div>

            {/* Detail Access Button positioned absolutely over the image */}
            <button
              onClick={() => alert(currentLang === 'ES' ? 'El detalle del trabajo se creará en una etapa posterior.' : 'Work detail page will be created in a later stage.')}
              className="absolute bottom-6 right-6 z-20 px-3 py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest rounded-lg border border-white/20 bg-black/70 text-white hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
              id={`detail-${project.id}`}
            >
              <span>{currentLang === 'ES' ? 'Ver Detalle' : 'View Detail'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Carousel Solapas */}
          <div className="mt-2 flex flex-row items-center justify-start gap-3 px-2">
            {/* Solapas (Tabs) */}
            <div className="flex items-center space-x-2 flex-wrap gap-y-2">
              {examples.map((ex, idx) => {
                const isActive = idx === activeExampleIndex;
                return (
                  <button
                    key={ex.id}
                    onClick={() => setActiveExampleIndex(idx)}
                    className={`px-3 py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider rounded-lg border transition-all duration-300 ${isActive
                        ? colors.text === 'text-cyber-pink'
                          ? 'bg-cyber-pink/20 border-cyber-pink text-white font-bold'
                          : 'bg-cyber-blue/20 border-cyber-blue text-white font-bold'
                        : 'bg-black/40 border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                      }`}
                  >
                    {ex.title[currentLang]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Dynamic Work Info, testimonial & action CTAs */}
        <div className="w-full lg:w-[45%] flex flex-col text-left justify-between gap-3 lg:space-y-6 flex-1 lg:flex-none">
          <div className="space-y-1 sm:space-y-2">
            {/* Tech tag */}
            <span className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase font-bold ${colors.text}`}>
              // {project.areaLabel[currentLang]}
            </span>
            {/* Project title styled with outline text-stroke */}
            {renderSplitTitle(project.title[currentLang])}
          </div>

          {/* Description */}
          <p className="font-metrophobic text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed italic line-clamp-2 sm:line-clamp-none">
            "{project.description[currentLang]}"
          </p>

          {/* User Opinion (Testimonial Card) - beautifully structured, stylized */}
          <div className="relative p-3.5 sm:p-5 rounded-xl bg-[#0a0a0a] border border-white/10 backdrop-blur-md overflow-hidden flex flex-row items-center sm:items-start gap-3 sm:gap-4 shadow-xl">
            {/* Gradient background touch */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${colors.bg} rounded-bl-full opacity-10 pointer-events-none`} />

            {/* Testimonial avatar - rotated aesthetic */}
            <div className="hidden sm:block w-12 h-12 bg-zinc-800 rounded-xl overflow-hidden border border-white/20 rotate-3 shrink-0">
              <img
                src={project.testimonial.avatar}
                alt={project.testimonial.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                id={`avatar-${project.id}`}
              />
            </div>

            <div className="space-y-1 sm:space-y-2 flex-1">
              <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-cyber-blue">Feedback de:</span>
                <span className="px-1.5 py-0.5 bg-white/10 rounded text-[8px] sm:text-[9px] uppercase font-bold tracking-tighter text-white">
                  {project.testimonial.name}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/60 italic leading-relaxed line-clamp-2 sm:line-clamp-none">
                "{project.testimonial.text[currentLang]}"
              </p>
            </div>
          </div>

          {/* Action CTAs: Primary and Secondary styles */}
          <div className="flex flex-row gap-3">
            <button
              onClick={() => window.open('https://behance.net/dmmonzon82', '_blank')}
              className={`px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-black uppercase tracking-widest rounded-full shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 text-[10px] sm:text-xs ${colors.text === 'text-cyber-pink'
                  ? 'hover:bg-cyber-pink hover:text-white'
                  : 'hover:bg-cyber-blue hover:text-white'
                }`}
              id={`cta-primary-${project.id}`}
            >
              {getCtaLabels(project.area)[currentLang].primary}
            </button>
            <button
              onClick={scrollToContact}
              className={`px-4 py-2 sm:px-6 sm:py-3 font-black uppercase tracking-widest rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 text-[10px] sm:text-xs ${colors.text === 'text-cyber-pink'
                  ? 'bg-cyber-purple/20 border border-cyber-pink/30 text-white hover:border-cyber-pink hover:bg-cyber-pink hover:shadow-[0_0_20px_rgba(204,0,204,0.3)]'
                  : 'bg-cyber-blue/10 border border-cyber-blue/30 text-white hover:border-cyber-blue hover:bg-cyber-blue hover:shadow-[0_0_20px_rgba(96,140,255,0.3)]'
                }`}
              id={`cta-secondary-${project.id}`}
            >
              {getCtaLabels(project.area)[currentLang].secondary}
            </button>
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
