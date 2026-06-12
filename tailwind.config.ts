// // tailwind.config.ts
// const config = {
//   darkMode: "class",
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
// };



// export default config;

import type { Config } from "tailwindcss";



const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        sans: ['Gotham', 'sans-serif'], // override default
      },
    },
  },
  plugins: [],
};

export default config;
