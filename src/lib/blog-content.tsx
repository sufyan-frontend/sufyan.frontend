import type { ReactNode } from "react";

/* ─── shared prose primitives ─── */
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-surface mt-12 mb-4">{children}</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-semibold text-surface mt-8 mb-3">{children}</h3>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="text-surface/70 leading-relaxed mb-4">{children}</p>
);
const Li = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-2 text-surface/70 mb-2">
    <span className="text-primary mt-1 shrink-0">▸</span>
    <span>{children}</span>
  </li>
);
const Ul = ({ children }: { children: ReactNode }) => (
  <ul className="mb-6">{children}</ul>
);
const Code = ({ children }: { children: ReactNode }) => (
  <code className="bg-white/5 text-primary font-mono text-sm px-1.5 py-0.5 rounded">{children}</code>
);
const Pre = ({ children }: { children: ReactNode }) => (
  <pre className="bg-card border border-white/5 rounded-xl p-5 overflow-x-auto text-sm font-mono text-surface/80 mb-6 leading-relaxed">
    {children}
  </pre>
);
const Tip = ({ children }: { children: ReactNode }) => (
  <div className="bg-primary/5 border-l-2 border-primary/40 rounded-r-xl px-5 py-4 mb-6 text-surface/70 text-sm leading-relaxed">
    <span className="text-primary font-semibold">Tip: </span>{children}
  </div>
);

/* ─── article map ─── */
export const blogContent: Record<string, ReactNode> = {

  "tailwind-css-tips": (
    <article>
      <P>
        Tailwind CSS has become the go-to styling solution for React developers — and for good reason.
        Its utility-first approach keeps styles close to markup, eliminates class name conflicts, and
        produces tiny production bundles. But as projects grow, messy Tailwind code is easy to write.
        Here are the practices I use on every React project to keep Tailwind clean and maintainable.
      </P>

      <H2>1. Always Use a Class Sorter</H2>
      <P>
        The single best habit you can build is consistent class ordering. Install the official
        Prettier plugin for Tailwind CSS — it automatically sorts your utility classes into a
        logical order every time you save.
      </P>
      <Pre>{`npm install -D prettier-prettier-plugin-tailwindcss

// prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}`}</Pre>
      <P>
        Consistent ordering means you spend zero mental energy deciding where <Code>flex</Code> goes
        relative to <Code>mt-4</Code>. Your diffs become easier to read in code review too.
      </P>

      <H2>2. Use <Code>clsx</Code> or <Code>cn</Code> for Conditional Classes</H2>
      <P>
        Avoid template literals for conditional classes — they get unreadable fast. Instead, use
        <Code>clsx</Code> combined with <Code>tailwind-merge</Code> (commonly wrapped in a <Code>cn</Code> helper).
      </P>
      <Pre>{`import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Usage
<button
  className={cn(
    "px-4 py-2 rounded-lg font-medium transition-colors",
    isActive && "bg-primary text-dark",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
>
  Click me
</button>`}</Pre>
      <P>
        <Code>tailwind-merge</Code> is important here — it resolves conflicts when two classes target
        the same property (e.g. <Code>p-4</Code> and <Code>p-2</Code>), keeping only the last one.
        Without it, you get unexpected styles in production.
      </P>

      <H2>3. Extract Components, Not <Code>@apply</Code></H2>
      <P>
        When you find yourself repeating the same ten classes across your codebase, your first instinct
        might be to use <Code>@apply</Code> in a CSS file. Resist it. Tailwind's own documentation
        recommends against it for most cases.
      </P>
      <P>
        Instead, extract a React component:
      </P>
      <Pre>{`// ❌ Using @apply
// button.css
.btn-primary {
  @apply px-4 py-2 bg-primary text-dark rounded-lg font-semibold;
}

// ✅ Extract a component
function Button({ children, className }) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-primary text-dark rounded-lg font-semibold hover:opacity-90",
        className
      )}
    >
      {children}
    </button>
  );
}`}</Pre>
      <Tip>
        Components give you props, TypeScript types, and reusability. <Code>@apply</Code> gives you
        none of those — it just moves the problem to a CSS file.
      </Tip>

      <H2>4. Design Your Spacing Scale in <Code>tailwind.config</Code></H2>
      <P>
        Arbitrary values like <Code>mt-[13px]</Code> are a code smell. If you find yourself reaching
        for them often, your design tokens are not set up correctly. Define your brand spacing,
        colours, and font sizes in <Code>tailwind.config.ts</Code>:
      </P>
      <Pre>{`// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#38BDF8",
        accent: "#818CF8",
        dark: "#0F172A",
        card: "#1E293B",
        surface: "#F1F5F9",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
}`}</Pre>
      <P>
        Every arbitrary value you replace with a design token is one less magic number in your codebase.
      </P>

      <H2>5. Responsive Design — Mobile First, Always</H2>
      <P>
        Tailwind is mobile-first by default. Write your base styles for small screens, then add
        breakpoint prefixes to override for larger screens:
      </P>
      <Pre>{`// ✅ Correct — mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// ❌ Wrong — fighting against Tailwind's defaults
<div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">`}</Pre>
      <Ul>
        <Li>Start with the narrowest layout (single column)</Li>
        <Li>Use <Code>sm:</Code>, <Code>md:</Code>, <Code>lg:</Code>, <Code>xl:</Code> to progressively enhance</Li>
        <Li>Test on a real mobile device, not just browser devtools</Li>
      </Ul>

      <H2>6. Group Related Classes for Readability</H2>
      <P>
        On complex components, long class strings become hard to scan. A practical pattern is to
        group classes by concern using a multiline format and <Code>cn</Code>:
      </P>
      <Pre>{`<div
  className={cn(
    // layout
    "flex flex-col items-start gap-4 p-6",
    // appearance
    "bg-card border border-white/5 rounded-2xl",
    // interaction
    "hover:border-primary/20 transition-all duration-300",
    // typography
    "text-surface text-sm"
  )}
/>`}</Pre>
      <P>
        This pattern makes pull request reviews much easier — a reviewer can immediately see which
        concern a changed class belongs to.
      </P>

      <H2>7. Dark Mode — Use CSS Variables</H2>
      <P>
        If your project supports dark mode, configure Tailwind to use the <Code>class</Code> strategy
        and drive your theme with CSS variables. This gives you smooth theme switching without
        duplicating every class:
      </P>
      <Pre>{`// tailwind.config.ts
export default {
  darkMode: "class",
}

// globals.css
:root {
  --bg: #ffffff;
  --text: #0f172a;
}
.dark {
  --bg: #0f172a;
  --text: #f1f5f9;
}`}</Pre>

      <H2>Key Takeaways</H2>
      <Ul>
        <Li>Install <Code>prettier-plugin-tailwindcss</Code> — consistent class order is free</Li>
        <Li>Use <Code>cn()</Code> with <Code>tailwind-merge</Code> for all conditional classes</Li>
        <Li>Extract React components instead of using <Code>@apply</Code></Li>
        <Li>Define your design tokens in <Code>tailwind.config.ts</Code> — avoid arbitrary values</Li>
        <Li>Always write mobile-first — base styles for small, breakpoints to enhance</Li>
      </Ul>

      <P>
        Tailwind CSS rewards consistency. The more intentional you are about these patterns from day one,
        the easier your codebase becomes to maintain at scale. Happy styling!
      </P>
    </article>
  ),
};
