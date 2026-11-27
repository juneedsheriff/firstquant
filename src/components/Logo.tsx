import Image from "next/image";
import Link from "next/link";

/**
 * The logo's "FIRST" is white, so it only works on dark surfaces. The light theme swaps in
 * a copy with a navy "FIRST" (globals.css shows one or the other via .logo-on-dark / .logo-on-light).
 */
export function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="First Quant home" className="inline-flex shrink-0">
      <Image
        src="/images/brand/first-quant-logo.png"
        alt="First Quant"
        width={1052}
        height={355}
        priority={priority}
        className={`logo-on-dark ${className}`}
        sizes="200px"
      />
      <Image
        src="/images/brand/first-quant-logo-on-light.png"
        alt="First Quant"
        width={1052}
        height={355}
        className={`logo-on-light ${className}`}
        sizes="200px"
      />
    </Link>
  );
}
