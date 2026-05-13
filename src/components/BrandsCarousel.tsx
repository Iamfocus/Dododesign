"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const brands = [
  { src: "/Images/SocialProofs/SocialProof-1.png", alt: "logo 1" },
  { src: "/Images/SocialProofs/SocialProof-2.png", alt: "logo 2" },
  { src: "/Images/SocialProofs/SocialProof-3.png", alt: "logo 3" },
  { src: "/Images/SocialProofs/SocialProof-4.png", alt: "logo 4" },
  { src: "/Images/SocialProofs/SocialProof-5.png", alt: "logo 5" },
  // { src: "/Images/SocialProofs/SocialProof-6.png", alt: "logo 6" },
  { src: "/Images/SocialProofs/SocialProof-1.png", alt: "logo 1" },
  { src: "/Images/SocialProofs/SocialProof-2.png", alt: "logo 2" },
  { src: "/Images/SocialProofs/SocialProof-3.png", alt: "logo 3" },
  { src: "/Images/SocialProofs/SocialProof-4.png", alt: "logo 4" },
  { src: "/Images/SocialProofs/SocialProof-5.png", alt: "logo 5" },
  // { src: "/Images/SocialProofs/SocialProof-6.png", alt: "logo 6" },
];

function BrandsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const brandRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const draggableInstance = useRef<Draggable[] | null>(null);
  const isDraggingRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const contentWidth = contentRef.current.scrollWidth / 2;

    // Infinite scroll animation
    tweenRef.current = gsap.to(contentRef.current, {
      x: -contentWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xNum = parseFloat(x);
          return (xNum % contentWidth) + "px";
        },
      },
    });

    // Draggable with momentum
    draggableInstance.current = Draggable.create(contentRef.current, {
      type: "x",
      inertia: true,
      edgeResistance: 0.8,
      bounds: containerRef.current,
      onDrag: function () {
        isDraggingRef.current = true;
        tweenRef.current?.pause();
        if (resumeTimeoutRef.current) {
          clearTimeout(resumeTimeoutRef.current);
        }
      },
      onThrowComplete: function () {
        isDraggingRef.current = false;
        // Wait for inertia to completely stop before resuming
        resumeTimeoutRef.current = setTimeout(() => {
          if (!isDraggingRef.current) {
            // Get current position and restart tween from there
            const currentX = gsap.getProperty(
              contentRef.current,
              "x"
            ) as number;
            tweenRef.current?.kill();
            tweenRef.current = gsap.to(contentRef.current, {
              x: `+=${-contentWidth}`,
              duration: 20,
              ease: "none",
              repeat: -1,
              modifiers: {
                x: (x) => {
                  const xNum = parseFloat(x);
                  return (xNum % contentWidth) + "px";
                },
              },
              // Start from current position
              startAt: { x: currentX },
            });
          }
        }, 1500); // Increased delay to ensure throw is complete
      },
    });

    // Hover animations
    // brandRefs.current.forEach((brand, index) => {
    //   if (!brand) return;

    //   brand.addEventListener("mouseenter", () => {
    //     gsap.to(brand, {
    //       scale: 1.025,
    //       y: -10,
    //       rotation: gsap.utils.random(-5, 5),
    //       duration: 0.3,
    //       ease: "elastic.out(1, 0.5)",
    //       overwrite: "auto",
    //     });

    //     gsap.to(brand.querySelector("img"), {
    //       filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))",
    //       duration: 0.3,
    //     });
    //   });

    //   brand.addEventListener("mouseleave", () => {
    //     gsap.to(brand, {
    //       scale: 1,
    //       y: 0,
    //       rotation: 0,
    //       duration: 0.5,
    //       ease: "back.out(2)",
    //     });

    //     gsap.to(brand.querySelector("img"), {
    //       filter: "none",
    //       duration: 0.3,
    //     });
    //   });
    // });

    return () => {
      tweenRef.current?.kill();
      draggableInstance.current?.forEach((d) => d.kill());
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="brands w-full h-16 overflow-hidden relative"
    >
      <div
        ref={contentRef}
        className="absolute flex items-center gap-10 will-change-transform"
      >
        {brands.map((brand, index) => (
          <div
            key={`${brand.alt}-${index}`}
            ref={(el) => {
              brandRefs.current[index] = el;
            }}
            className="brand-item relative flex items-center justify-center"
            style={{ width: "150px", height: "50px" }}
          >
            <Image
              loading="eager"
              decoding="async"
              src={brand.src}
              height={300}
              width={300}
              alt={brand.alt}
              quality={100}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandsCarousel;
