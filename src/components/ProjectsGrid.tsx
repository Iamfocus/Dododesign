"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import Link from "next/link";
import { projects } from "@/Data/projectGrid";
import ReadArrow from "./ReadArrow";
import { useRouter } from "next/navigation";
import { slugify } from "@/Services/helpers";

function ProjectsGrid({ hoverImage }: { hoverImage: boolean }) {
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
      // y: isEnter ? 0 : 20,
      opacity: isEnter ? 1 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Event handlers
  const handleMouseEnter = (index: number, row: number) => {
    if (window.innerWidth <= 768) return;

    const projectIndex = row === 1 ? index : index + 2;
    animateProject(projectRefs.current[projectIndex], true);
  };

  const handleMouseLeave = (row: number) => {
    if (window.innerWidth <= 768) return;

    const projectsInRow = row === 1 ? [0, 1] : [2, 3];
    projectsInRow.forEach((projectIndex) => {
      animateProject(projectRefs.current[projectIndex], false);
    });
  };

  const handleTouch = (index: number, row: number) => {
    if (window.innerWidth <= 768) return; //here yet?

    const projectIndex = row === 1 ? index : index + 2;
    if (activeMobileProject === projectIndex) {
      setActiveMobileProject(null);
      animateProject(projectRefs.current[projectIndex], false);
    } else {
      if (activeMobileProject !== null) {
        animateProject(projectRefs.current[activeMobileProject], false);
      }
      setActiveMobileProject(projectIndex);
      animateProject(projectRefs.current[projectIndex], true);
    }
  };

  return (
    <section className="projects-gallery flex flex-col lg:gap-3 w-full">
      {/* Row 1 */}
      <div className="row-1 flex flex-col lg:flex-row  lg:gap-3 w-full">
        {projects.slice(0, 2).map((project, index) => (
          <Link
            href={`/work/${project.id}?title=${slugify(project.title)}`}
            passHref
            className={` ${index === 0 ? "lg:flex-[924]" : "lg:flex-[584]"} `}
            key={project.id}
          >
            <div key={index}>
              <div
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={`
              relative w-full flex flex-col gap-4 lg:gap-0
              ${index === 0 ? "lg:flex-[924]" : "lg:flex-[584]"} 
              pb-14 lg:pb-0 md:h-[670px] 2xl:h-[670px]
              aspect-[4/3] sm:aspect-auto
              lg:overflow-hidden group
            `}
                onMouseEnter={() => handleMouseEnter(index, 1)}
                onMouseLeave={() => handleMouseLeave(1)}
                onTouchStart={() => handleTouch(index, 1)}
              >
                <div className="relative w-full h-[300px] sm:h-[40dvh]  md:h-[70dvh] lg:h-full">
                  <Image
                    loading="eager"
                    decoding="async"
                    quality={100}
                    src={
                      hoverImage
                        ? project.hoverImage || project.image
                        : project.image
                    }
                    fill
                    alt="Project image"
                    className="project-image object-cover object-top lg:object-center w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="project-content-mobile px-5 font-inter flex flex-col gap-4 lg:hidden">
                  <h3 className="text-xl font-medium leading-3.5 tracking-tight">
                    {project.category}
                  </h3>
                  <span className="text-[36px] leading-[48px] font-helvetica tracking-[-4%]">
                    {project.title}
                  </span>
                  <ReadArrow
                    text="See project"
                    // url= {`/work/${project.id}?title=${slugify(project.title)}`}
                  />
                </div>
                <div className="project-overlay hidden lg:flex absolute inset-0 bg-dodo-black opacity-0 md:opacity-0" />

                <div
                  className={`project-content absolute inset-0 h-[670px] w-full left-2 sm:left-5 hidden lg:flex flex-col gap-2 md:gap-4 xl:gap-5 justify-center items-start font-inter font-light text-white ${
                    index === 0
                      ? "sm:w-3/4 xl:w-3/4 2xl:w-3/4 max-w-[650px]"
                      : "sm:w-3/4 lg:w-full 2xl:w-7/8 max-w-[600px]"
                  }  p-5 xl:p-12 opacity-0 md:group-hover:opacity-100 translate-y-5 md:group-hover:translate-y-0`}
                >
                  <h3 className="text-xl font-medium leading-3.5 tracking-tight mb-2">
                    {project.category}
                  </h3>
                  <span className="text-2xl md:text-4xl xl:text-[40px] xl:leading-[48px] font-helvetica tracking-tight">
                    {project.title}
                  </span>
                  {/* <Link
            href={`/work/${project.id}?title=${slugify(project.title)}`}
                    passHref
                  > */}
                  <Button
                    text="See Project"
                    className="mt-4 font-medium uppercase bg-transparent border-2 border-white text-white lg:px-[74px] lg:py-[18px]"
                  />
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Row 2 */}
      <div className="row-2 flex flex-col lg:flex-row  lg:gap-3 w-full">
        {projects.slice(2, 4).map((project, index) => (
          <Link
            href={`/work/${project.id}?title=${slugify(project.title)}`}
            passHref
            className="w-full"
            key={index}
          >
            <div className="w-full">
              <div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index + 2] = el;
                }}
                className={`
              relative w-full flex flex-col gap-4 lg:gap-0
              ${index === 0 ? "lg:flex-[584]" : "lg:flex-[924]"}  ${
                  index === 1 ? "pb-14 lg:pb-0" : ""
                }
              pb-14 lg:pb-0 md:h-[670px] 2xl:h-[670px]
              aspect-[4/3] sm:aspect-auto
              lg:overflow-hidden group
            `}
                onMouseEnter={() => handleMouseEnter(index, 2)}
                onMouseLeave={() => handleMouseLeave(2)}
                onTouchStart={() => handleTouch(index, 2)}
              >
                <div className="relative w-full h-[300px] sm:h-[40dvh] md:h-[70dvh] lg:h-full">
                  <Image
                    loading="eager"
                    decoding="async"
                    quality={100}
                    src={
                      hoverImage
                        ? project.hoverImage || project.image
                        : project.image
                    }
                    fill
                    alt="Project image"
                    className="project-image object-cover object-top lg:object-center w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
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
                <div className="project-overlay hidden lg:flex absolute inset-0 bg-dodo-black opacity-0 md:opacity-0" />
                <div
                  className={`project-content absolute inset-0 w-full left-2 sm:left-5 hidden lg:flex flex-col gap-2 md:gap-4 xl:gap-5 justify-center items-start font-inter font-light text-white ${
                    index === 0
                      ? "sm:w-3/4 lg:w-full 2xl:w-7/8 max-w-[600px]"
                      : "sm:w-3/4 xl:w-3/4 2xl:w-3/4 max-w-[650px] "
                  }  p-5 xl:p-12 opacity-0 md:group-hover:opacity-100 translate-y-5 md:group-hover:translate-y-0`}
                >
                  <h3 className="text-xl font-medium leading-3.5 tracking-tight mb-2">
                    {project.category}
                  </h3>
                  <span className="text-2xl md:text-4xl xl:text-[40px] xl:leading-[48px] font-helvetica tracking-tight">
                    {project.title}
                  </span>
                  <Button
                    text="See Project"
                    className="mt-4 bg-transparent border-2 border-white text-white lg:px-[74px] lg:py-[18px] !font-medium uppercase"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
