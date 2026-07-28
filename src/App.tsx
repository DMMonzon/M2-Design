import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { projectsData, dict } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Check } from 'lucide-react';

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
    // Copy mockup link to clipboard
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
    }, 4000);
  };

  // Setup intersection observer to track which section is currently active
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
          rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies center 50% of screen
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

  const allSections = [
    { id: 'hero', label: { ES: 'Inicio', EN: 'Home' } },
    ...projectsData.map((p) => ({ id: p.id, label: p.areaLabel })),
    { id: 'contact', label: { ES: 'Contacto', EN: 'Contact' } },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-cyber-pink selection:text-white">
      {/* Absolute top grid background */}
      <div className="absolute inset-x-0 top-0 h-[800px] grid-overlay opacity-25 pointer-events-none" />

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
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a]/95 border border-cyber-blue/30 px-6 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 backdrop-blur-md glow-blue"
            id="toast-notification"
          >
            <div className="w-6 h-6 rounded-full bg-cyber-blue/10 flex items-center justify-center">
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
