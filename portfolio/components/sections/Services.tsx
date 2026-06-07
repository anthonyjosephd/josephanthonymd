"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description: "End-to-end web applications built with modern stacks. From architecture and database design to frontend and deployment — I own the full lifecycle.",
    deliverables: ["Next.js / React Apps", "REST & GraphQL APIs", "Database Design", "Cloud Deployment"],
    accent: "#c8a97e",
  },
  {
    num: "02",
    title: "AI Solutions & Integration",
    description: "Custom AI applications that solve real problems. LLM-powered features, RAG systems, agents, automation pipelines, and intelligent interfaces.",
    deliverables: ["LLM Integration", "RAG Systems", "AI Agents", "Automation Pipelines"],
    accent: "#7e9fc8",
  },
  {
    num: "03",
    title: "UI/UX Design & Motion",
    description: "Premium interfaces that feel as good as they look. Design systems, interactive prototypes, and production-ready code with fluid motion.",
    deliverables: ["Design Systems", "Interactive Prototypes", "Motion Design", "Responsive UI"],
    accent: "#c87e9f",
  },
  {
    num: "04",
    title: "Multimedia Production",
    description: "High-quality video production, motion graphics, and creative content for brands that want to stand out in the digital landscape.",
    deliverables: ["Video Editing", "Motion Graphics", "3D Animation", "Brand Content"],
    accent: "#9fc87e",
  },
  {
    num: "05",
    title: "Automation Systems",
    description: "Intelligent workflows that eliminate manual work. n8n, Zapier, custom scripts, and AI-powered automations that scale with your business.",
    deliverables: ["Workflow Automation", "AI Pipelines", "API Integrations", "CRM Automation"],
    accent: "#c8b57e",
  },
  {
    num: "06",
    title: "Technical Leadership",
    description: "CTO-level strategy for startups and scale-ups. Architecture decisions, team building, technical roadmaps, and engineering culture.",
    deliverables: ["Tech Strategy", "Team Building", "Code Review", "Architecture Design"],
    accent: "#7ec8b5",
  },
];

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
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
          <span className="section-label">05 — Services</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-lg"
          >
            What I{" "}
            <span className="italic text-[var(--color-accent)]">offer</span>
          </motion.h2>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-accent)] hover:gap-4 transition-all duration-300 whitespace-nowrap"
          >
            Discuss your project <span>→</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-7 group hover:border-opacity-50 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 0% 100%, ${service.accent}07, transparent 70%)` }}
              />

              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-3xl font-light" style={{ color: service.accent + "40" }}>
                  {service.num}
                </span>
                <div
                  className="w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ background: service.accent }}
                />
              </div>

              <h3
                className="font-display text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--color-text)]"
                style={{ color: service.accent }}
              >
                {service.title}
              </h3>

              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              <div className="border-t border-[var(--color-border)] pt-4 space-y-2">
                {service.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="font-mono text-[9px]" style={{ color: service.accent }}>▸</span>
                    <span className="font-mono text-[10px] tracking-wide text-[var(--color-text-dim)]">{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
