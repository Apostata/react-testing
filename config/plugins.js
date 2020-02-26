const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const environments  = require('./variaveis');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  new webpack.DefinePlugin({
    "process.env":JSON.stringify(environments)
  }),
  new MiniCssExtractPlugin({
    filename: './css/[name].css',
    chunkFilename: './css/[name].css',
  }),
  new HtmlWebpackPlugin({ 
    title: 'Teste Meli',
    template: './index.html',
    inject: 'body'
  })
];
