const path = require('path');

module.exports = {
  entry: path.resolve('./src/client.js'),
  output: {
    path: path.resolve('./'),
    filename: 'bundle.js',
  },
  devServer:{
    inline:true,
    contentBase:'./public',
    port:3000,
  },
};
