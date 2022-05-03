module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.{js,html,htm}",
  ],
  theme: {
    extend: {
      colors: {
        "flixOrange": {
          200: "#fda63f",
          500: "#fd8141",
          800: "#ff6b3d"
        },
        "flixWhite": {
          200: "#fff",
          400: "#ccc",
          600: "#ececec",
          800: "#777"
        },
        "flixDark": {
          500: "#30303c",
          800: "#1f1d2b"
        },
      },
      width: {
        "md": "2.5rem"
      },
    },
  },
  plugins: [],
}
