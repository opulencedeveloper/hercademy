import { useState } from "react";
import { useRouter } from "next/router";

import RecommendedCourses from "../home/RecommendedCourses";
import SectionSelector from "../home/SectionSelector";
import TechProgrammes from "../home/AvailableTechScholarships";
import TopSection from "../home/TopSection";
import UpcomingTechEvents from "../home/UpcomingTechEvents";
import CommonLayout from "../UI/CommonLayout";
import RecruitersCorner from "../home/RecruitersCorner";
import PremiumOverlay from "../UI/PremiumOverlay";

import image11 from "../../public/asset/images/image-11.svg";
import image12 from "../../public/asset/images/image-12.svg";


const categories = [
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

const HomeTab = () => {
  const [isPremium, setIsPremium] = useState(false);
  const router = useRouter();

  const premiumSwitcherHandler = () => {
    setIsPremium((prev) => !prev);
  };

  const handleScroll = (id) => {
  const targetElement = document.getElementById(id);

  if (targetElement) {
    window.scroll({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

  return (
    <>
      <TopSection />
      <SectionSelector premiumSwitcherHandler={premiumSwitcherHandler}/>{" "}
      {isPremium && (
        <PremiumOverlay premiumSwitcherHandler={premiumSwitcherHandler} />
      )}
      <div className="flex justify-between mt-8 w-full h-full overflow-hidden md:mt-14 md:px-20 lg:px-32">
        <div className="hidden md:flex flex-col w-[280px] h-max  flex-shrink-0 shadow-customShadow2 rounded-[8px] bg-secondary5 p-7 mr-10">
          <div className="border-b border-secondaryShade1 pb-4">
            {" "}
            <div className="flex items-center h-[37px] text-[20px] font-semibold pl-3 bg-primary text-white rounded-[8px]">
              CATEGORIES
            </div>
          </div>
          <div className=" space-y-5 mt-5">
            {categories.map((categoriesData, index) => (
              <button
              onClick={() => {
                if (
                  categoriesData.title !== "Communities" ||
                  categoriesData.title !== "Portfolio"
                ) {
                  handleScroll(categoriesData.id);
                }
                if (categoriesData.title === "Communities") {
                  router.push("/techcommunties");
                }
                if (categoriesData.title === "Portfolio") {
                  premiumSwitcherHandler();
                }
              }}
              key={index}
              className="block text-[16px] text-primary1"
            >
              {categoriesData.title}
            </button>
              // <Link
              //   href={categoriesData.link}
              //   key={index}
              //   className="block font-medium text-[16px]"
              // >
              //   {categoriesData.title}
              // </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full h-full md:w-[75%]">
          {" "}
          <RecommendedCourses />
          <UpcomingTechEvents />
        </div>
      </div>
      <CommonLayout
      premiumSwitcherHandler={premiumSwitcherHandler}
      myId={"d9"}
        image={image11}
        title="Mock Interview"
        subTitle="Let’s help you get your dreamed job via our mock interview scheme. Book your own session now."
      />
      <TechProgrammes />
      <RecruitersCorner premiumSwitcherHandler={premiumSwitcherHandler}/>
      <CommonLayout
      premiumSwitcherHandler={premiumSwitcherHandler}
      myId={"d10"}
        image={image12}
        title="CV/LinkedIn Optimisation"
        subTitle="Let’s give you a professional CV that suits your dreamed job."
      />
    </>
  );
};

export default HomeTab;
