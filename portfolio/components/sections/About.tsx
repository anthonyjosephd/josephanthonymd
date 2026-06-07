"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Building" },
  { value: "40+", label: "Projects Shipped" },
  { value: "3x", label: "CTO Experience" },
  { value: "∞", label: "Curiosity" },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">01 — About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              I build things that{" "}
              <span className="italic text-[var(--color-accent)]">matter</span>
              ,<br />at every layer of
              <br />the stack.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-[var(--color-text-dim)] leading-relaxed"
            >
              <p>
                I'm a Full Stack Developer, AI Engineer, and Creative
                Technologist who doesn't believe in the artificial boundaries
                between design, engineering, and intelligence. I collapse them.
              </p>
              <p>
                Having served as CTO, I've led teams, architected systems from
                scratch, and shipped products that reach real users. Every
                project I take on, I treat like it's my company — because how
                you build anything is how you build everything.
              </p>
              <p>
                I work at the intersection of performance and beauty — where
                fast systems meet thoughtful design, and where AI amplifies
                human creativity rather than replacing it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
              >
                Work Together <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass p-6 group hover:border-[var(--color-accent)] transition-colors duration-300"
                >
                  <div className="font-display text-4xl font-black text-[var(--color-accent)] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs tracking-widest uppercase text-[var(--color-text-dim)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 gradient-orb bg-[var(--color-accent)] opacity-5" />
              <div className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-4">
                Philosophy
              </div>
              <blockquote className="font-display text-xl italic text-[var(--color-text)] leading-relaxed">
                "The best products are built at the intersection of what's
                possible, what's beautiful, and what people actually need."
              </blockquote>
              <div className="mt-4 font-mono text-xs text-[var(--color-text-dim)]">
                — Joseph Anthony Duran
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
