"use client";
import React from "react";
import MoreProjects from "../MoreProjects";
import { projectDetails } from "@/Data/projectGrid";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function WorkDetail({ params }: { params: Promise<{ workDetail: string }> }) {
  const { workDetail } = React.use(params);

  const projectInView = projectDetails.filter(
    (project) => Number(project.id) === Number(workDetail)
  )[0];
  return (
    <div className="w-full text-dodo-black sm:text-lg text-lg lg:text-2xl">
      <div className="work-hero w-full">
        <Image
          loading="eager"
          decoding="async"
          src={`${projectInView.heroImage}`}
          width={1050}
          height={750}
          alt="image of service flow"
          className="w-full "
        />
      </div>

      <header className="headers-texts flex flex-col gap-10 px-5 sm:px-10 lg:px-20 2xl:px-[160px] pb-10 lg:pb-[100px] pt-10 lg:pt-20">
        <h1 className="w-full xl:w-[71%] 2xl:w-[75%] text-[28px] sm:text-[36px] md:text-[56px] lg:text-[64px] xl:text-[80px] leading-[100%] lg:tracking-[-4px] font-helvetica-bold text-black">
          {projectInView.title}
        </h1>
        <div className="texts flex flex-col-reverse xl:flex-row gap-10 xl:gap-0 items-start justify-between">
          <div className="desc xl:flex-1 xl:max-w-[720px] 2xl:max-w-3/5">
            <p className="w-full text-lg sm:text-lg! xl:text-2xl!  leading-[180%] tracking-[-3%]">
              {projectInView.description}
            </p>
          </div>
          <div className="flex items-end">
            <div className="client w-3/4 md:w-fit xl:flex-1 flex flex-col text-left xl:text-right items-start gap-2 lg:gap-6">
              <p className="max-w-[300px] text-left flex flex-col items-start uppercase lg:text-lg leading-[160%]">
                <span className="font-helvetica-bold">Client & Partner: </span>
                <span className="">{projectInView.client}</span>
              </p>
              <p className="max-w-[300px] text-left flex flex-col items-start uppercase lg:text-lg leading-[160%]">
                <span className="font-helvetica-bold">Location: </span>
                {projectInView.location}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="details flex flex-col gap-10 lg:gap-20 bg-dodo-grey-2 pt-5 sm:pt-10 lg:pt-20">
        <div className="flex flex-col gap-8 md:gap-20">
          <div
            className=" leading-[180%] tracking-[-3%] w-full sm:w-3/4 lg:w-2/4  px-5 sm:px-10 lg:px-0 self-center"
            dangerouslySetInnerHTML={{ __html: projectInView.content[0].text }}
          ></div>
          <div className="images">
            {projectInView.content[0].images.map((image, index) => (
              <div className="work-hero w-full" key={index}>
                <Image
                  loading="eager"
                  decoding="async"
                  src={`${image}`}
                  width={1050}
                  height={50}
                  alt="image of service flow"
                  className="w-full "
                />
                <p className="w-full sm:w-3/4 lg:w-2/4 2xl:w-2/5 mx-auto text-center italic text-sm md:text-base lg:text-lg md:leading-[120%] md:tracking-[-3%] text-dodo-black pt-2 px-4">
                  {projectInView.content[0].caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="content flex flex-col gap-10 lg:gap-20">
          {projectInView.content.slice(1).map((content, indexO) => (
            <div
              className="w-full text-image flex flex-col items-center gap-10 lg:gap-20"
              key={indexO}
            >
              <div
                className=" leading-[180%] tracking-[-3%] w-full sm:w-3/4 lg:w-2/4  px-5 sm:px-10 lg:px-0 "
                dangerouslySetInnerHTML={{
                  __html: content.text,
                }}
              ></div>
              <div className="images w-full">
                {content.images.map((image, index) => (
                  <div
                    className={`work-hero w-full ${
                      indexO == projectInView.content.length - 2 &&
                      index == content.images.length - 1
                        ? "bg-white"
                        : ""
                    }`}
                    key={index}
                  >
                    <Image
                      loading="eager"
                      decoding="async"
                      src={`${image}`}
                      width={1050}
                      height={50}
                      alt="image of service flow"
                      className="w-full "
                    />
                    <p className="w-full sm:w-3/4 lg:w-2/4 2xl:w-2/5  mx-auto text-center italic text-sm md:text-base lg:text-lg md:leading-[120%] md:tracking-[-3%] text-dodo-black pt-2 px-4 ">
                      {content?.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="projectFooter w-full xl:w-4/5 flex flex-col items-start gap-14 bg-white px-5 sm:px-10 lg:px-40 py-10 lg:py-20">
        <div className="relative">
          <Image
            loading="eager"
            decoding="async"
            src="/Images/quote2.png"
            width={50}
            height={50}
            alt="quote"
            className="absolute left-1 md:-left-5 -top-2 z-10" // Added bottom-2 and z-10
          />
          <article className="relative z-20 w-full font-helvetica-medium lg:text-[38px] lg:leading-[140%] tracking-[-3%]">
            {projectInView.quote}
          </article>
        </div>

        <div className="methods flex flex-col gap-6 ">
          <p className=" font-helvetica-bold text-black text-lg uppercase">
            Methods & Activities
          </p>
          <div className="methods w-full max-w-[900px] flex flex-wrap gap-2">
            {projectInView.methods.map((method, index) => (
              <p
                key={index}
                className="w-fit rounded-[45px] bg-[#e8e9e9] text-sm lg:text-lg text-dodo-black px-4 lg:px-3 py-2"
              >
                {method}
              </p>
            ))}
          </div>
        </div>
      </div>

      <MoreProjects id={projectInView.id} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: projectInView?.title,
            description: projectInView.description,
            image: projectInView.heroImage,
            author: {
              "@type": "Organization",
              name: "DODO Design Agency",
              url: "https://dododesign.africa",
            },
            publisher: {
              "@type": "Organization",
              name: "DODO Design Agency - Africa",
              logo: {
                "@type": "ImageObject",
                url: "https://dododesign.africa",
                URL,
              },
            },
          }),
        }}
      />
    </div>
  );
}

export default WorkDetail;
