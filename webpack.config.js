const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ReactRootPlugin = require('../html-webpack-react-root-plugin')

const paths = {
  entry: join(__dirname, '/src/index.js'),
  build: join(__dirname, '/build/'),
}

module.exports = {
  entry: paths.entry,
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: join(__dirname, 'node_modules/'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: 'true',
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [join(__dirname, 'src/global-styles/')]
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ReactRootPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}
