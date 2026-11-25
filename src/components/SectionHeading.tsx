import { Rail } from "./Rail";
import { Reveal } from "./Reveal";

type Props = {
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "light" | "dark";
  id?: string;
  className?: string;
  align?: "split" | "stack";
};

export function SectionHeading({ title, intro, tone = "light", id, className = "", align = "split" }: Props) {
  const introColor = tone === "dark" ? "text-ice/75" : "text-steel";
  return (
    <Reveal
      className={`grid gap-6 ${align === "split" ? "lg:grid-cols-12 lg:items-end" : ""} ${className}`}
    >
      <div className={align === "split" ? "lg:col-span-7" : ""}>
        <Rail className="mb-7" />
        <h2 id={id} className={`display-lg ${tone === "dark" ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </div>
      {intro ? (
        <p className={`max-w-xl text-lg leading-relaxed ${introColor} ${align === "split" ? "lg:col-span-5 lg:justify-self-end" : ""}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
