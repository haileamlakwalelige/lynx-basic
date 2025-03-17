const lynxPreset = require('@lynx-js/tailwind-preset');

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  presets:[lynxPreset],
  content:["./src/**/*.{html,js,jsx,ts,tsx}"],
  purge:["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins:[],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
};