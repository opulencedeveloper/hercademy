import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { children } = props;

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
        className={`${inter.className} absolute top-0 h-screen w-full  bg-black opacity-60`}
      ></div>
      <div className=" z-40">{children}</div>
    </>,

    document.getElementById("navigation")
  );
};

export default Portal;
