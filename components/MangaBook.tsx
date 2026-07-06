"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import TechStack from "./TechStack";
import CurrentlyLearning from "./CurrentlyLearning";
import Contact from "./Contact";

// Cover page for the sketchbook's initial sheet
const CoverPage = () => (
  <div className="flex flex-col justify-center items-center h-full text-center px-6 py-12 relative min-h-[500px]">
    <span className="font-mono text-[9px] text-ctp-mauve uppercase tracking-widest mb-4 z-10">// MANUSCRIPT_COVER</span>
    <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ctp-text tracking-wide mb-2 uppercase z-10">
      DHANUSH
    </h2>
    <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ctp-blue tracking-wide mb-6 uppercase z-10">
      GINKALA
    </h2>
    <div className="w-16 h-1 bg-ctp-pink mb-6 z-10" />
    
    <p className="font-mono text-[10px] text-ctp-subtext0 tracking-wider max-w-xs leading-relaxed uppercase z-10">
      Deep Learning & Full-Stack Systems Dossier<br />
      Vol. 01 // 2026 Edition
    </p>

    {/* Halftone circular logo accent */}
    <div className="mt-8 w-24 h-24 rounded-full bg-ctp-surface1/30 relative flex items-center justify-center overflow-hidden z-10">
      <div className="absolute inset-0 bg-halftone opacity-25" />
      <span className="font-mono text-[9px] text-ctp-peach tracking-widest font-bold">VOL_01</span>
    </div>
  </div>
);

interface MangaBookProps {
  spread: number;
}

export default function MangaBook({ spread }: MangaBookProps) {
  // Spreads setup: 8 single pages
  const pages = [
    <CoverPage key={0} />,
    <Hero key={1} />,
    <About key={2} />,
    <Experience key={3} />,
    <Projects key={4} />,
    <TechStack key={5} />,
    <CurrentlyLearning key={6} />,
    <Contact key={7} />,
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-4 relative z-10 preserve-3d">
      
      {/* 3D Sketchbook Canvas Container (The Light Table glowing base underneath) */}
      <div className="w-full relative preserve-3d py-4">
        
        {/* Light Table Backlight Glow */}
        <div className="absolute inset-0 bg-ctp-base/95 rounded-2xl shadow-[0_0_80px_rgba(137,220,235,0.15)] border-2 border-ctp-sky/35 pointer-events-none z-0" />

        {/* Single Page Frame representing solid B4 draft sheet */}
        <div className="w-full bg-ctp-base rounded-2xl relative preserve-3d border border-ctp-surface1/40 min-h-[600px] p-6 sm:p-12 md:p-16 flex flex-col justify-center shadow-2xl">
          
          {/* Non-photo blue border guidelines & ruler ticks */}
          <div className="absolute inset-8 border border-dashed border-ctp-sky/30 pointer-events-none rounded-sm" />
          <div className="manga-ruler-horizontal top-4" />
          <div className="manga-ruler-horizontal bottom-4" />
          <div className="manga-ruler-vertical left-4" />
          <div className="manga-ruler-vertical right-4" />

          {/* Manga Crop Ticks on all 4 corners */}
          <div className="manga-trim-mark-tl" />
          <div className="manga-trim-mark-tr" />
          <div className="manga-trim-mark-bl" />
          <div className="manga-trim-mark-br" />

          {/* Page handwritten metadata on margins */}
          <div className="absolute top-2 left-6 font-mono text-[8px] text-ctp-sky/50 tracking-wider">
            MANUSCRIPT B4 // SCALE: 100% // LINE_WEIGHT: 0.5 G-PEN
          </div>
          <div className="absolute bottom-2 right-6 font-mono text-[8px] text-ctp-sky/50 tracking-wider">
            SCENE_0{spread} // DRAFT_SHEET_0{spread + 1}
          </div>

          {/* Page Contents animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`page-${spread}`}
              initial={{ opacity: 0, rotateY: 15, skewY: -1, originX: "50%" }}
              animate={{ opacity: 1, rotateY: 0, skewY: 0 }}
              exit={{ opacity: 0, rotateY: -15, skewY: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full w-full relative z-10"
            >
              {/* Active speedline action transition layout */}
              <div className="absolute inset-0 bg-speedlines pointer-events-none z-30 opacity-12 rounded-lg" />
              {pages[spread]}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
