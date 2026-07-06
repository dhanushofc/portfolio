"use client";

import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ctp-base bg-screentone text-ctp-text selection:bg-ctp-blue/20 overflow-x-hidden">
      {/* Dynamic drifting particle overlays */}
      <FloatingParticles />

      {/* Immersive Floating Theme Controller */}
      <ThemeToggle />

      <main className="w-full relative z-10 py-12">
        {/* Scene 1: Hero Scene */}
        <Hero />

        {/* Scene 2: Profile Loadout */}
        <About />

        {/* Scene 3: Experience Arc */}
        <Experience />

        {/* Scene 4: Featured Panels */}
        <Projects />

        {/* Scene 5: System Stack */}
        <TechStack />

        {/* Scene 5.5: System Upgrades (Currently Learning) */}
        <CurrentlyLearning />

        {/* Scene 6: Contact & Credit Roll */}
        <Contact />
      </main>

      {/* Footer credits HUD layout */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 flex items-center justify-between relative z-50 font-mono text-[8px] text-ctp-subtext1 select-none border-t border-ctp-surface1/10">
        <span>© 2026 DHANUSH GINKALA // SYSTEMS ARCHITECT</span>
        <span>COMPILE: SUCCESSFUL</span>
      </footer>
    </div>
  );
}
