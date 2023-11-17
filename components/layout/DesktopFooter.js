import Link from "next/link";
import logo from "../../public/asset/logo/hercademy-logo.svg";
import Image from "next/image";

const sectionOne = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/" },
  { title: "Explore", link: "/explore" },
  { title: "Contact Us", link: "/" },
  { title: "Wish List", link: "/wishlist" },
];

const sectionTwo = [
  { title: "Privacy Policy", link: "/" },
  { title: "Language", link: "/" },
  { title: "Safety Tips", link: "/" },
  { title: "FAQs", link: "/" },
  { title: "Terms and Conditions", link: "/" },
];

const DesktopFooter = () => {
  return (
    <footer className="hidden md:block pt-20 px-28 bg-primaryShade6">
      <section className="flex justify-between">
        {" "}
        <div className="flex flex-col space-y-7">
          {sectionOne.map((data, index) => (
            <Link
              key={index}
              href={data.link}
              className="text-[16px] text-white/60"
            >
              {data.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end justify-center">
            <div className="h-[72px] w-[72px">
              <Image
                src={logo}
                alt="logo"
                className="w-full h-full"
                loading="eager"
                priority
              />
            </div>
            <p className="font-extrabold text-[32px] text-white">HERCADEMY</p>
          </div>
          <p className="text-[24px] font-medium italic text-white ml-2">
            Giving her a chance to thrive
          </p>
        </div>
        <div className="flex flex-col items-end space-y-7">
          {sectionTwo.map((data, index) => (
            <Link key={index} href="/" className="text-[16px] text-white/60">
              {data.title}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex justify-center mt-10 pb-14">
        <p className="font-light text-[14px] text-white/60">
          Designed by{" "}
          <span className="font-semibold text-primary">Team Agile</span>
        </p>
      </section>
    </footer>
  );
};

export default DesktopFooter;
