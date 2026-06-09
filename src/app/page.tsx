import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";
import { projects, skills, experience, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Muhammad Sufyan | Frontend Developer in Lahore, Pakistan",
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
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 400, height: 400, alt: "Muhammad Sufyan — Frontend Developer" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sufyan-frontend.vercel.app/#person",
  name: "Muhammad Sufyan",
  alternateName: ["sufyanjutt", "sufyanfrontend", "Sufyan Frontend"],
  jobTitle: "Frontend Developer",
  description: "Muhammad Sufyan (sufyanjutt / sufyanfrontend) is a Frontend Developer from Lahore, Pakistan with 1.5+ years building production-ready React.js and Next.js applications.",
  email: "sufyantechsolutions@gmail.com",
  telephone: "+923438640594",
  url: "https://sufyan-frontend.vercel.app",
  image: "https://sufyan-frontend.vercel.app/profile.png",
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
  sameAs: ["https://github.com/sufyan-frontend", "https://www.linkedin.com/in/sufyan-frontend"],
  knowsAbout: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Frontend Development", "Web Development", "REST APIs"],
  award: "Best Instructor Certificate — Ehsas Lab 2024",
  worksFor: { "@type": "Organization", name: "Ehya Education", url: "https://www.ehya.com.pk" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Muhammad Sufyan?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan (also known as sufyanjutt and sufyanfrontend) is a Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building React.js and Next.js web applications. He works at Ehya Education and has built production platforms used by thousands of users." },
    },
    {
      "@type": "Question",
      name: "What does Muhammad Sufyan specialise in?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan specialises in React.js and Next.js frontend development, Tailwind CSS responsive design, REST API integration, and production deployment on Vercel. He has built education platforms, corporate websites, admin dashboards, and AI-powered SaaS frontends." },
    },
    {
      "@type": "Question",
      name: "Is Muhammad Sufyan available for hire?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Muhammad Sufyan (sufyanjutt / sufyanfrontend) is open to freelance projects, full-time frontend developer roles, and remote work opportunities. You can contact him at sufyantechsolutions@gmail.com or through his portfolio at https://sufyan-frontend.vercel.app/contact." },
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

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sufyan-frontend.vercel.app/#person",
  name: "Muhammad Sufyan",
  review: [
    {
      "@type": "Review",
      reviewBody: "Sufyan consistently delivered high-quality UI work on time. His attention to detail and deep understanding of responsive design made a real difference in our products.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Ali Hassan", jobTitle: "Project Manager" },
    },
    {
      "@type": "Review",
      reviewBody: "Working with Sufyan has been seamless. He integrates APIs cleanly, asks the right questions, and communicates effectively about frontend requirements.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Usman Malik", jobTitle: "Backend Developer" },
    },
    {
      "@type": "Review",
      reviewBody: "Sufyan translates designs into code with impressive accuracy. His attention to spacing, color, and interactivity brings mockups to life exactly as intended.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sara Ahmed", jobTitle: "UI/UX Designer" },
    },
  ],
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <HeroSection />

      {/* Featured Projects */}
      <section className="py-24 bg-card/30" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
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

      {/* Skills */}
      <section className="py-24" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
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
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-primary to-accent skill-bar"
                      style={{ "--skill-level": `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
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

      {/* Testimonials */}
      <section className="py-24 bg-card/30" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">Feedback</p>
              <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-surface">
                What People Say
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all h-full flex flex-col">
                  <svg className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="text-surface/70 text-sm leading-relaxed flex-1">
                    <p>{t.text}</p>
                  </blockquote>
                  <figcaption className="mt-4 pt-4 border-t border-white/5">
                    <strong className="text-surface text-sm font-semibold block">{t.name}</strong>
                    <span className="text-surface/50 text-xs">
                      {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visible FAQ — backs up FAQPage schema */}
      <section className="py-24 bg-card/30" aria-labelledby="faq-heading">
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
                a: "Muhammad Sufyan (also known as sufyanjutt and sufyanfrontend) is a Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building React.js and Next.js web applications. He works at Ehya Education and has built production platforms used by thousands of users.",
              },
              {
                q: "What does Muhammad Sufyan specialise in?",
                a: "Muhammad Sufyan specialises in React.js and Next.js frontend development, Tailwind CSS responsive design, REST API integration, and production deployment on Vercel. He has built education platforms, corporate websites, admin dashboards, and AI-powered SaaS frontends.",
              },
              {
                q: "Is Muhammad Sufyan available for hire?",
                a: "Yes. Muhammad Sufyan (sufyanjutt / sufyanfrontend) is open to freelance projects, full-time frontend developer roles, and remote work. Contact him at sufyantechsolutions@gmail.com.",
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
      <section className="py-24">
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
