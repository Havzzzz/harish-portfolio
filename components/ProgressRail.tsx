"use client";

import { useEffect, useState } from "react";

const waypoints = [
  { id: "top", label: "DEP" },
  { id: "about", label: "ABT" },
  { id: "work", label: "WRK" },
  { id: "experience", label: "EXP" },
  { id: "skills", label: "SKL" },
  { id: "beyond", label: "OFF" },
  { id: "contact", label: "ARR" },
];

export default function ProgressRail() {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      let current = waypoints[0].id;
      for (const w of waypoints) {
        const el = document.getElementById(w.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = w.id;
        }
      }
      setActiveId(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="relative flex h-[46vh] flex-col items-center">
        {/* track */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line" />
        {/* flown portion */}
        <div
          className="absolute top-0 left-1/2 w-px -translate-x-1/2 bg-cyan transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
        {/* aircraft caret */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[top] duration-150"
          style={{ top: `${progress * 100}%` }}
        >
          <span className="block h-2.5 w-2.5 rotate-45 border-2 border-cyan bg-ink" />
        </div>
        {/* waypoints */}
        <div className="relative flex h-full flex-col justify-between py-0">
          {waypoints.map((w) => {
            const isActive = activeId === w.id;
            return (
              <a
                key={w.id}
                href={`#${w.id}`}
                aria-label={`Go to ${w.label}`}
                className="group relative flex items-center"
              >
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-colors ${
                    isActive ? "bg-cyan" : "bg-line-bright group-hover:bg-dim"
                  }`}
                />
                <span
                  className={`absolute right-4 font-mono text-[9px] tracking-[0.2em] transition-opacity ${
                    isActive ? "text-cyan opacity-100" : "text-faint opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {w.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
