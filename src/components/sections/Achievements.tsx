import { achievements } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

export function Achievements() {
  const [hero, ...rest] = achievements;
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="bg-mist py-24 md:py-36">
      <div className="container-fq">
        <SectionHeading
          id="achievements-title"
          title="Achievements measured in absorption and price"
          intro="We judge our work the way a developer’s board does: how fast inventory moves, and how much value each unit captures along the way."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-12">
          <Reveal className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-cobalt to-[#0a2aa0] p-8 text-white md:col-span-2 md:p-12 lg:col-span-5 lg:row-span-2">
            <p className="text-sm text-white/75">{hero.project}</p>
            <div className="mt-24">
              <p className="font-display text-[clamp(4.5rem,7.5vw,7.5rem)] font-bold leading-none tracking-[-0.05em] [font-stretch:108%]">
                {hero.value}
              </p>
              <p className="mt-4 max-w-xs text-xl">{hero.label}</p>
            </div>
          </Reveal>
          {rest.map((a, i) => (
            <Reveal
              key={a.label}
              delay={i * 70}
              className={`flex flex-col justify-between rounded-[2rem] bg-white p-7 md:p-9 ${i < 2 ? "lg:col-span-7" : "lg:col-span-4"} ${i === 4 ? "md:col-span-2 lg:col-span-4" : ""}`}
            >
              <p className="text-sm text-steel">{a.project}</p>
              <div className="mt-10">
                <p className="font-display text-3xl font-bold tracking-tight text-ink [font-stretch:115%] md:text-4xl">{a.value}</p>
                <p className="mt-2 text-steel">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="figure" className="mt-16 grid gap-6 border-t border-ink/10 pt-12 lg:grid-cols-12">
          <blockquote className="lg:col-span-8">
            <p className="font-display text-3xl font-semibold leading-tight text-ink [font-stretch:112%] md:text-5xl">
              “The New Whitefield is Rising.”
            </p>
          </blockquote>
          <figcaption className="max-w-md leading-relaxed text-steel lg:col-span-4">
            Our positioning line for Euphoria in the East was later reflected in the communication of several developers
            across the corridor, helping establish the micro-market itself.
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
