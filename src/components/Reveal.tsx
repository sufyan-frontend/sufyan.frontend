interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

// Scroll-reveal animation removed for faster perceived load — content now renders
// immediately (no initial opacity:0 waiting on Framer Motion to hydrate).
// delay/direction are accepted but ignored so existing call sites keep working.
export default function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
