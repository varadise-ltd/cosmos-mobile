const colors = require('./config/colors.config.js');
const spacing = require('./config/spacing.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{tsx,css}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      spacing,
    },
  },
  plugins: [],
};
