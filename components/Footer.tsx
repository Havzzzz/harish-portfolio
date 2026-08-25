import { personal } from "@/content/site";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="mt-28 border-t border-line bg-panel-2/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan mb-5">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-6xl leading-tight max-w-3xl">
            Have a messy system that should be measuring itself?
          </h2>
          <a
            href={`mailto:${personal.email}`}
            className="mt-8 inline-block font-mono text-lg sm:text-2xl text-fg underline decoration-cyan decoration-2 underline-offset-8 hover:text-cyan transition-colors break-all"
          >
            {personal.email}
          </a>
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-dim hover:text-cyan transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-dim hover:text-cyan transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={personal.resumePath}
              download
              className="font-mono text-xs uppercase tracking-[0.15em] text-dim hover:text-cyan transition-colors"
            >
              Resume PDF ↓
            </a>
          </div>
        </Reveal>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <p className="font-mono text-[11px] text-faint">
            {personal.fullName} · {personal.location}
          </p>
          <p className="font-mono text-[11px] text-faint">
            Built with Next.js · Every number on this page comes from real, verifiable work
          </p>
        </div>
      </div>
    </footer>
  );
}
