"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { DOMAIN_HUE, DOMAIN_LABELS, projects, type Domain } from "@/content/site";
import { HUE_BORDER, HUE_CARD_HOVER, HUE_CHIP_ACTIVE, HUE_TEXT } from "@/lib/hues";
import SectionHeader from "./SectionHeader";

type Filter = Domain | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  ...(Object.entries(DOMAIN_LABELS) as [Domain, string][]).map(([value, label]) => ({
    value,
    label,
  })),
];

export default function Work() {
  const [active, setActive] = useState<Filter>("all");
  const reduce = useReducedMotion();
  const visible =
    active === "all" ? projects : projects.filter((p) => p.domains.includes(active));

  const onSpot = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="glow-magenta right-[-140px] top-[80px] h-[360px] w-[360px]" />
      <SectionHeader eyebrow="Selected work" title="Built, shipped, measured." />

      <div
        role="tablist"
        aria-label="Filter projects by domain"
        className="mb-10 flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const isActive = active === f.value;
          const activeCls =
            f.value === "all" ? HUE_CHIP_ACTIVE.all : HUE_CHIP_ACTIVE[DOMAIN_HUE[f.value]];
          return (
            <button
              key={f.value}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.value)}
              className={`font-mono text-xs uppercase tracking-[0.14em] px-4 py-2 border transition-colors ${
                isActive
                  ? activeCls
                  : "border-line text-dim hover:border-line-bright hover:text-fg"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const lead = p.domains[0];
              return (
                <motion.article
                  key={p.title}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  onMouseMove={onSpot}
                  className={`group spotlight flex flex-col border border-line bg-panel p-6 transition-all hover:-translate-y-1 ${HUE_CARD_HOVER[DOMAIN_HUE[lead]]}`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                    {p.domains.map((d, i) => (
                      <span key={d}>
                        <span className={HUE_TEXT[DOMAIN_HUE[d]]}>{DOMAIN_LABELS[d]}</span>
                        {i < p.domains.length - 1 && (
                          <span className="text-faint px-1.5">·</span>
                        )}
                      </span>
                    ))}
                  </p>
                  <h3 className="font-display text-2xl leading-snug mb-5">{p.title}</h3>

                  <dl className="flex flex-col gap-4 text-sm leading-relaxed flex-1">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint mb-1">
                        Problem
                      </dt>
                      <dd className="text-dim">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint mb-1">
                        Built
                      </dt>
                      <dd className="text-dim">{p.built}</dd>
                    </div>
                    <div className={`border-l-2 pl-3 ${HUE_BORDER[DOMAIN_HUE[lead]]}`}>
                      <dt
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-1 ${HUE_TEXT[DOMAIN_HUE[lead]]}`}
                      >
                        Result
                      </dt>
                      <dd className="text-fg">{p.result}</dd>
                    </div>
                  </dl>

                  <p className="mt-6 pt-4 border-t border-line font-mono text-[11px] text-faint">
                    {p.stack.join(" · ")}
                  </p>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
