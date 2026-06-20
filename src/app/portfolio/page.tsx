"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Code, Smartphone, BarChart3, Cloud, X, ArrowUpRight, Check, Award } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "ai" | "web" | "mobile" | "data";
  categoryLabel: string;
  desc: string;
  tech: string[];
  gradient: string;
  challenges: string;
  results: string[];
  feedback: {
    quote: string;
    client: string;
  };
}

const projects: Project[] = [
  {
    id: "ai-chatbot",
    title: "Autonomous Customer Support AI Agent",
    category: "ai",
    categoryLabel: "AI & ML",
    desc: "A multi-agent AI system that reads ticket intent, fetches database invoice parameters, and drafts accurate responses.",
    tech: ["OpenAI GPT-4", "LangChain", "Pinecone", "FastAPI", "Next.js"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    challenges: "Handling nested customer queries and maintaining accurate conversation state when databases returned empty fields.",
    results: [
      "Automated 82% of standard invoice support tickets without human hand-off.",
      "Average ticket resolution time dropped from 4 hours to under 45 seconds.",
      "Synced vector stores with live PostgreSQL database under 500ms latency."
    ],
    feedback: {
      quote: "100Solutionz built a support assistant that actually thinks. It has saved us thousands in support operations.",
      client: "Dr. Sarah Jenkins,VP of AI at Biotech Nexus"
    }
  },
  {
    id: "rag-app",
    title: "Secure Enterprise RAG Knowledge Index",
    category: "ai",
    categoryLabel: "AI & ML",
    desc: "A secure vector search pipeline parsing 50,000 internal documents, spreadsheets, and slides to enable internal team search.",
    tech: ["LlamaIndex", "Qdrant", "Claude 3.5", "Python", "React"],
    gradient: "from-brand-green/20 to-brand-blue/10",
    challenges: "Correctly parsing embedded charts, tables, and images within long PDF documents without data leaks.",
    results: [
      "Mapped semantic index of 50,000 docs with role-based access permissions.",
      "Search results return in under 0.8 seconds with verified citation links.",
      "Reduced duplicate employee research queries by 60%."
    ],
    feedback: {
      quote: "Our research teams find verified document sources instantly now. An outstanding implementation of RAG technology.",
      client: "Arthur Pendelton, CIO at Global Logistics"
    }
  },
  {
    id: "healthcare-ai",
    title: "Computer Vision Tumor Scanner",
    category: "ai",
    categoryLabel: "AI & ML",
    desc: "A computer vision model training workflow designed to segment anomalies in high-resolution radiology scans.",
    tech: ["PyTorch", "OpenCV", "AWS SageMaker", "Docker", "FastAPI"],
    gradient: "from-indigo-500/20 to-purple-500/10",
    challenges: "Overcoming extreme imbalance in training data arrays and setting up a low-latency endpoint on AWS.",
    results: [
      "96.8% accuracy in pixel segmentation models (IOU score of 0.88).",
      "Scan rendering latency under 1.2s using GPU accelerated instances.",
      "Fully HIPAA compliant sandbox pipeline deployment."
    ],
    feedback: {
      quote: "The segmentation model is incredibly precise, speeding up our initial screening workflow significantly.",
      client: "Dr. Elena Rostova, Lead Researcher at MedVision"
    }
  },
  {
    id: "ecom-platform",
    title: "High-Volume Headless E-Commerce System",
    category: "web",
    categoryLabel: "Web Dev",
    desc: "A headless shopify store built for a global luxury brand, syncing inventory across three separate warehouse APIs.",
    tech: ["Next.js", "Stripe", "GraphQL", "PostgreSQL", "Node.js"],
    gradient: "from-brand-blue/20 to-cyan-500/10",
    challenges: "Preventing inventory collision during checkout rushes and maintaining a sub-100ms Page Speed score.",
    results: [
      "Successfully processed 15,000 checkouts per hour during Black Friday rush.",
      "Page load speed scored 99/100 on Google Lighthouse.",
      "Synced inventory updates instantly across warehouse management channels."
    ],
    feedback: {
      quote: "They built a modern shop that load instantly, handles load without server spikes, and has doubled our mobile checkouts.",
      client: "Marcello Russo, CEO at Scribe SaaS"
    }
  },
  {
    id: "mobile-app",
    title: "Offline-First Mobile Payment App",
    category: "mobile",
    categoryLabel: "Mobile Apps",
    desc: "An offline-first digital wallet app allowing local peer-to-peer scanning and payment queue syncing.",
    tech: ["React Native", "SQLite", "Node.js", "GraphQL", "AWS"],
    gradient: "from-cyan-400/20 to-brand-blue/10",
    challenges: "Resolving transaction order conflicts and validating security tokens offline on mobile devices.",
    results: [
      "Reached 100K+ monthly active users within 6 months of launching.",
      "Synced local queue events seamlessly under 1.5s when network restores.",
      "Scored 4.8 stars in Apple App Store and Google Play Store reviews."
    ],
    feedback: {
      quote: "Perfect transaction handling, zero critical runtime failures, and an incredibly slick user interface.",
      client: "Amelie Dubois, Product Director at Fintech Flow"
    }
  },
  {
    id: "dashboard",
    title: "Real-Time Cloud Billing Dashboard",
    category: "data",
    categoryLabel: "Data Science",
    desc: "A data aggregation platform connecting to multiple cloud providers to show real-time cost telemetry.",
    tech: ["React", "D3.js", "BigQuery", "NestJS", "Kubernetes"],
    gradient: "from-amber-500/20 to-orange-500/10",
    challenges: "Rendering charts update streams (1,000 ticks/sec) smoothly without freezing the browser thread.",
    results: [
      "Integrated AWS, GCP, and Azure billing API feeds into one dashboard.",
      "Rendered charts at 60 FPS using virtualized canvas layers.",
      "Helped customers discover $4M+ in unused cloud hardware allocations."
    ],
    feedback: {
      quote: "Our clients save thousands monthly using the cost dashboard. The data rendering speed is exceptional.",
      client: "Viktor Vane, VP of Engineering at ScaleCloud"
    }
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-black tracking-widest text-brand-green">
          Case Studies
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
          Systems We Have <span className="text-gradient">Designed & Launched</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
          Explore our portfolio of scalable web applications, enterprise machine learning pipelines, and responsive mobile interfaces.
        </p>
      </div>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-200 dark:border-slate-800">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {["all", "ai", "web", "mobile", "data"].map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-none border ${
                  isActive
                    ? "text-brand-green border-brand-green/35 bg-brand-green/5"
                    : "text-slate-500 border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                }`}
              >
                {cat === "all" && "All Projects"}
                {cat === "ai" && "AI & ML"}
                {cat === "web" && "Web Dev"}
                {cat === "mobile" && "Mobile Apps"}
                {cat === "data" && "Dashboards"}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search by title or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-200 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-850 focus:outline-none focus:border-brand-green text-slate-800 dark:text-slate-100 cursor-none"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

      </div>

      {/* 3. CASE STUDY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => setSelectedProject(proj)}
              className="group relative rounded-3xl glass-panel p-5 border border-slate-200/50 dark:border-slate-850 hover:border-slate-400 dark:hover:border-slate-700 shadow-md flex flex-col justify-between hover:scale-[1.01] transition-all bg-slate-100/30 dark:bg-[#0c1224]/30 cursor-none"
            >
              <div>
                {/* Visual placeholder graphic block */}
                <div className={`w-full h-36 rounded-2xl bg-gradient-to-br ${proj.gradient} border border-slate-350/20 flex items-center justify-center mb-5 overflow-hidden relative group-hover:scale-[1.01] transition-transform`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_80%)]" />
                  <Award className="w-10 h-10 text-slate-750 dark:text-slate-400 opacity-30 group-hover:opacity-60 transition-opacity" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-black text-brand-green uppercase tracking-widest bg-brand-green/10 border border-brand-green/15 px-2 py-0.5 rounded">
                    {proj.categoryLabel}
                  </span>
                </div>

                <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-brand-green transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-medium line-clamp-3">
                  {proj.desc}
                </p>
              </div>

              {/* Bottom technology tags */}
              <div className="mt-6 pt-4 border-t border-slate-250/30 dark:border-slate-850/50 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] font-bold text-slate-400">
                      #{t}
                    </span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span className="text-[9px] font-bold text-slate-500">
                      +{proj.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 group-hover:text-brand-green transition-colors">
                  View Full Case Study
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-800 rounded-3xl text-sm text-slate-500">
          No projects found matching search terms.
        </div>
      )}

      {/* 4. MODAL DETAILED DRAWER */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#060914]/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-200 dark:border-brand-green/10 p-6 md:p-8 shadow-2xl z-10 overflow-y-auto max-h-[85vh] text-slate-850 dark:text-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:text-rose-500 transition-colors cursor-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Category */}
              <div>
                <span className="text-[9px] font-black text-brand-green uppercase tracking-widest bg-brand-green/10 border border-brand-green/15 px-2 py-1 rounded">
                  {selectedProject.categoryLabel}
                </span>
                <h2 className="text-xl sm:text-2xl font-black mt-3.5 leading-tight">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-slate-250 dark:bg-slate-900 border border-slate-300/30 dark:border-slate-850 text-slate-450 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges Section */}
              <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-850/50">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  The Technical Challenges
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                  {selectedProject.challenges}
                </p>
              </div>

              {/* Results Section */}
              <div className="mt-6">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                  Results Achieved
                </h3>
                <div className="grid gap-2">
                  {selectedProject.results.map((res, i) => (
                    <div key={i} className="flex gap-2.5 text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
                      <div className="w-4 h-4 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      {res}
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Feedback Section */}
              <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-850/50">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Client Feedback
                </h3>
                <blockquote className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mt-2.5 font-bold italic border-l-2 border-brand-green pl-4">
                  &ldquo;{selectedProject.feedback.quote}&rdquo;
                </blockquote>
                <cite className="text-[11px] text-slate-400 not-italic block mt-2 ml-4 font-medium">
                  &mdash; {selectedProject.feedback.client}
                </cite>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-850/50 text-center">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    window.dispatchEvent(new CustomEvent("open-calendly"));
                  }}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-md hover:scale-101 transition-transform cursor-none"
                >
                  Schedule A Similar Project Scope
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
