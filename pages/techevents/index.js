import Image from "next/image";

import Layout from "@/components/layout/Layout";

import arrowBackIcon from "../../public/asset/icons/arrow-back-icon.svg";
import TechEventsGrid from "@/components/techevents/TechEventsGrid";
import { useRouter } from "next/router";

const TechEvents = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen mx-auto scrollbar-hide overflow-y-auto pt-7 pb-2">
      <section className="px-4 flex flex-col h-full overflow-hidden md:px-20 lg:px-32">
        {" "}
        <button className="h-[14px] w-[14px] md:h-[24px] md:w-[24px]">
          <Image
            src={arrowBackIcon}
            onClick={() => router.back()}
            alt="back icon"
            className="h-full w-full"
            loading="eager"
            priority
          />
        </button>
        <p className="font-semibold text-[16px] mt-4 md:text-[32px]">
          Explore Our Tech Communties
        </p>
        <p className="text-[12px] mt-2 md:text-[16px]">
          Stay connected to African Tech ladies of like minds, network,
          collaborate and work on projects together.{" "}
        </p>
        <TechEventsGrid />
      </section>
    </div>
  );
};

export default TechEvents;
