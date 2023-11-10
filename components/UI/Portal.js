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
    <div className={inter.variable}>{children}</div>,
    document.getElementById("navigation")
  );
};

export default Portal;