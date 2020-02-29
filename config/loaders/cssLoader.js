const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 1,
        modules: true
      },
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'sass-loader',
    },
  ],
};
