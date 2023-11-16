import { useEffect } from "react";

import Image from "next/image";

import logo from "../../public/asset/logo/hercademy-logo.svg";
import Portal from "./Portal";

const Loading = ({loadingSwitcher}) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      loadingSwitcher();
    }, 4000);

    return () => {
      document.body.classList.remove("overflow-hidden");
       clearTimeout(timer);
    };
  }, []);
  return (
    <Portal> <div className="fixed top-0 right-0 h-full w-full flex items-center justify-center bg-primaryShade6 overflow-hidden scrollbar-hide">
      <div className="zoom-in-out h-[72px] w-[72px]">
        <Image
          src={logo}
          alt="logo"
          priority
          loading="eager"
          height={72}
          width={72}
          className="w-full h-full"
        />
      </div>
    </div></Portal>
  );
};

export default Loading;
