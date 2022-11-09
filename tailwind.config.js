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
      supreme: ["Supreme", "sans-serif"],
      general:["General Sans", "sans-serif"],
      excon:["Excon", "sans-serif"],
      plus:["Plus Jakarta Sans", "sans-serif"]
     
     
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
