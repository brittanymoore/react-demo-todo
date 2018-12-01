const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = webpackMerge(commonConfig, {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, './../dev')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/node_modules/, /src\/global.css/]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: { config: { path: './config/postcss/' } }
          }
        ],
        exclude: [/node_modules/, /src\/global.css/]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_URL: JSON.stringify('/api')
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    public: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/api': '' }
      }
    },
    stats: commonConfig.stats
  }
})
