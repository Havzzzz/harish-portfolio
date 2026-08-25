"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import type { Hue } from "@/content/site";
import { HUE_BG, HUE_TEXT } from "@/lib/hues";

type Props = {
  label: string;
  unit: string;
  from: number;
  to: number;
  detail: string;
  kind: "gauge" | "delta" | "count";
  hue: Hue;
};

function format(n: number, kind: Props["kind"], to: number) {
  const rounded = Math.round(n);
  const abs = Math.abs(rounded).toLocaleString("en-US");
  const sign = rounded < 0 ? "-" : "";
  const plus = kind === "count" && to >= 1000 ? "+" : "";
  return `${sign}${abs}${plus}`;
}

export default function Readout({ label, unit, from, to, detail, kind, hue }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : from);
  const [settled, setSettled] = useState(!!reduce);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(from, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
      onComplete: () => setSettled(true),
    });
    return () => controls.stop();
  }, [inView, from, to, reduce]);

  const barPct = kind === "gauge" ? to : kind === "delta" ? Math.abs(to) : null;

  return (
    <div ref={ref} className="px-5 py-5 sm:px-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint mb-2">
        {label}
      </p>
      <p className="readout-value text-3xl sm:text-4xl">
        {format(value, kind, to)}
        <span className="text-dim text-lg ml-1">{unit}</span>
      </p>
      {barPct !== null && (
        <div className="mt-3 h-px bg-line relative overflow-hidden">
          <span
            className={`absolute inset-y-0 left-0 ${HUE_BG[hue]} transition-[width] duration-[1800ms] ease-out`}
            style={{ width: inView || reduce ? `${barPct}%` : `${Math.abs(from)}%` }}
          />
        </div>
      )}
      <p
        className={`font-mono text-[10px] tracking-wide mt-3 transition-colors duration-500 ${
          settled ? HUE_TEXT[hue] : "text-faint"
        }`}
      >
        {detail}
      </p>
    </div>
  );
}
