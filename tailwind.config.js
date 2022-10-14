module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: '#root',
  theme: {
    extend: {},
    fontFamily: {
      
     
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      source: ["Source Code Pro", "monospace"],
      
     
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
