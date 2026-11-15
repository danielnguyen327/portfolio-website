import Image from "next/image";
import { projects, site } from "@/data/site";
import { container, label, sectionTitle } from "./ui";

export default function Projects() {
  return (
    <section id="work" className={`${container} pt-6 pb-14`}>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className={label}>/projects</p>
          <h2 className={`${sectionTitle} mt-2`}>Recent work</h2>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 font-mono text-sm text-muted hover:text-accent"
        >
          {site.githubLabel}
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-5">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col overflow-hidden rounded-[18px] border border-edge bg-card no-underline transition duration-200 hover:-translate-y-0.5 hover:border-[#2b4a6f]"
          >
            <div className="relative flex aspect-video items-center justify-center border-b border-edge bg-[#0f2033] font-mono text-[13px] text-faint">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(max-width: 760px) 100vw, 560px"
                  className="object-cover"
                />
              ) : (
                "screenshot"
              )}
            </div>
            <div className="flex flex-col gap-2.5 p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[22px] font-bold tracking-[-0.02em]">{p.title}</h3>
                <span className="font-mono text-xs whitespace-nowrap text-accent">{p.kind}</span>
              </div>
              <p className="text-base text-muted">{p.description}</p>
              <p className="mt-1 font-mono text-xs text-faint">{p.tags.join(" · ")}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
