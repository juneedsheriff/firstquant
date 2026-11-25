"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { architecture, transformations } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

export function Services() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = transformations[active];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = transformations.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabsRef.current[next]?.focus();
    }
  };

  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-24 md:py-36">
      <div className="container-fq">
        <SectionHeading
          id="services-title"
          title="Six transformations. One mandate."
          intro="Most developers hire separate firms for strategy, branding, marketing and sales, then spend months aligning them. We run all six as one system, accountable to one outcome."
        />

        <Reveal className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div role="tablist" aria-label="Transformations" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:col-span-5 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
            {transformations.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  role="tab"
                  id={`${baseId}-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group relative shrink-0 rounded-full border px-5 py-3 text-left font-display text-base font-semibold whitespace-nowrap transition-colors [font-stretch:110%] lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-6 lg:text-[1.65rem] lg:whitespace-normal ${
                    selected
                      ? "border-ink bg-ink text-white lg:border-ink/10 lg:bg-transparent lg:text-ink"
                      : "border-ink/15 text-steel hover:text-ink lg:border-ink/10"
                  }`}
                >
                  <span className="hidden lg:inline">{t.title}</span>
                  <span className="lg:hidden">{t.title.replace(" transformation", "")}</span>
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-[-1px] left-0 hidden h-[3px] bg-gradient-to-r from-cobalt to-signal transition-all duration-500 lg:block ${
                      selected ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${current.id}`}
            tabIndex={0}
            className="relative overflow-hidden rounded-[2rem] bg-midnight p-8 text-white md:p-12 lg:col-span-7"
          >
            <p
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-3 select-none font-display text-[9rem] font-bold leading-none text-white/[0.04] [font-stretch:125%] md:text-[13rem]"
            >
              {current.title.split(" ")[0]}
            </p>
            <div key={current.id} className="anim-rise relative" style={{ animationDuration: "0.6s" }}>
              <h3 className="display-md max-w-md">{current.title}</h3>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ice/80">{current.body}</p>
              <ul className="mt-10 flex flex-wrap gap-2.5">
                {current.services.map((s) => (
                  <li key={s} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-ice">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <ArchitectureBlock />
      </div>
    </section>
  );
}

function ArchitectureBlock() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Reveal className="mt-24 grid overflow-hidden rounded-[2rem] bg-mist lg:mt-32 lg:grid-cols-12">
      <div className="relative min-h-72 lg:col-span-5">
        <Image
          src="/images/architecture/glass-tower.jpg"
          alt="A glass office tower rising against a pale sky"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-midnight/10" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
          <p className="font-display text-lg font-semibold [font-stretch:115%]">
            Market-led design. Development efficiency. Value creation.
          </p>
        </div>
      </div>

      <div className="p-8 md:p-12 lg:col-span-7">
        <h3 className="display-md text-ink">{architecture.title}</h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-steel">{architecture.intro}</p>

        <div className="mt-8 border-t border-ink/10">
          {architecture.groups.map((g, i) => {
            const isOpen = open === i;
            return (
              <div key={g.title} className="border-b border-ink/10">
                <h4 className="font-sans [font-stretch:100%]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${baseId}-arch-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-ink"
                  >
                    {g.title}
                    <Plus
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-cobalt transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h4>
                <div
                  id={`${baseId}-arch-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <ul className="grid gap-2 pb-6 text-steel sm:grid-cols-2">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-cobalt" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
