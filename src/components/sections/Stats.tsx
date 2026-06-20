"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  desc: string;
}

function Counter({ value, suffix, label, desc }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const incrementTime = Math.max(10, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-brand-green/5 shadow-md relative group hover:scale-[1.02] transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-baseline">
        <span className="text-gradient">{count}</span>
        <span className="text-brand-blue font-extrabold">{suffix}</span>
      </span>
      
      <span className="text-sm font-bold mt-2.5 text-slate-800 dark:text-slate-200 uppercase tracking-wider">
        {label}
      </span>
      
      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 max-w-[200px] leading-relaxed">
        {desc}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 relative z-10 px-4 sm:px-6 lg:px-8 bg-slate-100/30 dark:bg-[#080d1a]/20 border-y border-slate-250/30 dark:border-slate-850/30">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <Counter
          value={150}
          suffix="+"
          label="Projects Delivered"
          desc="Web applications, SaaS backends, and AI pipelines launched successfully."
        />
        <Counter
          value={99}
          suffix="%"
          label="Client Satisfaction"
          desc="Startups and enterprises returning to scale their products with us."
        />
        <Counter
          value={10}
          suffix="M+"
          label="AI Requests Run"
          desc="High-load API predictions, agents, and RAG vector searches executed."
        />
        <Counter
          value={25}
          suffix="+"
          label="Tech Experts"
          desc="Senior developers, AI engineers, and Cloud architects on demand."
        />
      </div>
    </section>
  );
}
