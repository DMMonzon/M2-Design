import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { projectsData, dict } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import ReactiveAuroraBackground from './components/ReactiveAuroraBackground';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { EASE_EDITORIAL, EASE_BOUNCE } from './utils/motion';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ES');
  const [likedProjects, setLikedProjects] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Toggle language (ES/EN)
  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  // Toggle like
  const handleLikeToggle = (projectId: string) => {
    setLikedProjects((prev) => {
      const updated = { ...prev, [projectId]: !prev[projectId] };
      
      // If liked, trigger a quick feedback toast!
      if (updated[projectId]) {
        showToast(dict[currentLang].liked);
      }
      return updated;
    });
  };

  // Handle Copy Link / Share
  const handleShare = (title: string) => {
    const dummyUrl = `${window.location.origin}/#${title.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(dummyUrl).then(() => {
      showToast(dict[currentLang].shared);
    }).catch(() => {
      showToast(currentLang === 'ES' ? 'Error al copiar enlace' : 'Failed to copy link');
    });
  };

  // Show dynamic sliding toast notifications
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  // Setup intersection observer to track active section
  useEffect(() => {
    const sections = ['hero', ...projectsData.map((p) => p.id), 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          root: null,
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050507] text-white selection:bg-cyber-pink selection:text-white font-sans">
      {/* Interactive Mesh Gradient & Aurora Reactiva */}
      <ReactiveAuroraBackground />

      {/* Grid overlay */}
      <div className="absolute inset-x-0 top-0 h-[900px] grid-overlay opacity-20 pointer-events-none" />


      {/* Header element */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        projects={projectsData}
      />

      {/* Main Snap Scrolling Container */}
      <main className="snap-container">
        {/* Section 0: Hero */}
        <Hero currentLang={currentLang} />

        {/* Sections 1-6: Projects */}
        {projectsData.map((project) => (
          <ProjectSection
            key={project.id}
            project={project}
            currentLang={currentLang}
            isLiked={!!likedProjects[project.id]}
            onLikeToggle={handleLikeToggle}
            onShare={handleShare}
          />
        ))}

        {/* Section 7: Contact */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Floating Interactive Toast Feedback Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 40, x: '-50%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: 30, x: '-50%', scale: 0.95 }}
            transition={{ duration: 0.45, ease: EASE_BOUNCE }}
            className="fixed bottom-6 left-1/2 z-50 glass-panel border border-cyber-blue/40 px-6 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 glow-blue"
            id="toast-notification"
          >
            <div className="w-6 h-6 rounded-full bg-cyber-blue/20 flex items-center justify-center border border-cyber-blue/40">
              <Check className="w-3.5 h-3.5 text-cyber-blue" />
            </div>
            <span className="text-xs md:text-sm font-mono text-white tracking-wide font-medium">
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

