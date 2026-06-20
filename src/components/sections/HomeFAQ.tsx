"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Agentic AI and how can it help my company?",
    a: "Unlike traditional AI that requires constant prompting, Agentic AI acts as autonomous workers. They can take broad goals (e.g., 'research this lead and draft an outreach email'), plan steps, execute actions (e.g., query APIs, compile documents), check for errors, and self-correct. It enables companies to automate complex reasoning-heavy operations.",
  },
  {
    q: "How long does a typical software project build take?",
    a: "A standard Minimum Viable Product (MVP) or custom SaaS platform usually takes between 6 to 12 weeks. High-end complex enterprise-grade systems with custom trained AI model integrations may span 12 to 24 weeks. We work in two-week sprints so you always see working progress.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Absolutely. Intellectual property protection is a core priority. We sign bilateral NDAs before discussing any proprietary data or technical specifications, ensuring your trade secrets and systems stay secure and private.",
  },
  {
    q: "Can we integrate our existing SQL/NoSQL databases with AI?",
    a: "Yes. We regularly build secure middleware layers and Retrieval-Augmented Generation (RAG) indices that connect directly to existing databases (Postgres, MongoDB, Oracle). This allows AI chatbots or agents to answer queries based on your internal documentation without data leakage.",
  },
  {
    q: "What post-launch support and maintenance do you offer?",
    a: "We offer dedicated retainer plans for continuous monitoring, cloud scale adjustments, library version patches, and ongoing feature development. We guarantee prompt response times so your platform operates without downtime.",
  },
];

interface FAQRowProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQRow({ question, answer, isOpen, onToggle }: FAQRowProps) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-4 hover:text-brand-green transition-colors cursor-none group"
      >
        <span className="text-sm font-black flex items-center gap-2.5 text-slate-800 dark:text-slate-200 group-hover:text-brand-green transition-colors">
          <HelpCircle className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 group-hover:text-brand-green transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6.5 pb-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 bg-slate-100/20 dark:bg-[#070b16]/10">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-brand-green">
            Information Hub
          </span>
          <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, idx) => (
            <FAQRow
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
