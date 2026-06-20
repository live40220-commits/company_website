"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Layers } from "lucide-react";

const techCategories = [
  {
    id: "ai",
    label: "AI & Data Science",
    icon: Cpu,
    items: [
      { name: "OpenAI GPT-4", level: "Expert integration" },
      { name: "LangChain", level: "Agent frameworks" },
      { name: "PyTorch", level: "Model training" },
      { name: "Hugging Face", level: "NLP & Vision models" },
      { name: "LlamaIndex", level: "Data ingestion" },
      { name: "Pinecone / Qdrant", level: "Vector databases" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Systems",
    icon: Layers,
    items: [
      { name: "Next.js 15 / 16", level: "App Router / SSR" },
      { name: "React 19", level: "Hooks & Compiler" },
      { name: "TypeScript", level: "Type-safety" },
      { name: "Tailwind CSS v4", level: "Fluid typography" },
      { name: "Framer Motion", level: "Fluid animations" },
      { name: "Redux / Zustand", level: "State management" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Cloud",
    icon: Terminal,
    items: [
      { name: "Python / FastAPI", level: "High-load APIs" },
      { name: "Node.js / NestJS", level: "Enterprise APIs" },
      { name: "Amazon AWS", level: "EKS, Lambda, S3" },
      { name: "Google Cloud (GCP)", level: "Kubernetes, BigQuery" },
      { name: "Docker & K8s", level: "Container systems" },
      { name: "GitHub Actions", level: "Automated CI/CD" },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-black tracking-widest text-brand-blue">
            Our Stack
          </span>
          <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
            High-Performance Technologies
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            We build with standard, scalable, and cutting-edge tools to ensure future-proof stability.
          </p>
        </div>

        {/* Tabs selector */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10">
          {techCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2.5 rounded-full text-xs font-bold transition-colors cursor-none flex items-center gap-1.5 border ${
                  isActive
                    ? "text-brand-green border-brand-green/30 bg-brand-green/5"
                    : "text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tech list render */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {techCategories.find((cat) => cat.id === activeTab)?.items.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-850 hover:border-brand-green/30 transition-all flex flex-col gap-1.5 shadow-sm group hover:scale-[1.01]"
                >
                  <h4 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-brand-green transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    {item.level}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
