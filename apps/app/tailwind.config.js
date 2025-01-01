// module.exports = {
//   content: [
//     "./apps/app/**/*.{html,js,ts,jsx,tsx}", // Adjust paths to match your app's file structure
//     "./packages/**/*.{html,js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/**
  @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
