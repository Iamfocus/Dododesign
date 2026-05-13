"use client";

import { impacts } from "@/Data/Impacts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function Impact2() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 0.3,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 2.5,
          pin: true,
          // snap: 1,
          snap: {
            snapTo: 1 / (impacts.length - 1), // number of panels
            duration: 0.1, // how long the snap animation takes
            // ease: "power1.inOut", // easing for the snap
          },
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      style={{
        backgroundImage: `
          linear-gradient(to right, #1D2328 100%, #1D2328 100%, #1D2328 95%, #1D2328 100%, #1D2328 100%),
          url('/Images/impactPattern.png')
        `,
        backgroundSize: "contain",
        backgroundPosition: "center center, center center",
        backgroundBlendMode: "overlay",
      }}
      className="overflow-hidden block mx-auto"
    >
      <div
        ref={sectionRef}
        className={`h-screen w-${impacts.length}vw flex flex-row relative pt-[37px] pb-[57px] mx-auto`}
      >
        {impacts.map((impact, index) => {
          return (
            <div
              key={index}
              className="h-[100dvh] w-screen flex justify-center items-center flex-col bg "
            >
              <div className="h-screen w-screen flex justify-center items-center px-4 lg:px-0">
                <div className="flex flex-col lg:gap-[20px] xl:gap-[65px]">
                  <p className="text-2xl text-white leading-[52px] tracking-[-3%] uppercase">
                    our impact in numbers
                  </p>
                  <div className="flex flex-col sm:gap-4 lg:gap-[25px]">
                    <div className="impact-texts flex flex-col px- xl:gap-7">
                      <h3 className=" font-ibm font-medium italic  text-[40px] md:text-[45px] xl:text-[150px] xl:leading-[100px] md:tracking-[-3%] text-dodo-yellow">
                        {impact.title}
                      </h3>
                      <p className="text-lg sm:text-2xl md:text-3xl xl:text-[48px] 2xl:w-4/5 font-helvetica-thin text-white leading-[120%] tracking-[3%] lg:tracking-[-1%]">
                        {impact.description}
                      </p>
                    </div>
                    <div className="impact-images flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-10">
                      {impact.images.map((impactImg, i) => (
                        <div
                          key={i}
                          className=" overflow-hidden rounded-none lg:w-[300px] xl:w-[350px] lg:h-[300px] xl:h-[350px]"
                        >
                          <Image
                            loading="eager"
                            decoding="async"
                            quality={100}
                            src={`/Images/Impacts/Impact-${impactImg}`}
                            height={300}
                            width={350}
                            alt="Impact image"
                            className={`h-[200px] sm:w-[550px] lg:w-full lg:h-full object-cover object rounded-none transition-transform duration-800 hover:scale-110 ease-in-out ${
                              i === 0 ? "hidden lg:block" : "block"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Impact2;
