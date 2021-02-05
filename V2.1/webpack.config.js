const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.svg$/,
      use: {
        loader: 'file-loader'
      }
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}