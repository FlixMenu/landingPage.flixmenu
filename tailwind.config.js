module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.{js,html,htm}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": {
          500: "#fd8141",
          800: "#ff6b3d"
        },
        "white": {
          200: "#fff",
          400: "#ccc",
          600: "#ececec",
          800: "#777"
        },
        "dark": {
          500: "#30303c",
          800: "#1f1d2b"
        },

      }
    },
  },
  plugins: [],
}
