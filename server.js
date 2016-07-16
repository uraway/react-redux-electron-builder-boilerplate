/* global process */

import express from 'express';
import webpack from 'webpack';
import configuration from './webpack.development.config';
import hotMiddleware from 'webpack-hot-middleware';
import developmentMiddleware from 'webpack-dev-middleware';

const app = express();
const compiler = webpack(configuration);
const port = 3000;
const middleware = developmentMiddleware(compiler, {
  publicPath: configuration.output.publicPath,
  stats: { colors: true }
});

app.use(middleware);
app.use(hotMiddleware(compiler));

const server = app.listen(port, 'localhost', (error) => {
  if (error) {
    throw error;
  }
});

process.on('SIGTERM', () => {
  middleware.close();
  server.close(() => {
    process.exit(0);
  });
});
