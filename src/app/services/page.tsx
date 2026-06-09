import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Hire Muhammad Sufyan (sufyanjutt) | Frontend Developer",
  description:
    "Hire Muhammad Sufyan (sufyanjutt / sufyanfrontend) for React & Next.js development, responsive design, API integration, performance optimisation, and Vercel deployment. Based in Lahore, Pakistan.",
  keywords: [
    "hire frontend developer Pakistan", "hire React developer Lahore",
    "Muhammad Sufyan services", "sufyanjutt hire", "Next.js development services",
    "responsive web design Pakistan", "API integration frontend", "Vercel deployment",
  ],
  alternates: { canonical: "https://sufyan-frontend.vercel.app/services" },
  openGraph: {
    title: "Hire sufyanjutt — Frontend Development Services",
    description: "React, Next.js, responsive design, API integration and deployment services by Muhammad Sufyan — Lahore, Pakistan.",
    url: "https://sufyan-frontend.vercel.app/services",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 400, height: 400, alt: "Muhammad Sufyan — Services" }],
  },
};

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  mobile: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  api: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  design: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  speed: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Frontend Development Services by Muhammad Sufyan (sufyanjutt)",
  description: "Professional frontend development services by Muhammad Sufyan — React.js, Next.js, Tailwind CSS, REST API integration, and Vercel deployment from Lahore, Pakistan.",
  url: "https://sufyan-frontend.vercel.app/services",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: {
        "@type": "Service",
        name: "React & Next.js Frontend Development",
        description: "Building fast, scalable, production-ready web applications using React.js and Next.js with clean, maintainable TypeScript code.",
        provider: { "@type": "Person", "@id": "https://sufyan-frontend.vercel.app/#person", name: "Muhammad Sufyan" },
        areaServed: "Worldwide",
        url: "https://sufyan-frontend.vercel.app/services",
      },
    },
    {
      "@type": "ListItem", position: 2,
      item: {
        "@type": "Service",
        name: "Responsive Web Design",
        description: "Mobile-first, pixel-perfect designs with Tailwind CSS that look flawless on any screen size, from phones to large desktops.",
        provider: { "@type": "Person", "@id": "https://sufyan-frontend.vercel.app/#person", name: "Muhammad Sufyan" },
        areaServed: "Worldwide",
        url: "https://sufyan-frontend.vercel.app/services",
      },
    },
    {
      "@type": "ListItem", position: 3,
      item: {
        "@type": "Service",
        name: "REST API Integration",
        description: "Connecting React and Next.js frontends to RESTful APIs and backend services with proper error handling and state management.",
        provider: { "@type": "Person", "@id": "https://sufyan-frontend.vercel.app/#person", name: "Muhammad Sufyan" },
        areaServed: "Worldwide",
        url: "https://sufyan-frontend.vercel.app/services",
      },
    },
    {
      "@type": "ListItem", position: 4,
      item: {
        "@type": "Service",
        name: "UI/UX Implementation from Figma",
        description: "Converting Figma or design mockups into clean, accessible, and beautifully interactive user interfaces with pixel precision.",
        provider: { "@type": "Person", "@id": "https://sufyan-frontend.vercel.app/#person", name: "Muhammad Sufyan" },
        areaServed: "Worldwide",
        url: "https://sufyan-frontend.vercel.app/services",
      },
    },
    {
      "@type": "ListItem", position: 5,
      item: {
        "@type": "Service",
        name: "Performance & Core Web Vitals Optimization",
        description: "Improving LCP, CLS, and INP scores — Core Web Vitals, load times, and overall app performance for better SEO and user experience.",
        provider: { "@type": "Person", "@id": "https://sufyan-frontend.vercel.app/#person", name: "Muhammad Sufyan" },
        areaServed: "Worldwide",
        url: "https://sufyan-frontend.vercel.app/services",
      },
    },
    {
      "@type": "ListItem", position: 6,
      item: {
        "@type": "Service",
        name: "Vercel & Netlify Deployment",
        description: "Deploying and managing Next.js projects on Vercel and Netlify with CI/CD pipelines, custom domains, and environment configuration.",
        provider: { "@type": "Person", "@id": "https://sufyan-frontend.vercel.app/#person", name: "Muhammad Sufyan" },
        areaServed: "Worldwide",
        url: "https://sufyan-frontend.vercel.app/services",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://sufyan-frontend.vercel.app/services" },
  ],
};

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What frontend development services does Muhammad Sufyan offer?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan (sufyanjutt / sufyanfrontend) offers React.js and Next.js web application development, responsive UI design with Tailwind CSS, REST API integration, UI/UX implementation from Figma designs, performance and Core Web Vitals optimisation, and Vercel/Netlify deployment." },
    },
    {
      "@type": "Question",
      name: "How can I hire Muhammad Sufyan as a frontend developer?",
      acceptedAnswer: { "@type": "Answer", text: "You can hire Muhammad Sufyan by visiting https://sufyan-frontend.vercel.app/contact, emailing sufyantechsolutions@gmail.com, or calling +923438640594. He is available for freelance projects, full-time roles, and remote work." },
    },
    {
      "@type": "Question",
      name: "Does Muhammad Sufyan work remotely?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Muhammad Sufyan is available for remote frontend development work globally. He is based in Lahore, Pakistan and has experience collaborating with distributed teams on production projects." },
    },
    {
      "@type": "Question",
      name: "What types of websites does Muhammad Sufyan build?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan builds education management platforms, corporate and business websites, admin dashboards, landing pages, SaaS frontends, and Islamic education platforms. All projects are built with React.js, Next.js, and Tailwind CSS." },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Work With Muhammad Sufyan — Frontend Developer",
  description: "The process for hiring Muhammad Sufyan (sufyanjutt / sufyanfrontend) for your React or Next.js frontend development project.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Contact Muhammad Sufyan",
      text: "Reach out via email at sufyantechsolutions@gmail.com or through the contact form at sufyan-frontend.vercel.app/contact. Describe your project requirements.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Project Discovery Call",
      text: "Muhammad Sufyan will review your requirements, ask clarifying questions, and provide a detailed project scope with estimated timeline and cost.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Development Phase",
      text: "Muhammad Sufyan builds your React or Next.js frontend using Tailwind CSS, integrates your APIs, and shares progress updates throughout development.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review and Revisions",
      text: "Review the completed work, request any changes, and Muhammad Sufyan makes revisions until the final result matches your vision.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Deployment and Handover",
      text: "Muhammad Sufyan deploys your project to Vercel or Netlify, provides the codebase, and offers post-launch support.",
    },
  ],
};

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">What I Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-4">Services</h1>
            <p className="text-surface/60 max-w-xl mx-auto">
              From concept to deployment — I deliver frontend solutions that are fast, beautiful, and built to last.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 group h-full">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {icons[service.icon]}
                </div>
                <h2 className="text-surface font-semibold text-lg mb-3">{service.title}</h2>
                <p className="text-surface/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">Process</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface">How We Work Together</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Contact", body: "Send your project brief via email or the contact form." },
              { step: "02", title: "Discovery", body: "Review requirements and agree on scope, timeline, and cost." },
              { step: "03", title: "Development", body: "Build the React / Next.js frontend with regular progress updates." },
              { step: "04", title: "Review", body: "Test the work and request revisions until it is exactly right." },
              { step: "05", title: "Launch", body: "Deploy to Vercel or Netlify and hand over the full codebase." },
            ].map(({ step, title, body }) => (
              <Reveal key={step}>
                <div className="bg-card border border-white/5 rounded-2xl p-5 text-center hover:border-primary/20 transition-all h-full">
                  <span className="text-primary font-mono text-2xl font-bold block mb-3">{step}</span>
                  <h3 className="text-surface font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-surface/55 text-xs leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="text-center bg-card border border-primary/10 rounded-2xl p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface mb-4">Have a project in mind?</h2>
            <p className="text-surface/60 mb-8">Let&apos;s discuss how I can help bring your ideas to life.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all"
            >
              Start a Conversation
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
