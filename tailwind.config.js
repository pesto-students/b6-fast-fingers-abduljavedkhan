module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'bgimage': "url('assets/icons/fast-fingers-bg.png')",
      }),
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    textColor: {
      'primary': '#ff5155',
      'secoundry':'#fff',
      'correct':"#54ba18",
      'incorrect':"#445298",
      'b-option':'#97a5a7',
      'bck':'#053a45'
    },
    border: {
      'radius': '50%',
      'width': '5rem',
      'style': 'double'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
