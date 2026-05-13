import Image from "next/image";
import React from "react";

function Services() {
  const services = [
    {
      title: "research",
      description:
        "We uncover deep insights through qualitative and quantitative methods. Our approach ensures data translates into meaningful action.",
      image: "1.png",
    },
    {
      title: "strategy",
      description:
        "We turn insights into clear, actionable strategies. Our solutions are scalable, sustainable, and designed for lasting impact.",
      image: "2.png",
    },
    {
      title: "design",
      description:
        "We create user-centered solutions that are accessible, intuitive, and impactful. Every touchpoint is designed to meet real community needs.",
      image: "3.jpeg",
      smImage: "3.jpg",
    },
  ];
  return (
    <section className="w-full px-5 md:px-10 py-20 lg:py-[120px] xl:px-40 flex flex-col justify-center items-start gap-5 md:gap-10 bg-dodo-grey-2 ">
      <p className="font-helvetica-medium leading-[100%] tracking-[-3%] text-2xl md:text-[36px] text-dodo-black">
        How we help our clients
      </p>

      <div className="mobile flex md:hidden flex-col gap-10 w-full">
        {services.map((service, i: number) => {
          return (
            <div className={`w-full flex flex-col items-start gap-4`} key={i}>
              <div className="w-full">
                <Image
                  loading="eager"
                  decoding="async"
                  src={`/Images/Pages/servicesSm-${
                    service?.smImage || service?.image
                  }`}
                  width={1050}
                  height={1050}
                  alt="an image"
                  className="w-full"
                />
              </div>{" "}
              <div className="texts flex flex-col gap-2">
                <h2 className="text-[48px] leading-[100%] text-dodo-black capitalize font-helvetica-bold  md:bg-transparent">
                  {service.title}
                </h2>
                <p className="text-dodo-black font-medium font-inter leading-[140%] tracking-[-0.24px]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="large-screen hidden md:flex flex-col gap-10 w-full">
        {services.map((service, i: number) => {
          return (
            <div
              style={{
                backgroundImage: `${`url('/Images/Pages/services-${service.image}')`}`,

                backgroundSize: "cover",
                backgroundBlendMode: `overlay`,
                backgroundPosition: "center left",
              }}
              className={`w-full py-28 px-10 flex flex-col items-start`}
              key={i}
            >
              <h2 className="text-4xl md:text-[79px] text-dodo-black capitalize font-helvetica-bold  md:bg-transparent leading-[100%]">
                {service.title}
              </h2>
              <p className="text-dodo-black text-xl font-medium leading-[140%] font-inter  md:w-3/5 lg:w-1/3 max-w-[590px]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
