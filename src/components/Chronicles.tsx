"use client"; // Add this at the top since we're using client-side effects
import React, { useRef, useEffect } from "react";
import Button from "./Button";
import ChronicleCard from "./ChronicleCard";
import { demoChronicles } from "@/Data/demoChronicles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useChronicles } from "@/Services/useChronicles";
import { Loader } from "./loader";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface IChronicles {
  number: number;
}

function Chronicles({ number }: IChronicles) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   if (!cardsRef.current.length) return;

  //   // Initialize animations for each card
  //   cardsRef.current.forEach((card, index) => {
  //     if (!card) return;

  //     // Set initial state (hidden and slightly scaled down)
  //     gsap.set(card, {
  //       y: 50,
  //       opacity: 0,
  //       scale: 0.95,
  //     });

  //     // Create scroll trigger for each card
  //     ScrollTrigger.create({
  //       trigger: card,
  //       start: "top 80%",
  //       onEnter: () => {
  //         gsap.to(card, {
  //           y: 0,
  //           opacity: 1,
  //           scale: 1,
  //           duration: 0.8,
  //           delay: index * 0.1, // Stagger the animations
  //           ease: "elastic.out(1, 0.5)", // This creates the bounce effect
  //           overwrite: "auto",
  //         });
  //       },
  //       once: true, // Only animate once
  //     });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const { posts, loading, error } = useChronicles();

  return (
    <section
      ref={sectionRef}
      className={`p-5 py-[120px] sm:px-10 xl:px-[100px] flex flex-col justify-start items-start gap-10 bg-dodo-grey-2`}
    >
      <div className="texts flex flex-col gap-6">
        <h2 className="font-helvetica-medium text-2xl md:text-[36px] leading-[38px] text-dodo-black">
          Latest from our Chronicles
        </h2>
        <p className="text-base md:text-[24px] text-dodo-black sm:w-4/5  xl:w-3/5 2xl:w-4/6">
          Join us as we explore how HCD is shaping solutions to local needs in
          Africa
        </p>
      </div>

      <div className="chronicles-grid w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {loading ? (
          <Loader />
        ) : error ? (
          "An error occured"
        ) : (
          posts.slice(0, number).map((chronicle, i) => {
            return (
              <div
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="card-container"
              >
                <ChronicleCard
                  key={i}
                  chronicle={chronicle}
                  className={`border-b-dodo-black`}
                  // className={`border-b-dodo-black pb-[32px]`}
                />
              </div>
            );
          })
        )}
      </div>

      <Link href="/chronicles">
        <Button text="See more" className="md:-20 uppercase w-[250px]!" />
      </Link>
    </section>
  );
}

export default Chronicles;
