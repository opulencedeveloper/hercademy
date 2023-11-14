import Image from "next/image";

import arrowBackIcon from "../../public/asset/icons/arrow-back-icon.svg";
import dishaImage from "../../public/asset/images/disha-image.svg";
import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col space-y-5 h-screen justify-between px-4 py-10">
      <div>
        <div className="flex items-center pb-5">
          <button onClick={() => router.back()} className="h-[14px] w-[14px] md:h-[24px] md:w-[24px]">
            <Image
              src={arrowBackIcon}
              alt="back icon"
              className="h-full w-full"
              height={14}
              width={14}
              loading="eager"
              priority
            />
          </button>
          <div className="flex flex-1 justify-center text-[20px] font-semibold">
            Portfolio
          </div>
        </div>
        <p className="text-[14px] text-secondary text-center px-3">
          Get an easy guide on how to prepare your portfolio from one of the
          most user friendly platforms
        </p>

        <div className="rounded-[8px] overflow-hidden mt-8">
          <div className="h-[280px] w-full">
            <Image
              src={dishaImage}
              height={280}
              width={343}
              priority
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-secondaryShade10 py-3 w-full text-center">
            Disha.page
          </div>
        </div>
      </div>
      <button className="text-[16px] font-semibold w-full py-3 rounded-[8px] bg-primary text-white">
        Create Portfolio
      </button>
    </section>
  );
};

export default Portfolio;
