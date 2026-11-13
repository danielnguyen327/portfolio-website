import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav aria-label="Main" className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5">
      <a href="#top" className="py-2 text-[17px] font-bold tracking-[-0.02em] no-underline">
        {site.name}
      </a>
      <div className="flex flex-wrap gap-1 rounded-xl border border-ink/12 bg-[#081321]/70 p-1 text-sm font-medium">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="rounded-lg px-3.5 py-2 no-underline hover:bg-ink/6 hover:text-accent">
            {l.label}
          </a>
        ))}
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-accent px-3.5 py-2 font-semibold text-on-accent no-underline hover:brightness-105"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
