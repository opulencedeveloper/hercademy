import { useEffect } from "react";

import Image from "next/image";

import logo from "../../public/asset/logo/animated-logo.gif";

const Splash = ({ splashSwitcher }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      splashSwitcher();
    }, 6000);

    return () => {
      document.body.classList.remove("overflow-hidden");
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="fixed top-0 right-0 h-screen w-full flex items-center justify-center bg-primaryShade6 overflow-hidden scrollbar-hide">
     
          <div className="h-auto w-auto">
            <Image
              src={logo}
              alt="logo"
              priority
              loading="eager"
              className="w-full h-full"
            />
          </div>
         
    </div>
  );
};

export default Splash;
