"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const works = [
  {
    title: "Neural Commerce",
    description: "Designing the future of AI-powered e-commerce",
    category: "Full Stack + AI",
    img: "https://framerusercontent.com/images/WLJQduFa6kJyPUYts7PLBSvy2A.jpg",
  },
  {
    title: "Architect OS",
    description: "Building the complete project management system",
    category: "SaaS Platform",
    img: "https://framerusercontent.com/images/pr9BvjBWOBB0MeBvdryWgvng.png",
  },
  {
    title: "CreatorKit",
    description: "Weaving creator tools into a seamless experience",
    category: "Creative Tools",
    img: "https://framerusercontent.com/images/gSPlJuwM0MKIuMDtrd15gqVOOLQ.jpg",
  },
  {
    title: "LegalMind AI",
    description: "Crafting intelligent legal document analysis",
    category: "AI Application",
    img: "https://framerusercontent.com/images/GF4ssrVerG25QzdvMCyQSh48yHk.jpg",
  },
];

export function Works() {
  const { ref, inView } = useInView();

  return (
    <section
      id="works"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-10 border-t border-[rgba(255,255,255,0.08)]"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[clamp(1.5rem,4vw,2rem)] font-thin uppercase tracking-[-0.06em] text-white"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 100 }}
          >
            <span className="font-bold">FEATURED</span> Works
          </motion.h2>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="label text-white border-b border-white pb-0.5 hover:text-[#7d7d7d] hover:border-[#7d7d7d] transition-colors"
          >
            See all works
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="img-zoom relative overflow-hidden mb-3" style={{ aspectRatio: "0.8" }}>
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-white"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                    {work.title}
                  </h3>
                  <p className="text-sm text-[#7d7d7d] mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
                    {work.description}
                  </p>
                </div>
                <span className="label text-[#7d7d7d] whitespace-nowrap ml-4 mt-1">{work.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
