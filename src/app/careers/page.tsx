"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, Sparkles, Heart, Monitor, BookOpen, X, Check } from "lucide-react";

interface Job {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  salary: string;
  requirements: string[];
}

const openJobs: Job[] = [
  {
    id: "ai-eng",
    title: "Senior AI / Machine Learning Engineer",
    dept: "Artificial Intelligence",
    location: "Remote (Global) / Lahore",
    type: "Full-Time",
    salary: "$90,000 - $120,000 / Yr",
    requirements: [
      "3+ years experience orchestrating multi-agent systems and fine-tuning LLMs.",
      "Expert knowledge of vector storage (Qdrant, Pinecone) and RAG setups.",
      "Proficient in Python, FastAPI, PyTorch, and LangChain."
    ]
  },
  {
    id: "fs-dev",
    title: "Senior Full-Stack Developer (Next.js)",
    dept: "Web Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$80,000 - $105,000 / Yr",
    requirements: [
      "4+ years experience building complex production web dashboards.",
      "Deep understanding of React 19, Next.js App Router, SSR, and tailwind configurations.",
      "Knowledge of PostgreSQL, Redis, Stripe subscription syncs, and Node.js."
    ]
  },
  {
    id: "devops-arch",
    title: "Lead Cloud & DevOps Architect",
    location: "Remote (Global) / Silicon Valley",
    dept: "Infrastructure",
    type: "Full-Time",
    salary: "$95,000 - $130,000 / Yr",
    requirements: [
      "5+ years hosting scalable cloud architectures on Amazon AWS/GCP.",
      "Mastery of Docker container configuration and Kubernetes (EKS) routing.",
      "Strong skills in Terraform, GitHub Actions CI/CD pipelines, and security setups."
    ]
  }
];

const perks = [
  { icon: Monitor, title: "Modern Setup", desc: "Top-tier Mac hardware configurations and ergonomic setup stipends." },
  { icon: Heart, title: "Health & Care", desc: "Premium health insurance, mental wellness support, and gym memberships." },
  { icon: BookOpen, title: "Learning Budget", desc: "$2,000 annual budget for courses, conferences, and technical books." },
  { icon: Clock, title: "Flexible Autonomy", desc: "Remote-first workflows. Set your own hours as long as sprint checkpoints align." }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formStep, setFormStep] = useState(1); // 1: Form, 2: Success
  const [formData, setFormData] = useState({ name: "", email: "", links: "", cover: "" });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
  };

  return (
    <div className="flex flex-col w-full relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-black tracking-widest text-brand-green">
          Join the Team
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
          Help Us <span className="text-gradient">Shape Digital Futures</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
          We operate as a remote-first, collaborative collective of senior software engineers and machine learning researchers.
        </p>
      </div>

      {/* 2. BENEFITS Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {perks.map((perk, idx) => (
          <div
            key={perk.title}
            className="p-5 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-850 bg-slate-100/30 dark:bg-[#0c1224]/20 flex flex-col gap-4 shadow-sm hover:scale-[1.01] transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
              <perk.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white">{perk.title}</h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 mt-1.5 leading-relaxed font-medium">{perk.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. OPEN OPENINGS LIST */}
      <div>
        <h2 className="text-2xl font-black mb-8 text-slate-900 dark:text-white text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <Briefcase className="w-6 h-6 text-brand-green" /> Open Positions
        </h2>

        <div className="grid gap-6">
          {openJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-3xl glass-panel border border-slate-250/50 dark:border-slate-850 hover:border-slate-400 dark:hover:border-slate-750 bg-slate-100/20 dark:bg-[#0c1224]/30 shadow-md flex flex-col md:flex-row justify-between gap-6"
            >
              {/* Info Column */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-550 dark:text-slate-400 mt-2 font-semibold">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {job.type}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-brand-green" /> {job.salary}</span>
                  </div>
                </div>

                {/* Requirements list */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">Requirements</h4>
                  <ul className="grid gap-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-brand-green font-bold">&bull;</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Column */}
              <div className="flex items-end md:items-start justify-end">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setFormStep(1);
                    setFormData({ name: "", email: "", links: "", cover: "" });
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white text-xs font-bold shadow-md hover:scale-103 transition-transform cursor-none whitespace-nowrap"
                >
                  Apply Now &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. APPLICATION FORM MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-[#060914]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-md rounded-3xl glass-panel border border-slate-200 dark:border-brand-green/10 p-6 md:p-8 shadow-2xl z-10 overflow-y-auto max-h-[85vh] text-slate-800 dark:text-slate-200"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:text-rose-500 transition-colors cursor-none"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {formStep === 1 ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">
                      Job Application
                    </span>
                    <h2 className="text-lg font-black mt-2 leading-snug">
                      {selectedJob.title}
                    </h2>

                    <form onSubmit={handleApply} className="grid gap-4 mt-6">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alice Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. alice@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                          LinkedIn or GitHub URL
                        </label>
                        <input
                          type="url"
                          required
                          placeholder="e.g. https://github.com/alice"
                          value={formData.links}
                          onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                          Resume details / Cover Note
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us briefly about your technical highlights and open-source contributions..."
                          value={formData.cover}
                          onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-md hover:scale-101 transition-transform mt-2 cursor-none"
                      >
                        Submit Application
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-6 py-6"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green shadow-lg">
                      <Check className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
                        Application Sent!
                      </h2>
                      <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed font-medium">
                        Thanks <strong>{formData.name}</strong>, we have received your application for the <strong>{selectedJob.title}</strong> role.
                      </p>
                    </div>
                    <p className="text-[10px] text-brand-green font-semibold">
                      Our hiring board will follow up at {formData.email} in 3 working days.
                    </p>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-[10px] font-bold cursor-none"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
