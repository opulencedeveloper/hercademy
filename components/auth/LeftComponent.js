import Image from "next/image";

import welcomeImage from "../../public/asset/images/welcome-image.svg";
import { useEffect, useState } from "react";

import image1 from "../../public/asset/images/image-1.svg";
import image2 from "../../public/asset/images/image-2.svg";
import image3 from "../../public/asset/images/image-3.svg";

const onBoardingInfo = [
  "",
  {
    image: image1,
    title: "Acquire Valuable Skills",
    subTitle:
      "Gain access to  diverse tech courses, gain expertise and successful tech career guided by industry experts.",
  },
  {
    image: image2,
    title: "Community Networking",
    subTitle:
      "Connect with peers, mentors, and tech enthusiasts. Engage, collaborate, and expand your network for meaningful connections.",
  },
  {
    image: image3,
    title: "Career Goals",
    subTitle:
      "Offering specialized education, mentorship. It equips them with skills, confidence, and networks, accelerating their career growth in technology.",
  },
];

const LeftComponent = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % onBoardingInfo.length);
  };
  const linearGradientStyle = {
    background:
      "linear-gradient(180.02deg, rgba(18, 18, 18, 0) 37.07%, #121212 94.31%)",

    color: "#fff",
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative transform transition-all duration-50000 bg-black w-1/2 h-full overflow-hidden hidden lg:block">
        <div className="overflow-x-hidden w-full h-full">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / onBoardingInfo.length)
              }%)`,
              width: `${onBoardingInfo.length * 100}%`,
            }}
          >
            {onBoardingInfo.map((onBoardingtData, index) => (
              <div className="relative w-full h-full " key={index}>
                {" "}
                <Image
                  src={index === 0 ? welcomeImage : onBoardingtData.image}
                  loading="eager"
                  priority
                  alt={onBoardingtData.title}
                  height={280}
                  width={343}
                  className={`h-full w-full object-cover ${
                    index === 0 && "opacity-25"
                  }`}
                />
                <div
                  className="absolute top-0 left-0 bottom-0 right-0"
                  style={linearGradientStyle}
                ></div>
                <div className="absolute bottom-24 left-8 right-11 text-white flex flex-col">
                  {index === 0 ? (
                    <>
                      <div className="font-bold  mb-4">
                        {" "}
                        <p className="text-white leading-none text-[61px]">
                          Welcome to
                        </p>
                        <p className="text-primaryShade1 leading-none text-[78px]">
                          Hercademy
                        </p>
                      </div>
                      <p className="text-[24px] text-white leading-tight">
                        Gain access to diverse tech courses, gain expertise and
                        successful tech career guided by industry experts.
                      </p>
                    </>
                  ) : (
                    <>
                      {" "}
                      <p className="text-[48px] font-bold mb-4">
                        {onBoardingtData.title}
                      </p>
                      <p className="text-[32px] leading-tight">
                        {onBoardingtData.subTitle}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
        <div className="absolute bottom-10 flex justify-center items-center mt-20 space-x-1 w-full">
          {onBoardingInfo.map((_, index) => {
            const width =
              index === activeIndex
                ? "w-[58px] bg-primary"
                : "w-[5px] bg-secondaryShade1"
            return (
              <div
                key={index}
                className={`rounded-lg h-[5px] transition-all duration-500 ease-in-out ${width}`}
              ></div>
            );
          })}
        </div>
      </div>
      {/* <section className="relative w-1/2 h-full overflow-hidden bg-black hidden lg:block">
        <Image
          src={welcomeImage}
          className="w-full h-full object-cover opacity-25"
          priority
          loading="eager"
        />
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex flex-col space-y-8 max-w-[85%]">
          <div className="font-bold">
            {" "}
            <p className="text-white leading-none text-[61px]">Welcome to</p>
            <p className="text-primaryShade1 leading-none text-[78px]">Hercademy</p>
          </div>
          <p className="text-[24px] text-white leading-tight">Gain access to  diverse tech courses, gain expertise
and successful tech career guided by industry experts.</p>
        </div>
      </section> */}
      <section className="flex flex-col w-full h-full overflow-auto px-4 md:px-12 lg:w-1/2 xl:px-32">
        {children}
      </section>
    </div>
  );
};

export default LeftComponent;
