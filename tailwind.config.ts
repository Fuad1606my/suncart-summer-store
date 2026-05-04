import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 22px 70px rgba(250, 134, 36, 0.18)"
      },
      backgroundImage: {
        "summer-radial": "radial-gradient(circle at top left, rgba(255, 214, 102, .45), transparent 28%), radial-gradient(circle at top right, rgba(45, 212, 191, .22), transparent 30%)"
      }
    }
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        suncart: {
          primary: "#f97316",
          secondary: "#14b8a6",
          accent: "#facc15",
          neutral: "#1f2937",
          "base-100": "#fffaf3",
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444"
        }
      },
      "light"
    ]
  }
};

export default config;
