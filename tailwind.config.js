const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        blacky: "#191919",
        black80: "#808080",
        grayBorder: '#D9D9D9',
        grayDesc: '#404040',
        grayBack: '#F9F9F9'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      width: {
        'fit-content': 'fit-content'
      },
      height: {
        '128': '32rem',
        '192': '48rem'
      },
      inset: {
        '-16': '-4rem',
        '-32': '-8rem'
      },
      spacing: {
        'p-128': '32rem'
      }
    }
  }
}
