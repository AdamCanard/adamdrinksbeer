import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pbr: "url('/PBR-s.png')",
      },
      margin: {
        "8": "2rem",
        "16": "4rem",
        "20": "5rem",
      },
      animation: {
        roll: "roll 5s ease-in-out infinite",
      },
      keyframes: {
        roll: {
          "0%, 100%": {
            backgroundPosition: "-200px -100px",
          },
          "50%": {
            backgroundPosition: "0px 0px",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
