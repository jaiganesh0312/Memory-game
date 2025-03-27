const lynxPreset = require('@lynx-js/tailwind-preset');

/** @type {import('tailwindcss').Config} */

export default {

  presets: [lynxPreset], // Use the preset

  theme: {
    extend: {
      colors: {
        layout: {
          background: "#000000",
          foreground: "#FFFFFF",
          divider: "#ECEDEE",
          focus: "#006FEE",
        },
        content: {
          content1: "#18181b",
          content2: "#27272a",
          content3: "#3f3f46",
          content4: "#52525b",
        },
        base: {
          default: "#3f3f46",
          primary: "#006FEE",
          secondary: "#9353d3",
          success: "#17c964",
          warning: "#f5a524",
          danger: "#f31260",
        },
        default: {
          50: "#18181b",
          100: "#27272a",
          200: "#3f3f46",
          300: "#52525b",
          400: "#71717a",
          500: "#d4d4d8",
          600: "#e4e4e7",
          700: "#f4f4f5",
          800: "#fafafa",
        },
        primary: {
          50: "#001731",
          100: "#002e62",
          200: "#004493",
          300: "#005bc4",
          400: "#006FEE",
          500: "#338ef7",
          600: "#66aaf9",
          700: "#99c7fb",
          800: "#cce3fd",
          900: "#e6f1fe",
        },
        secondary: {
          50: "#180828",
          100: "#301050",
          200: "#481878",
          300: "#6020a0",
          400: "#7828c8",
          500: "#9353d3",
          600: "#ae7ede",
          700: "#c9a9e9",
          800: "#e4d4f4",
          900: "#f2eafa",
        },
        success: {
          50: "#052814",
          100: "#095028",
          200: "#0e793c",
          300: "#12a150",
          400: "#17c964",
          500: "#45d483",
          600: "#74dfa2",
          700: "#a2e9c1",
          800: "#d1f4e0",
          900: "#e8faf0",
        },
        warning: {
          50: "#312107",
          100: "#62420e",
          200: "#936316",
          300: "#c4841d",
          400: "#f5a524",
          500: "#f7b750",
          600: "#f9c97c",
          700: "#fbdba7",
          800: "#fdedd3",
          900: "#fefce8",
        },
        danger: {
          50: "#310413",
          100: "#610726",
          200: "#920b3a",
          300: "#c20e4d",
          400: "#f31260",
          500: "#f54180",
          600: "#f871a0",
          700: "#faa0bf",
          800: "#fdd0df",
          900: "#fee7ef",
        },
      },
    },
  },
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],

};

