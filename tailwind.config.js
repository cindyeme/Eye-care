module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#F1F5FD',
          600: '#Eff4FA',
          700: '#AFD3F1',
          800: '#3C5FB8',
          900: '#0931B1',
        },
        grayish: {
          700: '#9DA5B3',
          800: '#907888',
          900: '#42383E',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        bolder: 800,
        extrabold: 900,
      },
      boxShadow: {
        new: '0 25px 50px -12px rgba(175, 211, 241, 0.5)',
      },
      gridTemplateColumns: {
        'cols-4': 'repeat(4, minmax(0, 1fr));',
      },
      gap: {
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
      },
      columnGap: {
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
      },
      padding: {
        6: '1.5rem',
        8: '2rem',
      },
      width: {
        550: '550px',
      },
      height: {
        550: '550px',
      },
      screens: {
        ipad: '1269px',
      },
    },
  },
  variants: {
    // extend: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    border: ['responsive', 'hover', 'focus', 'group-hover'],
    ring: ['responsive', 'focus'],
    borderColor: ['checked', 'hover'],
    // },
  },
  plugins: [],
};
