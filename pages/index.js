import TopSection from "@/components/home/TopSection";
import SectionSelector from "@/components/home/SectionSelector";
import Layout from "@/components/layout/Layout";
import RecommendedCourses from "@/components/home/RecommendedCourses";
import UpcomingTechEvents from "@/components/home/UpcomingTechEvents";
import SectionOne from "@/components/home/SectionOne";

export default function Home() {
 
  return (
    <Layout>
      <TopSection />
      <SectionSelector />
      <RecommendedCourses />
      <UpcomingTechEvents />
      <SectionOne />
    </Layout>
  );
}
