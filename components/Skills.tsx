import { skillGroups } from "@/content/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const groupHues = ["text-magenta", "text-violet", "text-cyan", "text-rose"];
const groupDots = ["bg-magenta", "bg-violet", "bg-cyan", "bg-rose"];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="glow-violet right-[-120px] top-[60px] h-[340px] w-[340px]" />
      <SectionHeader eyebrow="Skills" title="The toolkit." />
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.05} className="bg-panel">
            <div className="p-7 h-full">
              <h3
                className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] mb-4 ${groupHues[i % groupHues.length]}`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 ${groupDots[i % groupDots.length]}`}
                />
                {g.label}
              </h3>
              <p className="text-sm leading-loose text-fg/85">
                {g.items.map((item, j) => (
                  <span key={item}>
                    {item}
                    {j < g.items.length - 1 && (
                      <span className="text-faint px-2">·</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
