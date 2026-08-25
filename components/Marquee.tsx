import { certifications } from "@/content/site";

const hueDots = ["bg-cyan", "bg-magenta", "bg-violet", "bg-rose"];

function Row() {
  return (
    <div className="marquee-row" aria-hidden="true">
      {certifications.map((c, i) => (
        <span
          key={c}
          className="mx-7 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-dim"
        >
          <span className={`inline-block h-1.5 w-1.5 rotate-45 ${hueDots[i % hueDots.length]}`} />
          {c}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="border-b border-line bg-panel-2/40 py-5 overflow-hidden"
      aria-label="Certifications"
    >
      <p className="sr-only">Certifications: {certifications.join(", ")}</p>
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </section>
  );
}
