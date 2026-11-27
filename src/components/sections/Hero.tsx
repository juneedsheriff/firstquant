import Image from "next/image";
import Link from "next/link";
import { quant } from "@/lib/content";
import { ArrowIcon, buttonStyles } from "../Button";
import { EnquiryLink } from "../EnquiryLink";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-midnight text-white">
      {/* Atmosphere: architectural planes and a single cobalt glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/images/architecture/abstract-planes.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.07] mix-blend-screen"
        />
        <div className="absolute -left-40 top-1/3 size-[42rem] rounded-full bg-cobalt/35 blur-[140px]" />
      </div>

      <div className="container-fq grid min-h-[100svh] items-end gap-10 pb-14 pt-28 md:gap-12 md:pb-16 md:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-7 lg:pb-6">
          <p className="anim-rise mb-6 max-w-md md:mb-8 text-[0.95rem] leading-relaxed text-ice/70" style={{ animationDelay: "100ms" }}>
            Strategic growth partners for real estate developers. The transformation vertical of Brim First, based in Bengaluru.
          </p>
          <h1 id="hero-title" className="display-xl">
            <span className="anim-rise block" style={{ animationDelay: "200ms" }}>
              Projects into brands.
            </span>
            <span className="anim-rise block text-ice/55" style={{ animationDelay: "340ms" }}>
              Brands into destinations.
            </span>
          </h1>
          <p
            className="anim-rise mt-6 max-w-xl text-lg md:mt-8 leading-relaxed text-ice/80 md:text-xl"
            style={{ animationDelay: "500ms" }}
          >
            We don’t sell properties. We sit alongside your leadership team and take ownership of a project’s
            journey, from land and feasibility to launch, sales and sold out.
          </p>
          <div className="anim-rise mt-8 flex flex-wrap gap-3 md:mt-10" style={{ animationDelay: "640ms" }}>
            <EnquiryLink type="developer" className={buttonStyles.primary}>
              Discuss your project
              <ArrowIcon />
            </EnquiryLink>
            <Link href="/#work" className={buttonStyles.ghostDark}>
              See our work
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="anim-reveal relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:aspect-[16/11] sm:rounded-[2rem] lg:aspect-[4/5]" style={{ animationDelay: "250ms" }}>
            <Image
              src="/images/architecture/facade-tower.jpg"
              alt="Looking up at a tower façade of staggered glass and white balconies"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
          </div>

          <Link
            href="/work/sowparnika-life-on-the-green"
            className="anim-rise group absolute -bottom-6 left-4 right-4 flex items-end justify-between gap-6 rounded-2xl border border-white/10 bg-midnight/80 p-5 backdrop-blur-xl sm:left-auto sm:right-6 sm:w-80 lg:-left-16 lg:right-auto"
            style={{ animationDelay: "900ms" }}
          >
            <div>
              <p className="font-display text-4xl font-bold tracking-tight [font-stretch:115%]">100%</p>
              <p className="mt-1 text-sm text-ice/75">
                of Life on the Green sold within nine months of launch
              </p>
            </div>
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal transition-transform duration-300 group-hover:rotate-45">
              <ArrowIcon />
              <span className="sr-only">Read the case study</span>
            </span>
          </Link>
        </div>
      </div>

      {/* QUANT ticker — the brand promise as a slow-moving line */}
      <div className="border-t border-white/10 py-4 md:py-5">
        <div className="flex overflow-hidden" aria-label="Quantify, Understand, Architect, Navigate, Transform">
          <div className="anim-marquee flex shrink-0 items-center" aria-hidden="true">
            {[0, 1, 2, 3].map((k) => (
              <div key={k} className="flex shrink-0 items-center">
                {quant.map((q) => (
                  <span key={q.word + k} className="flex items-center">
                    <span className="px-5 font-display text-lg md:px-8 font-semibold text-white/85 [font-stretch:120%] md:text-2xl">
                      <span className="text-signal">{q.letter}</span>
                      {q.word.slice(1)}
                    </span>
                    <span className="flex gap-1.5">
                      {[1, 0.6, 0.3].map((o) => (
                        <span key={o} className="size-1.5 rounded-full bg-signal" style={{ opacity: o }} />
                      ))}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
