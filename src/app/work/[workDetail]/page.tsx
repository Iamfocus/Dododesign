// 'use client'
import WorkDetail from "@/components/Tabs/WorkDetail";
import { projectDetails } from "@/Data/projectGrid";
import { slugify } from "@/Services/helpers";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ workDetail: string }>;
}): Promise<Metadata> {
  const { workDetail } = await params;

  const projectInView = projectDetails.filter(
    (project) => project.id === Number(workDetail)
  )[0];

  if (!projectInView) {
    return {
      title: "Project Not Found | DODO Design",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: projectInView.title + " | DODO Design Agency - Africa",
    description: projectInView.description.substring(0, 160),
    alternates: {
      canonical: `https://dododesign.africa/work/${workDetail}?title=${slugify(projectInView.title)}`,
    },
    openGraph: {
      title: `${projectInView.title} | Our Work`,
      description: projectInView.description.substring(0, 300),
      url: `https://dododesign.africa/work/${workDetail}?title=${slugify(projectInView.title)}`,
      images: [
        {
          url: projectInView.heroImage,
          width: 1200,
          height: 630,
          alt: `Our project: ${projectInView.title} - ${projectInView.client}`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectInView.title} | Our Work`,
      description: projectInView.description.substring(0, 300),
      images: [projectInView.heroImage],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ workDetail: string }>;
}) {
  return <WorkDetail params={params} />;
}
