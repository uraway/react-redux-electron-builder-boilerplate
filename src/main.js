const { app, BrowserWindow } = require('electron');

let window = null;

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  window = new BrowserWindow({
    show: process.env.NODE_ENV === 'development',
    width: 896,
    height: 512,
    resizable: false,
    fullscreen: false
  });

  if (process.env.NODE_ENV !== 'development') {
    window.webContents.on('did-finish-load', () => {
      window.show();
      window.focus();
    });
  }

  window.on('closed', () => {
    window = null;
  });

  if (process.env.NODE_ENV === 'development') {
    window.loadURL(`file://${__dirname}/../src/index.html`);
  } else {
    window.loadURL(`file://${__dirname}/index.html`);
  }
});
