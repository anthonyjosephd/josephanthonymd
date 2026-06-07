"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Art Direction",
    description: "I provide creative leadership to ensure your brand's visuals, photography, and campaigns align beautifully with your identity, guiding every detail for a cohesive, polished result.",
    img: "https://framerusercontent.com/images/il2xuEmA8CeQHcLSG1SjZpTDys.jpg",
  },
  {
    title: "Brand Strategy",
    description: "I help uncover your brand's unique position in the market, define your audience, craft a clear message, and lay the foundation for a compelling visual identity.",
    img: "https://framerusercontent.com/images/NttmaohG1P69PNzRiBuwFbwDw0.webp",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web applications built with modern stacks. From architecture and database design to frontend and deployment — I own the full lifecycle.",
    img: "https://framerusercontent.com/images/SKwLwQq84WnB5bDrgWBresonBtw.jpg",
  },
  {
    title: "AI Engineering",
    description: "Custom AI applications that solve real problems. LLM-powered features, RAG systems, agents, automation pipelines, and intelligent interfaces.",
    img: "https://framerusercontent.com/images/MVF4o0NaWQhCbJN7HDqJdoa8bs.webp",
  },
  {
    title: "Marketing Materials",
    description: "I design all the materials you need to communicate with your audience, from sleek business cards and brochures to social media graphics and marketing assets.",
    img: "https://framerusercontent.com/images/G7F5lBUTxyEcvIEObsURpkAAN4c.jpg",
  },
  {
    title: "Visual Identity",
    description: "From logos and typography to colors and brand systems, I design distinctive visual identities that bring your brand's personality to life across every touchpoint.",
    img: "https://framerusercontent.com/images/gZRefHMvIF3jVM7Pv72QUN0.jpg",
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-10"
    >
      <div className="max-w-[1920px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[clamp(1.5rem,4vw,2rem)] font-thin uppercase tracking-[-0.06em] text-white mb-12"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          Services
        </motion.h2>

        {/* Services grid — 3 col like Framer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "0.8" }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Background image */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.8)" }}
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
                {/* Title + plus button */}
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-white"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                    {service.title}
                  </h3>
                  <div className="w-5 h-5 flex items-center justify-center relative flex-shrink-0">
                    <span className="absolute w-full h-px bg-white" />
                    <span className="absolute h-full w-px bg-white transition-transform duration-300 group-hover:rotate-90" />
                  </div>
                </div>

                {/* Description — slides up on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIdx === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-end gap-2"
                >
                  <p className="text-sm text-white leading-relaxed max-w-[280px]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
