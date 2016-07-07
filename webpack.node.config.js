/* global module,require */

require("babel-register");

module.exports = {
  output : {
    libraryTarget : "commonjs2"
  },
  module : {
    loaders : [
      {
        test    : /\.jsx?$/,
        loaders : ["babel-loader"],
        exclude : /node_modules/
      },
      {
        test    : /\.scss$/,
        loaders : [
          "style",
          "css?camelCase&modules",
          "sass"
        ]
      }
    ]
  }
};
