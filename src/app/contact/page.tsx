"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Check, Sparkles, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate server POST submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <div className="flex flex-col w-full relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-black tracking-widest text-brand-green">
          Get in Touch
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
          Connect With Our <span className="text-gradient">Engineering Team</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
          Have an idea or standard RFP specifications? Submit the form below or book a direct strategy call.
        </p>
      </div>

      {/* 2. SPLIT LAYOUT CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left: Contact Form Column */}
        <div className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/50 dark:border-slate-850 shadow-xl bg-slate-100/30 dark:bg-[#0c1224]/20 relative overflow-hidden flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid gap-4.5"
              >
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white mb-1.5">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-slate-450 dark:text-slate-400 mb-4 font-semibold">
                    We sign bilateral NDAs before discussing technical details.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alice"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-200/50 dark:bg-slate-900 border border-slate-350/40 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alice@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-200/50 dark:bg-slate-900 border border-slate-350/40 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI Agent Scope"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-200/50 dark:bg-slate-900 border border-slate-350/40 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1.5">
                    Message Detail *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Briefly explain your budget timeline, requirements, or tech stacks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-200/50 dark:bg-slate-900 border border-slate-350/40 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-850 dark:text-slate-100 cursor-none"
                  />
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-1.5 text-rose-500 text-xs font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    {errorMsg}
                  </div>
                )}

                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-md hover:scale-101 transition-transform disabled:opacity-50 flex items-center justify-center gap-2 cursor-none"
                  >
                    {isSubmitting ? "Sending message..." : "Send Message"}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-6 py-12 justify-center h-full"
              >
                <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
                    Message Dispatched!
                  </h2>
                  <p className="text-xs text-slate-450 dark:text-slate-400 mt-2 max-w-sm leading-relaxed font-semibold">
                    Thank you. Your message has been sent to our sales inbox. We will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded-xl border border-slate-350 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-xs font-bold cursor-none"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right: Info & Map Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Contact Details Card */}
          <div className="p-6 rounded-3xl glass-panel border border-slate-200/50 dark:border-slate-850 bg-slate-100/30 dark:bg-[#0c1224]/20 shadow-md">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-450 mb-5">
              Direct Channels
            </h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-xs font-medium">
                <Mail className="w-4.5 h-4.5 text-brand-green mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 block font-normal">Sales & Support</span>
                  <a href="mailto:live40220@gmail.com" className="hover:text-brand-green transition-colors cursor-none font-bold">
                    live40220@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs font-medium">
                <Phone className="w-4.5 h-4.5 text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 block font-normal">Phone Inquiries</span>
                  <a href="tel:+15550199100" className="hover:text-brand-blue transition-colors cursor-none font-bold">
                    +1 (555) 019-9100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs font-medium">
                <Clock className="w-4.5 h-4.5 text-brand-green mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 block font-normal">Business Hours</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    Monday &mdash; Friday (9:00 AM - 6:00 PM EST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SVG Customized Vector Nodes map */}
          <div className="p-6 rounded-3xl glass-panel border border-slate-200/50 dark:border-slate-850 bg-slate-100/30 dark:bg-[#0c1224]/20 shadow-md flex-1 flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-450 mb-1 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-green" /> Office Locations
              </h3>
              <p className="text-[10px] text-slate-450 font-semibold mb-3">
                Silicon Valley, California & Lahore, Pakistan
              </p>
            </div>
            
            {/* SVG MAP */}
            <div className="w-full h-32 bg-slate-200/40 dark:bg-slate-950 rounded-2xl border border-slate-350/20 flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 400 200" className="w-full h-full text-slate-400 dark:text-slate-700">
                {/* World contour dots mock layout */}
                <path d="M 20 80 Q 80 50 130 80 T 260 80 T 380 60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 40 120 Q 110 140 180 120 T 320 120 T 360 140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Silicon Valley Node */}
                <circle cx="90" cy="80" r="4" fill="#4ADE2A" className="animate-ping" style={{ transformOrigin: "90px 80px" }} />
                <circle cx="90" cy="80" r="3" fill="#4ADE2A" />
                <text x="90" y="65" fontSize="8" fill="currentColor" fontWeight="black" textAnchor="middle" className="text-slate-800 dark:text-slate-400">Silicon Valley</text>
                
                {/* Lahore Node */}
                <circle cx="280" cy="100" r="4" fill="#3498DB" className="animate-ping" style={{ transformOrigin: "280px 100px" }} />
                <circle cx="280" cy="100" r="3" fill="#3498DB" />
                <text x="280" y="85" fontSize="8" fill="currentColor" fontWeight="black" textAnchor="middle" className="text-slate-800 dark:text-slate-400">Lahore Office</text>
              </svg>
            </div>

            <div className="mt-4">
              <button
                onClick={openCalendly}
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-brand-green/10 border border-brand-green/20 hover:border-brand-green hover:bg-brand-green/20 text-brand-green transition-all cursor-none"
              >
                Schedule direct calendar slot
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
