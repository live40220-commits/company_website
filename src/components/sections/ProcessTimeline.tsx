"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Eye, Box, Wrench, Settings, ArrowUpRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your target market, map out engineering bottlenecks, define specific user personas, and draft strict technical requirements.",
    icon: Eye,
    color: "border-brand-green bg-brand-green/5 text-brand-green"
  },
  {
    step: "02",
    title: "Architecture Design",
    desc: "We construct secure database schemas, map serverless backend routes, select cloud endpoints, and choose appropriate LLM/agent layers.",
    icon: Box,
    color: "border-brand-blue bg-brand-blue/5 text-brand-blue"
  },
  {
    step: "03",
    title: "Rapid Prototyping",
    desc: "Within weeks, we deliver a high-fidelity interactive frontend mockup alongside mock backend endpoints to validate user flows.",
    icon: Wrench,
    color: "border-cyan-400 bg-cyan-400/5 text-cyan-400"
  },
  {
    step: "04",
    title: "Production Development",
    desc: "Our senior developers write clean, modular React/TypeScript code, configure CI/CD automations, and integrate custom AI models.",
    icon: Settings,
    color: "border-indigo-400 bg-indigo-400/5 text-indigo-400"
  },
  {
    step: "05",
    title: "Launch & Scalability",
    desc: "We push to production cloud services, configure robust monitoring, audit page latency, and scale bandwidth dynamically as traffic increases.",
    icon: ArrowUpRight,
    color: "border-emerald-400 bg-emerald-400/5 text-emerald-400"
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/3 dark:bg-brand-blue/1 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-black tracking-widest text-brand-green">
            Engineering Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
            How We Shape Your Idea
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            Our systematic software lifecycle turns abstract designs into reliable systems.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          
          {/* Static gray timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
          
          {/* Scrolling active progress indicator line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-green via-brand-blue to-cyan-400 origin-top -translate-x-1/2"
          />

          {/* Timeline steps */}
          <div className="space-y-12">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.step} className="flex flex-col md:flex-row relative">
                  
                  {/* Timeline circle node */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 w-8 h-8 rounded-full border-2 bg-slate-50 dark:bg-[#0B1020] border-slate-350 dark:border-slate-800 z-10 flex items-center justify-center -translate-x-1/2 hover:border-brand-green transition-colors group">
                    <span className="text-[10px] font-black text-slate-400 group-hover:text-brand-green transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Left Side (Even index elements show on left on desktop, odd is spacer) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 ${isEven ? "md:text-right" : "md:opacity-0 md:pointer-events-none md:order-2"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-750 transition-all shadow-md inline-block max-w-md text-left"
                    >
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-4 ${isEven ? "md:mr-0 md:ml-auto" : ""} ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Side (Odd index elements show on right on desktop, even is spacer) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${!isEven ? "" : "md:opacity-0 md:pointer-events-none"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: !isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-750 transition-all shadow-md inline-block max-w-md text-left"
                    >
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-4 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
