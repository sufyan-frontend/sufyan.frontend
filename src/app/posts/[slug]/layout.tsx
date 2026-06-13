import type { Metadata } from "next";

const SITE_URL = "https://sufyan-frontend.vercel.app";
const BACKEND = "https://sufyan-backend.vercel.app";

async function fetchPost(slug: string) {
  try {
    const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return "post" in data ? data.post : data;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);

  const canonicalUrl = `${SITE_URL}/posts/${slug}`;

  if (!post) {
    return {
      title: "Post Not Found — Muhammad Sufyan",
      openGraph: { title: "Post Not Found", url: canonicalUrl },
    };
  }

  const ogImage = post.image
    ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
    : [{ url: `${SITE_URL}/profile.png`, width: 1200, height: 630, alt: post.title }];

  return {
    title: `${post.title} — Muhammad Sufyan`,
    description: post.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Muhammad Sufyan",
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [`${SITE_URL}/profile.png`],
      creator: "@sufyan_dev",
    },
  };
}

export default function PostSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
