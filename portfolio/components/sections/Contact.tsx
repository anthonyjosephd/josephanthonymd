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
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name: "", email: "", project: "", message: "" });
    } catch { setStatus("error"); }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-10 border-t border-[rgba(255,255,255,0.08)]"
    >
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-[-0.06em] text-white leading-none"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#7d7d7d] text-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            Whether you have a defined project or just an idea — I'd love to hear about it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
              <span className="label text-[#7d7d7d]">Email</span>
              <a href="mailto:hello@josephanthony.dev" className="text-white text-sm hover:text-[#7d7d7d] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}>
                hello@josephanthony.dev
              </a>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
              <span className="label text-[#7d7d7d]">LinkedIn</span>
              <a href="#" className="text-white text-sm hover:text-[#7d7d7d] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}>
                /in/josephanthonyduran
              </a>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
              <span className="label text-[#7d7d7d]">GitHub</span>
              <a href="https://github.com/anthonyjosephd" className="text-white text-sm hover:text-[#7d7d7d] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}>
                anthonyjosephd
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <p className="text-2xl text-white font-black uppercase mb-2" style={{ fontFamily: "Lato, sans-serif" }}>Message sent ✓</p>
              <p className="text-[#7d7d7d]" style={{ fontFamily: "Inter, sans-serif" }}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.name} className="space-y-1.5">
                  <label className="label text-[#7d7d7d]">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.2)] py-2 text-white placeholder-[#7d7d7d] focus:outline-none focus:border-white transition-colors text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
              ))}
              <div className="space-y-1.5">
                <label className="label text-[#7d7d7d]">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[rgba(255,255,255,0.2)] py-2 text-white placeholder-[#7d7d7d] focus:outline-none focus:border-white transition-colors text-sm resize-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="label text-white border-b border-white pb-0.5 hover:text-[#7d7d7d] hover:border-[#7d7d7d] transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send message →"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  Something went wrong. Email me directly.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
