const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond", label: "Off duty" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-ink/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="inline-block h-2.5 w-2.5 bg-cyan transition-transform group-hover:rotate-45" />
          <span className="font-mono text-sm tracking-[0.18em] uppercase">
            Harish P
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-dim hover:text-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="sm:hidden font-mono text-xs uppercase tracking-[0.15em] text-cyan"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
