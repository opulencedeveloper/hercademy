import Image from "next/image";

import workspacePremiumIcon from "../../public/asset/icons/workspace-premium-icon.svg";
import image4 from "../../public/asset/images/image-4.svg";
import image5 from "../../public/asset/images/image-5.svg";
import image6 from "../../public/asset/images/image-6.svg";
import image7 from "../../public/asset/images/image-7.svg";

const allAvailableTechScholarships = [image4, image5, image6 , image7];

const RecruitersCorner = ({premiumSwitcherHandler}) => {

  return (
    <section id="d8" className="my-6 md:px-32">
      <p className="text-primary1 text-[16px] font-semibold px-4 pb-3 md:pb-5 md:text-[24px] md:px-0 ">
      Recruiters corner
      </p>

      <div className="flex space-x-3 pb-1 overflow-x-auto rounded-[8px] h-[197px] pr-4 ml-4 md:h-[265px] md:ml-0 md:space-x-9">
        {allAvailableTechScholarships.map((allAvailableTechScholarshipsImage, index) => (
          <div
            key={index}
            onClick={premiumSwitcherHandler}
            className="relative h-full w-[185px] rounded-[4px] overflow-hidden flex-shrink-0 md:w-[272px]"
          >
            <Image
              src={allAvailableTechScholarshipsImage}
              alt="programme image"
              priority
              loading="eager"
              height={197}
              width={185}
              className="h-full w-full object-cover"
            />
            <div className=" absolute top-0 py-1 px-3 left-0 text-primary bg-white flex flex-col items-center justify-start text-center text-[19px] font-medium md:text-[20px]">
          PREMIUM
        </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecruitersCorner;
