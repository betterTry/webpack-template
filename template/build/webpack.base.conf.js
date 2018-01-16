const resolve = require('path').resolve;
const config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  resolveLoader: {
    moduleExtensions: [ '-loader' ],
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [resolve('src')],
      },
      {{#typescript}}
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: /node_modules/,
        {{#vue}}
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
        {{/vue}}
      },{{/typescript}}
      {{#vue}}
      {
        test: /\.vue$/,
        loader: 'vue',
        options: vueLoaderConfig
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },{{/vue}}
    ],
  }
}
