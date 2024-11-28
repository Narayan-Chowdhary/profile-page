/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        revolve: {
          "0%": { clipPath: "inset(0% 0% 0% 100%)" },
          "25%": { clipPath: "inset(100% 0% 0% 0%)" },
          "50%": { clipPath: "inset(0% 100% 0% 0%)" },
          "75%": { clipPath: "inset(0% 0% 100% 0% )" },
          "100%": { clipPath: "inset(0% 0% 0% 100%)" },
        },
      },
      animation: {
        revolve: "revolve 7s linear infinite",
      },
    },
  },
  plugins: [],
};
