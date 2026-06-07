"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Chief Technology Officer",
    company: "Stealth Startup",
    period: "2023 — Present",
    description:
      "Leading all technical strategy, architecture decisions, and engineering culture. Scaled product from 0 to thousands of users. Built and managed cross-functional team of 12.",
    highlights: ["Built entire tech stack from scratch", "Raised seed round ($1.2M)", "Shipped 6 major product releases"],
    type: "Full-time",
  },
  {
    role: "Senior Full Stack Engineer",
    company: "Freelance / Contract",
    period: "2021 — 2023",
    description:
      "Delivered premium digital products for clients across fintech, healthtech, and creative industries. Specialized in high-performance React applications and AI integrations.",
    highlights: ["40+ clients served", "$500K+ in contracts", "Rated 5.0/5.0 across platforms"],
    type: "Contract",
  },
  {
    role: "Lead Frontend Engineer",
    company: "Digital Agency",
    period: "2020 — 2021",
    description:
      "Led frontend development for award-winning campaigns and products. Introduced modern React architecture, design systems, and performance optimization practices.",
    highlights: ["Led team of 5 engineers", "3 Awwwards nominations", "50% performance improvement"],
    type: "Full-time",
  },
  {
    role: "Full Stack Developer",
    company: "Product Studio",
    period: "2019 — 2020",
    description:
      "Built and maintained multiple SaaS products simultaneously. Contributed across full stack — from database schema design to pixel-perfect UI implementation.",
    highlights: ["Built 3 SaaS products", "Introduced automated testing", "Mentored 2 junior devs"],
    type: "Full-time",
  },
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-[var(--color-surface)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">04 — Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mb-16 leading-tight max-w-xl"
        >
          Built from the{" "}
          <span className="italic text-[var(--color-accent)]">ground up</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent hidden md:block" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative md:pl-12 pb-12 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-accent)] border border-[var(--color-bg)] hidden md:block group-hover:scale-150 transition-transform" />

                <div className="glass p-6 md:p-8 group-hover:border-[rgba(200,169,126,0.3)] transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[var(--color-text)] mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-[var(--color-accent)]">{exp.company}</span>
                        <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 border border-[var(--color-border)] text-[var(--color-text-dim)]">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[var(--color-text-dim)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[var(--color-text-dim)] leading-relaxed mb-4 max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 font-mono text-xs text-[var(--color-text-dim)]">
                        <span className="text-[var(--color-accent)]">✓</span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
