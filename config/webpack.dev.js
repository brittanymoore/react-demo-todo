const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = process.env.API_URL = 'http://localhost:3001';
const OUTPUT_PATH = path.resolve(__dirname, './../dev');

module.exports = webpackMerge(common, {

    entry: {
        main: [
            './src/index.js',
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client'
        ]
    },

    output: {
        path: OUTPUT_PATH,
        pathinfo: true, // helps with devtool: eval
    },

    devtool: 'eval',

    plugins: [

        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL)
            }
        })

    ],

    devServer: {
        contentBase: OUTPUT_PATH
    }

});
