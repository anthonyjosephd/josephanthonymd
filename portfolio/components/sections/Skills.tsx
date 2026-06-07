"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Full Stack Development",
    icon: "⬡",
    items: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "Redis", "GraphQL"],
    accent: "#c8a97e",
  },
  {
    category: "AI Engineering",
    icon: "◈",
    items: ["LLM Integration", "Prompt Engineering", "LangChain", "OpenAI API", "RAG Systems", "Fine-tuning", "Embeddings", "Agents"],
    accent: "#7e9fc8",
  },
  {
    category: "Software Engineering",
    icon: "◇",
    items: ["System Design", "Microservices", "DevOps", "CI/CD", "AWS", "Docker", "Kubernetes", "API Design"],
    accent: "#c87e9f",
  },
  {
    category: "UI/UX Design",
    icon: "○",
    items: ["Figma", "Design Systems", "Prototyping", "User Research", "Motion Design", "Accessibility", "Responsive", "Interaction"],
    accent: "#9fc87e",
  },
  {
    category: "Multimedia & Creative",
    icon: "◎",
    items: ["Video Editing", "Motion Graphics", "3D Modeling", "After Effects", "Premiere Pro", "Blender", "Illustration", "Brand"],
    accent: "#c8b57e",
  },
  {
    category: "Growth & Strategy",
    icon: "◉",
    items: ["SEO", "Analytics", "Automation", "CRM Systems", "Email Marketing", "A/B Testing", "Performance", "Conversion"],
    accent: "#7ec8b5",
  },
];

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
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
          <span className="section-label">02 — Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mb-16 max-w-2xl leading-tight"
        >
          The complete{" "}
          <span className="italic text-[var(--color-accent)]">arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-6 group hover:border-opacity-50 transition-all duration-300 relative overflow-hidden"
              style={{ "--card-accent": skill.accent } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${skill.accent}08, transparent 70%)` }}
              />
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-2xl"
                  style={{ color: skill.accent }}
                >
                  {skill.icon}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-dim)] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="font-display text-lg font-bold mb-4 transition-colors duration-300"
                style={{ color: inView ? skill.accent : "var(--color-text)" }}
              >
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] tracking-wide px-2 py-1 rounded-sm text-[var(--color-text-dim)] border border-[var(--color-border)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
