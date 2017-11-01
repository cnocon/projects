const path = require('path');

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devServer:{
    inline:true,
    contentBase:'./public',
    port:3000,
  },
};
