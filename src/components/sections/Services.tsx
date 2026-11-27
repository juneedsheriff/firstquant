"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { architecture, transformations } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { ArrowIcon } from "../Button";

const principles = architecture.tagline
  .split(".")
  .map((part) => part.trim())
  .filter(Boolean);

/** How long each transformation stays before the next one slides in. */
const DWELL_MS = 4200;


/**
 * "What we do": all six names stay put. The detail sits in one panel whose
 * size is the tallest transformation, so changing items never resizes it.
 */
export function Services() {
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const activeRef = useRef(0);
  const accRef = useRef(0);
  const scrollingRef = useRef(false);
  const reducedRef = useRef(false);

  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);

  function select(index: number, focus = false) {
    if (index === activeRef.current) {
      if (focus) buttons.current[index]?.focus();
      return;
    }
    activeRef.current = index;
    accRef.current = 0;
    if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";
    setActive(index);
    if (focus) buttons.current[index]?.focus();
  }

  function moveFocus(from: number, key: string) {
    const last = transformations.length - 1;
    let nextIndex = from;
    if (key === "ArrowDown" || key === "ArrowRight") nextIndex = from === last ? 0 : from + 1;
    else if (key === "ArrowUp" || key === "ArrowLeft") nextIndex = from === 0 ? last : from - 1;
    else if (key === "Home") nextIndex = 0;
    else if (key === "End") nextIndex = last;
    else return;
    select(nextIndex, true);
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      reducedRef.current = media.matches;
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView((prev) => {
          if (entry.intersectionRatio >= 0.28) return true;
          if (entry.intersectionRatio <= 0.08) return false;
          return prev;
        });
      },
      { threshold: [0, 0.08, 0.28, 0.6] },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let idle = 0;
    const onScroll = () => {
      scrollingRef.current = true;
      window.clearTimeout(idle);
      idle = window.setTimeout(() => {
        scrollingRef.current = false;
      }, 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idle);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    // Arriving at the section starts the sequence from the first transformation.
    activeRef.current = 0;
    accRef.current = 0;
    setActive(0);
    if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";

    let frame = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      const hold = scrollingRef.current || reducedRef.current || document.hidden;
      if (!hold) {
        accRef.current += dt;
        const progress = Math.min(1, accRef.current / DWELL_MS);
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
        if (accRef.current >= DWELL_MS) {
          accRef.current = 0;
          if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";
          const upcoming = (activeRef.current + 1) % transformations.length;
          activeRef.current = upcoming;
          setActive(upcoming);
        }
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="container-fq">
        <SectionHeading
          kicker="services"
          id="services-title"
          title="What we do"
          intro="Six transformations, one mandate. Most developers hire separate firms for strategy, branding, marketing and sales, then spend months aligning them. We run all six as one system, accountable to one outcome."
        />
      </div>

      <div ref={stageRef} className="container-fq mt-8 md:mt-12">
        <div className="grid items-start gap-6 md:grid-cols-12 md:gap-10">
          <div role="tablist" aria-label="Six transformations" aria-orientation="vertical" className="grid grid-cols-2 gap-1 md:col-span-4 md:grid-cols-1">
            {transformations.map((item, index) => {
              const open = active === index;
              const short = item.title.replace(/ transformation$/, "");
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    buttons.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`transformation-${item.id}-tab`}
                  aria-selected={open}
                  aria-controls="transformation-panel"
                  tabIndex={open ? 0 : -1}
                  onClick={() => select(index)}
                  onKeyDown={(event) => {
                    if (["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
                      event.preventDefault();
                      moveFocus(index, event.key);
                    }
                  }}
                  className={`flex items-baseline gap-3 border-l-2 px-3 py-2.5 text-left md:py-3 lg:px-4 ${
                    open ? "border-signal bg-mist text-ink" : "border-transparent text-steel hover:text-ink"
                  }`}
                >
                  <span className={`w-6 shrink-0 text-sm tabular-nums ${open ? "text-signal" : "text-steel"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-semibold leading-tight [font-stretch:112%] md:text-2xl">{short}</span>
                </button>
              );
            })}
          </div>

          <div className="relative bg-mist md:col-span-8">
            {/* Every panel shares one cell, so the box stays as tall as the longest one. */}
            <div className="grid">
              {transformations.map((item, index) => {
                const open = active === index;
                return (
                  <div
                    key={item.id}
                    id={open ? "transformation-panel" : undefined}
                    role={open ? "tabpanel" : undefined}
                    aria-labelledby={`transformation-${item.id}-tab`}
                    aria-hidden={open ? undefined : true}
                    inert={open ? undefined : true}
                    className={`col-start-1 row-start-1 p-6 sm:p-8 lg:p-10 ${open ? "" : "invisible"}`}
                  >
                    <h3 className="font-display text-3xl font-semibold text-ink [font-stretch:112%] md:text-4xl">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-steel">{item.body}</p>
                    <ul className="mt-8 grid border-t border-ink/10 sm:grid-cols-2 sm:gap-x-8">
                      {item.services.map((service) => (
                        <li key={service} className="border-b border-ink/10 py-3 text-[0.95rem] font-medium leading-snug text-ink">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-ink/10" aria-hidden="true">
              <span ref={progressRef} className="block h-full origin-left bg-signal" style={{ transform: "scaleX(0)" }} />
            </span>
          </div>
        </div>
      </div>

      <div id="architecture" className="container-fq scroll-mt-24 pt-16 md:pt-24 lg:pt-32">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <h3 className="display-md text-ink lg:col-span-7">{architecture.title}</h3>
          <p className="text-lg leading-relaxed text-ink lg:col-span-5">{architecture.paragraphs[0]}</p>
        </div>

        <ul className="mt-10 grid divide-y divide-ink/10 border-y border-ink/10 md:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
          {principles.map((principle) => (
            <li key={principle} className="py-6 md:px-8 md:py-8 first:md:pl-0 last:md:pr-0">
              <p className="font-display text-2xl font-semibold leading-snug text-ink [font-stretch:112%] lg:text-3xl">
                {principle}.
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid items-start gap-8 md:mt-14 lg:grid-cols-12 lg:gap-16">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
            <Image
              src="/images/architecture/glass-tower.jpg"
              alt="A glass office tower rising against a pale sky"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover grayscale"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-cobalt/25 mix-blend-multiply" />
          </figure>
          <div className="space-y-4 text-lg leading-relaxed text-steel lg:col-span-6 lg:col-start-7">
            {architecture.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href="/#core-services" className="group mt-4 inline-flex items-center gap-2 py-2 font-semibold text-cobalt">
              See the architecture services <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
