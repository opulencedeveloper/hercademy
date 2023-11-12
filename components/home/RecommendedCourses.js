import Image from "next/image";

import googleIcon from "../../public/asset/icons/google-icon.svg";
import hertechtrailIcon from "../../public/asset/icons/hertechtrail-icon.svg";
import webDevImage from "../../public/asset/images/become-web-dev-image.svg";
import frontEndFundametalsImage from "../../public/asset/images/front-end-fundametals-image.svg";
import { useRouter } from "next/router";

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

  return (
    <section className="mt-7 px-5">
      <p className="text-primary1 text-[14px] font-semibold">
        Recommended Courses
      </p>
      <div className="flex overflow-x-auto scrollbar-hide space-x-3 mt-3">
        {recommendedCourses.map((courseInfo, index) => (
          <div
            key={index}
            onClick={() =>
              router.push(`/recommendedcoursesdetails/${courseInfo.id}`)
            }
            className="w-[185px] flex-shrink-0 rounded-[4px] overflow-hidden"
          >
            <div className="h-[107px] bg-green-200 w-full overflow-hidden">
              <Image
                src={courseInfo.image}
                height={107}
                width={185}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-full bg-secondaryShade1 py-2 px-2.5">
              <div className="flex space-x-1.5 mb-0.5 ">
                <div className="h-[14px] w-[14px]">
                  <Image
                    src={courseInfo.titleIcon}
                    alt="google icon"
                    height={14}
                    width={14}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[10px]">{courseInfo.title}</p>
              </div>
              <p className="font-semibold text-[10px] leading-tight">
                {courseInfo.subTitle}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <p className="text-[10px]">Beginner</p>
                <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
                <p className="text-[10px]">Course</p>
                <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
                <p className="text-[10px]">{courseInfo.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;
