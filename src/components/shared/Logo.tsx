"use client";

import React from "react";

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  showText?: boolean;
}

export default function Logo({
  className = "",
  width = "100%",
  height = "100%",
  showText = true,
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Metallic gradient for SOLUTIONZ text */}
        <linearGradient id="logoTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ADE2A" />
          <stop offset="50%" stopColor="#2575FC" />
          <stop offset="100%" stopColor="#3498DB" />
        </linearGradient>
        
        {/* Glow filters for interactive premium look */}
        <filter id="logoGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4ADE2A" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* TOP GREEN PART OF "100" */}
      <g stroke="#4ADE2A" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" filter="url(#logoGlow)">
        {/* The "1" Top Part */}
        <path d="M 50 115 L 50 50 M 50 50 L 35 65" />
        
        {/* First "0" Top Part */}
        <path d="M 85 115 L 85 55 C 85 40, 140 40, 140 55 L 140 115" />
        
        {/* Second "0" Top Part */}
        <path d="M 175 115 L 175 55 C 175 40, 230 40, 230 55 L 230 115" />
      </g>

      {/* MIDDLE "SOLUTIONZ" TEXT */}
      <text
        x="137"
        y="136"
        fontFamily="'Outfit', 'Inter', sans-serif"
        fontWeight="800"
        fontSize="30"
        letterSpacing="3.5"
        fill="url(#logoTextGrad)"
        textAnchor="middle"
        className="dark:stroke-none stroke-slate-900 stroke-[0.5px]"
      >
        SOLUTIONZ
      </text>

      {/* BOTTOM BLUE PART OF "100" */}
      <g stroke="#3498DB" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        {/* The "1" Bottom Part */}
        <path d="M 50 155 L 50 220" />
        
        {/* First "0" Bottom Part */}
        <path d="M 85 155 L 85 215 C 85 230, 140 230, 140 215 L 140 155" />
        
        {/* Second "0" Bottom Part */}
        <path d="M 175 155 L 175 215 C 175 230, 230 230, 230 215 L 230 155" />
      </g>

      {/* HORIZONTAL THIN DIVISION LINE */}
      <path
        d="M 25 240 L 255 240"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-400 dark:text-slate-600"
        strokeLinecap="round"
      />

      {/* TAGLINE: "LETS SHAPE YOUR IDEA" */}
      {showText && (
        <text
          x="140"
          y="266"
          fontFamily="'Outfit', 'Inter', sans-serif"
          fontWeight="400"
          fontSize="17.5"
          letterSpacing="1"
          fill="currentColor"
          textAnchor="middle"
          className="text-slate-800 dark:text-slate-300"
        >
          LETS SHAPE YOUR IDEA
        </text>
      )}
    </svg>
  );
}
