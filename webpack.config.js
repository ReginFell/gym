module.exports = {
    entry: './app.js',
    mode: 'production',
    output: {
        path: __dirname,
        filename: './bundle.js'
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
            }
        ]
    },
};