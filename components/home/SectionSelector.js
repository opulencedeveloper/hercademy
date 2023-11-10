import { useState } from "react";

const sectionItems = ["All", "Trainings", "Jobs", "Courses", "Blogs"];

const SectionSelector = () => {
  const [selectedSection, setSelectedSection] = useState("All");

  return (
    <div className="flex justify-between h-[31px] mt-8 px-5">
      {sectionItems.map((item, index) => {
        const styleInfo =
          selectedSection === item
            ? "bg-primary text-white"
            : "bg-secondary3 bg-primary1";
        return (
          <div
            key={index}
            className={`px-2 flex items-center justify-center cursor-pointer rounded-[4px] w-[62px] h-full text-[12px] font-medium ${styleInfo}`}
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