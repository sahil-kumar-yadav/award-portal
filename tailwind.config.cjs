/** @type {import('tailwindcss').Config}*/
const config = {
  // content: ["./src/**/*.{html,js,svelte,ts}"],
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
};

module.exports = config;
