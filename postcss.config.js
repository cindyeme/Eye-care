module.exports = {
  plugins: {
    tailwindcss: [require('tailwindcss')('./tailwind.config.js')],
    autoprefixer: [require('autoprefixer')],
  },
};

// module.exports = {
//   plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
// };


// module.exports = {
//   plugins: {
//     tailwindcss: { config: "./tailwind.config.js" },
//     autoprefixer: [require('autoprefixer')],
//   },
// };
