import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="First Quant home" className="inline-flex shrink-0">
      <Image
        src="/images/brand/first-quant-logo.png"
        alt="First Quant"
        width={1052}
        height={355}
        priority={priority}
        className={className}
        sizes="200px"
      />
    </Link>
  );
}
