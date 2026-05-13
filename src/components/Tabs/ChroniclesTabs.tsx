"use client";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import ChronicleCard, { Term } from "../ChronicleCard";
import Button from "../Button";
import { useChronicles } from "@/Services/useChronicles";
import { Loader } from "../loader";
import { BASEURL, fallbackCategories } from "@/Services/getChronicles";
import { getSavedTab, saveTab } from "@/Services/saveLocalStorage";
import Link from "next/link";

interface Author {
  avatar_url: { url: string; url2x: string };
  description: string;
  display_name: string;
  first_name: string;
  is_guest: number;
  job_title: string;
  last_name: string;
  slug: string;
  term_id: 22;
  user_id: 4;
  user_url: string;
}
export interface IPost {
  image: string;
  id: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  title: { rendered: string };
  wps_subtitle?: string;
  yoast_head_json?: {
    schema?: {
      "@context"?: string;
      "@graph"?: Array<{
        "@type"?: string;
        "@id"?: string;
        isPartOf?: { "@id"?: string };
        author?: {
          "@id"?: string;
        };
        headline?: string;
        inLanguage?: string;
        url?: string;
        name?: string;
        description?: string;
        breadcrumb?: { "@id"?: string };
        image?: {
          "@id"?: string;
        };
        sameAs?: string[];
        logo?: {
          "@id"?: string;
        };
        itemListElement?: Array<{
          "@type"?: string;
          position?: number;
          name?: string;
          item?: string;
        }>;
      }>;
    };
    twitter_misc: { "Est. reading time": string };
  };
  link: string;

  authors: Author[];
  content: { rendered: string };
  excerpt: { rendered: string };
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
}

const TabContent = ({ posts }: { posts: IPost[] }) => (
  <section
    className={`w-full flex flex-col justify-start items-start gap-10 bg-dodo-grey-2`}
  >
    {posts[0] && (
      <ChronicleCard
        chronicle={posts[0]}
        className={`border-b border-b-dodo-black pb-[32px] h-fit`}
      />
    )}
    {posts.length > 1 && (
      <div className="texts flex flex-col gap-6">
        <h2 className=" font-medium font-helvetica-medium text-2xl lg:text-[36px] text-dodo-black">
          Latest from our Chronicles
        </h2>
        <p className="text-lg lg:text-[24px] leading-[120%] text-dodo-black  lg:w-4/5 xl:w-3/6 2xl:w-4/6">
          Join us as we explore how HCD is shaping solutions to local needs in
          Africa
        </p>
      </div>
    )}
    <div
      className="chronicles-grid w-full grid grid-cols-1 md:grid-cols-2
           xl:grid-cols-3 gap-10"
    >
      {posts.slice(1).map((chronicle, i: number) => {
        return (
          <ChronicleCard
            key={i}
            chronicle={chronicle}
            className={`${
              posts.length - 1 === i ? "border-0" : "border-b"
            } border-b-dodo-black pb-[32px]`}
          />
        );
      })}
    </div>
  </section>
);

const ChroniclesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const {
    posts,
    loading,
    error,
    handleSearch,
    filterByCategory,
    loadMore,
    hasMore,
  } = useChronicles();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveTab(getSavedTab().id);
    }
  }, []);

  // Fetch categories from WordPress
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASEURL}/wp-json/wp/v2/categories`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setCategories(data);

        // Set default tab if not already set
        if (!localStorage.getItem("tab")) {
          saveTab(0, "All articles");
        } else {
          setActiveTab(getSavedTab().id);
        }
      } catch (err) {
        setCategories(fallbackCategories.slice(1));
      }
    };

    fetchCategories();
  }, []);

  // Get the 4 main categories we want to display (plus "All articles")
  const mainCategories = [
    { id: 0, name: "All articles", slug: "all" },
    ...categories.filter((cat) =>
      ["case-study", "research-tips", "tools", "team-stories"].includes(
        cat.slug
      )
    ),
  ];

  // Get remaining categories for the dropdown
  const moreCategories = categories
    .filter((cat) => !mainCategories.some((mainCat) => mainCat.id === cat.id))
    .filter((cat) => cat.slug !== "uncategorized");

  const handleTabChange = (categoryId: number, categoryName: string) => {
    setActiveTab(categoryId);
    saveTab(categoryId, categoryName);
    setSearchInput(() => " ");
    filterByCategory(categoryId === 0 ? [] : [categoryId]);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    handleSearch(value);
  };

  if (error)
    return (
      <div className=" flex flex-col gap-4">
        Error...{" "}
        <Link href="/chronicles">
          <Button text="Refresh" className="uppercase w-fit" />
        </Link>
      </div>
    );
  return (
    <div
      className="w-full"
      onClick={(e) => {
        e.stopPropagation();
        showMoreDropdown && setShowMoreDropdown((prev) => !showMoreDropdown);
      }}
    >
      {/* Tab Buttons */}
      <div className="tabs-container w-full flex flex-col xl:flex-row xl:items-center gap-5 xl:justify-between sm:w-4/5 md:w-full lg:w-full xl:w-5/5 md:gap-5 xl:gap-10 px-5 md:px-10 lg:px-[100px] pb-5 md:pb-10">
        <div className="w-full grid grid-cols-3 md:flex md:gap-6 text-start lg:gap-10 items-center">
          {mainCategories.slice(0, 2).map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(category.id, category.name)}
              className={`mobile-screen flex md:hidden w-fit md:py-[10px] text-start lg:text-center md:text-2xl transition cursor-pointer ${
                activeTab === category.id
                  ? "border-b-2 font-helvetica-medium border-dodo-black text-dodo-black"
                  : "text-black hover:text-dodo-black"
              }`}
            >
              {category.name}
            </button>
          ))}
          {mainCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(category.id, category.name)}
              className={`large-screen hidden md:flex w-fit lg:py-0 text-start lg:text-center text-sm sm:text-base md:text-xl xl:text-2xl transition cursor-pointer ${
                activeTab === category.id
                  ? "border-b-2 font-helvetica-medium border-dodo-black text-dodo-black"
                  : "text-black hover:text-dodo-black"
              }`}
            >
              {category.name}
            </button>
          ))}

          {moreCategories.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                className="flex items-center gap-0 text-sm sm:text-base md:text-xl xl:text-2xl text-black hover:text-dodo-black cursor-pointer"
              >
                More <BiChevronDown className="text-xl" />
              </button>

              {showMoreDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-dodo-grey-3/20">
                  {mainCategories.slice(2).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        handleTabChange(category.id, category.name);
                        setShowMoreDropdown(false);
                      }}
                      className={`block md:hidden w-full text-left px-4 py-2 text-sm sm:text-base md:text-lg text-black hover:bg-dodo-grey-2 cursor-pointer  ${
                        activeTab === category.id
                          ? "border-b-2 font-helvetica-medium border-dodo-black text-dodo-black"
                          : "text-black hover:text-dodo-black "
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                  {moreCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        handleTabChange(category.id, category.name);
                        setShowMoreDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm sm:text-base md:text-lg text-black hover:bg-dodo-grey-2 cursor-pointer  ${
                        activeTab === category.id
                          ? "border-b-2 font-helvetica-medium border-dodo-black text-dodo-black"
                          : "text-black hover:text-dodo-black"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className={` xl:w-1/4 md: flex items-center gap-4 border-b border-[#616569]`}
          onClick={handleContainerClick}
        >
          <BiSearch className="text-2xl text-dodo-grey-3" />
          <input
            type="text"
            ref={searchInputRef}
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search for article"
            className="placeholder:text-[#616569] text-black placeholder:text-sm text-lg lg:text-[20px] leading-[120%] w-full h-full p-2 lg:p-3 ring-0 outline- outline-0 "
          />
        </div>
      </div>

      {/* Tab Content - Render Component */}
      <div className="bg-dodo-grey-2 px-5 lg:px-[100px] lg:py-20">
        {loading ? (
          <div className="">
            <Loader />
          </div>
        ) : error ? (
          <div className=" flex flex-col gap-4">
            Error...{" "}
            <Link href="/chronicles">
              <Button text="Refresh" className="uppercase w-fit" />
            </Link>
          </div>
        ) : !posts.length ? (
          <div className="flex flex-col py-20 px-5 lg:px-10 gap-4">
            <p className=" text-2xl ">
              Post not found
              {/* <Link href={"/chronicles"} className="underline ">
                <span className="font-helvetica-medium">please refresh</span>
              </Link> */}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-start">
            <TabContent posts={posts} />
            {hasMore && (
              <div className="flex justify-center my-10">
                <Button
                  text={`${loading ? "Loading..." : "See more"}`}
                  onClick={loadMore}
                  disabled={loading}
                  className={`w-[250px] uppercase`}
                />
                {loading && <Loader />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChroniclesTabs;
