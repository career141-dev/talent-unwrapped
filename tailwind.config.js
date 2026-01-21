/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "neutral-90": "var(--neutral-90)",
      },
      fontFamily: {
        "body-large-regular": "var(--body-large-regular-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
      },
      boxShadow: {
        "shadows-shadow-xs": "var(--shadows-shadow-xs)",
      },
    },
  },
  plugins: [],
};
