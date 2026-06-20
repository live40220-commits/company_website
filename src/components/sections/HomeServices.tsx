"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Code, Smartphone, BarChart3, Cloud, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    desc: "Autonomous AI agents, Retrieval-Augmented Generation (RAG), and custom LLM solutions tailored to automate enterprise workflows.",
    tags: ["Agentic AI", "RAG Systems", "AI Chatbots", "NLP Solutions"],
    color: "group-hover:text-brand-green border-brand-green/20 bg-brand-green/5",
    linkTab: "ai"
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Robust business websites, responsive custom SaaS solutions, and secure, high-conversion e-commerce engines.",
    tags: ["SaaS Platforms", "E-commerce Solutions", "Custom Webapps"],
    color: "group-hover:text-brand-blue border-brand-blue/20 bg-brand-blue/5",
    linkTab: "web"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native iOS and Android app engineering alongside cost-effective cross-platform flutter and react-native systems.",
    tags: ["iOS Apps", "Android Apps", "Cross-Platform"],
    color: "group-hover:text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    linkTab: "mobile"
  },
  {
    icon: BarChart3,
    title: "Data Science",
    desc: "Transform corporate databases into actionable intelligence with predictive forecasting, statistics models, and dashboards.",
    tags: ["Predictive Analytics", "Forecasting", "BI Dashboards"],
    color: "group-hover:text-indigo-400 border-indigo-400/20 bg-indigo-400/5",
    linkTab: "data"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scale with confidence using AWS, Azure, GCP infrastructure designs, dockerization, and automated CI/CD deployment pipelines.",
    tags: ["AWS/GCP/Azure", "Docker/Kubernetes", "CI/CD Pipelines"],
    color: "group-hover:text-sky-400 border-sky-400/20 bg-sky-400/5",
    linkTab: "cloud"
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-green/3 dark:bg-brand-green/1 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-brand-green">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            From intelligence integration to global web deployments, we build solutions that accelerate business efficiency and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-3xl glass-panel p-6 border border-slate-200/50 dark:border-slate-850 hover:border-slate-400 dark:hover:border-brand-green/35 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 bg-slate-100/5 dark:bg-[#0c1224]/30"
            >
              <div>
                {/* Header Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all mb-6 ${srv.color}`}>
                  <srv.icon className="w-5 h-5 text-slate-700 dark:text-slate-200 group-hover:scale-110 transition-transform" />
                </div>

                {/* Service Info */}
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-medium">
                  {srv.desc}
                </p>

                {/* Sub tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {srv.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-slate-200/40 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 border border-slate-300/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-850/50 flex items-center justify-between">
                <Link
                  href={`/services?tab=${srv.linkTab}`}
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green transition-colors flex items-center gap-1.5 cursor-none"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global CTA footer */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-green/80 group cursor-none"
          >
            Explore Detailed Service Portfolios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
