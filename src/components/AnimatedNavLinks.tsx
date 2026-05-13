"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedNavLink({
  href,
  target,
  children,
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.toLowerCase() === href.toLowerCase();

  useEffect(() => {
    const link = linkRef.current;
    const line = lineRef.current;
    if (!link || !line) return;

    gsap.set(line, {
      scaleX: isActive ? 1 : 0,
      transformOrigin: "left center",
    });

    const handleMouseEnter = () => {
      gsap.to(line, {
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!isActive) {
        gsap.to(line, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    };

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isActive]);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={`relative inline-block py- group font-inter font-medium ${
        isActive ? "text-dodo-yellow" : ""
      }`}
      target={target}
    >
      {children}
      <span
        ref={lineRef}
        className="absolute -bottom-3 left-0 w-full h-0.5 bg-dodo-yellow"
      />
    </Link>
  );
}
