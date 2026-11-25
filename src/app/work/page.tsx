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
        <h1 className="display-xl mt-10">Our work</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ice/85">
          All {projects.length} projects: launches, repositionings, campaigns and brand identities for Bengaluru
          developers.
        </p>
      </PageHero>
      <section aria-label="All projects" className="bg-mist pb-24 pt-4 md:pb-36">
        <div className="container-fq">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
