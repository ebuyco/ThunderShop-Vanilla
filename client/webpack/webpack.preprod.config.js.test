const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'none',
  entry: './public/javascripts/app.js',
  devtool: 'source-map',
  target: 'web',
  devServer: {
    contentBase: './public/dist',
    hot: true
  },

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     emitWarning: true,
      //     failOnError: false,
      //     failOnWarning: false
      //   }
      // },
      {
        use: { loader: 'babel-loader' },
        test: /\.(js|jsx)$/,
         exclude: /(node_modules|bower_components)/
       },

      // SASS/SCSS
      // {
      //   test: /\.scss$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'style-loader',

      //      }, {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: true,
      //         importLoader: 2
      //       }
      //      },
      //      "sass-loader"
      //      {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     }
      //   ]

      // },

    //   {
    //     test: /\.scss$/,
    //     use: [
    //         MiniCssExtractPlugin.loader,
    //         { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
    //         { loader: 'sass-loader', options: { sourceMap: true } },
    //     ],
    // },

    {
      test: /\.s[c|a]ss$/,
      use: [
        'style-loader',
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
      { loader: 'sass-loader', options: { sourceMap: true} },
      { loader: 'postcss-loader', options: { sourceMap: true} },

    ]
    },

      // {
      //   use: ['style-loader', 'css-loader'],
      //   test: /\.css$/
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader'
          }
        ]
      },

    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      }
    },
},
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: '[name].css',
      // chunkFilename: '[id].css',
      filename: 'style.css',
      chunkFilename: "[name].css"
    }),
    new CopyPlugin([
      {
        from: path.join(process.cwd(), './public/images'),
        to: path.join(process.cwd(), '/build'),
      },
    ]),
    // can be deleted
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    // path: path.join(process.cwd(), '/build'),
    // publicPath: '/',
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    // path: path.resolve(__dirname, 'public', 'dist'),
    // we can use "substitutions" in file names like [name] and [hash]
    // name will be `App` because that is what we used above in our entry
    // filename: '[name].bundle.js',
    publicPath: "./public/dist"
  }
};
