import Image from "next/image";
import devfestImage from "../../public/asset/images/tech-her-first-image.svg";

const Notification = ({toggleNotifcation}) => {
  return (
    <div className="flex flex-col items-center px-5 pb-4 h-[160px] w-[230px] bg-white absolute top-14 right-0 md:right-3 md:w-[276px]">
      <div className="h-[85px] w-[85px] flex-shrink-0 -mt-7 mb-3 rounded-full overflow-hidden">
        <Image
          src={devfestImage}
          width={85}
          height={85}
          priority
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center font-semibold tetx-[16px]">
        Today is Tech Her Fest
      </p>
      <div className="flex items-center justify-between w-full mt-5">
        <button onClick={toggleNotifcation} className="bg-primary rounded-[2px] text-[14px] py-1 px-4 text-white">
          OK
        </button>
        <button onClick={toggleNotifcation} className="text-[14px] text-primary1">Remind me later</button>
      </div>
    </div>
  );
};

export default Notification;
