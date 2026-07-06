"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const { name, roleLine, tagline, links } = profileData;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background ambient auric glow - slow pulse */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-ctp-mauve/15 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-ctp-blue/12 blur-[100px] animate-glow-pulse pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        {/* Monospace Scene Header - enlarged and bolded */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-10 w-48 text-center"
        >
          SCENE 01 // INTRO_SEQ
        </motion.div>

        {/* Manga-inspired Name Panel Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="relative px-8 py-5 mb-8 manga-border bg-ctp-crust/40 rounded-md skew-x-[-1.5deg] shadow-[6px_6px_0px_var(--ctp-overlay0)]"
        >
          {/* Outlined Japanese Katakana SFX - Gogogo (Rumble) */}
          <div 
            className="absolute -top-12 -right-8 font-display text-5xl sm:text-6xl font-black text-transparent select-none rotate-[15deg] opacity-25 pointer-events-none tracking-widest hidden sm:block"
            style={{ WebkitTextStroke: "1px var(--ctp-sky)" }}
          >
            ゴゴゴ...
          </div>
          <div className="absolute inset-0 bg-halftone opacity-10 rounded-md pointer-events-none" />
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ctp-text">
            {name}
          </h1>
        </motion.div>

        {/* Subtitle / Role Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          className="font-mono text-xs sm:text-sm md:text-base text-ctp-blue font-semibold mb-4 tracking-wider uppercase"
        >
          {roleLine}
        </motion.p>

        {/* Seeking Opportunities Status Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 bg-ctp-green/10 border border-ctp-green/30 rounded-full font-mono text-[10px] text-ctp-green uppercase tracking-widest shadow-sm select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ctp-green animate-pulse" />
          <span>Seeking Full-Time Opportunities</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6, ease: "easeOut" }}
          className="font-sans text-lg sm:text-xl md:text-2xl text-ctp-subtext0 max-w-2xl mb-12 leading-relaxed font-light"
        >
          {tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 font-display font-semibold bg-gradient-to-r from-ctp-blue to-ctp-mauve text-ctp-crust rounded-full hover:shadow-lg hover:shadow-ctp-blue/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-display font-medium bg-ctp-surface0 text-ctp-text border border-ctp-surface1/50 rounded-full hover:border-ctp-mauve/50 hover:shadow-lg hover:shadow-ctp-mauve/10 hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-display font-medium bg-ctp-surface0 text-ctp-text border border-ctp-surface1/50 rounded-full hover:border-ctp-mauve/50 hover:shadow-lg hover:shadow-ctp-mauve/10 hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href={links.email}
            className="flex items-center gap-2 px-6 py-3 font-display font-medium bg-ctp-surface0 text-ctp-text border border-ctp-surface1/50 rounded-full hover:border-ctp-mauve/50 hover:shadow-lg hover:shadow-ctp-mauve/10 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ctp-subtext0"
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-ctp-mauve" />
        </motion.div>
      </motion.div>
    </section>
  );
}
