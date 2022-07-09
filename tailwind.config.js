/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme:{
    screens: {
      'xs':'478px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        "main-bg": "#080719",
        "second-bg": "#e2eafc",
        "btn": "#ec38bc",
        "btn-dark": "#728dfe",
        "btn-hvr": "hsl(228, 99%, 82%)",
        "btn-purple": "#D6FFFF",
        "linkedin": "#e2eafc;"
      },
    },
  },
  plugins: [],
}
