"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full glass-panel border border-slate-300 dark:border-brand-green/20 hover:scale-105 active:scale-95 transition-all text-slate-700 dark:text-brand-green overflow-hidden group focus:outline-none"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ y: 20, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Sun className="w-5 h-5 text-amber-400 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Moon className="w-5 h-5 text-brand-blue filter drop-shadow-[0_0_8px_rgba(52,152,219,0.4)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
