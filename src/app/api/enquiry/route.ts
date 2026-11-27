import { NextResponse } from "next/server";
import { validateEnquiry, type EnquiryPayload } from "@/lib/enquiry";
import { emailConfigured, sendEnquiryEmail } from "@/lib/mailer";
import { site } from "@/lib/content";

export const runtime = "nodejs";

// Simple in-memory rate limit (per server instance). Use a shared store in production at scale.
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: "Too many enquiries from this connection. Try again in 10 minutes." }, { status: 429 });
  }

  let body: Partial<EnquiryPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "The enquiry couldn’t be read. Refresh the page and try again." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success so they don't retry.
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors, message: "Some fields need attention." }, { status: 422 });
  }

  const enquiry = {
    type: body.type!, // validateEnquiry has confirmed it is one of the known types
    name: body.name!.trim(),
    email: body.email!.trim(),
    phone: body.phone!.trim(),
    company: body.company?.trim() || undefined,
    location: body.location?.trim() || undefined,
    stage: body.stage || undefined,
    role: body.role?.trim() || undefined,
    message: body.message!.trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  const email = emailConfigured();

  if (!email && !webhook) {
    // Never tell a visitor "sent" when nothing will receive it.
    if (process.env.NODE_ENV === "production") {
      console.error("[enquiry] no delivery configured: set the SMTP_* and ENQUIRY_TO variables");
      return NextResponse.json(
        { ok: false, message: `Our enquiry form is unavailable right now. Please email us at ${site.email}.` },
        { status: 503 },
      );
    }
    console.info("[enquiry] received in development (no SMTP_* or ENQUIRY_WEBHOOK_URL set)", enquiry);
    return NextResponse.json({ ok: true });
  }

  try {
    if (email) await sendEnquiryEmail(enquiry);
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: `New ${enquiry.type} enquiry from ${enquiry.name}`, enquiry }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return NextResponse.json(
      { ok: false, message: `Your enquiry couldn’t be sent right now. Try again in a few minutes, or email us at ${site.email}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
