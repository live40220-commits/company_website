"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappNumber = "15550199100"; // Replace with company number
  const message = encodeURIComponent(
    "Hi 100Solutionz! I visited your website and would like to get more information about your AI & Software Development services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-[40]">
      {/* Outer pulsing indicator rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping pointer-events-none" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-10 animate-pulse pointer-events-none" style={{ animationDuration: "3s" }} />

      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-108 active:scale-95 transition-all group cursor-none"
      >
        {/* Tooltip hint on hover */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-900/90 text-white text-[10px] tracking-wide font-bold px-3 py-1.5 rounded-lg whitespace-nowrap origin-right transition-all shadow-md pointer-events-none border border-slate-800">
          Chat with Us
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
