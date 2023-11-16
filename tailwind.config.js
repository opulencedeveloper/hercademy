/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#950142",
        primaryShade1: "#F8ABCD",
        primaryShade2: "#D6ADBF", 
        primaryShade3: "#403131",
        primaryShade4: "#D6ADBF",
        primaryShade5: "#D9B4C5",
        primaryShade6: "#321320",
        primary1: "#222B45",  
        primary2: "#02025F",
        secondary: "#3C3C3C",
        secondary2: "#73FF32",
        secondary3: "#F6F3F3",
        secondary4: "#F1EDED",
        secondary5: "#FFF7FA",
        secondaryShade1: "#D9D9D9",
        secondaryShade2: "#6D6767",
        secondaryShade3: "#718096",
        secondaryShade4: "#4A5568",
        secondaryShade5: "#F8F4F4",
        secondaryShade6: "#F8F8F8",
        secondaryShade7: "#F4F5F7",
        secondaryShade8: "#8F9BB3",
        secondaryShade9: "#CBD5E0",
        secondaryShade10: "#DFD9D9",
      },
      boxShadow: {
        customShadow: "0px 2px 2px 0px #00000040",
        customShadow1: "0px 4px 4px 0px #00000040",
        customShadow2: "0px 0px 12px 0px #0000000D",
        customShadow3: "1px 1px 4px 0px #00000040",

      },

    },
  },
  plugins: [],
};
