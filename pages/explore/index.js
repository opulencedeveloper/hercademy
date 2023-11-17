import Image from "next/image";

import searchIcon from "../../public/asset/icons/search-icon.svg";
import angleRightIcon from "../../public/asset/icons/angle-left-icon.svg";
import techHerFirstImage from "../../public/asset/images/tech-her-first-image.svg";
import devfestImage from "../../public/asset/images/devfest-image.svg";
import beyondInclusionImage from "../../public/asset/images/beyond-inclusion-image.svg";
import bestToolBackendImage from "../../public/asset/images/best-tool-backend-image.svg";
import productDesignImage from "../../public/asset/images/product-design-image.svg";
import productManagementImage from "../../public/asset/images/product-management-image.svg";
import businessGrantImage from "../../public/asset/images/business-grant-image.svg";
import scholarshipImage from "../../public/asset/images/scholarship-image.svg";
import womenInTechImage from "../../public/asset/images/women-in-texh-image.svg";
import moniePointWomenInTechImage from "../../public/asset/images/moniepoint-women-in-tech-image.svg";
import learnTechImage from "../../public/asset/images/learn-tech-image.svg";
import ihsWomenImage from "../../public/asset/images/ihs-women-image.svg";
import image4 from "../../public/asset/images/image-4.svg";
import image8 from "../../public/asset/images/image-8.svg";
import image9 from "../../public/asset/images/image-9.svg";
import image10 from "../../public/asset/images/image-10.svg";

import Layout from "@/components/layout/Layout";
import ChangeAreaOfIntrest from "@/components/explore/ChangeAreaOfIntrest";
import { useState } from "react";
import Loading from "@/components/UI/Loading";

const techEventImages = [techHerFirstImage, devfestImage, beyondInclusionImage];

const upcomingBootcampsImages = [
  learnTechImage,
  image10,
  ihsWomenImage,
  learnTechImage,
  image10,
  ihsWomenImage,
];

const empowerHerImages = [
  businessGrantImage,
  scholarshipImage,
  image4,
  image8,businessGrantImage
];

const content2Images = [
  womenInTechImage,
  moniePointWomenInTechImage,
  image9,
  womenInTechImage,
  moniePointWomenInTechImage,
  image9,
];

const content = [
  {
    image: bestToolBackendImage,
    title: "Back-end Development",
  },
  {
    image: productDesignImage,
    title: "Product Design",
  },
  {
    image: productManagementImage,
    title: "Product Management",
  },
];

const Explore = () => {
  const [showAreaOfIntrest, setAreaOfIntrest] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  
  const loadingSwitcher = () => {
    setShowLoading((prev) => !prev);
  };

  const toggleAreaOfIntrest = () => {
    setAreaOfIntrest((prev) => !prev);
  };

  return showLoading ? (
    <Loading loadingSwitcher={loadingSwitcher} /> 
  ) : (
    <Layout>
      {showAreaOfIntrest && (
        <ChangeAreaOfIntrest toggleAreaOfIntrest={toggleAreaOfIntrest} />
       )}
      <div className="px-4 md:px-20 lg:px-32">
        <p className="text-[16px] font-bold mb-1 md:text-[60px]">Explore</p>
        <p className="text-[12px] font-medium md:text-[32px]">
          Keep learning and building more skills.
        </p>
        <div className="flex items-center rounded-[8px] overflow-hidden h-[44px] mt-7 bg-secondaryShade5 w-full md:h-[55px] md:w-1/2">
          <div className="h-[18px] w-[18px] ml-5 mr-3">
            <Image
              src={searchIcon}
              alt="search icon"
              height={18}
              width={18}
              loading="eager"
              priority
              className="w-full h-full"
            />
          </div>
          <input
            //   onChange={filterIntrestHandler}
            placeholder="Search"
            className="h-full bg-transparent flex-1 outline-none"
          />
        </div>

        <div className="mt-7">
          {content.map((data, index) => (
            <button
              onClick={toggleAreaOfIntrest}
              key={index}
              className="flex justify-between items-center w-full mt-6 shadow-customShadow3 pr-2 overflow-hidden"
            >
              <div className="flex space-x-3 items-center md:space-x-0 md:w-full">
                <div className="h-[60px] w-[71px] flex-shrink-0 rounded-[4px] overflow-hidden bg-slate-600 md:h-[94px] md:w-[133px]">
                  <Image
                    src={data.image}
                    className="h-full w-full object-cover"
                    alt="image"
                    width={71}
                    height={50}
                    priority
                    loading="eager"
                  />
                </div>
                <p className="text-[16px] font-semibold md:text-[20px] md:w-full md:flex md:justify-center">
                  {data.title}
                </p>
              </div>

              <div className="h-[12.22px] w-[5.49px]">
                <Image
                  src={angleRightIcon}
                  height={10}
                  width={5}
                  loading="eager"
                  priority
                  alt="angle right icon"
                  className="w-full h-full"
                />
              </div>
            </button>
          ))}
          <div className="flex justify-end mt-4">
            <button className="text-primary font-semibold text-[12px] md:text-[16px]">
              View all
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start px-4 mt-11 justify-between md:px-20 lg:px-32">
        <div>
          <p className="font-semibold text-[16px] md:text-[24px]">
            Empower Her
          </p>
          <p className="font-medium text-[12px] text-secondary md:text-[20px]">
            Female tech scholarships
          </p>
        </div>
        <button className="text-primary font-semibold text-[12px] md:text-[16px]">
          View all
        </button>
      </div>
      <div className="flex h-[133px] overflow-auto pb-1 space-x-2 ml-4 mt-3 pr-4 mb-10 md:mx-20 lg:mx-32 md:space-x-8 md:h-[265px]">
        {empowerHerImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-[4px] overflow-hidden w-[125px] h-full md:w-[272px] "
          >
            <Image
              src={image}
              alt="tech event"
              priority
              loading="eager"
              height={111}
              width={110}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <p className="font-semibold pl-4 text-[16px] md:text-[24px] md:mt-14 md:pl-20 lg:pl-32">
        Female Internship Roles In Tech
      </p>
      <div className="flex h-[133px] overflow-auto pb-1 pr-4 space-x-2 ml-4 rounded-[4px] mt-3 md:mx-20 md:space-x-8 md:h-[265px] lg:mx-32">
        {content2Images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[125px] rounded-[4px] overflow-hidden h-full md:w-[272px]"
          >
            <Image
              src={image}
              alt="tech event"
              priority
              loading="eager"
              height={111}
              width={110}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <p className="font-semibold text-[16px] px-4 mt-7 md:mt-14 md:text-[24px] md:px-20 lg:px-32">
        Upcoming Bootcamps
      </p>

      <div className="flex h-[133px] overflow-auto pb-1 pr-4 space-x-2 ml-4 mt-4 md:mt-6 md:space-x-8 md:h-[265px] md:mx-20 lg:mx-32">
        {upcomingBootcampsImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-[4px] overflow-hidden w-[125px] h-full md:w-[272px]"
          >
            <Image
              src={image}
              alt="tech event"
              priority
              loading="eager"
              height={111}
              width={110}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Explore;
