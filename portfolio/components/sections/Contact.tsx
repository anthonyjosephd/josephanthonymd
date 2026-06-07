"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", project: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24"
    >
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-orb bg-[var(--color-accent)] opacity-[0.03]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">07 — Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Let's build{" "}
              <span className="italic text-[var(--color-accent)]">something</span>{" "}
              remarkable
            </h2>
            <p className="text-[var(--color-text-dim)] text-lg leading-relaxed">
              Whether you have a defined project or just an idea you want to
              explore — I'd love to hear about it. I take on a limited number
              of clients each quarter to ensure full attention.
            </p>

            <div className="space-y-4">
              {[
                { label: "Email", value: "hello@josephanthony.dev", href: "mailto:hello@josephanthony.dev" },
                { label: "LinkedIn", value: "/in/josephanthonyduran", href: "#" },
                { label: "GitHub", value: "anthonyjosephd", href: "https://github.com/anthonyjosephd" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between glass p-4 group hover:border-[rgba(200,169,126,0.3)] transition-colors duration-300"
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-text-dim)]">
                    {link.label}
                  </span>
                  <span className="font-mono text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {link.value} →
                  </span>
                </a>
              ))}
            </div>

            <div className="glass p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-[var(--color-text-dim)] uppercase">
                  Current availability
                </span>
              </div>
              <p className="text-[var(--color-text)] font-medium">
                Open to new projects starting{" "}
                <span className="text-[var(--color-accent)]">Q3 2026</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {status === "sent" ? (
              <div className="glass p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-display text-2xl font-bold mb-2">Message received</h3>
                <p className="text-[var(--color-text-dim)]">
                  I'll review your project and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-text-dim)]">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        className="w-full bg-[var(--color-muted)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-text-dim)]">
                    Project Type
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full bg-[var(--color-muted)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="ai">AI Solutions</option>
                    <option value="design">UI/UX Design</option>
                    <option value="multimedia">Multimedia Production</option>
                    <option value="automation">Automation Systems</option>
                    <option value="leadership">Technical Leadership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-text-dim)]">
                    Tell me about your project
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you building? What's the timeline? Any specific requirements?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[var(--color-muted)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-xs tracking-widest uppercase font-semibold hover:bg-[var(--color-text)] transition-all duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 font-mono text-xs text-center">
                    Something went wrong. Email me directly at hello@josephanthony.dev
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
