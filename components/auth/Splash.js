import { useEffect } from "react";

import Image from "next/image";

import logo from "../../public/asset/logo/hercademy-logo.svg";

const Splash = ({ splashSwitcher }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      splashSwitcher();
    }, 5000);

    return () => {
      document.body.classList.remove("overflow-hidden");
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="fixed top-0 right-0 h-screen w-full flex items-center justify-center bg-primaryShade6 overflow-hidden scrollbar-hide">
      <div className="flex flex-col items-center">
        <div className="flex items-end justify-center">
          <div className="h-[72px] w-[72px">
            <Image
              src={logo}
              alt="logo"
              priority
              loading="eager"
              className="w-full h-full"
            />
          </div>
          <p className="font-extrabold text-[22px] text-white md:text-[32px]">HERCADEMY</p>
        </div>
        <p className="text-[14px] font-medium italic text-white ml-2 md:text-[24px]">
          Giving her a chance to thrive
        </p>
      </div>
    </div>
  );
};

export default Splash;
