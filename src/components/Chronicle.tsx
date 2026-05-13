"use client";
import { useChronicles } from "@/Services/useChronicles";
import React, { useEffect } from "react";
import { Loader } from "./loader";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  formatShortDate,
  getChronicleImageSource,
  isRemoteImageSource,
} from "@/Services/helpers";
import Image from "next/image";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import SocialShareButtons, {
  shareToLinkedIn,
  shareToTwitter,
} from "./SocialShare";
import ChronicleCard from "./ChronicleCard";
import Button from "./Button";
import { getSavedTab, saveTab } from "@/Services/saveLocalStorage";
import { slugify } from "@/Services/helpers";


function Chronicle({ params }: { params: Promise<{ articleDetail: string }> }) {
  const { articleDetail } = React.use(params);
  const {
    posts,
    fetchSinglePost,
    singlePost,
    singlePostLoading,
    singlePostError,
  } = useChronicles();
  useEffect(() => {
    if (!localStorage.getItem("tab")) {
      saveTab(0, "All articles");
    }
  }, []);
  useEffect(() => {
    if (articleDetail) {
      fetchSinglePost(articleDetail);
    }
  }, [articleDetail]);


  if (singlePostLoading)
    return (
      <div className="px-5 lg:px-10 py-10 md:py-20">
        <Loader />
      </div>
    );
  if (singlePostError)
    return (
      <div className="px-5 lg:px-[100px] py-10 md:py-20 flex flex-col gap-4">
        Error... {singlePostError}
        <Link href="/chronicles">
          <Button text="Refresh" className="uppercase w-fit" />
        </Link>
      </div>
    );
  if (!singlePost) return;
  const readTime =
    singlePost.yoast_head_json?.twitter_misc?.["Est. reading time"] ||
    singlePost.readTime ||
    "5 mins";
  const featuredImage = getChronicleImageSource(
    singlePost._embedded?.["wp:featuredmedia"]?.[0],
    singlePost.image
  );
  const featuredImageAlt =
    singlePost._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    singlePost.title.rendered;
  const shouldBypassOptimization = isRemoteImageSource(featuredImage);
  return (
    <div className="w-full">
      {singlePostLoading ? (
        <div className="px-5 lg:px-10 py-10 md:py-20 ">
          <Loader />
        </div>
      ) : singlePostError ? (
        <div className="px-5 lg:px-[100px] py-10 md:py-20 flex flex-col gap-4">
          Error... {singlePostError}
          <Link href="/chronicles">
            <Button text="Refresh" className="uppercase w-fit" />
          </Link>
        </div>
      ) : !singlePost ? (
        <p className="font-helvetica-bold text-2xl py-20 px-5 lg:px-10">
          Post cannot be found...
          <Link href="/chronicles">
            <Button text="Refresh" className="uppercase w-fit" />
          </Link>
        </p>
      ) : (
        <>
          {" "}
          <div className="flex flex-col gap-6 px-5 md:px-10 xl:px-[100px]">
            <p className="flex items-center gap-4 w-full sm:w-3/6 xl:w-4/6 max-w-[490px] uppercase font-inter  font-medium py-[37px] text-[12px]">
              <Link href={`/chronicles`}>
                <span className="text-[#616569]">
                  {getSavedTab().name}
                </span>
              </Link>
              <span className="text-dodo-black text-3xl ">
                <MdKeyboardArrowRight />
              </span>
              <span className="text-dodo-black">
                {singlePost._embedded?.["wp:term"]
                  ?.flatMap((terms) =>
                    terms?.filter((term) => term?.taxonomy === "category")
                  )
                  .map((category) => (
                    <span className="uppercase" key={category.id}>
                      {category.name} {`${""}`}
                    </span>
                  ))}
              </span>
            </p>

            <div className="flex flex-col gap-6">
              <section className="texts flex flex-col gap-4">
                <p className="font-inter font-medium text-sm text-[#616569] uppercase">
                  <span>
                    {formatShortDate(singlePost.date)} |{" "}
                    {readTime.substring(0, 5).toUpperCase()}{" "}
                    READ{" "}
                  </span>
                </p>

                <div className="flex flex-col gap-2">
                  <h1
                    className="w-full sm:w-[60%] lg:w-6/8 2xl:w-[70%] text-2xl lg:text-[40px] text-dodo-black font-inter font-bold leading-[120%] tracking-[-3%]"
                    dangerouslySetInnerHTML={{
                      __html: singlePost?.title?.rendered,
                    }}
                  ></h1>
                  <p
                    className="w-full sm:w-[80%] lg:w-6/8 2xl:w-[70%] text-[20px] leading-[140%] tracking-[-3%] text-dodo-black"
                    dangerouslySetInnerHTML={{
                      __html: singlePost.wps_subtitle || "",
                    }}
                  ></p>
                </div>
              </section>

              <p className="text-dodo-black flex flex-wrap gap-1 text-sm leading-[14px] tracking-[-3%]">
                Written by{" "}
                <span className="capitalize">
                  {singlePost.authors[0].display_name}
                </span>
                <span>
                  <span
                    className={`${
                      singlePost.authors.length > 1 ? "visisble" : "hidden"
                    }`}
                  >
                    Edited by
                  </span>
                  {singlePost.authors.slice(1).map((eachA, index) => (
                    <span key={index} className="capitalize">
                      {` ${eachA.display_name}`}
                      <span
                        className={`${
                          index === singlePost.authors.slice(1).length - 1
                            ? "hidden"
                            : "visible"
                        }`}
                      >
                        ,
                      </span>
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
          <main className="article-hero-image w-full pt-10">
            {shouldBypassOptimization ? (
              <img
                loading="eager"
                decoding="async"
                src={featuredImage}
                alt={featuredImageAlt}
                className="w-full object-cover"
              />
            ) : (
              <Image
                loading="eager"
                decoding="async"
                src={featuredImage}
                width={1200}
                height={630}
                alt={featuredImageAlt}
                priority
                className="w-full object-cover"
              />
            )}
          </main>
          <section className="article-body md:relative bg-dodo-grey-2 flex flex-col justify-center items-center  py-10 lg:py-20 px-5 lg:px-10 xl:px-60 ">
            <div className="article-socials xl:absolute xl:top-30 md:left-40 flex xl:flex-col justify-start xl:justify-center items-start gap-5">
              <GrLinkedinOption
                className="text-xl lg:text-2xl hover:scale-125 cursor-pointer transition-all  duration-300"
                onClick={() => shareToLinkedIn(singlePost.link)}
              />
              <RiTwitterXLine
                className="text-xl lg:text-2xl hover:scale-125 cursor-pointer transition-all  duration-300"
                onClick={() =>
                  shareToTwitter(
                    singlePost.title.rendered,
                    singlePost.link,
                    singlePost.excerpt.rendered
                  )
                }
              />
            </div>
            <div className="w-full max-w-[1180px]">
              <article
                className="text-justify w-full max-w-full lg:text-[22px] leading-[175%]
    [&>p]:py-3 [&_strong]:font-helvetica-bold [&>h1]:pt-8 [&>h2]:pt-6 [&>h3]:pt-4
    [&_.has-text-align-center]:text-center
    /* List styles */
    [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
    [&_li]:py-1 [&_li]:text-justify
    /* Image styles */
    [&_.wp-block-image]:w-full [&_.wp-block-image]:my-6
    [&_.wp-block-image_img]:w-full [&_.wp-block-image_img]:h-auto
    /* Caption styles */
    [&_.wp-block-image_figcaption]:text-center [&_.wp-block-image_figcaption]:self-center [&_.wp-block-image_figcaption]:mx-auto [&_.wp-block-image_figcaption]:lg:w-2/3 [&_.wp-block-image_figcaption]:2xl:w-1/2 [&_.wp-caption-text]:text-center 
    [&_.wp-block-image_figcaption]:mt-2 [&_.wp-caption-text]:mt-2 
    [&_.wp-block-image_figcaption]:italic [&_.wp-block-image_figcaption]:text-dodo-black  [&_.wp-block-image_figcaption_em]:text-sm [&_.wp-block-image_figcaption_em]:sm:text-base [&_.wp-block-image_figcaption_em]:md:text-lg
    [&_.wp-caption-text]:text-sm [&_.wp-caption-text]:leading-[110%] [&_.wp-caption-text]:md:leading-[140%]"
                dangerouslySetInnerHTML={{
                  __html: singlePost.content?.rendered || "",
                }}
              />
            </div>
          </section>
          <section className="share-take-away w-full max-w-[800px] mx-auto px- lg:px-10 xl:px-0 py-10 xl:py-20 flex flex-col gap-10 items-start justify-between font-inter">
            <div className="texts-platform w-full bg-dodo-grey-2 flex flex-col gap-6 items-start justify-between p-5 xl:px-10 xl:py-6">
              <p className="font-bold text-dodo-black uppercase">
                Share takeaway
              </p>
              <div
                className="text-dodo-black pb-5 md:text-[20px] font-helvetica"
                dangerouslySetInnerHTML={{
                  __html: singlePost.excerpt?.rendered.replace(/<[^>]*>/g, ""),
                }}
              ></div>

              <SocialShareButtons
                articleUrl={singlePost.link}
                articleExcerpt={singlePost.excerpt.rendered}
                articleTitle={singlePost.title.rendered}
              />
            </div>

            <div className="">
              {singlePost.authors.map((author, i: number) => {
                return (
                  <div
                    className="authors flex flex-col lg:flex-row px-5 lg:px-0  items-start gap-6"
                    key={i}
                  >
                    <div className="img rounded-2xl w-[200px]">
                      {(author.avatar_url?.url2x || "/favicon.png").startsWith(
                        "http"
                      ) ? (
                        <img
                          loading="eager"
                          decoding="async"
                          src={author.avatar_url?.url2x || "/favicon.png"}
                          alt={`Picture of ${author.display_name}`}
                          className="w-full "
                        />
                      ) : (
                        <Image
                          loading="eager"
                          decoding="async"
                          src={author.avatar_url?.url2x || "/favicon.png"}
                          width={100}
                          height={100}
                          alt={`Picture of ${author.display_name}`}
                          className="w-full "
                        />
                      )}
                    </div>
                    <div className="author-profile flex flex-col items-start justify-between gap-4">
                      <p className="w-full lg:w-3/5">
                        {author.description ? (
                          <>
                            <span className="font-bold">
                              {author.description
                                .split(" ")
                                .slice(0, 2)
                                .join(" ")}
                            </span>{" "}
                            {author.description.split(" ").slice(2).join(" ")}
                          </>
                        ) : (
                          "Author bio not available"
                        )}
                      </p>
                      <div className="flex items-start justify-center gap-3">
                        {/* LinkedIn Icon */}
                        {singlePost.yoast_head_json?.schema?.[
                          "@graph"
                        ]?.[6]?.sameAs?.find((link) =>
                          link.includes("linkedin.com")
                        ) && (
                          <a
                            href={singlePost.yoast_head_json.schema[
                              "@graph"
                            ][6].sameAs.find((link) =>
                              link.includes("linkedin.com")
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GrLinkedinOption className="hover:scale-125 cursor-pointer transition-all duration-300" />
                          </a>
                        )}

                        {/* Twitter/X Icon */}
                        {singlePost.yoast_head_json?.schema?.[
                          "@graph"
                        ]?.[6]?.sameAs?.find(
                          (link) =>
                            link.includes("x.com") ||
                            link.includes("twitter.com")
                        ) && (
                          <a
                            href={singlePost.yoast_head_json?.schema[
                              "@graph"
                            ][6].sameAs.find(
                              (link) =>
                                link.includes("x.com") ||
                                link.includes("twitter.com")
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <RiTwitterXLine className="hover:scale-125 cursor-pointer transition-all duration-300" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
      <section
        className={` related-articles flex flex-col justify-start items-start gap-20 bg-dodo-grey-2 px-5 py-5 lg:py-20 lg:px-[100px]`}
      >
        <div className="flex flex-col gap-10">
          <div className="texts">
            <h2 className=" font-medium font-helvetica-medium text-[36px] text-dodo-black">
              Related articles
            </h2>
          </div>{" "}
          <div className="chronicles-grid w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14">
            {posts
              .filter((post) => Number(post.id) !== Number(articleDetail))
              .slice(0, 3)
              .map((chronicle, i: number) => {
                return <ChronicleCard key={i} chronicle={chronicle} />;
              })}
          </div>
        </div>
        <Link href="/chronicles">
          <Button text="See more" className="mb-10 lg:mb-20" />
        </Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: singlePost.title.rendered,
            description: singlePost.excerpt.rendered.replace(/<[^>]*>/g, ""),
            datePublished: singlePost.date,
            author: {
              "@type": "Person",
              name: singlePost.authors[0]?.display_name,
              url: singlePost.authors[0]?.user_url,
            },
            publisher: {
              "@type": "Organization",
              name: "DODO Design Agency",
              logo: {
                "@type": "ImageObject",
                url: "https://dododesign.africa/logo.png",
              },
            },
            image: singlePost._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":`https://dododesign.africa/chronicles/${articleDetail}?title=${slugify(singlePost.title.rendered)}`,
            },
          }),
        }}
      />
    </div>
  );
}

export default Chronicle;
