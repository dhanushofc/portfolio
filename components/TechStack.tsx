"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import MangaPanel from "./MangaPanel";

export default function TechStack() {
  const { techStack } = profileData;

  return (
    <section id="techstack" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Chapter header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-16 w-52"
      >
        SCENE 05 // SYSTEM_LOADOUT
      </motion.div>

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
