import Image from "next/image";

import googleIcon from "../../public/asset/icons/google-icon.svg";

const authInput = [
  { type: "text", placeholder: "Full Name" },
  { type: "email", placeholder: "email address" },
  { type: "password", placeholder: "Password" },
  { type: "password", placeholder: "Confirm Password" },
];

const SignUp = ({switcher}) => {
  return (
    <div className="flex flex-col text-center overflow-auto pt-20 pb-3 h-full">
      <p className="text-[24px] text-primary font-semibold mb-2">Sign Up</p>
      <p className="text-[14px] text-secondaryShade3">
        First create an account
      </p>

      <div className="flex flex-col gap-3 justify-between flex-1 mt-10">
        <form className="flex flex-col space-y-6">
          {authInput.map((authInputData, index) => (
            <input
              placeholder={authInputData.placeholder}
              key={index}
              type={authInputData.type}
              className="border-b border-secondaryShade3 outline-none w-full placeholder-secondaryShade4"
            />
          ))}
        </form>
        <div className="space-y-5">
          <button onClick={() => switcher("chooseintrest")} className="text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold">
            Sign up
          </button>
          <button className="flex items-center justify-center gap-5 border border-secondaryShade1 h-[43px] rounded-[8px] w-full text-primary font-semibold">
          <div className="h-[24px] w-[24px]">
              <Image
                src={googleIcon}
                className="h-full w-full object-cover"
                alt="google logo"
                height={24}
                width={24}
                loading="eager"
                priority
              />
            </div>{" "}
            <p>Sign up with Google</p>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-[14px] font-semibold">
          <p className="text-secondaryShade4">Already have an account? </p>{" "}
          <button onClick={() => switcher("signin")} className="text-primary"> 
            Sign in
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default SignUp;
