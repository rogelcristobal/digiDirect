module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: '#root',
  theme: {
    extend: {},
    fontFamily: {
      "ukraine-light":["ukraine-light","sans-serif"],
       "ukraine-thin":["ukraine-thin","sans-serif"],
      "ukraine-regular":["ukraine-regular","sans-serif"],
      "ukraine-medium":["ukraine-medium","sans-serif"],
      "ukraine-bold":["ukraine-bold","sans-serif"],
      
      poppins: ["Poppins", "sans-serif"],
      supreme: ["Supreme", "sans-serif"],
      general:["General Sans", "sans-serif"],
      excon:["Excon", "sans-serif"],
      plus:["Plus Jakarta Sans", "sans-serif"]
     
     
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
