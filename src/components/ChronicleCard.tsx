"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import ReadArrow from "./ReadArrow";
import {
  formatShortDate,
  getChronicleImageSource,
  isRemoteImageSource,
  slugify,
} from "@/Services/helpers";
import { usePathname, useRouter } from "next/navigation";
import { saveTab } from "@/Services/saveLocalStorage";

export interface Term {
  id: number;
  name: string;
  slug: string;
  taxonomy: "category" | "post_tag";
}
interface IChronicleCard {
  chronicle: {
    image: string;
    id: string;
    category: string;
    readTime: string;
    title: { rendered: string };
    wps_subtitle?: string;
    yoast_head_json?: {
      twitter_misc: { "Est. reading time": string };
    };

    _embedded?: {
      "wp:term"?: Term[][];
      "wp:featuredmedia"?: Array<{
        source_url: string;
        featuredMedia: { alt_text: string };
        alt_text: string;
        media_details?: {
          sizes?: {
            medium?: { source_url: string };
            large?: { source_url: string };
            thumbnail?: { source_url: string };
          };
        };
      }>;
    };
    date: string;
  };
  className?: string;
}
function ChronicleCard({ chronicle, className }: IChronicleCard) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const featuredImage = getChronicleImageSource(
    chronicle?._embedded?.["wp:featuredmedia"]?.[0],
    chronicle?.image
  );
  const featuredImageAlt =
    chronicle?._embedded?.["wp:featuredmedia"]?.[0]?.featuredMedia?.alt_text ||
    chronicle?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    chronicle?.title?.rendered ||
    "Chronicle image";
  const shouldBypassOptimization = isRemoteImageSource(featuredImage);
  const readTime =
    chronicle.yoast_head_json?.twitter_misc?.["Est. reading time"] ||
    chronicle.readTime ||
    "5 mins";

  return (
    <Link
      href={`/chronicles/${chronicle.id}?title=${slugify(
        chronicle.title.rendered
      )}`}
      onClick={() => {
        pathName.includes("/chronicles")
          ? ""
          : saveTab(
              chronicle._embedded?.["wp:term"]?.flatMap((terms) =>
                terms?.filter((term) => term?.taxonomy === "category")
              )[0].id || 0,
              chronicle._embedded?.["wp:term"]?.flatMap((terms) =>
                terms?.filter((term) => term?.taxonomy === "category")
              )[0].name || "All articles"
            );
      }}
    >
      <div
        ref={cardRef}
        className={`w-full h-full group relative flex flex-col gap-[20.45px] overflow-hidden cursor-pointer ${className}`}
      >
        <div
          ref={imageRef}
          className={`w-full ${
            className?.includes("h-fit") ? "h-fit" : "h-[300px] xl:h-[400px]"
          } overflow-hidden`}
        >
          {shouldBypassOptimization ? (
            <img
              loading="eager"
              decoding="async"
              src={featuredImage}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out lg:group-hover:scale-110"
              alt={featuredImageAlt}
            />
          ) : (
            <Image
              loading="eager"
              decoding="async"
              src={featuredImage}
              height={50}
              width={1050}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out lg:group-hover:scale-110"
              alt={featuredImageAlt}
            />
          )}
        </div>
        <div
          className={`flex flex-col gap-3 transition-all duration-500 ease-in-out   ${
            className?.includes("h-fit")
              ? "group-hover:translate-y-  group-hover:pb-[px]"
              : "group-hover:translate-y-0"
          } 
          `}
        >
          <p
            className={`chronicle-info w-full flex justify-between items-center font-inter font-medium text-dodo-black leading-[100%] tracking-[-0.05px] mb-[15px] uppercase  ${
              className?.includes("h-fit") ? "text-[14px]" : "text-sm"
            }`}
          >
            {chronicle._embedded?.["wp:term"]
              ?.flatMap((terms) =>
                terms?.filter((term) => term?.taxonomy === "category")
              )
              .map((category) => (
                <span className="uppercase" key={category.id}>
                  {category.name}
                </span>
              ))}
            <span>
              {formatShortDate(chronicle.date)} |{" "}
              {readTime.substring(0, 5).toUpperCase()}{" "}
              READ
            </span>
          </p>
          <div className="flex flex-col gap-3">
            <h3
              className={`lg:w-[95%] font-helvetica-bold   text-dodo-black ${
                className?.includes("h-fit")
                  ? "text-[20px] leading-[140%] md:leading-[100%] md:text-2xl lg:text-[32px]"
                  : "text-[20px] leading-[140%] md:leading-[100%] md:text-xl lg:text-2xl"
              }`}
              dangerouslySetInnerHTML={{ __html: chronicle.title?.rendered }}
            ></h3>
            <h4
              className={` text-dodo-black lg:w-[95%] xl:w-[70%] line-clamp-2 leading-[120%] tracking-[0%] ${
                className?.includes("h-fit") ? "text-lg md:text-2xl" : "text-lg"
              }`}
              dangerouslySetInnerHTML={{
                __html: chronicle?.wps_subtitle || "",
              }}
            ></h4>
          </div>
          <div ref={arrowRef} className="pt-[5px]">
            <ReadArrow
              text="read article"
              className={`leading-[100%] tracking-[-0.5px] ${
                className?.includes("h-fit") ? "text-[14px]!" : "text-sm!"
              }`}
              // id={chronicle.id}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChronicleCard;
