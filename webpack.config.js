const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        pathinfo: true, // helps with devtool: eval
        publicPath: '/'      
    },
    devtool: 'eval',
    resolve: {
        extensions: [ '.js', '.jsx' ],
        //modules: [ path.resolve(__dirname, './../node_modules') ]
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
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
            template: './config/index.template.ejs'
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
}