module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        sans: ['Barlow','sans-serif']
      },
      colors:{
        gray:{
          100: '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          800: '#252836',
          900: '#1F1D2B',
        },
        primary: '#0671F9',
        accent:{
          blue:'#65b0f6',
          orange:'#ffb572',
          red:'#ff7ca3',
          green:'#50d1aa',
          purple:'#9290fe'
        }
      },
      boxShadow:{
        primary: '4px 2px 14px #0671F9',
        'inverse-top' : '4px 4px 0 rgb(229 231 235)',
        'inverse-top-dark' : '4px 4px 0 #252836',
        'inverse-bottom' : '4px -4px 0 rgb(229 231 235)',
        'inverse-bottom-dark': '4px -4px 0 #252836'
      }
    },
  },
  plugins: [],
}
