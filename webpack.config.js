module.exports = {
    entry: './app.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader'
            }
        ]
    },
};