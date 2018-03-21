const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: '/node_modules/'
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.s?css$/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    open: true
  }
};
