import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHero({ back, children }: { back: { href: string; label: string }; children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-midnight pb-10 pt-28 text-white md:pb-12 md:pt-32">
      <div className="container-fq relative">
        <Link href={back.href} className="-my-2 inline-flex items-center gap-2 py-2 text-sm font-semibold text-ice/75 hover:text-white">
          <ArrowLeft aria-hidden="true" className="size-4" /> {back.label}
        </Link>
        {children}
      </div>
    </section>
  );
}
