const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

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

      {
        use: { loader: 'babel-loader' },
        test: /\.(js|jsx)$/,
         exclude: /(node_modules|bower_components)/
       },


    {
      test: /\.s[c|a]ss$/,
      use: [
        'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true, importLoaders: 2 }
       },
      {
        loader: 'sass-loader',
        options: { sourceMap: true}
       },
      {
       loader: 'postcss-loader',
       options:
      {
        plugins() { return [autoprefixer()]; },
        sourceMap: true,

      },
      },
      ],
      exclude: /\.module\.css$/
    },

      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'style-loader',
          'postcss-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../public/dist',
            },
          },
        ],
        include: /\.module\.css$/
      },
      {

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
  resolve: {
    alias: {
        '@scss': path.resolve(__dirname, '../../public/sass'),
        '@img': path.resolve(__dirname, '../../public/images'),
        '@': path.resolve(__dirname, '../../public/dist')
    },
    modules: [
        'node_modules',
        path.resolve(__dirname, '../../public/dist')
    ],
    extensions: ['.js']
},


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
        css: {
          test: /\.(css|sass|scss)$/,
          name: "commons",
          chunks: "all",
          minChunks: 2,
      }
      }
    },
},
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyPlugin([
      {
        from: path.join(process.cwd(), './public/images'),
        to: path.join(process.cwd(), '/build'),
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: "../../public/dist"
  }
};
