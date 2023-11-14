import Image from "next/image";

import welcomeImage from "../../public/asset/images/welcome-image.svg";

const LeftComponent = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <section className="relative w-1/2 h-full overflow-hidden bg-black">
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
      </section>
      <section className="w-full px-4 h-full md:w-1/2 md:px-32">{children}</section>
    </div>
  );
};

export default LeftComponent;
