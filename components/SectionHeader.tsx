import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="rule-tick mb-8" />
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-12">
        {title}
      </h2>
    </Reveal>
  );
}
