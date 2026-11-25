import Link from "next/link";
import { buttonStyles } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-midnight pt-24 text-white">
      <div className="container-fq">
        <p className="font-display text-[clamp(6rem,20vw,14rem)] font-bold leading-none text-white/10 [font-stretch:125%]">404</p>
        <h1 className="display-lg -mt-6">This page doesn’t exist</h1>
        <p className="mt-4 max-w-md text-lg text-ice/80">The link may be out of date. Head back to the homepage to find what you need.</p>
        <Link href="/" className={`${buttonStyles.primary} mt-10`}>Go to the homepage</Link>
      </div>
    </section>
  );
}
