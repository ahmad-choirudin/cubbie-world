/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#090A09", slab: "#121412", acc: "#C4F56A", ink: "#ECEFE8", dim: "#8E968B" },
      fontFamily: {
        d: ['"Space Grotesk"', "system-ui", "sans-serif"],
        b: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
