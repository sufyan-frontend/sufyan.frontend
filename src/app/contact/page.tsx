import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { person } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Muhammad Sufyan (sufyanjutt) — Hire Frontend Developer",
  description:
    "Contact Muhammad Sufyan (sufyanjutt / sufyanfrontend) — Frontend Developer in Lahore, Pakistan. Available for freelance React/Next.js projects, full-time roles, and collaborations.",
  keywords: [
    "contact Muhammad Sufyan", "hire sufyanjutt", "hire sufyanfrontend",
    "freelance frontend developer Pakistan", "hire React developer Lahore",
    "Muhammad Sufyan email", "frontend developer for hire",
    "hire Muhammad Sufyan", "Muhammad Sufyan contact", "sufyan developer contact",
    "hire React developer Pakistan", "hire Next.js developer Lahore", "Muhammad Sufyan phone",
    "hire frontend developer 2026", "freelance React developer Pakistan",
    "React Next.js freelancer Pakistan", "frontend developer hire Lahore",
    "web developer for hire Pakistan", "Muhammad Sufyan project inquiry",
    "sufyan jutt hire", "hire sufyan developer", "Muhammad Sufyan available for work",
    "front end developer Pakistan contact", "remote frontend developer Pakistan hire",
    "sufyantechsolutions", "frontend developer available Pakistan",
  ],
  alternates: { canonical: "https://sufyan-frontend.vercel.app/contact" },
  openGraph: {
    title: "Contact sufyanjutt — Hire Frontend Developer",
    description: "Hire Muhammad Sufyan for React & Next.js development. Freelance & full-time available. Based in Lahore, Pakistan.",
    url: "https://sufyan-frontend.vercel.app/contact",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 400, height: 400, alt: "Contact Muhammad Sufyan" }],
  },
};

const contactWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://sufyan-frontend.vercel.app/contact",
  url: "https://sufyan-frontend.vercel.app/contact",
  name: "Contact Muhammad Sufyan — Hire a Frontend Developer",
  description: "Hire Muhammad Sufyan (sufyanjutt / sufyanfrontend) for React.js and Next.js projects. Available for freelance work, full-time roles, and remote collaboration. Based in Lahore, Pakistan.",
  dateModified: "2026-06-09",
  isPartOf: { "@id": "https://sufyan-frontend.vercel.app" },
  about: { "@id": "https://sufyan-frontend.vercel.app/#person" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://sufyan-frontend.vercel.app/contact" },
    ],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sufyan-frontend.vercel.app/#person",
  name: "Muhammad Sufyan",
  alternateName: ["sufyanjutt", "sufyanfrontend"],
  jobTitle: "Frontend Developer",
  url: "https://sufyan-frontend.vercel.app",
  email: "sufyantechsolutions@gmail.com",
  telephone: "+923438640594",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "sufyantechsolutions@gmail.com",
    telephone: "+923438640594",
    availableLanguage: ["English", "Urdu"],
  },
};

const contactItems = [
  {
    label: "Email",
    value: person.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}&su=Project%20Inquiry`,
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: person.phone,
    href: `tel:${person.phone}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: person.location,
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/sufyan-frontend",
    href: person.github,
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Let&apos;s Talk</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-4">Get In Touch</h1>
            <p className="text-surface/60 max-w-xl mx-auto">
              I&apos;m open to new opportunities and interesting projects. Drop me a message and I&apos;ll get back to you soon.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-xl font-semibold text-surface mb-8">Contact Information</h2>
              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-surface/50 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="text-surface hover:text-primary transition-colors font-medium text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-surface font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-card border border-white/5 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  <span className="text-surface font-medium text-sm">Currently Available</span>
                </div>
                <p className="text-surface/55 text-sm">
                  Open to freelance projects, full-time roles, and collaborative work. Typical response time: within 24 hours.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ContactForm email={person.email} />
          </Reveal>
        </div>
      </div>
    </div>

    {/* Why Work With Me */}
    <section className="py-14 border-t border-white/5" aria-label="Why hire Muhammad Sufyan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-primary font-mono text-xs text-center uppercase tracking-widest mb-2">Why Muhammad Sufyan</p>
          <h2 className="text-2xl font-bold text-surface text-center mb-10">Why Hire sufyanjutt for Your Project?</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "1.5+ Years Production Experience", body: "Muhammad Sufyan has built and maintained real-world apps used by thousands of users — not just practice projects." },
            { title: "React & Next.js Specialist", body: "Deep expertise in React.js and Next.js App Router, Tailwind CSS, TypeScript, and REST API integration." },
            { title: "Education & AI Platform Experience", body: "Built complex platforms: Alif Laila, Ehya Education, Classmate Portal, and FieldX AI — all live in production." },
            { title: "Fast Turnaround", body: "Typical response within 24 hours. Efficient delivery with clean, maintainable code and proper documentation." },
            { title: "Based in Lahore, Pakistan", body: "Available for on-site work in Lahore and remote work globally. Competitive rates for international clients." },
            { title: "Open to Work", body: "Available for freelance projects, part-time contracts, and full-time frontend developer roles starting immediately." },
          ].map(({ title, body }) => (
            <Reveal key={title}>
              <div className="bg-card border border-white/5 rounded-2xl p-5 hover:border-primary/20 transition-all">
                <h3 className="text-surface font-semibold text-sm mb-2">{title}</h3>
                <p className="text-surface/55 text-xs leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Explore More */}
    <section className="py-14 border-t border-white/5" aria-label="Explore more">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-mono text-xs text-center uppercase tracking-widest mb-2">Explore More</p>
        <h2 className="text-xl font-bold text-surface text-center mb-8">More From Muhammad Sufyan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { href: "/", label: "Home", desc: "Portfolio overview" },
            { href: "/about", label: "About", desc: "My background" },
            { href: "/projects", label: "Projects", desc: "10 live productions" },
            { href: "/services", label: "Services", desc: "What I offer" },
            { href: "/blog", label: "Blog", desc: "53 dev articles" },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="bg-card border border-white/5 rounded-xl p-4 hover:border-primary/20 transition-all group text-center block">
              <p className="text-surface font-semibold text-sm group-hover:text-primary transition-colors">{label}</p>
              <p className="text-surface/40 text-xs mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
