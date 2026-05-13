"use client"; // Add this at the top since we're using client-side effects
import React, { useRef, useEffect } from "react";
import Button from "./Button";
import ChronicleCard from "./ChronicleCard";
import { demoChronicles } from "@/Data/demoChronicles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "@/Data/projectGrid";
import ReadArrow from "./ReadArrow";
import { slugify } from "@/Services/helpers";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface IProjects {
  id: number;
}

function MoreProjects({ id }: IProjects) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]); // Array for arrow refs

  useEffect(() => {
    if (!cardsRef.current.length) return;

    // Initialize animations for each card
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Set initial state (hidden and slightly scaled down)
      gsap.set(card, {
        y: 50,
        opacity: 0,
        scale: 0.95,
      });

      // Create scroll trigger for each card
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        onEnter: () => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1, // Stagger the animations
            ease: "elastic.out(1, 0.5)", // This creates the bounce effect
            overwrite: "auto",
          });
        },
        once: true, // Only animate once
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    // Image animation
    if (imageRefs.current[index]) {
      gsap.to(imageRefs.current[index], {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`p-5 py-10 lg:py-[120px] sm:px-10 lg:px-[100px] flex flex-col justify-start items-start gap-8 bg-dodo-grey-2 cursor-pointer`}
    >
      <h2 className="font-medium font-helvetica-medium text-2xl md:text-[36px] text-dodo-black ">
        Other works
      </h2>

      <div className="Projects-grid w-full  grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4  gap-6">
        {/* {projects.slice(0,3) */}
        {projects
          .filter((project) => project.id !== id)
          .map((project, i) => {
            return (
              <Link
                                    href={`/work/${project.id}?title=${slugify(project.title)}`}
                key={i}
              >
                <div
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className={`card-container cursor-pointer ${
                    i === projects.length - 2 ? "" : "pb-0"
                  } group`}
                >
                  <div
                    className={`w-full h-[500px] lg:h-[670px] flex flex-col gap-5 pb-[32px] border-b border-dodo-black`}
                  >
                    <div
                      key={project.id}
                      className="w-full h-[433px] xl:h-[433px]  overflow-hidden"
                    >
                      <Image
                        loading="eager"
                        decoding="async"
                        quality={100}
                        src={`${project.image}`}
                        height={300}
                        width={350}
                        alt="Impact image"
                        className="w-full h-full object-cover object-top transition-transform duration-500  lg:group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-3">
                        <h3 className=" font-helvetica-bold md:text-xl xl:text-2xl text-dodo-black ">
                          {project.title}
                        </h3>
                        <h4 className=" text-[18px] text-dodo-black lg:w-[95%]">
                          {project.client}
                        </h4>
                      </div>

                      <div
                        ref={(el) => {
                          arrowRefs.current[i] = el;
                        }}
                      >
                        <ReadArrow
                          text="read more"
                          // url={`/work/${project.title}`}
                          className="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </Link>
            );
          })}
      </div>
    </section>
  );
}

export default MoreProjects;
