"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, Code, Smartphone, BarChart3, Cloud } from "lucide-react";
import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/shared/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "AI Solutions", href: "/ai-solutions", highlighted: true },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceDropdownItems = [
  { name: "AI & Machine Learning", href: "/services?tab=ai", desc: "Agents, RAG, chatbots, NLP & computer vision solutions", icon: Sparkles, color: "text-brand-green" },
  { name: "Web Development", href: "/services?tab=web", desc: "Responsive corporate sites, custom SaaS, and e-commerce platforms", icon: Code, color: "text-brand-blue" },
  { name: "Mobile App Development", href: "/services?tab=mobile", desc: "High-performance iOS, Android, and cross-platform mobile apps", icon: Smartphone, color: "text-cyan-400" },
  { name: "Data Science", href: "/services?tab=data", desc: "Interactive dashboards, business analytics, and forecast systems", icon: BarChart3, color: "text-indigo-400" },
  { name: "Cloud & DevOps", href: "/services?tab=cloud", desc: "Scalable cloud infrastructures, deployment automation, and CI/CD pipelines", icon: Cloud, color: "text-sky-400" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Monitor scroll for styling shifts
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const openCalendly = () => {
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel border-b shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group w-44">
          <Logo showText={false} className="w-10 h-10 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-widest text-gradient leading-none">
              100SOLUTIONZ
            </span>
            <span className="text-[8px] tracking-[0.2em] font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase">
              Shape Your Idea
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV ITEMS */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900/60 ${
                      isActive ? "text-brand-green" : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-1 w-[400px] rounded-2xl glass-panel p-4 shadow-xl border border-slate-200 dark:border-brand-green/10"
                      >
                        <div className="grid gap-2">
                          {serviceDropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors group/item"
                            >
                              <div className={`p-2 rounded-lg bg-slate-200/50 dark:bg-slate-900 border border-slate-300/30 dark:border-brand-green/5 ${item.color} group-hover/item:scale-110 transition-transform`}>
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-brand-green transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-900/60 ${
                  isActive 
                    ? "text-brand-green font-semibold" 
                    : link.highlighted
                      ? "text-brand-green dark:text-brand-green font-bold bg-brand-green/5 dark:bg-brand-green/10 border border-brand-green/20 dark:border-brand-green/30"
                      : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-brand-green/5 dark:bg-brand-green/10 rounded-full -z-10 border border-brand-green/10 dark:border-brand-green/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* NAV ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={openCalendly}
            className="px-5 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-[0_4px_14px_rgba(74,222,42,0.3)] hover:shadow-[0_6px_20px_rgba(74,222,42,0.4)] hover:scale-102 transition-all active:scale-98 cursor-none"
          >
            Get Free Consultation
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full glass-panel border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* MOBILE SHEET OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] bottom-0 z-40 bg-[#0B1020]/95 backdrop-blur-lg lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.name} className="border-b border-slate-800/50 pb-2">
                    <Link
                      href={link.href}
                      className={`text-lg font-semibold block ${
                        isActive 
                          ? "text-brand-green" 
                          : link.highlighted
                            ? "text-brand-green font-bold text-xl flex items-center gap-1"
                            : "text-slate-300"
                      }`}
                    >
                      {link.name}
                      {link.highlighted && <Sparkles className="w-4 h-4" />}
                    </Link>
                    
                    {/* Services Sub-Links in Mobile Menu */}
                    {link.hasDropdown && (
                      <div className="mt-2 pl-4 grid gap-2.5">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm text-slate-400 hover:text-brand-green flex items-center gap-2"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-8 pb-10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCalendly();
                }}
                className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-sm"
              >
                Get Free Consultation
              </button>
              <div className="text-center text-[10px] text-slate-500 uppercase tracking-widest">
                Let's Shape Your Idea
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
