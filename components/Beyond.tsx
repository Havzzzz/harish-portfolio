import { beyond } from "@/content/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Beyond() {
  return (
    <section id="beyond" className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="glow-rose left-[-100px] top-[40px] h-[320px] w-[320px]" />
      <SectionHeader eyebrow="Off duty" title="Instruments of a different kind." />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {beyond.map((b, i) => {
          const ticks = ["bg-cyan", "bg-magenta", "bg-violet", "bg-rose"];
          return (
            <Reveal key={b.label} delay={i * 0.06}>
              <span
                className={`mb-4 inline-block h-1 w-8 ${ticks[i % ticks.length]}`}
              />
              <h3 className="font-display text-2xl mb-3">{b.label}</h3>
              <p className="text-sm leading-relaxed text-dim">{b.line}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
