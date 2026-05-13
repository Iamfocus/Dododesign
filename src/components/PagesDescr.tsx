"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
gsap.registerPlugin(useGSAP);

interface IPageDesc {
  text: string;
  className?: string;
}

function PagesDescr({ text, className }: IPageDesc) {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(container.current, {
        y: 50,
        duration: 0.5,
        ease: "power1.inOut",
        opacity: 0,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="header-descr">
      <p
        className={`w-full md:w-5/6 xl:w-4/5 text-xl md:text-2xl lg:text-[28px] xl:text-[45px] leading-[120%] tracking-[-3%]  text-left text-black ${
          className ? className : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default PagesDescr;
