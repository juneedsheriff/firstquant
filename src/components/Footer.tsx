import Image from "next/image";
import Link from "next/link";
import { navigation, projects, site, transformations } from "@/lib/content";
import { Logo } from "./Logo";
import { EnquiryLink } from "./EnquiryLink";
import { ArrowIcon, buttonStyles } from "./Button";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-midnight pb-[env(safe-area-inset-bottom)] text-ice/80">
      {/* Closing call to action */}
      <div className="container-fq pt-16 md:pt-24 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <p className="display-lg text-white lg:col-span-8">
            We don’t manage projects. We transform them.
          </p>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <EnquiryLink type="developer" className={buttonStyles.primary}>
              Start a conversation
              <ArrowIcon />
            </EnquiryLink>
          </div>
        </div>
      </div>

      <div className="container-fq mt-12 md:mt-20">
        <Image
          src="/images/brand/quant-rail.png"
          alt=""
          width={1586}
          height={131}
          sizes="(min-width: 1400px) 1300px, 100vw"
          className="h-auto w-full opacity-90"
        />
      </div>

      <div className="container-fq grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo className="h-10 w-auto" />
          <p className="mt-6 max-w-xs leading-relaxed">{site.tagline}. A Brim First company.</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:col-span-1 md:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((n) => (
                <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
              ))}
              <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-5 space-y-3">
              {transformations.map((t) => (
                <li key={t.id}><Link href="/#services" className="hover:text-white">{t.title.replace(" transformation", "")}</Link></li>
              ))}
              <li><Link href="/#architecture" className="hover:text-white">Architecture</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Work</h2>
            <ul className="mt-5 space-y-3">
              {projects.slice(0, 6).map((p) => (
                <li key={p.slug}><Link href={`/work/${p.slug}`} className="hover:text-white">{p.name}</Link></li>
              ))}
              <li><Link href="/work" className="font-semibold text-white hover:text-ice">All work</Link></li>
            </ul>
          </div>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <address className="mt-5 space-y-3 not-italic">
            <p>{site.address}</p>
            <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
            <p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a></p>
            <p><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></p>
          </address>
          <div className="mt-8 flex flex-col gap-2 text-sm">
            <EnquiryLink type="channel" className="hover:text-white">Channel partner enquiries</EnquiryLink>
            <EnquiryLink type="careers" className="hover:text-white">Careers</EnquiryLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-fq flex flex-col gap-3 py-6 text-sm text-ice/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>Project names and logos belong to their respective developers.</p>
        </div>
      </div>
    </footer>
  );
}
