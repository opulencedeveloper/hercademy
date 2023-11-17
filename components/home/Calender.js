import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import classNames from "classnames";

import angleRightIcon from "../../public/asset/icons/angle-right-icon.svg";
import angleLeftIcon from "../../public/asset/icons/angle-left-icon.svg";

import PickedDateSuccess from "./PickedDateSuccess";

const availableTime = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"];

const Calender = (props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("9:00 AM");
  const [isSaveDate, setIsSaveDate] = useState(false);
  const router = useRouter();

  const toggleDateSuccess = () => {
    setIsSaveDate((prev) => !prev);
  };

  const handleDateClick = (date) => {
    if (date.getMonth() < currentMonth.getMonth()) {
      setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    } else {
      setSelectedDate(date);
    }

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    console.log(`Selected Date: ${formattedDate}`);
  };

  const renderHeader = () => {
    const monthOptions = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthOptions[currentMonth.getMonth()];
    const year = currentMonth.getFullYear();

    return (
      <div className="flex justify-between items-center mb-4">
        <button
          className="flex items-center justify-center h-[34px] w-[34px] rounded-[10px] border border-secondaryShade7"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
        >
          <div className="h-[14.04px] w-[17.84px]">
            <Image
              src={angleRightIcon}
              height={14}
              width={14}
              loading="eager"
              priority
              alt="angle right icon"
              className="w-full h-full"
            />
          </div>
        </button>
        <div className="flex flex-col justify-center items-center">
          <p className="text-semibold text-[20px] text-primary1">{month}</p>
          <p className="text-[12px] text-secondaryShade8">{year}</p>
        </div>
        <button
          className="flex items-center justify-center h-[34px] w-[34px] rounded-[10px] border border-secondaryShade7"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
        >
          <div className="h-[14.04px] w-[17.84px]">
            <Image
              src={angleLeftIcon}
              height={14}
              width={17}
              loading="eager"
              priority
              alt="angle left icon"
              className="w-full h-full"
            />
          </div>
        </button>
      </div>
    );
  };

  const Weekdays = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="text-secondaryShade8 grid grid-cols-7 gap-1">
        {weekdays.map((weekday) => (
          <div key={weekday} className="text-center text-[13px]  w-9">
            {weekday}
          </div>
        ))}
      </div>
    );
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const numDaysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const days = [];

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      const previousMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        0
      );
      const day = previousMonth.getDate() - firstDayOfMonth.getDay() + i + 1;
      const date = new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth(),
        day
      );
      const isToday = date.toDateString() === new Date().toDateString();

      const dayClass = classNames(
        "text-center rounded-full py-2 cursor-pointer text-secondaryShade9",
        {
          "text-sm w-9": !isToday,
          "text-black": isToday,
        }
      );

      days.push(
        <div
          key={`empty-${i}`}
          className={dayClass}
          onClick={() => handleDateClick(date, i)}
        >
          {day}
        </div>
      );
    }

    for (let day = 1; day <= numDaysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();

      const dayClass = classNames(
        "flex justify-center items-center rounded-[6px] pt-0.5 cursor-pointer h-[32px] w-[32px] text-[15px]",
        {
          "text-primary1": !isSelected && !isToday,
          "bg-blue-500 text-white": isSelected && !isToday,
          "text-white bg-primary": isSelected && isToday,
          "border border-primary text-primary1": isToday,
          "text-white": isSelected && !isToday,
        }
      );

      days.push(
        <div
          key={day}
          className={dayClass}
          onClick={() => handleDateClick(date, day - 1)}
        >
          {day}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-1">{days}</div>;
  };

  return (
    <>
      <div className="flex flex-col px-4 pb-4 h-screen overflow-hidden pt-7 max-w-[524px] mx-auto bg-white">
        <div className="flex items-center pb-5">
          <div className="flex flex-1 justify-center text-[20px] font-bold">
            Save Date
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div>
            {" "}
            {renderHeader()}
            <Weekdays />
            {renderDays()}
            <div className="flex justify-between text-[14px] text-primary1 mt-6">
              {availableTime.map((time, index) => {
                const style =
                  selectedTime === time
                    ? "border-primary"
                    : "border-secondaryShade1";
                return (
                  <button
                    key={index}
                    className={`px-2 py-1.5 font-semibold border rounded-[8px] ${style}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={toggleDateSuccess}
            className="text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold"
          >
            Save Date
          </button>
        </div>
      </div>
      {isSaveDate && (
        <PickedDateSuccess toggleDateSuccess={toggleDateSuccess} />
      )}
    </>
  );
};

export default Calender;
