import Image from "next/image";
import { useRouter } from "next/router";

import googleIcon from "../../public/asset/icons/google-icon.svg";
import hertechtrailIcon from "../../public/asset/icons/hertechtrail-icon.svg";
import webDevImage from "../../public/asset/images/become-web-dev-image.svg";
import frontEndFundametalsImage from "../../public/asset/images/front-end-fundametals-image.svg";
import bookMarkWhiteIcon from "../../public/asset/icons/bookmark-white-icon.svg";
import workspacePremiumIcon from "../../public/asset/icons/workspace-premium-icon.svg";

const recommendedCourses = [
  {
    id: "c1",
    image: webDevImage,
    titleIcon: googleIcon,
    title: "Google",
    subTitle: "Front-end Development Beginners Guide",
    duration: "3 weeks",
    link: "/courseone",
  },
  {
    id: "c2",
    image: frontEndFundametalsImage,
    titleIcon: hertechtrailIcon,
    title: "Hertechtrail",
    subTitle: "Fundaments of Front-end Development",
    duration: "3 months",
    link: "/getcertified",
  },
  {
    id: "c3",
    image: webDevImage,
    titleIcon: googleIcon,
    title: "Google",
    subTitle: "Front-end Development Beginners Guide",
    duration: "3 weeks",
    link: "/courseone",
  },
  {
    id: "c4",
    image: frontEndFundametalsImage,
    titleIcon: hertechtrailIcon,
    title: "Hertechtrail",
    subTitle: "Fundaments of Front-end Development",
    duration: "3 months",
    link: "/getcertified",
  },
];

const RecommendedCourses = () => {
  const router = useRouter();

  return (
    <section id="d3" className="flex flex-col pl-4 md:px-0">
      <p className="text-primary1 text-[14px] font-semibold md:text-[24px]">
        Recommended Courses
      </p>
      <div className="flex overflow-x-auto rounded-[8px] space-x-3 mt-3 pr-4">
        {recommendedCourses.map((courseInfo, index) => (
          <div
            key={index}
            onClick={() => router.push(courseInfo.link)}
            className="w-[185px] flex-shrink-0 rounded-[4px] overflow-hidden pb-1 cursor-pointer md:w-[284px]"
          >
            <div className="relative h-[107px] bg-green-200 w-full overflow-hidden md:h-[158px]">
              <Image
                src={courseInfo.image}
                alt="Course Info"
                height={107}
                width={185}
                priority
                loading="eager"
                className="h-full w-full object-cover"
              />
              {/* {index > 0 && (
                <div className="flex justify-between items-center absolute top-2.5 left-2 right-2">
                  {" "}
                  <div className="h-[24px] w-[24px]">
                    <Image
                      src={workspacePremiumIcon}
                      alt="premium icon"
                      priority
                      loading="eager"
                      height={24}
                      width={24}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="h-[20px] w-[20px]">
                    <Image
                      src={bookMarkWhiteIcon}
                      alt="book  mark icon"
                      priority
                      loading="eager"
                      height={24}
                      width={24}
                      className="h-full w-full"
                    />
                  </div>{" "}
                </div>
              )} */}
            </div>
            <div className="w-full bg-secondaryShade1 py-2 px-2.5">
              <div className="flex space-x-1.5 mb-0.5 ">
                <div className="h-[14px] w-[14px] md:h-[18px] md:w-[18px]">
                  <Image
                    src={courseInfo.titleIcon}
                    alt="course icon"
                    height={14}
                    width={14}
                    priority
                    loading="eager"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[10px] md:text-[12px]">{courseInfo.title}</p>
              </div>
              <p className="font-semibold text-[10px] leading-tight md:text-[12px]">
                {courseInfo.subTitle}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <p className="text-[10px] md:text-[12px]">Beginner</p>
                <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
                <p className="text-[10px] md:text-[12px]">Course</p>
                <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
                <p className="text-[10px] md:text-[12px]">
                  {courseInfo.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;
