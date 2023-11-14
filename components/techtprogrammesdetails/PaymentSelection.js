import { useState } from "react";

const freeTrialInfo = [
  "A  3 day interval for training registration.",
  "Get access to Hertectrail community",
  "Get  your first hands-on project",
];

const payedPlanInfo = [
  "Get access to Hertectrail community",
  "Get  your first hands-on project",
  "Portfolio guide",
  "Access to skill related jobs and internship",
];

const PaymentSelection = () => {
  const [isFreeTrial, setIsFreeTrial] = useState(true);
  const selectedPlan = isFreeTrial ? freeTrialInfo : payedPlanInfo;

  const selectedPaymentStyle = "w-[60%] bg-primary text-white z-10";
  const unSelectedPaymentStyle = "w-[40%] text-black z-0";
  const commonButtonStyle =
    "h-full flex justify-center items-center rounded-[17px] font-semibold text-[16px] absolute top-0 bottom-0 md:text-[20px]";
  return (
    <div className="flex flex-col justify-between gap-7 h-full">
      <div className="px-3 bg-secondary4 py-4 rounded-[8px] md:px-5">
        <div className="flex relative w-[95%] mx-auto h-[41px] bg-white rounded-[17px] overflow-hidden md:h-[60px]">
          <button
            onClick={() => setIsFreeTrial((prev) => !prev)}
            className={`${commonButtonStyle} left-0 ${
              isFreeTrial ? selectedPaymentStyle : unSelectedPaymentStyle
            }`}
          >
            Free Trial
          </button>
          <button
            onClick={() => setIsFreeTrial((prev) => !prev)}
            className={`${commonButtonStyle} right-0 ${
              !isFreeTrial ? selectedPaymentStyle : unSelectedPaymentStyle
            }`}
          >
            $3.67/year
          </button>
        </div>
        <div className="space-y-2.5 mt-5">
          {selectedPlan.map((planInfo, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="rounded-full flex-shrink-0 border-[0.8px] mt-1.5 border-primary bg-secondaryShade1 h-[9px] w-[9px]"></div>
              <p className="text-[14px] font-medium md:text-[18px]">{planInfo}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button className="bg-primary rounded-[8px] font-semibold text-[20px] text-white w-full py-2 md:text-[24px]">
          {`${isFreeTrial ? "Start free Trial" : "Upgrade"}`}
        </button>
        {isFreeTrial && (
          <p className="text-[14] font-medium text-center mt-1 md:text-[17px]">Upgrade anytime</p>
        )}
      </div>
    </div>
  );
};

export default PaymentSelection;
