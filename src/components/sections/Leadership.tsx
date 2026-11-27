"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { leaders } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

export function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="bg-white py-16 md:py-24 lg:py-36">
      <div className="container-fq">
        <SectionHeading
          id="leadership-title"
          title="Leadership"
          intro="More than five decades of combined experience across Bengaluru’s most respected developers, now focused on one question: what will make this project succeed?"
        />
        <ul className="mt-10 md:mt-16 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {leaders.map((l, i) => (
            <Reveal as="li" key={l.name} delay={i * 100} className={i === 1 ? "lg:mt-20" : ""}>
              <LeaderCard leader={l} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LeaderCard({ leader: l }: { leader: (typeof leaders)[number] }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <article>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-b from-mist to-ice">
        <Image
          src={l.image}
          alt={`Portrait of ${l.name}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-midnight/85 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          {l.experience}
        </span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink [font-stretch:112%]">{l.name}</h3>
          <p className="mt-1 text-steel">{l.role}</p>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white"
        >
          <Plus aria-hidden="true" className={`size-5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
          <span className="sr-only">{open ? "Hide" : "Read"} {l.name}’s profile</span>
        </button>
      </div>
      <div
        id={id}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pt-5 leading-relaxed text-steel">
            {l.bio.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
