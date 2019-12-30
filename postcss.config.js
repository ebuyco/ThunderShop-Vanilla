// module.exports = {
//   plugins: [
//     require('autoprefixer')
//   ]
// };
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'autoprefixer': {},
    cssnano: {}
  }
};
