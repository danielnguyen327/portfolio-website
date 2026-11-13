import { site } from "@/data/site";
import { btnGhost, btnPrimary } from "./ui";

export default function Hero() {
  // Highlight "ML" in the tagline with the accent color.
  const [before, after] = site.tagline.split("ML");

  return (
    <section
      id="top"
      className="mx-auto flex max-w-[920px] flex-col items-center px-5 pt-18 pb-22 text-center sm:px-6 sm:pt-28 sm:pb-30"
    >
      <p className="inline-flex items-center rounded-full border border-[#1f4a43] bg-[#10282c]/60 px-4 py-1.5 font-mono text-[13px] tracking-[0.08em] text-accent uppercase">
        {site.badge}
      </p>
      <h1 className="mt-7 text-[clamp(44px,7vw,92px)] leading-none font-bold tracking-[-0.045em]">
        {after !== undefined ? (
          <>
            {before}
            <span className="text-accent">ML</span>
            {after}
          </>
        ) : (
          site.tagline
        )}
      </h1>
      <p className="mt-6 max-w-[50ch] text-xl text-muted">{site.intro}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <a href="#work" className={btnPrimary}>
          See projects
        </a>
        <a href={site.resume} target="_blank" rel="noopener noreferrer" className={btnGhost}>
          Resume
        </a>
      </div>
    </section>
  );
}
