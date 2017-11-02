const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve('./src/client.js')],
  output: {
    path: path.resolve('./'),
    filename: 'bundle.js',
  },
  devServer:{
    inline:true,
    contentBase:'./public',
    port:3000,
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader',
      },
      // tell css files to get loaded with the extractor
      {
        test: /\.css$/,
        //  send any css to the css-loader that uses our ExtractTextPlugin
        loader: ExtractTextPlugin.extract(['css-loader'])
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader','sass-loader'])
      }
    ],
  },
  plugins: [
    // app.css is like bundle.js; the 'extraction' destination
    new ExtractTextPlugin('app.css'),
  ],
};
