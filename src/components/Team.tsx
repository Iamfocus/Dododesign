import React from "react";
import PagesHeader from "./PagesHeader";
import Image from "next/image";

function Team() {
  const directors = [
    {
      fName: "Susan Onigbinde",
      image: "susanOniginde.jpeg",
      transform: false,
    },
    {
      fName: "Aderonke Adekunle",
      image: "aderonkeAdekunle.jpeg",
      transform: false,
    },
    {
      fName: "Melvina Okechukwu",
      image: "melvinaOkechukwu.jpeg",
      transform: true,
    },
    {
      fName: "Mujeedah Ashiru",
      image: "mujeedahAshiru.jpeg",
      transform: true,
    },
    {
      fName: "Debb Balogun",
      image: "debbBalogun.jpeg",
      transform: false,
    },
  ];
  const teams = [
    ...directors,
    {
      fName: "Omowunmi Bello",
      image: "omowunmiBello.jpeg",
      transform: false,
    },
    {
      fName: "Semilore Adeyoye",
      image: "semiloreAdeyoye.jpeg",
      transform: false,
    },
    {
      fName: "Stephen Ojebisi",
      image: "stehphenOjebisi.jpeg",
      transform: true,
    },
    {
      fName: "Taiwo Adejoke",
      image: "taiwoAdejoke.jpeg",
      transform: false,
    },
    {
      fName: "Gregory Isiogu",
      image: "gregoryIsiogu.jpeg",
      transform: false,
    },
    {
      fName: "Busola Oyetunji",
      image: "busolaOyetunji.jpeg",
      transform: false,
    },
  ];
  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-[100px] pt-[60px] lg:pt-[120px] flex flex-col items-start gap-10 md:gap-20">
      {/* <section className="directors flex flex-col gap-10 lg:gap-20 lg:pb-[60px] xl:pb-[120px]">
        <PagesHeader
          title="Board of"
          subTitle="directors"
          description="A team of seasoned leaders shaping our vision and impact through strategic insight and innovation."
          className=" leading-10 stext-3xl! xl:text-[100px]!"
          wrapperClass="p-0! "
        /> */}
      {/* BOARD OF DIRECTORS -- HIDDEN BELOW */}
      {/* <div className="w-full grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
          {directors.map((director, i: number) => {
            return (
              <div
                className="profile w- flex flex-col gap-5 justify-center items-center"
                key={i}
              >
                <div className="w-30 h-30 md:w-50 md:h-50 2xl:w-60 2xl:h-60 rounded-full overflow-hidden flex justify-center items-center">
                  <Image   loading="eager" 
  decoding="async"

                    src={`/Images/Team/${director.image}`}
                    width={2050}
                    height={50}
                    className={`w-full h-full object-cover object-top ${
                      director.transform ? "transform scale-x-[-1]" : ""
                    }`}
                    alt="picture of a team member"
                  />
                </div>
                <p className="text-dodo-black font-helvetica-medium text-center">
                  {director.fName}
                </p>
              </div>
            );
          })}
        </div> */}
      {/* BOARD OF DIRECTORS -- HIDDEN ABOVE */}
      {/* </section> */}
      <section className="team flex flex-col gap-10 lg:gap-20 lg:pb-[60px] xl:pb-[120px]">
        <PagesHeader
          title="Our"
          subTitle="team"
          description="We're a collective of passionate individuals who lead with empathy and strive for excellence in every solution we create with our clients and users."
          className=" leading-10 stext-3xl! xl:text-[100px]!"
          wrapperClass="p-0! "
        />

        <div className="mobile flex xl:hidden flex-col">
          <section className="profiles w-full flex flex-col items-start justify-stretch gap-10 lg:gap-20">
            <div className="w-full grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 ">
              {teams.map((team, i: number) => {
                return (
                  <div
                    className="profile w- flex flex-col gap-5 justify-center items-center"
                    key={i}
                  >
                    <div
                      className={`w-30 h-30 md:w-50 md:h-50 2xl:w-60 2xl:h-60 rounded-full overflow-hidden flex justify-center items-center`}
                    >
                      <Image
                        loading="eager"
                        decoding="async"
                        src={`/Images/Team/${team.image}`}
                        width={2050}
                        height={50}
                        className={`w-full h-full object-cover object-top ${
                          team.transform ? "transform scale-x-[-1]" : ""
                        }`}
                        alt="picture of a team member"
                      />
                    </div>
                    <p className="text-dodo-black font-helvetica-medium text-center">
                      {team.fName}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div className="hidden xl:flex flex-col gap-10">
          <div className="w-full grid gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {directors.map((team, i: number) => {
              return (
                <div
                  className="profile w- flex flex-col gap-5 justify-center items-center"
                  key={i}
                >
                  <div
                    className={`w-30 h-30 md:w-50 md:h-50 2xl:w-50 2xl:h-50 rounded-full overflow-hidden flex justify-center items-center`}
                  >
                    <Image
                      loading="eager"
                      decoding="async"
                      src={`/Images/Team/${team.image}`}
                      width={2050}
                      height={50}
                      className={`w-full h-full object-cover object-top ${
                        team.transform ? "transform scale-x-[-1]" : ""
                      }`}
                      alt="picture of a team member"
                    />
                  </div>
                  <p className="text-dodo-black font-helvetica-medium text-center">
                    {team.fName}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full grid gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
            {teams.slice(directors.length).map((team, i: number) => {
              return (
                <div
                  className="profile w- flex flex-col gap-5 justify-center items-center"
                  key={i}
                >
                  <div
                    className={`w-30 h-30 md:w-50 md:h-50 2xl:w-50 2xl:h-50 rounded-full overflow-hidden flex justify-center items-center`}
                  >
                    <Image
                      loading="eager"
                      decoding="async"
                      src={`/Images/Team/${team.image}`}
                      width={2050}
                      height={50}
                      className={`w-full h-full object-cover object-top ${
                        team.transform ? "transform scale-x-[-1]" : ""
                      }`}
                      alt="picture of a team member"
                    />
                  </div>
                  <p className="text-dodo-black font-helvetica-medium text-center">
                    {team.fName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
