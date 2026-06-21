"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomeCTA() {
  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-green/5 dark:bg-brand-green/2 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl glass-panel p-8 md:p-16 border border-slate-200/50 dark:border-brand-green/15 shadow-2xl overflow-hidden bg-gradient-to-r from-slate-100/50 to-slate-200/20 dark:from-[#0B1020]/90 dark:to-[#0f172a]/60"
        >
          {/* Neon side accents */}
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-green opacity-40" />
          <div className="absolute bottom-0 right-0 w-2 h-full bg-brand-blue opacity-40" />

          {/* Sparkle icon */}
          <div className="inline-flex p-3 rounded-full bg-brand-green/10 text-brand-green mb-6 animate-pulse">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Ready to <span className="text-gradient">Shape Your Idea</span>?
          </h2>
          
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed font-medium">
            Talk directly to our lead engineers. Get a technical product roadmap, database feasibility check, and project timeline estimation &mdash; completely free.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openCalendly}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-sm shadow-[0_4px_20px_rgba(74,222,42,0.3)] hover:shadow-[0_6px_28px_rgba(74,222,42,0.4)] hover:scale-103 active:scale-98 transition-all cursor-none flex items-center justify-center gap-2"
            >
              Book Consultation Session
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:live40220@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-all hover:scale-103 active:scale-98 cursor-none flex items-center justify-center gap-1.5"
            >
              live40220@gmail.com
            </a>
          </div>

          {/* Footer note */}
          <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-6 tracking-wide uppercase font-bold">
            No obligation &bull; 100% Confidential NDAs signed on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
