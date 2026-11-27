import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Insights } from "@/components/sections/Insights";

const intro = "Notes from the field on positioning, pricing and launching projects in Bengaluru’s residential market.";

export const metadata: Metadata = {
  title: "Market insights",
  description: intro,
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero back={{ href: "/", label: "Home" }}>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
          <h1 className="display-md">Market insights</h1>
          <p className="max-w-xl text-ice/80 md:text-right">{intro}</p>
        </div>
      </PageHero>
      <Insights standalone />
    </>
  );
}
