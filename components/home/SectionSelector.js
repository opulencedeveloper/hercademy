import { useState } from "react";

const sectionItems = ["Catergories", "Trainings", "Jobs", "Courses", "Blogs"];

const SectionSelector = () => {
  const [selectedSection, setSelectedSection] = useState("All");

  return (
    <div className="flex space-x-4 justify-between h-[31px] mt-8 px-4 md:hidden">
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
