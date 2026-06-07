"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const socials = ["Email", "Instagram", "Threads", "X (Twitter)"];

export function Footer() {
  const { ref, inView } = useInView();

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="relative border-t border-[rgba(255,255,255,0.08)] overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      {/* Background image like Framer site */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/fxtXBhCuhtFUFA1QQbvMxG7tA.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-[#0f0f0f] opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-10 py-16 flex flex-col gap-12">
        {/* Big CTA */}
        <div className="flex flex-col gap-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,6vw,5rem)] font-thin uppercase tracking-[-0.06em] text-white hover:text-[#7d7d7d] transition-colors leading-none"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 100 }}
          >
            Crafting{" "}
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(1.5rem,4vw,2rem)] font-medium uppercase tracking-[-0.06em] text-white hover:text-[#7d7d7d] transition-colors leading-none"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            What's Next
          </motion.a>
        </div>

        {/* Socials + copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="label text-white hover:text-[#7d7d7d] transition-colors border-b border-transparent hover:border-[#7d7d7d] pb-0.5"
              >
                {social}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <img
              src="https://framerusercontent.com/images/996c4rru2UztTiQ8gTDZB97Gb3Y.png"
              alt="JAD"
              className="w-8 h-8 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span className="label" style={{ color: "rgb(0, 201, 219)" }}>
              JOSEPH ANTHONY DURAN © 2026
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
