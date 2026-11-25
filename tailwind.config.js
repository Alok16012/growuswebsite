/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2563eb",
        "deep-blue": "#0a3663",
        "accent-green": "#32cd32",
      },
      fontFamily: {
        sans: ["var(--site-font)"],
      },
    },
  },
  plugins: [],
};
