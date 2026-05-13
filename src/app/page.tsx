import BrandsCarousel from "@/components/BrandsCarousel";
import Button from "@/components/Button";
import Chronicles from "@/components/Chronicles";
import Impact from "@/components/Impact";
import Impact2 from "@/components/Impact2";
import ProjectsGrid from "@/components/ProjectsGrid";
import SlidingArrow from "@/components/SlidingArrow";
import Title from "@/components/Title";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className=" bg-white w-full">
      <header className="header w-full xl:w-full 2xl:w-5/6 leading-10 md:leading-14 lg:leading-24 flex flex-col gap-5 md:gap-[60px] items-start justify-between p-5 py-10 md:py-20 lg:py-40 md:px-10 lg:px-[100px] ">
        <Title
          text="Meet your market's most"
          className="md:leading-[85px] md:tracking-[-4px]"
        >
          authentic needs
        </Title>
        <Link href="/contact">
          <Button text="GET IN TOUCH " className="w-[250px] flex md:hidden" />
          <Button
            text="GET IN TOUCH WITH US"
            className="w-fit hidden md:flex"
          />
        </Link>
      </header>

      <section className="hero-video w-full max-h-fit">
        <video
          src="/videos/dodo-landing-page.mp4"
          autoPlay={true}
          muted
          playsInline
          loop
          controls={false}
          className="w-full object-cover"
        />
      </section>

      <section className="w-full bg-dodo-grey-2 m-auto flex flex-col items-start justify-start gap-5 md:gap-0 px-5 md:px-10 lg:px-40">
        <div className="w-full flex flex-col md:flex-row self-start items-start md:items-center justify-between gap-5 md:0 pt-5 md:pt-20 xl:pt-[200px] pb-10 md:pb-10 xl:pb-[100px]">
          <p className="w-full xl:w-[70%] sm:text-2xl xl:text-[40px] self-start text-dodo-black text-start  ">
            DODO is a research-driven design consultancy, based out of Africa.
            We're built to help businesses discover their market's true needs
            and bring valuable solutions to market.
          </p>
          {/* <SlidingArrow href="/about" className="cursor-pointer" /> */}
          <Link href={"/about"}>
            <IoArrowForwardCircleOutline
              className={`text-4xl lg:text-6xl text-dodo-black cursor-pointer`}
            />
          </Link>
        </div>
        <div className="social-proof w-full flex flex-col items-start gap-10 pt-[30px] pb-10 md:pb-20 xl:pb-[200px]">
          <p className="font-medium text-start self-start w-fit text-black-70">
            Brands we've worked with
          </p>
          <BrandsCarousel />
        </div>
      </section>

      <ProjectsGrid hoverImage={false} />

      <div className="">
        {/* <Impact /> */}
        <Impact2 />
        <Chronicles number={3} />
      </div>
    </div>
  );
}
