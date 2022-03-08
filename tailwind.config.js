const colors = require("tailwindcss/colors")

const config = {
  content: ["./src/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
      },
    },
  },
  plugins: [
    "@tailwindcss/typography",
    "@tailwindcss/forms",
    "@tailwindcss/line-clamp",
  ],
}

module.exports = config
