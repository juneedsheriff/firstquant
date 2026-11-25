"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { ArrowIcon } from "../Button";

const filters = ["All work", "Launch", "Repositioning", "Marketing transformation"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All work");
  const list = useMemo(
    () => (filter === "All work" ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );

  return (
    <section id="work" aria-labelledby="work-title" className="bg-mist py-24 md:py-36">
      <div className="container-fq">
        <SectionHeading
          id="work-title"
          title="Project transformations"
          intro="Launches, repositionings and portfolio mandates for Bengaluru developers. Each one started with a business problem, not a campaign brief."
        />

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
          Showing {list.length} {list.length === 1 ? "project" : "projects"}
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {list.map((p, i) => (
            <li
              key={p.slug}
              className={
                list.length > 2
                  ? i === 0
                    ? "lg:col-span-7 lg:row-span-2"
                    : i === 1 || i === 2
                      ? "lg:col-span-5"
                      : (list.length - 3) % 2 === 1 && i === list.length - 1
                        ? "md:col-span-2 lg:col-span-12"
                        : "lg:col-span-6"
                  : "lg:col-span-6"
              }
            >
              <ProjectCard project={p} large={i === 0 && list.length > 2} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, large }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(5,14,36,0.35)]"
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[4/3] lg:aspect-auto lg:min-h-[22rem] lg:flex-1" : "aspect-[16/10]"}`}>
        <Image
          src={p.image}
          alt={`${p.name} by ${p.developer}`}
          fill
          sizes={large ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
        {p.metric ? (
          <div className="absolute left-4 top-4 rounded-2xl bg-midnight/85 px-4 py-3 text-white backdrop-blur-md">
            <p className="font-display text-2xl font-bold leading-none [font-stretch:115%]">{p.metric.value}</p>
            <p className="mt-1 text-xs text-ice/80">{p.metric.label}</p>
          </div>
        ) : null}
      </div>
      <div className={`flex flex-col p-6 md:p-8 ${large ? "" : "flex-1"}`}>
        <p className="text-sm text-steel">
          {p.developer}
          <span className="mx-2 text-ice" aria-hidden="true">/</span>
          {p.type}
        </p>
        <h3 className={`mt-2 font-display font-semibold text-ink [font-stretch:112%] ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {p.name}
        </h3>
        <p className={`mt-3 leading-relaxed text-steel ${large ? "text-lg" : ""}`}>{p.headline}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cobalt">
          Read case study
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
