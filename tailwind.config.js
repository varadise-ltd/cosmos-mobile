const colors = require('./config/colors.config.js');
const spacing = require('./config/spacing.config.js');
const components = require('./config/components.config.js');
const theme = require('./config/theme.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{tsx,css}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        ...components,
        ...theme,
        ...colors,
      },
      spacing,
    },
  },
  plugins: [],
};
