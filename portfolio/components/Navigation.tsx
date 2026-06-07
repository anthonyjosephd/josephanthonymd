"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[rgba(8,8,8,0.92)] backdrop-blur-xl border-b border-[var(--color-border)]"
            : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] flex items-center justify-center text-[var(--color-bg)] font-display font-bold text-sm">
              J
            </div>
            <span className="font-mono text-xs tracking-widest text-[var(--color-text-dim)] uppercase group-hover:text-[var(--color-accent)] transition-colors">
              Joseph Anthony
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-[var(--color-accent)] text-[var(--color-accent)] font-mono text-xs tracking-widest uppercase hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-all duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-px bg-[var(--color-text)] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-[var(--color-text)] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-[var(--color-text)] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
