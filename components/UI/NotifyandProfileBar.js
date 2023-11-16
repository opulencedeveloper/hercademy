import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import Notification from "../home/Notification";

import notificationIcon from "../../public/asset/icons/notifications-icon.svg";
import avaterImage from "../../public/asset/images/avatar-image.svg";


const NotifyandProfileBar = () => {
    const [viewNotification, setViewNotification] = useState(false); 
    const router = useRouter();

  const toggleNotifcation = () => {
    setViewNotification(prev => !prev);
  }

    return <div className="flex items-center space-x-3 relative"> 
    <button className="h-[24px] w-[24px] relative md:h-[32px] md:w-[32px]" onClick={toggleNotifcation}> 
      <Image
        src={notificationIcon}
        alt="notification icon"
        loading="eager"
        priority
        height={24}
        width={24}
        className="h-full w-full"
      />
      <div className="rounded-full h-[10px] w-[10px] absolute top-0 right-0 bg-secondary2 md:right-1 md:top-1"></div>
    

      
    </button>
    <button
      onClick={() => router.push("/profile")}
      className="h-[34px] w-[34px] md:w-[49px] md:h-[49px]"
    >
      <Image
        src={avaterImage}
        alt="avatar image"
        height={34}
        width={34}
        loading="eager"
        priority
        className="h-full w-full"
      />
    </button>

   {viewNotification && <Notification toggleNotifcation={toggleNotifcation} />}
  </div>
}

export default NotifyandProfileBar;