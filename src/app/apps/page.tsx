import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { apps } from "@/lib/apps";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: "Android Apps by Muhammad Sufyan — Free APK Downloads" },
  description:
    "Free Android apps built by Muhammad Sufyan — WiFi Drop file sharing, ADB Control Center, Laptop Control and an AI phone agent. Download the APK and follow the full setup guide for each.",
  keywords: [
    "Muhammad Sufyan apps", "sufyan android apps", "free apk download",
    "wifi file sharing app", "android control app", "laptop control from phone",
    "scrcpy android app", "phone to phone mirror app", "sufyanfrontend apps",
    "android developer Pakistan apps", "free android tools",
  ],
  alternates: { canonical: `${siteUrl}/apps` },
  openGraph: {
    title: "Android Apps by Muhammad Sufyan",
    description:
      "Free Android apps — file sharing, phone control, laptop control and an AI phone agent. Download and full guides.",
    url: `${siteUrl}/apps`,
    images: [{ url: `${siteUrl}/profile.png`, width: 1200, height: 630, alt: "Muhammad Sufyan — Apps" }],
  },
};

const appsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Android apps by Muhammad Sufyan",
  url: `${siteUrl}/apps`,
  numberOfItems: apps.length,
  itemListElement: apps.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: a.name,
      operatingSystem: "Android",
      applicationCategory: "UtilitiesApplication",
      description: a.summary,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: `${siteUrl}/apps/${a.slug}`,
    },
  })),
};

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-dark text-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark" />
        <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-14 sm:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Android Apps · Free APKs
            </span>
          </Reveal>
          <Reveal>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Apps I&apos;ve <span className="gradient-text">built</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-surface/70 sm:text-lg">
              A set of Android tools — file sharing, phone control, laptop control and an
              AI phone agent. Each one is free, works on your own Wi-Fi, and comes with a
              full step-by-step guide. Download the APK and go.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {apps.map((a) => (
            <Reveal key={a.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card p-6 transition-colors duration-300 hover:border-primary/40">
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${a.gradient} opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${a.gradient} text-2xl shadow-lg`}
                  >
                    {a.emoji}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold text-surface">{a.name}</h2>
                    <p className="mt-1 text-sm leading-snug text-surface/60">{a.tagline}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-surface/70">{a.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>{a.size}</Badge>
                  <Badge>{a.minAndroid.split("(")[0].trim()}</Badge>
                  {a.free && <Badge tone="green">Free</Badge>}
                  {a.offline && <Badge tone="violet">Offline</Badge>}
                  {a.needsPc && <Badge tone="amber">Needs PC</Badge>}
                </div>

                <div className="mt-6 flex flex-1 items-end gap-3">
                  <a
                    href={a.apk}
                    download
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-dark transition-transform duration-200 hover:scale-[1.03]"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                    </svg>
                    Download APK
                  </a>
                  <Link
                    href={`/apps/${a.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-surface/80 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    How to use
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-surface/50">
            These are self-signed debug builds for personal use. On first install Android may
            warn about an unknown source — allow it to continue. Every app is free and runs only
            on your local network.
          </p>
        </Reveal>
      </section>
    </main>
  );
}

function Badge({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "slate" | "green" | "violet" | "amber";
}) {
  const tones: Record<string, string> = {
    slate: "border-white/10 bg-white/5 text-surface/70",
    green: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    violet: "border-accent/30 bg-accent/10 text-accent",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  };
  return (
    <span className={`rounded-md border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
