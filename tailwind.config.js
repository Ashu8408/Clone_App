// tailwind.config.js
module.exports = {
  mode: 'jit', // Just-In-Time mode for faster development
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'custom': '4px', // You can adjust the value as needed
      },

      boxShadow:{
        c:"0 1px 6px rgb(32 33 36/28%)",
        c2:"0 1px 1px rgb(0 0 0/10%)",
      }
    },
  },
  plugins: [],
};
