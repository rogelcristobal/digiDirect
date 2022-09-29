module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: '#root',
  theme: {
    extend: {},
    fontFamily: {
      general: ["General Sans", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
