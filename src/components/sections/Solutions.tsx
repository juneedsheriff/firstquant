import { solutions } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

function Row({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="grid gap-4 border-t border-white/12 py-8 md:grid-cols-12 md:gap-8">
      <h4 className="font-display text-xl font-semibold text-white [font-stretch:112%] md:col-span-4">{title}</h4>
      <ul className="flex flex-wrap gap-x-2 gap-y-2 text-ice/75 md:col-span-8">
        {items.map((it, i) => (
          <li key={it} className="flex items-center gap-2">
            {it}
            {i < items.length - 1 ? (
              <span aria-hidden="true" className="size-1 rounded-full bg-signal/70" />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Solutions() {
  return (
    <section aria-labelledby="solutions-title" className="bg-midnight py-16 text-white md:py-24 lg:py-36">
      <div className="container-fq">
        <SectionHeading
          id="solutions-title"
          tone="dark"
          title="Marketing and sales, run as one engine"
          intro="Strategy decides what to build and how to position it. Execution fills the funnel and closes it. We hold both, so the brand promise and the sales conversation never drift apart."
        />

        <div className="mt-10 md:mt-16 grid gap-10 md:gap-16 lg:mt-24 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="mb-2 flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-signal">Strategy</h3>
              <p className="text-sm text-ice/60">Before launch</p>
            </div>
            {solutions.strategy.map((s) => (
              <Row key={s.title} {...s} />
            ))}
          </Reveal>
          <Reveal delay={120}>
            <div className="mb-2 flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-signal">Execution</h3>
              <p className="text-sm text-ice/60">Launch to sold out</p>
            </div>
            {solutions.execution.map((s) => (
              <Row key={s.title} {...s} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
