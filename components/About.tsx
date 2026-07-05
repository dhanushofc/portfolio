"use client";

import React from "react";
import { profileData } from "@/data/profile";
import MangaPanel from "./MangaPanel";

export default function About() {
  const { bio, education, certifications } = profileData;

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Chapter header */}
      <div className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-12 w-56">
        CHAPTER 02 // CHARACTER_PROFILE
      </div>

      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Column 1: Profile Loadout */}
        <MangaPanel className="bg-ctp-crust h-full flex flex-col justify-between">
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

        {/* Column 2: Factual Summary / Bio */}
        <MangaPanel className="bg-ctp-surface0/30 h-full flex flex-col justify-between">
          <div>
            <h3 className="font-display text-sm font-bold text-ctp-blue mb-6 uppercase tracking-wider">
              Bio Summary
            </h3>
            <p className="font-sans text-ctp-subtext0 text-sm leading-relaxed font-light mb-6">
              {bio}
            </p>
          </div>
          <div className="border-t border-ctp-overlay0/20 pt-4 mt-auto">
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
            </ul>
          </div>
        </MangaPanel>

        {/* Column 3: Certifications Arc */}
        <MangaPanel className="bg-ctp-crust h-full flex flex-col justify-between">
          <div>
            <h3 className="font-display text-sm font-bold text-ctp-blue mb-6 uppercase tracking-wider">
              Certifications Arc
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="border-b border-ctp-overlay0/10 pb-3 last:border-0 last:pb-0">
                  <div className="font-sans text-[11px] text-ctp-text font-semibold leading-snug">
                    {cert.title}
                  </div>
                  <div className="font-mono text-[9px] text-ctp-subtext0 mt-1.5 font-light">
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
