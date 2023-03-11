/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 50s linear infinite",
      },
    },
  },
  plugins: [],
};

module.exports = config;
