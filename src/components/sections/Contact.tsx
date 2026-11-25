"use client";

import { cloneElement, useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";
import { enquiryTypes, projectStages, validateEnquiry, type EnquiryPayload, type EnquiryTypeId, type FieldErrors } from "@/lib/enquiry";
import { ENQUIRY_EVENT } from "../EnquiryLink";
import { Rail } from "../Rail";

const intros: Record<EnquiryTypeId, { heading: string; prompt: string; button: string }> = {
  developer: {
    heading: "Tell us about your project",
    prompt: "Where is the project, what stage is it at, and what would success look like?",
    button: "Send project enquiry",
  },
  channel: {
    heading: "Join our channel partner network",
    prompt: "Tell us about your firm, the micro-markets you cover and the buyers you work with.",
    button: "Send partner application",
  },
  careers: {
    heading: "Work with us",
    prompt: "Tell us what you do best and link to your LinkedIn profile or portfolio.",
    button: "Send application",
  },
  general: {
    heading: "Get in touch",
    prompt: "How can we help?",
    button: "Send message",
  },
};

const empty: EnquiryPayload = {
  type: "developer",
  name: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  stage: "",
  role: "",
  message: "",
  consent: false,
  website: "",
};

export function Contact() {
  const [data, setData] = useState<EnquiryPayload>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();

  // Preselect the enquiry type from links (/?type=channel#contact) or in-page EnquiryLink clicks.
  useEffect(() => {
    const apply = (type?: string | null, role?: string | null) => {
      if (type && enquiryTypes.some((t) => t.id === type)) {
        setData((d) => ({ ...d, type: type as EnquiryTypeId, role: role ?? d.role }));
        setErrors({});
        setStatus("idle");
      }
    };
    const params = new URLSearchParams(window.location.search);
    apply(params.get("type"), params.get("role"));
    const onEvent = (e: Event) => {
      const { type, role } = (e as CustomEvent<{ type: string; role?: string }>).detail;
      apply(type, role);
    };
    window.addEventListener(ENQUIRY_EVENT, onEvent);
    return () => window.removeEventListener(ENQUIRY_EVENT, onEvent);
  }, []);

  const set = <K extends keyof EnquiryPayload>(key: K, value: EnquiryPayload[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateEnquiry(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    setServerMessage("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        setServerMessage(json.message ?? "Your enquiry couldn’t be sent. Check your connection and try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setServerMessage("Your enquiry couldn’t be sent. Check your connection and try again.");
      setStatus("error");
    }
  };

  const copy = intros[data.type];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-24 md:py-36">
      <div className="container-fq grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Rail className="mb-7" />
          <h2 id="contact-title" className="display-lg text-ink">
            Every project has value. Let’s find yours.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">
            Share a few details and a member of our leadership team will reply within two working days.
          </p>

          <ul className="mt-12 space-y-5 text-ink">
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full bg-mist text-cobalt"><Mail aria-hidden="true" className="size-5" /></span>
              <a href={`mailto:${site.email}`} className="font-semibold hover:text-cobalt">{site.email}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full bg-mist text-cobalt"><Phone aria-hidden="true" className="size-5" /></span>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-semibold hover:text-cobalt">{site.phone}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full bg-mist text-cobalt"><MapPin aria-hidden="true" className="size-5" /></span>
              <span className="font-semibold">{site.address}</span>
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] bg-mist p-6 sm:p-8 md:p-12 lg:col-span-7">
          {status === "sent" ? (
            <div role="status" className="flex min-h-[28rem] flex-col items-start justify-center">
              <CheckCircle2 aria-hidden="true" className="size-12 text-cobalt" />
              <h3 className="display-md mt-6 text-ink">Enquiry sent</h3>
              <p className="mt-3 max-w-md text-lg text-steel">
                Thanks, {data.name.split(" ")[0]}. We’ve received your enquiry and will reply to {data.email} within two working days.
              </p>
              <button
                type="button"
                onClick={() => {
                  setData({ ...empty, type: data.type });
                  setStatus("idle");
                }}
                className="mt-8 rounded-full border border-ink/20 px-5 py-3 font-semibold text-ink hover:border-ink"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form ref={formRef} className="relative" noValidate onSubmit={onSubmit} aria-describedby={`${uid}-prompt`}>
              <fieldset>
                <legend className="mb-4 text-sm font-semibold text-ink">What’s your enquiry about?</legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {enquiryTypes.map((t) => (
                    <label
                      key={t.id}
                      className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-signal ${
                        data.type === t.id ? "border-ink bg-ink text-white" : "border-ink/15 bg-white text-ink hover:border-ink/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={t.id}
                        checked={data.type === t.id}
                        onChange={() => set("type", t.id)}
                        className="sr-only"
                      />
                      {t.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <h3 className="display-md mt-10 text-ink">{copy.heading}</h3>
              <p id={`${uid}-prompt`} className="mt-2 text-steel">{copy.prompt}</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field id={`${uid}-name`} label="Full name" error={errors.name}>
                  <input name="name" autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} />
                </Field>
                <Field id={`${uid}-email`} label="Work email" error={errors.email}>
                  <input name="email" type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} />
                </Field>
                <Field id={`${uid}-phone`} label="Phone" error={errors.phone}>
                  <input name="phone" type="tel" autoComplete="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
                </Field>

                {data.type === "careers" ? (
                  <Field id={`${uid}-role`} label="Role you’re applying for" optional>
                    <input name="role" value={data.role} onChange={(e) => set("role", e.target.value)} />
                  </Field>
                ) : (
                  <Field
                    id={`${uid}-company`}
                    label={data.type === "developer" ? "Company or project" : "Company"}
                    optional={data.type !== "developer"}
                    error={errors.company}
                  >
                    <input name="company" autoComplete="organization" value={data.company} onChange={(e) => set("company", e.target.value)} />
                  </Field>
                )}

                {data.type === "developer" ? (
                  <>
                    <Field id={`${uid}-location`} label="Project location" optional>
                      <input name="location" placeholder="e.g. Whitefield, Bengaluru" value={data.location} onChange={(e) => set("location", e.target.value)} />
                    </Field>
                    <Field id={`${uid}-stage`} label="Project stage" optional>
                      <select name="stage" value={data.stage} onChange={(e) => set("stage", e.target.value)}>
                        <option value="">Select a stage</option>
                        {projectStages.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                  </>
                ) : null}

                {data.type === "channel" ? (
                  <Field id={`${uid}-location`} label="Micro-markets you cover" optional>
                    <input name="location" placeholder="e.g. North and East Bengaluru" value={data.location} onChange={(e) => set("location", e.target.value)} />
                  </Field>
                ) : null}

                <Field id={`${uid}-message`} label="Message" error={errors.message} className="sm:col-span-2">
                  <textarea name="message" rows={5} value={data.message} onChange={(e) => set("message", e.target.value)} />
                </Field>
              </div>

              {/* Honeypot */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input tabIndex={-1} autoComplete="off" name="website" value={data.website} onChange={(e) => set("website", e.target.value)} />
                </label>
              </div>

              <div className="mt-6">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-steel">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={data.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
                    className="mt-0.5 size-5 shrink-0 accent-cobalt"
                  />
                  I agree that First Quant can contact me about this enquiry and store my details for that purpose.
                </label>
                {errors.consent ? (
                  <p id={`${uid}-consent-err`} className="mt-2 text-sm font-medium text-red-700">{errors.consent}</p>
                ) : null}
              </div>

              {status === "error" && serverMessage ? (
                <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                  {serverMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cobalt px-7 py-4 font-semibold text-white transition-colors hover:bg-midnight disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 aria-hidden="true" className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  copy.button
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLElement>>;
}) {
  const errId = `${id}-error`;
  const control = cloneElement(children, {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
    className:
      "mt-2 block w-full rounded-xl border bg-white px-4 py-3.5 text-ink placeholder:text-steel/60 transition-colors focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-signal/30 " +
      (error ? "border-red-600" : "border-ink/15"),
  });
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label} {optional ? <span className="font-normal text-steel">(optional)</span> : null}
      </label>
      {control}
      {error ? (
        <p id={errId} className="mt-2 text-sm font-medium text-red-700">{error}</p>
      ) : null}
    </div>
  );
}
