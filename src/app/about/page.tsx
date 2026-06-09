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
  ],
  alternates: { canonical: "https://sufyan-frontend.vercel.app/about" },
  openGraph: {
    title: "About Muhammad Sufyan — Frontend Developer Lahore",
    description: "sufyanjutt · sufyanfrontend — React & Next.js developer at Ehya Education. Best Instructor at Ehsas Lab. Based in Lahore, Pakistan.",
    url: "https://sufyan-frontend.vercel.app/about",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630, alt: "Muhammad Sufyan — Frontend Developer" }],
  },
};

export default function About() {
  return (
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
    </div>
  );
}
