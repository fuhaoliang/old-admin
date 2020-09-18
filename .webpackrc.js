/*
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2020-05-13 12:52:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/.webpackrc.js
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')

export default {
  publicPath: '/',

  disableCSSModules: true,
  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
  ],

  alias: {
      '@': `${__dirname}/src`,
  },

  proxy: {
      '/api': {
          target: 'url网址',
          changeOrigin: true,
          pathRewrite: {
              '^/api': '',
          }
      }
  },
  hash: true,

  "html": {

    "template": "./src/index.ejs"

  }
}