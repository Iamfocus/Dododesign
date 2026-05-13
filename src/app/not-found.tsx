import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80dvh] gap-10 lg:gap-20 m-auto pt-[120px] pb-[100px] px-5 md:px-[100px]">
      <h1 className="font-helvetica-bold text-center text-2xl lg:text-[80px] lg:leading-[100%] lg:tracking-[-3px]">
        This page does not exist
      </h1>
      <Link href="/">
        <Button text="back to home" className="uppercase w-fit" />
      </Link>
    </div>
  );
}
