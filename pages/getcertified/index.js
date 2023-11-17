import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import workspacePremiumIcon from "../../public/asset/icons/workspace-premium-icon.svg";
import bookMarkWhiteIcon from "../../public/asset/icons/bookmark-white-icon.svg";
import PaymentSelection from "@/components/techtprogrammesdetails/PaymentSelection";
import playRoundedIcon from "../../public/asset/icons/play-rounded-icon.svg";
import hertechtrailIcon from "../../public/asset/icons/hertechtrail-icon.svg";
import frontEndFundametalsImage from "../../public/asset/images/front-end-fundametals-image.svg";

import Loading from "@/components/UI/Loading";

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


const TechProgrammeDetail = () => {
  const router = useRouter(); 

  const [showLoading, setShowLoading] = useState(true); 
  
  const loadingSwitcher = () => {
    setShowLoading((prev) => !prev);
  };
  
  return showLoading ? (
    <Loading loadingSwitcher={loadingSwitcher} /> 
  ) :  (
    <div className="relative w-full h-screen mx-auto scrollbar-hide overflow-y-auto pt-7 pb-2">
    
      <section className="px-4 mt-3 md:px-20 lg:px-32">
        <p className="text-[16px] font-semibold  md:text-[32px]">Get Certified!</p>
        <p className="text-[12px] text-secondary md:text-[17px]">
          Upgrade to gain access to certified courses, direct mentorship and
          community project collaboration.
        </p>
        <div className="relative w-full flex-shrink-0 rounded-[8px] overflow-hidden mt-3 mb-8">
          <div className="h-[197px] bg-green-200 w-full overflow-hidden md:h-[563px]">
            <Image
              src={frontEndFundametalsImage}
              alt="Fundaments of Front-end Development"
              height={107}
              width={185}
              priority
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full bg-secondaryShade1 pt-3 pb-2 px-3 md:px-7 md:py-6">
            <div className="flex space-x-1.5 mb-0.5 w-1/3">
              <div className="h-[14px] w-[14px] md:h-[26px] md:w-[26px]">
                <Image
                  src={hertechtrailIcon}
                  alt="google icon"
                  loading="eager"
                  priority
                  height={14}
                  width={14}
                  className="w-full h-full"
                />
              </div>
              <p className="text-[10px] md:text-[20px]">Hertechtrail</p>
            </div>
            <p className="font-semibold text-[10px] leading-tight w-1/2 md:text-[20px]">
              Fundaments of Front-end Development
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <p className="text-[10px] md:text-[20px] ">Beginner</p>
              <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
              <p className="text-[10px] md:text-[20px]">Course</p>
              <div className="flex-shrink-0 h-[3px] w-[3px] rounded-full bg-primaryShade3"></div>
              <p className="text-[10px] md:text-[20px]">3 weeks</p>
            </div>
          </div>
          {/* <div className="flex justify-between items-center absolute top-6 left-4 right-4">
            {" "}
            <div className="h-[24px] w-[24px] rounded-[2px] overflow-hidden md:h-[38px] md:w-[38px]">
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
            <div className="h-[11px] w-[11px] rounded-[2px] md:h-[18px] md:w-[18px]">
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
          </div> */}
        </div>
        {/* <PaymentSelection /> */}
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
    </div>
  );
};

export default TechProgrammeDetail;
