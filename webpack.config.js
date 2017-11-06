module.exports = {
  entry: './source/client.js',
  output: {
    path: './',
    filename: 'index.js',
  },
  devServer:{
    inline:true,
    contentBase:'./public',
    port:3000
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test:/\.csv$/,
      loader:'dsv-loader'
    }, {
      test:/\.json$/,
      loader:'json-loader'
    }]
  }
}
