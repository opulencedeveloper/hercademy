import Image from "next/image";

import techHerFirstImage from "../../public/asset/images/tech-her-first-image.svg";
import devfestImage from "../../public/asset/images/devfest-image.svg";
import beyondInclusionImage from "../../public/asset/images/beyond-inclusion-image.svg";
import { useRouter } from "next/navigation";

const techEventImages = [techHerFirstImage, devfestImage, beyondInclusionImage];

const UpcomingTechEvents = (props) => {
  const router = useRouter();

  return (
    <section className="px-5 mt-7">
      <div className="flex justify-between">
        <p className="text-primary1 text-[14px] font-semibold">
          Upcoming Tech Events
        </p>
        <button className="font-semibold text-primary text-[10px]">
          View All
        </button>
      </div>

      <div className="flex h-[111px] space-x-2 mt-3">
        {techEventImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[110] h-full relative">
            <Image
              src={image}
              priority
              loading="eager"
              height={111}
              width={110}
              className="h-full w-full object-cover"
            />
            <button onClick={() => router.push("/calender")} className="text-primary py-[1px] px-[1.5px] rounded-[2px] shadow-customShadow bg-white text-[8px] font-medium absolute top-2 right-1">
              Save Date
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingTechEvents;
