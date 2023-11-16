import Image from "next/image";
import { useRouter } from "next/router";

import workspacePremiumIcon from "../../public/asset/icons/workspace-premium-icon.svg";
import image4 from "../../public/asset/images/image-4.svg";
import image5 from "../../public/asset/images/image-5.svg";

const allAvailableTechScholarships = [image4, image4, image5];

const AvailableTechScholarships = () => {
  const router = useRouter();

  return (
    <section id="d8" className="md:my-10 md:px-32">
      <p className="text-primary1 text-[14px] font-semibold px-4 pb-5 md:text-[24px] md:px-0 ">
        Available Tech Scholarships
      </p>

      <div className="flex space-x-3 pb-1 overflow-x-auto rounded-[8px] h-[197px] pr-4 ml-4 md:h-[265px] md:ml-0 md:space-x-9">
        {allAvailableTechScholarships.map((allAvailableTechScholarshipsImage, index) => (
          <div
            key={index}
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
            <div className="h-[24px] w-[24px] rounded-[2px] overflow-hidden absolute top-2 left-2">
              <Image
                src={workspacePremiumIcon}
                alt="premium icon"
                priority
                loading="eager"
                height={24}
                width={24}
                className="h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableTechScholarships;
