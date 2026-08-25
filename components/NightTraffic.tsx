"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; vx: number; vy: number; a: number };
type Craft = {
  x: number;
  y: number;
  vx: number;
  color: string;
  blink: number;
  phase: number;
};

export default function NightTraffic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let crafts: Craft[] = [];
    let raf = 0;
    let running = false;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seed = () => {
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: 42 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 0.9,
        vx: -(0.02 + Math.random() * 0.06),
        vy: (Math.random() - 0.5) * 0.02,
        a: 0.08 + Math.random() * 0.22,
      }));
      crafts = Array.from({ length: 4 }, (_, i) => ({
        x: Math.random() * w,
        y: 40 + Math.random() * (h * 0.7),
        vx: (i % 2 === 0 ? 1 : -1) * (0.25 + Math.random() * 0.35),
        color: i % 2 === 0 ? "34,211,238" : "232,121,249",
        blink: 0.7 + Math.random() * 0.9,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -2) s.x = w + 2;
        if (s.y < -2) s.y = h + 2;
        if (s.y > h + 2) s.y = -2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 181, 253, ${s.a})`;
        ctx.fill();
      }
      for (const c of crafts) {
        c.x += c.vx;
        if (c.x < -30) c.x = w + 30;
        if (c.x > w + 30) c.x = -30;
        const blink = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.001 * c.blink + c.phase));
        // contrail
        const trail = 26 * Math.sign(c.vx);
        const grad = ctx.createLinearGradient(c.x - trail, c.y, c.x, c.y);
        grad.addColorStop(0, `rgba(${c.color}, 0)`);
        grad.addColorStop(1, `rgba(${c.color}, ${0.22 * blink})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(c.x - trail, c.y);
        ctx.lineTo(c.x, c.y);
        ctx.stroke();
        // light
        ctx.beginPath();
        ctx.arc(c.x, c.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.color}, ${0.85 * blink})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    seed();
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    const onResize = () => seed();
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
