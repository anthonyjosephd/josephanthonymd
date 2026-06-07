"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX / w, y: e.clientY / h }; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    // Floating image cards (like the Framer site hover effect)
    const images = [
      { x: 0, y: 0, vx: 0.2, vy: 0.15, w: 180, h: 220, opacity: 0, targetOpacity: 0, color: "#2a2a2a" },
      { x: 0, y: 0, vx: -0.15, vy: 0.2, w: 160, h: 200, opacity: 0, targetOpacity: 0, color: "#222" },
      { x: 0, y: 0, vx: 0.25, vy: -0.18, w: 170, h: 210, opacity: 0, targetOpacity: 0, color: "#1e1e1e" },
      { x: 0, y: 0, vx: -0.2, vy: -0.15, w: 150, h: 190, opacity: 0, targetOpacity: 0, color: "#252525" },
      { x: 0, y: 0, vx: 0.18, vy: 0.22, w: 165, h: 205, opacity: 0, targetOpacity: 0, color: "#1c1c1c" },
    ];

    // Initialize positions
    images.forEach((img, i) => {
      img.x = w * 0.15 + (w * 0.7 / images.length) * i;
      img.y = h * 0.2 + Math.random() * h * 0.6;
    });

    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);

      // Subtle gradient following mouse
      const grd = ctx.createRadialGradient(
        mouseRef.current.x * w, mouseRef.current.y * h, 0,
        w / 2, h / 2, Math.max(w, h) * 0.7
      );
      grd.addColorStop(0, "rgba(255,255,255,0.025)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Floating cards
      images.forEach((img, i) => {
        img.x += img.vx;
        img.y += img.vy;

        // Bounce
        if (img.x < 0 || img.x + img.w > w) img.vx *= -1;
        if (img.y < 0 || img.y + img.h > h) img.vy *= -1;

        // Mouse proximity reveal
        const cx = img.x + img.w / 2;
        const cy = img.y + img.h / 2;
        const dx = mouseRef.current.x * w - cx;
        const dy = mouseRef.current.y * h - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        img.targetOpacity = dist < 300 ? Math.max(0, 1 - dist / 300) * 0.6 : 0;
        img.opacity += (img.targetOpacity - img.opacity) * 0.05;

        if (img.opacity < 0.01) return;

        // Draw card
        ctx.save();
        ctx.globalAlpha = img.opacity;
        ctx.fillStyle = img.color;
        ctx.beginPath();
        ctx.roundRect(img.x, img.y, img.w, img.h, 2);
        ctx.fill();
        // Subtle inner gradient
        const ig = ctx.createLinearGradient(img.x, img.y, img.x, img.y + img.h);
        ig.addColorStop(0, "rgba(255,255,255,0.05)");
        ig.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = ig;
        ctx.fill();
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Big centered title — like the Framer site */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(4rem,14vw,13rem)] font-black leading-none tracking-[-0.06em] uppercase text-white"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          JOSEPH<br />ANTHONY<br />DURAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-6 text-sm tracking-widest uppercase text-[#7d7d7d]"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Multimedia Designer · Web Developer · AI Engineer
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent opacity-30 animate-pulse" />
      </motion.div>
    </section>
  );
}
