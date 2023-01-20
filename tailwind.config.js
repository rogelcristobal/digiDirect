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

      "ukraineHead-bold":["ukraineHead-bold","sans-serif"],
      "ukraineHead-light":["ukraineHead-light","sans-serif"],
      "ukraineHead-title":["ukraineHead-title","sans-serif"],
      "ukraineHead-medium":["ukraineHead-medium","sans-serif"],
      "ukraineHead-regular":["ukraineHead-regular","sans-serif"],
      "ukraineHead-thin":["ukraineHead-thin","sans-serif"],
      
     

      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      robotoMono: ["Roboto Mono", "monospace"],
      dm:['DM Sans',"sans-serif"],
      plus:["Plus Jakarta Sans", "sans-serif"]
     
     
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('tailwind-scrollbar-hide')
  
  ],
  
};
