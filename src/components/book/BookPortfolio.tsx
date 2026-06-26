"use client";

import { useCallback, useEffect, useState } from "react";

/* Projects shown on the two "Projects" leaves — real images + live links. */
const bookProjects = [
  { title: "Sufyan Frontend Dashboard", url: "https://sufyan-frontend-dashboard.vercel.app/", img: "/book/opt/sufyan-frontend-dashboard.webp", tag: "Admin dashboard · Next.js + Tailwind" },
  { title: "Alif Laila Education", url: "https://aliflaila.app/", img: "/book/opt/aliflaila-app.webp", tag: "Education UI · role-based dashboards" },
  { title: "Ehya Education Platform", url: "https://www.ehya.com.pk/", img: "/book/opt/ehya-pk.webp", tag: "Institutional platform · thousands of users" },
  { title: "Classmate Portal", url: "https://classmate.ehya.com.pk/", img: "/book/opt/classmate-ehya-pk.webp", tag: "Student/teacher class manager" },
  { title: "TillShop", url: "https://www.tillshop.org/", img: "/book/opt/tillshop.webp", tag: "Corporate platform · responsive UI" },
  { title: "FieldX AI", url: "https://fieldxai.com/", img: "/book/opt/fieldxai.webp", tag: "AI SaaS · modern product frontend" },
  { title: "ANP Engineerings", url: "https://www.anpengineerings.com/", img: "/book/opt/anpengineerings.webp", tag: "Corporate business website" },
  { title: "Faizan Noor ul Quran", url: "http://faizan-noor-ul-quran-s.vercel.app/", img: "/book/opt/faizan-noor-ul-quran.webp", tag: "Islamic education platform" },
];

function ProjectCard({ p }: { p: (typeof bookProjects)[number] }) {
  return (
    <a className="pcard" href={p.url} target="_blank" rel="noopener noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pcard-img" src={p.img} alt={p.title} loading="eager" decoding="async" />
      <div className="pcard-body">
        <h4>{p.title} <span className="ext">↗</span></h4>
        <p>{p.tag}</p>
      </div>
    </a>
  );
}

/* One projects leaf = two stacked image cards (top + bottom). */
function ProjectsPage({ items, num, side }: { items: typeof bookProjects; num: number; side: "l" | "r" }) {
  return (
    <div className="pg">
      <h2>Projects</h2>
      <div className="pcards">
        {items.map((p) => <ProjectCard key={p.url} p={p} />)}
      </div>
      <div className={`page-num ${side}`}>{num}</div>
    </div>
  );
}

/* Faces in reading order. Each pair (front,back) becomes one physical leaf. */
const faces: { cls?: string; node: React.ReactNode }[] = [
  {
    cls: "cover-face",
    node: (
      <div className="cover-inner">
        <div className="monogram">MS</div>
        <h3>Muhammad Sufyan</h3>
        <div className="role">Frontend Developer</div>
        <div className="loc">Lahore, Pakistan · Available for projects</div>
        <div className="tap">Tap to open ›</div>
      </div>
    ),
  },
  {
    node: (
      <div className="pg">
        <h2>About Me</h2>
        <div className="about-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="avatar" src="/book/profile.webp" alt="Muhammad Sufyan" />
          <p className="lede">
            React &amp; Next.js developer building <b>fast, modern websites that turn visitors into customers</b> —
            from landing pages to full web apps, with a focus on performance, SEO, and clean reusable code.
          </p>
        </div>
        <span className="badge">● Available for new projects</span>
        <div className="stats">
          <div className="stat"><b>11+</b><span>Live Projects</span></div>
          <div className="stat"><b>1.5+</b><span>Years Exp.</span></div>
          <div className="stat"><b>53</b><span>Articles</span></div>
        </div>
        <div className="page-num l">2</div>
      </div>
    ),
  },
  {
    node: (
      <div className="pg">
        <h2>My Skills</h2>
        <div className="skill-group">
          <div className="label">Languages &amp; Markup</div>
          <div className="chips">
            <span className="chip"><span className="dot" />HTML5 &amp; CSS3</span>
            <span className="chip"><span className="dot" />JavaScript ES6+</span>
            <span className="chip"><span className="dot" />TypeScript</span>
          </div>
        </div>
        <div className="skill-group">
          <div className="label">Frameworks &amp; Libraries</div>
          <div className="chips">
            <span className="chip fw"><span className="dot" />React.js</span>
            <span className="chip fw"><span className="dot" />Next.js</span>
            <span className="chip fw"><span className="dot" />React Native</span>
            <span className="chip fw"><span className="dot" />Redux</span>
          </div>
        </div>
        <div className="skill-group">
          <div className="label">Styling &amp; Design</div>
          <div className="chips">
            <span className="chip st"><span className="dot" />Tailwind CSS</span>
            <span className="chip st"><span className="dot" />Bootstrap</span>
            <span className="chip st"><span className="dot" />Responsive Design</span>
          </div>
        </div>
        <div className="skill-group">
          <div className="label">Tools &amp; Platforms</div>
          <div className="chips">
            <span className="chip be"><span className="dot" />REST APIs</span>
            <span className="chip be"><span className="dot" />Git &amp; GitHub</span>
            <span className="chip be"><span className="dot" />Vercel / Netlify</span>
          </div>
        </div>
        <div className="page-num r">3</div>
      </div>
    ),
  },
  { node: <ProjectsPage items={bookProjects.slice(0, 2)} num={4} side="l" /> },
  { node: <ProjectsPage items={bookProjects.slice(2, 4)} num={5} side="r" /> },
  { node: <ProjectsPage items={bookProjects.slice(4, 6)} num={6} side="l" /> },
  { node: <ProjectsPage items={bookProjects.slice(6, 8)} num={7} side="r" /> },
  {
    node: (
      <div className="pg">
        <h2>Experience</h2>
        <div className="exp">
          <div className="exp-head"><h4>Frontend Developer</h4><span>2025 – Present</span></div>
          <p className="exp-co">Ehya Education · Lahore</p>
          <ul className="exp-list">
            <li>Built &amp; maintained production education platforms used by thousands.</li>
            <li>Converted designs into responsive React/Next.js apps.</li>
            <li>Integrated REST APIs &amp; improved Core Web Vitals.</li>
          </ul>
        </div>
        <div className="exp">
          <div className="exp-head"><h4>Learner → Instructor</h4><span>2024 – 2025</span></div>
          <p className="exp-co">Ehsas Lab · Lahore</p>
          <ul className="exp-list">
            <li>Completed a 6-month intensive web development programme.</li>
            <li>Became instructor; won Best Instructor Certificate (2024).</li>
            <li>Self-learned Next.js, Tailwind, Redux, Git, Vercel.</li>
          </ul>
        </div>
        <div className="page-num l">8</div>
      </div>
    ),
  },
  {
    node: (
      <div className="pg">
        <h2>Services &amp; Pricing</h2>
        <div className="svc-grid">
          <span className="svc">Business Websites</span><span className="svc">Landing Pages</span>
          <span className="svc">E-commerce</span><span className="svc">Dashboards</span>
          <span className="svc">API Integration</span><span className="svc">SEO-Friendly</span>
        </div>
        <div className="tier"><div className="name">Starter Website<small>up to 6 pages · 4–6 days</small></div><div className="price">₨25k</div></div>
        <div className="tier"><div className="name">Business Website<small>up to 12 pages · 7–12 days</small></div><div className="price">₨65k</div></div>
        <div className="tier"><div className="name">Premium Custom<small>unlimited scope</small></div><div className="price">Custom</div></div>
        <div className="page-num r">9</div>
      </div>
    ),
  },
  {
    node: (
      <div className="pg">
        <h2>Get In Touch</h2>
        <div className="contact-row"><span className="ic">✉</span> sufyantechsolutions@gmail.com</div>
        <div className="contact-row"><span className="ic">☏</span> +92 322 747 9636</div>
        <div className="contact-row"><span className="ic">⌥</span> github.com/sufyan-frontend</div>
        <div className="contact-row"><span className="ic">in</span> linkedin.com/in/sufyan-frontend</div>
        <div className="btn-row">
          <a className="btn primary" href="mailto:sufyantechsolutions@gmail.com">Hire Me</a>
          <a className="btn ghost" href="https://sufyan-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
        </div>
        <div className="page-num l">10</div>
      </div>
    ),
  },
  {
    cls: "cover-face back-cover",
    node: (
      <div className="cover-inner">
        <div className="monogram">MS</div>
        <h3>Thanks for reading!</h3>
        <div className="loc">Muhammad Sufyan · Frontend Developer</div>
      </div>
    ),
  },
];

/* Build physical leaves from face pairs. */
const leaves: { front: (typeof faces)[number]; back?: (typeof faces)[number] }[] = [];
for (let i = 0; i < faces.length; i += 2) {
  leaves.push({ front: faces[i], back: faces[i + 1] });
}
const labels = ["Cover", "About · Skills", "Projects", "Projects", "Experience · Services", "Contact", "The End"];

export default function BookPortfolio() {
  const [turned, setTurned] = useState(0);
  const [opening, setOpening] = useState(false);
  // The single leaf currently mid-flip + its direction — drives the page-lift shadow.
  const [active, setActive] = useState<{ idx: number; dir: 1 | -1 } | null>(null);

  const go = useCallback((d: number) => {
    setTurned((t) => {
      const nt = Math.max(0, Math.min(leaves.length, t + d));
      if (nt !== t) {
        const idx = d > 0 ? t : nt; // index of the leaf that physically turns
        setActive({ idx, dir: d > 0 ? 1 : -1 });
        window.setTimeout(() => setActive(null), 1100);
      }
      return nt;
    });
  }, []);

  // Closed 3D book → play an opening animation, then reveal the open spread.
  const openBook = useCallback(() => {
    setOpening((o) => {
      if (o) return o;
      window.setTimeout(() => { setTurned(1); setOpening(false); }, 340);
      return true;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { turned === 0 ? openBook() : go(1); }
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, openBook, turned]);

  const onBookClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) return; // let links work
    const r = e.currentTarget.getBoundingClientRect();
    go(e.clientX - r.left > r.width / 2 ? 1 : -1);
  };

  // Page-block thickness on each side grows/shrinks as you read — gives real volume.
  const total = leaves.length;
  const leftDepth = Math.min(14, 3 + turned * 2);
  const rightDepth = Math.min(14, 3 + (total - turned) * 2);

  return (
    <div className="bp-scope">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ambient 3D environment */}
      <div className="bp-env" aria-hidden="true">
        <div className="bp-spot" />
        <div className="bp-vignette" />
        <div className="bp-particles">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={`pt pt-${i % 7}`} style={{ ["--i" as string]: String(i) }} />
          ))}
        </div>
      </div>

      <a className="bp-back" href="/">← Back to site</a>

      {turned === 0 ? (
        <div className="scene scene-closed">
          <div className="floor floor-closed" aria-hidden="true" />
          <div className={`book3d-wrap${opening ? " opening" : ""}`} onClick={openBook}>
            <div className="book3d">
              {/* front cover with photo */}
              <div className="b3 b3-front">
                <div className="b3c-inner">
                  <div className="b3c-label">Portfolio</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="b3c-photo" src="/book/profile.webp" alt="Muhammad Sufyan" />
                  <h3 className="b3c-name">Muhammad Sufyan</h3>
                  <div className="b3c-role">Frontend Developer</div>
                  <div className="b3c-loc">React · Next.js — Lahore, PK</div>
                  <div className="b3c-tap">Tap to open ›</div>
                </div>
                <span className="b3c-gloss" aria-hidden="true" />
              </div>
              {/* spine (binding) */}
              <div className="b3 b3-spine"><span>MUHAMMAD SUFYAN · PORTFOLIO</span></div>
              {/* fore-edge pages */}
              <div className="b3 b3-right" />
              <div className="b3 b3-top" />
              <div className="b3 b3-bottom" />
              {/* back cover */}
              <div className="b3 b3-back"><div className="b3-mono">MS</div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="scene">
          <div className="floor" aria-hidden="true" />
          <div className="book" onClick={onBookClick}>
            {/* page-block thickness under each side (real depth) */}
            <div className="block left" style={{ ["--d" as string]: `${leftDepth}px` }} aria-hidden="true" />
            <div className="block right" style={{ ["--d" as string]: `${rightDepth}px` }} aria-hidden="true" />
            <div className="spread">
              <div className="half left" />
              <div className="half right" />
              <span className="sheen" aria-hidden="true" />
            </div>
            <div className="spine" />
            <div className="pages">
              {leaves.map((lf, i) => {
                const flipped = i < turned;
                const turning = active?.idx === i;
                return (
                  <div
                    key={i}
                    className={`leaf${flipped ? " flipped" : ""}${turning ? " turning " + (active!.dir > 0 ? "fwd" : "bwd") : ""}`}
                    style={{ zIndex: turning ? 999 : flipped ? i + 1 : leaves.length - i + 10 }}
                  >
                    <div className={`face front${lf.front.cls ? " " + lf.front.cls : ""}`}>
                      {lf.front.node}
                      <span className="curl" aria-hidden="true" />
                    </div>
                    {lf.back && (
                      <div className={`face back${lf.back.cls ? " " + lf.back.cls : ""}`}>
                        {lf.back.node}
                        <span className="curl" aria-hidden="true" />
                      </div>
                    )}
                    {/* page-lift shadow that sweeps as this leaf turns */}
                    <span className="lift" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="controls">
        <button type="button" className="nav" onClick={() => go(-1)} disabled={turned === 0} aria-label="Previous page">&#8592;</button>
        <div className="progress">{labels[turned] || "The End"}</div>
        <button type="button" className="nav" onClick={() => go(1)} disabled={turned === leaves.length} aria-label="Next page">&#8594;</button>
      </div>
    </div>
  );
}

const CSS = `
.bp-scope {
  --ink:#20262e; --muted:#6b7480; --accent:#16c2e8; --accent-2:#6c5ce7;
  --paper:#f7f3ea; --paper-2:#f1ece0; --edge:#e9e1cd; --cover-a:#161c26;
  --cover-b:#0c1016; --gold:#d9b25a;
  min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:34px; padding:56px 16px 40px; position:relative; overflow:hidden;
  background:
    radial-gradient(1100px 620px at 50% -6%, #233150 0%, transparent 60%),
    radial-gradient(900px 600px at 50% 120%, #15233b 0%, transparent 60%),
    linear-gradient(180deg, #0c1322 0%, #070b13 55%, #05070d 100%);
  font-family:"Segoe UI", system-ui, sans-serif; color:var(--ink);
}
.bp-scope * { box-sizing:border-box; }

/* ---------- ambient 3D environment ---------- */
.bp-scope .bp-env { position:absolute; inset:0; z-index:0; pointer-events:none; overflow:hidden; }
.bp-scope .bp-spot { position:absolute; left:50%; top:-12%; width:760px; height:760px; transform:translateX(-50%);
  background:radial-gradient(circle at 50% 40%, rgba(120,170,255,.20), rgba(108,92,231,.10) 38%, transparent 66%);
  filter:blur(6px); animation:bpGlow 7s ease-in-out infinite; }
.bp-scope .bp-vignette { position:absolute; inset:0;
  background:radial-gradient(120% 90% at 50% 42%, transparent 55%, rgba(0,0,0,.55) 100%); }
.bp-scope .bp-particles { position:absolute; inset:0; }
.bp-scope .pt { position:absolute; bottom:-12px; width:5px; height:5px; border-radius:50%;
  background:radial-gradient(circle, rgba(180,210,255,.95), rgba(120,160,255,0) 70%);
  opacity:0; animation:bpFloat 14s linear infinite; animation-delay:calc(var(--i) * -1.15s);
  left:calc(4% + (var(--i) * 6.6%)); }
.bp-scope .pt-0{ width:4px; height:4px; } .bp-scope .pt-1{ width:7px; height:7px; }
.bp-scope .pt-3{ width:3px; height:3px; opacity:.6; } .bp-scope .pt-5{ width:6px; height:6px; }
@keyframes bpFloat {
  0%{ transform:translateY(0) translateX(0); opacity:0; }
  10%{ opacity:.9; } 50%{ transform:translateY(-46vh) translateX(14px); opacity:.7; }
  90%{ opacity:0; } 100%{ transform:translateY(-92vh) translateX(-10px); opacity:0; }
}
@keyframes bpGlow { 0%,100%{ opacity:.7; } 50%{ opacity:1; } }
.bp-scope .scene, .bp-scope .controls, .bp-scope .bp-back { position:relative; z-index:2; }
.bp-scope .bp-back { position:fixed; top:16px; left:16px; z-index:100; color:#9fb0c4; text-decoration:none;
  font-size:13px; padding:7px 12px; border:1px solid #2a3650; border-radius:9px; background:#141b29; transition:.2s; }
.bp-scope .bp-back:hover { color:#fff; border-color:var(--accent); }

.bp-scope .scene { perspective:2600px; perspective-origin:50% 28%; width:min(900px,94vw); position:relative; }
/* soft contact shadow on the floor under the book */
.bp-scope .floor { position:absolute; left:8%; right:8%; bottom:-46px; height:54px; z-index:-1;
  background:radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,.6), rgba(0,0,0,0) 72%);
  filter:blur(11px); border-radius:50%; transition:all .6s ease; animation:bpFloorPulse 6s ease-in-out infinite; }
@keyframes bpFloorPulse { 0%,100%{ transform:scaleX(1); opacity:.9; } 50%{ transform:scaleX(.94); opacity:.7; } }
.bp-scope .scene-closed { display:flex; align-items:center; justify-content:center; min-height:560px; }
.bp-scope .floor-closed { left:33%; right:33%; bottom:46px; height:30px; }
.bp-scope .book { position:relative; width:100%; aspect-ratio:16/10; transform-style:preserve-3d;
  transform:rotateX(24deg) rotateY(-2deg) rotateZ(.3deg); transition:transform 1s ease; cursor:pointer;
  animation:bpSpreadIn .4s cubic-bezier(.2,.7,.2,1) both, bpIdle 9s ease-in-out .8s infinite; }
@keyframes bpSpreadIn { from{ opacity:0; transform:rotateX(46deg) rotateY(-2deg) scale(.9); } to{ opacity:1; transform:rotateX(24deg) rotateY(-2deg); } }
@keyframes bpIdle {
  0%,100%{ transform:rotateX(24deg) rotateY(-2deg) translateY(0); }
  50%{ transform:rotateX(22deg) rotateY(1.5deg) translateY(-9px); }
}
.bp-scope .book:hover { animation-play-state:paused; transform:rotateX(18deg) rotateY(0deg) translateY(-6px); }

/* real page-block thickness flanking the spine */
.bp-scope .block { position:absolute; top:2%; bottom:2%; width:46%; transform-style:preserve-3d;
  background:repeating-linear-gradient(0deg,#f6efdd 0,#f6efdd 1px,#d8ceb2 1px,#d8ceb2 2px);
  transition:transform .5s ease; }
.bp-scope .block.left { left:3.5%; border-radius:7px 0 0 7px;
  transform:translateZ(calc(var(--d) * -1)); box-shadow:-6px 8px 18px rgba(0,0,0,.4); }
.bp-scope .block.right { right:3.5%; border-radius:0 7px 7px 0;
  transform:translateZ(calc(var(--d) * -1)); box-shadow:6px 8px 18px rgba(0,0,0,.4); }

/* ---------- real 3D closed book (cuboid) ---------- */
.bp-scope .book3d-wrap { perspective:1150px; perspective-origin:50% 45%; width:100%;
  display:flex; align-items:center; justify-content:center; cursor:pointer; }
.bp-scope .book3d { position:relative; width:340px; height:454px; transform-style:preserve-3d;
  transform:rotateX(-6deg) rotateY(32deg); transition:transform .45s cubic-bezier(.4,.1,.2,1), opacity .34s ease;
  animation:bpBookIn 1s ease both; }
@keyframes bpBookIn { from{ transform:rotateX(-6deg) rotateY(56deg); opacity:0; } to{ transform:rotateX(-6deg) rotateY(32deg); opacity:1; } }
.bp-scope .book3d-wrap:hover .book3d { transform:rotateX(-6deg) rotateY(24deg) translateY(-6px); }
.bp-scope .book3d-wrap.opening .book3d { transform:rotateX(-2deg) rotateY(-3deg) scale(1.05); opacity:0; }
.bp-scope .book3d .b3 { position:absolute; top:50%; left:50%; overflow:hidden; }
.bp-scope .book3d .b3-front, .bp-scope .book3d .b3-back { width:340px; height:454px; border-radius:3px 7px 7px 3px; backface-visibility:hidden; }
.bp-scope .book3d .b3-front { transform:translate(-50%,-50%) translateZ(45px);
  background:radial-gradient(140% 100% at 22% 0%, #2a374f 0%, transparent 55%),
    radial-gradient(120% 90% at 100% 100%, rgba(108,92,231,.4) 0%, transparent 50%),
    linear-gradient(135deg,#1a2233 0%,#0e1420 55%,#070b12 100%);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.05); }
.bp-scope .book3d .b3-back { transform:translate(-50%,-50%) rotateY(180deg) translateZ(45px);
  background:linear-gradient(135deg,#0e1420,#05080c); display:grid; place-items:center; }
.bp-scope .book3d .b3-mono { width:60px; height:60px; border-radius:14px; display:grid; place-items:center;
  font-weight:800; color:#fff; font-size:22px; opacity:.85; background:linear-gradient(135deg,var(--accent),var(--accent-2)); }
.bp-scope .book3d .b3-spine { width:90px; height:454px; border-radius:3px 0 0 3px;
  transform:translate(-50%,-50%) rotateY(-90deg) translateZ(170px);
  background:repeating-linear-gradient(0deg,#fbf6ea 0,#fbf6ea 2px,#cfc3a4 2px,#cfc3a4 4px);
  box-shadow:inset -22px 0 30px rgba(0,0,0,.4), inset 14px 0 18px rgba(0,0,0,.12); }
.bp-scope .book3d .b3-spine span { display:none; }
.bp-scope .book3d .b3-right { width:90px; height:454px;
  transform:translate(-50%,-50%) rotateY(90deg) translateZ(170px);
  background:repeating-linear-gradient(0deg,#fbf6ea 0,#fbf6ea 2px,#cfc3a4 2px,#cfc3a4 4px);
  box-shadow:inset 22px 0 30px rgba(0,0,0,.4), inset -14px 0 18px rgba(0,0,0,.12); }
.bp-scope .book3d .b3-top { width:340px; height:90px;
  transform:translate(-50%,-50%) rotateX(90deg) translateZ(227px);
  background:repeating-linear-gradient(90deg,#fbf6ea 0,#fbf6ea 2px,#cfc3a4 2px,#cfc3a4 4px); }
.bp-scope .book3d .b3-bottom { width:340px; height:90px;
  transform:translate(-50%,-50%) rotateX(-90deg) translateZ(227px);
  background:repeating-linear-gradient(90deg,#ece3cc 0,#ece3cc 2px,#c7bc9d 2px,#c7bc9d 4px); }
/* cover content */
.bp-scope .b3c-inner { position:relative; z-index:2; height:100%; display:flex; flex-direction:column;
  align-items:center; justify-content:center; gap:11px; text-align:center; padding:30px 24px; }
.bp-scope .b3c-inner::before { content:""; position:absolute; inset:14px; border-radius:6px; pointer-events:none;
  border:1px solid rgba(217,178,90,.5); box-shadow:inset 0 0 0 3px rgba(217,178,90,.08); }
.bp-scope .b3c-label { color:var(--gold); font-size:11px; font-weight:800; letter-spacing:5px; text-transform:uppercase; }
.bp-scope .b3c-photo { width:120px; height:120px; border-radius:50%; object-fit:cover;
  border:3px solid rgba(255,255,255,.18); box-shadow:0 12px 30px rgba(0,0,0,.5), 0 0 0 5px rgba(22,194,232,.16); }
.bp-scope .b3c-name { color:#eef3fa; font-size:23px; font-weight:800; letter-spacing:.4px; }
.bp-scope .b3c-role { display:flex; align-items:center; gap:9px; color:var(--gold); font-size:11px; font-weight:800;
  letter-spacing:3px; text-transform:uppercase; }
.bp-scope .b3c-role::before, .bp-scope .b3c-role::after { content:""; width:18px; height:1px; background:var(--gold); opacity:.7; }
.bp-scope .b3c-loc { color:#9fb0c4; font-size:11.5px; }
.bp-scope .b3c-tap { margin-top:6px; font-size:11px; color:#dbe3ee; padding:6px 14px; border-radius:20px;
  border:1px solid rgba(255,255,255,.2); background:rgba(255,255,255,.05); animation:bpPulse 1.8s ease-in-out infinite; }
/* moving light gloss sweeping across the closed cover */
.bp-scope .b3c-gloss { position:absolute; inset:0; z-index:3; pointer-events:none; border-radius:3px 7px 7px 3px;
  overflow:hidden; mix-blend-mode:screen; opacity:.8;
  background:linear-gradient(118deg, transparent 40%, rgba(190,220,255,.22) 49%, rgba(255,255,255,.4) 52%, transparent 66%);
  background-size:260% 100%; animation:bpSheen 5.5s ease-in-out infinite; }

.bp-scope .spread { position:absolute; inset:0; display:flex; border-radius:6px 10px 10px 6px;
  box-shadow:0 60px 100px rgba(0,0,0,.6), 0 26px 50px rgba(0,0,0,.45), 0 2px 0 rgba(255,255,255,.04) inset; }
/* slow travelling sheen across the open spread — glossy paper under the spotlight */
.bp-scope .sheen { position:absolute; inset:0; pointer-events:none; z-index:40; mix-blend-mode:screen; opacity:.5;
  border-radius:6px 10px 10px 6px; overflow:hidden;
  background:linear-gradient(115deg, transparent 38%, rgba(190,220,255,.18) 48%, rgba(255,255,255,.28) 51%, transparent 64%);
  background-size:280% 100%; animation:bpSheen 8s ease-in-out infinite; }
@keyframes bpSheen { 0%{ background-position:140% 0; } 55%,100%{ background-position:-40% 0; } }
/* deeper gutter shadow at the open spine for realism */
.bp-scope .spread::after { content:""; position:absolute; top:0; bottom:0; left:50%; width:60px;
  transform:translateX(-50%); pointer-events:none; z-index:55; opacity:0; transition:opacity .5s ease .3s;
  background:linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,.16) 45%, rgba(0,0,0,.16) 55%, rgba(0,0,0,0)); }
.bp-scope .book .spread::after { opacity:1; }
.bp-scope .half { flex:1; position:relative; background:var(--paper); overflow:hidden; transition:opacity .5s ease; }
.bp-scope .half.left { border-radius:6px 0 0 6px; box-shadow:inset -22px 0 30px -22px rgba(0,0,0,.4); }
.bp-scope .half.right { border-radius:0 10px 10px 0;
  box-shadow:inset 22px 0 30px -22px rgba(0,0,0,.4),
    0 1px 0 #efe9da,0 2px 0 #ece5d2,0 3px 0 #e8e0cb,0 4px 0 #e4dcc6,0 5px 0 #e0d7bf,0 6px 0 #ddd3ba,
    0 7px 0 #d9cfb4,0 8px 0 #d5caae,0 9px 0 #d1c5a8,0 10px 0 #cdc0a2,0 11px 0 #c9bb9c,0 12px 0 #c5b696,0 13px 0 #c1b190; }
.bp-scope .half.left::before, .bp-scope .half.right::before { content:""; position:absolute; inset:0;
  pointer-events:none; background:linear-gradient(180deg, rgba(255,255,255,.4), rgba(0,0,0,.03)); }
.bp-scope .half.right::after { content:""; position:absolute; top:3px; bottom:3px; right:-7px; width:7px;
  background:repeating-linear-gradient(90deg,#efe8d6,#efe8d6 1px,#d9cfb4 1px,#d9cfb4 2px);
  border-radius:0 3px 3px 0; transform:skewY(-.5deg); }

.bp-scope .spine { position:absolute; top:0; bottom:0; left:50%; width:6px; transform:translateX(-50%);
  background:linear-gradient(90deg, rgba(0,0,0,.18), rgba(0,0,0,.32), rgba(0,0,0,.18)); z-index:60; }

.bp-scope .pages { position:absolute; top:0; bottom:0; left:50%; width:50%; transform-style:preserve-3d; }
.bp-scope .leaf { position:absolute; inset:0; transform-style:preserve-3d; transform-origin:left center;
  transition:transform 1.05s cubic-bezier(.4,.08,.18,1); }
.bp-scope .leaf .face { position:absolute; inset:0; backface-visibility:hidden; background:var(--paper); overflow:hidden; }
.bp-scope .leaf .front { border-radius:0 10px 10px 0; box-shadow:inset 22px 0 30px -22px rgba(0,0,0,.4); }
.bp-scope .leaf .back { transform:rotateY(180deg); border-radius:6px 0 0 6px; box-shadow:inset -22px 0 30px -22px rgba(0,0,0,.4); }
.bp-scope .leaf.flipped { transform:rotateY(-180deg); }

/* fore-edge curl highlight — catches light on the outer edge of each page */
.bp-scope .curl { position:absolute; top:0; bottom:0; right:0; width:26px; pointer-events:none; z-index:6;
  background:linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.05) 55%, rgba(255,255,255,.55) 92%, rgba(0,0,0,.12) 100%);
  border-radius:0 10px 10px 0; }
.bp-scope .leaf .back .curl { right:auto; left:0; border-radius:6px 0 0 6px;
  background:linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.05) 55%, rgba(255,255,255,.5) 92%, rgba(0,0,0,.12) 100%); }
.bp-scope .cover-face .curl, .bp-scope .back-cover .curl { background:linear-gradient(90deg, rgba(0,0,0,0), rgba(255,255,255,.14) 92%, rgba(0,0,0,.25)); }

/* page-lift shadow: rides on the leaf and darkens it through the turn */
.bp-scope .lift { position:absolute; inset:0; pointer-events:none; z-index:7; opacity:0; border-radius:0 10px 10px 0;
  background:linear-gradient(105deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.22) 30%, rgba(0,0,0,0) 60%); }
.bp-scope .leaf.turning.fwd .lift { animation:bpLift 1.05s cubic-bezier(.4,.08,.18,1) both; }
.bp-scope .leaf.turning.bwd .lift { animation:bpLift 1.05s cubic-bezier(.4,.08,.18,1) both; }
@keyframes bpLift { 0%{ opacity:0; } 22%{ opacity:.85; } 50%{ opacity:1; } 78%{ opacity:.7; } 100%{ opacity:0; } }
/* lift the whole turning leaf slightly off the stack for a tactile arc */
.bp-scope .leaf.turning { box-shadow:0 30px 50px rgba(0,0,0,.4); }

.bp-scope .pg { padding:26px 28px 30px; height:100%; display:flex; flex-direction:column; }
.bp-scope .pg h2 { font-size:clamp(16px,2.6vw,22px); margin-bottom:14px; }
.bp-scope .pg h2::after { content:""; display:block; width:46px; height:3px; border-radius:3px;
  background:linear-gradient(90deg,var(--accent),var(--accent-2)); margin-top:7px; }

.bp-scope .cover-face {
  background:
    radial-gradient(140% 100% at 22% 0%, #2a374f 0%, transparent 55%),
    radial-gradient(120% 90% at 100% 100%, rgba(108,92,231,.35) 0%, transparent 50%),
    linear-gradient(135deg, #1a2233 0%, #0e1420 55%, #070b12 100%) !important;
  color:#eaf0f7;
}
/* fine carbon weave texture */
.bp-scope .cover-face::after { content:""; position:absolute; inset:0; pointer-events:none; opacity:.55;
  background:repeating-linear-gradient(45deg, rgba(255,255,255,.02) 0 1px, transparent 1px 4px); }
/* gold double frame */
.bp-scope .cover-face::before { content:""; position:absolute; inset:16px; pointer-events:none; border-radius:7px;
  border:1px solid rgba(217,178,90,.55);
  box-shadow:0 0 0 4px rgba(217,178,90,.10), inset 0 0 0 4px rgba(217,178,90,.10); }
.bp-scope .cover-inner { position:relative; z-index:2; height:100%; display:flex; flex-direction:column;
  align-items:center; justify-content:center; text-align:center; gap:14px; padding:38px 30px; }
.bp-scope .monogram { position:relative; width:90px; height:90px; border-radius:22px;
  background:linear-gradient(135deg,var(--accent),var(--accent-2)); display:grid; place-items:center;
  font-size:34px; font-weight:800; color:#fff; letter-spacing:1px;
  box-shadow:0 16px 40px rgba(22,194,232,.5), inset 0 1px 0 rgba(255,255,255,.45); }
.bp-scope .monogram::after { content:""; position:absolute; inset:-6px; border-radius:26px;
  border:1px solid rgba(255,255,255,.18); }
.bp-scope .cover-inner h3 { font-size:27px; font-weight:800; letter-spacing:.5px; text-shadow:0 2px 14px rgba(0,0,0,.4); }
.bp-scope .cover-inner .role { display:flex; align-items:center; gap:10px; color:var(--gold); font-size:12px;
  font-weight:800; letter-spacing:4px; text-transform:uppercase; }
.bp-scope .cover-inner .role::before, .bp-scope .cover-inner .role::after { content:""; width:22px; height:1px;
  background:linear-gradient(90deg, transparent, var(--gold)); }
.bp-scope .cover-inner .role::after { background:linear-gradient(90deg, var(--gold), transparent); }
.bp-scope .cover-inner .loc { color:#9fb0c4; font-size:12px; }
.bp-scope .cover-inner .tap { margin-top:8px; font-size:11px; color:#dbe3ee; letter-spacing:.5px;
  padding:6px 15px; border:1px solid rgba(255,255,255,.2); border-radius:20px; background:rgba(255,255,255,.05);
  animation:bpPulse 1.8s ease-in-out infinite; }
@keyframes bpPulse { 0%,100%{ opacity:.55;} 50%{ opacity:1;} }
.bp-scope .back-cover { background:linear-gradient(135deg,var(--cover-b),#05080c) !important; color:#cfd8e4; }

.bp-scope .about-top { display:flex; gap:13px; align-items:flex-start; margin-bottom:8px; }
.bp-scope .avatar { width:62px; height:62px; border-radius:14px; object-fit:cover; flex-shrink:0;
  box-shadow:0 6px 16px rgba(0,0,0,.2); }
.bp-scope .lede { font-size:13px; color:#3a424c; line-height:1.6; }
.bp-scope .badge { display:inline-block; margin:8px 0 4px; padding:5px 11px; border-radius:20px; font-size:11px;
  font-weight:700; background:rgba(22,194,232,.12); color:#0f93b0; }
.bp-scope .stats { display:flex; gap:10px; margin-top:auto; }
.bp-scope .stat { flex:1; background:var(--paper-2); border:1px solid var(--edge); border-radius:10px;
  padding:12px 8px; text-align:center; }
.bp-scope .stat b { display:block; font-size:20px; color:var(--accent-2); }
.bp-scope .stat span { font-size:10.5px; color:var(--muted); }

.bp-scope .skill-group { margin-bottom:11px; }
.bp-scope .skill-group .label { font-size:11px; font-weight:800; color:var(--muted); text-transform:uppercase;
  letter-spacing:.7px; margin-bottom:6px; }
.bp-scope .chips { display:flex; flex-wrap:wrap; gap:6px; }
.bp-scope .chip { display:inline-flex; align-items:center; gap:6px; padding:5px 9px; border-radius:9px;
  font-size:11px; font-weight:600; background:var(--paper-2); color:#36405a; border:1px solid var(--edge); }
.bp-scope .chip .dot { width:7px; height:7px; border-radius:50%; background:var(--accent); }
.bp-scope .chip.fw .dot { background:var(--accent-2); }
.bp-scope .chip.st .dot { background:#ff8a3d; }
.bp-scope .chip.be .dot { background:#21b573; }

.bp-scope .pcards { display:flex; flex-direction:column; gap:12px; flex:1; min-height:0; }
.bp-scope .pcard { display:flex; flex-direction:column; flex:1; min-height:0; text-decoration:none; color:inherit;
  background:#fff; border:1px solid var(--edge); border-radius:12px; overflow:hidden;
  box-shadow:0 5px 14px rgba(0,0,0,.08); transition:transform .2s, box-shadow .2s, border-color .2s; }
.bp-scope .pcard:hover { transform:translateY(-3px); box-shadow:0 10px 22px rgba(0,0,0,.16); border-color:var(--accent); }
.bp-scope .pcard-img { width:100%; flex:1; min-height:0; object-fit:cover; object-position:top center; display:block;
  background:linear-gradient(135deg,var(--accent),var(--accent-2)); border-bottom:1px solid var(--edge); }
.bp-scope .pcard-body { padding:8px 12px 10px; }
.bp-scope .pcard-body h4 { font-size:13px; display:flex; align-items:center; gap:5px; color:#222a36; }
.bp-scope .pcard-body h4 .ext { color:var(--accent); font-size:11px; }
.bp-scope .pcard-body p { font-size:11px; color:var(--muted); margin-top:2px; }

.bp-scope .exp { margin-bottom:12px; padding:11px 13px; background:var(--paper-2); border:1px solid var(--edge); border-radius:10px; }
.bp-scope .exp-head { display:flex; justify-content:space-between; align-items:baseline; }
.bp-scope .exp-head h4 { font-size:13.5px; color:#222a36; }
.bp-scope .exp-head span { font-size:11px; font-weight:700; color:var(--accent-2); }
.bp-scope .exp-co { font-size:11.5px; color:var(--muted); margin:1px 0 6px; }
.bp-scope .exp-list { margin:0; padding-left:16px; }
.bp-scope .exp-list li { font-size:11.5px; color:#3a424c; line-height:1.5; margin-bottom:2px; }

.bp-scope .svc-grid { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }
.bp-scope .svc { font-size:11px; padding:5px 9px; border-radius:7px; background:var(--paper-2); border:1px solid var(--edge); color:#41495a; }
.bp-scope .tier { display:flex; justify-content:space-between; align-items:center; padding:9px 12px;
  border:1px solid var(--edge); border-radius:10px; margin-bottom:8px; background:var(--paper-2); }
.bp-scope .tier .name { font-size:12.5px; font-weight:700; }
.bp-scope .tier .name small { display:block; font-weight:500; color:var(--muted); font-size:10.5px; }
.bp-scope .tier .price { font-size:14px; font-weight:800; color:var(--accent-2); }

.bp-scope .contact-row { display:flex; align-items:center; gap:11px; font-size:12.5px; margin-bottom:11px; color:#36405a; }
.bp-scope .contact-row .ic { width:30px; height:30px; border-radius:8px; background:var(--paper-2); border:1px solid var(--edge);
  display:grid; place-items:center; color:var(--accent); font-size:13px; font-weight:700; }
.bp-scope .btn-row { margin-top:auto; display:flex; gap:10px; }
.bp-scope .btn { flex:1; text-align:center; padding:10px; border-radius:9px; font-size:12px; font-weight:700;
  cursor:pointer; border:none; text-decoration:none; }
.bp-scope .btn.primary { background:linear-gradient(135deg,var(--accent),var(--accent-2)); color:#fff; }
.bp-scope .btn.ghost { background:var(--paper-2); color:var(--accent-2); border:1px solid var(--edge); }

.bp-scope .page-num { position:absolute; bottom:12px; font-size:11px; color:#b9b29c; }
.bp-scope .page-num.l { left:18px; } .bp-scope .page-num.r { right:18px; }

.bp-scope .controls { display:flex; gap:12px; align-items:center; }
.bp-scope .nav { background:#141b29; color:#e7edf7; border:1px solid #2a3650; width:46px; height:46px;
  border-radius:50%; cursor:pointer; font-size:18px; transition:background .2s, transform .2s; }
.bp-scope .nav:hover:not(:disabled) { background:var(--accent); transform:translateY(-2px); }
.bp-scope .nav:disabled { opacity:.35; cursor:not-allowed; }
.bp-scope .progress { color:#9aa6bd; font-size:13px; min-width:120px; text-align:center; }

@media (max-width:560px) {
  .bp-scope { padding:48px 10px 32px; }
  .bp-scope .pg { padding:16px 14px 22px; }
  .bp-scope .scene { perspective:1500px; }
  /* gentler tilt + no float on small screens to avoid overflow */
  .bp-scope .book { animation:bpSpreadIn .6s ease both; transform:rotateX(12deg) rotateY(0deg); }
  .bp-scope .book:hover { transform:rotateX(12deg); }
  .bp-scope .block, .bp-scope .sheen { display:none; }
  .bp-scope .bp-spot { width:480px; height:480px; }
  .bp-scope .stat b { font-size:16px; }
  .bp-scope .progress { min-width:90px; font-size:12px; }
  .bp-scope .avatar { width:50px; height:50px; }
}
@media (prefers-reduced-motion:reduce) {
  .bp-scope .leaf, .bp-scope .book { transition:none; }
  .bp-scope .book, .bp-scope .floor, .bp-scope .bp-spot, .bp-scope .sheen,
  .bp-scope .b3c-gloss, .bp-scope .pt, .bp-scope .lift, .bp-scope .b3c-tap,
  .bp-scope .b3c-inner .b3c-tap { animation:none !important; }
  .bp-scope .book { transform:rotateX(18deg) rotateY(-1deg); }
  .bp-scope .pt { opacity:0; }
}
`;
