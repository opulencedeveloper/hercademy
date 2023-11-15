import { useState } from "react";

const sectionItems = ["Categories", "Trainings", "Jobs", "Courses", "Blogs"];

const SectionSelector = () => {
  const [selectedSection, setSelectedSection] = useState("Categories");

  return (
    <div className="flex space-x-4 justify-between overflow-x-auto scrollbar-hide mx-4 h-[31px] mt-8 md:hidden">
      {sectionItems.map((item, index) => {
        const styleInfo =
          selectedSection === item
            ? "bg-primary text-white"
            : "bg-secondary3 bg-primary1";
        return (
          <div
            key={index}
            className={`px-2 flex w-full items-center justify-center cursor-pointer rounded-[4px] h-full text-[12px] font-medium ${styleInfo}`}
            onClick={() => setSelectedSection(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default SectionSelector;
