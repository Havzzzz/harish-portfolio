"use client";

import { useRef, useState } from "react";
import { personal, readouts } from "@/content/site";
import Readout from "./Readout";
import RoleTicker from "./RoleTicker";
import NightTraffic from "./NightTraffic";

const statusTokens = [
  { label: "Analytics", cls: "text-magenta" },
  { label: "Automation", cls: "text-cyan" },
  { label: "Product", cls: "text-violet" },
];

function rise(step: number): React.CSSProperties {
  return { ["--rise-delay" as string]: `${step * 0.12}s` };
}

function Portrait() {
  const [missing, setMissing] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
  };
  const onLeave = () => {
    const el = tiltRef.current;
    if (el) el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className="anim-rise badge-bob relative pt-9" style={rise(3)}>
      {/* availability chip */}
      <div className="absolute -top-1 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap border border-violet/40 bg-panel-2 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-violet shadow-[0_8px_30px_rgb(0_0_0/0.45)]">
        <span className="status-dot text-violet" />
        Open to opportunities
      </div>
      <div
        ref={tiltRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="tilt relative w-[280px] sm:w-[320px] border border-line bg-panel-2"
      >
        {/* reticle corner ticks */}
        <span className="absolute -top-px -left-px z-10 h-4 w-4 border-t-2 border-l-2 border-cyan" />
        <span className="absolute -top-px -right-px z-10 h-4 w-4 border-t-2 border-r-2 border-cyan" />
        <span className="absolute -bottom-px -left-px z-10 h-4 w-4 border-b-2 border-l-2 border-cyan" />
        <span className="absolute -bottom-px -right-px z-10 h-4 w-4 border-b-2 border-r-2 border-cyan" />

        <div className="h-[340px] sm:h-[390px] overflow-hidden">
          {missing ? (
            <div className="flex h-full flex-col items-center justify-center gap-3">
              <span className="font-display text-6xl text-dim">HP</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                portrait / profile.jpg
              </span>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/profile.jpg"
              alt={`Portrait of ${personal.name}`}
              className="h-full w-full object-cover object-top"
              onError={() => setMissing(true)}
            />
          )}
        </div>

        {/* crew badge data plate */}
        <div className="border-t border-line bg-panel px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em]">
          <div className="flex items-center justify-between">
            <span className="text-fg">Prabhu / Harish</span>
            <span className="text-cyan">SIN</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-faint">
            <span>Analyst · Builder</span>
            <span className="text-violet">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-grid relative overflow-hidden pt-14">
      {/* ambient color depth + night traffic */}
      <div className="glow-cyan left-[-120px] top-[60px] h-[420px] w-[420px]" />
      <div className="glow-magenta right-[-80px] top-[280px] h-[380px] w-[380px]" />
      <NightTraffic />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 sm:pt-24 pb-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div
              className="anim-rise flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-dim mb-6"
              style={rise(0)}
            >
              {statusTokens.map((t, i) => (
                <span key={t.label} className="flex items-center gap-2">
                  <span
                    className={`status-dot ${t.cls}`}
                    style={{ ["--dot-delay" as string]: `${i * 0.4}s` }}
                  />
                  {t.label}
                </span>
              ))}
              <span className="text-faint">· Singapore</span>
            </div>

            <h1
              className="anim-rise font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95]"
              style={rise(1)}
            >
              Harish <em className="grad-text">Prabhu</em>
            </h1>

            <div className="anim-rise mt-5" style={rise(2)}>
              <RoleTicker />
            </div>

            <p
              className="anim-rise mt-6 font-display text-2xl sm:text-3xl leading-snug max-w-2xl text-fg/95"
              style={rise(2)}
            >
              I turn messy operations into{" "}
              <em className="text-magenta">automated</em>,{" "}
              <em className="text-violet">measurable</em> systems.
            </p>

            <p
              className="anim-rise mt-6 max-w-xl text-base sm:text-lg text-dim leading-relaxed"
              style={rise(3)}
            >
              {personal.subline}
            </p>

            <div className="anim-rise mt-9 flex flex-wrap items-center gap-4" style={rise(4)}>
              <a
                href={`mailto:${personal.email}`}
                className="bg-cyan text-ink font-mono text-sm uppercase tracking-[0.12em] px-5 py-3 transition-all hover:bg-fg hover:-translate-y-0.5"
              >
                Email me
              </a>
              <a
                href={personal.resumePath}
                download
                className="border border-line-bright font-mono text-sm uppercase tracking-[0.12em] px-5 py-3 text-fg transition-all hover:border-magenta hover:text-magenta hover:-translate-y-0.5"
              >
                Resume PDF
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-[0.12em] text-dim hover:text-magenta transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-[0.12em] text-dim hover:text-magenta transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end lg:pr-4">
            <Portrait />
          </div>
        </div>
      </div>

      {/* instrument strip */}
      <div
        className="anim-rise relative border-y border-line bg-panel-2/60"
        style={rise(5)}
        aria-label="Selected results from real projects"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 divide-x divide-line border-x border-line">
          {readouts.map((r) => (
            <Readout key={r.label} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
