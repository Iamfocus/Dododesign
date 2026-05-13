"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDropright,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { impacts } from "@/Data/Impacts";

function Impact() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const impactRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  const navigate = (direction: "next" | "prev") => {
    impactRef.current?.parentElement?.scrollIntoView({
      behavior: "smooth",
    });

    gsap.to(impactRef.current, {
      opacity: 0,
      x: direction === "next" ? -50 : 50,
      duration: 0.6,
      onComplete: () => {
        setCurrentIndex((prev) => {
          const newIndex =
            direction === "next"
              ? (prev + 1) % impacts.length
              : (prev - 1 + impacts.length) % impacts.length;
          return newIndex;
        });
        gsap.fromTo(
          impactRef.current,
          { opacity: 0, x: direction === "next" ? 50 : -50 },
          { opacity: 1, x: 0, duration: 0.6 }
        );
      },
    });
  };

  useEffect(() => {
    const leftButton = leftButtonRef.current;
    const rightButton = rightButtonRef.current;

    // Initial state - buttons partially visible (square backgrounds peeking)
    gsap.set([leftButton, rightButton], {
      x: (i) => (i === 0 ? "-80%" : "80%"), // Only 20% of the square is visible
    });

    const onHover = () => {
      gsap.to([leftButton, rightButton], {
        x: 0, // Fully visible on hover
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onHoverOut = () => {
      gsap.to([leftButton, rightButton], {
        x: (i) => (i === 0 ? "-80%" : "80%"), // Return to partially visible
        duration: 0.5,
        ease: "power2.in",
      });
    };

    const section = impactRef.current?.parentElement;
    if (section) {
      section.addEventListener("mouseenter", onHover);
      section.addEventListener("mouseleave", onHoverOut);

      return () => {
        section.removeEventListener("mouseenter", onHover);
        section.removeEventListener("mouseleave", onHoverOut);
      };
    }
  }, []);


  // Initialize GSAP animations
  useEffect(() => {
    gsap.from(impactRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6,
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `
          linear-gradient(to right, #1D2328 100%, #1D2328 100%, #1D2328 95%, #1D2328 100%, #1D2328 100%),
          url('/Images/impactPattern.png')
        `,
        backgroundSize: "cover, cover",
        backgroundPosition: "center center, center center",
        backgroundBlendMode: "overlay",
      }}
      className="relative group transition-all duration-1000 w-full flex flex-col xl:hidden justify-start items-center gap-[25px] py-20 px-5 sm:px-10 xl:px-[100px] overflow-hidden"
    >
      <div
        className="w-full flex flex-col justify-center gap-[25px] z-[999]"
        ref={impactRef}
      >
        <p className="text-2xl text-white leading-[52px] tracking-[-1%] uppercase">
          our impact in numbers
        </p>

        <div className="flex flex-col gap-[45px]">
          <div className="impact-texts flex flex-col items-start gap-4">
            <p className="text-dodo-yellow font-ibm font-medium italic text-[40px] md:text-[45px]">
              {impacts[currentIndex].title}
            </p>
            <p className="font-helvetica-thin text-2xl md:text-3xl xl:text-[48px] 2xl:w-4/5 text-white tracking-[3%] tracking-wider">
              {impacts[currentIndex].description}
            </p>
          </div>
          <div className="impact-images flex flex-col md:flex-row items-center justify-between gap-10">
            {impacts[currentIndex].images.map((impactImg, i) => (
              <div key={i} className="w-full md:w-1/3 overflow-hidden">
                <Image
                  loading="eager"
                  decoding="async"
                  quality={100}
                  src={`/Images/Impacts/Impact-${impactImg}`}
                  height={300}
                  width={350}
                  alt="Impact image"
                  className="w-full object-cover transition-transform duration-800 hover:scale-110 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <button
          ref={leftButtonRef}
          onClick={() => navigate("prev")}
          className=" focus:outline-none flex items-center justify-center h-[30px] w-[30px] bg-gray-700/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out hover:text-dodo-grey-3 group/leftbutton" // Added `group` and moved hover here
        >
          <MdKeyboardArrowLeft className="text-white/80 w-[50px] h-[40px] cursor-pointer transition-colors duration-300 group-hover/leftbutton:text-dodo-grey-3" />
          {/* Now responds to parent hover */}
        </button>
        <button
          ref={rightButtonRef}
          onClick={() => navigate("next")}
          className=" focus:outline-none flex items-center justify-center h-[30px] w-[30px] bg-gray-700/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out group/rightbutton"
        >
          <MdKeyboardArrowRight className="text-white/80 w-[50px] h-[40px] cursor-pointer transition-colors duration-300 group-hover/rightbutton:text-dodo-grey-3" />
        </button>{" "}
      </div>
    </section>
  );
}

export default Impact;
