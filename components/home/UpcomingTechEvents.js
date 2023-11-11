import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import techHerFirstImage from "../../public/asset/images/tech-her-first-image.svg";
import devfestImage from "../../public/asset/images/devfest-image.svg";
import beyondInclusionImage from "../../public/asset/images/beyond-inclusion-image.svg";
import Calender from "./Calender";


const techEventImages = [techHerFirstImage, devfestImage, beyondInclusionImage];

const UpcomingTechEvents = () => {
  const [showCalender, setShowCalender] = useState(false);
  const router = useRouter()

  const toggleCalenderHandler = () => {
    setShowCalender((prev) => !prev);
  };

  return showCalender ? (
    <Calender toggleCalenderHandler={toggleCalenderHandler}/>
  ) : (
    <section className="px-5 mt-7">
      <div className="flex justify-between">
        <p className="text-primary1 text-[14px] font-semibold">
          Upcoming Tech Events
        </p>
        <button onClick={() => router.push("/techevents")} className="font-semibold text-primary text-[10px]">
          View All
        </button>
      </div>

      <div className="flex h-[111px] overflow-auto scrollbar-hide space-x-2 mt-3">
        {techEventImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[110px] h-full relative">
            <Image
              src={image}
              priority
              loading="eager"
              height={111}
              width={110}
              className="h-full w-full object-cover"
            />
            <button
              onClick={toggleCalenderHandler}
              className="text-primary py-[1px] px-[1.5px] rounded-[2px] shadow-customShadow bg-white text-[8px] font-medium absolute top-2 right-1"
            >
              Save Date
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingTechEvents;
