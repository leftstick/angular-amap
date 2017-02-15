
const {resolve} = require('path');
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        index: resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'angular-amap.min.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|co)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', {
                                modules: false
                            }]],
                            plugins: ['transform-object-rest-spread', 'angularjs-annotate']
                        }
                    }
                ],
                exclude: /(node_modules)/
            }
        ]
    },
    externals: {
        angular: 'angular'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new UnminifiedWebpackPlugin()
    ]
};