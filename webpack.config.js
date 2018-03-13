const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

module.exports = {
  mode: 'development' ,
  entry: {
    pageA: [
      './pageA',
      hotMiddlewareScript,
    ],
    pageB: [
      './pageB',
      hotMiddlewareScript,
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  optimization: {
    occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './entry.ejs'),
      filename: 'pageA.html',
      inject: false,
      entry: 'pageA'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './entry.ejs'),
      filename: 'pageB.html',
      inject: false,
      entry: 'pageB',
    })
  ]
};
