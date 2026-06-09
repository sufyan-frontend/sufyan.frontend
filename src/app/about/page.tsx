import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { person, skills, experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Muhammad Sufyan — sufyanjutt | Frontend Developer, Lahore",
  description:
    "About Muhammad Sufyan (sufyanjutt / sufyanfrontend) — Frontend Developer from Lahore, Pakistan. 1.5+ years building React & Next.js apps at Ehya Education. Best Instructor at Ehsas Lab.",
  keywords: [
    "Muhammad Sufyan about", "sufyanjutt", "sufyanfrontend", "sufyan jutt frontend",
    "sufyan developer Lahore", "Ehya Education frontend developer", "Ehsas Lab instructor",
    "who is Muhammad Sufyan", "Muhammad Sufyan background", "Muhammad Sufyan experience",
    "sufyan jutt developer Pakistan", "Muhammad Sufyan skills", "sufyan web developer about",
    "Best Instructor Ehsas Lab 2024", "Muhammad Sufyan React developer", "Muhammad Sufyan Next.js developer",
    "frontend developer 1.5 years Pakistan", "sufyan developer profile", "React developer Lahore background",
    "Pakistani frontend developer", "Muhammad Sufyan portfolio about", "Muhammad Sufyan career",
    "sufyan frontend developer biography", "sufyan jutt lahore", "hire frontend developer Lahore",
  ],
  alternates: { canonical: "https://sufyan-frontend.vercel.app/about" },
  openGraph: {
    title: "About Muhammad Sufyan — Frontend Developer Lahore",
    description: "sufyanjutt · sufyanfrontend — React & Next.js developer at Ehya Education. Best Instructor at Ehsas Lab. Based in Lahore, Pakistan.",
    url: "https://sufyan-frontend.vercel.app/about",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630, alt: "Muhammad Sufyan — Frontend Developer" }],
  },
};

const aboutPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sufyan-frontend.vercel.app/#person",
  name: "Muhammad Sufyan",
  alternateName: ["sufyanjutt", "sufyanfrontend", "Sufyan Frontend Developer"],
  jobTitle: "Frontend Developer",
  url: "https://sufyan-frontend.vercel.app",
  image: "https://sufyan-frontend.vercel.app/profile.png",
  description: "Muhammad Sufyan is a Frontend Developer from Lahore, Pakistan with 1.5+ years building React.js and Next.js production applications. He is the Best Instructor award winner at Ehsas Lab.",
  email: "sufyantechsolutions@gmail.com",
  telephone: "+923438640594",
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
  worksFor: { "@type": "Organization", name: "Ehya Education", url: "https://www.ehya.com.pk" },
  alumniOf: { "@type": "Organization", name: "Ehsas Lab", url: "https://ehsaslab.com" },
  award: "Best Instructor Certificate — Ehsas Lab 2024",
  knowsAbout: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "REST API Integration", "Vercel", "Git"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Best Instructor Certificate",
    credentialCategory: "certificate",
    recognizedBy: { "@type": "Organization", name: "Ehsas Lab" },
    dateCreated: "2024",
  },
  sameAs: ["https://github.com/sufyan-frontend", "https://www.linkedin.com/in/sufyan-frontend"],
};

const aboutWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://sufyan-frontend.vercel.app/about",
  url: "https://sufyan-frontend.vercel.app/about",
  name: "About Muhammad Sufyan — Frontend Developer in Lahore, Pakistan",
  description: "About Muhammad Sufyan (sufyanjutt / sufyanfrontend) — Frontend Developer with 1.5+ years of React.js and Next.js experience, working at Ehya Education in Lahore, Pakistan.",
  dateModified: "2026-06-09",
  isPartOf: { "@id": "https://sufyan-frontend.vercel.app" },
  about: { "@id": "https://sufyan-frontend.vercel.app/#person" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://sufyan-frontend.vercel.app/about" },
    ],
  },
};

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many years of experience does Muhammad Sufyan have?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan has 1.5+ years of professional frontend development experience, working at Ehya Education in Lahore. Prior to that he completed an intensive programme at Ehsas Lab where he became an instructor and won the Best Instructor Certificate." },
    },
    {
      "@type": "Question",
      name: "What technologies does Muhammad Sufyan know?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan (sufyanjutt) knows React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap, REST API integration, Redux, Git, GitHub, Vercel, and Netlify. He specialises in building fast, responsive, production-ready web applications." },
    },
    {
      "@type": "Question",
      name: "Did Muhammad Sufyan win any awards?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Muhammad Sufyan was awarded the Best Instructor Certificate by Ehsas Lab in 2024 for outstanding teaching and mentoring contributions to their web development programme." },
    },
    {
      "@type": "Question",
      name: "Where does Muhammad Sufyan work?",
      acceptedAnswer: { "@type": "Answer", text: "Muhammad Sufyan currently works as a Frontend Developer at Ehya Education in Lahore, Pakistan, where he builds and maintains multiple production education platforms used by thousands of students and faculty." },
    },
  ],
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }} />
      <div className="pt-24">
      {/* Bio */}
      <section className="py-16" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="text-primary font-mono text-sm mb-2">Who I Am</p>
              <h1 id="about-heading" className="text-4xl sm:text-5xl font-bold text-surface mb-6">
                About Me
              </h1>
              <p className="text-surface/65 leading-relaxed mb-4">{person.fullBio}</p>
              <blockquote className="text-surface/55 text-sm leading-relaxed bg-card border-l-2 border-primary/40 rounded-r-xl pl-4 pr-4 py-3 mt-6 italic">
                &ldquo;{person.objective}&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/Muhammad Sufyan.pdf"
                  download="Muhammad_Sufyan_CV.pdf"
                  className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download <abbr title="Curriculum Vitae">CV</abbr>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-primary/30 text-primary font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/10 transition-all text-sm"
                >
                  Contact Me
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary to-accent opacity-20 blur-xl" aria-hidden="true" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 w-full h-full">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Sufyan, Frontend Developer in Lahore"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, 288px"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-card/30" aria-labelledby="skills-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-surface mb-12 text-center">
              Technical Skills
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.04}>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-surface text-sm font-medium">{skill.name}</span>
                    <span className="text-primary text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-primary to-accent rounded-full skill-bar"
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
      <section className="py-16" aria-labelledby="experience-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold text-surface mb-12 text-center">
              Work Experience
            </h2>
          </Reveal>
          <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-primary border-2 border-dark" aria-hidden="true" />
                <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-surface font-bold text-lg">{job.role}</h3>
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                        >
                          {job.company}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <p className="text-primary font-medium">{job.company}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-surface/50 text-sm block">{job.period}</span>
                      <span className="text-surface/40 text-xs">{job.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-surface/65 text-sm">
                        <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      {/* Certificates & Achievements */}
      <section className="py-16 bg-card/30" aria-labelledby="certificates-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-2">Ehsas Lab</p>
              <h2 id="certificates-heading" className="text-2xl sm:text-3xl font-bold text-surface mb-3">
                Certificates &amp; Achievements
              </h2>
              <p className="text-surface/50 text-sm max-w-md mx-auto">
                Awarded Best Instructor Certificate by{" "}
                <a href="https://ehsaslab.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Ehsas Lab
                </a>{" "}
                for outstanding teaching and mentoring contributions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { src: "/ehsas%20lab%20image/instructercertifcae.jpeg", label: "Best Instructor Certificate" },
              { src: "/ehsas%20lab%20image/instructercertifcae3.jpeg", label: "Instructor Recognition Award" },
              { src: "/ehsas%20lab%20image/teacherdaycelebration.jpeg", label: "Teacher Day Celebration" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <figure className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative h-64 overflow-hidden bg-dark">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <figcaption className="px-4 py-3 text-center">
                    <span className="text-surface/70 text-sm font-medium">{item.label}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More — internal cross-page links for SEO and user navigation */}
      <section className="py-14 border-t border-white/5" aria-label="Explore more">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-primary font-mono text-xs text-center uppercase tracking-widest mb-2">Explore More</p>
            <h2 className="text-xl font-bold text-surface text-center mb-8">Other Sections on This Site</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { href: "/", label: "Home", desc: "Portfolio overview" },
              { href: "/projects", label: "Projects", desc: "10 live productions" },
              { href: "/services", label: "Services", desc: "What I offer" },
              { href: "/blog", label: "Blog", desc: "53 dev articles" },
              { href: "/contact", label: "Contact", desc: "Hire me" },
            ].map(({ href, label, desc }) => (
              <Reveal key={href}>
                <Link
                  href={href}
                  className="bg-card border border-white/5 rounded-xl p-4 hover:border-primary/20 transition-all group text-center block"
                >
                  <p className="text-surface font-semibold text-sm group-hover:text-primary transition-colors">{label}</p>
                  <p className="text-surface/40 text-xs mt-1">{desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
