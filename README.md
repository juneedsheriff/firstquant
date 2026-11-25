# First Quant — corporate website

Strategic growth partners for real estate developers. Built with Next.js (App Router), React, TypeScript, Tailwind CSS 4 and Lucide icons.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
```

Production: `npm run build && npm start`. Deploys as-is to Vercel or any Node 20+ host.

## Where things live

| Path | What it is |
| --- | --- |
| `src/lib/content.ts` | **All site copy**: services, projects, stats, leadership, insights, careers, contact details. Edit here, not in components. |
| `src/components/sections/` | One component per home page section |
| `src/components/` | Shared pieces: header, footer, logo, rail motif, reveal and count-up animation |
| `src/app/work/[slug]` | Case study pages, generated from `projects` |
| `src/app/insights/[slug]` | Article pages, generated from `insights` |
| `src/app/api/enquiry/route.ts` | Enquiry form endpoint (validation, honeypot, rate limit) |
| `src/app/sitemap.ts`, `robots.ts` | SEO routes; Open Graph image and icons sit beside them |
| `public/images/` | Project renders, logos and portraits from the company deck |

## Enquiry form

Submissions are validated on both client and server. Set `ENQUIRY_WEBHOOK_URL` to forward each enquiry as JSON (Slack, Make, Zapier, or your CRM). Without it, enquiries are only logged on the server.

Links can preselect the form mode: `/?type=channel#contact`, `/?type=careers&role=Brand%20strategist#contact`.

## Before launch

Search `content.ts` for `PLACEHOLDER` and replace:

- Contact email, phone, address and LinkedIn URL
- Insight articles (drafted from the deck's case studies)
- Open roles and the channel partner programme details

Also worth doing: add higher-resolution project renders (current ones are ~600px wide, from the deck), and add any awards to the Achievements section.

## Design system

- Colours: Midnight `#050E24`, Cobalt `#0A3FD8`, Signal `#1C7CFF`, Mist `#EEF2F9`, Steel `#5B6782`, Ice `#C9D6F2` (in `src/app/globals.css`)
- Type: Archivo (variable, set slightly expanded) for display; Hanken Grotesk for body. Both self-hosted, SIL Open Font License.
- Motif: the dotted rail from the brand artwork marks each section.
- Motion respects `prefers-reduced-motion`; content stays visible without JavaScript.
