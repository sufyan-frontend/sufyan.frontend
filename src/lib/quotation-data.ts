/**
 * Quotation / proposal content + branding config.
 *
 * This is the ONLY file you edit to change the quotation PDF. Prices, terms,
 * package contents, benefits, notes and document meta all live here — the
 * layout in `src/components/quotation/*` renders whatever this file exports.
 *
 * Branding is pulled from the live site so the document can never drift from
 * the website: identity from `@/lib/data` (person, siteUrl), colours mirrored
 * from the Tailwind theme in `src/app/globals.css` (@theme inline).
 */
import { person, siteUrl } from "@/lib/data";

/* -------------------------------------------------------------------------- */
/*                                  BRANDING                                   */
/* -------------------------------------------------------------------------- */

/** +923227479636 → +92 322 747 9636 (kept derived so data.ts stays the source). */
const phoneDisplay = person.phone.replace(/^(\+92)(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3 $4");

export const brand = {
  name: person.name,
  role: person.role,
  stack: person.stack,
  logo: "/favicon.png", // same logo the Navbar and Footer render
  site: siteUrl,
  siteLabel: siteUrl.replace(/^https?:\/\//, ""),
  email: person.email,
  phone: person.phone,
  phoneDisplay,
  location: person.location,

  /**
   * Mirrors the `@theme inline` tokens in src/app/globals.css.
   * `ink`/`body`/`line`/`tint` are the paper-side neutrals used for print
   * legibility — the site's dark surface stays as the header/footer band.
   */
  colors: {
    dark: "#0F172A", // --color-dark
    card: "#111C2E", // --color-card
    primary: "#38BDF8", // --color-primary
    accent: "#A78BFA", // --color-accent
    surface: "#E2E8F0", // --color-surface
    ink: "#0F172A",
    body: "#475569",
    muted: "#64748B",
    line: "#E2E8F0",
    tint: "#F8FAFC",
    paper: "#FFFFFF",
    success: "#10B981",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                  CURRENCY                                   */
/* -------------------------------------------------------------------------- */

export const currency = { code: "PKR", locale: "en-US" } as const;

/** 25000 → "PKR 25,000" */
export function formatMoney(amount: number): string {
  return `${currency.code} ${amount.toLocaleString(currency.locale)}`;
}

/* -------------------------------------------------------------------------- */
/*                               DOCUMENT META                                 */
/* -------------------------------------------------------------------------- */

export const quotationMeta = {
  eyebrow: "Quotation",
  title: "Website Development & Pricing Proposal",
  intro:
    "Thank you for your interest. Below is a complete breakdown of the website development scope, backend functionality, and pricing — along with bundled packages that offer the best overall value.",
  reference: "QT-2026-001",
  issuedOn: "12 August 2026",
  validForDays: 15,
  preparedFor: "Prospective Client",
  preparedForNote: "Website Development Project",
} as const;

/* -------------------------------------------------------------------------- */
/*                              ITEMISED PRICING                               */
/* -------------------------------------------------------------------------- */

export type LineItem = {
  name: string;
  description: string;
  price: number;
  /** Coverage / validity shown in the Term column, e.g. "Lifetime", "2 Years". */
  term: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  caption: string;
  items: LineItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "frontend",
    title: "Frontend Website",
    caption: "Design & development",
    items: [
      {
        name: "Static website with frontend development",
        description: "Fully responsive, production-ready pages built in React / Next.js.",
        price: 5000,
        term: "One-time",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    caption: "Optional add-on",
    items: [
      {
        name: "SEO setup, if required",
        description: "On-page SEO, meta tags, sitemap, structured data and search-console setup.",
        price: 12000,
        term: "One-time",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Functionality & APIs",
    caption: "Server-side features",
    items: [
      {
        name: "Email Server",
        description: "Contact / enquiry emails delivered reliably from your own domain.",
        price: 3150,
        term: "Lifetime",
      },
      {
        name: "Review API",
        description: "Secure API for collecting and serving customer reviews.",
        price: 1600,
        term: "Lifetime",
      },
      {
        name: "Review Management Dashboard",
        description: "Admin panel to approve, edit, publish or remove reviews.",
        price: 2000,
        term: "Lifetime",
      },
      {
        name: "Photo Upload + Database",
        description: "Image upload with database storage and media management.",
        price: 3600,
        term: "2 Years",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                              COMPLETE PACKAGES                              */
/* -------------------------------------------------------------------------- */

export type QuotationPackage = {
  id: string;
  name: string;
  summary: string;
  price: number;
  /** ServiceGroup ids bundled into this package — drives the "includes" list. */
  includes: string[];
  recommended?: boolean;
  badge?: string;
};

export const packages: QuotationPackage[] = [
  {
    id: "complete",
    name: "Frontend + SEO + Backend",
    summary: "Everything included — the complete website with search visibility and full backend functionality.",
    price: 25000,
    includes: ["frontend", "seo", "backend"],
    recommended: true,
    badge: "Recommended",
  },
  {
    id: "frontend-seo",
    name: "Frontend + SEO",
    summary: "A polished website built to be found on Google, without backend features.",
    price: 15000,
    includes: ["frontend", "seo"],
  },
  {
    id: "frontend-backend",
    name: "Frontend + Backend",
    summary: "A fully functional website with email, reviews and uploads, SEO added later.",
    price: 14000,
    includes: ["frontend", "backend"],
  },
];

/* -------------------------------------------------------------------------- */
/*                              INCLUDED BENEFITS                              */
/* -------------------------------------------------------------------------- */

export type Benefit = {
  id: string;
  title: string;
  /** Duration shown as the headline figure, e.g. "2 Months". */
  duration: string;
  tag: string;
  description: string;
  icon: "support" | "server";
};

export const includedBenefits: Benefit[] = [
  {
    id: "management",
    title: "Management & Support",
    duration: "2 Months",
    tag: "FREE",
    description: "Basic maintenance, content updates and support included after launch — at no extra cost.",
    icon: "support",
  },
  {
    id: "hosting",
    title: "Server / Hosting",
    duration: "3 Years",
    tag: "FREE",
    description: "Hosting and server costs covered for three full years from the launch date.",
    icon: "server",
  },
];

/* -------------------------------------------------------------------------- */
/*                              NOTES & TERMS                                  */
/* -------------------------------------------------------------------------- */

export const notes: string[] = [
  "Basic maintenance and support are included during the 2-month free management period.",
  "Server / hosting charges after the free 3-year period will be charged separately.",
  "Lifetime backend features carry no recurring fee; Photo Upload + Database is covered for 2 years.",
  "Prices are quoted in Pakistani Rupees (PKR) and exclude any third-party domain or paid tool costs.",
  `This quotation is valid for ${quotationMeta.validForDays} days from the issue date shown above.`,
];

/* -------------------------------------------------------------------------- */
/*                             ACCEPTANCE / SIGN-OFF                           */
/* -------------------------------------------------------------------------- */

export const acceptance = {
  title: "Acceptance",
  eyebrow: "Sign & Confirm",
  note: "Sign and return this page to confirm the selected package and begin the project.",
  /** Blank ruled fields printed at the bottom of the document. */
  fields: ["Selected Package", "Client Name & Signature", "Date"],
} as const;

/* -------------------------------------------------------------------------- */
/*                                  DERIVED                                    */
/* -------------------------------------------------------------------------- */

export const groupSubtotal = (group: ServiceGroup): number =>
  group.items.reduce((sum, item) => sum + item.price, 0);

export const itemisedTotal: number = serviceGroups.reduce((sum, g) => sum + groupSubtotal(g), 0);

export const groupById = (id: string): ServiceGroup | undefined =>
  serviceGroups.find((g) => g.id === id);

/** Sum of the individual items a package bundles, before the package discount. */
export const packageValue = (pkg: QuotationPackage): number =>
  pkg.includes.reduce((sum, id) => {
    const group = groupById(id);
    return group ? sum + groupSubtotal(group) : sum;
  }, 0);

/** How much the client saves versus buying the same items individually. */
export const packageSaving = (pkg: QuotationPackage): number =>
  Math.max(0, packageValue(pkg) - pkg.price);
