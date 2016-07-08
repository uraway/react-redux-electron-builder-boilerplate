import path from 'path';
import Webpack from 'webpack';
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
    new Webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new Webpack.DefinePlugin({
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
