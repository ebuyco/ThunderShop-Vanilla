const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const App = require('../../public/javascripts/app.js');


const javascript = {
  test: /\.(js|jsx)$/,
  use: { loader: 'babel-loader' },
  exclude: /(node_modules|bower_components)/
}

// const postcss = {
//   loader: 'postcss-loader',
//   options: {
//     plugins() { return [({ browsers: 'last 3 versions' })]; }
//   }
// }

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    'style-loader',
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
  { loader: 'sass-loader', options: { sourceMap: true} },
  { loader: 'postcss-loader', options: { sourceMap: true} },
  ]
}

const css = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
}

const html = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: { minimize: true }
    }
  ]
}

const imageConfig = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader'
    }
  ]
}

const fontConfig = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader'
    }
  ]
}


const config = {
     mode: 'none',
     entry: {
        App: App,
      },
      devtool: 'source-map',
      target: 'web',
      devServer: {
        contentBase: './public/dist',
        hot: true
      },
      module: {
        rules: [javascript, sass, css, html, imageConfig, fontConfig]
      },

      plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'style.css',
          chunkFilename: "[name].css"
        }),
        new CopyPlugin([
          {
            from: path.join(process.cwd(), './public/images'),
            to: path.join(process.cwd(), '/build'),
          },
        ]),
        new webpack.NoEmitOnErrorsPlugin()
      ],
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
         publicPath: "./public/dist"
      }

};

process.noDeprecation = true;

module.exports = config;

