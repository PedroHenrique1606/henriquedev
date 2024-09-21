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
        background: "var(--background)",
        customBlue: '#0E1B31',
        customBlueSecondary: '#102048',
        purplePrimary: '#614FD0',
      },
    },
  },
  plugins: [],
};
export default config;
