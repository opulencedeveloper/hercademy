import { useState } from "react";

const Settings = () => {
  const [showAppearance, setShowAppearance] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const currentMode = localStorage.getItem("darkMode");
//     setIsDarkMode(currentMode === "true");
//   }, []);

//   const toggleMode = (mode) => {
//     setIsDarkMode(mode);
//     localStorage.setItem("darkMode", mode);
//     applyTheme(mode);
//   };

//   const applyTheme = (darkMode) => {
//     const root = document.documentElement;
//     const theme = darkMode ? "dark" : "light";
//     root.setAttribute("data-theme", theme);
//   };

//   useEffect(() => {
//     applyTheme(isDarkMode);
//   }, [isDarkMode]);

  const showAppearanceToggle = () => {
    setShowAppearance((prev) => !prev);
  };

  return (
    <div className="rounded-[2px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 space-y-2 py-4 px-4 bg-white text-[20px] md:text-[28px]">
      <div className="animateSlideUp w-full h-full"><p className="text-primary1 cursor-pointer">Language</p>
      <div className="relative text-primary1 cursor-pointer">
        <button onClick={showAppearanceToggle}>Appearance</button>
        {showAppearance && (
          <div className="animateSlideDown rounded-[2px] absolute top-12 space-y-2 py-2 px-6 bg-white text-[20px] md:top-16 md:text-[28px]">
            <button
              onClick={() => {
                showAppearanceToggle();
              //  toggleMode(false);
              }}
            >
              Light
            </button>
            <button
              onClick={() => {
                showAppearanceToggle();
               // toggleMode(true);
              }}
            >
              Dark
            </button>
          </div>
        )}
      </div></div>
    </div>
  );
};

export default Settings;
