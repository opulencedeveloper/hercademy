import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "@/components/layout/Layout";

import avaterImage from "../../public/asset/images/avatar-image.svg";
import angleRightIcon from "../../public/asset/icons/angle-left-icon.svg";
import { useState } from "react";
import Loading from "@/components/UI/Loading";
import Portal from "@/components/UI/Portal";
import Settings from "@/components/profile/Settings";

const navItems = [
  {
    title: "My Learning",
    dropDown: ["Ongoing courses", "Completed courses"],
  },
  { title: "Calendar" },
  { title: "Upgrade account" },
  { title: "Privacy" },
  { title: "Status" },
  {
    title: "Settings",
    dropDown: ["Language", "Completed courses", "Light", "Dark"],
  },
  { title: "FAQS" },
  { title: "Logout" },
];

const Profile = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState();
  const [showLoading, setShowLoading] = useState(true);
  const [showCourses, setShowCourses] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleCoursesHandler = () => {
    setShowCourses((prev) => !prev);
    handleToggle(0);
  };

  const toggleSettingssHandler = () => {
    setShowSettings((prev) => !prev);
    handleToggle(5);
  };

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const loadingSwitcher = () => {
    setShowLoading((prev) => !prev);
  };

  return showLoading ? (
    <Loading loadingSwitcher={loadingSwitcher} />
  ) : (
    <div className="overflow-y-auto ">
      <section className="relative max-w-[40rem] h-screen mx-auto pt-7 ">
        {showCourses && (
          <Portal togglePortalHandler={toggleCoursesHandler}>
            <div className="rounded-[2px]  absolute w-[80%] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 space-y-2 py-4 px-4 bg-white text-[20px] md:w-max md:text-[28px]">
              <div className="animateSlideUp w-full h-full">
                <p className="text-primary1 cursor-pointer">Ongoing courses</p>
                <p className="text-primary1 cursor-pointer">
                  Completed courses
                </p>
              </div>
            </div>
          </Portal>
        )}

        {showSettings && (
          <Portal togglePortalHandler={toggleSettingssHandler}>
            <Settings />
          </Portal>
        )}
        <div className="flex flex-col items-center px-6">
          {" "}
          <div className="h-[61px] w-[63px] mb-5 md:h-[85px] md:w-[85px]">
            <Image
              src={avaterImage}
              alt="avatar"
              height={34}
              width={34}
              loading="eager"
              priority
              className="h-full w-full"
            />
          </div>
          <p className="font-semibold text-[16px] md:text-[24px]">Mary Jay</p>
          <p className="text-[12px] text-secondary mt-1 md:text-[14px]">
            iammaryjay@gmail.com
          </p>
          <button className="h-[38px] w-full mt-14 mx-auto rounded-[8px] text-[17px] text-white bg-primary md:h-[48px] md:text-[24px]">
            Hercademy For Business
          </button>{" "}
        </div>
        <div className="px-4 space-y-4 my-9">
          {navItems.map((navIfo, index) => (
            <>
              <button
                onClick={() => {
                  handleToggle(index);
                  if (navIfo.title === "My Learning") toggleCoursesHandler();
                  if (navIfo.title === "Settings") toggleSettingssHandler();
                  if (navIfo.title === "Logout") {
                    localStorage.setItem("editareaofintrest", "2");
                    router.replace("/");
                  }
                }}
                key={index}
                className="flex justify-between w-full items-center text-primary1 text-[16px] h-[24px] md:text-[19px]"
              >
                <p>{navIfo.title}</p>{" "}
                {(index === 0 || index === 5) && (
                  <div className="h-[12.22px] w-[5.49px]">
                    <Image
                      src={angleRightIcon}
                      height={10}
                      width={5}
                      loading="eager"
                      priority
                      alt="angle right icon"
                      className={`w-full h-full transform ${
                        activeIndex === index ? "rotate-90" : ""
                      } transition duration-300 ease-in-out`}
                    />
                  </div>
                )}
              </button>
              {/* {activeIndex === index && (index === 0 || index === 6) ? (
              navIfo.dropDown.map((data, index) => (
                <button
                  key={index}
                  className="flex justify-between w-full ml-5 items-center text-primary1 text-[16px] h-[24px]"
                >
                  {data}
                </button>
              ))
            ) : (
              <></>
            )} */}
            </>
          ))}
        </div>
        <div className="h-1"></div>
      </section>
    </div>
  );
};

export default Profile;
