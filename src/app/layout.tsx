import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { leaders, site } from "@/lib/content";
import { themeBootScript } from "@/lib/theme";
import "./globals.css";

// Self-hosted variable fonts (SIL Open Font License) — no build-time network access needed.
const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  style: "normal",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const hanken = localFont({
  src: "./fonts/hanken-grotesk-variable.woff2",
  variable: "--font-hanken",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "real estate consulting Bengaluru",
    "real estate marketing",
    "project launch strategy",
    "real estate brand strategy",
    "channel partner network",
    "real estate sales transformation",
    "developer advisory",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050e24",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/brand/first-quant-logo.png`,
  description: site.description,
  slogan: "Quantify. Understand. Architect. Navigate. Transform.",
  parentOrganization: { "@type": "Organization", name: "Brim First" },
  areaServed: { "@type": "City", name: "Bengaluru" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  employee: leaders.map((l) => ({ "@type": "Person", name: l.name, jobTitle: l.role })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the theme script sets data-theme on <html> before React loads.
    <html lang="en-IN" className={`${archivo.variable} ${hanken.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <noscript>
          <style>{`[data-reveal],.anim-rise{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={orgSchema} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
