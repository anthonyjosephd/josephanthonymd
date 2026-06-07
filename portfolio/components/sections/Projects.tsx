"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Neural Commerce Platform",
    category: "Full Stack + AI",
    description:
      "AI-powered e-commerce platform with real-time personalization, predictive inventory, and conversational shopping assistant. Handles 500K+ daily transactions.",
    stack: ["Next.js", "Python", "LangChain", "PostgreSQL", "Redis", "Stripe"],
    metrics: ["500K+ daily tx", "40% conversion lift", "99.97% uptime"],
    image: null,
    accent: "#c8a97e",
    featured: true,
  },
  {
    id: "02",
    title: "Architect OS",
    category: "SaaS Product",
    description:
      "End-to-end project management platform for architecture firms. Real-time collaboration, BIM integration, automated reporting, and custom AI document intelligence.",
    stack: ["React", "Node.js", "Three.js", "WebSockets", "AWS", "PostgreSQL"],
    metrics: ["200+ firms", "4.9/5 rating", "$2M ARR"],
    image: null,
    accent: "#7e9fc8",
    featured: true,
  },
  {
    id: "03",
    title: "Pulse Analytics",
    category: "Data Platform",
    description:
      "Real-time marketing analytics dashboard with AI insights engine. Connects 50+ data sources, generates actionable recommendations, and automates reporting.",
    stack: ["Vue.js", "FastAPI", "ClickHouse", "Apache Kafka", "OpenAI", "Docker"],
    metrics: ["50+ integrations", "Real-time data", "3x ROI reported"],
    image: null,
    accent: "#c87e9f",
    featured: false,
  },
  {
    id: "04",
    title: "CreatorKit Studio",
    category: "Creative Tools",
    description:
      "Browser-based creative suite for content creators. AI-assisted video editing, automated transcription, smart thumbnails, and multi-platform publishing.",
    stack: ["Next.js", "FFmpeg", "OpenAI", "WebAssembly", "S3", "Redis"],
    metrics: ["10K+ creators", "2M videos processed", "YC-backed"],
    image: null,
    accent: "#9fc87e",
    featured: false,
  },
  {
    id: "05",
    title: "LegalMind AI",
    category: "AI Application",
    description:
      "Document intelligence platform for law firms. Automated contract review, risk analysis, case research, and compliance monitoring using advanced LLM pipelines.",
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "React", "PostgreSQL"],
    metrics: ["60% time saved", "99% accuracy", "SOC2 certified"],
    image: null,
    accent: "#c8b57e",
    featured: false,
  },
];

export function Projects() {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">03 — Work</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-lg"
          >
            Selected{" "}
            <span className="italic text-[var(--color-accent)]">work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[var(--color-text-dim)] max-w-sm leading-relaxed"
          >
            A collection of systems built across industries — each one pushing
            what's possible at the intersection of design and engineering.
          </motion.p>
        </div>

        {/* Featured projects */}
        <div className="space-y-4 mb-4">
          {projects.filter((p) => p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="glass group relative overflow-hidden"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 0% 50%, ${project.accent}06, transparent 60%)` }}
              />
              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-dim)]">
                      {project.id}
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-widest px-2 py-0.5 border"
                      style={{ color: project.accent, borderColor: project.accent + "40" }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="font-mono text-[10px] tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)] px-2 py-0.5">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-dim)] leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] tracking-wide px-2 py-1 bg-[var(--color-muted)] text-[var(--color-text-dim)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-64 space-y-4">
                  <div className="font-mono text-[10px] tracking-widest text-[var(--color-text-dim)] uppercase mb-2">
                    Impact
                  </div>
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-3">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ background: project.accent }}
                      />
                      <span className="font-mono text-sm text-[var(--color-text)]">{metric}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <button className="group/btn flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-accent)] hover:gap-4 transition-all duration-300">
                      Case Study <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.filter((p) => !p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
              className="glass p-6 group relative overflow-hidden hover:border-opacity-50 transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}06, transparent 60%)` }}
              />
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-dim)]">{project.id}</span>
                <span
                  className="font-mono text-[10px] tracking-widest px-2 py-0.5 border"
                  style={{ color: project.accent, borderColor: project.accent + "40" }}
                >
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="font-mono text-[9px] tracking-wide px-1.5 py-0.5 bg-[var(--color-muted)] text-[var(--color-text-dim)]">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[var(--color-accent)] hover:gap-4 transition-all duration-300">
                View <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
