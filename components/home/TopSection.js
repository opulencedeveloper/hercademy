import Image from "next/image";

import pinkSearchIcon from "../../public/asset/icons/pink-search-icon.svg";
import NotifyandProfileBar from "../UI/NotifyandProfileBar";

const TopSection = () => {
  
  

  return (<section className="animateSlideUp px-4 md:px-20 lg:px-32">
        <div className="flex justify-between md:hidden">
          <p className="text-primary1 font-medium text-[20px]">Welcome Mary</p>
          <NotifyandProfileBar />
        </div>

        <div className="flex flex-col rounded-[16px] bg-primaryShade1 pt-6 px-4 pb-4 mt-5 md:px-10 md:flex-row md:justify-between md:items-end">
          <p className="text-primary1 font-bold text-[20px] w-full md:text-[47px] md:py-8 leading-tight md:w-[50%]">
            What do you want to learn today?
          </p>
          <div className="flex items-center rounded-[8px] overflow-hidden h-[44px] mt-5 bg-secondaryShade5 w-full md:mb-8 md:h-[57px] md:w-[40%]">
            <div className="h-full w-[18px] ml-4 mr-3">
              <Image
                src={pinkSearchIcon}
                alt="search icon"
                height={18}
                width={18}
                loading="eager"
                priority
                className="w-full h-full"
              />
            </div>
            <input
              placeholder="Search"
              className="h-full bg-transparent flex-1 outline-none placeholder-primaryShade2 placeholder-medium placeholder-[16px] md:placeholder-[40px]"
            />
          </div>
        </div>
      </section>
  );
};

export default TopSection;
