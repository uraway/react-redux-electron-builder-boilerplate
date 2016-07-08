import Webpack from 'webpack';
import baseConfig from './webpack.base.config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  ...baseConfig,

  devtool: 'hidden',
  entry: './src/app/index',
  target: 'electron-renderer',

  module: {
    ...baseConfig.module,

    loaders: [
      ...baseConfig.module.loaders,

      {
        test: /\.global\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
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

    publicPath: '../app/'
  },

  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
