const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const App = require('./public/javascripts/app.js');


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
  // test: /\.(scss)$/,
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options:
    {
      sourceMap: true,
      importLoaders: 1
    },

   },
  {
    loader: 'sass-loader',
    options: {
       sourceMap: true,
      //  outputStyle: 'uncompressed'
       }
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
}

const css = {
  test: /\.(css)$/,
  use: [
    // MiniCssExtractPlugin.loader,
    'css-loader',
    'style-loader',
    'postcss-loader',
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: './public/dist',
      },
    },
  ],
  include: /\.module\.css$/
}

const html = {
  test: /\.(html)$/,
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
     entry: './public/javascript/app.js',
      devtool: 'source-map',
      // devtool: 'inline-source-map',
      target: 'web',
      devServer: {
        contentBase: './public/dist',
        open: true,
        // hot: true
      },
      module: {
        rules: [javascript, sass, css, html, imageConfig, fontConfig]
      },

      plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'style.css',
          chunkFilename: 'style.css'
        }),
        new CopyPlugin([
          {
            from: path.join(process.cwd(), './public/images'),
            to: path.join(process.cwd(), './public/dist/images'),
          },
        ]),

        // new webpack.HotModuleReplacementPlugin({multiStep: true}),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ],
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devServer: {
      hot: true,
      inline: true,
      historyApiFallback: true,
      contentBase: './',
      port:4000
    },
      output: {
        path: path.resolve(__dirname, './public/dist'),
        // filename: '[name].[chunkhash].js',
        filename: '[name].js',
        publicPath: "./public/dist"
      }

};

process.noDeprecation = true;

module.exports = config;

