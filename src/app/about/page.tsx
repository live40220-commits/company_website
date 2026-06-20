"use client";

import React from "react";
import { motion as m } from "framer-motion";
import { Sparkles, Target, Compass, Award, Shield, Users } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const values = [
  { icon: Target, title: "Innovation First", desc: "We continually test new frontiers in Agentic AI and edge computing to ensure client codebases remain competitive." },
  { icon: Shield, title: "Uncompromising Integrity", desc: "No cut corners. We sign strict NDAs, use secure infrastructure configurations, and deliver on our promises." },
  { icon: Compass, title: "User-Centric Design", desc: "We believe that software should be intuitive. Every pixel is placed to optimize client retention and satisfaction." },
  { icon: Award, title: "Commitment to Excellence", desc: "We review, refactor, and audit every line of code to maintain premium, maintenance-free, production-grade products." },
];

const team = [
  {
    name: "Rehman Siddiqui",
    role: "Founder & CEO",
    bio: "Ex-technical product manager with 10+ years shaping software initiatives for startups and mid-market enterprises.",
    img: "RS",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Dr. Aris Thorne",
    role: "Chief AI Scientist",
    bio: "PhD in Machine Learning. Specialist in autonomous agent routing, fine-tuning LLMs, and semantic vector indexes.",
    img: "AT",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Sarah Mitchell",
    role: "Lead Full-Stack Architect",
    bio: "Former senior Next.js engineer at Vercel ecosystem partner. Expert in high-performance web applications and databases.",
    img: "SM",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Devrim Yusuf",
    role: "Head of Cloud & DevOps",
    bio: "AWS Certified Solution Architect. Master of kubernetes orchestration, high-availability setups, and zero-downtime CI/CD.",
    img: "DY",
    linkedin: "#",
    github: "#"
  }
];

const history = [
  { year: "2021", title: "Company Founded", desc: "Launched 100Solutionz with a vision to automate complex web services." },
  { year: "25-26", title: "Enterprise Dev Transition", desc: "Expanded services to include native iOS/Android engineering and enterprise clouds." },
  { year: "2026", title: "AI Integration Core", desc: "Pivoted focus to custom agentic AI pipelines, vector DB search indices, and voice assistants." },
];

export default function AboutPage() {
  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <div className="flex flex-col w-full relative z-10">
      
      {/* 1. HERO HEADER */}
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-slate-350 dark:border-brand-green/20 text-xs text-brand-green font-bold mb-4"
        >
          Our Story <Sparkles className="w-3.5 h-3.5" />
        </m.div>
        
        <m.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
        >
          We Bridge Engineering and <span className="text-gradient">Artificial Intelligence</span>
        </m.h1>
        
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          At 100Solutionz, we believe that great ideas deserve world-class execution. We help startups design initial products and assist enterprises in scaling legacy software into modern, AI-augmented architectures.
        </m.p>
      </section>

      {/* 2. COMPANY STORY DETAILS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/50 dark:border-slate-850/50 bg-slate-100/25 dark:bg-[#080d1a]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <m.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
          >
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Born from a Passion for Software Craftsmanship
            </h2>
            <p>
              100Solutionz was created out of a desire to build software without compromises. We saw too many companies struggle with slow agency turnarounds, bloated codebases, and outdated design methodologies.
            </p>
            <p>
              By combining a senior-only technical team with strict sprint delivery schedules, we created an environment where complex integrations (like vector sync engines, real-time streaming, and cross-platform apps) are completed on-time and within budget.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl glass-panel p-8 border border-slate-200/50 dark:border-brand-green/10 shadow-lg relative overflow-hidden bg-slate-100/50 dark:bg-[#0c1224]/30"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-green/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-green" /> Our Core Promise
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              We promise zero layers of management bureaucracy. You work directly with lead engineers. Every feature is thoroughly code-reviewed, fully type-safe, responsive, and ready for deployment.
            </p>
            
            <div className="mt-8">
              <button
                onClick={openCalendly}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white text-xs font-bold shadow-md hover:scale-102 transition-transform cursor-none"
              >
                Meet the Architects
              </button>
            </div>
          </m.div>

        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-brand-blue">
            Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-900 dark:text-white">
            The Values That Drive Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, idx) => (
            <m.div
              key={v.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-850 hover:border-slate-350 dark:hover:border-slate-750 transition-all flex gap-4 bg-slate-100/5 dark:bg-[#0c1224]/10"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300/30 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center flex-shrink-0 group-hover:text-brand-green">
                <v.icon className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-medium">
                  {v.desc}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </section>

      {/* 4. GROWTH HISTORY TIMELINE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/50 dark:border-slate-850/50 bg-slate-100/25 dark:bg-[#080d1a]/15">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase font-black tracking-widest text-brand-green">
              Chronology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-900 dark:text-white">
              Company Milestones
            </h2>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-24 pl-8 md:pl-16 space-y-12">
            {history.map((hist, idx) => (
              <m.div
                key={hist.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Year tag left spacer */}
                <span className="absolute hidden md:inline-block -left-36 top-1 text-base font-black text-brand-green tracking-tight w-24 text-right">
                  {hist.year}
                </span>

                {/* Node indicator */}
                <span className="absolute -left-12.5 md:-left-20 top-1.5 w-5 h-5 rounded-full border border-slate-350 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1020] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                </span>

                {/* Year tag mobile spacer */}
                <span className="inline-block md:hidden text-xs font-black text-brand-green tracking-tight mb-1">
                  {hist.year}
                </span>

                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  {hist.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 leading-relaxed max-w-xl font-medium">
                  {hist.desc}
                </p>
              </m.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TEAM SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-brand-blue">
            Technical Directors
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-900 dark:text-white">
            Meet the Core Team
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
            We are senior engineers, database architects, and AI scientists dedicated to building robust products.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, idx) => (
            <m.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative rounded-2xl glass-panel p-5 border border-slate-200/50 dark:border-slate-850 hover:border-slate-450 dark:hover:border-slate-700 shadow-md flex flex-col justify-between hover:scale-[1.01] transition-all bg-slate-100/50 dark:bg-[#0c1224]/20"
            >
              <div>
                {/* Fake Avatar Initials placeholder with beautiful gradients */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-blue/20 border border-brand-green/10 flex items-center justify-center font-black text-lg text-brand-green mb-5 group-hover:scale-105 transition-transform">
                  {t.img}
                </div>

                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  {t.name}
                </h3>
                <p className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">
                  {t.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3.5 leading-relaxed font-medium line-clamp-3">
                  {t.bio}
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-850/50 text-slate-500">
                <a href={t.linkedin} className="hover:text-brand-green transition-colors cursor-none" aria-label="LinkedIn Profile">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href={t.github} className="hover:text-brand-blue transition-colors cursor-none" aria-label="GitHub Profile">
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </m.div>
          ))}
        </div>
      </section>

      {/* 6. CONVERSION FOOTER BANNER */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Let&apos;s Build Something <span className="text-gradient">Outstanding</span> Together
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed font-medium">
          Have an idea or a specific set of enterprise guidelines? Talk directly to Rehman and our engineering leads to explore solutions.
        </p>
        <div className="mt-8">
          <button
            onClick={openCalendly}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-lg hover:scale-103 transition-transform cursor-none"
          >
            Get Free Consultation Slot
          </button>
        </div>
      </section>

    </div>
  );
}
