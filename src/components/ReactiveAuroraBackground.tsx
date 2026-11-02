import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function ReactiveAuroraBackground() {
  // Mouse tracking spring physics for Orb B (Azul Eléctrico / Índigo)
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);

  // Responsive spring configuration for smooth elastic tracking
  const springConfig = { damping: 24, stiffness: 140, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Use capture phase so mousemove is captured over all interactive components
    window.addEventListener('mousemove', handleMouseMove, { capture: true, passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove, { capture: true });
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050507] select-none">
      {/* 1. Base Mesh Gradient Orbs */}
      
      {/* Orb A: Magenta Neón (Floating Idle Loop) */}
      <motion.div
        animate={{
          x: [0, 90, -70, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(217, 38, 169, 0.32) 0%, rgba(217, 38, 169, 0) 70%)',
          willChange: 'transform',
        }}
        className="absolute -top-[15%] -left-[10%] w-[750px] h-[750px] rounded-full blur-[110px]"
      />

      {/* Orb C: Violeta Profundo (Deep Ambient Idle Loop) */}
      <motion.div
        animate={{
          x: [0, -110, 80, 0],
          y: [0, 90, -70, 0],
          scale: [0.95, 1.2, 0.88, 0.95],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(91, 33, 182, 0.28) 0%, rgba(91, 33, 182, 0) 70%)',
          willChange: 'transform',
        }}
        className="absolute bottom-[5%] right-[-5%] w-[850px] h-[850px] rounded-full blur-[120px]"
      />

      {/* Orb D: Subtle Cyan-Blue Accent */}
      <motion.div
        animate={{
          x: [0, 60, -50, 0],
          y: [0, -50, 40, 0],
          scale: [1.1, 0.9, 1.15, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(96, 140, 255, 0.22) 0%, rgba(96, 140, 255, 0) 70%)',
          willChange: 'transform',
        }}
        className="absolute top-[35%] right-[15%] w-[650px] h-[650px] rounded-full blur-[100px]"
      />

      {/* Orb B: Azul Eléctrico / Índigo (Interactive Mouse-Tracking Orb) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(96, 140, 255, 0.45) 0%, rgba(59, 82, 217, 0.35) 45%, rgba(59, 82, 217, 0) 70%)',
          willChange: 'transform',
        }}
        className="absolute w-[750px] h-[750px] rounded-full blur-[85px] z-10"
      />

      {/* 2. Analog Grain / Noise Texture Layer */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay pointer-events-none">
        <filter id="aurora-analog-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-analog-noise)" />
      </svg>
    </div>
  );
}

