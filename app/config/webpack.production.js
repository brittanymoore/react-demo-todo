const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = webpackMerge(commonConfig, {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: '[name].[contenthash].min.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: [/node_modules/],
        exclude: [/src\/global.css/]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { config: { path: './config/postcss/' } }
          }
        ],
        include: [/src\/global.css/],
        exclude: [/node_modules/]
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
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_URL: JSON.stringify('/api')
      }
    }),
    new webpack.HashedModuleIdsPlugin()
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})
