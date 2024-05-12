import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        mainColour: "#1ED760",
        sectionColour: "#191919",
        lessFocusColour: "#B3B3B3",
        buttonColour: "#232323",
        smallerSectionColour: "#242424",
        appBlack: "#0F0F0F",
        profileContainerColour: "#509BF5",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
