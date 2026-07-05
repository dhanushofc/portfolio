"use client";

import React, { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MangaPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function MangaPanel({ children, className = "" }: MangaPanelProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Springs for smooth 3D tilt transitions
  const rotateX = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 });

  // Sheen coordinates
  const sheenX = useSpring(50, { stiffness: 120, damping: 20 });
  const sheenY = useSpring(50, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Position of cursor relative to center of card (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Calculate rotation (Max rotation 12deg)
    rotateX.set(-y * 12);
    rotateY.set(x * 12);

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
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(203, 166, 247, 0.08) 0%, transparent 65%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`group relative overflow-hidden bg-ctp-mantle manga-border p-6 md:p-8 rounded-md transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${className}`}
    >
      {/* Corner Brackets HUD */}
      <span className="absolute top-2 left-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200">┌</span>
      <span className="absolute top-2 right-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200">┐</span>
      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200">└</span>
      <span className="absolute bottom-2 right-2 text-[10px] font-mono text-ctp-overlay0 select-none pointer-events-none group-hover:text-ctp-blue transition-colors duration-200">┘</span>

      {/* Halftone screentone texture overlay on hover */}
      <div className="absolute inset-0 bg-halftone opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
      
      {/* Dynamic Mouse-tracking Sheen Overlay */}
      <motion.div 
        style={{ backgroundImage: backgroundSheen }}
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Ambient background glow border */}
      <div className="absolute -inset-px bg-gradient-to-r from-ctp-blue via-ctp-mauve to-ctp-pink opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm pointer-events-none z-0" />

      {/* Content wrapper with translate-z for 3D card layering */}
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
