import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts — Muhammad Sufyan | Frontend Updates",
  description:
    "Latest posts, updates, and insights from Muhammad Sufyan — frontend development, React, Next.js, and web technology.",
  alternates: { canonical: "https://sufyan-frontend.vercel.app/posts" },
  openGraph: {
    title: "Posts — Muhammad Sufyan",
    description:
      "Latest posts and updates from Muhammad Sufyan — frontend developer in Lahore, Pakistan.",
    url: "https://sufyan-frontend.vercel.app/posts",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630 }],
  },
};

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
