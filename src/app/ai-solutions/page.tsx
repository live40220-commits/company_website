"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Cpu, MessageSquare, Mic, Database, ArrowRight, Play, RefreshCw, Terminal, Eye, Check } from "lucide-react";

interface ScenarioStep {
  type: "thought" | "action" | "observation" | "result";
  text: string;
}

interface Scenario {
  id: string;
  name: string;
  desc: string;
  triggerPrompt: string;
  steps: ScenarioStep[];
}

const scenarios: Scenario[] = [
  {
    id: "support",
    name: "Support Auto-Pilot",
    desc: "Autonomous email triage, database billing queries, and response compilation.",
    triggerPrompt: "Analyze customer email warning that their credit card was charged twice.",
    steps: [
      { type: "thought", text: "Customer claims double billing. I need to retrieve their email address 'john@company.com' and search transactional databases." },
      { type: "action", text: "Executing SQL query: SELECT * FROM billing_records WHERE email='john@company.com' ORDER BY charge_date DESC LIMIT 5" },
      { type: "observation", text: "Database returns two charges of $99.00 with transaction IDs TX_8819 and TX_8820 processed on June 20 at 14:32:01 and 14:32:03 respectively." },
      { type: "thought", text: "Charge double processing verified. This is a duplicate charge. I must trigger a refund for transaction TX_8820 via the Stripe API and write an apology draft." },
      { type: "action", text: "Executing Stripe API call: stripe.refunds.create({ charge: 'ch_8820' })" },
      { type: "observation", text: "Stripe API returns Refund Status: SUCCESS. Refund reference: REF_9921." },
      { type: "result", text: "SYSTEM STATUS: Complete. Drafted reply: 'Hi John, we confirmed a transaction duplicate. I have processed a refund of $99.00 for REF_9921. It should reflect in 3 days. Apologies!'" }
    ]
  },
  {
    id: "pdf",
    name: "PDF Data Extraction",
    desc: "Ingests semi-structured contracts, matches terms against legal rules, and outputs schema structures.",
    triggerPrompt: "Parse uploaded document 'supplier_contract_v2.pdf' and extract payment due terms.",
    steps: [
      { type: "thought", text: "Opening document buffer. I will run OCR parsing on page 4 (Legal terms & Payments schedule)." },
      { type: "action", text: "Executing NLP semantic parse: extract_entities(page_4, schema=['due_date', 'late_fee_percent'])" },
      { type: "observation", text: "Entities found: Payment terms are Net-30 from receipt. Late fees of 1.5% accrue monthly after day 31." },
      { type: "thought", text: "Validating clauses. Company template requires Net-45 terms. I need to flag this contract for legal review as it breaches standard parameters." },
      { type: "action", text: "Executing webhook to Slack: slack.postMessage({ channel: '#legal-review', text: 'Contract supplier_contract_v2.pdf flags a Net-30 term breach.' })" },
      { type: "result", text: "SYSTEM STATUS: Flagged. Extracted: { Term: 'Net-30', LateFee: '1.5%', Compliance: 'FAIL_TERM_BREACH' }" }
    ]
  },
  {
    id: "outreach",
    name: "Lead Research Agent",
    desc: "Scrapes lead websites, matches keywords to services, and compiles tailored pitches.",
    triggerPrompt: "Research lead domain 'techsolutions.io' and outline a personalized pitch for AI integration.",
    steps: [
      { type: "thought", text: "Accessing target landing page for techsolutions.io to discover primary business verticals." },
      { type: "action", text: "Executing web scrape query: scrape_domain('techsolutions.io')" },
      { type: "observation", text: "Scrape returns keywords: 'E-commerce logistics, delivery tracking, manual shipping audits, warehouse scheduling'." },
      { type: "thought", text: "Lead operates logistics. Shipping audits are listed as manual. I should search internal archives for logistics case studies." },
      { type: "action", text: "Executing Vector Search: database.query('logistics AI agents shipping optimization')" },
      { type: "observation", text: "Vector DB returns matched case study: 'Biotech Nexus: 85% support automation, shipping route coordinates sync'." },
      { type: "result", text: "SYSTEM STATUS: Drafted Pitch. Pitch: 'Hi CEO, noticed techsolutions.io audits shipping manually. We built a similar auto-tracking sync for Biotech Nexus that automated 85% of queries. Let's talk!'" }
    ]
  }
];

export default function AISolutionsPage() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [activeStep, setActiveStep] = useState<number>(-1); // -1: Not started
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStep(0);
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      if (currentStep < selectedScenario.steps.length) {
        setActiveStep(currentStep);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1800); // 1.8 seconds per step
  };

  const handleScenarioChange = (scen: Scenario) => {
    if (isRunning) return;
    setSelectedScenario(scen);
    setActiveStep(-1);
  };

  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <div className="flex flex-col w-full relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-black tracking-widest text-brand-green">
          Showcase
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
          Next-Generation <span className="text-gradient">Agentic AI Solutions</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
          We build autonomous AI agents, fine-tuned model pipelines, RAG databases, and custom automation loops that act as scalable extensions of your workforce.
        </p>
      </div>

      {/* 2. CORE SOLUTIONS CATALOG */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        
        <div className="p-6 rounded-3xl glass-panel border border-slate-200/50 dark:border-slate-850 hover:border-brand-green/30 bg-slate-100/30 dark:bg-[#0c1224]/30 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6">
            <Brain className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">Autonomous AI Agents</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-medium">
            AI software workers that process multi-step instructions, use custom API tools, handle database reads, check for anomalies, and report outcomes.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel border border-slate-200/50 dark:border-slate-850 hover:border-brand-green/30 bg-slate-100/30 dark:bg-[#0c1224]/30 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">Semantic RAG Systems</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-medium">
            Ingest thousands of spreadsheets, legal documents, and text files into scalable vector indexes (Pinecone, Qdrant) with metadata segregation.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel border border-slate-200/50 dark:border-slate-850 hover:border-brand-green/30 bg-slate-100/30 dark:bg-[#0c1224]/30 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-6">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">Voice & Transcription AI</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-medium">
            Integrate real-time streaming audio transcription, dynamic TTS synthesizers, and call automation pipelines using Twilio/Vapi integrations.
          </p>
        </div>

      </div>

      {/* 3. INTERACTIVE AI PLAYGROUND SANDBOX */}
      <div className="border border-slate-200 dark:border-slate-850 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden bg-slate-100/40 dark:bg-[#080d1a]/20">
        
        {/* Decorative core */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <span className="text-[10px] font-black text-brand-green uppercase tracking-widest flex items-center gap-1.5">
                <Terminal className="w-4 h-4" /> Live Interactive Sandbox
              </span>
              <h2 className="text-xl sm:text-2xl font-black mt-2 leading-tight">
                AI Agent Console
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                Choose a business scenario on the right, click Run Simulation, and monitor how the Agent executes reasoning steps in real-time.
              </p>
            </div>

            {/* Scenario buttons */}
            <div className="grid gap-2">
              {scenarios.map((scen) => {
                const isSelected = selectedScenario.id === scen.id;
                return (
                  <button
                    key={scen.id}
                    disabled={isRunning}
                    onClick={() => handleScenarioChange(scen)}
                    className={`p-3 rounded-2xl text-left border cursor-none transition-all flex flex-col gap-1.5 ${
                      isSelected
                        ? "bg-slate-200/50 dark:bg-slate-900 border-brand-green shadow-lg"
                        : "bg-transparent border-slate-300/35 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900/50 disabled:opacity-40"
                    }`}
                  >
                    <span className="text-xs font-bold">{scen.name}</span>
                    <span className="text-[10px] text-slate-450 dark:text-slate-400 leading-snug line-clamp-1">{scen.desc}</span>
                  </button>
                );
              })}
            </div>

            {/* Action button */}
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-md hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 cursor-none"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Agent Thinking...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Run Scenario Simulation
                </>
              )}
            </button>
          </div>

          {/* Interactive Logs Display Column */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-300/70 dark:border-slate-850 p-5 bg-slate-200/80 dark:bg-[#070b16] font-mono text-[11px] leading-relaxed shadow-inner flex flex-col min-h-[380px] justify-between">
            
            {/* Console Terminal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-300 dark:border-slate-800 text-[10px] text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider">
              <span>Solutionz-Agent-v1.4.3</span>
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-amber-400 animate-ping" : "bg-brand-green"}`} />
                {isRunning ? "Running" : "Idle"}
              </span>
            </div>

            {/* Console output display */}
            <div className="flex-1 py-4 flex flex-col gap-4.5 overflow-y-auto max-h-[320px] scrollbar-none">
              
              {/* Trigger Input Prompt */}
              <div>
                <span className="text-slate-450 dark:text-slate-500 block font-black uppercase text-[9px] tracking-wide">
                  [1] INPUT TRIGGER:
                </span>
                <span className="text-slate-900 dark:text-slate-200 font-bold">
                  &gt; {selectedScenario.triggerPrompt}
                </span>
              </div>

              {/* Dynamic steps loop display */}
              {activeStep >= 0 && (
                <div className="flex flex-col gap-4">
                  {selectedScenario.steps.slice(0, activeStep + 1).map((step, idx) => {
                    const isThought = step.type === "thought";
                    const isAction = step.type === "action";
                    const isObs = step.type === "observation";
                    const isRes = step.type === "result";

                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        key={idx}
                        className="pl-3.5 border-l-2 border-slate-300 dark:border-slate-800"
                      >
                        {isThought && (
                          <div>
                            <span className="text-emerald-500 dark:text-brand-green font-black uppercase text-[9px] tracking-wide flex items-center gap-1">
                              <Brain className="w-3.5 h-3.5" /> THOUGHT PROCESS:
                            </span>
                            <span className="text-slate-800 dark:text-slate-300 font-medium">
                              {step.text}
                            </span>
                          </div>
                        )}
                        {isAction && (
                          <div>
                            <span className="text-blue-500 dark:text-brand-blue font-black uppercase text-[9px] tracking-wide flex items-center gap-1">
                              <Cpu className="w-3.5 h-3.5" /> AGENT ACTION:
                            </span>
                            <span className="text-slate-900 dark:text-slate-250 font-bold">
                              {step.text}
                            </span>
                          </div>
                        )}
                        {isObs && (
                          <div>
                            <span className="text-cyan-500 dark:text-cyan-400 font-black uppercase text-[9px] tracking-wide flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5" /> TOOL OBSERVATION:
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 font-medium">
                              {step.text}
                            </span>
                          </div>
                        )}
                        {isRes && (
                          <motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="p-3.5 rounded-xl border border-brand-green/20 bg-brand-green/5 text-brand-green leading-relaxed mt-2"
                          >
                            <span className="font-black block uppercase text-[9px] tracking-wide mb-1">
                              [✓] FINAL EXECUTION LOG:
                            </span>
                            {step.text}
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}

            </div>

            {/* Terminal Instructions Footer */}
            <div className="text-[10px] text-slate-450 dark:text-slate-500 border-t border-slate-300 dark:border-slate-800 pt-3 flex items-center justify-between">
              <span>Press simulator trigger to run diagnostic cycles</span>
              <span>Node: AWS US-East-1</span>
            </div>

          </div>

        </div>

      </div>

      {/* 4. CALL TO ACTION DETAILS */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 mt-12">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Ready to Automate Your Business Operations?
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed font-medium">
          Let Rehman and our team of AI scientists draft a blueprint outlining vector store selections, fine-tuning scripts, and secure pipeline connections.
        </p>
        <div className="mt-8">
          <button
            onClick={openCalendly}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-lg hover:scale-103 transition-transform cursor-none"
          >
            Schedule AI Architecture Meeting
          </button>
        </div>
      </section>

    </div>
  );
}
