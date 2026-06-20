"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, X, Globe, GitBranch, ArrowUpRight } from "lucide-react";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Mock subscription
    setSubscribed(true);
    setEmail("");
    setError("");
  };

  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <footer className="relative mt-auto border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#060914] z-10">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue/5 dark:bg-brand-blue/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-green/5 dark:bg-brand-green/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-44">
              <Logo showText={false} className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-md font-black tracking-widest text-gradient leading-none">
                  100SOLUTIONZ
                </span>
                <span className="text-[7px] tracking-[0.2em] font-medium text-slate-500 mt-1 uppercase">
                  Shape Your Idea
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              We shape your ideas into premium, production-ready AI solutions, high-performance web products, mobile apps, and scalable cloud architectures. 
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-panel border border-slate-300 dark:border-slate-800 hover:text-brand-green hover:scale-105 active:scale-95 transition-all cursor-none"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-panel border border-slate-300 dark:border-slate-800 hover:text-brand-blue hover:scale-105 active:scale-95 transition-all cursor-none"
              >
                <X className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-panel border border-slate-300 dark:border-slate-800 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-none"
              >
                <GitBranch className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none">Portfolio</Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/services?tab=ai" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none flex items-center gap-1">AI & ML <ArrowUpRight className="w-3 h-3 opacity-50" /></Link>
              </li>
              <li>
                <Link href="/services?tab=web" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none flex items-center gap-1">Web Development <ArrowUpRight className="w-3 h-3 opacity-50" /></Link>
              </li>
              <li>
                <Link href="/services?tab=mobile" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none flex items-center gap-1">Mobile Development <ArrowUpRight className="w-3 h-3 opacity-50" /></Link>
              </li>
              <li>
                <Link href="/services?tab=data" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none flex items-center gap-1">Data Science <ArrowUpRight className="w-3 h-3 opacity-50" /></Link>
              </li>
              <li>
                <Link href="/services?tab=cloud" className="text-slate-500 dark:text-slate-400 hover:text-brand-green transition-colors cursor-none flex items-center gap-1">Cloud & DevOps <ArrowUpRight className="w-3 h-3 opacity-50" /></Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
              Newsletter
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
              Subscribe to receive insights into AI agents, software updates, and technology trends.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                disabled={subscribed}
                className="w-full px-4 py-2.5 rounded-full text-xs bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green transition-colors pr-10 text-slate-800 dark:text-slate-200 cursor-none"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-1 w-8 h-8 rounded-full bg-brand-green hover:bg-brand-green/90 text-slate-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 cursor-none"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <AnimatePresence mode="wait">
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-xs text-brand-green font-medium mt-1"
                >
                  <CheckCircle className="w-4 h-4" />
                  Successfully subscribed!
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-rose-500 font-medium mt-1"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* BOTTOM METRICS/CONTACT ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-green" />
            <a href="mailto:info@100solutionz.com" className="hover:text-brand-green transition-colors cursor-none">
              info@100solutionz.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-blue" />
            <a href="tel:+15550199" className="hover:text-brand-blue transition-colors cursor-none">
              +1 (555) 019-9100
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-green" />
            <span>Silicon Valley, CA & Lahore, Pakistan</span>
          </div>
        </div>

        {/* COPYRIGHT & CREDITS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/40 text-[10px] text-slate-500 dark:text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} 100Solutionz. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline cursor-none">Privacy Policy</a>
            <a href="#" className="hover:underline cursor-none">Terms of Service</a>
            <button onClick={openCalendly} className="text-brand-green hover:underline cursor-none font-semibold">
              Free Consultation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
