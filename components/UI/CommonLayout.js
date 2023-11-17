import Image from "next/image";

const CommonLayout = ({
  image,
  onClick,
  title,
  subTitle,
  premiumSwitcherHandler,
  myId
}) => {
  return (
    <div
    id={myId}
      onClick={premiumSwitcherHandler}
      className="px-4 mt-3 md:px-20 mb-5 lg:px-32"
    >
      <p className="text-[16px] font-semibold mb-2 text-primary1 md:text-[24px]">
        {title}
      </p>
      <p className="text-[12px] font-medium text-secondary leading-tight md:text-[16px]">
        {subTitle}
      </p>
      <div
        onClick={onClick}
        className="relative h-[262px] w-full mt-4 cursor-pointer md:h-[462px]"
      >
        <Image
          src={image}
          className="h-full w-full object-cover"
          loading="eager"
          priority
          alt="image"
          height={462}
          width={1232}
        />
        <div className=" absolute top-0 py-1 px-3 left-0 text-primary bg-white flex flex-col items-center justify-start text-center text-[19px] font-medium md:text-[28px]">
          PREMIUM
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
