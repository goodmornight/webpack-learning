const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 1024
        }
      }
    }, {
      test:/\.css$/,
      use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
          }
        }]
    }, {
      test:/\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader'
      }
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    publicPath: 'http://goodnight.wiki',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}