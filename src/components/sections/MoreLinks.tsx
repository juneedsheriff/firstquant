import Link from "next/link";
import { insights } from "@/lib/content";
import { ArrowIcon } from "../Button";

/** Slim band pointing to the Insights page, which no longer sits on the home page. */
export function MoreLinks() {
  return (
    <section aria-label="Market insights" className="border-t border-ink/10 bg-mist">
      <div className="container-fq">
        <Link href="/insights" className="group flex items-end justify-between gap-6 py-8 md:py-12">
          <span>
            <span className="block font-display text-2xl font-semibold text-ink [font-stretch:112%] transition-colors group-hover:text-cobalt md:text-3xl">
              Market insights
            </span>
            <span className="mt-2 block text-steel">
              {insights.length} articles on positioning, pricing and launches. Latest: {insights[0].title}
            </span>
          </span>
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </section>
  );
}
