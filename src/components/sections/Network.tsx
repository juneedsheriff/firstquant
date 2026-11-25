import Image from "next/image";
import { Check } from "lucide-react";
import { channelPartner, developers, leadershipExperience } from "@/lib/content";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { EnquiryLink } from "../EnquiryLink";
import { ArrowIcon } from "../Button";

export function Network() {
  return (
    <section id="network" aria-labelledby="network-title" className="bg-white py-24 md:py-36">
      <div className="container-fq">
        <SectionHeading
          id="network-title"
          title="Developer and channel partner network"
          intro="We work with a small number of developers at a time, and with the channel partners who help their projects reach the right buyers."
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <Reveal className="rounded-[2rem] bg-mist p-8 md:p-12 lg:col-span-7">
            <h3 className="text-xl font-semibold text-ink">Developers we partner with</h3>
            <ul className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
              {developers.map((d) => (
                <li key={d.name} className="grid aspect-square place-items-center overflow-hidden rounded-2xl bg-white p-4 md:p-6">
                  <Image
                    src={d.logo}
                    alt={d.name}
                    width={d.w}
                    height={d.h}
                    sizes="200px"
                    className="max-h-full w-auto object-contain"
                  />
                </li>
              ))}
            </ul>

            <h3 className="mt-14 text-xl font-semibold text-ink">Our leadership’s experience spans</h3>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {leadershipExperience.map((n) => (
                <li key={n} className="font-display text-xl font-semibold text-ink/80 [font-stretch:115%] md:text-2xl">
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative flex flex-col overflow-hidden rounded-[2rem] bg-cobalt p-8 text-white md:p-12 lg:col-span-5">
            <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full border-[40px] border-white/10" />
            <h3 className="display-md relative">{channelPartner.title}</h3>
            <p className="relative mt-4 leading-relaxed text-white/80">{channelPartner.body}</p>
            <ul className="relative mt-8 space-y-4">
              {channelPartner.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white/15">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="relative mt-auto pt-10">
              <EnquiryLink
                type="channel"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-cobalt transition-colors hover:bg-midnight hover:text-white"
              >
                Become a channel partner
                <ArrowIcon />
              </EnquiryLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
