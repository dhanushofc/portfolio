"use client";

import React from "react";
import { profileData } from "@/data/profile";
import MangaPanel from "./MangaPanel";

export default function TechStack() {
  const { techStack } = profileData;

  return (
    <section id="techstack" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Chapter header */}
      <div className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-16 w-52">
        CHAPTER 05 // SYSTEM_LOADOUT
      </div>

      {/* Loadout Grid matching layout specification */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {techStack.map((group, index) => (
          <MangaPanel key={index} className="bg-ctp-mantle flex flex-col h-full">
            <div>
              {/* Category Name */}
              <h3 className="font-display text-xs font-bold text-ctp-pink uppercase tracking-wider mb-4 pb-2 border-b border-ctp-overlay0/20">
                {group.category}
              </h3>
              
              {/* Skills List */}
              <ul className="space-y-2 font-mono text-xs text-ctp-subtext0">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-ctp-blue text-[8px]">■</span>
                    <span className="text-ctp-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MangaPanel>
        ))}
      </div>
    </section>
  );
}
