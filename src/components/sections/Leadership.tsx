import Image from "next/image";
import Link from "next/link";
import { leaders } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { ArrowIcon, buttonStyles } from "../Button";

const intro =
  "More than five decades of combined experience across Bengaluru’s most respected developers, now focused on one question: what will make this project succeed?";

type Leader = (typeof leaders)[number];

function Portrait({ leader: l, sizes }: { leader: Leader; sizes: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-mist to-ice">
      <Image src={l.image} alt={`Portrait of ${l.name}`} fill sizes={sizes} className="object-cover object-top" />
      <span className="absolute bottom-4 left-4 rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white">
        {l.experience}
      </span>
    </div>
  );
}

/**
 * Home page: the three portraits with a link to the Leadership page.
 * Leadership page (`variant="page"`): one row per leader with the full profile always shown.
 */
export function Leadership({ variant = "home" }: { variant?: "home" | "page" }) {
  if (variant === "page") {
    return (
      <section aria-label="Leadership team" className="bg-white py-14 md:py-20">
        <div className="container-fq divide-y divide-ink/10">
          {leaders.map((l, i) => (
            <article
              key={l.name}
              id={l.name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "")}
              className={`grid scroll-mt-28 gap-8 md:grid-cols-12 md:gap-12 ${i === 0 ? "pb-14 md:pb-20" : "py-14 md:py-20"}`}
            >
              <div className="md:col-span-5 lg:col-span-4">
                <Portrait leader={l} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 100vw" />
              </div>
              <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
                <h2 className="display-md text-ink">{l.name}</h2>
                <p className="mt-2 text-lg font-medium text-cobalt">{l.role}</p>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-steel">
                  {l.bio.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="leadership" aria-labelledby="leadership-title" className="bg-white py-16 md:py-24 lg:py-36">
      <div className="container-fq">
        <SectionHeading kicker="leadership" id="leadership-title" title="Leadership" intro={intro} />
        <ul className="mt-10 grid gap-10 md:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {leaders.map((l, i) => (
            <Reveal as="li" key={l.name} delay={i * 100} className={i === 1 ? "lg:mt-20" : ""}>
              <Portrait leader={l} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink [font-stretch:112%]">{l.name}</h3>
              <p className="mt-1 text-steel">{l.role}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12 md:mt-16">
          <Link href="/leadership" className={buttonStyles.ghostLight}>
            Read full profiles <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
