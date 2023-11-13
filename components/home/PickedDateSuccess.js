import { useEffect } from "react";
import Image from "next/image";

import checkIcon from "../../public/asset/icons/check-icon.svg";

const PickedDateSuccess = ({ toggleDateSuccess }) => {

  useEffect(() => {
    const interval = setTimeout(() => {
      toggleDateSuccess();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[80%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <div className="flex items-center justify-center h-[143px] w-full bg-primary">
        <div className="flex items-center justify-center h-[89px] w-[89px] rounded-full border-[3px] border-white">
          {" "}
          <div className="h-[43.56px] w-[61.8px]">
            <Image
              src={checkIcon}
              alt="check icon"
              height={43}
              width={61}
              priority
              loading="eager"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center shadow-sm h-[125px] w-full bg-white">
        <p className="font-bold text-[20px] text-primary">Data Saved</p>
      </div>
    </div>
  );
};

export default PickedDateSuccess;