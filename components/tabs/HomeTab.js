import RecommendedCourses from "../home/RecommendedCourses";
import SectionSelector from "../home/SectionSelector";
import TechProgrammes from "../home/TechProgrammes";
import TopSection from "../home/TopSection";
import UpcomingTechEvents from "../home/UpcomingTechEvents";

const HomeTab = () => {
  return (
    <>
      <TopSection /> 
      <SectionSelector />
      <RecommendedCourses />
      <UpcomingTechEvents />
      <TechProgrammes />
    </>
  );
};

export default HomeTab;
