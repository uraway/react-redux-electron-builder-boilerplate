/* global process */

import Express from 'express';
import Webpack from 'webpack';
import configuration from './webpack.development.config';
import hotMiddleware from 'webpack-hot-middleware';
import developmentMiddleware from 'webpack-dev-middleware';

const app = Express();
const Compiler = Webpack(configuration);
const Port = 3000;
const WDM = developmentMiddleware(Compiler, {
  publicPath: configuration.output.publicPath,
  stats: { colors: true }
});

app.use(WDM);
app.use(hotMiddleware(Compiler));

const Server = app.listen(Port, 'localhost', (error) => {
  if (error) {
    throw error;
  }
});

process.on('SIGTERM', () => {
  WDM.close();
  Server.close(() => {
    process.exit(0);
  });
});
