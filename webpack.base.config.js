import path from 'path';

export default {
  module : {
    loaders : [
      {
        test    : /\.jsx?$/,
        loaders : ['babel'],
        exclude : /node_modules/
      }
    ]
  },
  output : {
    path          : path.resolve('./app'),
    filename      : 'bundle.js',
    libraryTarget : 'commonjs2'
  },
  resolve : {
    extensions         : ['', '.js', '.jsx'],
    modulesDirectories : ['node_modules', 'src']
  }
};
