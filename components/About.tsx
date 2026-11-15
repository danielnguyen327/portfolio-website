import Image from "next/image";
import { about, site } from "@/data/site";
import { card, container, label, sectionTitle } from "./ui";

export default function About() {
  return (
    <section id="about" className={`${container} pb-14`}>
      <div className={`${card} flex flex-wrap gap-12 p-7 sm:p-12`}>
        <div className="min-w-0 flex-[1_1_280px]">
          <div className="relative flex aspect-[4/5] w-full max-w-80 items-center justify-center overflow-hidden rounded-[18px] bg-card-alt font-mono text-[13px] text-faint">
            {about.headshot ? (
              <Image src={about.headshot} alt={site.name} fill sizes="320px" className="object-cover" />
            ) : (
              "headshot"
            )}
          </div>
        </div>

        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-[18px]">
          <p className={label}>/about</p>
          <h2 className={sectionTitle}>About</h2>
          <p className="text-xl text-ink-2">{about.bio}</p>
          <p className="text-muted">Looking for: {site.lookingFor}</p>
          <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
            {about.skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-1.5 font-semibold">{s.group}</h3>
                <p className="text-base text-muted">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
