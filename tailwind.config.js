/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryhex: "#972A20",
        bghex: "#FFF",
        fghex: "#13151B",
        primary: "var(--primary)",
        bg: "var(--background)",
        fg: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
