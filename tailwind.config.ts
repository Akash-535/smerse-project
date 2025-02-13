import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-purple":"#952FFE",
         "light-pink":"#C641C6",
          "light-orange":"#FF676B",
          "dark-blue":"#0A0A2B",
          "purple-gray":"#222240"
      },
      backgroundImage:{
        "hero-bg":"url('/assets/images/hero-bg.webp')",
         "hero-tab-bg":"url('/assets/images/hero-tab-bg.webp')",
          "hero-mobile-bg":"url('/assets/images/hero-mobile-bg.webp')"
      },
      lineHeight:{
        "custom-md":"120%",
        "custom-xl":"150%"
      }
    },
  },
  plugins: [],
} satisfies Config;
