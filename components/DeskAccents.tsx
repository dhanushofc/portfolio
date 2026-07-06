"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DeskAccentsProps {
  page: number;
}

export default function DeskAccents({ page }: DeskAccentsProps) {
  const [triggerHand, setTriggerHand] = useState<"next" | "prev" | null>(null);
  const prevPageRef = useRef(page);

  useEffect(() => {
    if (page > prevPageRef.current) {
      setTriggerHand("next");
      const timer = setTimeout(() => setTriggerHand(null), 750);
      return () => clearTimeout(timer);
    } else if (page < prevPageRef.current) {
      setTriggerHand("prev");
      const timer = setTimeout(() => setTriggerHand(null), 750);
      return () => clearTimeout(timer);
    }
    prevPageRef.current = page;
  }, [page]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 preserve-3d select-none">
      
      {/* Halftone Screen-Tone Film Sheet sticking out under bottom left of book */}
      <div 
        className="absolute bottom-12 left-10 w-64 h-80 bg-ctp-surface0/40 border border-ctp-overlay0/20 rounded-md rotate-[-8deg] shadow-md hidden lg:block"
        style={{ transform: "translateZ(-30px) rotate(-8deg)" }}
      >
        <div className="absolute inset-0 bg-halftone opacity-20" />
        <span className="absolute bottom-3 left-4 font-mono text-[9px] text-ctp-subtext1 tracking-wider uppercase">
          SCREEN_TONE_SHEET // DOT_90L
        </span>
      </div>

      {/* Manga Drafting Sheet margin details sticking out top right of book */}
      <div 
        className="absolute top-10 right-16 w-80 h-96 bg-ctp-surface0/20 border border-ctp-overlay0/10 rounded-sm rotate-[12deg] shadow-sm hidden xl:block"
        style={{ transform: "translateZ(-40px) rotate(12deg)" }}
      >
        <div className="absolute inset-x-6 top-8 bottom-8 border border-dashed border-ctp-overlay0/20" />
        <span className="absolute top-3 left-4 font-mono text-[8px] text-ctp-subtext0 tracking-wider">
          MANUSCRIPT SHEET B4 // 180G
        </span>
      </div>

      {/* G-Pen Ink Bottle on top left */}
      <div 
        className="absolute top-16 left-20 w-16 h-16 bg-ctp-surface1 border-2 border-ctp-overlay0 rounded-lg shadow-lg flex flex-col justify-between p-2 hidden md:flex items-center"
        style={{ transform: "translateZ(20px) rotate(-15deg)" }}
      >
        <div className="w-10 h-3 bg-ctp-overlay0 rounded-sm shadow-inner" />
        <div className="w-full flex-grow bg-ctp-crust/80 rounded-md border border-ctp-surface0/60 mt-1 flex items-center justify-center font-mono text-[8px] text-ctp-pink font-bold">
          INK
        </div>
        <span className="text-[6px] font-mono text-ctp-subtext0 mt-0.5">PILOT_GPEN</span>
      </div>

      {/* Scattered Drafting Pen on bottom right */}
      <div 
        className="absolute bottom-16 right-36 w-32 h-2.5 bg-ctp-mauve rounded-full shadow-md rotate-[45deg] hidden md:block"
        style={{ transform: "translateZ(10px) rotate(45deg)" }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-2 bg-ctp-peach rounded-r-full" />
        <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-1 bg-ctp-text rounded-full" />
      </div>

      {/* Wooden Ruler on bottom edge */}
      <div 
        className="absolute bottom-4 left-1/4 w-96 h-6 bg-ctp-surface0/80 border border-ctp-surface1 rounded-sm shadow-md rotate-[-2deg] hidden xl:block"
        style={{ transform: "translateZ(5px) rotate(-2deg)" }}
      >
        <div className="h-full w-full flex justify-between items-start px-2 py-0.5 opacity-40">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className={`bg-ctp-text ${i % 5 === 0 ? "h-2 w-[1.5px]" : "h-1 w-[1px]"}`} 
            />
          ))}
        </div>
      </div>

      {/* Ink Splatter 1 (Bottom Right Margin) */}
      <div 
        className="absolute bottom-24 right-16 w-8 h-8 bg-ctp-text/80 rounded-full opacity-60 hidden xl:block"
        style={{ 
          transform: "translateZ(-20px)",
          clipPath: "polygon(40% 0%, 80% 20%, 100% 60%, 80% 90%, 30% 100%, 0% 70%, 10% 30%)"
        }}
      />

      {/* Ink Splatter 2 (Top Left Margin) */}
      <div 
        className="absolute top-32 left-16 w-4 h-4 bg-ctp-text/80 rounded-full opacity-60 hidden xl:block"
        style={{ 
          transform: "translateZ(-25px)",
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
        }}
      />

      {/* ANIMATED ANIME HANDS FOR PHYSICAL PAGE TURNING */}
      {/* Right Hand: Reaches in to flip page forward */}
      <motion.svg
        initial={{ x: 300, y: 150, rotate: -25, opacity: 0 }}
        animate={triggerHand === "next" ? {
          x: [300, -100, -450, 300],
          y: [150, 50, -50, 150],
          rotate: [-25, -45, -60, -25],
          opacity: [0, 1, 1, 0]
        } : { x: 300, y: 150, rotate: -25, opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="fixed right-0 top-1/4 w-80 h-80 pointer-events-none z-50 select-none text-ctp-sky"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Outline draw of anime pilot glove / hand turning paper */}
        <path d="M 100 80 C 85 75, 70 70, 55 65 C 48 60, 44 52, 42 42 C 40 32, 32 25, 22 25 C 16 25, 12 28, 14 34 C 16 40, 22 43, 26 43 M 55 65 C 48 68, 40 68, 32 65 C 26 62, 20 62, 16 64 C 12 65, 10 68, 12 72 C 14 76, 22 75, 26 72 M 100 90 L 80 84 M 42 42 L 30 38" />
        {/* Sleeve cuff details */}
        <path d="M 80 84 C 82 78, 85 72, 90 70" />
      </motion.svg>

      {/* Left Hand: Reaches in to flip page backward */}
      <motion.svg
        initial={{ x: -300, y: 150, rotate: 25, opacity: 0 }}
        animate={triggerHand === "prev" ? {
          x: [-300, 100, 450, -300],
          y: [150, 50, -50, 150],
          rotate: [25, 45, 60, 25],
          opacity: [0, 1, 1, 0]
        } : { x: -300, y: 150, rotate: 25, opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="fixed left-0 top-1/4 w-80 h-80 pointer-events-none z-50 select-none text-ctp-sky"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Outline draw of anime hand flipping back */}
        <path d="M 0 80 C 15 75, 30 70, 45 65 C 52 60, 56 52, 58 42 C 60 32, 68 25, 78 25 C 84 25, 88 28, 86 34 C 84 40, 78 43, 74 43 M 45 65 C 52 68, 60 68, 68 65 C 74 62, 80 62, 84 64 C 88 65, 90 68, 88 72 C 86 76, 78 75, 74 72 M 0 90 L 20 84 M 58 42 L 70 38" />
        <path d="M 20 84 C 18 78, 15 72, 10 70" />
      </motion.svg>

    </div>
  );
}
