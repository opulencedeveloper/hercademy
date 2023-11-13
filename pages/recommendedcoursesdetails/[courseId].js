import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "@/components/layout/Layout";

import arrowBackIcon from "../../public/asset/icons/arrow-back-icon.svg";
import googleIcon from "../../public/asset/icons/google-icon.svg";
import hertechtrailIcon from "../../public/asset/icons/hertechtrail-icon.svg";
import webDevImage from "../../public/asset/images/become-web-dev-image.svg";
import frontEndFundametalsImage from "../../public/asset/images/front-end-fundametals-image.svg";

import playIcon from "../../public/asset/icons/play-icon.svg";
import bookmarkIcon from "../../public/asset/icons/bookmark-icon.svg";
import downloadIcon from "../../public/asset/icons/download-icon.svg";
import shareIcon from "../../public/asset/icons/share-icon.svg";
import playRoundedIcon from "../../public/asset/icons/play-rounded-icon.svg";

const sectionNav = [
  {
    icon: playIcon,
    title: "Play All",
  },
  {
    icon: bookmarkIcon,
    title: "Wishlist",
  },
  {
    icon: downloadIcon,
    title: "Download",
  },
  {
    icon: shareIcon,
    title: "Share",
  },
];

const sectionContent = [
  {
    title: "Introduction to Front-End Development",
    description:
      "Understanding front-end vs. back-end development.Importance of front-end development in web applications.",
    duration: "30mins",
  },
  {
    title: "HTML (HyperText Markup Language)",
    description:
      "Basic HTML structure and syntax. Working with headings, paragraphs, lists, and links. Forms and input elements.",
    duration: "40mins",
  },
  {
    title: "CSS (Cascading Style Sheets)",
    description:
      "Introduction to CSS and its role in web design. CSS selectors and properties. Styling text, colors, backgrounds, and borders. CSS layout techniques",
    duration: "2hrs",
  },
  {
    title: "Responsive Web Design",
    description:
      "Media queries and breakpoints. Fluid grids and flexible images. Mobile-first approach to design.",
    duration: "2hrs",
  },
  {
    title: "CSS (Cascading Style Sheets)",
    description:
      "Introduction to CSS and its role in web design. CSS selectors and properties. Styling text, colors, backgrounds, and borders. CSS layout techniques",
    duration: "2hrs",
  },
  {
    title: "Responsive Web Design",
    description:
      "Media queries and breakpoints. Fluid grids and flexible images. Mobile-first approach to design.",
    duration: "2hrs",
  },
  {
    title: "Introduction to Front-End Development",
    description:
      "Understanding front-end vs. back-end development.Importance of front-end development in web applications.",
    duration: "30mins",
  },
];

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
    <section className="relative max-w-[40rem] h-screen mx-auto scrollbar-hide overflow-y-auto pt-10 pb-2">
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
      <section className="px-4 mt-2">
        {" "}
        <div className="w-full flex-shrink-0 rounded-[4px] overflow-hidden mb-5">
          <div className="h-[192px] bg-green-200 w-full overflow-hidden">
            <Image
              src={courseDetails.image}
              alt={courseDetails.title}
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
        <div className="flex justify-between mb-7">
          {sectionNav.map((navData, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="h-[23px] w-[23px]">
                <Image
                  src={navData.icon}
                  alt={navData.title}
                  height={23}
                  width={23}
                  className="w-full h-full cursor-pointer"
                />
              </div>
              <p className="text-[12px] text-primary">{navData.title}</p>
            </div>
          ))}
        </div>
        <p className="font-bold text-[16px]">Course Content: 10 classes</p>
        <p className="text-[14px] font-medium text-secondary mt-1">
          Front-end development essentials course for beginners. Learn
          foundational skills...
        </p>
        <div className="flex flex-col space-y-8 mt-9">
          {" "}
          {sectionContent.map((sectionData, index) => (
            <div
              key={index}
              className="flex justify-between items-end bg-secondaryShade10 px-2.5 py-2 rounded-[4px]"
            >
              <div className="w-[82%]">
                <p className="font-semibold text-[16px]">
                  {sectionData.title}:
                </p>
                <p className="text-[13px]">{sectionData.description}</p>
              </div>
              <div className="flex flex-col items-center mb-5">
                <div className="flex-shrink-0 h-[32px] w-[32px]">
                  <Image
                    src={playRoundedIcon}
                    alt="play iconb"
                    className="w-full h-full"
                    height={32}
                    width={32}
                  />
                </div>
                <p className="font-semibold text-[12px] text-primary1">
                  {sectionData.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RecommendedCourses;
