/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#1c567a",
        'header-shadow': "#c9c9c9"
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      const colors = theme("colors");
      const vars = Object.entries(colors).reduce((acc, [key, value]) => {
        if (typeof value === "string") {
          acc[`--${key}`] = value;
        }
        return acc;
      }, {});

      addBase({
        ":root": vars,
      });
    }),
  ],
};
