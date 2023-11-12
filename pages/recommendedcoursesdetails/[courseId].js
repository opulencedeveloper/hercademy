import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "@/components/layout/Layout";

import arrowBackIcon from "../../public/asset/icons/arrow-back-icon.svg";
import googleIcon from "../../public/asset/icons/google-icon.svg";
import hertechtrailIcon from "../../public/asset/icons/hertechtrail-icon.svg";
import webDevImage from "../../public/asset/images/become-web-dev-image.svg";
import frontEndFundametalsImage from "../../public/asset/images/front-end-fundametals-image.svg";

const recommendedCourses = [
  {
    id: "c1",
    image: webDevImage,
    titleIcon: googleIcon,
    title: "Google",
    subTitle: "Front-end Development Beginners Guide",
    duration: "3 weeks",
  },
  {
    id: "c2",
    image: frontEndFundametalsImage,
    titleIcon: hertechtrailIcon,
    title: "Hertechtrail",
    subTitle: "Fundaments of Front-end Development",
    duration: "3 months",
  },
  {
    id: "c3",
    image: webDevImage,
    titleIcon: googleIcon,
    title: "Google",
    subTitle: "Front-end Development Beginners Guide",
    duration: "3weeks",
  },
  ,
];

const RecommendedCourses = () => {
  const router = useRouter();
  const courseId = router.query.courseId;
  
  if (!courseId) return;

  const courseDetails = recommendedCourses.find((item) => item.id === courseId);
  return (
    <Layout>
      <button className="h-[14px] w-[14px] ml-4">
        <Image
          src={arrowBackIcon}
          onClick={() => router.back()}
          alt="back icon"
          className="h-full w-full"
          loading="eager"
          priority
        />
      </button>
      <section className="px-4">
        {" "}
        <div className="w-full flex-shrink-0 rounded-[4px] overflow-hidden ">
          <div className="h-[192px] bg-green-200 w-full overflow-hidden">
            <Image
              src={courseDetails.image}
              height={107}
              width={185}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full bg-secondaryShade1 pt-3 pb-2 px-3">
            <div className="flex space-x-1.5 mb-0.5 w-1/3">
              <div className="h-[14px] w-[14px]">
                <Image
                  src={courseDetails.titleIcon}
                  alt="google icon"
                  height={14}
                  width={14}
                  className="w-full h-full"
                />
              </div>
              <p className="text-[10px]">{courseDetails.title}</p>
            </div>
            <p className="font-semibold text-[10px] leading-tight w-1/2">
              {courseDetails.subTitle}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <p className="text-[10px]">Beginner</p>
              <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
              <p className="text-[10px]">Course</p>
              <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
              <p className="text-[10px]">{courseDetails.duration}</p>
            </div>
          </div>
        </div>{" "}
      </section>
    </Layout>
  );
};

export default RecommendedCourses;
