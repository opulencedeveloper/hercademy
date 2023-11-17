import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../public/asset/logo/hercademy-logo.svg";
import NotifyandProfileBar from "../UI/NotifyandProfileBar";

const navigationItems = [
  { title: "Home", link: "/home" },
  { title: "Explore", link: "/explore" },
  { title: "Wishlist", link: "/wishlist" },
];

const DesktopNavBar = () => {
  const router = useRouter();

  const activeLink = router.pathname;

  return (
    <header className="hidden sticky top-0 z-30 md:flex items-center justify-between bg-white shadow-customShadow1 h-[80px] md:px-20 lg:px-32">
      <div className="flex items-center space-x-2 h-[44px]">
        <div className="h-full w-[44px]">
          <Image
            src={logo}
            className="h-full w-full"
            loading="eager"
            priority
            height={44}
            width={44}
          />
        </div>
        <p className="font-extrabold text-[24px] text-primary pt-1">
          HERCADEMY
        </p>
      </div>
      <nav className="flex items-center space-x-7">
        {navigationItems.map((navData, index) => {
          const style =
            activeLink === navData.link ? "text-primary" : "text-primaryShade5";

          return (
            <Link
              key={index}
              href={navData.link}
              className={`${style} text-[16px]`}
            >
              {navData.title}
            </Link>
          );
        })}
        {/* <button className="py-[16px] px-[30px] bg-primary shadow-customShadow1 rounded-[6px] text-white text-[14px] font-semibold">
          Get Started
        </button> */}
        <NotifyandProfileBar />
      </nav>
    </header>
  );
};
export default DesktopNavBar;
