"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  "OpenAI",
  "Stripe",
  "Vercel",
  "Linear",
  "Accenture",
  "Amazon AWS",
  "Google Cloud",
  "Meta AI",
];

export default function TrustedBy() {
  // Duplicate array to achieve seamless infinite loop scrolling
  const listItems = [...companies, ...companies];

  return (
    <section className="py-10 border-b border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500">
          Powering Innovators and Trusted by Global Teams
        </span>
      </div>

      {/* Infinite slider wrapper */}
      <div className="flex w-full overflow-hidden select-none mask-gradient">
        <motion.div
          className="flex gap-16 whitespace-nowrap min-w-full"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {listItems.map((comp, idx) => (
            <div
              key={idx}
              className="text-md sm:text-xl font-bold tracking-widest text-slate-400 dark:text-slate-600 hover:text-brand-green dark:hover:text-brand-green/80 transition-colors duration-300 flex items-center justify-center cursor-none"
            >
              {comp}
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
