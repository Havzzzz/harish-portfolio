import { about } from "@/content/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="glow-violet left-[-140px] top-[60px] h-[360px] w-[360px]" />
      <SectionHeader eyebrow="About" title="Operator turned builder." />

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <Reveal>
          <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-dim max-w-2xl">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-line bg-panel p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-magenta mb-6">
              Flight log
            </p>
            <dl className="flex flex-col gap-5">
              {about.facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {f.label}
                  </dt>
                  <dd className="text-sm text-fg leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
