import { ArrowUpRight } from "lucide-react";

export const buttonStyles = {
  primary:
    "group inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:bg-cobalt focus-visible:outline-white",
  ghostDark:
    "group inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-midnight",
  ghostLight:
    "group inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white",
};

export function ArrowIcon() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  );
}
