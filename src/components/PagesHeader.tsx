import React from "react";
import Title from "./Title";
import PagesDescr from "./PagesDescr";
interface IPageHeader {
  title: string;
  description: string;
  subTitle?: string;
  className?: string;
  wrapperClass?: string;
}

function PagesHeader({
  title,
  subTitle,
  description,
  className,
  wrapperClass,
}: IPageHeader) {
  return (
    <header
      className={`texts w-full flex flex-col gap-6 lg:w-5/6 xl:w-5/6 p-5 py-10 md:p-10 lg:px-[100px] lg:py-40 ${
        wrapperClass ? wrapperClass : ""
      }`}
    >
      <Title text={title} className={className}>
        {subTitle}
      </Title>
      <PagesDescr text={description} />
    </header>
  );
}

export default PagesHeader;
