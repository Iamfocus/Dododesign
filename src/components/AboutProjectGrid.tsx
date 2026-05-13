"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import Link from "next/link";
import ReadArrow from "./ReadArrow";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "@/Data/projectGrid";
import { slugify } from "@/Services/helpers";

function AboutProjectGrid() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeMobileProject, setActiveMobileProject] = useState<number | null>(
    null
  );
  const router = useRouter();

  // Animation helper
  const animateProject = (project: HTMLDivElement | null, isEnter: boolean) => {
    if (!project) return;
    gsap.to(project.querySelector(".project-image"), {
      scale: isEnter ? 1.05 : 1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(project.querySelector(".project-overlay"), {
      opacity: isEnter ? 0.9 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(project.querySelector(".project-content"), {
      opacity: isEnter ? 1 : 0,
      y: isEnter ? 0 : 20,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Event handlers
  const handleMouseEnter = (index: number) => {
    if (window.innerWidth <= 768) return;
    animateProject(projectRefs.current[index], true);
  };

  const handleMouseLeave = (index: number) => {
    if (window.innerWidth <= 768) return;
    animateProject(projectRefs.current[index], false);
  };

  const handleTouch = (index: number) => {
    if (window.innerWidth < 768) return;

    if (activeMobileProject === index) {
      setActiveMobileProject(null);
      animateProject(projectRefs.current[index], false);
    } else {
      if (activeMobileProject !== null) {
        animateProject(projectRefs.current[activeMobileProject], false);
      }
      setActiveMobileProject(index);
      animateProject(projectRefs.current[index], true);
    }
  };

  return (
    <div className="row-2 pt-10 lg:pt-0 flex flex-col lg:flex-row lg:gap-3 w-full">
      {projects
        .slice(1, 3)
        .reverse()
        .map((project, index) => (
          <Link
            key={project.id}
            href={`/work/${project.id}?title=${slugify(project.title)}`}
            passHref
            className={`w-full pb-14 lg:pb-0 ${
              index === 0 ? "lg:w-[40%]" : "lg:w-[60%]"
            }`}
          >
            <div>
              <div
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={`
              relative w-full flex flex-col gap-4 lg:gap-0
              md:pb-14 lg:pb-0 xl:h-[670px] 2xl:h-[670px]
              aspect-[4/3] sm:aspect-auto
              lg:overflow-hidden group
            `}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onTouchStart={() => handleTouch(index)}
              >
                <div className="relative w-full h-[300px] md:h-[500px] xl:h-full">
                  <Image
                    loading="eager"
                    decoding="async"
                    quality={100}
                    src={project?.extraImage || project.hoverImage || ""}
                    fill
                    alt="Project image"
                    className="project-image object-cover object-center md:object-center lg:object-top w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Mobile Content */}
                <div className="project-content-mobile px-5 font-inter flex flex-col gap-4 lg:hidden">
                  <h3 className="text-xl font-medium leading-3.5 tracking-tight">
                    {project.category}
                  </h3>
                  <span className="text-[36px] leading-[48px] font-helvetica tracking-[-4%]">
                    {project.title}
                  </span>
                  <ReadArrow
                    text="See project"
                    // url={`/work/${project.id}?title=${slugify(project.title)}`}

                  />
                </div>

                {/* Overlay - Fixed to show on hover */}
                <div className="project-overlay absolute inset-0 bg-dodo-black opacity-0 lg:group-hover:opacity-90 transition-opacity duration-300" />

                {/* Desktop Content */}
                <div
                  className={`project-content absolute inset-0 w-full left-5 hidden lg:flex flex-col gap-4 xl:gap-5 justify-center items-start font-inter font-light text-white p-5 xl:p-12 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                >
                  <h3 className="text-xl font-medium leading-3.5 tracking-tight mb-2">
                    {project.category}
                  </h3>
                  <span className="text-2xl md:text-4xl xl:text-[40px] xl:leading-[48px] font-helvetica tracking-tight xl:w-3/4">
                    {project.title}
                  </span>
                  {/* <Link
                    href={`/work/${project.id}?title=${slugify(project.title)}`}
                    passHref
                  > */}
                  <Button
                    text="See Project"
                    className="mt-4 bg-transparent border-2 border-white text-white lg:px-[74px] lg:py-[18px] !font-medium uppercase"
                  />
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default AboutProjectGrid;
