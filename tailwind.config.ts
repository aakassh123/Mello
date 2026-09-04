import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        char: {
          DEFAULT: "#0B1020",
          soft: "#141C31",
          line: "#29334D",
        },
        ivory: "#F7F8FF",
        beige: "#FFD2C2",
        grey: "#A7B0C6",
        clay: "#FF6B5F",
        moss: "#FF8F7A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,-2%)" },
          "30%": { transform: "translate(2%,1%)" },
          "50%": { transform: "translate(-1%,3%)" },
          "70%": { transform: "translate(3%,-1%)" },
          "90%": { transform: "translate(-2%,2%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
