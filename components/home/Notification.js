import Image from "next/image";
import devfestImage from "../../public/asset/images/tech-her-first-image.svg";
import Portal from "../UI/Portal";

const Notification = ({toggleNotifcation}) => {
  return (
   <Portal> 
    <div className=" flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-y-1/2  -translate-x-1/2 px-5 pb-4 h-[160px] w-[230px] bg-white md:h-[180px] md:w-[376px] ">
    {/* <div className="flex flex-col items-center px-5 pb-4 h-[160px] w-[230px] bg-white md:w-[276px]"> */}
    <div className="animateSlideUp flex flex-col items-center w-full h-full">  <div className=" h-[85px] w-[85px] flex-shrink-0 -mt-7 mb-3 rounded-full overflow-hidden md:h-[90px] md:w-[90px]">
        <Image
          src={devfestImage}
          width={85}
          height={85}
          alt="image"
          priority
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center font-semibold text-[16px] md:text-[22px]">
        Today is Tech Her Fest
      </p>
      <div className="flex items-center justify-between w-full mt-5">
        <button onClick={toggleNotifcation} className="bg-primary rounded-[2px] text-[14px] py-1 px-4 text-white md:text-[16px] md:px-20 md:py-1.5">
          OK
        </button>
        <button onClick={toggleNotifcation} className="text-[14px] text-primary1 md:text-[16px]">Remind me later</button>
      </div></div>
    </div>
    </Portal>
  );
};

export default Notification;
