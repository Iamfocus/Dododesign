import PagesHeader from "@/components/PagesHeader";
import Project5Grid from "@/components/Project5Grid";
import Tabs from "@/components/Tabs/Tabs";
import { baseMetadata } from "@/Services/shared-metadata";
import React from "react";

export const metadata = {
  ...baseMetadata,
  title: "About DODO",
  description:
    "Drawing on nearly a decade of experience, we've partnered with diverse organizations to create solutions that respond to real human needs and drive meaningful value for business.",
};
function page() {
  return (
    <div className=" bg-white w-full ">
      <PagesHeader
        title="Our Work"
        description="Drawing on nearly a decade of experience, we've partnered with diverse organizations to create solutions that respond to real human needs and drive meaningful value for business."
      />
      <div className="flex flex-col gap-2">
        <Tabs />
        <Project5Grid />
      </div>
    </div>
  );
}

export default page;
