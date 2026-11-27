import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Button";

/** On its own page (`standalone`) the page header carries the title, so the section heading is skipped. */
export function Insights({ standalone = false }: { standalone?: boolean }) {
  const [lead, ...rest] = insights;
  return (
    <section
      id="insights"
      aria-labelledby={standalone ? undefined : "insights-title"}
      aria-label={standalone ? "Articles" : undefined}
      className={`bg-mist ${standalone ? "py-14 md:py-20" : "py-16 md:py-24 lg:py-36"}`}
    >
      <div className="container-fq">
        {standalone ? null : <SectionHeading
          id="insights-title"
          title="Market insights"
          intro="Notes from the field on positioning, pricing and launching projects in Bengaluru’s residential market."
        />}

        <div className={`grid gap-6 lg:grid-cols-12 ${standalone ? "" : "mt-10 md:mt-16 lg:mt-20"}`}>
          <Reveal className="lg:col-span-7">
            <Link href={`/insights/${lead.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={lead.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-sm text-steel">
                {lead.category} <span aria-hidden="true" className="mx-2">/</span> <time dateTime={lead.date}>{formatDate(lead.date)}</time>
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-ink [font-stretch:112%] group-hover:text-cobalt md:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-steel">{lead.excerpt}</p>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={100 + i * 100}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group grid gap-5 rounded-2xl bg-white p-5 sm:grid-cols-[10rem_1fr] md:p-6"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-square">
                    <Image src={a.image} alt="" fill sizes="(min-width: 640px) 160px, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-steel">
                      {a.category} <span aria-hidden="true" className="mx-1.5">/</span> {a.readTime}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink [font-stretch:110%] group-hover:text-cobalt">
                      {a.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-cobalt">
                      Read article <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
