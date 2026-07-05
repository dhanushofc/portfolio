"use client";

import React, { useState, useRef } from "react";
import { motion, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface MangaPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function MangaPanel({ children, className = "" }: MangaPanelProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Springs for smooth 3D tilt transitions
  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });

  // Sheen coordinates
  const sheenX = useSpring(50, { stiffness: 120, damping: 20 });
  const sheenY = useSpring(50, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Position of cursor relative to center of card (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Calculate rotation (Max rotation 25deg for a stronger 3D tilt)
    rotateX.set(-y * 25);
    rotateY.set(x * 25);

    // Sheen positions
    sheenX.set(((e.clientX - rect.left) / rect.width) * 100);
    sheenY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    sheenX.set(50);
    sheenY.set(50);
  };

  // Move a light radial sheen following the cursor
  const backgroundSheen = useTransform(
    [sheenX, sheenY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(203, 166, 247, 0.12) 0%, transparent 60%)`
  );

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative overflow-hidden bg-ctp-surface0/60 border border-ctp-surface1/50 hover:border-ctp-mauve/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] h-full ${className}`}
      >
        {/* Corner Brackets HUD floating in 3D (translateZ 25px) */}
        <span 
          style={{ transform: "translateZ(25px)" }}
          className="absolute top-2 left-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200"
        >
          ┌
        </span>
        <span 
          style={{ transform: "translateZ(25px)" }}
          className="absolute top-2 right-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200"
        >
          ┐
        </span>
        <span 
          style={{ transform: "translateZ(25px)" }}
          className="absolute bottom-2 left-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200"
        >
          └
        </span>
        <span 
          style={{ transform: "translateZ(25px)" }}
          className="absolute bottom-2 right-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200"
        >
          ┘
        </span>

        {/* Halftone screentone texture overlay on hover */}
        <div className="absolute inset-0 bg-halftone opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
        
        {/* Dynamic Mouse-tracking Sheen Overlay */}
        <motion.div 
          style={{ backgroundImage: backgroundSheen, transform: "translateZ(10px)" }}
          className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Ambient background glow border */}
        <div className="absolute -inset-px bg-gradient-to-r from-ctp-blue via-ctp-mauve to-ctp-pink opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm pointer-events-none z-0" />

        {/* Content wrapper with translate-z for strong 3D layering (translateZ 45px) */}
        <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
