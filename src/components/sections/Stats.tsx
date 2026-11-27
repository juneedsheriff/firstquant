import Link from "next/link";
import { stats } from "@/lib/content";
import { CountUp } from "../CountUp";
import { Rail } from "../Rail";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Button";

export function Stats() {
  const [lead, ...rest] = stats;
  return (
    <section aria-labelledby="stats-title" className="relative overflow-hidden bg-midnight-2 py-16 text-white md:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(28,124,255,0.18),transparent_60%)]" />
      <div className="container-fq relative grid gap-10 md:gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Rail className="mb-7" />
          <h2 id="stats-title" className="display-md text-white">
            What a single mandate can move
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ice/75">
            Results from two years leading sales and marketing across Sowparnika Projects’ residential portfolio,
            FY23–24 and FY24–25, on a marketing budget of ₹21.88 Cr.
          </p>

          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="whitespace-nowrap font-display text-[clamp(3rem,6.2vw,6rem)] font-bold leading-none tracking-[-0.04em] [font-stretch:118%]">
              <CountUp value={lead.value} decimals={lead.decimals} prefix={lead.prefix} suffix={lead.suffix} />
            </p>
            <p className="mt-3 text-lg text-ice/80">{lead.label}</p>
          </div>

          <Link
            href="/work/sowparnika-group"
            className="group mt-10 inline-flex items-center gap-2 font-semibold text-white underline decoration-signal decoration-2 underline-offset-8 hover:text-signal"
          >
            Read the full case study
            <ArrowIcon />
          </Link>
        </Reveal>

        <dl className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-[1.75rem] bg-white/10 lg:col-span-6 lg:col-start-7">
          {rest.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={`bg-midnight-2 p-6 md:p-9 ${i === rest.length - 1 ? "col-span-2" : ""}`}>
              <dt className="text-sm text-ice/70">{s.label}</dt>
              <dd className="mt-3 font-display text-4xl font-semibold tracking-tight [font-stretch:115%] md:text-5xl">
                <CountUp value={s.value} decimals={s.decimals ?? 0} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="container-fq relative mt-12 md:mt-20">
        <Reveal className="grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
          {[
            { k: "22+ years", v: "leading real estate marketing and business transformation" },
            { k: "30+ years", v: "of sales leadership and developer advisory on our bench" },
            { k: "6 landmark projects", v: "launched or repositioned across Bengaluru, plus a full portfolio mandate" },
          ].map((x) => (
            <div key={x.k}>
              <p className="font-display text-2xl font-semibold [font-stretch:112%]">{x.k}</p>
              <p className="mt-2 max-w-xs text-ice/70">{x.v}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
