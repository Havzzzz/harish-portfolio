import { education, experience } from "@/content/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="glow-cyan left-[-160px] top-[200px] h-[380px] w-[380px]" />
      <SectionHeader eyebrow="Experience" title="Where the numbers come from." />

      <div className="flex flex-col">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.06}>
            <div className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint pt-1.5">
                {role.dates}
              </p>
              <div>
                <h3 className="font-display text-3xl leading-snug">{role.company}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan mt-2 mb-4">
                  {role.title}
                </p>
                <p className="text-dim text-sm leading-relaxed mb-4 max-w-2xl">
                  {role.summary}
                </p>
                <ul className="flex flex-col gap-2.5 max-w-2xl">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-px w-4 shrink-0 bg-cyan" aria-hidden />
                      <span className="text-fg/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint pt-1.5">
              {education.dates}
            </p>
            <div>
              <h3 className="font-display text-3xl leading-snug">
                {education.institution}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan mt-2 mb-3">
                {education.degree}
              </p>
              <p className="text-dim text-sm leading-relaxed">
                Specializing in {education.specialization}, studying while working.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
