"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, X, Sparkles, BookOpen, ShieldAlert } from "lucide-react";

interface Post {
  id: string;
  title: string;
  category: "ai" | "web" | "cloud";
  categoryLabel: string;
  date: string;
  readTime: string;
  desc: string;
  tags: string[];
  gradient: string;
  featured?: boolean;
  content: string; // Markdown / Raw string structure for interactive viewing
}

const blogPosts: Post[] = [
  {
    id: "agentic-ai",
    title: "The Rise of Agentic AI: Moving Beyond Simple LLM API Wrappers",
    category: "ai",
    categoryLabel: "AI & ML",
    date: "June 18, 2026",
    readTime: "6 Min Read",
    desc: "Why static prompts are failing in production and how to engineer autonomous agent systems that self-correct, execute tools, and handle errors.",
    tags: ["Agentic AI", "LLM Pipelines", "Automation"],
    gradient: "from-brand-green/20 to-teal-500/10",
    featured: true,
    content: `
### Why Prompt Wrappers Fail
Simple API wrappers lack feedback. When an LLM generates a bad invoice query or writes buggy JSON, there's no system to inspect it. 

### The Solution: Agentic Reasoning Loops
Agentic loops use a cycle of **Thought-Action-Observation**:
1. **Thought:** The agent decides what parameters are required.
2. **Action:** The agent calls a custom tool (e.g., query database).
3. **Observation:** The system feeds the output back into the LLM context.
4. **Correction:** If a tool fails, the agent tries a different approach.

\`\`\`python
# Example Agent Logic
def run_agent_loop(goal):
    agent = AgentContext(goal)
    while not agent.complete:
        thought = llm.think(agent.history)
        action = parser.extract(thought)
        observation = execute_tool(action)
        agent.update_history(thought, observation)
    return agent.result
\`\`\`

### Summary
By implementing autonomous reasoning paths, enterprises can build reliable document summarizers, automated customer service, and secure lead qualifying bots.
`
  },
  {
    id: "react-19-next-15",
    title: "How React 19 and Next.js 15 Optimize Core Web Vitals Automatically",
    category: "web",
    categoryLabel: "Web Dev",
    date: "June 12, 2026",
    readTime: "5 Min Read",
    desc: "A deep dive into Server Actions, React Compiler caching, asset preloading, and dynamic streaming configurations.",
    tags: ["React 19", "Next.js 15", "Web Performance"],
    gradient: "from-brand-blue/20 to-cyan-500/10",
    content: `
### React Compiler (React Forget)
React 19 compiles components under the hood, removing the need for manual \`useMemo\` and \`useCallback\` wrappers. 

### Next.js 15 Server Actions
Server actions enable form submissions directly to backend databases without declaring REST endpoints:
- Eliminates boilerplate router endpoints.
- Provides native loading states.
- Fully type-safe connections.

\`\`\`typescript
// Server Action Example
"use server";

export async function submitApplication(data: FormData) {
  const name = data.get("name");
  await db.insert({ name });
  return { success: true };
}
\`\`\`

### Asset Loading Improvements
Next.js 15 automatically preloads critical styles and images in the head tag, reducing Largest Contentful Paint (LCP) speeds by up to 25%.
`
  },
  {
    id: "rag-contract-extraction",
    title: "RAG Best Practices: Indexing 50k PDF Documents with Zero Leakage",
    category: "ai",
    categoryLabel: "AI & ML",
    date: "May 28, 2026",
    readTime: "8 Min Read",
    desc: "How we configured vector storage metadata partitions to isolate user access and chunked tables with high semantic precision.",
    tags: ["RAG Systems", "Vector Databases", "Qdrant"],
    gradient: "from-indigo-500/20 to-purple-500/10",
    content: `
### The Challenge of Large PDF Scales
Ingesting large documents creates semantic dilution. A 100-page lease contract contains disparate sections. Searching the lease returns irrelevant clauses.

### Partitioning & Metadata Filtering
To prevent data leakage, configure metadata fields during vector generation:
- **Tenant ID:** Ensures users only query documents they own.
- **Section Headers:** Boosts match scores if query matches section topic.

\`\`\`typescript
// Qdrant Metadata Match Query
const results = await qdrant.search({
  collection: "contracts",
  vector: queryEmbedding,
  filter: {
    must: [{ key: "tenant_id", match: { value: "user_company_102" } }]
  }
});
\`\`\`

### Chunking Complex Tables
Convert tables into markdown tables before indexing. LLMs search markdown grid strings with 92% higher accuracy than plain text rows.
`
  },
  {
    id: "devops-edge-gateways",
    title: "Optimizing Microservices via Serverless Edge Gateways",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    date: "May 15, 2026",
    readTime: "7 Min Read",
    desc: "Configure edge routing scripts to filter traffic, cache API responses, and run rate limits before hitting Kubernetes nodes.",
    tags: ["DevOps", "Edge Functions", "AWS"],
    gradient: "from-amber-500/20 to-orange-500/10",
    content: `
### What is Edge Ingress?
Edge Ingress runs code at global edge server node locations (e.g., Cloudflare Workers, AWS Lambda@Edge) before the request lands on your main server.

### Rate Limiting at the Edge
By blocking bad requests, DDoS bots, and rate limit spammers at edge nodes, you save CPU cycles on PostgreSQL databases and Kubernetes nodes:
1. Request arrives at Edge.
2. Edge checks Redis cache for rate limits.
3. If limit exceeded, Edge returns 429 status code instantly.
4. Core server is never contacted.

### Microsecond response gains
Caching static queries at edge nodes reduces request times from 120ms to 4ms for global clients.
`
  }
];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingPost, setReadingPost] = useState<Post | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesFilter = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);

  return (
    <div className="flex flex-col w-full relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-black tracking-widest text-brand-green">
          Knowledge Base
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
          Engineering & AI <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
          Insights from our technical directors on RAG setups, React rendering, cloud orchestration, and AI agents.
        </p>
      </div>

      {/* 2. FEATURED SPOTLIGHT ARTICLE BANNER */}
      {featuredPost && activeFilter === "all" && !searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setReadingPost(featuredPost)}
          className="group rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/50 dark:border-brand-green/15 shadow-xl bg-slate-100/40 dark:bg-[#0c1224]/30 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-400 dark:hover:border-brand-green/35 transition-all cursor-none"
        >
          {/* visual image side */}
          <div className="lg:col-span-5 h-48 sm:h-56 w-full rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-blue/15 border border-slate-350/20 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <BookOpen className="w-12 h-12 text-slate-700 dark:text-slate-350 opacity-40 group-hover:opacity-70" />
          </div>
          
          {/* Info side */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="inline-flex max-w-max items-center gap-1 text-[9px] font-black text-brand-green uppercase tracking-widest bg-brand-green/15 border border-brand-green/20 px-2 py-0.5 rounded">
              <Sparkles className="w-3 h-3" /> Featured Insight
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white group-hover:text-brand-green transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-xs text-slate-505 dark:text-slate-405 leading-relaxed font-medium">
              {featuredPost.desc}
            </p>
            <div className="flex items-center gap-4 text-[10px] text-slate-400 mt-2 font-bold uppercase">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. SEARCH & FILTERS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
        
        {/* Category tags */}
        <div className="flex flex-wrap gap-2">
          {["all", "ai", "web", "cloud"].map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-none border ${
                  isActive
                    ? "text-brand-green border-brand-green/35 bg-brand-green/5"
                    : "text-slate-500 border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                }`}
              >
                {cat === "all" && "All Articles"}
                {cat === "ai" && "AI & ML"}
                {cat === "web" && "Web Dev"}
                {cat === "cloud" && "Cloud & DevOps"}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-200 dark:bg-slate-900 border border-slate-300/65 dark:border-slate-850 focus:outline-none focus:border-brand-green text-slate-800 dark:text-slate-100 cursor-none"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

      </div>

      {/* 4. POSTS LISTING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, idx) => (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => setReadingPost(post)}
              className="group relative rounded-3xl glass-panel p-5 border border-slate-200/50 dark:border-slate-850 hover:border-slate-400 dark:hover:border-slate-700 shadow-md flex flex-col justify-between hover:scale-[1.01] transition-all bg-slate-100/30 dark:bg-[#0c1224]/30 cursor-none"
            >
              <div>
                {/* visual graphic preview */}
                <div className={`w-full h-32 rounded-2xl bg-gradient-to-br ${post.gradient} border border-slate-350/20 flex items-center justify-center mb-5 overflow-hidden group-hover:scale-[1.01] transition-transform`}>
                  <BookOpen className="w-8 h-8 text-slate-700 dark:text-slate-400 opacity-30 group-hover:opacity-65" />
                </div>

                <div className="flex items-center justify-between mb-2 text-[8px] font-black uppercase tracking-wider text-slate-400">
                  <span className="text-brand-green bg-brand-green/10 border border-brand-green/15 px-2 py-0.5 rounded">
                    {post.categoryLabel}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-brand-green transition-colors">
                  {post.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-850/50 text-[10px] text-slate-450 dark:text-slate-300 font-bold flex items-center justify-between group-hover:text-brand-green transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredPosts.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-800 rounded-3xl text-sm text-slate-500">
          No articles match the parameters.
        </div>
      )}

      {/* 5. POST READING MODAL OVERLAY */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingPost(null)}
              className="absolute inset-0 bg-[#060914]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-200 dark:border-brand-green/10 p-6 md:p-8 shadow-2xl z-10 overflow-y-auto max-h-[85vh] text-slate-800 dark:text-slate-200"
            >
              {/* Close */}
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:text-rose-500 transition-colors cursor-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Metadata */}
              <div>
                <span className="text-[9px] font-black text-brand-green uppercase tracking-widest bg-brand-green/15 border border-brand-green/25 px-2 py-0.5 rounded">
                  {readingPost.categoryLabel}
                </span>
                <h2 className="text-xl sm:text-2xl font-black mt-3 leading-snug">
                  {readingPost.title}
                </h2>
                <div className="flex items-center gap-4 text-[9px] text-slate-450 dark:text-slate-400 mt-3.5 uppercase font-bold tracking-wider">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {readingPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {readingPost.readTime}</span>
                </div>
              </div>

              {/* Article Content Render */}
              <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-850/50 text-xs sm:text-sm leading-relaxed text-slate-650 dark:text-slate-300 flex flex-col gap-4 max-w-none prose dark:prose-invert">
                {/* Simulated Markdown parsing of paragraphs */}
                {readingPost.content.split("\n\n").map((para, i) => {
                  if (para.trim().startsWith("###")) {
                    return (
                      <h3 key={i} className="text-sm font-black text-slate-900 dark:text-white mt-4 first:mt-0">
                        {para.replace("###", "").trim()}
                      </h3>
                    );
                  }
                  
                  if (para.trim().startsWith("```")) {
                    // Extract code block content
                    const cleanCode = para.replace(/```[a-z]*/g, "").trim();
                    return (
                      <pre key={i} className="p-4 rounded-xl bg-slate-200 dark:bg-slate-950 border border-slate-300/40 dark:border-slate-850 font-mono text-[10px] text-slate-800 dark:text-slate-200 overflow-x-auto leading-relaxed">
                        <code>{cleanCode}</code>
                      </pre>
                    );
                  }

                  if (para.trim().startsWith("-")) {
                    const bulletItems = para.trim().split("\n");
                    return (
                      <ul key={i} className="list-disc pl-5 flex flex-col gap-1 text-xs">
                        {bulletItems.map((li, idx) => (
                          <li key={idx}>{li.replace("-", "").trim()}</li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={i} className="text-xs text-slate-550 dark:text-slate-400 font-medium">
                      {para.trim()}
                    </p>
                  );
                })}
              </div>

              {/* Consultation trigger footer */}
              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-850/50 text-center">
                <button
                  onClick={() => {
                    setReadingPost(null);
                    window.dispatchEvent(new CustomEvent("open-calendly"));
                  }}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-xs shadow-md hover:scale-101 transition-transform cursor-none"
                >
                  Consult with our Tech Authors
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
