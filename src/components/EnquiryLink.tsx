"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type EnquiryType = "developer" | "channel" | "careers" | "general";

export const ENQUIRY_EVENT = "fq:enquiry";

/**
 * Link to the contact form that also preselects the enquiry type.
 * On the home page it scrolls in place; elsewhere it navigates to /?type=...#contact.
 */
export function EnquiryLink({
  type,
  role,
  className,
  children,
}: {
  type: EnquiryType;
  role?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = new URLSearchParams({ type });
  if (role) params.set("role", role);
  const href = `/?${params.toString()}#contact`;

  return (
    <Link
      href={href}
      scroll={pathname !== "/"}
      className={className}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        window.dispatchEvent(new CustomEvent(ENQUIRY_EVENT, { detail: { type, role } }));
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", "#contact");
      }}
    >
      {children}
    </Link>
  );
}
