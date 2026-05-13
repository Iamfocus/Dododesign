"use client";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

function ReadArrow({
  id,
  className,
  url,
  text,
}: {
  id?: string;
  className?: string;
  url?: string;
  text: string;
}) {
  return (
    <div className="relative overflow-hidden md:w-[40%] h-5">
      <div className="absolute left-0">
        {url || id ? (
          <Link
            href={url || `/chronicles/${id}`}
            className={`flex items-center gap-2 font-inter font-medium uppercase text-lg text-dodo-black ${className}`}
          >
            {text} <IoArrowForward />
          </Link>
        ) : (
          <p
            className={`flex items-center gap-2 font-inter font-medium uppercase text-lg text-dodo-black ${className}`}
          >
            {text} <IoArrowForward />
          </p>
        )}
      </div>
    </div>
  );
}

export default ReadArrow;
