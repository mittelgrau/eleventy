module.exports = {
  purge: {
    content: ["./_site/**/*.html", "./_site/*.html"],
    options: {
      safelist: [],
    }
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
