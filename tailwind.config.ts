import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#181A3B", paper: "#F2F3FB", blurple: "#5865F2", "blurple-dark": "#4752C4",
        gold: "#F5B82E", mint: "#1FA37F", rose: "#D6455D", line: "#D9DCF1", mute: "#5B5E86",
      },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
