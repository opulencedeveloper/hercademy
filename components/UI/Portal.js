import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { children } = props;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`${inter.className} absolute top-0 w-full h-full pt-7 max-w-[40rem]  left-1/2 transform -translate-x-1/2`}
    >
      {children}
    </div>,
    document.getElementById("navigation")
  );
};

export default Portal;
