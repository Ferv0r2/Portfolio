/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      truncate: {
        lines: {
          3: "3",
          5: "5",
          8: "8",
        },
      },
      colors: {
        dark: "#1e1e2d",
        "dark-100": "#9899ac",
        "dark-300": "#6d6d80",
        "dark-200": "#565674",
        "dark-400": "#2b2b40",
        "dark-500": "#1E1E2C",
        "dark-600": "#151521",
        "dark-700": "#1b1b28",
        primary: "#009ef7",
        "primary-active": "#0095e8",
        "primary-light": "#f1faff",
        "primary-light-dark": "#212e48",
        success: "#50cd89",
        "success-active": "#47be7d",
        "success-light": "#e8fff3",
        "success-light-dark": "#1c3238",
        info: "#7239ea",
        "info-active": "#5014d0",
        "info-light": "#f8f5ff",
        "info-light-dark": "#2f264f",
        danger: "#f1416c",
        "danger-active": "#d9214e",
        "danger-light": "#fff5f8",
        "danger-light-dark": "#3a2434",
        warning: "#ffc700",
        "warning-active": "#f1bc00",
        "warning-light": "#fff8dd",
        "warning-light-dark": "#392f28",
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-truncate-multiline")(),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
