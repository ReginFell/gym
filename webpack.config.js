const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/public"
    },
    resolve: {
        alias: {
            Containers: path.resolve(__dirname, 'src/containers/'),
            Components: path.resolve(__dirname, 'src/components/')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }, plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "./public"
    }
};