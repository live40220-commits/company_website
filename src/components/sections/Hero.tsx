"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Play, Cpu, ShieldAlert, Zap } from "lucide-react";

const rotatingText = [
  "Agentic AI Solutions",
  "Premium SaaS Platforms",
  "High-Performance Mobile Apps",
  "Cloud & DevOps Architecture",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingText.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <section className="relative min-h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-green/8 dark:bg-brand-green/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/8 dark:bg-brand-blue/4 blur-3xl pointer-events-none" />
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Brand content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          
          {/* Top Pill Alert */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-slate-350 dark:border-brand-green/20 text-xs text-slate-800 dark:text-slate-200"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
            </span>
            <span className="font-bold flex items-center gap-1">
              Next-Gen Dev Agency <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            </span>
          </motion.div>

          {/* Main Title Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            We Engineer <br className="hidden sm:inline" />
            <span className="h-20 sm:h-24 inline-block text-gradient">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {rotatingText[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed italic"
          >
            &ldquo;Let&apos;s Shape Your Idea&rdquo; &mdash; Turning complex startup concepts and enterprise requirements into industry-defining software products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <button
              onClick={openCalendly}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold rounded-full bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-[0_4px_20px_rgba(74,222,42,0.35)] hover:shadow-[0_6px_28px_rgba(74,222,42,0.45)] hover:scale-103 transition-all active:scale-98 cursor-none flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold rounded-full glass-panel border border-slate-350 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:scale-103 transition-all active:scale-98 cursor-none flex items-center justify-center gap-2"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Right Side: AI Neural Graphic visual */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center"
          >
            {/* Spinning background circles */}
            <div className="absolute inset-0 rounded-full border border-dashed border-brand-green/20 animate-spin" style={{ animationDuration: "35s" }} />
            <div className="absolute inset-8 rounded-full border border-dashed border-brand-blue/15 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
            <div className="absolute inset-16 rounded-full border border-brand-green/10 animate-pulse" />

            {/* Glowing Neural Center Core */}
            <motion.div
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-brand-green/20 to-brand-blue/20 backdrop-blur-md flex items-center justify-center border border-brand-green/30 shadow-[0_0_50px_rgba(74,222,42,0.2)]"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 40px rgba(74,222,42,0.15)",
                  "0 0 60px rgba(52,152,219,0.3)",
                  "0 0 40px rgba(74,222,42,0.15)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu className="w-10 h-10 sm:w-14 sm:h-14 text-brand-green animate-pulse" />
            </motion.div>

            {/* Floating Glass Component Cards */}
            <motion.div
              className="absolute -top-4 -right-2 glass-panel p-3 rounded-xl border border-brand-green/20 shadow-lg flex items-center gap-2.5"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-1.5 rounded-lg bg-brand-green/10 text-brand-green">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold">
                <span className="text-slate-400 block font-normal">AI Agents</span>
                <span>Self-Refinement Active</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 -left-6 glass-panel p-3 rounded-xl border border-brand-blue/20 shadow-lg flex items-center gap-2.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="p-1.5 rounded-lg bg-brand-blue/10 text-brand-blue">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold">
                <span className="text-slate-400 block font-normal">RAG Indexing</span>
                <span>Vectors Syncing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
