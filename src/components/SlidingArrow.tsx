"use client";
import React, { useRef, useEffect } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import gsap from "gsap";
import Link from "next/link";

function SlidingArrow({
  href,
  className,
}: {
  href?: string;
  className?: string;
}) {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!arrowRef.current) return;

    const containerWidth = arrowRef.current.parentElement?.offsetWidth || 100;
    const arrowWidth = 48; // Approximate width of the icon (3rem = 48px)

    // Set up the infinite animation with bounce
    const tl = gsap.timeline({ repeat: -1 });

    // Slide right with bounce at end
    tl.to(arrowRef.current, {
      x: containerWidth - arrowWidth,
      duration: 1.5,
      ease: "power2.out",
    })
      // Bounce effect
      .to(arrowRef.current, {
        x: containerWidth - arrowWidth - 20,
        duration: 0.3,
        ease: "power1.in",
      })
      .to(arrowRef.current, {
        x: containerWidth - arrowWidth,
        duration: 0.3,
        ease: "power1.out",
      })
      // Reset position (invisible jump)
      .to(arrowRef.current, {
        x: -arrowWidth,
        duration: 0,
      })
      // Slide right again
      .to(arrowRef.current, {
        x: 0,
        duration: 1.5,
        ease: "power2.out",
      });

    return (): void => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-3/4 md:w-[20%] h-16 pl-5 md:pl-0 mx-auto">
      <div ref={arrowRef} className="absolute left-0">
        <Link href={href ? href : ""}>
          <IoArrowForwardCircleOutline
            href={href ? href : ""}
            className={`text-5xl text-dodo-black ${className}`}
          />
        </Link>
      </div>
    </div>
  );
}

export default SlidingArrow;
