/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#F8F5FF",
          100: "#F0E9FF",
          200: "#D9C7FF",
          300: "#C2A5FF",
          400: "#AB82FF",
          500: "#945CFF",
          600: "#7D3CFF",
          700: "#642FD1",
          800: "#4B239C",
          900: "#331766",
          950: "#240F47",
        },
      },
    },
  },
  plugins: [],
};
