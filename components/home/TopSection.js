import Image from "next/image";
import { useRouter } from "next/router";

import notificationIcon from "../../public/asset/icons/notifications-icon.svg";
import avaterImage from "../../public/asset/images/avatar-image.svg";
import pinkSearchIcon from "../../public/asset/icons/pink-search-icon.svg";
import closeIcon from "../../public/asset/icons/close-icon.svg";
import Portal from "../UI/Portal";
import { useState } from "react";
import Notification from "./Notification";

const TopSection = () => {
  const router = useRouter();
  const [viewNotification, setViewNotification] = useState(false);

  const toggleNotifcation = () => {
    setViewNotification(prev => !prev);
  }

  return (<section className="px-4">
        <div className="flex justify-between">
          <p className="text-primary1 font-medium text-[20px]">Welcome Mary</p>
          <div className="flex items-center space-x-3 relative">
            <button className="h-[24px] w-[24px] relative" onClick={toggleNotifcation}>
              <Image
                src={notificationIcon}
                alt="notification icon"
                height={24}
                width={24}
                className="h-full w-full"
              />
              <div className="rounded-full h-[10px] w-[10px] absolute top-0 right-0 bg-secondary2"></div>
            

              
            </button>
            <button
              onClick={() => router.push("/profile")}
              className="h-[34px] w-[34px]"
            >
              <Image
                src={avaterImage}
                alt="avatar image"
                height={34}
                width={34}
                className="h-full w-full"
              />
            </button>

           {viewNotification && <Notification toggleNotifcation={toggleNotifcation} />}
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
              placeholder="Search"
              className="h-full bg-transparent flex-1 outline-none placeholder-primaryShade2 placeholder-medium placeholder-[16px]"
            />
          </div>
        </div>
      </section>
  );
};

export default TopSection;
