"use client";

import React from "react";
import { profileData } from "@/data/profile";
import MangaPanel from "./MangaPanel";

export default function Experience() {
  const { experience } = profileData;

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Chapter header */}
      <div className="font-mono text-xs uppercase tracking-widest text-ctp-mauve border-b border-ctp-overlay0 pb-2 mb-16 w-52">
        CHAPTER 03 // EXPERIENCE_ARC
      </div>

      {/* Story Arc Timeline Grid */}
      <div className="relative border-l-2 border-ctp-overlay0/30 ml-4 md:ml-36 space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-ctp-base border-2 border-ctp-blue rounded-full group-hover:bg-ctp-mauve transition-colors duration-200 z-10" />

            {/* Time label on the left (visible on md screens) */}
            <div className="absolute left-[-150px] top-1.5 hidden md:block w-32 text-right font-mono text-xs text-ctp-pink font-semibold">
              {exp.duration}
            </div>

            {/* Content card */}
            <MangaPanel className="bg-ctp-mantle">
              <span className="md:hidden font-mono text-xs text-ctp-pink block mb-2 font-semibold">
                {exp.duration}
              </span>
              <h3 className="font-display text-xl font-bold text-ctp-text">
                {exp.role}
              </h3>
              <p className="font-mono text-xs text-ctp-blue mb-4">
                @{exp.company}
              </p>
              
              <ul className="list-none space-y-2 text-sm text-ctp-subtext0 font-light">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-ctp-mauve mt-1.5 block w-1 h-1 rounded-full bg-current shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-mono text-[10px] text-ctp-mauve hover:text-ctp-pink transition-colors duration-200 uppercase tracking-wider"
                >
                  // View Upstream Repository
                </a>
              )}
            </MangaPanel>
          </div>
        ))}
      </div>
    </section>
  );
}
