"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code, Smartphone, BarChart3, Cloud, Check, Cpu, Terminal, Layers } from "lucide-react";

const serviceDetails = [
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: Sparkles,
    title: "Enterprise Artificial Intelligence & Automation Systems",
    tagline: "Supercharge workflows with semantic indexing, natural dialogue, and autonomous workflows.",
    subServices: [
      { name: "AI Chatbots & Assistants", desc: "Customer support bots that retrieve info, execute actions, and maintain state." },
      { name: "RAG (Retrieval-Augmented Gen) Systems", desc: "Connect LLMs safely to your corporate documentation database without training costs." },
      { name: "Agentic AI Orchestrations", desc: "Multi-agent pipelines that self-correct, plan complex tasks, and run tasks autonomously." },
      { name: "Computer Vision Applications", desc: "Object recognition, image processing, and video analytics for logistics/medical domains." },
      { name: "NLP (Natural Language Processing)", desc: "Entity extraction, sentiment classification, auto-categorization, and data translation." }
    ],
    tech: ["GPT-4o", "Claude 3.5 Sonnet", "LangChain", "Pinecone", "LlamaIndex", "FastAPI"],
    accent: "text-brand-green border-brand-green/30 bg-brand-green/5"
  },
  {
    id: "web",
    label: "Web Development",
    icon: Code,
    title: "Premium Responsive Websites & Custom SaaS Systems",
    tagline: "Scalable frontend structures combined with high-throughput database endpoints.",
    subServices: [
      { name: "SaaS Platform Architectures", desc: "Multi-tenant dashboards, stripe subscription portals, and custom usage trackers." },
      { name: "Business Websites", desc: "Highly polished promotional landing pages with visual effects, fast load speeds, and complete SEO." },
      { name: "E-Commerce Solutions", desc: "Custom checkout systems, multi-currency support, order sync channels, and headless Shopify engines." }
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Node.js", "PostgreSQL"],
    accent: "text-brand-blue border-brand-blue/30 bg-brand-blue/5"
  },
  {
    id: "mobile",
    label: "Mobile Development",
    icon: Smartphone,
    title: "High-Performance iOS & Android Mobile Apps",
    tagline: "Fluid gesture tracking, offline synchronization, and native ecosystem integrations.",
    subServices: [
      { name: "Native iOS Engineering", desc: "SwiftUI-based applications optimized for Apple performance, widgets, and push syncs." },
      { name: "Native Android Engineering", desc: "Kotlin-based systems built with clean materials standards and robust background processes." },
      { name: "Cross-Platform Frameworks", desc: "Highly efficient React Native or Flutter setups to target both systems with one codebase." }
    ],
    tech: ["React Native", "Flutter", "SwiftUI / Kotlin", "Firebase", "SQLite", "GraphQL"],
    accent: "text-cyan-400 border-cyan-400/30 bg-cyan-400/5"
  },
  {
    id: "data",
    label: "Data Science",
    icon: BarChart3,
    title: "Advanced Business Intelligence & Predictive Analytics",
    tagline: "Aggregate unstructured events into metrics boards and predictive analytics models.",
    subServices: [
      { name: "Interactive Business Dashboards", desc: "React-based analytics visual decks connecting directly to internal server databases." },
      { name: "Predictive Forecasting Models", desc: "Statistical regressions, trends modeling, and customer churn forecast math models." },
      { name: "Data Pipeline Orchestrations", desc: "Clean ETL maps to parse, filter, and index database entries into cloud data pools." }
    ],
    tech: ["Python / Pandas", "Apache Spark", "BigQuery", "Tableau / Looker", "SciKit-Learn", "PostgreSQL"],
    accent: "text-indigo-400 border-indigo-400/30 bg-indigo-400/5"
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    title: "Scalable Cloud Hosting & Automated Deployment Systems",
    tagline: "Infrastructure as Code, dockerized containers, and horizontal auto-scalers.",
    subServices: [
      { name: "Cloud Architectures (AWS / GCP / Azure)", desc: "High-availability networks, serverless edge functions, and secure firewalls." },
      { name: "DevOps CI/CD Automation", desc: "GitHub actions, docker container registers, and automated unit testing steps." },
      { name: "Kubernetes Container Clustering", desc: "Self-healing docker stacks with dynamic ingress routing and low memory footprints." }
    ],
    tech: ["AWS EKS / EC2 / RDS", "Docker & Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Prometheus"],
    accent: "text-sky-400 border-sky-400/30 bg-sky-400/5"
  }
];

function ServicesPageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("ai");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && serviceDetails.some((s) => s.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const activeSrv = serviceDetails.find((s) => s.id === activeTab) || serviceDetails[0];

  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <div className="flex flex-col w-full relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* 1. HEADER DESCRIPTION */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-black tracking-widest text-brand-green">
          Our Offerings
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
          Next-Generation <span className="text-gradient">Engineering Services</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
          Whether you need a dedicated development team to architect a new SaaS application or an AI specialist to design autonomous agent workflows, we provide solutions that deliver results.
        </p>
      </div>

      {/* 2. TABS NAVIGATION */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
        {serviceDetails.map((s) => {
          const isActive = activeTab === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`relative px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-none flex items-center gap-2 border ${
                isActive
                  ? "text-brand-green border-brand-green/35 bg-brand-green/5 font-black"
                  : "text-slate-600 dark:text-slate-450 border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900/60"
              }`}
            >
              <s.icon className="w-4.5 h-4.5" />
              {s.label}
            </button>
          );
        })}
      </div>

      {/* 3. ACTIVE SERVICE SPECIFICATION DISPLAY */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            
            {/* Left Column: Detail card */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">
                  Service Category Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                  {activeSrv.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed italic">
                  &ldquo;{activeSrv.tagline}&rdquo;
                </p>
              </div>

              {/* Sub-services mapping */}
              <div className="grid gap-4 mt-2">
                {activeSrv.subServices.map((sub) => (
                  <div
                    key={sub.name}
                    className="p-5 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-850 bg-slate-100/30 dark:bg-[#0c1224]/30 hover:border-slate-350 dark:hover:border-slate-700 transition-all flex gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">
                        {sub.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-450 mt-1 leading-normal font-medium">
                        {sub.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Technology, Process, Conversion */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Tech Stack card */}
              <div className="p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-850 bg-slate-100/50 dark:bg-[#0c1224]/30 shadow-md">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-brand-blue" />
                  Primary Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeSrv.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300/30 dark:border-slate-800 text-slate-800 dark:text-slate-250"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation booking prompt */}
              <div className="p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-brand-green/10 shadow-lg relative overflow-hidden bg-gradient-to-br from-brand-green/5 to-brand-blue/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  Need a custom integration?
                </h3>
                <p className="text-[11px] text-slate-550 dark:text-slate-400 mt-2.5 leading-relaxed font-medium">
                  Whether you have strict enterprise protocols, require integration with a specific ERP, or want to discuss scaling bandwidth for millions of active requests, we can help.
                </p>
                <div className="mt-6">
                  <button
                    onClick={openCalendly}
                    className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-md hover:scale-102 transition-transform cursor-none"
                  >
                    Discuss project parameters
                  </button>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-xs text-slate-500">
        Loading services catalog...
      </div>
    }>
      <ServicesPageContent />
    </Suspense>
  );
}
