/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: "1440px",
      },
      colors: {
        primaryhex: "#972A20",
        bghex: "#FFF",
        fghex: "#13151B",

        background: {
          50: "rgba(231, 232, 234, 1)",
          100: "rgba(181, 182, 190, 1)",
          200: "rgba(145, 147, 158, 1)",
          300: "rgba(94, 98, 114, 1)",
          400: "rgba(63, 67, 86, 1)",
          500: "rgba(15, 20, 44, 1)",
          600: "rgba(14, 18, 40, 1)",
          700: "rgba(11, 14, 31, 1)",
          800: "rgba(8, 11, 24, 1)",
          900: "rgba(6, 8, 18, 1)",
        },
        primary: "var(--primary)",
        bg: "var(--background)",
        fg: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
