"use client";

import { useId, useRef, useState } from "react";
import { quant } from "@/lib/content";
import { Rail } from "../Rail";
import { Reveal } from "../Reveal";

export function Approach() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const step = quant[active];

  const move = (e: React.KeyboardEvent, i: number) => {
    const last = quant.length - 1;
    let n: number | null = null;
    if (e.key === "ArrowRight") n = i === last ? 0 : i + 1;
    if (e.key === "ArrowLeft") n = i === 0 ? last : i - 1;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = last;
    if (n !== null) {
      e.preventDefault();
      setActive(n);
      refs.current[n]?.focus();
    }
  };

  return (
    <section id="approach" aria-labelledby="approach-title" className="relative overflow-hidden bg-midnight py-16 text-white md:py-24 lg:py-36">
      <div className="container-fq">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Rail className="mb-7" />
            <h2 id="approach-title" className="display-lg">
              How we work is in our name
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ice/75 lg:col-span-5 lg:justify-self-end">
            Every mandate moves through the same five stages. Choose a letter to see what happens at each one.
          </p>
        </Reveal>

        {/* The five letters */}
        <div
          role="tablist"
          aria-label="Our five-stage approach"
          className="mt-16 grid grid-cols-5 border-y border-white/10 md:mt-24"
        >
          {quant.map((q, i) => {
            const selected = i === active;
            const done = i < active;
            return (
              <button
                key={q.letter}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => move(e, i)}
                className="group relative flex flex-col items-center py-6 outline-offset-[-4px] md:py-10"
              >
                <span
                  aria-hidden="true"
                  className={`font-display text-[clamp(3.5rem,15vw,13rem)] font-bold leading-[0.85] tracking-tight transition-all duration-500 [font-stretch:125%] ${
                    selected
                      ? "bg-gradient-to-br from-signal to-cobalt bg-clip-text text-transparent"
                      : done
                        ? "text-white/25"
                        : "text-transparent [-webkit-text-stroke:1.5px_rgba(201,214,242,0.35)] group-hover:[-webkit-text-stroke-color:rgba(201,214,242,0.8)]"
                  }`}
                >
                  {q.letter}
                </span>
                <span
                  className={`mt-3 text-[0.7rem] font-semibold transition-colors sm:text-sm md:mt-5 md:text-base ${
                    selected ? "text-white" : "text-ice/55"
                  }`}
                >
                  {q.word}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-[3px] origin-left bg-signal transition-transform duration-500 ${
                    selected ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12"
        >
          <div key={step.word} className="anim-rise lg:col-span-5" style={{ animationDuration: "0.6s" }}>
            <p className="text-sm font-semibold text-signal">
              Stage {active + 1} of {quant.length}
            </p>
            <h3 className="display-md mt-3">{step.word}</h3>
            <p className="mt-4 max-w-md text-xl leading-relaxed text-ice/85">{step.summary}</p>
          </div>
          <ul key={step.word + "-list"} className="grid gap-px self-start overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {step.points.map((pt, i) => (
              <li
                key={pt}
                className="anim-rise bg-midnight p-6 text-ice/90"
                style={{ animationDelay: `${80 + i * 70}ms`, animationDuration: "0.6s" }}
              >
                {pt}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cobalt to-signal transition-[width] duration-700 ease-out"
              style={{ width: `${((active + 1) / quant.length) * 100}%` }}
            />
          </div>
          <button
            type="button"
            onClick={() => setActive((a) => (a + 1) % quant.length)}
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-midnight"
          >
            {active === quant.length - 1 ? "Start again" : `Next: ${quant[active + 1].word}`}
          </button>
        </div>
      </div>
    </section>
  );
}
