import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import searchIcon from "../../public/asset/icons/search-icon.svg";
import radioInactive from "../../public/asset/icons/radio-inactive-icon.svg";
import radioActive from "../../public/asset/icons/radio-active-icon.svg";

const interest = [
  "Blockchain",
  "Back-end Development",
  "Content writing",
  "Data Analysis",
  "Data Science",
  "Database Management",
  "Digital Marketing",
  "Front-end Development",
  "Full-stack Development",
  "Game Development",
];

const ChooseIntrest = () => {
  const [selectedIntrest, setSelectedIntrest] = useState("");
  const [filterIntrest, setFilterIntrest] = useState(interest);
  const router = useRouter();
  
  useEffect(() => {
    const flag = localStorage.getItem("editareaofintrest");
    if (flag === "1") {
      localStorage.setItem("editareaofintrest", "0");
    }
  }, []);

  const filterIntrestHandler = (event) => {
    const inputedValue = event.target.value;

    const filteredIntrest = interest.filter((intrest) =>
      intrest.toLowerCase().includes(inputedValue.toLowerCase())
    );
    setFilterIntrest(filteredIntrest);
  };

  return (
    <div className="animateSlideUp flex flex-col justify-between h-full text-center pt-14 ">
      <div>
        {" "}
        <p className="text-[24px] text-primary font-semibold mb-2 md:text-[32px]">
          Choose your Intrest
        </p>
        <p className="text-[16px] text-secondaryShade3 md:text-[16px]">
          This will help us streamline your search to your area of interest.
        </p>
        <div className="flex items-center rounded-[8px] overflow-hidden h-[44px] mt-8 bg-secondaryShade5">
          <div className="h-[18px] w-[18px] ml-5 mr-3">
            <Image
              src={searchIcon}
              alt="search icon"
              height={18}
              width={18}
              loading="eager"
              priority
              className="w-full h-full"
            />
          </div>
          <input
            onChange={filterIntrestHandler}
            placeholder="Search"
            className="h-full bg-transparent flex-1 outline-none"
          />
        </div>
        <div className="space-y-2 my-7">
          {" "}
          {filterIntrest.map((interestData, index) => (
            <button
              onClick={() => setSelectedIntrest(interestData)}
              key={index}
              className="flex items-center "
            >
              <div className="h-[20px] w-[20px]">
                <Image
                  src={
                    interestData === selectedIntrest
                      ? radioActive
                      : radioInactive
                  }
                  alt="radio button"
                  loading="eager"
                  priority
                  height={20}
                  width={20}
                  className="h-full w-full"
                />
              </div>
              <p className="text-[16px] ml-5 font-medium md:text-[19px]">
                {interestData}
              </p>
            </button>
          ))}{" "}
        </div>
      </div>

     <div> <button
        onClick={() => router.replace("/home")}
        className="flex-shrink-0 text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold mb-5 md:h-[50px] md:text-[19px]"
      >
        Choose
      </button>
      </div>
    </div>
  )
}

export default ChooseIntrest;
