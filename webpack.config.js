const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?quiet=true',
    'react-hot-loader/patch',
    './src/App.js',
  ],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  resolve: {
    alias: {
      Containers: path.resolve(__dirname, 'src/containers/'),
      Resources: path.resolve(__dirname, 'src/resources/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Validators: path.resolve(__dirname, 'src/validators/'),
      Constants: path.resolve(__dirname, 'src/constants/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Api: path.resolve(__dirname, 'src/api/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'babel-plugin-transform-decorators-legacy',
            'babel-plugin-transform-decorators',
          ],
          presets: ['es2015', 'react'],
        },

        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        use: ['react-svg-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './public',
  },
};
