const merge = require('webpack-merge');
const defaultCfg = require('./webpack.config');

module.exports = merge(defaultCfg, {
  mode: 'development',
  output: {
    pathinfo: false,
    publicPath: '/',
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    open: 'Google Chrome',
    historyApiFallback: true,
  },
});
