import PagesHeader from "@/components/PagesHeader";
import Services from "@/components/Services";
import { baseMetadata } from "@/Services/shared-metadata";
import Image from "next/image";
import React from "react";

export const metadata = {
  ...baseMetadata,
  title: "Services by DODO",
  description:
    "We combine human-centered design, with rigorous, strategic thinking to deliver insights that drive real impact.",
};

function page() {
  return (
    <div className=" bg-white w-full ">
      <PagesHeader
        title="Our Services"
        description="We combine human-centered design, with rigorous, strategic thinking to deliver insights that drive real impact."
      />

      <section className="hero-image w-full">
        <Image
          loading="eager"
          decoding="async"
          src="/Images/Pages/servicesHero.png"
          width={1050}
          height={50}
          alt="image of service flow"
          className="w-full"
        />
      </section>

      <Services />
    </div>
  );
}

export default page;
