"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import MangaPanel from "./MangaPanel";

export default function CurrentlyLearning() {
  const { currentlyLearning } = profileData;

  const getProgressBar = (progress: number) => {
    const filledCount = Math.round(progress / 10);
    const emptyCount = 10 - filledCount;
    return `[${"■".repeat(filledCount)}${"□".repeat(emptyCount)}] ${progress}%`;
  };

  return (
    <section id="upgrades" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Outlined Japanese Katakana SFX - Pipipi (Compilation Transfer) */}
      <div 
        className="absolute right-12 top-20 font-display text-5xl font-black text-transparent select-none rotate-[-6deg] opacity-25 pointer-events-none tracking-widest hidden md:block"
        style={{ WebkitTextStroke: "1px var(--ctp-sky)" }}
      >
        ピピピ...
      </div>

      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-16 w-56"
      >
        SCENE 05.5 // CURRENT_UPGRADES
      </motion.div>

      {/* Centered Symmetric flex layout of Learning Upgrade Slots */}
      <div className="flex flex-wrap justify-center gap-6">
        {currentlyLearning.map((module, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
            <MangaPanel className="bg-ctp-mantle flex flex-col justify-between h-full">
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
                <div>
                  {/* Module title in mecha status text - wraps naturally */}
                  <h3 className="font-display text-xs font-bold text-ctp-pink uppercase tracking-wide mb-3 leading-normal">
                    MODULE: {module.title.toUpperCase()}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="font-sans text-xs text-ctp-subtext0 mb-6 leading-relaxed font-light">
                    {module.description}
                  </p>
                </div>

                {/* Monospace status loaders */}
                <div className="font-mono text-[9px] text-ctp-blue border-t border-ctp-overlay0/10 pt-3">
                  <span className="block mb-1 text-ctp-mauve">// COMPILATION_IN_PROGRESS</span>
                  <span className="block text-ctp-text tracking-wider">
                    {getProgressBar(module.progress)}
                  </span>
                </div>
              </div>
            </MangaPanel>
          </div>
        ))}
      </div>
    </section>
  );
}
