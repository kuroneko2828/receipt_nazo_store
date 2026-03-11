import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-soft": "#ffb3c6",
        "pink-light": "#fff0f3",
        "mint": "#b7e4c7",
        "mint-light": "#f0fff4",
        "lavender": "#d8b4fe",
        "lavender-light": "#faf5ff",
        "peach": "#fed7aa",
        "cream": "#fff9c4",
      },
      fontFamily: {
        rounded: ['"M PLUS Rounded 1c"', '"Hiragino Maru Gothic Pro"', 'sans-serif'],
      },
      borderRadius: {
        "xl2": "1.25rem",
        "xl3": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
