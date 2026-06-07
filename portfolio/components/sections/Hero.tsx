"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const roles = ["Full Stack Developer", "AI Engineer", "Creative Technologist"];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / w, y: e.clientY / h };
    };
    window.addEventListener("mousemove", onMouse);

    // Particles
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ["rgba(200,169,126,", "rgba(126,159,200,", "rgba(240,236,230,"];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);

      // Background gradient
      const grd = ctx.createRadialGradient(
        w * mouseRef.current.x, h * mouseRef.current.y, 0,
        w * 0.5, h * 0.5, Math.max(w, h) * 0.8
      );
      grd.addColorStop(0, "rgba(200,169,126,0.06)");
      grd.addColorStop(0.5, "rgba(126,159,200,0.03)");
      grd.addColorStop(1, "rgba(8,8,8,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = "rgba(200,169,126,0.04)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw particles
      particles.forEach((p) => {
        // Mouse attraction
        const dx = mouseRef.current.x * w - p.x;
        const dy = mouseRef.current.y * h - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += (dx / dist) * 0.01;
          p.vy += (dy / dist) * 0.01;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ")";
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200,169,126,${(1 - d / 100) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden px-6 md:px-16 lg:px-24">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-orb bg-[var(--color-accent)] opacity-[0.04]" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 gradient-orb bg-[var(--color-accent-2)] opacity-[0.04]" />

      <motion.div
        className="relative z-10 max-w-7xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-[var(--color-text-dim)] uppercase">
            Available for projects
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-black text-[var(--color-text)] tracking-tight">
            Joseph
          </h1>
        </motion.div>
        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-text)] to-[var(--color-accent-2)] tracking-tight">
            Anthony
          </h1>
        </motion.div>
        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-black text-[var(--color-text)] tracking-tight">
            Duran
          </h1>
        </motion.div>

        {/* Role line */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
          {roles.map((role, i) => (
            <div key={role} className="flex items-center gap-4">
              <span className="font-mono text-sm md:text-base text-[var(--color-text-dim)]">
                {role}
              </span>
              {i < roles.length - 1 && (
                <span className="text-[var(--color-accent)] opacity-50">·</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-xl text-[var(--color-text-dim)] text-base md:text-lg leading-relaxed font-light"
        >
          Building premium digital systems end-to-end — from architecture to
          interfaces, from AI integration to creative motion. Every pixel
          matters.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-3 px-6 py-3.5 bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-xs tracking-widest uppercase font-semibold hover:bg-[var(--color-text)] transition-all duration-300"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-6 py-3.5 border border-[var(--color-border)] text-[var(--color-text-dim)] font-mono text-xs tracking-widest uppercase hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 right-0 md:right-16 flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-dim)] uppercase rotate-90 origin-center mt-4">
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-6 md:left-16 lg:left-24 flex items-center gap-6"
      >
        {["GitHub", "LinkedIn", "Dribbble"].map((social) => (
          <a
            key={social}
            href="#"
            className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors"
          >
            {social}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
