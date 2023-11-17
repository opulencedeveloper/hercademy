import { useRouter } from "next/router";
import { useState } from "react";
import Portal from "../UI/Portal";

const sectionItems = ["Categories", "Trainings", "Jobs", "Courses", "Blogs"];

const dropDown = [
  { title: "Training", id: "d1" },
  { title: "Jobs", id: "d2" },
  { title: "Courses", id: "d3" },
  { title: "Blogs", id: "d4" },
  { title: "Tech events", id: "d5" },
  { title: "Communities", id: "d6" },
  { title: "Portfolio", id: "d7" },
  { title: "Mock Interview", id: "d9" },
  { title: "CV Optimisation", id: "d10" },
  { title: "Tech scholarships", id: "d8" },
];

const handleScroll = (id) => {
  const targetElement = document.getElementById(id);

  if (targetElement) {
    window.scroll({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

const SectionSelector = ({ premiumSwitcherHandler }) => {
  const [selectedSection, setSelectedSection] = useState("Categories");
  const router = useRouter();
  const [showCategoriesDropDown, setShowCategoriesDropDown] = useState(false);

  return (
    <div className="relative">
      <div className=" flex space-x-4 justify-between overflow-x-auto scrollbar-hide mx-4 h-[31px] mt-8 md:hidden">
        {sectionItems.map((item, index) => {
          const styleInfo =
            selectedSection === item
              ? "bg-primary text-white"
              : "bg-secondary3 bg-primary1";
          return (
            <div
              key={index}
              className={` px-2 flex w-full items-center justify-center cursor-pointer rounded-[4px] h-full text-[12px] font-medium ${styleInfo}`}
              onClick={() => {
                setSelectedSection(item);
                if (index === 0) setShowCategoriesDropDown((prev) => !prev);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      {showCategoriesDropDown && (
        <Portal
          togglePortalHandler={() => setShowCategoriesDropDown((prev) => !prev)}
        >
          {" "}
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-customShadow1 p-5 rounded-[4px] space-y-3 z-30 bg-white w-[213px]">
            <div className="animateSlideDown h-full space-y-5 w-full">
              {" "}
              {dropDown.map((dropDownItem, index) => (
                <button
                  onClick={() => {
                    setShowCategoriesDropDown((prev) => !prev);
                    if (
                      dropDownItem.title !== "Communities" ||
                      dropDownItem.title !== "Portfolio"
                    ) {
                      handleScroll(dropDownItem.id);
                    }
                    if (dropDownItem.title === "Communities") {
                      router.push("/techcommunties");
                    }
                    if (dropDownItem.title === "Portfolio") {
                      premiumSwitcherHandler();
                    }
                  }}
                  key={index}
                  className="block text-[16px] text-primary1"
                >
                  {dropDownItem.title}
                </button>
              ))}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default SectionSelector;
