import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";
import CmsPostsSection from "@/components/CmsPostsSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import SkillBar from "@/components/SkillBar";
import PricingSection from "@/components/PricingSection";
import {
  projects, skills, experience,
  clientServices, whyChooseMe, processSteps, pricingTiers,
  internationalHighlights,
} from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: "Muhammad Sufyan — Frontend Developer in Lahore, Pakistan" },
  description:
    "Muhammad Sufyan (sufyanjutt / sufyanfrontend) — Frontend Developer with 1.5+ years building React & Next.js apps in Lahore, Pakistan. Open to freelance & full-time work.",
  keywords: [
    "Muhammad Sufyan", "sufyanjutt", "sufyanfrontend", "sufyan jutt",
    "sufyan frontend developer", "Frontend Developer Lahore", "React Developer Pakistan",
    "Next.js Developer Lahore", "hire frontend developer Pakistan",
    "sufyan developer", "Muhammad Sufyan React", "Muhammad Sufyan Next.js",
    "frontend developer portfolio Pakistan", "Muhammad Sufyan portfolio",
    "sufyan-frontend vercel", "React developer Lahore Pakistan",
    "web developer Lahore Pakistan", "sufyanfrontend portfolio",
    "Muhammad Sufyan Lahore", "best frontend developer Pakistan",
    "sufyan jutt frontend developer", "hire React developer Pakistan",
  ],
  authors: [{ name: "Muhammad Sufyan", url: "https://sufyan-frontend.vercel.app" }],
  alternates: { canonical: "https://sufyan-frontend.vercel.app" },
  openGraph: {
    title: "Muhammad Sufyan | Frontend Developer in Lahore, Pakistan",
    description: "sufyanjutt · sufyanfrontend — React & Next.js developer. 1.5+ years building production apps. Open to work.",
    url: "https://sufyan-frontend.vercel.app",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630, alt: "Muhammad Sufyan — Frontend Developer" }],
  },
};

// The Person entity is defined once, globally, in the root layout (#person).
// This page declares the ProfilePage type (scoped to the homepage only — it must
// not be emitted on every route) and points its mainEntity at that Person.
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://sufyan-frontend.vercel.app/#profilepage",
  url: "https://sufyan-frontend.vercel.app",
  name: "Muhammad Sufyan — Frontend Developer Portfolio",
  description: "Portfolio of Muhammad Sufyan, a Frontend Developer from Lahore, Pakistan specialising in React.js and Next.js.",
  dateCreated: "2024-01-01",
  dateModified: "2026-06-09",
  mainEntity: { "@id": "https://sufyan-frontend.vercel.app/#person" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Muhammad Sufyan?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan is a Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building React.js and Next.js web applications. He works at Ehya Education and has built production platforms used by thousands of users." },
    },
    {
      "@type": "Question",
      name: "What does Muhammad Sufyan specialise in?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan specialises in React.js and Next.js frontend development, Tailwind CSS responsive design, REST API integration, and production deployment on Vercel. He has built education platforms, corporate websites, admin dashboards, and AI-powered SaaS frontends." },
    },
    {
      "@type": "Question",
      name: "Is Muhammad Sufyan available for hire?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Muhammad Sufyan is open to freelance projects, full-time frontend developer roles, and remote work opportunities. You can contact him at sufyantechsolutions@gmail.com or through his portfolio at https://sufyan-frontend.vercel.app/contact." },
    },
    {
      "@type": "Question",
      name: "Where is Muhammad Sufyan based?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan is based in Lahore, Punjab, Pakistan. He is available for remote work worldwide and on-site roles in Lahore and surrounding areas." },
    },
    {
      "@type": "Question",
      name: "What projects has Muhammad Sufyan built?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan has built Alif Laila Education Platform (aliflaila.app), Ehya Education Platform (ehya.com.pk), Classmate Portal (classmate.ehya.com.pk), FieldX AI (fieldxai.com), TillShop Technologies (tillshoptechnologies.com), and several other live production websites." },
    },
  ],
};


const offerSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Website Development Packages by Muhammad Sufyan",
  url: "https://sufyan-frontend.vercel.app/#pricing",
  itemListElement: pricingTiers.map((tier, i) => ({
    "@type": "Offer",
    position: i + 1,
    name: tier.name,
    description: tier.description,
    priceCurrency: "PKR",
    ...(tier.custom
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 0,
            priceCurrency: "PKR",
            description: "Custom quote — final price depends on project scope",
          },
        }
      : { price: String(tier.pkrAmount) }),
    availability: "https://schema.org/InStock",
    seller: { "@type": "Person", "@id": "https://sufyan-frontend.vercel.app/#person", name: "Muhammad Sufyan" },
    url: "https://sufyan-frontend.vercel.app/contact",
  })),
};

const iconPaths: Record<string, string> = {
  building: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m6-14h.01M9 11h.01M9 15h.01M13 7h.01M13 11h.01M13 15h.01",
  target: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  cart: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  dashboard: "M4 5a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3z",
  api: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  speed: "M13 10V3L4 14h7v7l9-11h-7z",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  mobile: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  globe: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  chat: "M21 12a9 9 0 01-9 9c-1.6 0-3.1-.4-4.4-1.1L3 21l1.1-4.6A9 9 0 1121 12zM8 12h.01M12 12h.01M16 12h.01",
  card: "M3 10h18M3 8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8zM7 15h2",
  sparkles: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  gauge: "M3 15a9 9 0 1118 0M12 15l4-4M9 19h6",
};

function FeatureIcon({ name }: { name: string }) {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[name]} />
    </svg>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      <HeroSection />

      {/* Working with clients worldwide — international-first trust strip */}
      <section className="py-14 border-y border-white/5 bg-card/30" aria-labelledby="global-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-primary font-mono text-sm mb-2">Global by Default</p>
              <h2 id="global-heading" className="text-2xl sm:text-3xl font-bold text-surface mb-3">
                Working with Clients Worldwide
              </h2>
              <p className="text-surface/60 max-w-xl mx-auto text-sm leading-relaxed">
                Most of my clients are overseas. I deliver remotely for businesses across the US, UK,
                Europe, and the Gulf — with clear communication and no time-zone friction.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {internationalHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <FeatureIcon name={item.icon} />
                  </div>
                  <h3 className="text-surface font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-surface/55 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">What I Build</p>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-surface mb-4">
                Services That Grow Your Business
              </h2>
              <p className="text-surface/60 max-w-xl mx-auto">
                From a single landing page to a full web application — everything your business needs to win online.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clientServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05}>
                <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 group h-full">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    <FeatureIcon name={service.icon} />
                  </div>
                  <h3 className="text-surface font-semibold text-base mb-2">{service.title}</h3>
                  <p className="text-surface/55 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-card/30" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">Portfolio</p>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-surface mb-4">
                Featured Projects
              </h2>
              <p className="text-surface/60 max-w-xl mx-auto">
                Production-ready applications built for education, corporate, and software clients.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <article className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-dark">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-surface font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-surface/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live website`}
                      title={`Visit ${project.title} live website`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                    >
                      Visit Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">Why Work With Me</p>
              <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-surface mb-4">
                Built Right, Delivered Fast
              </h2>
              <p className="text-surface/60 max-w-xl mx-auto">
                What you get when you hire a specialist who cares about results — not just code.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseMe.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 flex items-start gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FeatureIcon name={item.icon} />
                  </div>
                  <div>
                    <h3 className="text-surface font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-surface/55 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-card/30" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">How It Works</p>
              <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-surface mb-4">
                My Process — From Idea to Launch
              </h2>
              <p className="text-surface/60 max-w-xl mx-auto">
                A clear, six-step process so you always know exactly what happens next.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 h-full">
                  <span className="text-primary/30 font-mono text-3xl font-bold block mb-3">{step.step}</span>
                  <h3 className="text-surface font-semibold text-base mb-1">{step.title}</h3>
                  <p className="text-surface/55 text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (client component — auto PKR/USD by visitor location) */}
      <PricingSection />

      <CmsPostsSection />

      {/* Skills */}
      <section className="py-16" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">Expertise</p>
              <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-surface">
                Technical Skills
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.04}>
                <div className="bg-card border border-white/5 rounded-xl p-4 text-center hover:border-primary/20 transition-all group">
                  <p className="text-surface group-hover:text-primary transition-colors font-medium text-sm mb-2">
                    {skill.name}
                  </p>
                  <SkillBar level={skill.level} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">Career</p>
              <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-surface">
                Work Experience
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                    <span className="text-surface/40 text-xs">{job.location}</span>
                  </div>
                  <h3 className="text-surface font-bold text-lg mb-1">{job.role}</h3>
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mb-4"
                    >
                      {job.company}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-primary text-sm font-medium mb-4">{job.company}</p>
                  )}
                  <ul className="space-y-2 flex-1">
                    {job.highlights.slice(0, 4).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-surface/60 text-sm">
                        <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
              >
                View Full Experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Client Reviews (dynamic — fetched from backend) */}
      <ReviewsSlider />

      {/* Visible FAQ — backs up FAQPage schema */}
      <section className="py-16 bg-card/30" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">FAQ</p>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-surface">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {[
              {
                q: "Who is Muhammad Sufyan?",
                a: "Muhammad Sufyan is a Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building React.js and Next.js web applications. He works at Ehya Education and has built production platforms used by thousands of users.",
              },
              {
                q: "What does Muhammad Sufyan specialise in?",
                a: "Muhammad Sufyan specialises in React.js and Next.js frontend development, Tailwind CSS responsive design, REST API integration, and production deployment on Vercel. He has built education platforms, corporate websites, admin dashboards, and AI-powered SaaS frontends.",
              },
              {
                q: "Is Muhammad Sufyan available for hire?",
                a: "Yes. Muhammad Sufyan is open to freelance projects, full-time frontend developer roles, and remote work. Contact him at sufyantechsolutions@gmail.com.",
              },
              {
                q: "What projects has Muhammad Sufyan built?",
                a: "Muhammad Sufyan has built Alif Laila Education Platform, Ehya Education Platform, Classmate Portal, FieldX AI, TillShop Technologies, Sufyan Frontend Dashboard, and more — all live in production.",
              },
              {
                q: "Where is Muhammad Sufyan based?",
                a: "Muhammad Sufyan is based in Lahore, Punjab, Pakistan. He is available for remote work worldwide and on-site roles in Lahore.",
              },
            ].map(({ q, a }, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <details className="bg-card border border-white/5 rounded-2xl p-6 group hover:border-primary/20 transition-all">
                  <summary className="text-surface font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-3">
                    {q}
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-surface/60 text-sm leading-relaxed mt-4">{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-primary font-mono text-sm mb-4">Let&apos;s Collaborate</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface mb-6">
              Ready to build something great?
            </h2>
            <p className="text-surface/60 text-lg mb-8 leading-relaxed">
              I&apos;m open to new opportunities — whether you have a project in mind or just want to say hi, my inbox is open.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 text-lg"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
