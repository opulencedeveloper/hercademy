import { useEffect } from "react";

import Image from "next/image";

import logo from "../../public/asset/logo/hercademy-logo.svg";

const Splash = ({ splashSwitcher }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      splashSwitcher();
    }, 5000);

    return () => {
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
          <p className="font-extrabold text-[32px] text-white">HERCADEMY</p>
        </div>
        <p className="text-[24px] font-medium italic text-white ml-2">
          Giving her a chance to thrive
        </p>
      </div>
    </div>
  );
};

export default Splash;