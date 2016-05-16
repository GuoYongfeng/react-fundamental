var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    index: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/static/",
    filename: '[name].js'
  },
  resolve: {
    extension: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  devServer: {
    hot: true,
    contentBase: "build",
    publicPath: "/static/",
    stats: { colors: true }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Fundamental Demos',
      template: './src/index.html'
    }),
    new openBrowserWebpackPlugin({
      url: 'http://localhost:8080'
    })
  ],
  devtool: 'source-map'
};
