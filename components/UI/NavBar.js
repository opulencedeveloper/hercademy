import Image from "next/image";

import homeIcon from "../../public/asset/icons/home-icon.svg";
import inActiveHomeIcon from "../../public/asset/icons/inactive-home.svg";
import inactiveExploreIcon from "../../public/asset/icons/inactive-explore-icon.svg";
import activeExploreIcon from "../../public/asset/icons/active-explore-icon.svg";
import inactiveBookmarksIcon from "../../public/asset/icons/inactive-bookmarks-icon.svg";
import activeBookmarksIcon from "../../public/asset/icons/active-bookmarks-icon.svg";

const myNavigator = [
  { activeIcon: homeIcon, inActiveIcon: inActiveHomeIcon, title: "Home" },
  {
    activeIcon: activeExploreIcon,
    inActiveIcon: inactiveExploreIcon,
    title: "Explore",
  },
  {
    activeIcon: activeBookmarksIcon,
    inActiveIcon: inactiveBookmarksIcon,
    title: "Wishlist",
  },
];

const NavBar = (props) => {
  const { selectedTab, navSwitcherHandler } = props;
  return (
    <div className="absolute bottom-0 max-w-[40rem] mx-auto flex justify-between bg-secondaryShade6 py-4 px-8">
      {myNavigator.map((navInfo, index) => {
        const style =
          selectedTab === navInfo.title ? "text-primary" : "text-primaryShade2";

        return (
          <div
            key={index}
            onClick={() => navSwitcherHandler(navInfo.title)}
            className="flex flex-col justify-center items-center space-y-1 cursor-pointer"
          >
            <div className=" h-[24px] w-[24px]">
              <Image
                src={
                  selectedTab === navInfo.title
                    ? navInfo.activeIcon
                    : navInfo.inActiveIcon
                }
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
  );
};

export default NavBar;
