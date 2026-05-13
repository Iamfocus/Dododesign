"use client";
import { useState } from "react";
import ProjectsGrid from "../ProjectsGrid";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "All projects",
      component: <ProjectsGrid hoverImage={true} />,
    },
    { id: 1, label: "Research", component: <ProjectsGrid hoverImage={true} /> },
    { id: 2, label: "Strategy", component: <ProjectsGrid hoverImage={true} /> },
    { id: 3, label: "Design", component: <ProjectsGrid hoverImage={true} /> },
  ];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      {/* <div className="w-full overflow-x-scroll flex items-center justify-between sm:w-4/5 lg:w-3/5 xl:w-3/5 md:gap-5 xl:gap-10 px-5 md:px-10 pb-5 md:pb-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full py-3 text-center md:text-2xl transition cursor-pointer ${
              activeTab === tab.id
                ? "border-b-2 font-helvetica-medium border-dodo-black text-dodo-black"
                : "text-black hover:text-black"
            }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div> */}

      {/* Tab Content - Render Component */}
      <div className="mt-2">{tabs[activeTab].component}</div>
    </div>
  );
};

export default Tabs;
