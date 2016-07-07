import Webpack from 'webpack';
import BaseConfiguration from './webpack.base.config';

export default {
  ...BaseConfiguration,

  debug: true,
  devtool: 'source-map',
  target: 'electron-renderer',

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/app/index'
  ],

  module: {
    ...BaseConfiguration.module,

    loaders: [
      ...BaseConfiguration.module.loaders,

      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?camelCase&modules&sourceMap',
          'sass?sourceMap'
        ]
      }
    ]
  },

  output: {
    ...BaseConfiguration.output,

    publicPath: 'http://localhost:3000/build/'
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new Webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
