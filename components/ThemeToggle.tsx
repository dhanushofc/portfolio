"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const hasLightClass = document.documentElement.classList.contains("light");
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light" || (!savedTheme && hasLightClass)) {
      document.documentElement.classList.add("light");
      setIsLight(true);
    } else {
      document.documentElement.classList.remove("light");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("light")) {
      root.classList.remove("light");
      setIsLight(false);
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      setIsLight(true);
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex items-center justify-center p-3 bg-ctp-mantle manga-border rounded-md hover:bg-ctp-crust transition-colors duration-200 cursor-pointer shadow-lg group"
      title={isLight ? "Activate Dark Mode (Mocha)" : "Activate Light Mode (Latte)"}
    >
      {isLight ? (
        <Moon className="w-5 h-5 text-ctp-mauve group-hover:rotate-12 transition-transform duration-200" />
      ) : (
        <Sun className="w-5 h-5 text-ctp-peach group-hover:rotate-45 transition-transform duration-200" />
      )}
    </button>
  );
}
