import { useEffect } from "react";
import Image from "next/image";

import closeIcon from "../../public/asset/icons/close-white-icon.svg";
import Portal from "../UI/Portal";

const sectionDetails = [
  { title1: "Jobs/Internships", title2: "CV/LinkedIn Optimisation" },
  { title1: "Portfolio", title2: "Mock Interviews" },
];

const PremiumOverlay = ({premiumSwitcherHandler}) => {
  return (
    <Portal togglePortalHandler={premiumSwitcherHandler}>
      <div className="w-[90%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg overflow-hidden md:max-w-[498px]">
        <div className=" h-full animateSlideUp ">
          {" "}
          <div className="flex-col items-center h-[208px] w-full bg-primary px-4">
            <div className="flex justify-end pt-4 ">
              <button
                onClick={premiumSwitcherHandler}
                className="h-[14px] w-[14px]"
              >
                <Image
                  src={closeIcon}
                  alt="close"
                  className="w-full h-full"
                  priority
                  loading="eager"
                />
              </button>
            </div>
            <p className="text-[20px] text-center max-w-sm mx-auto font-bold text-white mt-[4rem] leading-tight md:text-[24px]">
              Advance your career using our premium products
            </p>
          </div>
          <div className="flex flex-col shadow-sm  w-full bg-white pt-9 pb-3">
            <div className="flex flex-wrap justify-between px-4 w-full">
              {sectionDetails.map((sectionData, index) => (
                <div key={index} className="text-medium text-base md:text-[20px]">
                  <div className="flex items-end">
                    <div className=" h-[8px] w-[8px] rounded-full bg-black mb-2 mr-1.5 md:h-[11px] md:w-[11px]"></div>
                    <p>{sectionData.title1}</p>
                  </div>
                  <div className="flex items-end">
                    <div className="h-[8px] w-[8px] rounded-full bg-black mb-2 mr-1.5  md:h-[11px] md:w-[11px]"></div>
                    <p>{sectionData.title2}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-white mx-4 text-[16px] font-bold mt-9 bg-primary py-3 rounded-[8px] md:mx-8 md:text-[20px]">
              Unlock Premium Products
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default PremiumOverlay;
