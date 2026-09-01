import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { apps, getApp } from "@/lib/apps";
import { siteUrl } from "@/lib/data";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return { title: "App not found" };
  return {
    title: { absolute: `${app.name} — Download & Guide | Muhammad Sufyan` },
    description: app.summary,
    keywords: [app.name, `${app.name} download`, `${app.name} apk`, `${app.name} guide`, ...app.tech],
    alternates: { canonical: `${siteUrl}/apps/${app.slug}` },
    openGraph: {
      title: `${app.name} — ${app.tagline}`,
      description: app.summary,
      url: `${siteUrl}/apps/${app.slug}`,
      images: [{ url: `${siteUrl}/profile.png`, width: 1200, height: 630, alt: app.name }],
    },
  };
}

export default async function AppGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    operatingSystem: "Android",
    applicationCategory: "UtilitiesApplication",
    description: app.summary,
    softwareVersion: app.version,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: `${siteUrl}/apps/${app.slug}`,
  };

  return (
    <main className="min-h-screen bg-dark text-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark" />
        <div className="relative mx-auto max-w-4xl px-5 pt-28 pb-12 sm:pt-32">
          <Reveal>
            <Link
              href="/apps"
              className="inline-flex items-center gap-1.5 text-sm text-surface/60 transition-colors hover:text-primary"
            >
              <span aria-hidden>←</span> All apps
            </Link>
          </Reveal>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${app.gradient} text-4xl shadow-xl`}
            >
              {app.emoji}
            </div>
            <div className="min-w-0">
              <Reveal>
                <h1 className="text-3xl font-bold sm:text-4xl">{app.name}</h1>
              </Reveal>
              <Reveal>
                <p className="mt-2 text-base text-surface/70">{app.tagline}</p>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={app.apk}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-dark transition-transform duration-200 hover:scale-[1.03] glow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                </svg>
                Download APK · {app.size}
              </a>
              <span className="text-xs text-surface/50">
                v{app.version} · {app.minAndroid}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-24">
        {/* About */}
        <Reveal>
          <p className="text-base leading-relaxed text-surface/80">{app.longDescription}</p>
        </Reveal>

        {app.needsPc && (
          <Reveal>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-400/25 bg-amber-400/5 p-4">
              <span className="mt-0.5 text-lg">💡</span>
              <p className="text-sm leading-relaxed text-amber-200/90">
                <span className="font-semibold">Also needs:</span> {app.needsPc}
              </p>
            </div>
          </Reveal>
        )}

        {/* Features */}
        <Section title="What it does">
          <ul className="grid gap-3 sm:grid-cols-2">
            {app.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-surface/80">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {/* Requirements */}
        <Section title="What you need">
          <ul className="space-y-2">
            {app.requirements.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-surface/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {r}
              </li>
            ))}
          </ul>
        </Section>

        {/* Install */}
        <Section title="Install">
          <ol className="space-y-2">
            {app.install.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm text-surface/80">
                <span className="font-mono text-surface/40">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </Section>

        {/* Guide */}
        <Section title="How to use">
          <ol className="space-y-4">
            {app.guide.map((g, i) => (
              <li key={i} className="relative rounded-xl border border-white/8 bg-card p-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${app.gradient} text-sm font-bold text-dark`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-surface">{g.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-surface/70">{g.detail}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Safety */}
        {app.safety && app.safety.length > 0 && (
          <Section title="Safety">
            <ul className="space-y-2">
              {app.safety.map((s, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-surface/75">
                  <span className="mt-0.5 text-emerald-400">🛡</span>
                  {s}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Tech */}
        <Section title="Built with">
          <div className="flex flex-wrap gap-2">
            {app.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-surface/70"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Bottom download */}
        <Reveal>
          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-white/8 bg-card p-8 text-center">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${app.gradient} text-2xl`}
            >
              {app.emoji}
            </div>
            <h2 className="text-xl font-semibold">Get {app.name}</h2>
            <p className="max-w-md text-sm text-surface/60">
              Free · {app.size} · {app.minAndroid}
            </p>
            <a
              href={app.apk}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-dark transition-transform duration-200 hover:scale-[1.03]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
              Download APK
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="mt-12">
        <h2 className="mb-5 text-lg font-semibold text-surface">
          <span className="gradient-text">{title}</span>
        </h2>
        {children}
      </section>
    </Reveal>
  );
}
