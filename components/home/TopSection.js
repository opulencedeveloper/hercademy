import Image from "next/image";

import notificationIcon from "../../public/asset/icons/notifications-icon.svg";
import avaterImage from "../../public/asset/images/avatar-image.svg";
import pinkSearchIcon from "../../public/asset/icons/pink-search-icon.svg";

const TopSection = () => {
  return (
    <section className="px-5">
      <div className="flex justify-between">
        <p className="text-primary1 font-medium text-[20px]">Welcome Mary</p>
        <div className="flex items-center space-x-3">
          <div className="h-[24px] w-[24px] relative">
            <Image
              src={notificationIcon}
              height={24}
              width={24}
              className="h-full w-full"
            />
            <div className="rounded-full h-[10px] w-[10px] absolute top-0 right-0 bg-secondary2"></div>
          </div>
          <div className="h-[34px] w-[34px]">
            <Image
              src={avaterImage}
              height={34}
              width={34}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="rounded-[16px] bg-primaryShade1 pt-6 px-4 pb-4 mt-5">
        <p className="text-primary1 font-bold text-[20px]">
          What do you want to learn today?
        </p>
        <div className="flex items-center rounded-[8px] overflow-hidden h-[44px] mt-5 bg-secondaryShade5">
          <div className="h-full w-[18px] ml-4 mr-3">
            <Image
              src={pinkSearchIcon}
              alt="search icon"
              height={18}
              width={18}
              className="w-full h-full"
            />
          </div>
          <input
            // onChange={filterIntrestHandler}
            placeholder="Search"
            className="h-full bg-transparent flex-1 outline-none placeholder-primaryShade2 placeholder-medium placeholder-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
