import Image from "next/image";
import Link from "next/link";
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
      </div>

      <div className="container-fq grid min-h-[100svh] items-end gap-10 pb-14 pt-28 md:gap-12 md:pb-16 md:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-7 lg:pb-6">
          <p className="anim-rise mb-6 max-w-md md:mb-8 text-[0.95rem] leading-relaxed text-ice/70" style={{ animationDelay: "0ms" }}>
            Strategic growth partners for real estate developers. The transformation vertical of Brim First, based in Bengaluru.
          </p>
          <h1 id="hero-title" className="display-xl">
            <span className="anim-rise block" style={{ animationDelay: "60ms" }}>
              Projects into brands.
            </span>
            <span className="anim-rise block text-ice/55" style={{ animationDelay: "120ms" }}>
              Brands into destinations.
            </span>
          </h1>
          <p
            className="anim-rise mt-6 max-w-xl text-lg md:mt-8 leading-relaxed text-ice/80 md:text-xl"
            style={{ animationDelay: "180ms" }}
          >
            We don’t sell properties. We sit alongside your leadership team and take ownership of a project’s
            journey, from land and feasibility to launch, sales and sold out.
          </p>
          <div className="anim-rise mt-8 flex flex-wrap gap-3 md:mt-10" style={{ animationDelay: "240ms" }}>
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
          <div className="anim-reveal relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/11] sm:rounded-2xl lg:aspect-[4/5]" style={{ animationDelay: "120ms" }}>
            <Image
              src="/images/architecture/facade-tower.jpg"
              alt="Looking up at a tower façade of staggered glass and white balconies"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* The proof point sits under the photo like a caption, not floating over it. */}
          <Link
            href="/work/sowparnika-life-on-the-green"
            className="anim-rise group mt-5 flex items-baseline gap-4 border-t border-white/15 pt-4"
            style={{ animationDelay: "300ms" }}
          >
            <span className="font-display text-3xl font-semibold tabular-nums tracking-tight [font-stretch:115%]">100%</span>
            <span className="text-sm leading-relaxed text-ice/75">
              of Life on the Green sold within nine months of launch.{" "}
              <span className="whitespace-nowrap font-semibold text-white underline decoration-signal decoration-2 underline-offset-4 transition-colors group-hover:text-signal">
                Read the case study
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
