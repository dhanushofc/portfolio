"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random values on client mount to prevent SSR mismatches
    const generated = Array.from({ length: 18 }).map((_, idx) => ({
      id: idx,
      left: Math.random() * 100,
      size: Math.random() * 2.5 + 1.2,
      delay: Math.random() * 6,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-ctp-mauve/25 animate-float pointer-events-none"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
