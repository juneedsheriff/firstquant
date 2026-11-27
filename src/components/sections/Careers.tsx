import Image from "next/image";
import { MapPin } from "lucide-react";
import { careers } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { EnquiryLink } from "../EnquiryLink";
import { ArrowIcon } from "../Button";

export function Careers() {
  return (
    <section id="careers" aria-labelledby="careers-title" className="relative overflow-hidden bg-midnight py-16 text-white md:py-24 lg:py-36">
      <div className="container-fq">
        <SectionHeading id="careers-title" tone="dark" title="Careers" intro={careers.intro} />

        <div className="mt-10 md:mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <Reveal className="relative min-h-80 overflow-hidden rounded-[2rem] lg:col-span-4">
            <Image
              src="/images/architecture/cantilever.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover object-bottom opacity-60 grayscale"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-cobalt/80 to-transparent mix-blend-multiply" />
            <ul className="absolute inset-x-0 bottom-0 space-y-5 p-6 sm:p-8">
              {careers.values.map((v) => (
                <li key={v.title}>
                  <p className="font-display text-lg font-semibold [font-stretch:112%]">{v.title}</p>
                  <p className="mt-1 text-sm text-ice/85">{v.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <h3 className="sr-only">Open roles</h3>
            <ul className="border-t border-white/12">
              {careers.roles.map((r) => (
                <li key={r.title} className="border-b border-white/12">
                  <EnquiryLink
                    type="careers"
                    role={r.title}
                    className="group grid items-center gap-2 py-7 sm:grid-cols-[1fr_auto] sm:gap-6 md:py-8"
                  >
                    <span>
                      <span className="block font-display text-2xl font-semibold [font-stretch:112%] transition-colors group-hover:text-signal md:text-3xl">
                        {r.title}
                      </span>
                      <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ice/70">
                        <span>{r.team}</span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin aria-hidden="true" className="size-3.5" /> {r.location}
                        </span>
                        <span>{r.type}</span>
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-ice group-hover:text-white">
                      Apply <ArrowIcon />
                    </span>
                  </EnquiryLink>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ice/75">
              Don’t see your role?{" "}
              <EnquiryLink type="careers" className="font-semibold text-white underline decoration-signal decoration-2 underline-offset-4 hover:text-signal">
                Send us your profile
              </EnquiryLink>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
