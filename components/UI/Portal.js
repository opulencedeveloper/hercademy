import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { children, togglePortalHandler } = props;

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div
      onClick={togglePortalHandler}
        className={`${inter.className}  fixed top-0 h-screen w-full z-40 bg-black opacity-60`}
      ></div>
      <div className="h-max fixed top-1/2 w-full z-50">{children}</div>
    </>,

    document.getElementById("navigation")
  );
};

export default Portal;
