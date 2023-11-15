import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import homeIcon from "../../public/asset/icons/home-icon.svg";
import inActiveHomeIcon from "../../public/asset/icons/inactive-home.svg";
import inactiveExploreIcon from "../../public/asset/icons/inactive-explore-icon.svg";
import activeExploreIcon from "../../public/asset/icons/active-explore-icon.svg";
import inactiveBookmarksIcon from "../../public/asset/icons/inactive-bookmarks-icon.svg";
import activeBookmarksIcon from "../../public/asset/icons/active-bookmarks-icon.svg";


const myNavigator = [
  {
    activeIcon: homeIcon,
    inActiveIcon: inActiveHomeIcon,
    title: "Home",
    link: "/home",
  },
  {
    activeIcon: activeExploreIcon,
    inActiveIcon: inactiveExploreIcon,
    title: "Explore",
    link: "/explore",
  },
  {
    activeIcon: activeBookmarksIcon,
    inActiveIcon: inactiveBookmarksIcon,
    title: "Wishlist",
    link: "/wishlist",
  },
];

const MobileTabBar = () => {
  const router = useRouter(); 
  console.log(router.pathname);

  const activeLink = router.pathname;
  return (
    <div className="fixed bottom-0 w-full flex justify-between bg-secondaryShade6 z-20 py-4 px-8 md:hidden">
      {myNavigator.map((navInfo, index) => {
        const style =
          activeLink === navInfo.link ? "text-primary" : "text-primaryShade2";

        return (
          <Link
            href={navInfo.link}
            key={index}
            className="flex flex-col justify-center items-center space-y-1 cursor-pointer"
          >
            <div className=" h-[24px] w-[24px]">
              <Image
                src={
                  activeLink === navInfo.link
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
          </Link>
        );
      })}
    </div>
  );
};

export default MobileTabBar;
