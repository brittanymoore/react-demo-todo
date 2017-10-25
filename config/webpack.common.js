const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        sourceMapFilename: '[name].map'   
    },

    resolve: {
        extensions: [ '.js', '.jsx' ],
        modules: [ path.resolve(__dirname, './../node_modules') ]
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'react-hmre', 'stage-2' ] }, exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'react-hmre', 'stage-2' ] }, exclude: /node_modules/ },
            { test: /\.scss$/, use: [ 
                'style-loader', 
                { loader: 'css-loader', query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' } },
                 'sass-loader' 
            ] },
            { test: /\.css$/, use: [ 'style-loader', { loader: 'css-loader', query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' } } ] }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React',
            template: './config/index.template.ejs',
            chunksSortMode: 'dependency'
        })
    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        stats: 'minimal'
    },

    stats: {
        assets: true,
        children: false,
        errors: true,
        errorDetails: true,
        modules: false,
        warnings: false
    }

}
