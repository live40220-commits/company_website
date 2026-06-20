"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 1.8 seconds, then fade out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#0B1020] z-[999999] flex flex-col items-center justify-center overflow-hidden"
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Futuristic background grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,42,0.05)_0%,transparent_75%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20" />

          {/* Logo container */}
          <div className="relative w-64 h-64 flex flex-col items-center justify-center">
            {/* Pulsing glow ring in background */}
            <motion.div
              className="absolute w-56 h-56 rounded-full border border-brand-green/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8], 
                opacity: [0.2, 0.6, 0.2] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-48 h-48"
            >
              <Logo showText={true} />
            </motion.div>
          </div>

          {/* Loading Progress Bar */}
          <div className="absolute bottom-16 w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-green to-brand-blue"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Subtle brand status label */}
          <motion.div
            className="absolute bottom-8 text-[11px] uppercase tracking-[0.25em] text-slate-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
          >
            Powering Digital Transformation
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
