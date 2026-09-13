import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        paper: "#FFFFFF",
        violet: {
          DEFAULT: "#5430FF",
          deep: "#1B0E66",
          soft: "#EDE9FF",
        },
        graphite: "#5B5B66",
        line: "#E4E2EC",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        assemble: {
          "0%": { transform: "translate(-14px, 10px) rotate(-6deg)", opacity: "0" },
          "100%": { transform: "translate(0,0) rotate(0deg)", opacity: "1" },
        },
      },
      animation: {
        assemble: "assemble 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
