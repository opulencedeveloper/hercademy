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
import moniePointWomenInTechImage from "../../public/asset/images/moniepoint-women-in-tech-image.svg"
import learnTechImage from "../../public/asset/images/learn-tech-image.svg";
import ihsWomenImage from "../../public/asset/images/ihs-women-image.svg";

const techEventImages = [techHerFirstImage, devfestImage, beyondInclusionImage];

const upcomingBootcampsImages = [learnTechImage, ihsWomenImage, learnTechImage];

const empowerHerImages = [
  businessGrantImage,
  scholarshipImage,
  businessGrantImage,
];

const content2Images = [womenInTechImage, moniePointWomenInTechImage, womenInTechImage];

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

const ExploreTab = () => {
  return (
    <>
      <div className="px-4">
        <p className="text-[16px] font-bold mb-1">Explore</p>
        <p className="text-[12px] font-medium">
          Keep learning and building more skills.
        </p>
        <div className="flex items-center rounded-[8px] overflow-hidden h-[44px] mt-7 bg-secondaryShade5">
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
            <div
              key={index}
              className="border-b-[0.4px] border-secondaryShade2 pb-2 mt-6"
            >
              {" "}
              <div className="flex justify-between items-center ">
                <div className="flex space-x-3 items-center">
                  <div className="h-[50px] w-[71px] rounded-[4px] overflow-hidden bg-slate-600">
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
                  <p className="text-[16px] font-semibold">{data.title}</p>
                </div>

                <div className="h-[12.22px] w-[5.49px]">
                  <Image
                    src={angleRightIcon}
                    height={10}
                    width={5}
                    alt="angle right icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <button className="text-primary font-semibold text-[12px]">
              View all
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start px-4 mt-11 justify-between">
        <div>
          <p className="font-semibold text-[16px]">Empower Her</p>
          <p className="font-medium text-[12px] text-secondary">
            Female tech scholarships
          </p>
        </div>
        <button className="text-primary font-semibold text-[12px]">
          View all
        </button>
      </div>
      <div className="flex h-[133px] overflow-auto scrollbar-hide space-x-2 ml-4 mt-3 mb-10">
        {empowerHerImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-[4px] overflow-hidden w-[125px] h-full"
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

      <div className="flex h-[133px] overflow-auto scrollbar-hide space-x-2 ml-4 mt-3">
        {content2Images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[125px] h-full">
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

      <p className="font-semibold text-[16px] px-4 mt-7">Upcoming Bootcamps</p>

      <div className="flex h-[133px] overflow-auto scrollbar-hide space-x-2 pl-4 mt-4">
        {upcomingBootcampsImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-[4px] overflow-hidden w-[125px] h-full"
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
    </>
  );
};

export default ExploreTab;
