"use client";
import React, { MouseEvent, useRef } from "react";
import gsap from "gsap";

interface IButton {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: MouseEvent) => void;
  disabled?: boolean;
}

function Button({ text, className, type, onClick, disabled }: IButton) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!buttonRef.current || !overlayRef.current || !textRef.current) return;

    // Animate overlay down (revealing color)
    gsap.to(overlayRef.current, {
      yPercent: 100,
      duration: 0.3,
      ease: "power2.out",
    });

    // Change text color to black as overlay moves down
    gsap.to(textRef.current, {
      color: "#1d2328", // Black text
      duration: 0.9,
      ease: "sine.out",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current || !overlayRef.current || !textRef.current) return;

    // Animate overlay up (covering with white)
    gsap.to(overlayRef.current, {
      yPercent: 0,
      duration: 0.5,
      ease: "power2.in",
    });

    // Change text color back to white as overlay moves up
    gsap.to(textRef.current, {
      color: "#f7f7f7", // White text
      duration: 0.9,
      ease: "sine.in",
    });
  };

  return (
    <button
      disabled={disabled}
      ref={buttonRef}
      className={`relative flex items-center justify-center font-inter font-medium uppercase sm:leading-[24px] tracking-[0.5px] h-[60px] bg-dodo-black text-white py-2 px-6 sm:px-16 text-sm overflow-hidden cursor-pointer border-2 hover:border-dodo-black ${className}`}
      type={type ? type : "button"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => onClick && onClick(e)}
    >
      <span ref={textRef} className="relative z-10">
        {text}
      </span>
      {/* Color overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-white z-0 transform -translate-y-full"
      />
    </button>
  );
}

export default Button;
