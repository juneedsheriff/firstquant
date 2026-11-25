"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { ArrowIcon, buttonStyles } from "../Button";

const filters = ["All work", "Launch", "Repositioning", "Marketing transformation", "Campaign", "Brand identity"] as const;
type Filter = (typeof filters)[number];

const HOME_LIMIT = 9;

/** Home page section: the first nine projects, with a link to the full list. */
export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-mist py-24 md:py-36">
      <div className="container-fq">
        <SectionHeading
          id="work-title"
          title="Project transformations"
          intro="Launches, repositionings and portfolio mandates for Bengaluru developers. Each one started with a business problem, not a campaign brief."
        />
        <ProjectGrid limit={HOME_LIMIT} />
      </div>
    </section>
  );
}

/** Filterable three-column grid of project cards. With `limit`, shows that many and links to /work for the rest. */
export function ProjectGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>("All work");
  const all = useMemo(
    () => (filter === "All work" ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );
  const list = limit ? all.slice(0, limit) : all;

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mt-12 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === "All work" ? projects.length : projects.filter((p) => p.type === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                filter === f ? "border-ink bg-ink text-white" : "border-ink/15 text-ink hover:border-ink"
              }`}
            >
              {f} <span className={filter === f ? "text-ice/70" : "text-steel"}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {list.length} of {all.length} {all.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={p.slug}>
            <ProjectCard project={p} priority={!limit && i < 3} />
          </li>
        ))}
      </ul>

      {limit ? (
        <div className="mt-12 flex justify-center">
          <Link href="/work" className={buttonStyles.ghostLight}>
            Read more: all {projects.length} projects <ArrowIcon />
          </Link>
        </div>
      ) : null}
    </>
  );
}

function ProjectCard({ project: p, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(5,14,36,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={p.image}
          alt={`${p.name} by ${p.developer}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
        {p.metric ? (
          <div className="absolute left-4 top-4 rounded-2xl bg-midnight/85 px-4 py-3 text-white backdrop-blur-md">
            <p className="font-display text-2xl font-bold leading-none [font-stretch:115%]">{p.metric.value}</p>
            <p className="mt-1 text-xs text-ice/80">{p.metric.label}</p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-sm text-steel">
          {p.developer}
          <span className="mx-2 text-ice" aria-hidden="true">/</span>
          {p.type}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink [font-stretch:112%]">{p.name}</h3>
        <p className="mt-3 leading-relaxed text-steel">{p.headline}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cobalt">
          Read case study
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
