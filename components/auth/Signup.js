import { useState } from "react";

import Image from "next/image";

import googleIcon from "../../public/asset/icons/google-icon.svg";
import obsurePasswordIcon from "../../public/asset/icons/obsure-password-icon.svg";
import nonObsurePasswordIcon from "../../public/asset/icons/non-obsure-password-icon.svg";

const authInput = [
  { type: "text", placeholder: "Full Name" },
  { type: "email", placeholder: "Email address" },
  { type: "password", placeholder: "Password" },
  { type: "password", placeholder: "Confirm Password" },
];

const SignUp = ({ switcher }) => {
  const [obsurePassword, setObsurePassword] = useState(true);
  const [obsureConfirmPassword, setObsureConfirmPassword] = useState(true);

  const signUpHandler = (event) => {
    event.preventDefault();
    switcher("chooseintrest");
  };

  return (
    <div className="animateSlideDown flex flex-col justify-between text-center pt-20 pb-3 h-full">
      <div>
        {" "}
        <p className="text-[24px] text-primary font-semibold mb-2 md:text-[32px]">
          Sign Up
        </p>
        <p className="text-[14px] text-secondaryShade3 md:text-[16px]">
          First create an account
        </p>
        <form
          onSubmit={signUpHandler}
          className="flex flex-col gap-3 flex-1 mt-10"
        >
          <div className="flex flex-col space-y-6">
            {authInput.map((authInputData, index) => (
              <div className="flex w-full border-b border-secondaryShade3">
                <input
                  placeholder={authInputData.placeholder}
                  key={index}
                  type={
                    index === 2 && obsurePassword
                      ? "password"
                      : index === 2 && !obsurePassword
                      ? "text"
                      : index === 3 && obsureConfirmPassword
                      ? "password"
                      : index === 3 && !obsureConfirmPassword
                      ? "text"
                      : authInputData.type
                  }
                  required
                  className=" flex-1 outline-none w-full placeholder-secondaryShade4"
                />
                {index > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (index === 2) setObsurePassword((prev) => !prev);
                      if (index === 3)
                        setObsureConfirmPassword((prev) => !prev);
                    }}
                  >
                    <div className="h-[16px] w-[16px]">
                      <Image
                        src={
                          obsurePassword && index === 2
                            ? obsurePasswordIcon
                            : !obsurePassword && index === 2
                            ? nonObsurePasswordIcon
                            : obsureConfirmPassword && index === 3
                            ? obsurePasswordIcon
                            : nonObsurePasswordIcon
                        }
                        className="h-full w-full"
                        height={16}
                        width={16}
                        alt="visibility icon"
                        priority
                        loading="eager"
                      />
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-5 mt-12">
            <button className="text-center bg-primary rounded-[8px] h-[43px] w-full text-white font-semibold">
              Sign up
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-5 border border-secondaryShade1 h-[43px] rounded-[8px] w-full text-primary font-semibold"
            >
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
        </form>{" "}
      </div>
      <div className="flex items-center justify-center gap-2 text-[14px] font-semibold md:text-[16px]">
        <p className="text-secondaryShade4">Already have an account? </p>{" "}
        <button onClick={() => switcher("signin")} className="text-primary">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignUp;
