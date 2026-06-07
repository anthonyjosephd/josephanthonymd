"use client";

const items = ["Full Stack Development", "AI Engineering", "Multimedia Design", "Web Development", "Brand Strategy", "Motion Design", "Prompt Engineering", "SEO", "Automation", "Video Editing"];

export function Marquee() {
  return (
    <div className="py-5 overflow-hidden border-y border-[rgba(255,255,255,0.08)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 mx-3">
            <span className="label text-[#7d7d7d]">{item}</span>
            <span className="text-[#7d7d7d] opacity-40">×</span>
          </div>
        ))}
      </div>
    </div>
  );
}
