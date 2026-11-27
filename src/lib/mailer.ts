import nodemailer from "nodemailer";
import { enquiryTypes, type EnquiryPayload } from "./enquiry";

type Enquiry = Omit<EnquiryPayload, "consent" | "website"> & { receivedAt: string };

/** Email delivery is on when the SMTP login and the destination inbox are both set. */
export function emailConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS && process.env.ENQUIRY_TO);
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Sends one enquiry to ENQUIRY_TO. Replying to the email goes straight to the person who enquired. */
export async function sendEnquiryEmail(enquiry: Enquiry) {
  const port = Number(process.env.SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const typeLabel = enquiryTypes.find((t) => t.id === enquiry.type)?.label ?? enquiry.type;
  const rows: [string, string | undefined][] = [
    ["Enquiry", typeLabel],
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone],
    ["Company or project", enquiry.company],
    ["Project location", enquiry.location],
    ["Project stage", enquiry.stage],
    ["Role", enquiry.role],
    ["Received", new Date(enquiry.receivedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
  ];
  const filled = rows.filter((r): r is [string, string] => Boolean(r[1]));

  const text = [...filled.map(([k, v]) => `${k}: ${v}`), "", "Message:", enquiry.message].join("\n");
  const html = `
    <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#0c1730">
      ${filled.map(([k, v]) => `<tr><td style="color:#5b6782;vertical-align:top">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#5b6782;margin:16px 0 4px">Message</p>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#0c1730;white-space:pre-wrap;margin:0">${escapeHtml(enquiry.message)}</p>`;

  await transport.sendMail({
    from: `"First Quant website" <${process.env.SMTP_USER}>`,
    to: process.env.ENQUIRY_TO,
    replyTo: `"${enquiry.name.replace(/"/g, "")}" <${enquiry.email}>`,
    subject: `New ${typeLabel.toLowerCase()} enquiry from ${enquiry.name}`,
    text,
    html,
  });
}
