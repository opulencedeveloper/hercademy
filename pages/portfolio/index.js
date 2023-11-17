import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import dishaImage from "../../public/asset/images/disha-image.svg";

import Loading from "@/components/UI/Loading";

const Portfolio = () => {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(true); 
  
  const loadingSwitcher = () => {
    setShowLoading((prev) => !prev);
  };
  
  return showLoading ? (
    <Loading loadingSwitcher={loadingSwitcher} /> 
  ) :  (
    <section className="flex flex-col space-y-5 h-screen justify-between px-4 py-10 max-w-[80rem] mx-auto md:px-20 lg:px-32">
      <div>
        <div className="flex items-center pb-5">
          
          <div className="flex flex-1 justify-center text-[20px] font-semibold md:text-[38px]">
            Portfolio
          </div>
        </div>
        <p className="text-[14px] text-secondary text-center px-3 md:text-[18px]">
          Get an easy guide on how to prepare your portfolio from one of the
          most user friendly platforms
        </p>

        <div className="rounded-[8px] overflow-hidden mt-8">
          <div className="h-[280px] w-full md:h-[420px]">
            <Image
              src={dishaImage}
              height={280}
              width={343}
              alt="disha"
              priority
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-secondaryShade10 py-3 w-full text-center md:text-[26px]">
            Disha.page
          </div>
        </div>
      </div>
      <button className="text-[16px] font-semibold w-full py-3 rounded-[8px] bg-primary text-white md:text-[22px]">
        Create Portfolio
      </button>
    </section>
  );
};

export default Portfolio;
