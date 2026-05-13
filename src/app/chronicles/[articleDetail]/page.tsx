import { getBlogList } from "@/Services/getChronicles";
import Chronicle from "@/components/Chronicle";
import { Metadata, ResolvingMetadata } from "next";
import { slugify } from "@/Services/helpers";


type Props = {
  params: Promise<{ articleDetail: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { articleDetail } = await params;
    const { singlePost } = await getBlogList({ id: articleDetail });

    if (!singlePost) {
      return {
        title: "Article Not Found | DODO Design",
        description: "The requested article could not be found",
      };
    }

    const cleanExcerpt = singlePost.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .replace(/&[a-z]+;/g, "")
      .replace(/&(nbsp|amp|quot|lt|gt);/g, " ")
      .replace(/&[^;]+;/g, "")
      .replace(/[^\w\s.,!?']/g, "")
      .replace(/\s+/g, " ")
      .trim();

    return {
      title: `${singlePost.title.rendered} | DODO Design Chronicles`,
      description: cleanExcerpt.substring(0, 160),
      alternates: {
        canonical: `https://dododesign.africa/chronicles/${articleDetail}?title=${slugify(singlePost.title.rendered)}`,
      },
      openGraph: {
        title: singlePost.title.rendered,
        description: cleanExcerpt.substring(0, 300),
        url: `https://dododesign.africa/chronicles/${articleDetail}?title=${slugify(singlePost.title.rendered)}`,
        type: "article",
        publishedTime: singlePost.date,
        authors: ["DODO Design Agency"],
        images: singlePost._embedded?.["wp:featuredmedia"]?.[0]?.source_url
          ? [
              {
                url: singlePost._embedded["wp:featuredmedia"][0].source_url,
                width: 1200,
                height: 630,
                alt:
                  singlePost._embedded["wp:featuredmedia"][0]?.alt_text ||
                  singlePost.title.rendered,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: singlePost.title.rendered,
        description: cleanExcerpt.substring(0, 200),
        images: singlePost._embedded?.["wp:featuredmedia"]?.[0]?.source_url
          ? [singlePost._embedded["wp:featuredmedia"][0].source_url]
          : [],
      },
      ...(singlePost.yoast_head_json && {
        keywords: singlePost.yoast_head_json.keywords,
        robots: singlePost.yoast_head_json.robots,
      }),
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error | DODO Design",
      description: "An error occurred while loading this article",
    };
  }
}

function ArticleInnerPage({
  params,
}: {
  params: Promise<{ articleDetail: string }>;
}) {
  return <Chronicle params={params} />;
}

export default ArticleInnerPage;
