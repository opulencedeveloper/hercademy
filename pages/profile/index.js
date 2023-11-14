import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "@/components/layout/Layout";

import arrowBackIcon from "../../public/asset/icons/arrow-back-icon.svg";
import avaterImage from "../../public/asset/images/avatar-image.svg";
import angleRightIcon from "../../public/asset/icons/angle-left-icon.svg";
import { useState } from "react";

const navItems = [
  {
    title: "My Learning",
    dropDown: ["Ongoing courses", "Completed courses"],
  },
  { title: "Porfolio" },
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

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative max-w-[40rem] h-screen mx-auto scrollbar-hide overflow-y-auto pt-7 pb-2">
      <button className="h-[14px] w-[14px] ml-4 md:h-[24px] md:w-[24px]">
        <Image
          src={arrowBackIcon}
          onClick={() => router.back()}
          alt="back icon"
          className="h-full w-full"
          loading="eager"
          priority
        />
      </button>
      <div className="flex flex-col items-center px-6">
        {" "}
        <div className="h-[61px] w-[63px] mb-5">
          <Image
            src={avaterImage}
            alt="avatar"
            height={34}
            width={34}
            className="h-full w-full"
          />
        </div>
        <p className="font-semibold text-[16px]">Mary Jay</p>
        <p className="text-[12px] text-secondary mt-1">iammaryjay@gmail.com</p>
        <button className="h-[38px] w-full mt-14 mx-auto rounded-[8px] text-[20px] text-white bg-primary">
          Become an Instructor
        </button>{" "}
      </div>
      <div className="px-4 space-y-4 my-9">
        {navItems.map((navIfo, index) => (
          <>
            <button
              onClick={() => {
                handleToggle(index);
                if (navIfo.title === "Porfolio") router.push("/portfolio");
              }}
              key={index}
              className="flex justify-between w-full items-center text-primary1 text-[16px] h-[24px]"
            >
              <p>{navIfo.title}</p>{" "}
              {(index === 0 || index === 5) && (
                <div className="h-[12.22px] w-[5.49px]">
                  <Image
                    src={angleRightIcon}
                    height={10}
                    width={5}
                    alt="angle right icon"
                    className={`w-full h-full transform ${
                      activeIndex === index ? "rotate-90" : ""
                    } transition duration-300 ease-in-out`}
                  />
                </div>
              )}
            </button>
            {activeIndex === index && (index === 0 || index === 5) ? (
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
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Profile;
