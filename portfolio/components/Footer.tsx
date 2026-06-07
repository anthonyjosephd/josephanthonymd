"use client";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] flex items-center justify-center text-[var(--color-bg)] font-display font-bold text-xs">
            J
          </div>
          <span className="font-mono text-xs tracking-widest text-[var(--color-text-dim)]">
            Joseph Anthony Duran
          </span>
        </div>

        <div className="flex items-center gap-8">
          {["GitHub", "LinkedIn", "Dribbble", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-widest">
          © 2026 · Crafted with precision
        </div>
      </div>
    </footer>
  );
}
