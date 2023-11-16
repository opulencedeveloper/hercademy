import { useRouter } from "next/router";

import Portal from "../UI/Portal";

const ChangeAreaOfIntrest = ({ toggleAreaOfIntrest }) => {
  const router = useRouter();

  return (
    <Portal>
      <div className="  rounded-[4px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[260px] w-[85%] md:h-[430px] md:w-[492px] ">
      <div className="flex flex-col items-center justify-center px-4 w-full h-full animateSlideUp bg-white rounded-sm">  <p className="text-center text-[17px] leading-tight font-medium md:text-[32px] md:leading-10">
          Do you wish to change your area of interest?
        </p>
        <div className="w-[90%] mt-[50px] space-y-2 md:space-y-2 md:mt-[89px]">
          <button
            onClick={() => {
              localStorage.setItem("editareaofintrest", "1");
              router.replace("/");
            }}
            className="block w-full bg-primary text-base py-1 px-4 text-white  rounded-[8px] h-[43px] font-medium md:h-[53px] md:text-[24px]"
          >
            Yes
          </button>
          <button
            onClick={toggleAreaOfIntrest}
            className="block w-full text-base text-secondary text-[20px]"
          >
            Ignore
          </button>
        </div></div>
      </div>
    </Portal>
  );
};

export default ChangeAreaOfIntrest;
