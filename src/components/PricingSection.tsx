"use client";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useRegion, CurrencyToggle } from "@/components/region";
import { pricingTiers, pricingFeatureRows, pricingNotePK, pricingNoteINTL, whatsappLink } from "@/lib/data";

export default function PricingSection() {
  const { intl, setIntl } = useRegion();
  const priceOf = (t: (typeof pricingTiers)[number]) => (intl ? t.usd : t.pkr);

  return (
    <section id="pricing" className="py-16" aria-labelledby="pricing-heading">
      <div className="max-w-6xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-2">Pricing</p>
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-surface mb-4">
              Simple, Transparent Packages
            </h2>
            <p className="text-surface/60 max-w-xl mx-auto mb-6">
              Pick a starting point — every project is tailored after a quick chat about your goals.
            </p>
            <CurrencyToggle intl={intl} setIntl={setIntl} />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.08}>
              <div
                className={`relative bg-card border rounded-2xl p-7 h-full flex flex-col transition-all duration-300 ${
                  tier.popular ? "border-primary/50 shadow-xl shadow-primary/10" : "border-white/5 hover:border-primary/20"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-surface font-semibold text-lg mb-1">{tier.name}</h3>
                <p className="text-primary text-xs font-mono mb-4">{tier.tagline}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-surface">{priceOf(tier)}</span>
                  {!tier.custom && <span className="text-surface/45 text-sm ml-2">starting</span>}
                </div>
                <p className="text-surface/55 text-sm leading-relaxed mb-5">{tier.description}</p>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-surface/70 text-sm">
                      <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all w-full ${
                    tier.popular
                      ? "bg-primary text-dark hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                      : "border border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison table */}
        <Reveal delay={0.15}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="sr-only">Feature comparison across website packages</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="text-left text-surface/50 font-medium py-4 px-4">Features</th>
                  {pricingTiers.map((tier) => (
                    <th key={tier.id} scope="col" className="text-center text-surface font-semibold py-4 px-4">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingFeatureRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/5">
                    <th scope="row" className="text-left text-surface/70 font-normal py-3.5 px-4">{row.label}</th>
                    {row.values.map((val, idx) => (
                      <td key={idx} className="text-center py-3.5 px-4">
                        {val === true ? (
                          <svg className="w-5 h-5 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Included">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : val === false ? (
                          <span className="text-surface/25" aria-label="Not included">—</span>
                        ) : (
                          <span className="text-surface/70">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-surface/45 text-xs max-w-2xl">{intl ? pricingNoteINTL : pricingNotePK}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1ebe5b] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 015.83 2.42 8.2 8.2 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
              Discuss Your Project on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
