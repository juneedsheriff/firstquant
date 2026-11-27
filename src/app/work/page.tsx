import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Launches, repositionings, campaigns and brand identities for Bengaluru real estate developers.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero back={{ href: "/#work", label: "Home" }}>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
          <h1 className="display-md">Our work</h1>
          <p className="max-w-xl text-ice/80 md:text-right">
            All {projects.length} projects: launches, repositionings, campaigns and brand identities for Bengaluru
            developers.
          </p>
        </div>
      </PageHero>
      <section aria-label="All projects" className="bg-mist pb-20 pt-2 md:pb-28">
        <div className="container-fq">
          <ProjectGrid compact />
        </div>
      </section>
    </>
  );
}
