import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: {
          50: '#F5F7F4',
          100: '#E8ECE6',
          200: '#D1D9CD',
          300: '#B8C5B3',
          400: '#9BAA96',
          500: '#7E8F79',
          600: '#6B7B66',
          700: '#586753',
          800: '#475442',
          900: '#3A4436',
        },
        cream: '#FDF6EC',
        blush: {
          300: '#F5D5D5',
          400: '#F0BFBF',
          500: '#EAAAAA',
        },
        sky: {
          300: '#D6E3F0',
          400: '#B8D0E8',
          500: '#9ABDE0',
        }
      },
    },
  },
  plugins: [],
};

export default config;