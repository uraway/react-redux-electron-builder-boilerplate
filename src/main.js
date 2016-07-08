import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import GhRelease from 'electron-gh-releases';

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

  function confirmAutoUpdate(updater) {
    dialog.showMessageBox({
      type: 'question',
      buttons: ['Update & Restart', 'Cancel'],
      title: 'Update Available',
      cancelId: 99,
      message: 'There is an update available. Would you like to update now?'
    }, (response) => {
      app.dock.hide();
      if (response === 0) {
        updater.install();
      }
    });
  }

  function checkAutoUpdate(showAlert) {
    const autoUpdateOptions = {
      repo: 'uraway/react-redux-electron-builder-boilerplate',
      currentVersion: app.getVersion()
    };

    const updater = new GhRelease(autoUpdateOptions);

    updater.on('error', (event, message) => {
      dialog.showErrorBox({
        title: 'ERROR',
        content: `Event: ${JSON.stringify(event)}. Message: ${message}`
      });
    });

    updater.on('update-downloaded', () => {
      confirmAutoUpdate(updater);
    });

    updater.check((err, status) => {
      if (err || !status) {
        if (showAlert) {
          dialog.showMessageBox({
            type: 'info',
            buttons: ['Close'],
            title: 'No update available',
            message: 'You are currently running the latest version.'
          });
        }
      }

      if (!err && status) {
        updater.download();
      }
    });
  }

  checkAutoUpdate(false);

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

  ipcMain.on('check-update', () => {
    checkAutoUpdate(true);
  });
});
