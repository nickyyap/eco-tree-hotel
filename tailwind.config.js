/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#34353D",
        "text-light": "#34353D",
        "review-bg" : "#b6b2b2",
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        merriweather: ['Merriweather', 'sans-serif'],
        playfair: ['Playfair Display', 'sans-serif'],
      },
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1030px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'xxs': '0.625rem',  // Example for custom font size smaller than 'sm'
        'xxl': '2.25rem',   // Example for larger text than 'xl'
        'huge': '9.25rem',     // Custom large font size
        'mega': '13.5rem',     // Example for extra large text
      },
      lineHeight: {
        'extra-tight': '2',
      }
    },
  },
  plugins: [],
}

