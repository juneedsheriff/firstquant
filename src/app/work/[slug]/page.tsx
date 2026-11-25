import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { EnquiryLink } from "@/components/EnquiryLink";
import { ArrowIcon, buttonStyles } from "@/components/Button";
import { Rail } from "@/components/Rail";
import { ProjectStory } from "@/components/ProjectStory";
import { stories } from "@/lib/stories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.name}, ${p.developer}`;
  return {
    title,
    description: `${p.headline} ${p.summary}`.slice(0, 160),
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title, description: p.headline, images: [{ url: p.image }] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const story = p.story ?? stories[p.slug];

  return (
    <>
      <PageHero back={{ href: "/work", label: "All work" }}>
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-ice/70">
              {p.developer}
              {p.location ? (
                <>
                  <span aria-hidden="true" className="mx-2">/</span> {p.location}
                </>
              ) : null}
            </p>
            <h1 className="display-xl mt-4">{p.name}</h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ice/85">{p.headline}</p>
          </div>
          {p.metric ? (
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 lg:col-span-4 lg:col-start-9">
              <p className="font-display text-6xl font-bold tracking-tight [font-stretch:118%]">{p.metric.value}</p>
              <p className="mt-2 text-ice/80">{p.metric.label}</p>
            </div>
          ) : null}
        </div>
      </PageHero>

      <article className="bg-mist py-20 md:py-28">
        <div className="container-fq grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-ice">
              <Image src={p.image} alt={`${p.name} by ${p.developer}`} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>

            <h2 className="display-md mt-14 text-ink">What we did</h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">{p.summary}</p>

            {p.challenge ? (
              <>
                <h2 className="display-md mt-14 text-ink">The challenge</h2>
                <p className="mt-4 text-lg leading-relaxed text-steel">{p.challenge}</p>
              </>
            ) : null}

            {p.impact ? (
              <>
                <h2 className="display-md mt-14 text-ink">Business impact</h2>
                <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                  {p.impact.map((x) => (
                    <li key={x} className="flex gap-4 py-5 text-lg text-ink">
                      <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-signal" />
                      {x}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <aside className="space-y-6 lg:col-span-4 lg:col-start-9">
            <div className="rounded-[1.75rem] bg-white p-8">
              <Rail className="mb-5" dots={6} />
              <h2 className="text-lg font-semibold text-ink">Scope</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.scope.map((s) => (
                  <li key={s} className="rounded-full bg-mist px-3.5 py-1.5 text-sm text-ink">{s}</li>
                ))}
              </ul>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cobalt"
                >
                  View the full project on Behance <ArrowIcon />
                </a>
              ) : null}
            </div>
            {p.facts ? (
              <div className="rounded-[1.75rem] bg-midnight p-8 text-white">
                <h2 className="text-lg font-semibold">{p.type === "Marketing transformation" ? "FY23–24 and FY24–25" : "Project facts"}</h2>
                <dl className="mt-5 divide-y divide-white/10">
                  {p.facts.map((f) => (
                    <div key={f.label} className="flex items-baseline justify-between gap-6 py-3.5">
                      <dt className="text-ice/70">{f.label}</dt>
                      <dd className="text-right font-semibold">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
            <div className="rounded-[1.75rem] bg-cobalt p-8 text-white">
              <h2 className="text-lg font-semibold">Have a project like this?</h2>
              <p className="mt-2 text-white/80">Tell us where it is and what success looks like.</p>
              <EnquiryLink type="developer" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-cobalt">
                Discuss your project <ArrowIcon />
              </EnquiryLink>
            </div>
          </aside>
        </div>
      </article>

      {story ? <ProjectStory blocks={story} name={p.name} /> : null}

      <section className="bg-white py-16">
        <div className="container-fq flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-steel">Next case study</p>
            <p className="display-md mt-1 text-ink">{next.name}</p>
          </div>
          <Link href={`/work/${next.slug}`} className={buttonStyles.ghostLight}>
            Read case study <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
