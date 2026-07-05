"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const { name, roleLine, tagline, links } = profileData;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-screentone overflow-hidden">
      {/* Background ambient auric glow - slow pulse */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-ctp-mauve/15 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-ctp-blue/12 blur-[100px] animate-glow-pulse pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        {/* Monospace Scene Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-10 w-48 text-center"
        >
          SCENE 01 // INTRO_SEQ
        </motion.div>

        {/* Manga-inspired Name Panel Frame */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-8 py-5 mb-8 manga-border bg-ctp-crust/40 rounded-md skew-x-[-1.5deg] shadow-[6px_6px_0px_var(--ctp-overlay0)]"
        >
          <div className="absolute inset-0 bg-halftone opacity-10 rounded-md pointer-events-none" />
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ctp-text">
            {name}
          </h1>
        </motion.div>

        {/* Subtitle / Role Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-xs sm:text-sm md:text-base text-ctp-blue font-semibold mb-6 tracking-wider uppercase"
        >
          {roleLine}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-sans text-lg sm:text-xl md:text-2xl text-ctp-subtext0 max-w-2xl mb-12 leading-relaxed font-light"
        >
          {tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 font-display font-medium bg-ctp-blue text-ctp-crust hover:bg-ctp-blue/90 rounded-md transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-display font-medium bg-ctp-mantle manga-border hover:bg-ctp-crust rounded-md transition-all duration-200 hover:-translate-y-0.5 text-ctp-text"
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
            className="flex items-center gap-2 px-6 py-3 font-display font-medium bg-ctp-mantle manga-border hover:bg-ctp-crust rounded-md transition-all duration-200 hover:-translate-y-0.5 text-ctp-text"
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
            className="flex items-center gap-2 px-6 py-3 font-display font-medium bg-ctp-mantle manga-border hover:bg-ctp-crust rounded-md transition-all duration-200 hover:-translate-y-0.5 text-ctp-text"
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
