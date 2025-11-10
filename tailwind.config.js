/* globals __dirname */

const path = require('path');
const cssVariablePlugin = require('./plugins/css-variable-plugin.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{tsx,css}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  darkMode: 'media',
  plugins: [
    cssVariablePlugin({
      variables: {
        fontFamily: ['family-hand', 'family-base'],
      },
      autoScan: true,
      cssFile: path.join(__dirname, './global.css'),
      patterns: {
        colors: '^color-',
        borderRadius: '^radius-',
        spacing: '^spacing-',
      },
      debug: false, // Set to true to see debug logs
    }),
  ],
};
