import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorEffect from "@/components/shared/CursorEffect";
import ParticleBackground from "@/components/shared/ParticleBackground";
import LoadingScreen from "@/components/shared/LoadingScreen";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import CalendlyModal from "@/components/shared/CalendlyModal";
import ChatWidget from "@/components/shared/ChatWidget";
import JsonLd from "@/components/shared/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "100Solutionz | AI & Software Development Company",
  description: "Shape your ideas with 100Solutionz. We deliver world-class AI agents, RAG systems, premium web products, custom mobile apps, and scalable cloud architectures.",
  keywords: "Artificial Intelligence, Web Development, Mobile Apps, Data Science, Digital Transformation, Agentic AI, RAG Systems, 100Solutionz",
  authors: [{ name: "100Solutionz Technical Team" }],
  openGraph: {
    title: "100Solutionz | AI & Software Development Company",
    description: "Let's Shape Your Idea. We build futuristic enterprise-grade AI products, web platforms, and mobile apps.",
    url: "https://100solutionz.com",
    siteName: "100Solutionz",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0B1020] text-slate-900 dark:text-slate-100 transition-colors duration-500">
        <ThemeProvider>
          {/* Page Loading Screen */}
          <LoadingScreen />
          
          {/* Custom Trail Cursor */}
          <CursorEffect />
          
          {/* Animated Canvas Particles */}
          <ParticleBackground />
          
          {/* Sticky Navigation Bar */}
          <Navbar />
          
          {/* Content Main Area */}
          <main className="flex-grow pt-[70px] relative z-10 flex flex-col">
            {children}
          </main>
          
          {/* Shared Site Footer */}
          <Footer />
          
          {/* Floating Actions */}
          <WhatsAppCTA />
          <ChatWidget />
          <CalendlyModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
