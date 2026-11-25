/**
 * The dotted rail from the First Quant brand art: a solid bar that dissolves
 * into fading dots. Used as the section marker in place of text labels.
 */
export function Rail({ dots = 9, className = "", tone = "dark" }: { dots?: number; className?: string; tone?: "dark" | "light" }) {
  const bar = tone === "light" ? "from-cobalt to-signal" : "from-cobalt to-signal";
  return (
    <span aria-hidden="true" className={`rail ${className}`}>
      <span className={`h-[5px] w-10 rounded-full bg-gradient-to-r ${bar}`} />
      {Array.from({ length: dots }).map((_, i) => (
        <span
          key={i}
          className="size-[5px] rounded-full bg-signal"
          style={{ opacity: 1 - (i / dots) * 0.85 }}
        />
      ))}
    </span>
  );
}
