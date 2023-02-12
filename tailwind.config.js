/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: [],
        DancingScript: ["Dancing Script", "cursive"],
        GreatVibes: ["Great Vibes", "cursive"],
        Tangerine: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
