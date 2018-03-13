const webpack = require('webpack')
const express = require('express')

const webpackConf = require('./webpack.config')

const compiler = webpack(webpackConf)

const app = express()

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConf.output.publicPath,
  noInfo: true,
  quiet: true,
  stats: {
    colors: true,
    modules: false
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

const port = process.env.PORT || 8002
app.listen(port, () => console.log('App listening on port ', port))
