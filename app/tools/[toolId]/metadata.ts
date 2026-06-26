import type { Metadata } from "next";

import { ALL_TOOLS } from "@/constants/tools";

interface Props {
  params: Promise<{
    toolId: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ toolId: string }>;
}): Promise<Metadata> {
  const { toolId } = await params;

  const tool = ALL_TOOLS.find((t) => t.id === toolId);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: tool.seo.title,
    description: tool.seo.description,

    keywords: tool.seo.keywords,

    alternates: {
      canonical: `https://tool-stack-kappa.vercel.app${tool.href}`,
    },

    openGraph: {
      title: tool.seo.title,
      description: tool.seo.description,
      url: `https://tool-stack-kappa.vercel.app${tool.href}`,
      siteName: "Tool Stack",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: tool.seo.title,
      description: tool.seo.description,
      images: ["/og-image.png"],
    },
  };
}