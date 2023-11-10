import Image from "next/image";

import homeIcon from "../../public/asset/icons/home-icon.svg";
import inactiveExploreIcon from "../../public/asset/icons/inactive-explore-icon.svg";
import inactiveBookmarksIcon from "../../public/asset/icons/inactive-bookmarks-icon.svg";
import workspacePremiumIcon from "../../public/asset/icons/workspace-premium-icon.svg";
import image4 from "../../public/asset/images/image-4.svg";
import image5 from "../../public/asset/images/image-5.svg";

const sectionContent = [image4, image5];

const myNavigator = [
  { icon: homeIcon, title: "Home" },
  { icon: inactiveExploreIcon, title: "Home" },
  { icon: inactiveBookmarksIcon, title: "Wishlist" },
];

const SectionOne = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-between bg-secondaryShade6 py-4 px-8">
        {myNavigator.map((navInfo, index) => {
          const style = index === 0 ? "text-primary" : "text-primaryShade2";
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center space-y-1 cursor-pointer"
            >
              <div className=" h-[24px] w-[24px]">
                <Image
                  src={navInfo.icon}
                  alt={navInfo.title}
                  height={24}
                  width={24}
                  priority
                  loading="eager"
                  className="h-full w-full"
                />
              </div>
              <p className={`text-[12px] ${style}`}>{navInfo.title}</p>
            </div>
          );
        })}
      </div>

      <div className="flex space-x-3 scrollbar-hide overflow-x-auto h-[197px] px-5">
        {sectionContent.map((content, index) => (
          <div
            key={index}
            className="relative h-full w-[185px] rounded-[4px] overflow-hidden flex-shrink-0"
          >
            <Image
              src={content}
              priority
              loading="eager"
              height={197}
              width={185}
              className="h-full w-full object-cover"
            />
            <div className="h-[24px] w-[24px] rounded-[2px] overflow-hidden absolute top-2 left-2">
              <Image
                src={workspacePremiumIcon}
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

export default SectionOne;
