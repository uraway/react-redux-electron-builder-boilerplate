import Webpack from "webpack";
import BaseConfiguration from "./webpack.base.config";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  ...BaseConfiguration,

  devtool : "hidden",
  entry   : "./src/app/index",
  target  : "electron-renderer",

  module : {
    ...BaseConfiguration.module,

    loaders : [
      ...BaseConfiguration.module.loaders,

      {
        test    : /\.scss$/,
        loaders : ["style", "css?camelCase&modules", "sass"]
      }
    ]
  },

  output : {
    ...BaseConfiguration.output,

    publicPath : "../release/"
  },

  plugins : [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.DefinePlugin({
      __DEV__       : false,
      "process.env" : {
        NODE_ENV : JSON.stringify("production")
      }
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compressor : {
        screw_ie8 : true,
        warnings  : false
      }
    }),
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]
};
