"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#", label: "Home" },
  { href: "#legacy", label: "Legacy" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[rgba(15,15,15,0.95)] backdrop-blur-xl" : ""
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-[42px] h-[44px] relative">
              <img
                src="https://framerusercontent.com/images/996c4rru2UztTiQ8gTDZB97Gb3Y.png"
                alt="JAD"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="label text-white hover:text-[#7d7d7d] transition-colors duration-150 py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Clock / time */}
          <div className="hidden md:block label text-right">
            <Time />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0f0f0f] flex flex-col items-center justify-center gap-10"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: "Lato, sans-serif" }}
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

function Time() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}
