import { useState } from "react";
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

  const filterIntrestHandler = (event) => {
    const inputedValue = event.target.value;

    const filteredIntrest = interest.filter((intrest) =>
      intrest.toLowerCase().includes(inputedValue.toLowerCase())
    );
    setFilterIntrest(filteredIntrest);
  };

  return (
    <div className="h-full text-center pt-14 pb-5">
      <p className="text-[24px] text-primary font-semibold mb-2">
        Choose your Intrest
      </p>
      <p className="text-[16px] text-secondaryShade3">
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
            className="flex items-center gap-5"
          >
            <div className="h-[20px] w-[20px]">
              <Image
                src={
                  interestData === selectedIntrest ? radioActive : radioInactive
                }
                alt="radio button"
                height={20}
                width={20}
                className="h-full w-full"
              />
            </div>
            <p className="text-[16px] font-medium">{interestData}</p>
          </button>
        ))}{" "}
      </div>

      <button onClick={() => router.replace("/home")} className="text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold">
        Choose
      </button>
    </div>
  );
};

export default ChooseIntrest;
