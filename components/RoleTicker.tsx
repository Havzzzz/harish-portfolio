"use client";

import { useEffect, useState } from "react";

// The first noun is the ROLE, not the technology. Solutions leads; the rest
// are the shapes that role has actually taken, each backed by a truth bullet.
const roles = [
  "a solutions engineer",
  "a delivery engineer",
  "a systems integrator",
  "an automation builder",
  "the vendors' point of contact",
];

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1800;

export default function RoleTicker() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const full = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < full.length) {
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), TYPE_MS);
      } else {
        t = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), DELETE_MS);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, roleIdx, reduce]);

  return (
    <p className="font-mono text-sm sm:text-base uppercase tracking-[0.18em] text-magenta">
      <span className="text-faint">/// </span>
      {reduce ? roles[0] : text}
      <span className="cursor-blink text-cyan">▍</span>
    </p>
  );
}
