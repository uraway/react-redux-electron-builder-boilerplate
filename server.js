/* global process */

import Express from "express";
import Webpack from "webpack";
import Configuration from "./webpack.development.config";
import HotMiddleware from "webpack-hot-middleware";
import DevelopmentMiddleware from "webpack-dev-middleware";

const Application = Express(),
      Compiler    = Webpack(Configuration),
      Port        = 3000,
      WDM         = DevelopmentMiddleware(Compiler, {
        publicPath : Configuration.output.publicPath,
        stats      : { colors: true }
      });

Application.use(WDM);
Application.use(HotMiddleware(Compiler));

const Server = Application.listen(Port, "localhost", (error) => {
  if (error) {
    throw error;
  }
});

process.on("SIGTERM", () => {
  WDM.close();
  Server.close(() => {
    process.exit(0);
  });
});
