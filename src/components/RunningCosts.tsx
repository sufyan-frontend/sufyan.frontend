"use client";
import Reveal from "@/components/Reveal";
import { useRegion, CurrencyToggle } from "@/components/region";
import { runningCosts, runningCostsNote } from "@/lib/data";

const costIcons: Record<string, React.ReactNode> = {
  cloud: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M3.6 9h16.8 M3.6 15h16.8 M12 3a15 15 0 010 18 15 15 0 010-18z" />
    </svg>
  ),
  mail: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  server: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5m-14 0h14m-14 0a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 00-2-2M8 16h.01M12 16h.01" />
    </svg>
  ),
};

export default function RunningCosts() {
  const { intl, setIntl } = useRegion();

  return (
    <div className="mb-20">
      <Reveal>
        <div className="text-center mb-8">
          <p className="text-primary font-mono text-sm mb-2">Running Costs</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-surface mb-3">Hosting, Domain &amp; Email Costs</h2>
          <p className="text-surface/60 max-w-2xl mx-auto text-sm leading-relaxed mb-5">
            Beyond the build, every website needs a few low-cost services to stay online. Here are realistic
            estimates so there are no surprises — shown in your currency.
          </p>
          <CurrencyToggle intl={intl} setIntl={setIntl} />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {runningCosts.map((item) => (
          <Reveal key={item.title}>
            <div className="bg-card border border-white/5 rounded-2xl p-5 hover:border-primary/20 transition-all h-full flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {costIcons[item.icon]}
              </div>
              <h3 className="text-surface font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-primary font-bold text-base mb-2">{intl ? item.usd : item.pkr}</p>
              <p className="text-surface/55 text-xs leading-relaxed">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="text-surface/40 text-xs text-center max-w-2xl mx-auto mt-6">{runningCostsNote}</p>
      </Reveal>
    </div>
  );
}
