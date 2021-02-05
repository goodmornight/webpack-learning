const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
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
    },{
      test:/\.css$/,
      use: ['style-loader', 'css-loader']
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}