import Webpack from 'webpack';
import baseConfig from './webpack.base.config';

export default {
  ...baseConfig,

  debug: true,
  devtool: 'source-map',
  target: 'electron-renderer',

  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/app/index'
  ],

  module: {
    ...baseConfig.module,

    loaders: [
      ...baseConfig.module.loaders,

      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },
      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          `css-loader?modules&sourceMap&
          importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`
        ]
      }
    ]
  },

  output: {
    ...baseConfig.output,

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
