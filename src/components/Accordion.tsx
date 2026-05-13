"use client";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

// Mock Data
const accordionData = [
  {
    title: "Excellence",
    content:
      "In everything, we aim for above-par, irrespective of how small the details are, in all we do. We do this because we know that excellence drives user engagement, trust and retention.",
  },
  {
    title: "Empathy",
    content:
      "We design with a deep commitment to understanding people’s emotions, needs, and behaviours. Empathy for our clients’ needs and those of their customers is not just integral to our work processes, but to delivering true and targeted solutions in every project..",
  },
  {
    title: "Passion",
    content:
      "We are fuelled by an unshakable passion for crafting meaningful user experiences. Every challenge is an opportunity to innovate, refine, and push boundaries, because passion drives creativity, perseverance, and lasting impact. We do work from the heart, driven by a deep commitment to our clients’ success. Helping others succeed isn’t just what we do—it’s what we live by.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col justify-between gap-10 h-full">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col gap-4 border-b-2 border-dodo-black/30  "
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center cursor-pointer ${
              openIndex === index ? "pb-0" : "pb-4"
            }`}
          >
            <span className="text-2xl md:text-[28px] leading-[120%] tracking-[-1%] text-black">
              {item.title}
            </span>
            {openIndex === index ? (
              <BiMinus size={32} className="cursor-pointer" />
            ) : (
              <BiPlus size={32} className="cursor-pointer" />
            )}
          </button>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="pb-6 bg-white text-[#616569] font-inter">
              <p className="text-[20px] leading-[140%] tracking-[-1px] ">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
