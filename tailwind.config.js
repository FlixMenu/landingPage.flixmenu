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
          800: "#777",
        },
        "flixDark": {
          500: "#30303c",
          600: "#131021",
          800: "#1f1d2b",
          900: "rgba(0,0,0,.8)",
        },
      },
      width: {
        "md": "2.5rem"
      },
      screens: {
        'sm': '700px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
