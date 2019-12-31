// module.exports = {
//   plugins: [
//     require('autoprefixer')
//   ]
// };
module.exports = {
  parser: 'sugarss',
  plugins: [
      require('cssnano')({
        preset: 'default',
    }),
  ],
  {
    'postcss-import': {},
    'postcss-preset-env': {},
   'autoprefixer': {},
  }
};
