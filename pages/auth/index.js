import Layout from "@/components/layout/Layout";

import OnBoarding from "@/components/auth/Onboarding";
import SignUp from "@/components/auth/Signup";
import SignIn from "@/components/auth/Signin";
import { useState } from "react";
import ChooseIntrest from "@/components/auth/ChooseIntrest";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("onboarding");

  const switcher = (val) => {
    console.log(val)
    setSelectedComponent(val);
  };
  let componentToRender;

  switch (selectedComponent) {
    case "onboarding":
      componentToRender = <OnBoarding switcher={switcher} />;
      break;
    case "signup":
      componentToRender = <SignUp switcher={switcher} />;
      break;
    case "signin":
      componentToRender = <SignIn switcher={switcher} />;
      break;
      case "chooseintrest":
        componentToRender = <ChooseIntrest switcher={switcher} />;
        break;
    default:
      componentToRender = <OnBoarding switcher={switcher} />;
  }
  return <Layout>{componentToRender}</Layout>;
}
