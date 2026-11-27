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
    <section id="work" aria-labelledby="work-title" className="bg-mist py-16 md:py-24 lg:py-36">
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
export function ProjectGrid({ limit, compact }: { limit?: number; compact?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All work");
  const all = useMemo(
    () => (filter === "All work" ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );
  const list = limit ? all.slice(0, limit) : all;

  return (
    <>
      <div role="group" aria-label="Filter projects" className={`-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 ${compact ? "mt-6" : "mt-8 md:mt-12"}`}>
        {filters.map((f) => {
          const count = f === "All work" ? projects.length : projects.filter((p) => p.type === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
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

      <ul className={`grid md:grid-cols-2 lg:grid-cols-3 ${compact ? "mt-6 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4" : "mt-8 grid-cols-1 gap-4 md:mt-10 md:gap-5"}`}>
        {list.map((p, i) => (
          // On two-column tablets an odd last card would sit alone; the full list is one click away.
          <li key={p.slug} className={limit && i === list.length - 1 && list.length % 2 === 1 ? "md:max-lg:hidden" : undefined}>
            <ProjectCard project={p} compact={compact} priority={!limit && i < (compact ? 4 : 3)} />
          </li>
        ))}
      </ul>

      {limit ? (
        <div className="mt-10 flex justify-center md:mt-12">
          <Link href="/work" className={buttonStyles.ghostLight}>
            Read more: all {projects.length} projects <ArrowIcon />
          </Link>
        </div>
      ) : null}
    </>
  );
}

function ProjectCard({ project: p, priority, compact }: { project: Project; priority?: boolean; compact?: boolean }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className={`group flex h-full overflow-hidden bg-white ${compact ? "flex-row rounded-2xl sm:flex-col sm:rounded-[1.75rem]" : "flex-col rounded-[1.5rem] md:rounded-[1.75rem]"} transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(5,14,36,0.35)]`}
    >
      <div className={`relative overflow-hidden ${compact ? "w-32 shrink-0 sm:aspect-[16/10] sm:w-auto" : "aspect-[16/10]"}`}>
        <Image
          src={p.image}
          alt={`${p.name} by ${p.developer}`}
          fill
          priority={priority}
          sizes={compact ? "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 8rem" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
        {p.metric ? (
          <div className={`absolute left-3 top-3 rounded-2xl bg-midnight/85 px-3.5 py-2.5 text-white backdrop-blur-md md:left-4 md:top-4 md:px-4 md:py-3 ${compact ? "hidden sm:block" : ""}`}>
            <p className="font-display text-xl font-bold md:text-2xl leading-none [font-stretch:115%]">{p.metric.value}</p>
            <p className="mt-1 text-xs text-ice/80">{p.metric.label}</p>
          </div>
        ) : null}
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6 md:p-8"}`}>
        <p className={`text-steel ${compact ? "truncate text-xs sm:text-sm" : "text-sm"}`}>
          {p.developer}
          <span className="mx-2 text-ice" aria-hidden="true">/</span>
          {p.type}
        </p>
        <h3 className={`mt-2 font-display font-semibold ${compact ? "text-lg leading-snug sm:text-xl" : "text-xl md:text-2xl"} text-ink [font-stretch:112%]`}>{p.name}</h3>
        <p className={`mt-2 leading-relaxed text-steel ${compact ? "line-clamp-2 hidden text-sm sm:block" : ""}`}>{p.headline}</p>
        <span className={`mt-auto inline-flex items-center gap-2 text-sm ${compact ? "pt-2 sm:pt-4" : "pt-5 md:pt-6"} font-semibold text-cobalt`}>
          Read case study
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
