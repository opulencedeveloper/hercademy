import { useEffect } from "react";
import Image from "next/image";

import checkIcon from "../../public/asset/icons/check-icon.svg";
import Portal from "../UI/Portal";

const PickedDateSuccess = ({ toggleDateSuccess }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      toggleDateSuccess();
    }, 1000);

    return () => {
      clearTimeout(timeout)
    };
  }, []);

  return (
    <Portal>
      <div className=" w-[80%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:max-w-[449px]">
       <div className="w-full h-full animateSlideUp"> <div className="flex items-center justify-center h-[143px] w-full bg-primary">
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
          <p className="font-bold text-[20px] text-primary">Date Saved</p>
        </div>
        </div>
      </div>
    </Portal>
  );
};

export default PickedDateSuccess;
