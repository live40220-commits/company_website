"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

const quickReplies = [
  { text: "AI Solutions", keyword: "ai" },
  { text: "Request a Quote", keyword: "quote" },
  { text: "Our Portfolio", keyword: "portfolio" },
  { text: "Contact Human", keyword: "human" },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Hi there! 👋 I am SolutionzAI, your digital assistant. How can I help you shape your idea today?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Scroll to bottom on messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const botReply = (query: string) => {
    setIsTyping(true);
    
    // Simulate thinking delay
    setTimeout(() => {
      let replyText = "I'm not sure I fully understand, but I can tell you that 100Solutionz specializes in AI Agents, RAG Applications, Web SaaS, Mobile apps, and Cloud DevOps. Feel free to contact our support at live40220@gmail.com!";
      const q = query.toLowerCase();

      if (q.includes("ai") || q.includes("chatbot") || q.includes("rag") || q.includes("agent")) {
        replyText = "At 100Solutionz, our AI division builds enterprise AI Agents, Retrieval-Augmented Generation (RAG) systems, voice automation, and custom LLM integrations. Explore our 'AI Solutions' page for interactive demos!";
      } else if (q.includes("quote") || q.includes("pricing") || q.includes("cost") || q.includes("consultation")) {
        replyText = "We offer free initial consultations! Click the 'Get Free Consultation' button at the top of the page to schedule a direct slot on our calendar, or fill out the form on our Contact Page.";
      } else if (q.includes("portfolio") || q.includes("project") || q.includes("work")) {
        replyText = "Our portfolio highlights AI Chatbots, Medical AI platforms, custom E-commerce, and SaaS dashboards. Check out our 'Portfolio' page to see detailed case studies and tech stacks used!";
      } else if (q.includes("human") || q.includes("speak") || q.includes("support") || q.includes("contact")) {
        replyText = "I have flagged our sales team! You can reach a human technical advisor instantly via phone at +1 (555) 019-9100 or email us directly at live40220@gmail.com.";
      } else if (q.includes("career") || q.includes("job") || q.includes("hiring")) {
        replyText = "We are always looking for talented AI Engineers, React Developers, and Cloud Specialists! Head over to our 'Careers' page to see active positions and submit an application.";
      } else if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        replyText = "Hello! How can we help you create or scale your software product today?";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: replyText,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    botReply(textToSend);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[40]">
      {/* Floating Trigger Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-slate-950 dark:bg-slate-900 border border-slate-350 dark:border-brand-green/20 text-brand-green flex items-center justify-center shadow-lg hover:scale-108 active:scale-95 transition-all relative cursor-none"
        aria-label="Open support chat"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-green border-2 border-slate-950 animate-pulse" />
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-16 left-0 w-[340px] md:w-[360px] h-[480px] rounded-3xl glass-panel shadow-2xl border border-slate-200 dark:border-brand-green/10 flex flex-col overflow-hidden text-slate-800 dark:text-slate-200"
          >
            {/* Header */}
            <div className="p-4 bg-slate-100/50 dark:bg-[#0c1224] border-b border-slate-200 dark:border-brand-green/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green flex items-center justify-center text-brand-green animate-pulse">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-black tracking-wide">SolutionzAI</h3>
                  <span className="text-[9px] text-brand-green font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block animate-ping" />
                    Agent Active
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-950 border border-slate-300 dark:border-slate-850 hover:text-rose-500 transition-colors flex items-center justify-center cursor-none"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Body messages */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-none"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[80%] ${
                    msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-brand-green to-brand-blue text-white rounded-tr-none"
                        : "bg-slate-200 dark:bg-slate-900 border border-slate-300/30 dark:border-slate-850 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[8px] text-slate-500 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              ))}

              {/* Typing simulation */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-slate-200 dark:bg-slate-900 border border-slate-300/30 dark:border-slate-850 p-3 rounded-2xl rounded-tl-none mr-auto max-w-[80%]">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>

            {/* Quick replies suggestion chips */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.text}
                    onClick={() => handleSend(reply.text)}
                    className="text-[10px] font-semibold py-1.5 px-3 rounded-full border border-brand-green/20 hover:border-brand-green bg-brand-green/5 text-slate-700 dark:text-brand-green transition-all hover:scale-103 cursor-none"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="p-3 bg-slate-100/50 dark:bg-[#0c1224] border-t border-slate-200 dark:border-brand-green/10 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-slate-200 dark:bg-slate-950 border border-slate-350 dark:border-slate-850 px-3 py-2 text-xs rounded-xl focus:outline-none focus:border-brand-green text-slate-800 dark:text-slate-100 cursor-none"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-xl bg-brand-green hover:bg-brand-green/90 text-slate-900 flex items-center justify-center transition-all cursor-none"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
