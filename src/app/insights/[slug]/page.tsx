import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, site } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.excerpt, publishedTime: a.date, images: [{ url: a.image }] },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) notFound();
  const more = insights.filter((x) => x.slug !== a.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          image: `${site.url}${a.image}`,
          publisher: { "@type": "Organization", name: site.name },
        }}
      />
      <PageHero back={{ href: "/#insights", label: "All insights" }}>
        <div className="mt-6 max-w-4xl">
          <p className="text-ice/70">
            {a.category} <span aria-hidden="true" className="mx-2">/</span>
            <time dateTime={a.date}>{formatDate(a.date)}</time>
            <span aria-hidden="true" className="mx-2">/</span> {a.readTime}
          </p>
          <h1 className="display-lg mt-3">{a.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ice/85">{a.excerpt}</p>
        </div>
      </PageHero>

      <article className="bg-white py-12 md:py-16">
        <div className="container-fq">
          <div className="relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-[2rem]">
            <Image src={a.image} alt="" fill priority sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" />
          </div>
          <div className="mx-auto mt-10 md:mt-14 max-w-[40rem] space-y-6 text-lg leading-[1.75] text-ink/85">
            {a.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-mist py-16 md:py-24">
        <div className="container-fq">
          <h2 className="display-md text-ink">More insights</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/insights/${m.slug}`} className="group flex h-full flex-col rounded-[1.75rem] bg-white p-6 sm:p-8">
                  <p className="text-sm text-steel">{m.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink [font-stretch:110%] group-hover:text-cobalt">{m.title}</h3>
                  <p className="mt-3 text-steel">{m.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cobalt">
                    Read article <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
