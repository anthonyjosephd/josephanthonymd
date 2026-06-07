"use client";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const career = [
  { period: "(2017 - 2019)", role: "Junior Designer at Studio 74" },
  { period: "(2019 - 2021)", role: "Brand Designer at Casa Taller" },
  { period: "(2021 – 2023)", role: "Lead Designer at Forma.mx" },
  { period: "(2023 – now)", role: "Independent Brand Designer" },
];

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-10"
    >
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: About content */}
          <div className="flex-1 max-w-2xl space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8 }}
              className="text-[clamp(1.5rem,4vw,2rem)] font-medium uppercase tracking-[-0.06em] text-white"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              About me
            </motion.h2>

            {/* What I do */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-1"
            >
              <p className="label text-[#7d7d7d]">What I do</p>
              <p className="text-lg text-white leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
                I help brands find clarity and express it through strong, thoughtful design.
              </p>
            </motion.div>

            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-1"
            >
              <p className="label text-[#7d7d7d]">My background</p>
              <p className="text-lg text-white leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
                Originally from CDMX, I've been designing identities for 7+ years, working with startups, restaurants, hoteliers, and creative founders across Mexico and beyond.
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-1"
            >
              <p className="label text-[#7d7d7d]">My approach</p>
              <p className="text-lg text-white leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
                I believe good design starts with empathy. I ask questions, listen closely, and build brands that feel as good as they look, honest, beautiful, and built to last.
              </p>
            </motion.div>
          </div>

          {/* Right: Career + Photo */}
          <div className="lg:flex-1 flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Career */}
            <div className="space-y-1">
              <p className="label text-[#7d7d7d] mb-4">Career</p>
              {career.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <p className="label text-[#7d7d7d]">{item.period}</p>
                  <p className="text-base text-white mb-3"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
                    {item.role}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="self-start overflow-hidden"
              style={{ width: "min(200px, 100%)" }}
            >
              <img
                src="https://framerusercontent.com/images/XH67Ijg1D2xi8jBShUUVmqLCh0o.png"
                alt="Joseph Anthony Duran"
                className="w-full object-cover"
                onError={(e) => {
                  // Fallback placeholder
                  (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250'%3E%3Crect width='200' height='250' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%237d7d7d' font-size='14' font-family='Inter'%3EJAD%3C/text%3E%3C/svg%3E";
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
