const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin')

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
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [join(__dirname, 'src/global-styles/')]
              }
            }
          ]
        })
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ReactRootPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}
