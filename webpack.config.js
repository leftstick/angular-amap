var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './example/libs/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: '[name].[hash].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?{"presets":["es2015"]}',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'example/index.html_vm',
            favicon: 'example/img/favicon.ico',
            hash: false
        })
    ]
};
