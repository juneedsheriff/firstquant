import Image from "next/image";
import { clientLogos } from "@/lib/content";

/** Logos of the developers and brands we've worked with, sliding continuously below the hero. */
export function ClientLogos() {
  // Two identical sets: the track slides left by exactly one set, then repeats without a jump.
  const sets = [0, 1];
  return (
    <section aria-label="Brands we've worked with" className="logo-strip border-b border-ink/10 bg-white">
      <div className="container-fq flex flex-col gap-5 py-8 md:flex-row md:items-center md:gap-10 md:py-10">
        <p className="shrink-0 text-sm font-semibold text-steel md:w-40 md:leading-snug">Brands we’ve worked with</p>

        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="anim-logos flex w-max">
            {sets.map((set) => (
              <ul key={set} aria-hidden={set === 1 ? true : undefined} className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20">
                {clientLogos.map((logo) => (
                  <li
                    key={logo.name}
                    // Compact marks get more height so they balance against wide wordmarks.
                    className={`flex w-36 shrink-0 items-center justify-center md:w-44 ${logo.tall ? "h-16 md:h-[4.5rem]" : "h-12 md:h-14"}`}
                  >
                    <Image
                      src={logo.src}
                      alt={set === 1 ? "" : logo.name}
                      width={logo.w}
                      height={logo.h}
                      sizes="176px"
                      // Small files; load up front so logos never pop in mid-slide.
                      loading="eager"
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
