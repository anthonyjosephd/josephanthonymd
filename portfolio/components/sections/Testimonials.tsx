"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    text: "Joseph didn't just build our platform — he architected a system that scaled 10x beyond what we thought possible. His ability to move fast without breaking things is rare.",
    author: "Sarah Chen",
    role: "CEO, NeuralCommerce",
    initials: "SC",
    accent: "#c8a97e",
  },
  {
    text: "Working with Joseph felt like having a co-founder who happened to be a brilliant engineer. He cares deeply about the product, the users, and the business outcomes — not just the code.",
    author: "Marcus Rodriguez",
    role: "Founder, ArchitectOS",
    initials: "MR",
    accent: "#7e9fc8",
  },
  {
    text: "The AI integration Joseph built for us processes thousands of documents daily with 99% accuracy. He delivered in half the time we expected and the quality was exceptional.",
    author: "Amanda Foster",
    role: "CTO, LegalMind AI",
    initials: "AF",
    accent: "#c87e9f",
  },
  {
    text: "Joseph brings an extraordinary combination of technical depth and design sensibility. Our product's NPS jumped 40 points after he redesigned the frontend architecture.",
    author: "David Kim",
    role: "VP Product, Pulse Analytics",
    initials: "DK",
    accent: "#9fc87e",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section
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
          <span className="section-label">06 — Testimonials</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mb-16 leading-tight max-w-xl"
        >
          What people{" "}
          <span className="italic text-[var(--color-accent)]">say</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 relative overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 gradient-orb opacity-10"
              style={{ background: testimonials[active].accent }}
            />
            <div
              className="font-display text-6xl mb-6 leading-none"
              style={{ color: testimonials[active].accent }}
            >
              "
            </div>
            <p className="font-display text-xl md:text-2xl italic text-[var(--color-text)] leading-relaxed mb-8">
              {testimonials[active].text}
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold text-[var(--color-bg)]"
                style={{ background: testimonials[active].accent }}
              >
                {testimonials[active].initials}
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text)] text-sm">
                  {testimonials[active].author}
                </div>
                <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-widest uppercase">
                  {testimonials[active].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* List */}
          <div className="space-y-3">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.author}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                onClick={() => setActive(i)}
                className={`w-full text-left glass p-5 transition-all duration-300 group ${
                  active === i ? "border-[var(--color-accent)] border-opacity-50" : "hover:border-opacity-30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0"
                    style={{
                      background: active === i ? t.accent : "var(--color-muted)",
                      color: active === i ? "var(--color-bg)" : "var(--color-text-dim)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-[var(--color-text)]">{t.author}</div>
                    <div className="font-mono text-[9px] text-[var(--color-text-dim)] tracking-widest uppercase truncate">
                      {t.role}
                    </div>
                  </div>
                  {active === i && (
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: t.accent }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
