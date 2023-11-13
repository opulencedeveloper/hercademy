import { useState } from "react";

import Image from "next/image";

import searchIcon from "../../public/asset/icons/search-icon.svg";
import avatarOne from "../../public/asset/images/avatar-1.svg";
import avatarTwo from "../../public/asset/images/avatar-2.svg";
import avatarThree from "../../public/asset/images/avatar-3.svg";
import avatarFour from "../../public/asset/images/avatar-4.svg";
import femCodeAfricaImage from "../../public/asset/images/fem-code-africa-image.svg";
import sheCodeAfricaImage from "../../public/asset/images/she-code-africa-image.svg";
import womenInTechAfricaImage from "../../public/asset/images/women-in-tech-africa-image.svg";
import web3LadiesImage from "../../public/asset/images/web3-ladies-image.svg";
import herTechTrialImage from "../../public/asset/images/her-tech-trial-image.svg";
import empowerHerCommunityImage from "../../public/asset/images/empower-her-community-image.svg";
import workspacePremiumIcon from "../../public/asset/icons/workspace-premium-icon.svg";
import addIcon from "../../public/asset/icons/add-icon.svg";

const techEvents = [
  {
    image: femCodeAfricaImage,
    title: "Femcode Africa",
    premium: false,
    members: "10k"
  },
  {
    image: sheCodeAfricaImage,
    title: "Shecode Africa",
    premium: true,
    members: "36k"
  },
  {
    image: womenInTechAfricaImage,
    title: "Women In Tech Africa",
    premium: false,
    members: "10k"
  },
  {
    image: web3LadiesImage,
    title: "Web 3 Ladies",
    premium: true,
    members: "10k"
  },
  {
    image: herTechTrialImage,
    title: "Hertechtrail",
    premium: true,
    members: "17k"
  },
  {
    image: empowerHerCommunityImage,
    title: "Empower her ",
    premium: false,
    members: "5k"
  },
];

const TechEventsGrid = () => {
  const [filterTechEvents, setFilterTechEvents] = useState(techEvents);

  const filterTechEventsHandler = (event) => {
    const inputedValue = event.target.value;

    const filteredTechEvents = techEvents.filter((techEvent) =>
      techEvent.title.toLowerCase().includes(inputedValue.toLowerCase())
    );
    setFilterTechEvents(filteredTechEvents);
  };
  return (
    <section className="flex flex-col h-full">
      <div className="flex flex-shrink-0 items-center rounded-[8px] overflow-hidden h-[44px] mt-5 mb-2 bg-secondaryShade5">
        <div className="h-[18px] w-[18px] ml-5 mr-3">
          <Image
            src={searchIcon}
            alt="search icon"
            height={18}
            width={18}
            className="w-full h-full"
            loading="eager"
            priority
          />
        </div>
        <input
          placeholder="Search"
          onChange={filterTechEventsHandler}
          className="h-full bg-transparent flex-1 outline-none placeholder-medium"
        />
      </div>
      <div className="flex gap-1.5 justify-center flex-wrap pt-8 pb-40 scrollbar-hide overflow-auto">
        {filterTechEvents.map((sectionData, index) => (
          <div
            key={index}
            className="w-[167px] rounded-[8px] mb-6 overflow-hidden"
          >
            <div className="relative h-[118px] w-full">
              <Image
                src={sectionData.image}
                alt="avatar"
                height={188}
                width={167}
                priority
                loading="eager"
                className="w-full h-full object-cover"
              />
              {sectionData.premium && (
                <div className="h-[24px] w-[24px] rounded-[2px] overflow-hidden absolute top-0 left-2">
                  <Image
                    src={workspacePremiumIcon}
                    alt="premiun icon"
                    priority
                    loading="eager"
                    height={24}
                    width={24}
                    className="h-full w-full"
                  />
                </div>
              )}
            </div>
            <div className="h-[78px] w-full flex flex-col justify-between pt-1.5 pb-2 px-[5.5px] bg-secondaryShade10">
              <p className="text-[14px] font-medium">{sectionData.title}</p>
              <div className="flex w-full justify-between items-end">
                <div className="flex relative w-14">
                  <div className={"h-[18px] w-[18px]"}>
                    <Image
                      src={avatarOne}
                      alt="avatar"
                      height={18}
                      width={18}
                      priority
                      loading="eager"
                      className="w-full h-full"
                    />
                  </div>
                  <div className={"absolute left-[10px] h-[18px] w-[18px]"}>
                    <Image
                      src={avatarTwo}
                      alt="avatar"
                      height={18}
                      width={18}
                      priority
                      loading="eager"
                      className="w-full h-full"
                    />
                  </div>
                  <div className={"absolute left-[20px] h-[18px] w-[18px]"}>
                    <Image
                      src={avatarThree}
                      alt="avatar"
                      height={18}
                      width={18}
                      priority
                      loading="eager"
                      className="w-full h-full"
                    />
                  </div>
                  <div className={"absolute left-[30px] h-[18px] w-[18px]"}>
                    <Image
                      src={avatarFour}
                      alt="avatar"
                      height={18}
                      width={18}
                      priority
                      loading="eager"
                      className="w-full h-full"
                    />
                  </div>
                  <div
                    className={
                      "absolute left-[40px] flex items-center justify-center text-white h-[18px] w-[18px] bg-primary2 rounded-full text-[10px]"
                    }
                  >
                    {sectionData.members}
                  </div>
                </div>

                <p className="text-[10px]">members</p>
                <button className="text-[8px] bg-white py-0.5 px-1.5 rounded-[4px]">
                  Join group
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute bottom-5 flex items-center justify-center gap-3 bg-primary h-[43px] rounded-[8px] w-[92%] text-[16px] text-white font-medium">
            <div className="h-[14px] w-[14px]">
              <Image
                src={addIcon}
                alt="google logo"
                className="h-full w-full object-cover"
                height={24}
                width={24}
                loading="eager"
                priority
              />
            </div>{" "}
            <p>Create a community</p>
          </button>
    </section>
  );
};

export default TechEventsGrid;
