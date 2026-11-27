import Image from "next/image";
import { Rail } from "../Rail";
import { Reveal } from "../Reveal";

const beliefs = ["Every project has value.", "Every brand has potential.", "Every market has opportunity."];

const mandate = [
  "Business strategy",
  "Product positioning",
  "Branding and marketing",
  "Retail sales strategy",
  "Channel partner ecosystems",
  "Revenue acceleration",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-mist py-16 md:py-24 lg:py-36">
      <div className="container-fq">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <Rail className="mb-7" />
            <h2 id="about-title" className="display-lg text-ink">
              An extension of your leadership team, not another agency.
            </h2>
            <div className="mt-10 grid gap-8 text-lg leading-relaxed text-steel md:grid-cols-2">
              <p>
                First Quant is the real estate transformation vertical of Brim First, created to redefine how
                projects are envisioned, positioned, launched and scaled.
              </p>
              <p>
                Unlike conventional marketing agencies or sales consultants, we take complete strategic ownership of
                a project, from concept to market leadership, and we’re measured on the business outcome.
              </p>
            </div>

            <div className="mt-10 md:mt-14 rounded-[1.75rem] bg-white p-8 md:p-10">
              <h3 className="text-xl font-semibold text-ink">One integrated growth model</h3>
              <p className="mt-2 max-w-lg text-steel">
                Whether we’re reviving an underperforming asset, repositioning an established brand or launching a
                landmark development, our mandate brings these together:
              </p>
              <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {mandate.map((m) => (
                  <li key={m} className="flex items-center gap-3 border-t border-ink/10 pt-3 font-medium text-ink">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="relative lg:col-span-5 lg:pl-6" delay={150}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/architecture/cantilever.jpg"
                alt="A cantilevered concrete building with stacked balconies, in black and white"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover grayscale"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-cobalt/25 mix-blend-multiply" />
            </div>
            <figure className="relative -mt-24 ml-6 mr-0 rounded-[1.75rem] bg-midnight p-6 sm:p-8 text-white shadow-2xl shadow-midnight/30 md:-mt-32 md:ml-12">
              <blockquote>
                <p className="font-display text-2xl font-semibold leading-snug [font-stretch:110%]">
                  Success is never determined by location alone. It’s shaped by strategy, perception, timing and
                  execution.
                </p>
              </blockquote>
              <figcaption className="mt-5 text-sm text-ice/70">Our philosophy</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-14 md:mt-24 grid gap-px overflow-hidden rounded-[1.75rem] bg-ink/10 md:grid-cols-3">
          {beliefs.map((b) => (
            <p
              key={b}
              className="bg-mist px-2 py-8 font-display text-2xl font-semibold text-ink [font-stretch:112%] md:px-8 md:py-12 md:text-3xl"
            >
              {b}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
