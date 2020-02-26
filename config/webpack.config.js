const path = require('path');
const loaders = require('./loaders/');
const plugins = require('./plugins');
const devServer = require('./dev-server');


const nodeENV = process.env.NODE_ENV;
const componentsPath = process.env.COMPONENTS_PATH;
// eslint-disable-next-line no-console
console.log(nodeENV, componentsPath);

const webpack = {
  mode: nodeENV,
  context: path.resolve(__dirname, '../src'),
  entry: {
    main:[ './index.js'],
  },

  output: {
    filename: 'js/[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../public'),
  },
  devtool: nodeENV === 'production' ? 'source-map' : 'eval-source-map',
  module: {
    rules: loaders,
  },
  plugins,
  watch: nodeENV === 'development',
  resolve: {
    extensions: [ '.js']
  }
};
if(nodeENV === 'development'){
  webpack.devServer = devServer;
}
module.exports = webpack;
