import { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../public/asset/images/image-1.svg";
import image2 from "../../public/asset/images/image-2.svg";
import image3 from "../../public/asset/images/image-3.svg";

const onBoardingInfo = [
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
      "offering specialized education, mentorship. It equips them with skills, confidence, and networks, accelerating their career growth in technology.",
  },
];

const OnBoarding = ({ switcher }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % onBoardingInfo.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % onBoardingInfo.length);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const currentX = e.touches && e.touches[0] ? e.touches[0].clientX : null;

    if (currentX !== null) {
      const deltaX = currentX - startX;

      // Check if swipe distance is greater than a threshold
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          goToPrevSlide();
        } else {
          goToNextSlide();
        }
        setStartX(null); // Reset startX after detecting the swipe
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div className="animateSlideUp flex flex-col justify-between h-full gap-2 relative max-w-[40rem] px-4 mx-auto scrollbar-hide overflow-y-auto pt-7 pb-20">
      <div className="flex justify-end mb-5">
        <button onClick={() => switcher("signup")} className="text-[16px]">
          Skip
        </button>
      </div>
      <div
        className="transform transition-all duration-50000"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setStartX(null)}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={() => setStartX(null)}
      >
        <div className="overflow-x-hidden max-w-2xl mx-auto md:py-0">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / onBoardingInfo.length)
              }%)`,
              width: `${onBoardingInfo.length * 100}%`,
            }}
          >
            {onBoardingInfo.map((onBoardingtData, index) => (
              <div className="w-full" key={index}>
                <div className="h-[290px] rounded-[8px] overflow-hidden mb-4">
                  <Image
                    src={onBoardingtData.image}
                    alt={onBoardingtData.title}
                    height={280}
                    width={343}
                    loading="eager"
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[20px] font-bold text-center mb-2">
                  {onBoardingtData.title}
                </p>
                <p className="text-[14px] text-secondary text-center px-4">
                  {onBoardingtData.subTitle}
                </p>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 space-x-1 w-full">
        {onBoardingInfo.map((_, index) => {
          const width =
            index === activeIndex
              ? "w-[58px] bg-primary"
              : "w-[5px] bg-secondaryShade1";
          return (
            <div
              key={index}
              className={`rounded-lg h-[5px] transition-all duration-500 ease-in-out ${width}`}
            ></div>
          );
        })}
      </div>
      <div className="space-y-5">
        <button
          onClick={() => switcher("signin")}
          className="text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold"
        >
          Login
        </button>
        <button
          onClick={() => switcher("signup")}
          className="text-center border border-secondaryShade1 h-[43px] rounded-[8px] w-full text-primary font-semibold"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnBoarding;
