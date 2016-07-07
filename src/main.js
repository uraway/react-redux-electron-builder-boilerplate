/* global __dirname,process,require */

const Electron      = require("electron"),
      Application   = Electron.app,
      BrowserWindow = Electron.BrowserWindow;

let window = null;

if (process.env.NODE_ENV === "development") {
  require("electron-debug")();
}

Application.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    Application.quit();
  }
});

Application.on("ready", () => {
  window = new BrowserWindow({
    "show"       : process.env.NODE_ENV === "development",
    "width"      : 896,
    "height"     : 512,
    "resizable"  : false,
    "fullscreen" : false
  });

  if (process.env.NODE_ENV !== "development") {
    window.webContents.on("did-finish-load", () => {
      window.show();
      window.focus();
    });
  }

  window.on("closed", () => {
    window = null;
  });

  if (process.env.NODE_ENV === "development") {
    window.loadURL(`file://${__dirname}/../src/index.html`);
  } else {
    window.loadURL(`file://${__dirname}/index.html`);
  }
});
