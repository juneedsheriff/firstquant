import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Leadership } from "@/components/sections/Leadership";

const intro =
  "More than five decades of combined experience across Bengaluru’s most respected developers, now focused on one question: what will make this project succeed?";

export const metadata: Metadata = {
  title: "Leadership",
  description: intro,
  alternates: { canonical: "/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero back={{ href: "/", label: "Home" }}>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
          <h1 className="display-md">Leadership</h1>
          <p className="max-w-xl text-ice/80 md:text-right">{intro}</p>
        </div>
      </PageHero>
      <Leadership variant="page" />
    </>
  );
}
