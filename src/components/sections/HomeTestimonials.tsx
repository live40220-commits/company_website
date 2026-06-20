"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "100Solutionz took our raw agentic AI requirements and developed a production-ready multi-agent system in record time. Their senior technical expertise in RAG databases and vector search was evident from day one.",
    author: "Dr. Sarah Jenkins",
    role: "VP of AI",
    company: "Biotech Nexus Corp",
    rating: 5,
  },
  {
    quote: "The web portal they designed is a masterpiece. It integrates complex analytics, has extremely low latency, and looks breathtaking. Our conversion rate increased by 40% within the first month of going live.",
    author: "Marcello Russo",
    role: "Co-Founder & CEO",
    company: "Scribe SaaS Inc",
    rating: 5,
  },
  {
    quote: "Outstanding mobile engineering. They delivered our iOS and Android applications ahead of schedule, with zero runtime bugs. Their sprint communication is the best I've experienced in 15 years.",
    author: "Amelie Dubois",
    role: "Product Director",
    company: "Fintech Flow Ltd",
    rating: 5,
  },
];

export default function HomeTestimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 bg-slate-100/30 dark:bg-[#080d1a]/20 border-y border-slate-200/50 dark:border-slate-850/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-black tracking-widest text-brand-green">
            Client Success
          </span>
          <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
            Loved by Builders Globally
          </h2>
        </div>

        {/* Carousel Deck */}
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-850 shadow-xl overflow-hidden min-h-[300px] flex flex-col justify-between bg-slate-100/10 dark:bg-[#0c1224]/20">
          
          <div className="absolute top-6 right-8 text-brand-green/20">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.3)]" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div>
                <cite className="not-italic text-sm font-black text-slate-900 dark:text-white block">
                  {testimonials[current].author}
                </cite>
                <span className="text-xs text-slate-400 mt-0.5 block font-medium">
                  {testimonials[current].role} &mdash; {testimonials[current].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-200/50 dark:border-slate-850/50">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-none ${
                    current === idx 
                      ? "w-6 bg-brand-green" 
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow keys */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full glass-panel border border-slate-300 dark:border-slate-800 hover:text-brand-green hover:scale-105 active:scale-95 transition-all cursor-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full glass-panel border border-slate-350 dark:border-slate-800 hover:text-brand-green hover:scale-105 active:scale-95 transition-all cursor-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
