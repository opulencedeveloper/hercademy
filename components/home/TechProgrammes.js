import Image from "next/image";
import { useRouter } from "next/router";

import workspacePremiumIcon from "../../public/asset/icons/workspace-premium-icon.svg";
import image4 from "../../public/asset/images/image-4.svg";
import image5 from "../../public/asset/images/image-5.svg";

const techProgrammesInfo = [
  { id: "p1", image: image4 },
  { id: "p2", image: image5 },
  { id: "p3", image: image4 },
  { id: "p4", image: image5 },
];



const TechProgrammes = () => {
  const router = useRouter();

  return (
    <section className="md:my-10 md:px-32">
      <p className="text-primary1 text-[14px] font-semibold px-4 pb-5 md:text-[24px] md:px-0 ">
      Available Tech Scholarships
        </p>

      <div className="flex space-x-3 scrollbar-hide overflow-x-auto rounded-[8px] h-[197px] pl-4 md:h-[265px] md:pl-0 md:space-x-9">
        {techProgrammesInfo.map((techProgrammesData, index) => (
          <div
            key={index}
            onClick={() => router.push(`/techtprogrammesdetails/${techProgrammesData.id}`)}
            className="relative h-full w-[185px] rounded-[4px] overflow-hidden flex-shrink-0 cursor-pointer md:w-[272px]"
          >
            <Image
              src={techProgrammesData.image}
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

export default TechProgrammes;
