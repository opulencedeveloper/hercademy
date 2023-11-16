import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import arrowBackIcon from "../../public/asset/icons/arrow-back-icon.svg";
import TechCommuntiesGrid from "@/components/techcommunity/TechCommuntiesGrid";
import Loading from "@/components/UI/Loading";


const TechCommunties = () => {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(true); 
  
  const loadingSwitcher = () => {
    setShowLoading((prev) => !prev);
  };
  
  return showLoading ? (
    <Loading loadingSwitcher={loadingSwitcher} /> 
  ) : (
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
        <TechCommuntiesGrid />
      </section>
    </div>
  );
};

export default TechCommunties;
