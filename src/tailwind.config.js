/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'yellowmmp': "#c5ab7b",
      "orangemmp":"#b18d5e",
      "limemmp":"#949362"
    },
  },
  plugins: [require("flowbite/plugin")],
};
