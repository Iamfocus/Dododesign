import AboutProjectGrid from "@/components/AboutProjectGrid";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Chronicles from "@/components/Chronicles";
import PagesHeader from "@/components/PagesHeader";
import Project5Grid from "@/components/Project5Grid";
import ReadArrow from "@/components/ReadArrow";
import Team from "@/components/Team";
import { baseMetadata } from "@/Services/shared-metadata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

export const metadata = {
  ...baseMetadata,
  title: "About DODO",
  description:
    "DODO is a research-driven design consultancy, based out of Africa. We're built to help businesses discover their market's true needs and bring valuable solutions to market.",
};
function page() {
  return (
    <div className=" bg-white w-full ">
      <PagesHeader
        title="About Us"
        description="DODO is a research-driven design consultancy, based out of Africa. We're built to help businesses discover their market's true needs and bring valuable solutions to market."
      />

      <section className="hero-image w-full">
        <Image
          loading="eager"
          decoding="async"
          src="/Images/Pages/aboutUsHero.png"
          width={2050}
          height={50}
          alt="image of service flow"
          className="w-full"
        />
      </section>
      <section className="w-full px-5 md:px-10 py-20 flex flex-col lg:flex-row items-start lg:items-start  lg:gap-12 text-2xl sm:text-4xl text-dodo-black xl:py-[120px] xl:px-40">
        <div className="accordion w-full flex flex-col items-start justify-between gap-10">
          <p className="text-2xl md:text-[40px] leading-[100%] font-helvetica-medium">Our Core Principles</p>
          <Accordion />
        </div>{" "}
        <div className="image">
          <Image
            loading="eager"
            decoding="async"
            src="/Images/Pages/accordionImage.png"
            width={1050}
            height={1050}
            alt="A picture of the team at work together"
          />
        </div>
      </section>

      <Team />
      {/* <div className="w-full flex flex-col sm:hidden gap-10 items-start p-5 pt-[95px]">
        <div className="w-full flex sm:hidden items-start">
          <Image
            loading="eager"
            decoding="async"
            src={"/Images/Pages/HNIsm.png"}
            width={1050}
            height={50}
            alt="Image of a project for high network individual"
            className="w-full"
          />
        </div>{" "} */}
        {/* <div className="w-[383px] bg-white flex flex-col gap-2 rounded-sm">
          <div className="flex flex-col gap-2">
            <p className="font-helvetica-bold text-[32px] leading-[120%] tracking-[0%] text-dodo-yellow">
              Improving targeting strategy for HNIs
            </p>
            <p className="w-3/4 font-inter font-medium leading-[150%] tracking-[-0.5px] text-dodo-black">
              Designing a Solution for Nigeria's Wealthiest Individuals
            </p>
          </div>
          <Link
            href={`/work/${2}`}
            className="flex items-center gap-[6px] pt-3 font-inter font-medium uppercase text-sm leading-[140%] tracking-[-0.5px] text-dodo-black  "
          >
            See Project <IoArrowForward />
          </Link>{" "}
        </div> */}
      {/* </div> */}
      {/* <div
        style={{
          backgroundImage: `url('/Images/Pages/HNI.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="w-full sm:h-[800px]  hidden sm:flex items-start p-10"
      >
        <div className="w-[547px] bg-white flex flex-col gap-4 p-8 rounded-sm shadow-2xl">
          <div className="flex flex-col gap-4">
            <p className="font-helvetica-bold text-[48px] leading-[120%] tracking-[0%] text-dodo-yellow">
              Improving targeting strategy for HNIs
            </p>
            <p className="w-3/4 text-2xl font-inter font-medium leading-[150%] tracking-[-0.5px] text-dodo-black">
              Designing a Solution for Nigeria's Wealthiest Individuals
            </p>
          </div>
          <Link
            href={`/work/${2}`}
            className="flex items-center text-lg gap-[8px] font-inter font-medium uppercase leading-[140%] tracking-[-0.5px] text-dodo-black  "
          >
            See Project <IoArrowForward />
          </Link>{" "}
        </div>
      </div> */}
      <div className=" w-full flex flex-col gap-2">
        {/* <Tabs /> */}
        <AboutProjectGrid />
        <Project5Grid />
      </div>
    </div>
  );
}

export default page;
