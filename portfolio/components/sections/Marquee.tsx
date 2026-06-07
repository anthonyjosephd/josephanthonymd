"use client";

const items = [
  "Full Stack Development",
  "AI Engineering",
  "Creative Technology",
  "UI/UX Design",
  "Motion Design",
  "Video Production",
  "System Architecture",
  "Prompt Engineering",
  "Automation",
  "SEO",
];

export function Marquee() {
  return (
    <div className="py-8 overflow-hidden border-y border-[var(--color-border)] relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 mx-4">
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--color-text-dim)]">
              {item}
            </span>
            <span className="text-[var(--color-accent)] opacity-50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
