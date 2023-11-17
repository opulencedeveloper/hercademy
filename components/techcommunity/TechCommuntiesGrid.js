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

const TechCommuntiesGrid = () => {
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
      <div className="flex flex-shrink-0 items-center rounded-[8px] overflow-hidden h-[44px] mt-5 mb-2 bg-secondaryShade5 md:h-[55px]">
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
      <div className="flex gap-1.5 justify-center flex-wrap pt-8 pb-40 scrollbar-hide overflow-auto md:gap-5">
        {filterTechEvents.map((sectionData, index) => (
          <div
            key={index}
            className="w-[171px] rounded-[8px] mb-6 overflow-hidden max-[375px]:w-full md:w-[350px]"
          >
            <div className="relative h-[118px] w-full max-[375px]:h-[140px] md:h-[230px]">
              <Image
                src={sectionData.image}
                alt="avatar"
                height={188}
                width={167}
                priority
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[78px] w-full flex flex-col justify-between pt-1.5 pb-2 px-[5.5px] bg-secondaryShade10 md:px-[10px] md:pb-2">
              <p className="text-[14px] font-medium  max-[375px]:text-[19px] md:text-[22px]">{sectionData.title}</p>
              <div className="flex w-full justify-between items-end ">
                <div className="flex justify-end relative w-[105px] max-[375px]:w-[125px] md:w-32">
                  <div className={"absolute left-0 h-[18px] w-[18px] md:w-[22px] md:h-[22px]"}>
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
                  <div className={"absolute left-[10px] h-[18px] w-[18px] md:w-[22px] md:h-[22px]"}>
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
                  <div className={"absolute left-[20px] h-[18px] w-[18px] md:w-[22px] md:h-[22px]"}>
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
                  <div className={"absolute left-[30px] h-[18px] w-[18px] md:w-[22px] md:h-[22px]"}>
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
                      "absolute left-[40px] flex items-center justify-center text-white h-[18px] w-[18px] bg-primary2 rounded-full text-[10px] md:w-[22px] md:h-[22px]"
                    }
                  >
                    {sectionData.members}
                  </div>
                  <p className="text-[10px] max-[375px]:text-[14px]  md:text-[14px]">members</p>
                </div>

                
                <button className="text-[8px] bg-white py-0.5 px-1.5 rounded-[4px] max-[375px]:text-[13px] md:text-[10px]">
                  Join group
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute bottom-5 right-0 left-0 flex items-center justify-center gap-3 bg-primary h-[43px] rounded-[8px] text-[16px] text-white font-medium w-[90%] mx-auto md:max-w-[70rem] md:text-[20px] md:h-[50px]">
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

export default TechCommuntiesGrid;
