/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {

  plugins: [
      require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
]
}
// module.exports = {

//   content: [
//       "./node_modules/flowbite/**/*.js"
//   ]

// }
