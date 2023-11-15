import Image from "next/image";
import { useRouter } from "next/router";

import googleIcon from "../../public/asset/icons/google-icon.svg";

const authInput = [
  { type: "text", placeholder: "Email or Username" },
  { type: "password", placeholder: "Password" },
];

const SignIn = ({switcher}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col text-center pt-14 pb-3 h-full ">
      <p className="text-[24px] text-primary font-semibold mb-2 md:text-[32px]">
        Welcome Back!{" "}
      </p>
      <p className="text-[14px] text-secondaryShade3 md:text-[16px]">Login to continue</p>

      <div className="flex flex-col gap-3 justify-between flex-1 mt-10">
        <div>
          {" "}
          <form className="flex flex-col space-y-6">
            {authInput.map((authInputData, index) => (
             <div className="flex flex-col items-start"> 
                <label className="text-[12px] text-secondaryShade4 md:text-[16px]" htmlFor={authInputData.placeholder}>{authInputData.placeholder}</label>
                <input
                id={authInputData.placeholder}
                key={index}
                type={authInputData.type}
                className="border-b border-secondaryShade3 outline-none w-full placeholder-secondaryShade4"
              />
              </div>
            ))}   
          </form>
          <div className="flex justify-end mt-1">
            <button type="button" className="text-[12px] md:text-[16px]">
              Forgot password?
            </button>
          </div>
        </div>
        <div className="space-y-5">
          <button onClick={() => router.push("/home")} className="text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold md:text-[16px] md:h-[48px]">
            Login
          </button>
          <button className="flex items-center justify-center gap-5 border border-secondaryShade1 h-[43px] rounded-[8px] w-full text-primary font-semibold md:h-[48px]">
            <div className="h-[24px] w-[24px]">
              <Image
                src={googleIcon}
                alt="google logo"
                className="h-full w-full object-cover"
                height={24}
                width={24}
                loading="eager"
                priority
              />
            </div>{" "}
            <p className="md:text-[16px]">Sign up with Google</p>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-[14px] font-semibold md:text-[16px]">
          <p className="text-secondaryShade4">Don’t have an account? </p>{" "}
          <button onClick={() => switcher("signup")} className="text-primary">Sign Up</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default SignIn;
