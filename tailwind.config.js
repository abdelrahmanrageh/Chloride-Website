/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'lightBlue' : '#0284c7'
      },
      boxShadow: {
        'blueShadow': '0 2px 150px 100px rgb(77 109 191 / 35%)',
        'lightBlueShadow': '0 2px 90px 10px rgb(46 86 169 / 25%)',
        'whiteShadow': '0 2px 67px 10px rgb(224 224 224 / 30%)',
        'lightWhiteShadow': '0 2px 50px 10px rgb(224 224 224 / 5%)',
        'hardWhiteShadow': '0 2px 300px 70px rgb(232 226 195 / 30%)'

      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    }
  },
  plugins: [],
}

