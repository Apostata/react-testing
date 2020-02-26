module.exports = { // loader para as imagens
  test: /\.(jpg|gif|png)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]', 
        publicPath: '../', 
      },
    },
  ],
};
