"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import Link from "next/link";
import ReadArrow from "./ReadArrow";
import { useRouter } from "next/navigation";
import { projects } from "@/Data/projectGrid";
import { slugify } from "@/Services/helpers";

function Project5Grid() {
  const projectRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  // Hardcoded single project data
  const project = projects.filter((project) => project.id === 5)[0];
  // Animation helper
  const animateProject = (isEnter: boolean) => {
    if (!projectRef.current) return;

    gsap.to(projectRef.current.querySelector(".project-image"), {
      scale: isEnter ? 1.05 : 1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(projectRef.current.querySelector(".project-overlay"), {
      opacity: isEnter ? 0.9 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(projectRef.current.querySelector(".project-content"), {
      opacity: isEnter ? 1 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Event handlers
  const handleMouseEnter = () => {
    if (window.innerWidth <= 768) return;
    animateProject(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth <= 768) return;
    animateProject(false);
  };

  const handleTouch = () => {
    if (window.innerWidth < 768) return;

    if (isActive) {
      setIsActive(false);
      animateProject(false);
    } else {
      setIsActive(true);
      animateProject(true);
    }
  };

  return (
    <section className="projects-gallery w-full">
      <Link
                    href={`/work/${project.id}?title=${slugify(project.title)}`}
        passHref
        className="w-full"
      >
        <div
          // onClick={() => router.push(`/work/${project.title}`)}
          className="w-full"
        >
          <div
            ref={projectRef}
            className="relative w-full flex flex-col gap-4 lg:gap-0 
          pb-14 lg:pb-0  md:h-[670px] 2xl:h-[670px]
          aspect-[4/3] sm:aspect-auto
          lg:overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouch}
          >
            {/* Project Image */}
            <div className="relative w-full h-[300px] md:h-full">
              <Image
                loading="eager"
                decoding="async"
                quality={100}
                src={project.image}
                fill
                alt="Project image"
                className="project-image object-cover object-center w-full h-full"
                sizes="100vw"
              />
            </div>

            {/* Mobile Content (always visible) */}
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

            {/* Overlay (desktop only) */}
            <div className="project-overlay hidden lg:flex absolute inset-0 bg-dodo-black opacity-0" />

            {/* Desktop Content (hover/active only) */}
            <div className="project-content absolute inset-0 w-full left-5 hidden lg:flex flex-col gap-4 xl:gap-5 justify-center items-start font-inter font-light text-white xl:w-3/4 2xl:w-3/4 max-w-[650px] p-5 xl:p-12 opacity-0 md:group-hover:opacity-100">
              <h3 className="text-xl font-medium leading-3.5 tracking-tight mb-2">
                {project.category}
              </h3>
              <span className="text-2xl md:text-4xl xl:text-[40px] xl:leading-[48px] font-helvetica tracking-tight">
                {project.title}
              </span>
              {/* <Link                    href={`/work/${project.id}?title=${slugify(project.title)}`}
 passHref> */}
              <Button
                text="See Project"
                className="mt-4 font-medium uppercase bg-transparent border-2 border-white text-white lg:px-[74px] lg:py-[18px]"
              />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Project5Grid;
