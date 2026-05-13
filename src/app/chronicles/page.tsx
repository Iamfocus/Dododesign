import Chronicles from "@/components/Chronicles";
import PagesHeader from "@/components/PagesHeader";
import ChroniclesTabs from "@/components/Tabs/ChroniclesTabs";
import React from "react";

function page() {
  return (
    <div className=" bg-white w-full ">
      <PagesHeader
        title="Chronicles"
        description="Get a glimpse into  stories and reflections from our projects and our people, as we work to uncover the authentic needs of the African user."
      />

      <ChroniclesTabs />
    </div>
  );
}

export default page;
