// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        space0: "0rem",
        space025: "0.125rem",
        space050: "0.25rem	",
        space075: "0.375rem	",
        space100: "0.5rem	",
        space150: "0.75rem",
        space200: "1rem",
        space250: "1.25rem	",
        space300: "1.5rem",
        space400: "2rem",
        space500: "2.5rem	",
        space600: "3rem",
        space800: "4rem",
        space1000: "5rem",
        space1200: "6rem",
        space1600: "8rem",
        space2000: "10rem",
        space2400: "12rem",
        space2800: "14rem",
        space3200: "16rem",
        space3600: "18rem",
        space4000: "20rem",
      },
      screens: {
        "2xl": { min: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { min: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { min: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { min: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { min: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#FFFFFF",
            foreground: "#626262",
            primary: {
              DEFAULT: "#2B5EC0",
            },
          }, // light theme colors
        },
        dark: {
          extend: "dark", // <- inherit default values from dark theme
          layout: {},
          colors: {
            background: "#0D001A",
            foreground: "#626262",
            primary: {
              DEFAULT: "#2B5EC0",
            },
          },
        },
      },
    }),
  ],
};
