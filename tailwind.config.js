/* globals __dirname */

const path = require('path');
const cssVariablePlugin = require('./src/plugins/css-variable-plugin.js');

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
      // Auto-scan CSS file for variables
      autoScan: true,
      cssFile: path.join(__dirname, 'src/tokens/global.css'),
      patterns: {
        // Auto-generate color utilities for variables starting with '--color'
        colors: '^color-',
        borderRadius: '^radius-',
        // // Auto-generate spacing utilities for size and sizing variables
        spacing: '^spacing-',
        // // Auto-generate font utilities based on theme files
        // fontWeight: '^(weight-(reg|med|smb|bold)|component-.*-weight)$',
        // fontSize: '^component-.*-font-.*-size$',
        // fontFamily: '^component-.*-font-.*-family$',
      },
      debug: true, // Set to true to see debug logs
    }),
  ],
};
