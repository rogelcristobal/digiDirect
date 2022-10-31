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
      general: ["General Sans", "sans-serif"],
      lota:["Lota Grotesque Alt 3", "sans-serif"]
     
     
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
