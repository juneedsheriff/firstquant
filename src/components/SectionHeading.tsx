import { sectionKickers } from "@/lib/content";

type KickerKey = keyof typeof sectionKickers;

/** Numbered running label above a section heading, like a chapter mark in a printed report. */
export function Kicker({ section, tone = "light", className = "" }: { section: KickerKey; tone?: "light" | "dark"; className?: string }) {
  const [n, label] = sectionKickers[section];
  return (
    <p className={`flex items-center gap-3 text-sm font-medium ${tone === "dark" ? "text-ice/60" : "text-steel"} ${className}`}>
      <span className="tabular-nums text-signal">{n}</span>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
      {label}
    </p>
  );
}

type Props = {
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "light" | "dark";
  id?: string;
  className?: string;
  align?: "split" | "stack";
  /** Which running label to show above the title. */
  kicker?: KickerKey;
};

export function SectionHeading({ title, intro, tone = "light", id, className = "", align = "split", kicker }: Props) {
  const introColor = tone === "dark" ? "text-ice/75" : "text-steel";
  return (
    // Headings are static: only content that carries meaning animates.
    <div className={`grid gap-6 ${align === "split" ? "lg:grid-cols-12 lg:items-end" : ""} ${className}`}>
      <div className={align === "split" ? "lg:col-span-7" : ""}>
        {kicker ? <Kicker section={kicker} tone={tone} className="mb-6" /> : null}
        <h2 id={id} className={`display-lg ${tone === "dark" ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </div>
      {intro ? (
        <p className={`max-w-xl text-lg leading-relaxed ${introColor} ${align === "split" ? "lg:col-span-5 lg:justify-self-end" : ""}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
