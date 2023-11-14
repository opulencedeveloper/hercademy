import RecommendedCourses from "../home/RecommendedCourses";
import SectionSelector from "../home/SectionSelector";
import TechProgrammes from "../home/TechProgrammes";
import TopSection from "../home/TopSection";
import UpcomingTechEvents from "../home/UpcomingTechEvents";

const categories = [
  "Trainings",
  "Jobs",
  "Courses",
  "Blogs",
  "Tech events",
  "Communities",
  "Portfolio",
  "Tech scholarship",
];

const HomeTab = () => {
  return (
    <>
      <TopSection />
      <SectionSelector />
      
        {" "}
        <div className="flex justify-between mt-8 w-full h-full md:mt-14 md:px-20 lg:px-32">
          <div className="hidden md:flex flex-col w-[280px] h-max  flex-shrink-0 shadow-customShadow2 rounded-[8px] bg-secondary5 p-7 mr-10">
            <div className="border-b border-secondaryShade1 pb-4">
              {" "}
              <div className="flex items-center h-[37px] text-[20px] font-semibold pl-3 bg-primary text-white rounded-[8px]">
                CATEGORIES
              </div>
            </div>
            <div className="space-y-5 mt-5">
              {categories.map((categoriesData, index) => (
                <div key={index} className="font-medium text-[16px]">
                  {categoriesData}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full h-full md:w-[75%]">
            {" "}
            <RecommendedCourses />
            <UpcomingTechEvents />
          </div>
        </div>
      <TechProgrammes />
    </>
  );
};

export default HomeTab;
