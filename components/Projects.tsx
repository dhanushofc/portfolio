"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import MangaPanel from "./MangaPanel";

export default function Projects() {
  const { projects } = profileData;

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Outlined Japanese Katakana SFX - Baan (Dramatic Impact) */}
      <div 
        className="absolute right-12 top-20 font-display text-5xl font-black text-transparent select-none rotate-[-12deg] opacity-25 pointer-events-none tracking-widest hidden md:block"
        style={{ WebkitTextStroke: "1px var(--ctp-sky)" }}
      >
        バーン!
      </div>

      {/* Chapter header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-16 w-52"
      >
        SCENE 04 // FEATURED_PROJECTS
      </motion.div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <MangaPanel key={index} className="bg-ctp-mantle flex flex-col h-full justify-between">
            <div className="relative z-10">
              {/* Manga Panel Label */}
              <div className="font-mono text-[10px] uppercase text-ctp-pink font-semibold tracking-wider mb-2">
                {proj.subtitle}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-ctp-text mb-3">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-ctp-subtext0 mb-6 leading-relaxed font-light">
                {proj.description}
              </p>
            </div>

            <div className="relative z-10">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] px-2 py-0.5 bg-ctp-crust text-ctp-blue rounded border border-ctp-overlay0/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 font-mono text-xs">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-ctp-mauve hover:text-ctp-pink transition-colors duration-200 uppercase font-semibold"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>Repository</span>
                </a>
              </div>
            </div>
          </MangaPanel>
        ))}
      </div>
    </section>
  );
}
