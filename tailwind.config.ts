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
      backgroundImage: {
        // 'project-pattern': "url('/assets/')",
        'about-pattern': "url('/assets/about_background.svg')",
        'pattern-one': "url('/assets/pattern_one.svg')",
        'pattern-two': "url('/assets/pattern_two.svg')",
        'pattern-three': "url('/assets/pattern_three.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
