export const enquiryTypes = [
  { id: "developer", label: "Developer mandate" },
  { id: "channel", label: "Channel partner" },
  { id: "careers", label: "Careers" },
  { id: "general", label: "General" },
] as const;

export type EnquiryTypeId = (typeof enquiryTypes)[number]["id"];

export const projectStages = [
  "Land or feasibility stage",
  "Design and approvals",
  "Pre-launch",
  "Launched, needs acceleration",
  "Repositioning an existing project",
] as const;

export type EnquiryPayload = {
  type: EnquiryTypeId;
  name: string;
  email: string;
  phone: string;
  company?: string;
  location?: string;
  stage?: string;
  role?: string;
  message: string;
  consent: boolean;
  website?: string; // honeypot
};

export type FieldErrors = Partial<Record<keyof EnquiryPayload, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s()-]{7,18}$/;

/** Shared by the form (instant feedback) and the API route (source of truth). */
export function validateEnquiry(d: Partial<EnquiryPayload>): FieldErrors {
  const e: FieldErrors = {};
  if (!d.type || !enquiryTypes.some((t) => t.id === d.type)) e.type = "Choose what your enquiry is about.";
  if (!d.name || d.name.trim().length < 2) e.name = "Enter your full name.";
  if (!d.email || !EMAIL.test(d.email.trim())) e.email = "Enter an email address like name@company.com.";
  if (!d.phone || !PHONE.test(d.phone.trim())) e.phone = "Enter a phone number with at least 8 digits.";
  if (d.type === "developer" && (!d.company || d.company.trim().length < 2))
    e.company = "Enter your company or project name.";
  if (!d.message || d.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  if (d.message && d.message.length > 3000) e.message = "Keep your message under 3,000 characters.";
  if (!d.consent) e.consent = "Confirm we can contact you about this enquiry.";
  return e;
}
