import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.base.config';

export default {
  ...baseConfig,

  devtool: 'hidden',
  entry: path.resolve(`${__dirname}/src/main`),
  target: 'electron-main',

  output: {
    ...baseConfig.output,

    path: __dirname,
    filename: './app/main.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  node: {
    __dirname: false,
    __filename: false
  }
};
