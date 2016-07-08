const { app, BrowserWindow } = require('electron');

let mainWindow = null;

// utils
const isDevelopment = (process.env.NODE_ENV === 'development');

if (isDevelopment) {
  require('electron-debug')(); // eslint-disable-line global-require
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 896,
    height: 512,
  });

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (isDevelopment) {
    mainWindow.loadURL(`file://${__dirname}/../src/index.html`);
    mainWindow.openDevTools();
  } else {
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  }
});
