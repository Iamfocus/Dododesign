"use client";
import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
gsap.registerPlugin(useGSAP);

interface ITitle {
  text: string;
  className?: string;
  children?: ReactNode | string;
}

function Title({ text, className, children }: ITitle) {
  const container = useRef<HTMLHeadingElement | null>(null);

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
    <h1
      ref={container}
      className={`header-title w-full sm:w-4/5 md:w-fit max-w-[1000px] text-[40px] md:text-[70px] xl:text-[100px] 2xl:text-[100px] font-helvetica-bold lg:leading-[90px] tracking-[-3px] text-black ${className}`}
    >
      {text} <span className="text-dodo-yellow">{children}</span>
    </h1>
  );
}

export default Title;
