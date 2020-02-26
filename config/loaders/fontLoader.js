module.export = { // loader para as fontes
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 100000,
        name: 'fonts/[name].[ext]', // Output below ./fonts
        publicPath: '../', // Take the directory into account
      },
    },
  ],
};
