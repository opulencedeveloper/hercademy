import Layout from "@/components/layout/Layout";

import OnBoarding from "@/components/auth/Onboarding";
import SignUp from "@/components/auth/Signup";
import SignIn from "@/components/auth/Signin";
import { useState } from "react";
import ChooseIntrest from "@/components/auth/ChooseIntrest";
import LeftComponent from "@/components/auth/LeftComponent";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("onboarding");

  const switcher = (val) => {
    console.log(val);
    setSelectedComponent(val);
  };
  let componentToRender;

  switch (selectedComponent) {
    case "onboarding":
      componentToRender = <OnBoarding switcher={switcher} />;
      break;
    case "signup":
      componentToRender = (
        <LeftComponent>
          <SignUp switcher={switcher} />
        </LeftComponent>
      );
      break;
    case "signin":
      componentToRender = (
        <LeftComponent>
          <SignIn switcher={switcher} />
        </LeftComponent>
      );
      break;
    case "chooseintrest":
      componentToRender = (
        <LeftComponent>
          <ChooseIntrest switcher={switcher} />;
        </LeftComponent>
      );
      break;
    default:
      componentToRender = <OnBoarding switcher={switcher} />;
  }
  return componentToRender;
}
