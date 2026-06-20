"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu, Users } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Integration Expertise",
    desc: "We don't just wrap APIs. We engineer advanced RAG databases, orchestrate autonomous multi-agent pipelines, and fine-tune models to operate efficiently.",
    gridArea: "md:col-span-2",
    accent: "from-brand-green/20 to-emerald-500/5",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Security",
    desc: "We follow industry-best data segregation, secure encryptions, and strict access controls to safeguard critical corporate assets.",
    gridArea: "md:col-span-1",
    accent: "from-brand-blue/20 to-indigo-500/5",
  },
  {
    icon: Zap,
    title: "Accelerated Sprint-Based Dev",
    desc: "We work in rapid two-week agile sprint iterations, providing visible build progress and constant communication channel alignment.",
    gridArea: "md:col-span-1",
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Globe,
    title: "Globally Scalable Frameworks",
    desc: "Every platform we architect uses serverless architectures, microservices, and Kubernetes clustering to easily handle surges from thousands to millions of visitors daily.",
    gridArea: "md:col-span-2",
    accent: "from-cyan-500/20 to-brand-blue/5",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 bg-slate-100/20 dark:bg-[#070b16]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-brand-blue">
            The 100Solutionz Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
            Why Startups and Enterprises Partner With Us
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            We merge software craftsmanship with modern AI capabilities to build software that scales your efficiency.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/50 dark:border-slate-850 hover:border-slate-400 dark:hover:border-slate-700 shadow-md flex flex-col justify-between overflow-hidden transition-all duration-300 ${feat.gridArea}`}
            >
              {/* Dynamic glow background */}
              <div className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br ${feat.accent} blur-3xl opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none`} />

              <div>
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-350 dark:border-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-6 group-hover:text-brand-green group-hover:border-brand-green/30 transition-colors">
                  <feat.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed font-medium">
                  {feat.desc}
                </p>
              </div>

              {/* Decorative accent dot in bottom corner */}
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green absolute bottom-6 right-6 opacity-40 group-hover:scale-150 group-hover:opacity-100 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
