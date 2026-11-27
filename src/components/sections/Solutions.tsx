"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { architecture, solutions } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { ArrowIcon } from "../Button";
import { ArchitectureGraphic, ExecutionGraphic, StrategyGraphic } from "../ServiceInfographics";

type Group = { title: string; items: string[] };
type Track = {
  title: string;
  note: string;
  summary: string;
  groups: Group[];
  Graphic: (props: { shown: boolean }) => React.ReactNode;
  /** A real project that shows this track's work. */
  work: { name: string; href: string };
};

const tracks: Track[] = [
  {
    title: "Architecture and development",
    note: "Land to construction",
    // Not the "architecture begins with the market" line: What we do already opens with it.
    summary: "From land evaluation and feasibility through design, documentation and construction.",
    groups: architecture.groups,
    Graphic: ArchitectureGraphic,
    work: { name: "Sunscape, Merusri Developers", href: "/work/merusri-sunscape" },
  },
  {
    title: "Strategy",
    note: "Before launch",
    summary: "Strategy decides what to build and how to position it.",
    groups: solutions.strategy,
    Graphic: StrategyGraphic,
    work: { name: "Rhythm of Rain, Sowparnika Projects", href: "/work/sowparnika-rhythm-of-rain" },
  },
  {
    title: "Execution",
    note: "Launch to sold out",
    summary: "Execution fills the funnel and closes it.",
    groups: solutions.execution,
    Graphic: ExecutionGraphic,
    work: { name: "Sowparnika Group portfolio", href: "/work/sowparnika-group" },
  },
];

/** Mounts a track's infographic undrawn, then draws it on the next frame, so it animates on every tab switch. */
function AnimatedGraphic({ Graphic, ready }: { Graphic: Track["Graphic"]; ready: boolean }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ready) return;
    // A short timeout (not requestAnimationFrame, which pauses in background tabs) lets the undrawn state paint first.
    const id = window.setTimeout(() => setShown(true), 30);
    return () => window.clearTimeout(id);
  }, [ready]);
  return <Graphic shown={shown} />;
}

/**
 * "Our core services", following deck slides 6–9. Same language as the Approach
 * section: a tab row with a sliding underline, a summary on the left and a
 * hairline grid on the right. One track shows at a time.
 */
export function Solutions() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  // The infographic draws in once the section is on screen (and again on each tab change, as it remounts).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = tracks.length - 1;
    let n: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = i === last ? 0 : i + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = i === 0 ? last : i - 1;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = last;
    if (n !== null) {
      e.preventDefault();
      setActive(n);
      tabs.current[n]?.focus();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="core-services"
      aria-labelledby="solutions-title"
      className="bg-midnight py-16 text-white md:py-24 lg:py-36"
    >
      <div className="container-fq">
        <SectionHeading
          kicker="coreServices"
          id="solutions-title"
          tone="dark"
          title="Our core services"
          intro="Marketing and sales, run as one engine. Strategy decides what to build and how to position it. Execution fills the funnel and closes it. We hold both, so the brand promise and the sales conversation never drift apart."
        />

        {/* Track tabs */}
        <div
          role="tablist"
          aria-label="Service tracks"
          className="mt-12 grid border-y border-white/10 md:mt-20 md:grid-cols-3"
        >
          {tracks.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.title}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`group relative flex items-baseline gap-4 py-5 text-left outline-offset-[-4px] md:flex-col md:gap-0 md:py-8 ${
                  i > 0 ? "border-t border-white/10 md:border-l md:border-t-0 md:pl-8" : "md:pr-8"
                }`}
              >
                <span
                  className={`text-sm font-semibold tabular-nums transition-colors duration-300 ${
                    selected ? "text-signal" : "text-ice/45"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="md:mt-4">
                  <span
                    className={`block font-display text-xl font-semibold [font-stretch:112%] transition-colors duration-300 md:text-2xl ${
                      selected ? "text-white" : "text-ice/55 group-hover:text-white"
                    }`}
                  >
                    {t.title}
                  </span>
                  <span
                    className={`mt-1 block text-sm transition-colors duration-300 ${
                      selected ? "text-ice/70" : "text-ice/40"
                    }`}
                  >
                    {t.note} · {t.groups.length} services
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-[3px] origin-left bg-signal transition-transform duration-300 ${
                    selected ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Panels: every service stays in the markup; only the active track is shown. */}
        {tracks.map((t, i) => {
          const selected = i === active;
          return (
            <div
              key={t.title}
              role="tabpanel"
              id={`${baseId}-panel-${i}`}
              aria-labelledby={`${baseId}-tab-${i}`}
              hidden={!selected}
              className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12"
            >
              <div className={selected ? "anim-rise lg:col-span-4" : "lg:col-span-4"} style={{ animationDuration: "0.6s" }}>
                {/* On phones the stacked tab above already names the track, so these stay for screen readers only. */}
                <p className="text-sm font-semibold text-signal max-md:hidden">
                  Track {i + 1} of {tracks.length}
                </p>
                <h3 className="display-md mt-3 max-md:sr-only">{t.title}</h3>
                <p className="max-w-md text-xl leading-relaxed text-ice/85 md:mt-4">{t.summary}</p>
                <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-midnight-2">
                  {selected ? <AnimatedGraphic Graphic={t.Graphic} ready={inView} /> : null}
                </div>
                <Link
                  href={t.work.href}
                  className="group mt-5 inline-flex items-center gap-2 py-1 text-sm text-ice/70 transition-colors hover:text-white"
                >
                  From our work: <span className="font-semibold text-white">{t.work.name}</span>
                  <ArrowIcon />
                </Link>
              </div>

              <ul className="grid gap-px self-start overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:col-span-8">
                {t.groups.map((g, gi) => (
                  <li
                    key={g.title}
                    className={`bg-midnight p-6 md:p-8 ${selected ? "anim-rise" : ""} ${
                      t.groups.length % 2 === 1 && gi === t.groups.length - 1 ? "sm:col-span-2" : ""
                    }`}
                    style={{ animationDelay: `${80 + gi * 60}ms`, animationDuration: "0.6s" }}
                  >
                    <span className="text-sm font-semibold tabular-nums text-signal">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-3 font-display text-xl font-semibold leading-snug [font-stretch:112%]">{g.title}</h4>
                    <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5 text-[0.95rem] leading-relaxed text-ice/75">
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
