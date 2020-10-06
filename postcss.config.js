module.exports = {
  plugins: {
    tailwindcss: {
      future: {
        removeDeprecatedGapUtilities: true,
      },
    },
    "vue-cli-plugin-tailwind/purgecss": {},
    autoprefixer: {},
  },
};
