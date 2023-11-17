import Image from "next/image";
import { useRouter } from "next/router";

import techHerFirstImage from "../../public/asset/images/tech-her-first-image.svg";
import devfestImage from "../../public/asset/images/devfest-image.svg";
import beyondInclusionImage from "../../public/asset/images/beyond-inclusion-image.svg";

const techEventImages = [
  techHerFirstImage,
  devfestImage,
  beyondInclusionImage,
  techHerFirstImage,
];

const UpcomingTechEvents = () => {
  const router = useRouter();

  return (
    <section id="d5" className="pl-4 my-7 md:my-9 md:px-0">
      <div className="flex justify-between pr-4">
        <p className="text-primary1 text-[14px] font-semibold md:text-[24px]">
          Upcoming Tech Events
        </p>
        <button
          
          className="font-semibold text-primary text-[10px] md:text-[20px]"
        >
          View All
        </button>
      </div>

      <div className="flex h-[126px]  overflow-auto rounded-[8px] pb-1 pr-4 space-x-2 mt-3 md:h-[271px]">
        {techEventImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[125px] h-full relative md:w-[281px]"
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
            <button
              onClick={() => router.push("/calender")}
              className="text-primary py-[1px] px-[1.5px] rounded-[2px] shadow-customShadow bg-white text-[8px] font-medium absolute top-2 right-1.5 md:text-[14px]"
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
