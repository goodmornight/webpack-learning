const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: '../dist',
    open: true,
    port: 3000,
    hot: true,
    hotOnly: true
  },
  optimization: {
    usedExports: true
  }
}
module.exports = merge(commonConfig, devConfig);