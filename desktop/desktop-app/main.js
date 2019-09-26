const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const log = require('electron-log');
let win = null;
log.transports.file.init();

log.info('starting main process');
log.info(JSON.stringify(process.argv));

const gotTheLock = app.requestSingleInstanceLock();
log.info(`Single Instance Lock requested: ${gotTheLock}`);
if (!gotTheLock) {
  log.info('did not get the lock, will terminate');
  app.quit();
} else {
  app.on('second-instance', (event, argv, workingDirectory) => {
    log.info('2nd instance requested');

    if (win) {

      if (win.isMinimized()) {
        win.restore();
      }
      win.focus();
      win.webContents.send('route', argv[1]);
    }
  });
}

ipcMain.on('get-args-async', (event, args)=> {
  event.reply('args-async', process.argv);
})

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 700,
    title: 'BASTA!2019 DEMO',
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  });
  win.loadFile(path.join(app.getAppPath(), 'renderer','index.html'));
  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
