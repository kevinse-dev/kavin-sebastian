const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  future : { 
    removeDeprecatedGapUtilities : true , 
    purgeLayersByDefault : true , 
  } , 
  purge: ["./public/**/*.html",
          "./Components/**/*.{js,ts,jsx,tsx}",
          "./pages/**/*.{js,ts,jsx,tsx}",
        './Sections/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'DarkPrimary': '#272727',
      'GreenPrimary': '#159D00',
      'danger': '#e3342f',
      'DarkSecondary': '#3C3C3C',
      'DarkThrid' : '#4A4A4A',
      'DarkFour' : '#D8D3D3',
      'black':'#000000'
     }),
    extend: {
      dropShadow: {
        xl: "0 35px 35px rgba(0, 0, 255, 0.5)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "system-ui"],
      serif: ["Playfair Display", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
  },
  variants:{
    scrollBehavior: ['motion-safe', 'motion-reduce', 'responsive']
  },
  plugins: [
    plugin(function({addUtilities}){
      const newUtiliti = {
        ".bg-1":{
          'background-image' : 'url(/main-bg.jpg)',
          'background-size' : 'cover',
        },
        ".bg-2" : {
          'background-image' : 'url(/covid.png)',
          'background-size' : 'cover'
        },
        ".bg-3" : {
          'background-image' : 'url(/ananda.png)',
          'background-size' : 'cover'
        },
        ".bg-4" : {
          'background-image' : 'url(/gitlab.png)',
          'background-size' : 'cover'
        },
      }
      addUtilities(newUtiliti)
    }),
      require('tailwind-scroll-behavior')(), // no options to configure
  ]
};
