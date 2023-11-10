import Image from "next/image";

import googleIcon from "../../public/asset/icons/google-icon.svg";

const authInput = [
  { type: "text", placeholder: "Email or Username" },
  { type: "password", placeholder: "Password" },
];

const SignIn = ({switcher}) => {
  return (
    <div className="flex flex-col text-center overflow-auto pt-14 pb-3 h-full">
      <p className="text-[24px] text-primary font-semibold mb-2">
        Welcome Back!{" "}
      </p>
      <p className="text-[14px] text-secondaryShade3">Login to continue</p>

      <div className="flex flex-col gap-3 justify-between flex-1 mt-10">
        <div>
          {" "}
          <form className="flex flex-col space-y-6">
            {authInput.map((authInputData, index) => (
             <div className="flex flex-col items-start"> 
                <label className="text-[12px] text-secondaryShade4" htmlFor={authInputData.placeholder}>{authInputData.placeholder}</label>
                <input
                placeholder={authInputData.placeholder}
                id={authInputData.placeholder}
                key={index}
                type={authInputData.type}
                className="border-b border-secondaryShade3 outline-none w-full placeholder-secondaryShade4"
              />
              </div>
            ))}   
          </form>
          <div className="flex justify-end mt-1">
            <button type="button" className="text-[12px]">
              Forgot password?
            </button>
          </div>
        </div>
        <div className="space-y-5">
          <button className="text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold">
            Sign up
          </button>
          <button className="flex items-center justify-center gap-5 border border-secondaryShade1 h-[43px] rounded-[8px] w-full text-primary font-semibold">
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
            <p>Sign up with Google</p>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-[14px] font-semibold">
          <p className="text-secondaryShade4">Don’t have an account? </p>{" "}
          <button onClick={() => switcher("signup")} className="text-primary">Sign Up</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default SignIn;