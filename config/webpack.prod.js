const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const WebpackChunkHash = require('webpack-chunk-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = process.env.API_URL = '';
const PUBLIC_PATH = '';
const OUTPUT_PATH = path.resolve(__dirname, './../dist');

module.exports = webpackMerge(common, {

    entry: {
        main: './src/index.js'
    },

    output: {
        filename: '[name].[chunkhash].js',
        publicPath: PUBLIC_PATH,
        path: OUTPUT_PATH
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL)
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new UglifyJsPlugin() 

    ]

});
