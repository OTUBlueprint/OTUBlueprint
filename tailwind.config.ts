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
        blue: 'rgb(5, 115, 232)'
      },
      screens: {
        'xs': '320px',
        'lg': '1280px'
      }
    },
  },
  plugins: [],
} satisfies Config;
