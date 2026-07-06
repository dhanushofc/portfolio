"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import MangaPanel from "./MangaPanel";

export default function About() {
  const { education, bio, certifications } = profileData;

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Outlined Japanese Katakana SFX - Baan (Flash Reveal) */}
      <div 
        className="absolute right-12 top-20 font-display text-5xl font-black text-transparent select-none rotate-[10deg] opacity-25 pointer-events-none tracking-widest hidden md:block"
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
        className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-12 w-56"
      >
        SCENE 02 // CHARACTER_PROFILE
      </motion.div>

      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Column 1: Profile Loadout */}
        <MangaPanel className="bg-ctp-crust h-full flex flex-col justify-between p-6">
          <div>
            <h3 className="font-display text-sm font-bold text-ctp-blue mb-6 uppercase tracking-wider">
              Profile Loadout
            </h3>
            
            <div className="space-y-4 font-mono text-xs text-ctp-subtext0">
              <div className="border-b border-ctp-overlay0/20 pb-3">
                <span className="text-ctp-pink font-semibold block uppercase mb-1">Focus</span>
                <span className="text-ctp-text">{education.focus[0]}</span>
              </div>
              <div className="border-b border-ctp-overlay0/20 pb-3">
                <span className="text-ctp-pink font-semibold block uppercase mb-1">Domain</span>
                <span className="text-ctp-text">{education.focus[1]}</span>
              </div>
              <div className="border-b border-ctp-overlay0/20 pb-3">
                <span className="text-ctp-pink font-semibold block uppercase mb-1">Tools</span>
                <span className="text-ctp-text">Python, JavaScript, PyTorch, C++</span>
              </div>
              <div className="border-b border-ctp-overlay0/20 pb-3">
                <span className="text-ctp-pink font-semibold block uppercase mb-1">Institution</span>
                <span className="text-ctp-text">{education.institution}</span>
              </div>
              <div>
                <span className="text-ctp-pink font-semibold block uppercase mb-1">Degree</span>
                <span className="text-ctp-text">{education.degree}</span>
              </div>
            </div>
          </div>
        </MangaPanel>

        {/* Column 2: Bio Summary */}
        <MangaPanel className="bg-ctp-surface0/30 h-full flex flex-col justify-between p-6">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-display text-sm font-bold text-ctp-blue mb-6 uppercase tracking-wider">
                Bio Summary
              </h3>
              
              <div className="space-y-4 font-sans text-ctp-subtext0 text-[13px] leading-relaxed font-light">
                <p>
                  B.Tech CSE graduate from the <strong>ICFAI Foundation for Higher Education (IFHE)</strong> with a focus on deep learning, computer vision, and full-stack software systems.
                </p>
                <p>
                  Experienced in developing advanced Sea Surface Temperature forecasting models at <strong>INCOIS</strong> and contributing mathematical visualization systems to <strong>Skillbanc</strong>.
                </p>
              </div>
            </div>

            <div className="border-t border-ctp-overlay0/20 pt-4 mt-6">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-ctp-peach mb-2 font-semibold">
                // Objectives
              </h4>
              <ul className="list-none space-y-2 font-mono text-[10px] text-ctp-subtext0">
                <li className="flex items-start gap-1">
                  <span className="text-ctp-blue">▶</span>
                  <span>Optimize spatio-temporal ML models.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-ctp-blue">▶</span>
                  <span>Develop cinematic interfaces.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-ctp-blue">▶</span>
                  <span>Maintain open-source deep learning repositories.</span>
                </li>
              </ul>
            </div>
          </div>
        </MangaPanel>

        {/* Column 3: Certifications Arc */}
        <MangaPanel className="bg-ctp-crust h-full flex flex-col justify-between p-6">
          <div>
            <h3 className="font-display text-sm font-bold text-ctp-blue mb-6 uppercase tracking-wider">
              Certifications Arc
            </h3>
            
            {/* Custom styled animated manga-scrollbar container */}
            <div className="space-y-4 max-h-[340px] overflow-y-auto pr-3 manga-scrollbar">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="border-l-2 border-ctp-overlay0/20 pl-3 py-1 hover:border-ctp-blue hover:drop-shadow-[0_0_4px_rgba(137,180,250,0.6)] transition-all duration-150"
                >
                  <div className="font-sans text-[12px] text-ctp-text font-semibold leading-snug">
                    {cert.title}
                  </div>
                  <div className="font-mono text-[9px] text-ctp-subtext0 mt-1 font-light">
                    // {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MangaPanel>

      </div>
    </section>
  );
}
