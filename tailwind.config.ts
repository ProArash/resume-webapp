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
        background: "#081c15",
        foreground: "#d8f3dc",
        primary:'#1b4332',
        secondary:'#2d6a4f',
        lightPrimary:'#52b788',
      },
    },
  },
  plugins: [],
} satisfies Config;
