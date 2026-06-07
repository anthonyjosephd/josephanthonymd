"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12;
      follower.style.transform = `translate(${followerPos.current.x - 18}px, ${followerPos.current.y - 18}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => cursor.classList.add("expanded");
    const onLeave = () => cursor.classList.remove("expanded");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
