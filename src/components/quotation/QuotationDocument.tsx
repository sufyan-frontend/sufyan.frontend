import Image from "next/image";
import {
  acceptance,
  brand,
  formatMoney,
  groupById,
  groupSubtotal,
  includedBenefits,
  itemisedTotal,
  notes,
  packages,
  packageSaving,
  quotationMeta,
  serviceGroups,
  type Benefit,
} from "@/lib/quotation-data";

/* --------------------------------- icons --------------------------------- */
type IconProps = { className?: string; style?: React.CSSProperties };

const Svg = ({ children, className, style }: IconProps & { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    {children}
  </svg>
);
const CheckIcon = (p: IconProps) => <Svg {...p}><path d="M20 6 9 17l-5-5" /></Svg>;
const SupportIcon = (p: IconProps) => (
  <Svg {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></Svg>
);
const ServerIcon = (p: IconProps) => (
  <Svg {...p}><rect x="2" y="3" width="20" height="7" rx="2" /><rect x="2" y="14" width="20" height="7" rx="2" /><path d="M6 6.5h.01M6 17.5h.01" /></Svg>
);
const MailIcon = (p: IconProps) => <Svg {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></Svg>;
const PhoneIcon = (p: IconProps) => (
  <Svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></Svg>
);
const GlobeIcon = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></Svg>
);
const PinIcon = (p: IconProps) => <Svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Svg>;
const StarIcon = (p: IconProps) => (
  <Svg {...p}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" /></Svg>
);
const InfoIcon = (p: IconProps) => <Svg {...p}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></Svg>;

const benefitIcons: Record<Benefit["icon"], (p: IconProps) => React.ReactElement> = {
  support: SupportIcon,
  server: ServerIcon,
};

/* ------------------------------ print rules ------------------------------ */
/**
 * A4 is 210 × 297 mm. The sheets are authored at exactly that size so printing
 * is 1:1 — no scaling, no reflow, no surprise page breaks. Each `.qt-page`
 * forces its own physical page; the last one does not, which is what keeps
 * Chrome from emitting a trailing blank page.
 */
const printCss = `
  .qt-page {
    width: 210mm;
    min-height: 297mm;
    background: ${brand.colors.paper};
    color: ${brand.colors.ink};
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .qt-num { font-variant-numeric: tabular-nums; }

  /* On screen the sheet keeps its physical A4 width, so narrow viewports scale
     it down instead of reflowing — the client always previews the exact page
     they will receive. \`zoom\` (not \`transform\`) is used so the surrounding
     document height shrinks with it and no dead space is left below.
     Older engines without \`zoom\` fall back to horizontal scrolling. */
  @media screen {
    /* flex centring rather than margin:auto — auto margins are measured in the
       pre-zoom coordinate space and push the sheet off-centre once it scales */
    .qt-backdrop { display: flex; flex-direction: column; align-items: center; overflow-x: auto; }
  }
  @media screen and (max-width: 900px) { .qt-page { zoom: 0.92; } }
  @media screen and (max-width: 820px) { .qt-page { zoom: 0.82; } }
  @media screen and (max-width: 740px) { .qt-page { zoom: 0.72; } }
  @media screen and (max-width: 640px) { .qt-page { zoom: 0.62; } }
  @media screen and (max-width: 540px) { .qt-page { zoom: 0.52; } }
  @media screen and (max-width: 440px) { .qt-page { zoom: 0.42; } }
  @media screen and (max-width: 360px) { .qt-page { zoom: 0.36; } }

  @media print {
    @page { size: A4 portrait; margin: 0; }
    html, body {
      background: #ffffff !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    body * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    .qt-screen-only { display: none !important; }
    .qt-backdrop { background: #ffffff !important; padding: 0 !important; display: block !important; overflow: visible !important; }
    .qt-page {
      zoom: 1 !important;
      width: 210mm !important;
      height: 296.8mm !important;
      min-height: 0 !important;
      margin: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      break-inside: avoid;
      page-break-inside: avoid;
      break-after: page;
      page-break-after: always;
    }
    .qt-page:last-of-type { break-after: auto; page-break-after: auto; }
    .qt-page a { text-decoration: none !important; }
  }
`;

/* ------------------------------ sub-components ---------------------------- */

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-[4mm] flex items-end gap-3">
      <div>
        <p className="mb-1 font-mono text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: brand.colors.primary }}>
          {eyebrow}
        </p>
        <h2 className="font-display text-[17px] font-extrabold leading-none" style={{ color: brand.colors.ink }}>
          {title}
        </h2>
      </div>
      <span
        className="mb-[3px] h-[3px] flex-1 rounded-full"
        style={{ background: `linear-gradient(90deg, ${brand.colors.primary}66, transparent)` }}
        aria-hidden="true"
      />
    </div>
  );
}

/** Dark brand band used at the top of both sheets. */
function BrandBar({ compact = false }: { compact?: boolean }) {
  return (
    <header
      className={`relative shrink-0 overflow-hidden px-[14mm] ${compact ? "py-[6mm]" : "py-[7.5mm]"}`}
      style={{ background: `linear-gradient(135deg, ${brand.colors.dark} 0%, ${brand.colors.card} 55%, #0d1728 100%)` }}
    >
      {/* brand dot-grid, mirrors the site's .dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${brand.colors.primary}26 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full"
        style={{ background: `radial-gradient(circle, ${brand.colors.primary}2e 0%, transparent 70%)` }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-6">
        <div className="flex items-center gap-3.5">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={128}
            height={128}
            priority
            className={compact ? "h-[9mm] w-[9mm] object-contain" : "h-[13mm] w-[13mm] object-contain"}
          />
          <div className="leading-none">
            <p
              className={`font-display font-extrabold tracking-tight ${compact ? "text-[15px]" : "text-[21px]"}`}
              style={{ color: "#FFFFFF" }}
            >
              {brand.name}
            </p>
            <p className={`mt-1.5 font-mono ${compact ? "text-[9px]" : "text-[10.5px]"} tracking-[0.14em]`} style={{ color: brand.colors.primary }}>
              {brand.role} · {brand.stack}
            </p>
          </div>
        </div>

        {compact ? (
          <p className="pt-1 font-mono text-[9px] tracking-[0.16em]" style={{ color: `${brand.colors.surface}99` }}>
            {quotationMeta.reference}
          </p>
        ) : (
          <div className="text-right">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: brand.colors.primary }}>
              {quotationMeta.eyebrow}
            </p>
            <dl className="mt-2.5 space-y-1 text-[10.5px]">
              {[
                { k: "Ref", v: quotationMeta.reference },
                { k: "Date", v: quotationMeta.issuedOn },
                { k: "Valid", v: `${quotationMeta.validForDays} days` },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-end gap-2">
                  <dt style={{ color: `${brand.colors.surface}70` }}>{row.k}</dt>
                  <dd className="qt-num min-w-[26mm] text-right font-semibold" style={{ color: "#FFFFFF" }}>
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>

      {/* accent hairline — same treatment as the site footer */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${brand.colors.primary}, transparent)` }}
        aria-hidden="true"
      />
    </header>
  );
}

function PageFooter({ page, total }: { page: number; total: number }) {
  return (
    <footer
      className="mt-auto shrink-0 px-[14mm] py-[4.5mm]"
      style={{ background: brand.colors.dark }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src={brand.logo} alt="" width={64} height={64} className="h-[5mm] w-[5mm] object-contain" />
          <span className="font-display text-[10.5px] font-bold" style={{ color: "#FFFFFF" }}>
            {brand.name}
          </span>
          <span style={{ color: `${brand.colors.surface}30` }}>|</span>
          <span className="font-mono text-[9px]" style={{ color: brand.colors.primary }}>
            {brand.siteLabel}
          </span>
        </div>
        <div className="flex items-center gap-4 text-[9px]" style={{ color: `${brand.colors.surface}70` }}>
          <span className="qt-num">{brand.phoneDisplay}</span>
          <span className="qt-num">
            Page {page} of {total}
          </span>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------- document -------------------------------- */

export default function QuotationDocument() {
  const totalPages = 2;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printCss }} />

      {/* ============================== PAGE 1 ============================== */}
      <article className="qt-page rounded-xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.45)]">
        <BrandBar />

        <div className="flex-1 px-[14mm] pb-[5mm] pt-[6mm]">
          {/* ---------------------------- title ---------------------------- */}
          <h1 className="font-display text-[26px] font-extrabold leading-[1.12] tracking-tight" style={{ color: brand.colors.ink }}>
            {quotationMeta.title}
          </h1>
          <p className="mt-2 max-w-[155mm] text-[11px] leading-[1.6]" style={{ color: brand.colors.body }}>
            {quotationMeta.intro}
          </p>

          {/* --------------------------- meta strip -------------------------- */}
          <div className="mt-[5mm] grid grid-cols-3 gap-[4mm]">
            {[
              { label: "Prepared For", value: quotationMeta.preparedFor, sub: quotationMeta.preparedForNote },
              { label: "Prepared By", value: brand.name, sub: `${brand.role} · ${brand.location}` },
              { label: "Quotation Valid", value: `${quotationMeta.validForDays} Days`, sub: `From ${quotationMeta.issuedOn}` },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-lg border px-3.5 py-2.5"
                style={{ borderColor: brand.colors.line, background: brand.colors.tint }}
              >
                <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: brand.colors.muted }}>
                  {m.label}
                </p>
                <p className="mt-1.5 text-[12px] font-bold leading-tight" style={{ color: brand.colors.ink }}>
                  {m.value}
                </p>
                <p className="mt-0.5 text-[9.5px] leading-tight" style={{ color: brand.colors.muted }}>
                  {m.sub}
                </p>
              </div>
            ))}
          </div>

          {/* ---------------------- itemised price table --------------------- */}
          <div className="mt-[6mm]">
            <SectionHeading eyebrow="Scope & Rates" title="Website Development" />

            <div className="overflow-hidden rounded-xl border" style={{ borderColor: brand.colors.line }}>
              {/* table head */}
              <div
                className="grid grid-cols-[1fr_24mm_28mm] gap-2 px-4 py-2.5"
                style={{ background: brand.colors.dark }}
              >
                {["Item", "Term", "Price"].map((h, i) => (
                  <span
                    key={h}
                    className={`font-mono text-[8.5px] font-semibold uppercase tracking-[0.18em] ${i === 1 ? "text-center" : i === 2 ? "text-right" : ""}`}
                    style={{ color: i === 2 ? brand.colors.primary : `${brand.colors.surface}b0` }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {serviceGroups.map((group) => (
                <div key={group.id}>
                  {/* group label */}
                  <div
                    className="flex items-center justify-between gap-3 border-t px-4 py-1.5"
                    style={{ borderColor: brand.colors.line, background: brand.colors.tint }}
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-display text-[12px] font-bold" style={{ color: brand.colors.ink }}>
                        {group.title}
                      </span>
                      <span className="text-[9px]" style={{ color: brand.colors.muted }}>
                        {group.caption}
                      </span>
                    </div>
                    {/* subtotal only adds information when the group has several items */}
                    {group.items.length > 1 && (
                      <span className="qt-num text-[10px] font-semibold" style={{ color: brand.colors.muted }}>
                        Subtotal {formatMoney(groupSubtotal(group))}
                      </span>
                    )}
                  </div>

                  {/* items */}
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-[1fr_24mm_28mm] items-center gap-2 border-t px-4 py-2"
                      style={{ borderColor: `${brand.colors.line}99` }}
                    >
                      <div className="min-w-0 pr-2">
                        <p className="text-[11px] font-semibold leading-snug" style={{ color: brand.colors.ink }}>
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-[9.5px] leading-snug" style={{ color: brand.colors.muted }}>
                          {item.description}
                        </p>
                      </div>
                      <div className="text-center">
                        <span
                          className="inline-block rounded-full px-2 py-[3px] text-[9px] font-semibold"
                          style={{ background: `${brand.colors.primary}1f`, color: "#0369a1" }}
                        >
                          {item.term}
                        </span>
                      </div>
                      <p className="qt-num text-right text-[12px] font-bold" style={{ color: brand.colors.ink }}>
                        {formatMoney(item.price)}
                      </p>
                    </div>
                  ))}
                </div>
              ))}

              {/* total */}
              <div
                className="flex items-center justify-between gap-4 border-t px-4 py-2.5"
                style={{ borderColor: brand.colors.line, background: `${brand.colors.primary}12` }}
              >
                <div>
                  <p className="text-[11px] font-bold" style={{ color: brand.colors.ink }}>
                    Total if purchased individually
                  </p>
                  <p className="text-[9.5px]" style={{ color: brand.colors.muted }}>
                    Choose a bundled package on the next page for a lower total.
                  </p>
                </div>
                <p className="qt-num shrink-0 text-[17px] font-extrabold" style={{ color: brand.colors.ink }}>
                  {formatMoney(itemisedTotal)}
                </p>
              </div>
            </div>
          </div>

          {/* -------------------------- benefits band ------------------------- */}
          <div className="mt-[6mm]">
            <SectionHeading eyebrow="Included Free" title="Included With Every Package" />

            <div className="grid grid-cols-2 gap-[4mm]">
              {includedBenefits.map((benefit) => {
                const Icon = benefitIcons[benefit.icon];
                return (
                  <div
                    key={benefit.id}
                    className="relative overflow-hidden rounded-xl px-4 py-3.5"
                    style={{
                      background: `linear-gradient(135deg, ${brand.colors.dark} 0%, ${brand.colors.card} 100%)`,
                      boxShadow: `inset 0 0 0 1px ${brand.colors.primary}40`,
                    }}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full"
                      style={{ background: `radial-gradient(circle, ${brand.colors.primary}30 0%, transparent 70%)` }}
                      aria-hidden="true"
                    />
                    <div className="relative flex items-start gap-3">
                      <span
                        className="flex h-[9mm] w-[9mm] shrink-0 items-center justify-center rounded-lg"
                        style={{ background: `${brand.colors.primary}1f`, color: brand.colors.primary, boxShadow: `inset 0 0 0 1px ${brand.colors.primary}45` }}
                      >
                        <Icon className="h-[4.5mm] w-[4.5mm]" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-display text-[13px] font-bold leading-none" style={{ color: "#FFFFFF" }}>
                            {benefit.duration}
                          </p>
                          <span
                            className="rounded-full px-2 py-[2px] font-mono text-[8.5px] font-bold tracking-[0.12em]"
                            style={{ background: brand.colors.primary, color: brand.colors.dark }}
                          >
                            {benefit.tag}
                          </span>
                        </div>
                        <p className="mt-1 text-[10.5px] font-semibold" style={{ color: brand.colors.surface }}>
                          {benefit.title}
                        </p>
                        <p className="mt-1 text-[9.5px] leading-snug" style={{ color: `${brand.colors.surface}99` }}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <PageFooter page={1} total={totalPages} />
      </article>

      {/* ============================== PAGE 2 ============================== */}
      <article className="qt-page mt-8 rounded-xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.45)] print:mt-0">
        <BrandBar compact />

        <div className="flex-1 px-[14mm] pb-[6mm] pt-[7mm]">
          {/* --------------------------- packages ---------------------------- */}
          <SectionHeading eyebrow="Best Value" title="Complete Packages" />
          <p className="mt-[-2mm] mb-[4mm] max-w-[160mm] text-[10.5px] leading-relaxed" style={{ color: brand.colors.body }}>
            Bundled packages combine the services above at a reduced total. Every package includes the free management
            and hosting benefits listed on the previous page.
          </p>

          <div className="grid grid-cols-3 items-stretch gap-[4mm]">
            {packages.map((pkg) => {
              const saving = packageSaving(pkg);
              const recommended = Boolean(pkg.recommended);
              return (
                <div
                  key={pkg.id}
                  className="relative flex flex-col overflow-hidden rounded-xl px-4 pb-3.5 pt-[9mm]"
                  style={
                    recommended
                      ? {
                          background: `linear-gradient(160deg, ${brand.colors.dark} 0%, ${brand.colors.card} 100%)`,
                          boxShadow: `inset 0 0 0 1.5px ${brand.colors.primary}`,
                        }
                      : { background: brand.colors.paper, boxShadow: `inset 0 0 0 1px ${brand.colors.line}` }
                  }
                >
                  {/* badge strip */}
                  <div
                    className="absolute inset-x-0 top-0 flex h-[6mm] items-center justify-center"
                    style={{
                      background: recommended ? brand.colors.primary : brand.colors.tint,
                    }}
                  >
                    <span
                      className="flex items-center gap-1 font-mono text-[8px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: recommended ? brand.colors.dark : brand.colors.muted }}
                    >
                      {recommended && <StarIcon className="h-[2.6mm] w-[2.6mm]" />}
                      {pkg.badge ?? "Package"}
                    </span>
                  </div>

                  <h3
                    className="font-display text-[12.5px] font-bold leading-snug"
                    style={{ color: recommended ? "#FFFFFF" : brand.colors.ink }}
                  >
                    {pkg.name}
                  </h3>

                  <p
                    className="qt-num mt-2.5 text-[22px] font-extrabold leading-none tracking-tight"
                    style={{ color: recommended ? brand.colors.primary : brand.colors.ink }}
                  >
                    {formatMoney(pkg.price)}
                  </p>

                  {saving > 0 && (
                    <p className="mt-2 text-[9px] font-semibold" style={{ color: recommended ? "#34D399" : brand.colors.success }}>
                      Saves {formatMoney(saving)} vs individual
                    </p>
                  )}

                  <p
                    className="mt-3 text-[9.5px] leading-snug"
                    style={{ color: recommended ? `${brand.colors.surface}b0` : brand.colors.muted }}
                  >
                    {pkg.summary}
                  </p>

                  <div
                    className="my-3 h-px w-full"
                    style={{ background: recommended ? `${brand.colors.surface}26` : brand.colors.line }}
                    aria-hidden="true"
                  />

                  <ul className="flex-1 space-y-1.5">
                    {pkg.includes.map((id) => {
                      const group = groupById(id);
                      if (!group) return null;
                      return (
                        <li key={id} className="flex items-start gap-1.5">
                          <CheckIcon
                            className="mt-[2px] h-[3mm] w-[3mm] shrink-0"
                            style={{ color: recommended ? brand.colors.primary : brand.colors.primary }}
                          />
                          <span
                            className="text-[9.5px] font-medium leading-snug"
                            style={{ color: recommended ? brand.colors.surface : brand.colors.body }}
                          >
                            {group.title}
                            <span className="block text-[8.5px] font-normal" style={{ color: recommended ? `${brand.colors.surface}80` : brand.colors.muted }}>
                              {group.items.length} {group.items.length === 1 ? "item" : "items"} · {formatMoney(groupSubtotal(group))} value
                            </span>
                          </span>
                        </li>
                      );
                    })}
                    {includedBenefits.map((b) => (
                      <li key={b.id} className="flex items-start gap-1.5">
                        <CheckIcon className="mt-[2px] h-[3mm] w-[3mm] shrink-0" style={{ color: brand.colors.success }} />
                        <span
                          className="text-[9.5px] font-medium leading-snug"
                          style={{ color: recommended ? brand.colors.surface : brand.colors.body }}
                        >
                          {b.duration} {b.title} —{" "}
                          <span style={{ color: brand.colors.success }} className="font-bold">
                            {b.tag}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* ------------------------- benefits recap ------------------------ */}
          <div
            className="mt-[6mm] flex items-center gap-[5mm] rounded-xl px-4 py-3"
            style={{ background: `${brand.colors.primary}12`, boxShadow: `inset 0 0 0 1px ${brand.colors.primary}3d` }}
          >
            {includedBenefits.map((b, i) => {
              const Icon = benefitIcons[b.icon];
              return (
                <div key={b.id} className="flex flex-1 items-center gap-2.5">
                  {i > 0 && <span className="mr-[2mm] h-[9mm] w-px" style={{ background: `${brand.colors.primary}45` }} aria-hidden="true" />}
                  <span
                    className="flex h-[8mm] w-[8mm] shrink-0 items-center justify-center rounded-lg"
                    style={{ background: brand.colors.dark, color: brand.colors.primary }}
                  >
                    <Icon className="h-[4mm] w-[4mm]" />
                  </span>
                  <p className="text-[10.5px] leading-snug" style={{ color: brand.colors.ink }}>
                    <span className="font-bold">{b.duration}</span> {b.title}{" "}
                    <span className="font-mono text-[9px] font-bold tracking-wider" style={{ color: brand.colors.success }}>
                      {b.tag}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* ---------------------------- notes ------------------------------ */}
          <div className="mt-[6mm]">
            <SectionHeading eyebrow="Please Note" title="Terms & Conditions" />
            <ul className="grid grid-cols-1 gap-1.5">
              {notes.map((note) => (
                <li key={note} className="flex items-start gap-2">
                  <InfoIcon className="mt-[1.5px] h-[3.2mm] w-[3.2mm] shrink-0" style={{ color: brand.colors.primary }} />
                  <span className="text-[10px] leading-snug" style={{ color: brand.colors.body }}>
                    {note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------------- acceptance ---------------------------- */}
          <div className="mt-[6mm]">
            <SectionHeading eyebrow={acceptance.eyebrow} title={acceptance.title} />
            <p className="mt-[-2mm] mb-[3mm] text-[10px]" style={{ color: brand.colors.muted }}>
              {acceptance.note}
            </p>
            <div className="grid grid-cols-3 gap-[6mm]">
              {acceptance.fields.map((field) => (
                <div key={field}>
                  <div className="h-[7mm] border-b" style={{ borderColor: brand.colors.muted }} aria-hidden="true" />
                  <p className="mt-1.5 font-mono text-[8.5px] uppercase tracking-[0.14em]" style={{ color: brand.colors.muted }}>
                    {field}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --------------------------- contact ----------------------------- */}
          <div
            className="mt-[6mm] overflow-hidden rounded-xl px-5 py-3.5"
            style={{ background: `linear-gradient(135deg, ${brand.colors.dark} 0%, ${brand.colors.card} 100%)` }}
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="font-display text-[13px] font-bold" style={{ color: "#FFFFFF" }}>
                  Ready to get started?
                </p>
                <p className="mt-1 text-[10px] leading-snug" style={{ color: `${brand.colors.surface}99` }}>
                  Reply to this quotation or reach out directly — happy to walk through any part of it.
                </p>
              </div>
              <ul className="shrink-0 space-y-1.5 text-[9.5px]">
                {[
                  { icon: <MailIcon className="h-[3.2mm] w-[3.2mm]" />, text: brand.email },
                  { icon: <PhoneIcon className="h-[3.2mm] w-[3.2mm]" />, text: brand.phoneDisplay },
                  { icon: <GlobeIcon className="h-[3.2mm] w-[3.2mm]" />, text: brand.siteLabel },
                  { icon: <PinIcon className="h-[3.2mm] w-[3.2mm]" />, text: brand.location },
                ].map((c, i) => (
                  <li key={i} className="flex items-center gap-2" style={{ color: brand.colors.surface }}>
                    <span style={{ color: brand.colors.primary }}>{c.icon}</span>
                    <span className="qt-num">{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <PageFooter page={2} total={totalPages} />
      </article>
    </>
  );
}
