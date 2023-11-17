import { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import googleIcon from "../../public/asset/icons/google-icon.svg";
import hertechtrailIcon from "../../public/asset/icons/hertechtrail-icon.svg";
import webDevImage from "../../public/asset/images/become-web-dev-image.svg";
import frontEndFundametalsImage from "../../public/asset/images/front-end-fundametals-image.svg";

import playIcon from "../../public/asset/icons/play-icon.svg";
import bookmarkIcon from "../../public/asset/icons/bookmark-icon.svg";
import downloadIcon from "../../public/asset/icons/download-icon.svg";
import shareIcon from "../../public/asset/icons/share-icon.svg";
import playRoundedIcon from "../../public/asset/icons/play-rounded-icon.svg";

import Loading from "@/components/UI/Loading";

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
];

const coursesrecommended = [
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
  {
    id: "c4",
    image: webDevImage,
    titleIcon: googleIcon,
    title: "Google",
    subTitle: "Front-end Development Beginners Guide",
    duration: "3weeks",
  },
];

const RecommendedCourses = () => {
  const router = useRouter();

  const [showLoading, setShowLoading] = useState(true);

  const loadingSwitcher = () => {
    setShowLoading((prev) => !prev);
  };

  return showLoading ? (
    <Loading loadingSwitcher={loadingSwitcher} />
  ) : (
    <section className="relative w-full h-screen mx-auto scrollbar-hide overflow-y-auto pt-7 pb-2">
      <section className="px-4 mt-2 md:px-20 lg:px-32">
        {" "}
        <div className="w-full flex-shrink-0 rounded-[4px] overflow-hidden mb-5">
          <div className="h-[192px] bg-green-200 w-full overflow-hidden md:h-[563px]">
            <Image
              src={webDevImage}
              alt="Front-end Development Beginners Guide Image"
              height={107}
              width={185}
              loading="eager"
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full bg-secondaryShade1 pt-3 pb-2 px-3 md:px-7 md:py-6">
            <div className="flex items-center space-x-1.5 mb-0.5 w-1/3">
              <div className="h-[14px] w-[14px] md:h-[26px] md:w-[26px]">
                <Image
                  src={googleIcon}
                  alt="google icon"
                  height={14}
                  width={14}
                  loading="eager"
                  priority
                  className="w-full h-full"
                />
              </div>
              <p className="text-[10px] md:text-[20px]">Google</p>
            </div>
            <p className="font-semibold text-[10px] leading-tight w-1/2 md:text-[24px]">
              Front-end Development Beginners Guide
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <p className="text-[10px] md:text-[20px]">Beginner</p>
              <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
              <p className="text-[10px] md:text-[20px]">Course</p>
              <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
              <p className="text-[10px] md:text-[20px]">3 weeks</p>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-between mb-7 md:px-20">
          {sectionNav.map((navData, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="h-[23px] w-[23px] md:w-[40px] md:h-[40px]">
                <Image
                  src={navData.icon}
                  alt={navData.title}
                  height={23}
                  width={23}
                  loading="eager"
                  priority
                  className="w-full h-full cursor-pointer"
                />
              </div>
              <p className="text-[12px] text-primary">{navData.title}</p>
            </div>
          ))}
        </div>
        <p className="font-bold text-[16px] md:text-[28px]">
          Course Content: 10 classes
        </p>
        <p className="text-[14px] font-medium text-secondary mt-1 md:text-[20px]">
          Front-end development essentials course for beginners. Learn
          foundational skills...
        </p>
        <div className="flex flex-col space-y-8 mt-9">
          {" "}
          {sectionContent.map((sectionData, index) => (
            <div
              key={index}
              className="flex justify-between items-end bg-secondaryShade10 px-2.5 py-2 rounded-[4px] md:py-4 md:px-4"
            >
              <div className="w-[82%] md:w-[60%]">
                <p className="font-semibold text-[16px] md:text-[24px]">
                  {sectionData.title}:
                </p>
                <p className="text-[13px] md:text-[20px]">
                  {sectionData.description}
                </p>
              </div>
              <div className="flex flex-col items-center mb-5">
                <div className="flex-shrink-0 h-[32px] w-[32px]">
                  <Image
                    src={playRoundedIcon}
                    alt="play iconb"
                    className="w-full h-full"
                    height={32}
                    width={32}
                    loading="eager"
                    priority
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
